// Stepper.js
import React from "react";
import { Steps } from "antd";
import "./form.css";
import logo from "../ImageCollection/logo1.png";
import { useNavigate } from "react-router-dom";

const { Step } = Steps;

const Stepper = ({ currentStep }) => {
  let navigate = useNavigate();

  const handleLogoClick = () => {
    window.alert("Dear User, you will redirect on login Screen");
    navigate("/");
  };

  const steps = [
    "Verification Complete",
    "Business Information",
    "Contact Information",
    "Upload document",
    "Set Password",
  ];
  const stepDesc =
    "Tech startups disrupt industries, attracting investor interest and innovation.";
  return (
    <>
      <div style={{ textAlign: "start" }}>
        <img
          src={logo}
          className="logo1"
          alt="Company Logo"
          style={{
            mixBlendMode: "multiply",
            width: "230px",
            height: "66px",
            flexShrink: 0,
            cursor: "pointer",
          }}
          onClick={handleLogoClick}
        />
        <h3>STEP : {currentStep + 1}</h3>
        <h3>{steps[currentStep]}</h3>
        <span>{`"${stepDesc}"`}</span>
      </div>
      <Steps
        direction="vertical"
        current={currentStep}
        style={{ marginTop: 20 }}
      >
        <Step title="Verification Complete" />
        <Step title="Business Information" />
        <Step title="Contact Information" />
        <Step title="Upload document" />
        <Step title="Set Password" />
      </Steps>
    </>
  );
};

export default Stepper;
