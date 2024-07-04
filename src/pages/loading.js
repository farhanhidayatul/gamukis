import React from "react";
import Progressbar from "../component/component_loading/progressbar";
import Foto from "../component/photo";
import "../component/component_loading/progressbar.css";

const Loading = () => {
  return (
    <div>
      <Foto />
      <Progressbar />
    </div>
  );
};

export default Loading;
