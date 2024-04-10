import React, { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import withAuth from "./withAuth";
import BreadCrumbs from "@/Components/BreadCrumbs";
import { FaArrowDown } from "react-icons/fa";
import CommentNumber from "@/Components/CommentNumber";
import { toast } from "react-hot-toast";
import { UserContext } from "@/contexts/UserContext";
import Footer from "@/Components/Footer";

const Forum = (props) => {
  const router = useRouter();
  const breadCrumbs = [{ name: "Forum", url: "/forum" }];

  const [questions, setQuestions] = useState([]);
  const [username, setUsername] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const { user, setUser } = useContext(UserContext);

  const errorToast = (message) => {
    toast.error(message, {
      style: {
        borderLeft: "15px solid #960018",
      },
    });
  };
  const successToast = (message) => {
    toast.success(message, {
      style: {
        borderLeft: "15px solid #28a745",
      },
    });
  };

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
      errorToast("Please Register and Login to access");
    }
  }, []);

  //DELETE FUNCTIONALITY

  const handleDeleteQuestion = async (itemId) => {
    try {
      const response = await axios.delete(
        `https://portgermanyserver.onrender.com/question/delete/${itemId}`
      );
      console.log("🚀 ~ response:", response);

      if (response.data.success) {
        // Assuming deleteQuestion is a function that handles updating the UI after deletion
        setQuestions((prevQuestions) =>
          prevQuestions.filter((item) => item._id !== itemId)
        );
        successToast("Question deleted successfully!");
      }
    } catch (error) {
      console.error("Error deleting question:", error);
      // Handle error appropriately (e.g., show an error message to the user)
    }
  };

  // GET ALL QUESTIONS
  useEffect(() => {
    console.log("GET ALL QUestions is running");
    const fetchData = async () => {
      const response = await fetch(
        "https://portgermanyserver.onrender.com/question/get/all"
      );
      const data = await response.json();
      console.log("This is data 1", data);

      if (data.success) setQuestions([...data.allQuestions]);
    };
    fetchData();
  }, []);

  function handleClick() {
    router.push("/AddQuestion");
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

  const filteredQuestions = questions.filter(
    (item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.username.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <BreadCrumbs breadCrumbs={breadCrumbs} />
      <div className="w-full max-w-screen-xl mx-auto mt-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center text-center m-3">
          <h1 className="text-4xl font-bold mx-4 sm:mx-0 mb-4 text-center">
            Forum and Rules:
          </h1>
          <ol className="mb-4 text-justify list-decimal">
            {" "}
            <li className="text-2xl">
              <span className="font-semibold text-2xl hover:amber-400">
                Be Respectful:
              </span>{" "}
              Treat others courteously, avoiding personal attacks and offensive
              language.
            </li>
            <li className="text-2xl">
              <span className="font-semibold text-2xl">Stay On Topic:</span>{" "}
              Contribute relevantly to discussions and start new threads for
              different topics.
            </li>
            <li className="text-2xl">
              <span className="font-semibold text-2xl">Avoid Spam:</span>{" "}
              Refrain from excessive self-promotion or irrelevant content.
            </li>
            <li className="text-2xl">
              <span className="font-semibold text-2xl">
                Use Appropriate Language:
              </span>{" "}
              Maintain a professional and positive tone in your communication.
            </li>
            <li className="text-2xl">
              <span className="font-semibold text-2xl">Respect Privacy:</span>{" "}
              Avoid sharing personal information without consent and respect
              confidentiality.
            </li>
          </ol>

          <p className="text-xl underline mb-2">Ask Your Questions here: </p>
          <FaArrowDown className="text-2xl" />
          <button
            className="w-full sm:w-96 text-white bg-amber-400 hover:text-black font-bold py-2 px-4 rounded mt-4"
            onClick={handleClick}
          >
            Ask Question
          </button>
        </div>
        <div className="flex flex-col items-center justify-end text-center pt-2 pb-4 mt-2">
          <div className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="absolute w-6 h-6 text-gray-500 top-1/2 left-3 transform -translate-y-1/2 mt-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
            <input
              type="text"
              placeholder="Search questions..."
              className="w-full max-w-xs py-2 pl-10 pr-4 border rounded mt-4"
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="w-full sm:w-10/12 m-4 sm:m-8">
            <div className="border rounded-md p-4 sm:p-12 shadow-md w-full bg-gray-100">
              {filteredQuestions.map((item) => (
                <div
                  key={item._id}
                  className="mb-4 shadow-md m-2 flex flex-col justify-between relative bg-white hover:bg-blue-50 "
                >
                  <h2 className="text-xl font-bold mb-2 ml-2 p-4">
                    {item.title}
                    <span className="text-xs font-light mb-2 ml-4">
                      posted by {item.username}
                    </span>
                  </h2>
                  <hr className="w-1/4 ml-4 h-1 bg-blue-900 mr-2" />
                  <p className="text-gray-600 p-4 mt-2 ml-2 ">{item.content}</p>
                  <div className="flex flex-col font-normal ml-4"></div>

                  <div className="flex-wrap items-start justify-start shadow-md">
                    <h3
                      onClick={() => handleOpenPost(item._id)}
                      className="mr-4 block px-4 py-2 text-gray-600 rounded font-semibold m-2 flex items-center"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6 mr-2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"
                        />
                      </svg>
                      <CommentNumber questionId={item._id} />
                    </h3>

                    {item.username === user.username && (
                      <div className="ml-2 flex items-center ">
                        <button
                          onClick={() => handleEdit(item._id)}
                          className="block px-2 sm:px-4 py-2 text-gray-600 hover:text-blue-600 m-2"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDeleteQuestion(item._id)}
                          className="block px-2 sm:px-4 py-2 text-gray-600 hover:text-red-600 m-2"
                        >
                          Delete
                        </button>
                      </div>
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
