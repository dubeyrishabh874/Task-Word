import React from "react";
import { Form, Input, Space, Row, Col, Badge } from "antd";
import CustomButton from "../components/CustomButton";
import { ArrowLeftOutlined, LockOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const SetPasswordForm = ({ handleNext, handlePrevious, loading }) => {
  const [form] = Form.useForm();
  let navigate = useNavigate();

  const handleSubmit = () => {
    window.alert("Dear User, you Details Successfully Sent");
    navigate("/");
  };

  const authMessage = [
    "Between 8 and 20 characters",
    "1 Upper case letter",
    "1 or more numbers",
    "1 or more special characters",
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1>Set Password</h1>
      <span>
        Stay informed with the latest trends, market insights, and valuable
        business data by signing up for our Business Information service today.
      </span>
      <Form
        form={form}
        name="step5"
        onFinish={handleNext}
        style={{ marginTop: 20 }}
      >
        <Row gutter={[16, 16]}>
          <Col xs={24} md={12}>
            <Form.Item name="password" rules={[{ required: true }]}>
              <Input
                placeholder="Enter Password"
                prefix={
                  <LockOutlined
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
            <Form.Item name="confirmPassword" rules={[{ required: true }]}>
              <Input
                placeholder="Confirm Password"
                prefix={
                  <LockOutlined
                    style={{
                      color: "rgba(0,0,0,.45)",
                      marginRight: 8,
                    }}
                  />
                }
              />
            </Form.Item>
          </Col>
          <Col xs={24} style={{ marginBottom: 20 }}>
            {authMessage.map((item, index) => {
              return (
                <div style={{ textAlign: "start" }} key={index}>
                 <Badge status="processing" color="red" style={{ marginRight : 10}} /> {item}
                </div>
              );
            })}
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
          <CustomButton onClick={handleSubmit} type="primary" icon={"👍"}>
            Submit
          </CustomButton>
        </Space>
      </Form>
    </div>
  );
};

export default SetPasswordForm;
