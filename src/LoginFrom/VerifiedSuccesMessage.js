import React from "react";
import { NavLink } from "react-router-dom";
import { Rate, Space } from "antd";
import { Layout } from "antd";
import logo from "../ImageCollection/logo1.png";
import success from "../ImageCollection/success 1.png";

const { Content } = Layout;

const VerifiedSuccesMessage = () => {
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
            <Space direction="vertical">
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

              <div style={{ width: 304 }}>
                <h3 style={{ color: "#484848" }}>Verification</h3>
                <span style={{ fontFamily: "Poppins" }}>
                  Verification Link Send Successfully on Your Mail Please Check
                  your Mail and Complete Verification
                </span>
              </div>
              <img
                src={success}
                alt="Company Logo"
                style={{
                  mixBlendMode: "multiply",
                  width: "90px",
                  height: "90px",
                  flexShrink: 0,
                }}
              />
              <span style={{}}>
                Do You have a account yet ?
                <NavLink
                  to={"./dashBoard"}
                  style={{
                    color: "#077078",
                  }}
                >
                  {" "}
                  Get Login
                </NavLink>
              </span>
            </Space>
          </div>
        </Content>
      </Layout>
    </>
  );
};

export default VerifiedSuccesMessage;
