import axios from "axios";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import BreadCrumbs from "@/components/BreadCrumbs";

export default function AddQuestion() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [username, setUsername] = useState("");

  const breadCrumbs =[
    {name: "Forum", url: "/forum"},
    {name: "Add Question", url: "/addQuestion"},
      ]


  const router = useRouter();

  useEffect(() => {
    // Retrieve username from local storage
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser && storedUser.username) {
      setUsername(storedUser.username);
    }
  }, []);

  const handleSave = async () => {
    try {
      const response = await axios.post("http://localhost:5000/question/add", {
        title,
        content,
        username,
      });

      console.log("🚀 ~ response:", response);
      router.push('/forum');
    } catch (error) {
      console.error("Error posting question:", error);
      // Handle error (e.g., show a message to the user)
    }
  };

  return (
    <>
     <BreadCrumbs breadCrumbs={breadCrumbs}/>
    <div className="flex items-center justify-center h-screen bg-white-100">
      <div className="bg-blue-50 p-8 rounded-lg shadow-md w-4/5">
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
            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="content" className="block text-gray-600 mb-2">
            Content:
          </label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            id="content"
            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500"
            rows="4"
          ></textarea>
        </div>
        <button
          onClick={handleSave}
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 focus:outline-none"
        >
          Ask Question
        </button>
      </div>
    </div>
    </>
  );
}
