import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { UserContext } from "@/contexts/UserContext";
import { useContext } from 'react';
import containsBannedWords from './BannedWords';


const errorToast=(message)=>{
  toast.error(message, {
    style:{
      borderLeft: '15px solid #960018'
    }
  })
 }
export default function ReplyComponent({ commentId, username }) {
    const [reply, setReply] = useState("");
    const [isFormVisible, setIsFormVisible] = useState(false);
    const [allReplies, setAllReplies] = useState([]);
    const [areRepliesVisible, setAreRepliesVisible] = useState(false);
  
    const [isEditing, setIsEditing] = useState(false);
    const [editedReply, setEditedReply] = useState("");
    const [editReplyId, setEditReplyId] = useState(null);
    const [numReplies, setNumReplies] = useState(0);


    const {user,setUser}=useContext(UserContext);
    
  
    const openEditPopup = (replyId, replyContent) => {
      setIsEditing(true);
      setEditReplyId(replyId);
      setEditedReply(replyContent);
    };
  
    const closeEditPopup = () => {
      setIsEditing(false);
      setEditReplyId(null);
      setEditedReply("");
    };

  const handleAddReply = async () => {
    const userId = localStorage.getItem("userId");
    if (containsBannedWords(reply)) {
      errorToast('Your reply contains banned words.');
      return;
    }
    try {
      const response = await axios.post(`https://portgermanyserver.onrender.com/reply/add/${commentId}`, {
        content: reply,
        commentId: commentId,
        username: user.username,
      });

      if (response.data.success) {
        toast.success("Response Added Successfully");
        setIsFormVisible(false);
        setReply("");

        setAllReplies((prevReplies) => [...prevReplies, response.data.reply]);
        setNumReplies((prevNumReplies) => prevNumReplies + 1);

        console.log("Reply added successfully", response.data.reply);
      } else {
        console.error("Failed to add reply");
      }
    } catch (error) {
      console.error("Error adding reply:", error);
    }
  };

  const handleCancelReply = () => {
    setIsFormVisible(false);
    setReply("");
  };

  useEffect(() => {
    const handleAllReplies = async () => {
      try {
        const response = await fetch(`https://portgermanyserver.onrender.com/reply/all/${commentId}`);
        const data = await response.json();

        if (data.success) {
          setAllReplies([...data.allReplies]);
          setNumReplies(data.allReplies.length);
          
        }
      } catch (error) {
        console.error("Error fetching replies:", error.message);
      }
    };

    if (commentId) {
        handleAllReplies();
    }
  }, [commentId]);

  const handleDeleteReply = async (replyId) => {
    try {
      const response = await axios.delete(
        `https://portgermanyserver.onrender.com/reply/delete/${replyId}`
      );
  
      console.log("response", response);
  
      if (response.data.success) {
        setAllReplies((prevReplies) =>
          prevReplies.filter((reply) => reply._id !== replyId)
        );
        toast.success('Successfully deleted!');
        setNumReplies((prevNumReplies) => prevNumReplies - 1);
      } else {
        console.log("Reply deletion failed:", response.data.message);
        // Implement error handling (e.g., show a message to the user)
      }
    } catch (error) {
      console.error("Error deleting reply:", error);
      // Implement error handling (e.g., show a message to the user)
    }
  };
  

  const handleEditReply = (replyId) => {
    
    setIsEditing(true);
    const selectedReply = allReplies.find((reply) => reply._id === replyId);
    setEditedReply(selectedReply.content);
    setEditReplyId(replyId);
  };
  
  const handleSaveEdit = async () => {
    if (containsBannedWords(editedReply)) {
      errorToast('Your question contains banned words.');
      return;
    }
    try {
      const updatedReplyData = {
        content: editedReply,
        
      };
  
      const response = await axios.put(`https://portgermanyserver.onrender.com/reply/edit`, {
  reply: {
    _id: editReplyId,
    content: editedReply,
  },
});
  
      console.log(response.data); // Log the server response
  
      if (response.data.success) {
        // Close the edit popup and update the comment locally
        closeEditPopup();
        setAllReplies((prevReplies) =>
          prevReplies.map((reply) =>
            reply._id === editReplyId ? { ...reply, content: editedReply } : reply
          )
        );
        toast.success('Reply updated successfully!');
      } else {
        console.log("Edit reply failed:", response.data.message);
        // Implement error handling (e.g., show a message to the user)
      }
    } catch (error) {
      console.error("Error editing reply:", error);
      // Implement error handling (e.g., show a message to the user)
    }
  };
return (
    <>
      <div className="s:flex s:flex-col s:items-center s:justify-center">
        <button
          className='mx-2 text-base'
          onClick={() => setIsFormVisible(!isFormVisible)}
        >
          {isFormVisible ? '' : 'Reply'}
        </button>
  
        {isFormVisible && (
          <form className='w-full'
            onSubmit={(e) => {
              e.preventDefault();
              handleAddReply();
            }}
          >
            <textarea
            className="w-full h-200 border border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500"
              type="text"
              placeholder="Your Reply..."
              value={reply}
              required
              onChange={(e) => setReply(e.target.value)}
            ></textarea>
            <button className='mx-2 s:mx-0 hover:text-green-400 text-base' type="submit">Reply</button>
            <button className='mx-2 s:mx-0 hover:text-amber-400 text-base' onClick={handleCancelReply} type="button">Cancel</button>
          </form>
        )}
  
        <br />
  
        <button
          className="mx-2 s:mx-0 mt-2 text-base"
          onClick={() => setAreRepliesVisible(!areRepliesVisible)}
        >
          {areRepliesVisible ? `Hide  (${numReplies})` : `Show Replies (${numReplies})`}
        </button>
  
        {areRepliesVisible && (
  <div className="py-2 text-sm block ">
    {allReplies.map((reply) => (
      <div key={reply._id} className="mb-3 rounded border border-solid border-gray-800 bg-white m-0 p-3">
        <div className="flex flex-col">
          <span className="s:text-xs text-gray-500 mb-1">Reply by {reply.username}:</span>
          <p className="text-gray-800">{reply.content}</p>
        </div>
        {reply.username === user.username && (
          <div className="flex justify-start mt-2">
            <button
              onClick={() => handleDeleteReply(reply._id)}
              className="s:text-xs hover:text-red-600 dark:text-gray-400 mr-2"
            >
              Delete
            </button>
            <button
              onClick={() => openEditPopup(reply._id, reply.content)}
              className="s:text-xs text-l text-blue-500 hover:text-blue-500 dark:text-gray-400"
            >
              Edit
            </button>
          </div>
        )}
      </div>
    ))}
  </div>
)}


        <div className={isEditing ? "overlay" : "hidden"} onClick={closeEditPopup}>
          
        </div>
        <div className={isEditing ? "edit-popup" : "hidden"}>
          <textarea
            value={editedReply}
            onChange={(e) => setEditedReply(e.target.value)}
            placeholder="Edit your reply..."
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
      </div>
    </>
  );
}