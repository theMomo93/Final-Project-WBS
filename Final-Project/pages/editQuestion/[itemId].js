import axios from "axios";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import containsBannedWords from "@/Components/BannedWords";
import { toast } from 'react-hot-toast';

const errorToast = (message) => {
  toast.error(message, {
    style: {
      borderLeft: '15px solid #960018'
    }
  });
};

const AddQuestion = () => {
  const router = useRouter();
  const { itemId } = router.query;

  console.log("ITEM_ID ", itemId);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`https://portgermanyserver.onrender.com/question/get/one?id=${itemId}`);
      console.log("response", response);
      if (response.data.success) {
        setQuestion(response.data.question);
      }
    };

    if (itemId) {
      fetchData();
    }
  }, [itemId]);

  const [question, setQuestion] = useState({
    itemId: "",
    title: "",
    content: "",
  });

  const handleSave = async () => {
    // Check for banned words in title and content
    if (containsBannedWords(question.title) || containsBannedWords(question.content)) {
      errorToast('Your question contains banned words.');
      return;
    }

    try {
      const response = await axios.put("https://portgermanyserver.onrender.com/question/edit", {
        question,
      });
      console.log("🚀 ~ response:", response);

      if (response.data.success) router.push("/forum");
    } catch (error) {
      console.error("Error editing question:", error);
      // Handle error (e.g., show a message to the user)
    }
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
            value={question.title}
            onChange={(e) => setQuestion({ ...question, title: e.target.value })}
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
            value={question.content}
            onChange={(e) => setQuestion({ ...question, content: e.target.value })}
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
  );
};

export default AddQuestion;
