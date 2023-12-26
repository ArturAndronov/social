import React from "react";
import preloader from "../../../assets/images/loader-loading.gif";

type PropsType = {};

const Preloader: React.FC<PropsType> = (props) => {
  return (
    <div style={{ backgroundColor: 'white' }}>
      <img src={preloader} alt="Preloader" />
    </div>
  );
};

export default Preloader;
