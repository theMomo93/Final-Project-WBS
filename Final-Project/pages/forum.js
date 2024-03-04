import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Footer from "@/components/Footer";
import axios from "axios";
import withAuth from "./withAuth";
import BreadCrumbs from "@/components/BreadCrumbs";
import { FaArrowDown } from "react-icons/fa";

const Forum = (props) => {
  
  const breadCrumbs = [{ name: "Forum", url: "/forum" }];

  const [questions, setQuestions] = useState([]);
  const [username, setUsername] = useState("");
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  useEffect(() => {
    try {
      const user = localStorage.getItem("user");
      if (user) {
        const userObject = JSON.parse(user);
        setUsername(userObject.username);
      }
    } catch (error) {
      console.error("Error parsing user data:", error);
      // Handle the error as needed
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
        setQuestions((prevQuestions) =>
          prevQuestions.filter((item) => item._id !== itemId)
        );
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
  function handleEdit(itemId) {
    router.push(`/editQuestion/${itemId}`);
  }
  function handleOpenPost(itemId) {
    router.push(`/openPost/${itemId}`);
  }
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };
  const filteredQuestions = questions.filter((item) =>
  item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
  item.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
  item.username.toLowerCase().includes(searchQuery.toLowerCase())
);
  return (
    <>
      <BreadCrumbs breadCrumbs={breadCrumbs} />
      <div className="w-full max-w-screen-xl mx-auto mt-8">
        <div className="flex flex-col items-center justify-center text-center">
        
          <h1 className="text-4xl font-bold mx-28 mb-4 text-center">
            Forum and Rules:</h1>
            <ol className="mb-4 text-justify list-decimal ">
              <li className="text-2xl">
               <span className="font-semibold text-2xl hover:amber-400">Be Respectful:</span>  Treat others courteously, avoiding personal
                attacks and offensive language.
              </li>
              <li className="text-2xl">
                <span className="font-semibold text-2xl">Stay On Topic:</span> Contribute relevantly to discussions and start
                new threads for different topics.
              </li>
              <li className="text-2xl">
                <span className="font-semibold text-2xl">Avoid Spam:</span> Refrain from excessive self-promotion or irrelevant
                content.
              </li>
              <li className="text-2xl">
               <span className="font-semibold text-2xl">Use Appropriate Language:</span>  Maintain a professional and positive
                tone in your communication.
              </li>
              <li className="text-2xl">
               <span className="font-semibold text-2xl">Respect Privacy:</span>  Avoid sharing personal information without
                consent and respect confidentiality.
              </li>
            </ol>
          
          <p className="text-xl underline mb-2">Ask Your Questions here: </p><FaArrowDown className="text-2xl"/>
          <button
            className="w-96 text-white bg-amber-400 hover:text-black font-bold py-2 px-4 rounded mt-4"
            onClick={handleClick}
          >
            Ask Question
          </button>
          
        </div>
        <div className="flex flex-col items-center justify-end text-center pt-2 pb-4">
  <input
    type="text"
    placeholder="Search questions..."
    className="w-full max-w-xs py-2 px-4 border rounded mt-4"
    value={searchQuery}
    onChange={handleSearchChange}
  />
</div>


        <div className="flex items-center justify-center">
          <div className="w-10/12 m-8">
            <div className=" border rounded-md p-12 shadow-md w-full bg-gray-100">
              {filteredQuestions.map((item) => (
                <div
                  key={item._id}
                  onClick={() => handleOpenPost(item._id)}
                  className="mb-4 shadow-md m-2 flex flex-col justify-between relative bg-white hover:bg-blue-50 "
                >
                  <h2 className="text-xl font-bold mb-2  p-4">
                    {item.title}
                    <span className="text-xs font-light mb-2 ml-4">
                      posted by {item.username}
                    </span>
                  </h2>
                  <hr className="w-1/4 ml-4 h-1 bg-blue-900" />
                  <p className="text-gray-600 p-4 mt-2">{item.content}</p>
                  <div className="flex flex-col font-normal ml-4"></div>

                  <div className="flex items-start justify-start shadow-md">
                    <h3
                      onClick={() => handleOpenPost(item._id)}
                      className="mr-4 block px-4 py-2 text-gray-600  rounded font-semibold m-2"
                    >
                      Comments 
                    </h3>

                    {item.username === username && (
                      <>
                        <button
                          onClick={() => handleEdit(item._id)}
                          className="block px-4 py-2 text-gray-600 hover:text-blue-600 m-2"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDeleteQuestion(item._id)}
                          className="block px-4 py-2 text-gray-600 hover:text-red-600 m-2"
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

        
      </div>
      <Footer />
    </>
  );
};

export default withAuth(Forum);
