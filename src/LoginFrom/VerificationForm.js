// FormDetails.js
import React from "react";
import "./form.css";
import { Form, Image, Space } from "antd";
import CustomButton from "../components/CustomButton";
import { ArrowRightOutlined } from "@ant-design/icons";
import  verifaction  from "../ImageCollection/verifaction.png";

const VerificationForm = ({ handleNext, handlePrevious, loading }) => {
  const [form] = Form.useForm();

  return (
    <div style={{ padding: "20px" }}>
      <h1>Verification</h1>
        <img
          src={verifaction}
          alt="registation pic"
          width={300}
          height={300}
          style={{ mixBlendMode: "multiply" }}
        />
        <Space style={{ display: "flex", justifyContent: "center" }}>
          <CustomButton
            onClick={handleNext}
            type="primary"
            loading={loading}
            icon={<ArrowRightOutlined />}
          >
            Next
          </CustomButton>
        </Space>
    </div>
  );
};

export default VerificationForm;
