import { useState, useEffect } from "react";
import BreadCrumbs from "@/Components/BreadCrumbs";
import axios from "axios";
import { toast } from "react-hot-toast";
import { IoSearchSharp } from "react-icons/io5";
import EventComponent from "@/Components/EventComponent";
import containsBannedWords from "@/Components/BannedWords";

export default function AllEvents() {
  const [allEvents, setAllEvents] = useState([]);
  const [searchCity, setSearchCity] = useState("");
  const [searchTime, setSearchTime] = useState("");
  const [editEventId, setEditEventId] = useState(null);
  const [currentTime, setCurrentTime] = useState('');

// Reload the window



  const [editedEvent, setEditedEvent] = useState({
    title: "",
    description: "",
    time: "",
    city: "",
    street: "",
  });
  //EDIT FUNCTION

  const handleEditEvent = (eventId) => {
    setEditEventId(eventId);
    const selectedEvent = allEvents.find((event) => event._id === eventId);
    setEditedEvent({
      title: selectedEvent.title,
      description: selectedEvent.description,
      time: selectedEvent.time,
      city: selectedEvent.city,
      street: selectedEvent.street,
    });
  };

  const handleSaveEdit = async () => {
    try {
      // Check if the edited event title or description contains banned words
      if (containsBannedWords(editedEvent.title) || containsBannedWords(editedEvent.description) || containsBannedWords(editedEvent.street) || containsBannedWords(editedEvent.city)) {
        errorToast('Your event title or description contains banned words.');
        return;
      }
      
      const response = await axios.put(
        `https://portgermanyserver.onrender.com/event/edit/${editEventId}`,
        editedEvent
      );
      console.log(response.data);
  
      if (response.data.success) {
        setEditEventId(null);
        setEditedEvent({
          title: "",
          description: "",
          time: "",
          city: "",
          street: "",
        });
  
        // Show success toast
        successToast("Edit Successful!");
        // Update the event in the allEvents state
        setAllEvents((prevEvents) => {
          const updatedEvents = prevEvents.map((event) => {
            if (event._id === editEventId) {
              // Return the updated event if it matches the edited event ID
              return {
                ...event,
                title: editedEvent.title,
                description: editedEvent.description,
                time: editedEvent.time,
                city: editedEvent.city,
                street: editedEvent.street,
              };
            } else {
              // Return the original event if it doesn't match the edited event ID
              return event;
            }
          });
          return updatedEvents;
        });
      } else {
        // Handle edit failure
        console.log("Edit Event failed:", response.data.message);
        errorToast("Edit Event failed: " + response.data.message);
      }
    } catch (error) {
      console.error("Error editing event:", error);
      // Handle error
      errorToast("Error editing event: " + error.message);
    }
  };
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
  const breadCrumbs = [
    { name: "Home", url: "/" },
    { name: "Information", url: "/information" },
    { name: "Event Sharing", url: "/information/eventSharing" },
    { name: "All Events", url: "/information/allEvents" }
  ];

  useEffect(() => {
    const handleGetAll = async () => {
      try {
        const response = await fetch("https://portgermanyserver.onrender.com/event/all");
        const data = await response.json();

        if (data.success) {
          setAllEvents([...data.allEvents]);
        }
      } catch (error) {
        console.error("Error fetching events:", error.message);
      }
    };

    handleGetAll();
  }, []);

  const formatTime = (timeString) => {
    const eventTime = new Date(timeString);
    return eventTime.toLocaleString(); // Adjust according to your locale and formatting preferences
  };
  const filteredEvents = allEvents.filter(event => {
  const formattedEventTime = formatTime(event.time);
  
  // Check if the city and formatted time match the search criteria
  return (
    event.city.toLowerCase().includes(searchCity.toLowerCase()) &&
    (event.time.toLowerCase().includes(searchTime.toLowerCase()) ||
    formattedEventTime.toLowerCase().includes(searchTime.toLowerCase()))
  );
});

  const handleDeleteEvent = async (eventId) => {
    try {
      const response = await axios.delete(
        `https://portgermanyserver.onrender.com/event/delete/${eventId}`
      );
      console.log("response", response);

      if (response.data.success) {
        setAllEvents((prevEvents) => {
          return prevEvents.filter((event) => event._id !== eventId); // Return the filtered array
        });
        successToast("Successfully deleted!");
      } else {
        console.log("Event deletion failed:", response.data.message);
      }
    } catch (error) {
      console.error("Error deleting event:", error);
    }
  };
  useEffect(() => {
    const fetchCurrentTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleString());
    };

    fetchCurrentTime(); // Fetch current time when component mounts

    // Set up interval to update current time every second
    const intervalId = setInterval(fetchCurrentTime, 1000);

    // Clear interval on component unmount
    return () => clearInterval(intervalId);
  }, []);
  return (
    <>
      <BreadCrumbs breadCrumbs={breadCrumbs} />
      <div className="flex flex-col m-24">
        <div className="flex flex-row">
          <label className="flex font-semibold mx-2 mt-2 text-xl">
            <IoSearchSharp className="text-2xl" />
            Search for City:
          </label>
          <input
            type="text"
            placeholder="Search by city"
            value={searchCity}
            onChange={(e) => setSearchCity(e.target.value)}
            className="p-2 mb-4 border border-gray-400 rounded "
          />
          <label className="flex font-semibold mx-2 mt-2 text-xl">
            <IoSearchSharp className="text-2xl" />
            Search by Date:
          </label>
          <input
            type="text"
            placeholder="Search by date"
            value={searchTime}
            onChange={(e) => setSearchTime(e.target.value)}
            className="p-2 mb-4 border border-gray-400 rounded"
          />
            <div className="ml-4 mt-2 text-xl">
      <span className=" font-semibold mx-2 mt-2 text-xl"> Current Time: </span>
      <span className="text-xl text-gray-800 text-blue-700">{currentTime}</span>
    </div>
          </div>
        
          
          </div>
          <div className="flex flex-wrap justify-center pb-16">
          {filteredEvents.map((event) => (
        <EventComponent 
        key={event._id}
        event={event}
        handleEditEvent={handleEditEvent}
        handleDeleteEvent={handleDeleteEvent}
        editEventId={editEventId}
        editedEvent={editedEvent}
        formatTime={formatTime}
        handleSaveEdit={handleSaveEdit}
        setEditedEvent={setEditedEvent}
        setEditEventId={setEditEventId}
        />
       
        ))}
        </div> 
      </>
    );
  }