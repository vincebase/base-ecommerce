import Link from "next/link";
import React from "react";
import Container from "../../other/Container";
import {Select} from "antd";


const TopNav=({ containerType })=> {
  const { Option } = Select;


  return (
    <div className="top-nav">
      <Container type={containerType}>
        <div className="top-nav-wrapper">
          <div className="top-nav-selects">
          <Select
              defaultValue="English"
              style={{ width: 90 }}
              bordered={false}
            >
              <Option value="en">English</Option>
              <Option value="jp">Japanese</Option>
              <Option value="vi">Vietnamese</Option>
            </Select>
            <Select
              defaultValue="USD - Dollar"
              style={{ width: 120 }}
              bordered={false}
      
            >
              <Option value="USD">USD - Dollar</Option>
              <Option value="JPY">JPY - Yen</Option>
              <Option value="VND">VND - Vietnam dong</Option>
            </Select>
            <div className="top-nav-links__item">
              <Link href={process.env.PUBLIC_URL + "/#"}>
                <a>
                  <i className="icon_question_alt2" />
                  Help
                </a>
              </Link>
            </div>
          
            <div className="top-nav-links__item">
              <Link href={process.env.PUBLIC_URL + "/#"}>
                <a>
                  <i className="icon_gift" /> Offer
                </a>
              </Link>
            </div>
          </div>
          </div>
      </Container>
    </div>
  );
}

export default TopNav
