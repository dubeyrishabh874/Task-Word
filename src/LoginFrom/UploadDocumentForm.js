import React from "react";
import { Form, Input, Row, Col, Space } from "antd";
import CustomButton from "../components/CustomButton";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";

const UploadDocumentForm = ({ handleNext, handlePrevious, loading }) => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Success:", values);
    handleNext();
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Upload Information</h1>
      <span>
        Stay informed with the latest trends, market insights, and valuable
        business data by signing up for our Business Information service today.
      </span>
      <Form
        form={form}
        name="step4"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        style={{ marginTop: 20 }}
        layout="vertical"
      >
        <Row gutter={[16, 16]}>
          <Col xs={24} md={12}>
            <Form.Item name="signature" label="Signature">
              <Input placeholder="Select Documents " />
            </Form.Item>
          </Col>
          <Col xs={24} md={12}>
            <Form.Item name="aadharCard" label="Aadhar Card">
              <Input placeholder="Select Documents " />
            </Form.Item>
          </Col>
          <Col xs={24} md={12}>
            <Form.Item name="panCard" label="PAN Card">
              <Input placeholder="Select Documents " />
            </Form.Item>
          </Col>
          <Col xs={24} md={12}>
            <Form.Item name="drivingLicence" label="Driving licence">
              <Input placeholder="Select Documents " />
            </Form.Item>
          </Col>
        </Row>
        <Space
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          <CustomButton
            onClick={handlePrevious}
            type="primary"
            icon={<ArrowLeftOutlined />}
            pre={true}
          >
            Previous
          </CustomButton>
          <CustomButton
            onClick={handleNext}
            type="primary"
            loading={loading}
            icon={<ArrowRightOutlined />}
          >
            Next
          </CustomButton>
        </Space>
      </Form>
    </div>
  );
};

export default UploadDocumentForm;
