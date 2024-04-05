import BreadCrumbs from "@/Components/BreadCrumbs";
import withAuth from "../withAuth";
import { toast } from "react-hot-toast";
import { useContext, useState } from "react";
import { UserContext } from "@/contexts/UserContext";
import { useRouter } from "next/router";
import axios from "axios";
import { FaCircleArrowRight } from "react-icons/fa6";
import { FaArrowDown } from "react-icons/fa";
import containsBannedWords from "@/Components/BannedWords";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";


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
function EventSharing() {
  const { user, setUser } = useContext(UserContext);
  const [title, setTitle] = useState("");
  const [time, setTime] = useState(new Date());
  const [description, setDescription] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [username, setUsername] = useState("");
  const router = useRouter();

  const breadCrumbs = [
    { name: "Home", url: "/" },
    { name: "Information", url: "/information" },
    { name: "Event Sharing", url: "/information/EventSharing" },
  ];

  

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUser(localStorage.getItem("user"));
    console.log("User", user);
    setUsername(user.username);
    console.log("Username", username);


      if (
        containsBannedWords(title) ||
        containsBannedWords(description) ||
        containsBannedWords(street) ||
        containsBannedWords(city)
      ) {
        errorToast("Your event title, description, street, or city contains banned words.");
        return;
      }
  
    try {
      const response = await axios.post(`https://portgermanyserver.onrender.com/event/add`, {
        title: title,
        time: time,
        description: description,
        street: street,
        city: city,
        username: user.username,
      });

      if (response.data.success) {
        // Reset input fields
        setTitle("");
        setTime(new Date());
        setDescription("");
        setStreet("");
        setCity("");
        successToast("Event Added Successfully");
        window.location.reload();
      } else {
        console.error("Failed to add reply");
      }
    } catch (error) {
      console.error("Error adding reply:", error);
    }
  };

  function handleClick() {
    router.push("/information/allEvents");
  }

  return (
    <>
      <BreadCrumbs breadCrumbs={breadCrumbs} />
      <div>
        <h1 className="text-4xl font-bold mb-4 m-32 text-center">
          Share Events happening in your neighborhood!
        </h1>
        <p className="text-lg text-gray-600 text-center m-8">
          Meet new people and gain some new friends!
        </p>
      </div>
      <div
        onClick={handleClick}
        className="flex items-center align-center justify-center"
      >
        <button className="flex text-white p-6 m-4 bg-amber-400 rounded hover:text-black font-semibold">
          {" "}
          See all Events <FaCircleArrowRight className="ml-4 mt-1" />
        </button>
      </div>
      <div className="flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-bold my-4 mb-4 mx-32 text-center">OR</h1>
        <p className="text-lg flex items-center justify-center text-white text-center m-8 bg-amber-400 p-4 rounded font-semibold hover:text-black">
          Add an Event!
          <FaArrowDown className="ml-4 mt-1" />
        </p>
      </div>

      <form className="m-8 p-4 max-w-md mx-auto mt-8 p-8 border rounded-lg shadow-md bg-blue-50">
        <label className="block mb-4">
          <span className="text-gray-700">Title</span>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </label>

        <label className="block mb-4">
          <span className="text-gray-700">Time</span>
          <DatePicker
            selected={time}
            onChange={(date) => setTime(date)}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={15}
            dateFormat="MMMM d, yyyy h:mm aa"
            className="mt-1 p-2 w-full border rounded-md"
          />
        </label>

        <label className="block mb-4">
          <span className="text-gray-700">Description</span>
          <textarea
            type="text"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </label>

        <label className="block mb-4">
          <span className="text-gray-700">Street</span>
          <input
            type="text"
            id="street"
            value={street}
            onChange={(e) => setStreet(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </label>

        <label className="block mb-4">
          <span className="text-gray-700">City</span>
          <input
            type="text"
            id="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </label>

        <button
          type="submit"
          className="px-4 bg-amber-400 text-white p-2 rounded-md hover:bg-blue-950"
          onClick={handleSubmit}
        >
          Add Event!
        </button>
      </form>

    </>
  );
}

export default withAuth(EventSharing);
