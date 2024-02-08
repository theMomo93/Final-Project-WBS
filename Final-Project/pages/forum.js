import React from 'react'
import { useState, useEffect } from "react";
import { useRouter } from 'next/router';


export default function forum() {
    const[questions, setQuestions] = useState([]);
    const router = useRouter();

useEffect(()=>{
    const fetchData = async () => {
        const response = await fetch ("http://localhost:5000/question/get/all");
        const data = await response.json();
        console.log("This is data", data);

        if(data.success) setQuestions([...data.allQuestions])
    };
    fetchData();
},[]);


function handleClick(){
    router.push('/addQuestion');
}

return (
    <div className="container mx-auto mt-8">
      <div className="flex items-center justify-center">
        <div className="w-full max-w-md">
          <div className="bg-white border rounded-md p-4 shadow-md">
            {questions.map((item) => (
              <div key={item._id} className="mb-4">
                <h2 className="text-xl font-bold mb-2">{item.title}</h2>
                <p className="text-gray-600">{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-4 text-center">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleClick}
        >
          Ask Question
        </button>
      </div>
    </div>
  );
}
