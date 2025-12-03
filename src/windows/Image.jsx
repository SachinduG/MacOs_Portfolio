import React from "react";
import WindowWrapper from "../hoc/WindowWrapper";
import useWindowStore from "../store/window";
import { WindowControls } from "../components";
import { ExternalLink } from "lucide-react";

const ImageWindowContent = () => {
  const { windows } = useWindowStore();
  const data = windows.imgfile?.data;

  if (!data) return null;

  const { name, imageUrl, url } = data;

  return (
    <>
      <div id="window-header">
        <WindowControls target="imgfile" />
        <div className="w-full flex justify-end items-center gap-3 text-gray-500">
          
          <a href={url} target="_blank" rel="noopener noreferrer"><ExternalLink className="icon" /></a>
          <h2>{name}</h2>
        </div>
        
      </div>

      <div className="p-5 bg-white">
        {imageUrl ? (
          <div className="w-full">
            <img
              src={imageUrl}
              alt={name}
              className="w-full h-auto max-h-[70vh] object-contain rounded"
            />
          </div>
        ) : null}
      </div>
    </>
  );
};

const ImageWindow = WindowWrapper(ImageWindowContent, "imgfile");
export default ImageWindow;
