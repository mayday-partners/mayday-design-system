import { css } from "@emotion/react";
import palette from "../../styles/palette";
import { Divider, Space } from "antd";
import { Link } from "react-router-dom";
import Icons from "./icons";

export default function Footer() {
  return (
    <footer css={footerStyle}>
      <div className="main-container">
        <div
          className="ds-flex jc-sb "
          css={css`
            margin-bottom: 48px;
          `}
        >
          <Icons icon="footer_logo" />

          <Space size={40}>
            <Link to={""}>회사소개서</Link>
            <Link to={""}>이용약관</Link>
            <Link to={""}>개인정보취급방침</Link>
          </Space>
        </div>

        <div>
          <Space size={24} split={<Divider type="vertical" />}>
            <a href="tel:02-6412-9715">Tel. 02-6412-9715</a>
            <a href="tel:02-6935-1190">Fax. 02-6935-1190</a>
            <a href="mailto:wevent@mayday3.com">E-mail. wevent@mayday3.com</a>
          </Space>

          <Space
            size={24}
            split={<Divider type="vertical" />}
            css={css`
              margin-bottom: 32px;
            `}
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
    </footer>
  );
}

const footerStyle = css`
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
  }

  .ant-space {
    display: flex;
  }
  .ant-divider {
    border-color: ${palette.gray[600]};
    height: 8px;
  }
  .info-wrapper {
    margin-bottom: 12px;
    display: flex;
    gap: 12px;

    p:nth-of-type(1) {
      width: 105px;
    }
  }
`;
