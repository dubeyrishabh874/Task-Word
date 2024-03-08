import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, Input, message } from "antd";
import { Layout } from "antd";
import { UserOutlined, MailOutlined } from "@ant-design/icons";
import logo from "../ImageCollection/logo1.png";

const { Content } = Layout;

const LoginDetails = () => {
  let navigate = useNavigate();
  const [data, setData] = useState({});

  const onSubmit = async (values) => {
    const { username, email } = values;
    const res = await fetch("http://veggi-app-v2.adriit.com/api/vendor/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        mobile_no: username, // Assuming username is the mobile number - mobile_no: 9600000011,
        password: email, // Assuming email is the password - password: "Test@1234"
      }),
    });
    const result = await res.json();
    setData(result);
    if (result.status == 0 || !result) {
      message.error(`Please Enter Valid credentials`);
    } else {
      message.success(
        `Hi ${result?.data?.user_detail?.vendor_name} Verification Successfully Completed`
      );
      navigate("/verifiedSuccesMessage");
    }
  };

  console.log("data", data);

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
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
              "linear-gradient( to right,  #25868D 0%,  #25868D 50%, #EDF5F6 50%, #EDF5F6 100% )",
            fontFamily: "math",
            padding: "20px",
          }}
        >
          <div
            style={{
              border: "1px solid #cee7e8",
              borderRadius: "5px",
              backgroundColor: "ghostwhite",
              boxShadow: "#25868D 0 0 9px 1px",
              padding: "15px",
            }}
          >
            <img
              src={logo}
              alt="Company Logo"
              style={{
                mixBlendMode: "multiply",
                width: "190px",
                height: "54px",
                flexShrink: 0,
              }}
            />

            <Form
              name="basic"
              onFinish={onSubmit}
              onFinishFailed={onFinishFailed}
              layout="horizontal"
            >
              <div style={{ width: 304 }}>
                <h3 style={{ color: "#484848" }}>Let’s Get Started</h3>
                <span style={{ fontFamily: "Poppins" }}>
                  Enter Your Name and Business Email For Verification
                </span>
              </div>
              <br />
              <Form.Item name="username">
                <Input
                  placeholder="Enter Your Name"
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

              <Form.Item name="email">
                <Input
                  placeholder="Enter Your Business Email"
                  prefix={
                    <MailOutlined
                      style={{
                        color: "rgba(0,0,0,.45)",
                        marginRight: 8,
                      }}
                    />
                  }
                />
              </Form.Item>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  style={{
                    width: "-webkit-fill-available",
                    background: "#077078",
                  }}
                >
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </div>
        </Content>
      </Layout>
    </>
  );
};

export default LoginDetails;
