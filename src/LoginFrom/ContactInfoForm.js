import React from "react";
import { Form, Input, Space, Row, Col, Select } from "antd";
import CustomButton from "../components/CustomButton";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
import {
  UserOutlined,
  CalendarOutlined,
  EnvironmentOutlined,
  WomanOutlined,
  MobileOutlined,
  HomeOutlined,
} from "@ant-design/icons";

const ContactInfoForm = ({ handleNext, handlePrevious, loading }) => {
  const [form] = Form.useForm();

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  return (
    <div style={{ padding: "20px", marginTop: 30 }}>
      <h1> Contact Information</h1>
      <span>
        Stay informed with the latest trends, market insights, and valuable
        business data by signing up for our Business Information service today.
      </span>
      <Form
        form={form}
        name="step3"
        onFinish={handleNext}
        style={{ marginTop: 20 }}
      >
        <Row gutter={[16, 16]}>
          <Col xs={24} md={12}>
            <Form.Item name="address1" rules={[{ required: true }]}>
              <Input
                placeholder="Enter Address 1"
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
          <Col xs={24} md={12}>
            <Form.Item name="address2" rules={[{ required: true }]}>
              <Input
                placeholder="Enter Address 2"
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
          <Col xs={24}>
            <Form.Item name="address3" rules={[{ required: true }]}>
              <Input
                placeholder="Enter Address 3"
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
          <Col xs={24} md={12}>
            <Form.Item name="city" rules={[{ required: true }]}>
              <Input
                placeholder="City"
                prefix={
                  <HomeOutlined
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
            <Form.Item name="incomeSlab" rules={[{ required: true }]}>
              <Input
                placeholder="Income Slab"
                prefix={
                  <HomeOutlined
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
            <Form.Item name="country" rules={[{ required: true }]}>
              <Select
                prefix={
                  <HomeOutlined
                    style={{
                      color: "rgba(0,0,0,.45)",
                      marginRight: 8,
                    }}
                  />
                }
                placeholder="Country"
                onChange={handleChange}
                options={[
                  {
                    value: "india",
                    label: "India",
                  },
                  {
                    value: "other",
                    label: "Other",
                  },
                ]}
              />
            </Form.Item>
          </Col>
          <Col xs={24} md={12}>
            <Form.Item name="pinCode" rules={[{ required: true }]}>
              <Input
                placeholder="Pin Code"
                prefix={
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
        </Space>
      </Form>
    </div>
  );
};

export default ContactInfoForm;
