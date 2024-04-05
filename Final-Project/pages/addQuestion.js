import axios from "axios";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import BreadCrumbs from "@/Components/BreadCrumbs";
import { toast } from 'react-hot-toast';
import { UserContext } from '@/contexts/UserContext';
import { useContext } from "react";
import Footer from "@/Components/Footer";
import containsBannedWords from "@/Components/BannedWords";

export default function AddQuestion() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [username, setUsername] = useState("");
  const{user, setUser}=useContext(UserContext); // THIS IS IMPORTANT STUFF RIGHT


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

  const breadCrumbs = [
    { name: "Forum", url: "/forum" },
    { name: "Add Question", url: "/addQuestion" },
  ];

  const router = useRouter();


    // Scroll to the middle of the page when the component mounts


  const handleSave = async () => {
    try {
      if (!title || !content) {
        // Display a notification when fields are empty
        errorToast('Please fill in all fields.');
        return;
      }
      if (containsBannedWords(title) || containsBannedWords(content)) {
        errorToast('Your question contains banned words.');
        return;
      }

      
      if (user) {
        const storedUser = JSON.parse(localStorage.getItem("User"));
    
        const response = await axios.post("https://portgermanyserver.onrender.com/question/add", {
          title,
          content,
          username: user.username,
        });
        
        console.log("🚀 ~ response:", response);

        router.push('/forum');
        successToast('Question asked successfully!');
      } else {
        // Handle the case when user data is not available
        console.error("User data not found in localStorage");

      }
    } catch (error) {
      console.error("Error posting question:", error);
      // Handle error (e.g., show a message to the user)
    }
  };
  function handleCancel(){
    router.back();
  }

  return (
    <>
      <BreadCrumbs breadCrumbs={breadCrumbs} />
      <div className="flex items-center justify-center h-screen bg-white-100">
        <div className="bg-blue-50 p-12 rounded-lg shadow-xl w-4/5">
          <h1 className="text-2xl font-semibold mb-4">Ask your question here:</h1>

          <div className="mb-4 ">
            <label htmlFor="title" className="block text-gray-600 mb-2">
              Title:
            </label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              id="title"
              aria-required
              className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="content" className="block text-gray-600 mb-2">
              Content:
            </label>
            <textarea
              value={content}
              aria-required
              onChange={(e) => setContent(e.target.value)}
              id="content"
              className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500"
              rows="4"
            ></textarea>
          </div>
          <button
            onClick={handleSave}
            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 focus:outline-none mr-8"
          >
            Ask Question
          </button>
          <button
            onClick={handleCancel}
            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 focus:outline-none"
          >
            Cancel
          </button>
        </div>
      </div>
      <Footer/>
    </>
  );
}
