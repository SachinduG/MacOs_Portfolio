
import React, { useState, useMemo } from "react";
import { Mail, Search } from "lucide-react";
import { clsx } from "clsx";

import WindowWrapper from "../hoc/WindowWrapper";
import { WindowControls } from "../components";
import { photoGalleries, photosLinks } from "../constants";
import useWindowStore from "../store/window";

const Photos = () => {
  const { openWindow } = useWindowStore();
  const [activeCategory, setActiveCategory] = useState("Automation");

  const activeGallery = useMemo(
    () => photoGalleries[activeCategory] || [],
    [activeCategory]
  );

  return (
    <>
      <div id="window-header">
        <WindowControls target="photos" />

        <div className="w-full flex justify-end items-center gap-3 text-gray-500">
          <Mail className="icon" />
          <Search className="icon" />
        </div>
      </div>

      <div className="flex w-full">
        <div className="sidebar">
          <h2>Photos</h2>
          <ul>
            {photosLinks.map(({ id, icon, title }) => (
              <li
                key={id}
                onClick={() => setActiveCategory(title)}
                className={clsx(activeCategory === title && "active")}
              >
                <img src={icon} alt={title} />
                <p>{title}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="gallery">
          <ul>
            {activeGallery.map(({ id, img, url }) => (
              <li
                key={id}
                onClick={() =>
                  openWindow("imgfile", {
                    id,
                    name: "Gallery image",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    imageUrl: img,
                    url,
                  })
                }
              >
                <img src={img} alt={`Gallery image ${id}`} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

const PhotosWindow = WindowWrapper(Photos, "photos");
PhotosWindow.displayName = "Photos";
export default PhotosWindow;