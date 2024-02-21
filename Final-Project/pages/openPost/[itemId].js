import axios from "axios";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import BreadCrumbs from "@/components/BreadCrumbs";

export default function OpenPost() {
  const router = useRouter();
  const { itemId } = router.query;
  const [comment, setComment] = useState("");
  const [allComments, setAllComments] = useState([]);

  const [isEditing, setIsEditing] = useState(false);
  const [editedComment, setEditedComment] = useState("");
  const [editCommentId, setEditCommentId] = useState(null);


  const [username, setUsername] = useState("");

  useEffect(() => {
    // Check if localStorage is available
    const user = typeof window !== "undefined" ? localStorage.getItem("user") : null;

    if (user) {
      const userObject = JSON.parse(user);
      setUsername(userObject.username);
    }
  }, []);



  const breadCrumbs = [
    { name: "Forum", url: "/forum" },
    { name: "Question", url: `/openPost/${itemId}` },
  ];

  const [question, setQuestion] = useState({
    itemId: "",
    title: "",
    content: "",
  });

  const openEditPopup = (commentContent) => {
    setIsEditing(true);
    setEditedComment(commentContent);
  };

  const closeEditPopup = () => {
    setIsEditing(false);
    setEditedComment("");
  };


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/question/get/one?id=${itemId}`
        );
        console.log("response", response);
        if (response.data.success) {
          setQuestion(response.data.question);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (itemId) {
      fetchData();
    }
  }, [itemId]);

  const handleAddComment = async () => {
    const userId = localStorage.getItem("userId"); // Assuming user ID is stored in local storage
    const user = localStorage.getItem("user");

    try {
      // Corrected the variable name here
      const userObject = JSON.parse(user);
      const username = userObject.username;

      console.log("Username from local storage:", username);

      const response = await axios.post("http://localhost:5000/comment/add", {
        content: comment,
        questionId: itemId,
        userId: userId,
        username: username,
      });

      console.log("🚀 ~ response:", response);

      
    } catch (error) {
      console.error("Error adding comment:", error);
      // Implement error handling (e.g., show a message to the user)
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/comment/get/all/${itemId}`
        );
        const data = await response.json();

        if (data.success) {
          setAllComments([...data.allComments]);
        }
      } catch (error) {
        console.error("Error fetching comments:", error.message);
      }
    };

    if (itemId) {
      fetchData();
    }
  }, [itemId]);
  const handleEditComment = (commentId) => {
    // Open the edit popup with the current comment content
    const selectedComment = allComments.find((comment) => comment._id === commentId);
    setEditCommentId(commentId);
    openEditPopup(selectedComment.content);
  };

  const handleSaveEdit = async () => {
    try {
      const updatedCommentData = {
        content: editedComment,
        // Add other properties as needed
      };
  
      const response = await axios.put(`http://localhost:5000/comment/edit`, {
        commentId: editCommentId,  // Send the comment ID in the request body
        comment: updatedCommentData,
      });
  
      console.log(response.data); // Log the server response
  
      if (response.data.success) {
        // Close the edit popup and update the comment locally
        closeEditPopup();
        setAllComments((prevComments) =>
          prevComments.map((comment) =>
            comment._id === editCommentId ? { ...comment, content: editedComment } : comment
          )
        );
      } else {
        console.log("Edit comment failed:", response.data.message);
        // Implement error handling (e.g., show a message to the user)
      }
    } catch (error) {
      console.error("Error editing comment:", error);
      // Implement error handling (e.g., show a message to the user)
    }
  };
  
  const handleDeleteComment = async (commentId) => {
    try {
      
  
      const response = await axios.delete(
        `http://localhost:5000/comment/delete/${commentId}`
      );
  
      console.log("response", response);
  
      if (response.data.success) {
        setAllComments((prevComments) =>
          prevComments.filter((comment) => comment._id !== commentId)
        );
      } else {
        console.log("Comment deletion failed:", response.data.message);
        // Implement error handling (e.g., show a message to the user)
      }
    } catch (error) {
      console.error("Error deleting comment:", error);
      // Implement error handling (e.g., show a message to the user)
    }
  };
  return (
    <>
      <BreadCrumbs breadCrumbs={breadCrumbs} />
      <div className="w-10/12 m-8">
        <div className="bg-white border rounded-md p-8 shadow-md w-full">
          <div className="mb-4">
            <label htmlFor="title" className="block text-gray-600 mb-2"></label>
            <h2 className="text-2xl font-semibold mb-2">
              {question.title}{" "}
              <span className="text-xs font-light mb-2 ml-4">
                posted by {question.username}
              </span>
            </h2>
          </div>
          <div className="mb-4">
            <label
              htmlFor="content"
              className="block text-gray-600 mb-2"
            ></label>
            <p className="my-8 text-xl text-gray-800">{question.content}</p>
          </div>
          <hr />

          <div>
            <h3
              
              className="block text-xl font-semibold px-4 py-2 text-gray-600 "
            >
              Comment section:
            </h3>
<div className={isEditing ? "overlay" : "hidden"} onClick={closeEditPopup}>
        {/* Clicking outside the edit popup will close it */}
      </div>
      <div className={isEditing ? "edit-popup" : "hidden"}>
        <textarea
          value={editedComment}
          onChange={(e) => setEditedComment(e.target.value)}
          placeholder="Edit your comment..."
          className="w-full h-32 border border-gray-300 p-2 rounded mb-2 focus:outline-none focus:border-blue-500"
        ></textarea>
        <button
          onClick={handleSaveEdit}
          className="bg-blue-500 text-white p-2 rounded hover:bg-amber-400 text-black focus:outline-none mr-2"
        >
          Save
        </button>
        <button
          onClick={closeEditPopup}
          className="bg-gray-300 text-black p-2 rounded hover:bg-gray-400 focus:outline-none"
        >
          Cancel
        </button>
      </div>
            <div className="block px-4 py-2 text-l">
            {allComments.map((comment) => (
  <div key={comment._id} className="m-6 hover:bg-gray-100 p-4">
    <p className="text-xl">{comment.content} </p>
    <span className="text-xs font-light mb-2 ml-4"> by {comment.username} </span>
    
    {comment.username === username && (
      <>
      <button
        onClick={() => handleDeleteComment(comment._id)}
        className="block px-4 py-2 text-red-600 hover:bg-gray-100"
      >
        Delete
      </button>
      <button 
      onClick={() => handleEditComment(comment._id)}
        className="block px-4 py-2 text-red-600 hover:bg-gray-100"
        >Edit
        
      </button>
      </>
    )}
  </div>
))}

              
            </div>
          </div>
          <form className="flex flex-col">
            <label
              htmlFor="comment"
              className="block text-gray-600 mb-2"
            ></label>
            <textarea
              placeholder="Your Comment..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              id="comment"
              name="comment"
              className="w-200 h-200 border border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500"
            ></textarea>
            <button
              onClick={handleAddComment}
              className="bg-blue-500 text-white p-2 rounded hover:bg-amber-400 text-black focus:outline-none mt-2 w-36"
            >
              Leave Comment
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
