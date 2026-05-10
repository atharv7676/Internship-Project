import { useState } from "react";
import Calendar from "react-calendar";

import "react-calendar/dist/Calendar.css";

function CalendarPage() {
  // Selected Date
  const [date, setDate] = useState(new Date());

  // Event Input
  const [eventText, setEventText] = useState("");

  // Events Storage
  // EVENTS STATE WITH LOCAL STORAGE
 const [events, setEvents] = useState(() => {

  const savedEvents = localStorage.getItem(
    "calendarEvents"
  );

  return savedEvents
    ? JSON.parse(savedEvents)
    : [];

});
  // Add Event
  const addEvent = () => {

  if (eventText.trim() === "") return;

  const newEvent = {
    id: Date.now(),
    date: date.toDateString(),
    text: eventText,
  };

  // UPDATED EVENTS ARRAY
  const updatedEvents = [
    newEvent,
    ...events,
  ];

  // UPDATE STATE
  setEvents(updatedEvents);

  // SAVE TO LOCAL STORAGE
  localStorage.setItem(
    "calendarEvents",
    JSON.stringify(updatedEvents)
  );

  // CLEAR INPUT
  setEventText("");
};

  // Filter Events By Selected Date
  const selectedDateEvents = events.filter(
    (event) => event.date === date.toDateString(),
  );

  return (
    <div className="px-6 pt-2 pb-6 bg-gray-100 min-h-screen">
      {/* Heading */}
      <div className="mb-4">
        <h1 className="text-4xl font-bold text-gray-800">Study Calendar</h1>

        <p className="text-gray-500 mt-2">
          Manage exams, deadlines and important events
        </p>
      </div>

      <div className="flex gap-6">
        {/* LEFT SIDE */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <Calendar
            onChange={setDate}
            value={date}
            className="rounded-2xl border-none"
          />
        </div>

        {/* RIGHT SIDE */}
        <div className="flex-1 bg-white rounded-2xl p-6 shadow-sm">
          {/* Top */}
          <div className="mb-6">
            <h2 className="text-3xl font-bold text-gray-800">
              {date.toDateString()}
            </h2>

            <p className="text-gray-500 mt-1">
              Add your important study events
            </p>
          </div>

          {/* Add Event */}
          <div className="flex gap-4 mb-8">
            <input
              type="text"
              placeholder="Enter exam, assignment or event..."
              value={eventText}
              onChange={(e) => setEventText(e.target.value)}
              className="flex-1 border border-gray-300 rounded-xl p-3 outline-none focus:border-indigo-500"
            />

            <button
              onClick={addEvent}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 rounded-xl transition"
            >
              Add Event
            </button>
          </div>

          {/* Events List */}
          <div className="space-y-4">
            {selectedDateEvents.length === 0 ? (
              <div className="bg-gray-100 rounded-2xl p-6 text-center">
                <p className="text-gray-500">No events for this date</p>
              </div>
            ) : (
              selectedDateEvents.map((event) => (
                <div
                  key={event.id}
                  className="border border-gray-200 rounded-2xl p-5 flex items-center justify-between"
                >
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      {event.text}
                    </h3>

                    <p className="text-gray-500 mt-1">{event.date}</p>
                  </div>

                  {/* Event Badge */}
                  <div className="bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-medium">
                    Important
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CalendarPage;
