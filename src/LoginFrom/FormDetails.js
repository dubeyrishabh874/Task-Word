// FormDetails.js
import React, { useState } from "react";
import { Form, Input, Button } from "antd";
import BussinessInfoForm from "./BussinessInfoForm";
import ContactInfoForm from "./ContactInfoForm";
import UploadDocumentForm from "./UploadDocumentForm";
import SetPasswordForm from "./SetPasswordForm";
import VerificationForm from "./VerificationForm";

const FormDetails = ({ currentStep, setCurrentStep }) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const handleNext = (values) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      form.resetFields();
      setCurrentStep(currentStep + 1);
    }, 1000);
  };

  const handlePrevious = () => {
    setCurrentStep(currentStep - 1);
  };

  return (
    <>
      {currentStep === 0 && (
        <VerificationForm
          handleNext={handleNext}
          handlePrevious={handlePrevious}
          loading={loading}
        />
      )}
      {currentStep === 1 && (
        <BussinessInfoForm
          handleNext={handleNext}
          handlePrevious={handlePrevious}
          loading={loading}
        />
      )}
      {currentStep === 2 && (
        <ContactInfoForm
          handleNext={handleNext}
          handlePrevious={handlePrevious}
          loading={loading}
        />
      )}
      {currentStep === 3 && (
        <UploadDocumentForm
          handleNext={handleNext}
          handlePrevious={handlePrevious}
          loading={loading}
        />
      )}
      {currentStep === 4 && (
        <SetPasswordForm
          handleNext={handleNext}
          handlePrevious={handlePrevious}
          loading={loading}
        />
      )}
    </>
  );
};

export default FormDetails;
