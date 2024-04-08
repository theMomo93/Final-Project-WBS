import React, { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { toast } from 'react-hot-toast';
import BreadCrumbs from "@/Components/BreadCrumbs";
import QuestionComponent from "@/Components/QuestionComponent";
import CommentComponent from "@/Components/CommentComponent";
import { UserContext } from "@/contexts/UserContext";
import containsBannedWords from "@/Components/BannedWords";
import Footer from "@/Components/Footer";




export default function OpenPost() {
  const router = useRouter();

  const { itemId } = router.query;
  const [comment, setComment] = useState("");
  const [allComments, setAllComments] = useState([]);
  

  const [isEditing, setIsEditing] = useState(false);
  const [editedComment, setEditedComment] = useState("");
  const [editCommentId, setEditCommentId] = useState(null);
  const [username, setUsername] = useState("");
  const {user,setUser}=useContext(UserContext);

  const errorToast=(message)=>{
    toast.error(message, {
      style:{
        borderLeft: '15px solid #960018'
      }
    })
   }
    const successToast = (message) => {
      toast.success(message, {
        style: {
          borderLeft: '15px solid #28a745'
        },
      });
    };

  useEffect(() => {
    // Check if localStorage is available
    const user = typeof window !== "undefined" ? localStorage.getItem("user") : null;

    if (user) {
      const userObject = JSON.parse(user);
      setUsername(userObject.username);
      console.log("This is open post username",username)
    }
  }, []);



  const breadCrumbs = [
    { name: "Forum", url: "/Forum" },
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
          `https://portgermanyserver.onrender.com/question/get/one?id=${itemId}`
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
    //const user = localStorage.getItem("user");
    try {
     if (containsBannedWords(comment)) {
      errorToast('Your comment contains banned words.');
      return;
    }
      
      const response = await axios.post("https://portgermanyserver.onrender.com/comment/add", {
        content: comment,
        questionId: itemId,
        userId: user._id,
        username: user.username,
      });
      
      console.log("This is username:" ,username)
      if (response.data.success) {
        const newComment = response.data.comment; // Assuming your API returns the newly added comment
        setAllComments((prevComments) => [...prevComments, newComment]);

        successToast('Comment added successfully!');
        router.push(`/Forum/${user?._id}`);

    }
      console.log("🚀 ~ response:", response);

      
    } catch (error) {
      console.error("Error adding comment:", error);
      
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://portgermanyserver.onrender.com/comment/get/all/${itemId}`
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
    window.scrollTo({ top: 400, behavior: 'smooth' });
    
  };

  const handleSaveEdit = async () => {
    if (containsBannedWords(editedComment)) {
      errorToast('Your comment contains banned words.');
      return;
    }
    try {
      const updatedCommentData = {
        content: editedComment,
        // Add other properties as needed
      };
  
      const response = await axios.put(`https://portgermanyserver.onrender.com/comment/edit`, {
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
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
        successToast('Edit Successful!', { autoClose: 5000 });
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
        `https://portgermanyserver.onrender.com/comment/delete/${commentId}`
      );
  
      console.log("response", response);
  
      if (response.data.success) {
        setAllComments((prevComments) =>
          prevComments.filter((comment) => comment._id !== commentId)
        );
        successToast('Delete Comment Successful!');
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
  <div className="w-10/12 m-8 ">
    <div className="bg-blue-50 border rounded-md p-8 shadow-md w-full">
      <QuestionComponent question={question} />
      <div>
        <h3
          className="block text-xl font-semibold px-4 py-2 text-gray-600 "
        >
          Comments section:
        </h3>
        <form className="flex flex-col">
          <label
            htmlFor="comment"
            className="block text-gray-600 mb-2"
          ></label>
          <textarea
            placeholder="Your Comment..."
            value={comment}
            required
            onChange={(e) => setComment(e.target.value)}
            id="comment"
            name="comment"
            className="w-200 h-200 border border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500"
          ></textarea>
          <button 
          type="button"
            onClick={(e) => handleAddComment(e)}
            className="bg-blue-500 mb-8 text-white p-2 rounded hover:bg-amber-400 text-black focus:outline-none mt-2 w-36"
          >
            Leave Comment
          </button>
        </form>
        <div className={isEditing ? "overlay" : "hidden"} onClick={closeEditPopup}>
        
        </div>
        <div className={isEditing ? "edit-popup" : "hidden"}>
          <textarea
            value={editedComment}
            onChange={(e) => setEditedComment(e.target.value)}
            className="w-full h-32 border border-gray-800 p-2 rounded mb-2 focus:outline-none focus:border-blue-500"
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
        <CommentComponent 
  allComments={allComments} 
  handleDeleteComment={handleDeleteComment} 
  handleEditComment={handleEditComment}
  username={username}
/>        
      </div>
    </div>
  </div>
  <Footer/>
</>
  )
}
