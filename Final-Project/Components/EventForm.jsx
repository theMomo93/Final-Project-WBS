import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function EventForm({
  title,
  setTitle,
  time,
  setTime,
  description,
  setDescription,
  street,
  setStreet,
  city,
  setCity,
  handleSubmit,
}) {
  return (
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
  );
}

export default EventForm;
