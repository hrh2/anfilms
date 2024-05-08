import React from "react";

const AdminDragPoster = ({ poster }) => {
  return (
    <div key={poster ? poster.name : "no-poster"} className="grid-common grid-c1 md:!h-[40vh]">
      {poster && (
        <img src={URL.createObjectURL(poster)} alt="Poster" className="w-full h-full" />
      )}
    </div>
  );
};

export default AdminDragPoster;
