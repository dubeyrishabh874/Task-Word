import React, { useState } from "react";
import { Layout } from "antd";
import Stepper from "./Stepper";
import FormDetails from "./FormDetails";

const { Content } = Layout;

function DashBoard() {
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <Layout>
      <Content
        style={{
          width: "100vw",
          height: "100vh",
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background:
            "linear-gradient( to right,  #EDF5F6 0%,  #EDF5F6 40%, #FFFFFF 40%, #FFFFFF 100% )",
          fontFamily: "math",
          padding: "10px",
        }}
      >
        <div style={{ width: "40%" }}>
          <Stepper currentStep={currentStep} setCurrentStep={setCurrentStep} />
        </div>
        <div style={{ width: "60%" }}>
          <FormDetails
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
          />
        </div>
      </Content>
    </Layout>
  );
}

export default DashBoard;
