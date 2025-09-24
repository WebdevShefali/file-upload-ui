import React, { useState } from "react";
import * as filestack from "filestack-js";

// Initialize Filestack client with API key
const client = filestack.init(import.meta.env.VITE_FILESTACK_API_KEY);

const FileUpload: React.FC = () => {
  const [uploadStatus, setUploadStatus] = useState("");
  // Function to open the Filestack picker
  const openPicker = () => {
    client
      .picker({
        fromSources: [
          "local_file_system", // Upload from computer
          "url", // Enter a URL
          "imagesearch", // Search for images
          "googledrive", // Google Drive
          "dropbox", // Dropbox
          "onedrive", // OneDrive
          "github", // GitHub
          "facebook", // Facebook photos
          "instagram", // Instagram
          "flickr", // Flickr
          "webcam", // Capture from webcam
        ],
        accept: ["image/*", "application/pdf"], // Limit file types
        maxFiles: 5, // Max 5 files at a time
        onUploadDone: (res) => {
          console.log("Files uploaded:", res);
          // Provide accessible feedback
          setUploadStatus("Upload complete!"); // Update state
        },
      })
      .open(); // Open the picker modal
  };

  return (
    <div className="p-6 max-w-md mx-auto text-center">
      <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10 text-center">
        <header className="mb-10">
          <h1 className="text-4xl font-bold text-slate-800 mb-2">
            File Upload Demo
          </h1>
        </header>

        <main className="p-8 border-2 border-dashed rounded-2xl bg-slate-50 flex flex-col justify-center items-center min-h-[300px]">
          <button
            onClick={openPicker}
            className="cursor-pointer bg-gradient-to-r from-sky-500 to-indigo-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 ease-in-out shadow-lg hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-sky-300 transform hover:-translate-y-2 hover:scale-110 hover:rotate-1 hover:from-indigo-600 hover:to-sky-600 active:scale-95"
          >
            Upload Files
          </button>
          {/* Upload status */}
          {uploadStatus && (
            <p className="mt-4 text-green-600 font-medium" aria-live="polite">
              {uploadStatus}
            </p>
          )}
        </main>
      </div>
    </div>
  );
};

export default FileUpload;
