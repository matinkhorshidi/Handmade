import React from 'react';
import { Col, Row } from 'antd';
import TextContainer from './TextContainer';

const TwoColCountainer = ({
  Name,
  Header,
  subHeader,
  id,
  btnTxt,
  btnLink,
  btn2Txt,
  btn2Link,
}) => {
  return (
    <Row>
      <Col xs={12} sm={12} md={12} lg={12} xl={12}>
        <div className="text-content-1">
          <TextContainer
            Name={Name}
            Header={Header}
            subHeader={subHeader}
            id={id}
            btnTxt={btnTxt}
            btnLink={btnLink}
            btn2Txt={btn2Txt}
            btn2Link={btn2Link}
          />
        </div>
      </Col>
      <Col xs={12} sm={12} md={12} lg={12} xl={12}>
        <div className="text-content-2">
          <Row justify="space-evenly">
            <Col xs={8} sm={8} md={8} lg={8} xl={8}>
              <div className="image-text-box">
                <img src="/img/love_icon.png" alt="logo" className="love-img" />
                <p>Making Games is Our Love</p>
              </div>
            </Col>
            <Col xs={8} sm={8} md={8} lg={8} xl={8}>
              <div className="image-text-box">
                <img src="/img/you_icon.png" alt="logo" className="love-img" />
                <p>You Playing Them Is The Best Part</p>
              </div>
            </Col>
            <Col xs={8} sm={8} md={8} lg={8} xl={8}>
              <div className="image-text-box">
                <img
                  src="/img/crazy_icon.png"
                  alt="logo"
                  className="love-img"
                />
                <p>We'll Make Them Mind Blowing</p>
              </div>
            </Col>
          </Row>
        </div>
      </Col>
    </Row>
  );
};

export default TwoColCountainer;
