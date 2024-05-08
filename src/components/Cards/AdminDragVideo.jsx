import React from "react";

const AdminDragVideo = ({ video }) => {
  return (
    <div key={video ? video.name : "no-video"} className="grid-common grid-c1 md:!h-[40vh]">
      {video && (
        <video controls className="w-full h-full">
          <source src={URL.createObjectURL(video)} type={video.type} />
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  );
};

export default AdminDragVideo;
