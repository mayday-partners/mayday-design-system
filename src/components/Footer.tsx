import palette from "../styles/palette";
import { Divider, Space } from "antd";
import styled from "@emotion/styled";
import React from "react";

export default function Footer() {
  return (
    <FooterStyle>
      <div className="main-container">
        <div className="logo-wrapper">
          <Space size={40}>
            <a href="">회사소개서</a>
            <a href="">이용약관</a>
            <a href="">개인정보취급방침</a>
          </Space>
        </div>

        <div>
          <Space
            size={24}
            split={<Divider type="vertical" />}
            className="contact"
          >
            <a href="tel:02-6412-9715">Tel. 02-6412-9715</a>
            <a href="tel:02-6935-1190">Fax. 02-6935-1190</a>
            <a href="mailto:wevent@mayday3.com">E-mail. wevent@mayday3.com</a>
          </Space>

          <Space
            size={24}
            split={<Divider type="vertical" />}
            className="location"
          >
            <p>(주)메이데이 파트너스</p>
            <p>서울특별시 강남구 봉은사로 439 2,3층</p>
          </Space>

          <div className="info-wrapper">
            <p>사업자 등록번호</p>
            <p>331-81-00048</p>
          </div>
          <div className="info-wrapper">
            <p>통신 판매신고번호</p>
            <p>2021-서울강남-04283</p>
          </div>
        </div>
      </div>
    </FooterStyle>
  );
}

const FooterStyle = styled.footer`
  background: #373737;
  padding: 40px 0px;
  margin-top: 145px;

  a {
    font-weight: 600;
    font-size: 15px;
    line-height: 20px;
    color: #ffffff;
  }

  p {
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: #d2d2d2;
    margin: 0;
  }

  .logo-wrapper {
    display: flex;
    justify-content: space-between;
    margin-bottom: 24px;
  }
  .location {
    margin-bottom: 32px;
  }
  .contact {
    margin-bottom: 12px;
  }
  .info-wrapper {
    margin-bottom: 12px;
    display: flex;
    gap: 12px;

    p:nth-of-type(1) {
      width: 105px;
    }
  }

  .ant-space {
    display: flex;
  }
  .ant-divider {
    border-color: ${palette.gray[600]};
    height: 8px;
  }
`;
