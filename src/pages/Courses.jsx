import { useState } from "react";

function Courses() {

  const [selectedSubject, setSelectedSubject] = useState("DSA");

  // YouTube Playlist Links
  const courseData = {

    DSA: {
      title: "DSA Full Course",
      playlist:
        "https://www.youtube.com/embed/videoseries?list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA",
    },

    DBMS: {
  title: "DBMS Course",
  playlist:
    "https://www.youtube.com/embed/videoseries?list=PLfqMhTWNBTe0b2nM6JHVCnAkhQRGiZMSJ",
},

    OS: {
      title: "Operating System Course",
      playlist:
        "https://www.youtube.com/embed/videoseries?list=PLBlnK6fEyqRhX6r2uhhlubuF5QextdCSM",
    },

    "System Design": {
  title: "System Design Course",
  playlist:
    "https://www.youtube.com/embed/videoseries?list=PLMCXHnjXnTnvQVh7WsgZ8SurU1O2v_UM7",
},

    Aptitude: {
  title: "Aptitude Course",
  playlist:
    "https://www.youtube.com/embed/videoseries?list=PLpyc33gOcbVADMKqylI__O_O_RMeHTyNK",
},

  };

  return (
    <div className="px-6 pt-2 pb-6 bg-gray-100 min-h-screen">

      {/* Heading */}
      <div className="mb-4">

        <h1 className="text-4xl font-bold text-gray-800">
          Courses
        </h1>

        <p className="text-gray-500 mt-2">
          Learn from curated YouTube playlists
        </p>

      </div>

      <div className="flex gap-6">

        {/* SUBJECT SIDEBAR */}
        <div className="w-64 bg-white rounded-2xl p-5 shadow-sm h-fit">

          <h2 className="text-2xl font-semibold mb-5">
            Subjects
          </h2>

          <div className="space-y-3">

            {Object.keys(courseData).map((subject) => (

              <button
                key={subject}
                onClick={() => setSelectedSubject(subject)}
                className={`w-full text-left p-3 rounded-xl transition ${
                  selectedSubject === subject
                    ? "bg-red-600 text-white"
                    : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                }`}
              >
                {subject}
              </button>

            ))}

          </div>

        </div>

        {/* COURSE VIEWER */}
        <div className="flex-1 bg-white rounded-2xl p-6 shadow-sm overflow-hidden">

          {/* Top Bar */}
          <div className="flex items-center justify-between mb-5">

            <div>

              <h2 className="text-3xl font-bold text-gray-800">
                {courseData[selectedSubject].title}
              </h2>

              <p className="text-gray-500 mt-1">
                YouTube Playlist
              </p>

            </div>

            {/* Open YouTube */}
            <a
              href={courseData[selectedSubject].playlist.replace(
                "/embed/videoseries?list=",
                "/playlist?list="
              )}
              target="_blank"
              rel="noreferrer"
              className="bg-red-600 hover:bg-red-700 text-white px-5 py-3 rounded-xl transition"
            >
              Open Playlist
            </a>

          </div>

          {/* YouTube Playlist Frame */}
          <iframe
            src={courseData[selectedSubject].playlist}
            title="YouTube Playlist"
            className="w-full h-[calc(100vh-220px)] rounded-2xl"
            allowFullScreen
          />

        </div>

      </div>

    </div>
  );
}

export default Courses;