import React, { useState, useEffect, useContext } from "react";
import BreadCrumbs from "@/components/BreadCrumbs";
import { RiDeleteBinLine } from "react-icons/ri";
import axios from "axios";
import { toast } from "react-hot-toast";
import { UserContext } from "../../contexts/UserContext";
import { IoSearchSharp } from "react-icons/io5";
import { MdEdit } from "react-icons/md";

export default function AllEvents() {
  const [allEvents, setAllEvents] = useState([]);
  const [searchCity, setSearchCity] = useState("");
  const [searchTime, setSearchTime] = useState("");
  const { user } = useContext(UserContext);
  const [editEventId, setEditEventId] = useState(null);
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
      const response = await axios.put(
        `http://localhost:5000/event/edit/${editEventId}`,
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
        const response = await fetch("http://localhost:5000/event/all");
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

  const filteredEvents = allEvents.filter(
    (event) =>
      event.city.toLowerCase().includes(searchCity.toLowerCase()) &&
      event.time.toLowerCase().includes(searchTime.toLowerCase())
  );

  const handleDeleteEvent = async (eventId) => {
    try {
      const response = await axios.delete(
        `http://localhost:5000/event/delete/${eventId}`
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

  return (
    <>
      <BreadCrumbs breadCrumbs={breadCrumbs} />
      <div className="flex flex-col m-28">
        <div className="flex flex-row">
          <label className="flex font-semibold mx-2 mt-2">
            <IoSearchSharp className="text-2xl" />
            Search for City:
          </label>
          <input
            type="text"
            placeholder="Search by city"
            value={searchCity}
            onChange={(e) => setSearchCity(e.target.value)}
            className="p-2 mb-4 border border-gray-400 rounded"
          />
          <label className="flex font-semibold mx-2 mt-2">
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
        </div>
        <div className="flex flex-wrap">
          {filteredEvents.map((event) => (
            <div
              key={event._id}
              className="mt-4 max-w-sm rounded overflow-hidden shadow-2xl shadow-black-400 mb-8 mx-2 flex-2 flex-wrap bg-blue-100 "
            >
              <div className="flex flex-col  h-full">
                <div className="px-6 py-4">
                  <h2 className="font-bold text-2xl">{event.title}</h2>
                  <span>posted by {event.username}</span>
                  <p className="text-black text-base my-4">
                    <span className="font-semibold">Description:</span>{" "}
                    {event.description}
                  </p>
                  <p className="text-black text-base underline">
                    <span className="font-semibold">Time:</span>{" "}
                    {formatTime(event.time)}
                  </p>
                </div>

                <div className="px-6 py-4">
                  <p>
                    <span className="font-semibold">City:</span> {event.city}
                  </p>
                  <p>
                    <span className="font-semibold">Street:</span>{" "}
                    {event.street}
                  </p>
                </div>
                {user.username === event.username && (
                  <div className="flex flex-col justify-end px-6 pb-4">
                    {editEventId === event._id ? (
                      <>
                        <label>Edit your Event:</label>
                        <input
                          type="text"
                          placeholder="Title"
                          value={editedEvent.title}
                          onChange={(e) =>
                            setEditedEvent({
                              ...editedEvent,
                              title: e.target.value,
                            })
                          }
                          name="title"
                          className=" p-2"
                        />
                        <textarea
                          type="text"
                          placeholder="Description"
                          value={editedEvent.description}
                          onChange={(e) =>
                            setEditedEvent({
                              ...editedEvent,
                              description: e.target.value,
                            })
                          }
                          name="description"
                          className="w-auto my-2 p-2"
                        />
                        <input
                          type="text"
                          placeholder="Time"
                          value={editedEvent.time}
                          onChange={(e) =>
                            setEditedEvent({
                              ...editedEvent,
                              time: e.target.value,
                            })
                          }
                          name="time"
                          className="mb-2 p-2"
                        />
                        <input
                          type="text"
                          placeholder="City"
                          value={editedEvent.city}
                          onChange={(e) =>
                            setEditedEvent({
                              ...editedEvent,
                              city: e.target.value,
                            })
                          }
                          name="city"
                          className=" p-2"
                        />
                        <input
                          type="text"
                          placeholder="Street"
                          value={editedEvent.street}
                          onChange={(e) =>
                            setEditedEvent({
                              ...editedEvent,
                              street: e.target.value,
                            })
                          }
                          name="street"
                          className="my-2 p-2"
                        />
                        <div className="my-2 p-2">
                          <button
                            onClick={() => handleSaveEdit(event._id)}
                            className="text-xl hover:text-green-500 mr-4"
                          >
                            Save
                          </button>
                          <button
                            onClick={() => {
                              setEditEventId(null);
                              setEditedEvent({
                                title: "",
                                description: "",
                                time: "",
                                city: "",
                                street: "",
                              });
                            }}
                            className="text-xl hover:text-red mr-8 p-2"
                          >
                            Cancel
                          </button>
                        </div>
                      </>
                    ) : (
                      <button
                        onClick={() => handleEditEvent(event._id)}
                        className="text-xl hover:text-blue-500 p-2"
                      >
                        <MdEdit />
                      </button>
                    )}

                    <button
                      className="text-xl hover:text-red mr-8 p-2"
                      onClick={() => handleDeleteEvent(event._id)}
                    >
                      <RiDeleteBinLine />
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
