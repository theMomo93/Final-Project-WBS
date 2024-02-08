import axios from "axios";
import { useRouter } from "next/router";
import React from "react";
import { useState } from "react";


export default function addQuestion() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
const router = useRouter();

  const handleSave = async ()=> {
    const response = await axios.post("http://localhost:5000/question/add", {
        title,
        content,
      });
      console.log("🚀 ~ response:", response);
      router.push('/forum');
    };
  
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-semibold mb-4">Forum</h1>
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-600 mb-2">
            Title:
          </label>
          <input
          value={title}
          onChange={(e)=> setTitle(e.target.value)}
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
          onChange={(e)=> setContent(e.target.value)}
            id="content"
            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500"
            rows="4"
          ></textarea>
        </div>
        <button 
        onClick={handleSave}
        className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 focus:outline-none">
          Ask Question
        </button>
      </div>
    </div>
  );
}
