import React, { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { RiDeleteBinLine } from "react-icons/ri";
import { MdEdit } from "react-icons/md";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function EventComponent({
  setEditEventId,
  event,
  handleDeleteEvent,
  handleEditEvent,
  editEventId,
  editedEvent,
  setEditedEvent,
  handleSaveEdit,
  formatTime,
}) {
  const { user } = useContext(UserContext);

  return (
      <div
        key={event._id}
        className=" mt-4 flex max-w-sm rounded h-fit shadow-2xl flex-wrap shadow-black-400 mb-8 mx-2 bg-blue-100" 
        style={{ minHeight: "450px" }}
      >
        <div className="flex flex-col ">
          <div className="px-6 py-4 flex flex-col">
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
              <span className="font-semibold">Street:</span> {event.street}
            </p>
          </div>
          </div>
          {user.username === event.username && (
            <div className="m-4 ">
              {editEventId === event._id ? (
                <>
                  <label className="font-semibold h-auto">Edit your Event:</label>
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
                    className="w-full p-2"
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
                    className="w-full my-2 p-2"
                  />
                  <DatePicker
                  
                    selected={new Date(editedEvent.time)}
                    onChange={(date) =>
                      setEditedEvent({
                        ...editedEvent,
                        time: date.toISOString(),
                      })
                    }
                    showTimeSelect
                    timeFormat="HH:mm"
                    timeIntervals={15}
                    dateFormat="dd/MM/yyyy, HH:mm"
                    className="w-full mb-2 p-2"
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
                    className="w-full p-2"
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
                  <div className=" w-full my-2 p-2">
                    <button
                      onClick={() => handleSaveEdit(event._id)}
                      className="text-xl hover:text-green-500 mr-4 hover:font-semibold"
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
                      className="text-xl hover:text-amber-400 mr-4 hover:font-semibold"
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
   
      
  );
}
