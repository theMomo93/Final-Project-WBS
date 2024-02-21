import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Footer from "@/components/Footer";
import axios from "axios";
import withAuth from "./withAuth";
import BreadCrumbs from "@/components/BreadCrumbs";


const Forum = (props) => {
  const breadCrumbs =[
    {name: "Forum", url: "/forum"},
      ]

  const [questions, setQuestions] = useState([]);
  const [username, setUsername] = useState("");
   const router = useRouter();
   
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      const userObject = JSON.parse(user);
      setUsername(userObject.username);
    }
  }, []);
  
//DELETE FUNCTIONALITY

  const handleDeleteQuestion = async (itemId) => {
    try {
      
      const response = await axios.delete(
        `http://localhost:5000/question/delete/${itemId}`
      );
      console.log("🚀 ~ response:", response);

      if (response.data.success) {
        // Assuming deleteQuestion is a function that handles updating the UI after deletion
        setQuestions((prevQuestions) => prevQuestions.filter((item) => item._id !== itemId));
      }
    } catch (error) {
      console.error("Error deleting question:", error);
      // Handle error appropriately (e.g., show an error message to the user)
    }
  };


// GET ALL QUESTIONS
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:5000/question/get/all");
      const data = await response.json();
      console.log("This is data", data);

      if (data.success) setQuestions([...data.allQuestions]);
    };
    fetchData();
  }, []);
  //GET USERNAME
  const getUsername = async (userId) => {
    try {
      const userResponse = await fetch(`http://localhost:5000/user/${userId}`);
      const userData = await userResponse.json();

      if (userData.success) {
        // Assuming user object has a username property
        return userData.user.username;
      } else {
        return null; // Handle the case when user data is not available
      }
    } catch (error) {
      console.error("Error fetching user information:", error);
      return null;
    }
  };



function handleClick() {
    router.push("/addQuestion");
  }
function handleEdit(itemId){
    router.push(`/editQuestion/${itemId}`);
}
function handleOpenPost(itemId){
  router.push(`/openPost/${itemId}`)
}
  return (
    <>
     <BreadCrumbs breadCrumbs={breadCrumbs}/>
    <div className="w-screen mt-8">
      <div className="flex flex-col items-center justify-center text-center">
        <h1>Forum</h1>
        <p>Here you can ask questions</p>
        <button
          className="w-96 text-white bg-amber-400 hover:text-black font-bold py-2 px-4 rounded mt-4"
          onClick={handleClick}
        >
          Ask Question
        </button>
      </div>

      <div className="flex items-center justify-center">
        <div className="w-10/12 m-8">
          <div className="bg-white border rounded-md p-8 shadow-md w-full">
            {questions.map((item) => (
              <div
                key={item._id}
                className="mb-4 shadow-md m-2 flex flex-col justify-between relative"
              >
                
                <h2 className="text-xl font-bold mb-2  p-4">{item.title}
                 <span className="text-xs font-light mb-2 ml-4">posted by {item.username}
                 </span> </h2>
                <hr className="w-16 ml-4" />
                <p className="text-gray-600 p-4 mt-2">{item.content}</p>
                <div className="flex flex-col font-normal ml-4">
                  
                  
                </div> 
                
                <div className="flex items-end justify-end shadow-md">
                  
                <h3 onClick={() => handleOpenPost(item._id)} className="mr-28 block px-4 py-2 text-gray-600 hover:bg-gray-100">Open Thread</h3>

                {item.username === username && (
                      <>
                  <button
                  onClick={() => handleEdit(item._id)}
                   
                  className="block px-4 py-2 text-gray-600 hover:bg-gray-100">
                      Edit
                    </button>
                    <button
                      
                      onClick={() => handleDeleteQuestion(item._id)}
                      className="block px-4 py-2 text-red-600 hover:bg-gray-100"
                    >
                      Delete
                    </button>
                    </>
                    )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-4 text-center"></div>

      <Footer />
    </div>
    </>
  );
}

export default withAuth(Forum);
