"use client";

import { useState, useEffect } from "react";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";

// for cors
const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";
const DOG_API = "https://place.dog/300/200";
export default function InterviewPage() {

  const [imageUrl, setImageUrl] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        // using proxy
        const response = await fetch(CORS_PROXY + DOG_API);
        if (!response.ok) throw new Error('Loading failed');
        
        // 将transfer to Blob URL
        const blob = await response.blob();
        const objectURL = URL.createObjectURL(blob);
        
        setImageUrl(objectURL);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchImage();
  }, []);

  return (
    <>
    <div className="w-full h-full flex flex-col p-2">
      <div className="w-full flex flex-col justify-center items-start text-pretty">
        <ul>
          <li>
            1. place a Resizable panel at the center of this page. Must use the
            <a
              href="https://ui.shadcn.com/docs/components/resizable"
              target="_blank"
            >
              <span className="text-green-500  hover:font-bold">
                &nbsp;Resizable Component.&nbsp;
              </span>
            </a>
          </li>
          <li>
            2. Display pictures in above resizable component. you can get
            pictures from
            <a href="https://place.dog/" target="_blank">
              <span className="text-green-500  hover:font-bold">
                &nbsp;Simple Dog Picture Service.&nbsp;
              </span>
            </a>
          </li>
          <li>
            3. Push a
            <span className="text-green-500  hover:font-bold">
              &nbsp;Pull Request&nbsp;
            </span>
            to the repo. Thats it!
          </li>
        </ul>
      </div>
    </div>

    <div className="w-full  flex items-center justify-center p-4">
      <ResizablePanelGroup direction="horizontal" className="max-w-4xl w-full rounded-lg border">
      <ResizablePanel defaultSize={50} minSize={30}>
          {loading ? (
            <div className="flex items-center justify-center h-full bg-gray-50">
              <p>loading...</p>
            </div>
          ) : error ? (
            <div className="flex flex-col items-center justify-center h-full p-4 bg-red-50 text-red-600">
              <p>{error}</p>
              <button 
                onClick={() => window.location.reload()}
                className="mt-2 px-4 py-2 bg-red-100 rounded hover:bg-red-200"
              >
                retry
              </button>
            </div>
          ) : (
            <img
              src={imageUrl}
              alt="Random Dog"
              className="w-full h-full object-cover"
              />
          )}
        </ResizablePanel>
        
        <ResizableHandle />
        <ResizablePanel defaultSize={50} minSize={30}>
          {loading ? (
            <div className="flex items-center justify-center h-full bg-gray-50">
              <p>loarding...</p>
            </div>
          ) : error ? (
            <div className="flex flex-col items-center justify-center h-full p-4 bg-red-50 text-red-600">
              <p>{error}</p>
              <button 
                onClick={() => window.location.reload()}
                className="mt-2 px-4 py-2 bg-red-100 rounded hover:bg-red-200"
              >
                retry
              </button>
            </div>
          ) : (
            <img
              src={imageUrl}
              alt="Random Dog"
              className="w-full h-full object-cover"
            />
          )}
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>

    <div className="w-full flex items-centeßr justify-center">
      <button 
        onClick={() => window.location.reload()}
        className="mt-2 px-4 py-2 bg-gradient-to-br from-teal-100 to-green-100 rounded hover:bg-red-200 "
      >
                  replace
        </button> 
    </div>
    </>
  );
}