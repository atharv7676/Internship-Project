import { useState } from "react";

// Import PDFs
import dsaPdf from "../assets/pdfs/dsa.pdf";
import dbmsPdf from "../assets/pdfs/dbms.pdf";
import osPdf from "../assets/pdfs/os.pdf";
import systemDesignPdf from "../assets/pdfs/system_design.pdf";
import aptitudePdf from "../assets/pdfs/aptitude.pdf";

function Notes() {
  const [selectedSubject, setSelectedSubject] = useState("DSA");

  // PDF Data
  const notesData = {
    DSA: dsaPdf,
    DBMS: dbmsPdf,
    OS: osPdf,
    "System Design": systemDesignPdf,
    Aptitude: aptitudePdf,
  };

  return (
    <div className="px-6 pt-2 pb-2 bg-gray-100 min-h-screen">
      {/* Heading */}
      <div className="mb-1">
        <h1 className="text-4xl font-bold text-gray-800">Study Notes</h1>

        <p className="text-gray-500 mt-2">
          Read and organize your subject PDFs
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        {/* SUBJECTS SIDEBAR */}
        <div className="w-full md:w-64 md:shrink-0 bg-white rounded-2xl p-5 shadow-sm h-fit">
          <h2 className="text-2xl font-semibold mb-5">Subjects</h2>

          <div className="flex flex-wrap md:flex-col gap-3 md:space-y-3">
            {Object.keys(notesData).map((subject) => (
              <button
                key={subject}
                onClick={() => setSelectedSubject(subject)}
                className={`text-left p-3 rounded-xl transition flex-1 md:flex-none md:w-full min-w-[45%] md:min-w-0 ${
                  selectedSubject === subject
                    ? "bg-indigo-600 text-white"
                    : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                }`}
              >
                {subject}
              </button>
            ))}
          </div>
        </div>

        {/* PDF VIEWER */}
        <div className="flex-1 min-w-0 bg-white rounded-2xl p-4 sm:p-6 shadow-sm">
          {/* Top Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-5">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
                {selectedSubject}
              </h2>
              <p className="text-gray-500 mt-1">PDF Notes Viewer</p>
            </div>

            {/* Download Button */}
            <a
              href={notesData[selectedSubject]}
              download
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-3 rounded-xl transition text-center w-fit"
            >
              Download PDF
            </a>
          </div>

          {/* PDF Frame */}
          <iframe
            src={notesData[selectedSubject]}
            title="PDF Viewer"
            className="w-full h-[70vh] sm:h-[calc(100vh-220px)] rounded-2xl border border-gray-200"
          />
        </div>
      </div>
    </div>
  );
}

export default Notes;
