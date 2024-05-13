import React from "react";
import Progressbar from "../component/progressbar";
import Foto from "../component/photo"; 
import "../component/progressbar.css"; 

const Loading = () => {
  return (
    <div>
      <Foto />
      <Progressbar />
    </div>
  );
}

export default Loading;