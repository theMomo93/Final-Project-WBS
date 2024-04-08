import React from "react";
import BreadCrumbs from "@/Components/BreadCrumbs";
import withAuth from "../withAuth";
import { toast } from "react-hot-toast";
import Footer from "@/Components/Footer";
import { useContext, useState } from "react";
import { UserContext } from "@/contexts/UserContext";
import axios from "axios";
import { FaCircleArrowRight } from "react-icons/fa6";
import { FaArrowDown } from "react-icons/fa";
import containsBannedWords from "@/Components/BannedWords";
import Link from "next/link";
import EventForm from "@/Components/EventForm";


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
      
      
        successToast("Event Added Successfully");
        window.location.reload();
      } else {
        console.error("Failed to add reply");
      }
    } catch (error) {
      console.error("Error adding reply:", error);
    }
  };

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
        
        className="flex items-center align-center justify-center"
      >
        <Link
          href="/information/allEvents"
         className="flex text-white p-6 m-4 bg-amber-400 rounded hover:text-black font-semibold">
          {" "}
          See all Events <FaCircleArrowRight className="ml-4 mt-1" />
        </Link>
      </div>
      <div className="flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-bold my-4 mb-4 mx-32 text-center">OR</h1>
        <p className="text-lg flex items-center justify-center text-white text-center m-8 bg-amber-400 p-4 rounded font-semibold hover:text-black">
          Add an Event!
          <FaArrowDown className="ml-4 mt-1" />
        </p>
      </div>
      <EventForm
      title={title}
      setTitle={setTitle}
        time={time}
        setTime={setTime}
        description={description}
        setDescription={setDescription}
        street={street}
        setStreet={setStreet}
        city={city}
        setCity={setCity}
        handleSubmit={handleSubmit}
      />

      <Footer />
    </>
  );
}

export default withAuth(EventSharing);
