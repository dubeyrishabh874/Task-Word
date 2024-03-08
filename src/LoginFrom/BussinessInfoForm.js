import React, { useState, useEffect } from "react";
import {
  Form,
  Input,
  Space,
  Row,
  Col,
  Select,
  DatePicker,
  Button,
  message,
  Upload,
} from "antd";
import CustomButton from "../components/CustomButton";
import {
  ArrowLeftOutlined,
  ArrowRightOutlined,
  UploadOutlined,
} from "@ant-design/icons";

import {
  UserOutlined,
  CalendarOutlined,
  EnvironmentOutlined,
  WomanOutlined,
  MobileOutlined,
} from "@ant-design/icons";

const BussinessInfoForm = ({ handleNext, handlePrevious, loading }) => {
  const [form] = Form.useForm();
  const [formData, setFormData] = useState({});

  const onFinish = (values) => {
    setFormData((prevData) => ({
      ...prevData,
      step2: values,
    }));
    handleNext();
  };

  useEffect(() => {
    if (Object.keys(formData).length !== 0) {
      localStorage.setItem("formData", JSON.stringify(formData));
      message.success(`Form Details Saved Successfully`);
    }
  }, [formData]);

  console.log("formData", formData);

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };

  const props = {
    name: "file",
    action: "https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188",
    headers: {
      authorization: "authorization-text",
    },
    onChange(info) {
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === "done") {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  return (
    <div style={{ padding: "20px", marginTop: 30 }}>
      <h1>Business Information</h1>
      <span>
        Stay informed with the latest trends, market insights, and valuable
        business data by signing up for our Business Information service today.
      </span>
      <Form
        form={form}
        name="step2"
        onFinish={onFinish}
        style={{ marginTop: 20 }}
        layout="vertical"
      >
        <Row gutter={[16, 16]}>
          <Col xs={24} md={12}>
            <Upload {...props}>
              <Button icon={<UploadOutlined />}>Click to Upload</Button>
            </Upload>
          </Col>
          <Col xs={24} md={12}>
            <Form.Item
              name="firstName"
              rules={[
                {
                  required: true,
                  message: "First Name in is required!",
                },
              ]}
            >
              <Input
                placeholder="First Name"
                prefix={
                  <UserOutlined
                    style={{
                      color: "rgba(0,0,0,.45)",
                      marginRight: 8,
                    }}
                  />
                }
              />
            </Form.Item>
          </Col>
          <Col xs={24} md={12}>
            <Form.Item name="lastName" rules={[{ required: true }]}>
              <Input
                placeholder="Last Name"
                prefix={
                  <UserOutlined
                    style={{
                      color: "rgba(0,0,0,.45)",
                      marginRight: 8,
                    }}
                  />
                }
              />
            </Form.Item>
          </Col>
          <Col xs={24} md={12}>
            <Form.Item name="mobileNumber" rules={[{ required: true }]}>
              <Input
                placeholder="Mobile Number"
                prefix={
                  <MobileOutlined
                    style={{
                      color: "rgba(0,0,0,.45)",
                      marginRight: 8,
                    }}
                  />
                }
              />
            </Form.Item>
          </Col>
          <Col xs={24} md={12}>
            <Form.Item name="gender" rules={[{ required: true }]}>
              <Select
                prefix={
                  <WomanOutlined
                    style={{
                      color: "rgba(0,0,0,.45)",
                      marginRight: 8,
                    }}
                  />
                }
                placeholder="Gender"
                onChange={handleChange}
                options={[
                  {
                    value: "male",
                    label: "Male",
                  },
                  {
                    value: "female",
                    label: "Female",
                  },
                ]}
              />
            </Form.Item>
          </Col>
          <Col xs={24} md={12}>
            <Form.Item name="dob" rules={[{ required: true }]}>
              <DatePicker
                placeholder="DOB"
                onChange={onChange}
                suffixIcon={null}
                superPrevIcon={
                  <CalendarOutlined
                    style={{
                      color: "rgba(0,0,0,.45)",
                      marginRight: 8,
                    }}
                  />
                }
              />
            </Form.Item>
          </Col>
          <Col xs={24} md={12}>
            <Form.Item name="placeOfBirth" rules={[{ required: true }]}>
              <Input
                placeholder="Place of Birth"
                prefix={
                  <EnvironmentOutlined
                    style={{
                      color: "rgba(0,0,0,.45)",
                      marginRight: 8,
                    }}
                  />
                }
              />
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
            style={{ marginBottom: 20 }}
          >
            Previous
          </CustomButton>
          <CustomButton
            onClick={handleNext}
            type="primary"
            loading={loading}
            icon={<ArrowRightOutlined />}
            style={{ marginBottom: 10 }}
          >
            Next
          </CustomButton>
          {/* <Form.Item>
            <Button type="primary" htmlType="submit">
              Send Message
            </Button>
          </Form.Item> */}
        </Space>
      </Form>
    </div>
  );
};

export default BussinessInfoForm;
