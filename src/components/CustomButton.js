// CustomButton.js
import { Button } from "antd";
import React from "react";

const CustomButton = ({ onClick, type, disabled, children, icon, pre }) => {
  return (
    <Button
      style={{
        color: "#fff",
        background: "linear-gradient(  #077078 100%, #19878F 78% )",
      }}
      className="custom-button"
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {pre === true ? (
        <>
          {icon} {children}
        </>
      ) : (
        <>
          {children} {icon}
        </>
      )}
    </Button>
  );
};

export default CustomButton;
