import React from 'react';
import { Col, Row } from 'antd';

const TeamContainer = ({ Teams }) => {
  return (
    <Row className="Team-container">
      <Col xs={24} sm={24} md={24} lg={16} xl={16}>
        <h2 className="Team-text">Team</h2>
        <h2 className="Team-header-text">We are the Handmade Interactive</h2>
        {/* Team */}
        <Row className="Team-profiles-container">
          {Teams.map((Team) => {
            return (
              <Col
                key={Team.id}
                xs={{ span: 4 }}
                sm={{ span: 4 }}
                md={{ span: 3 }}
                lg={{ span: 3 }}
              >
                <div
                  style={{
                    margin: '0px 5px',
                    textAlign: 'center',
                  }}
                >
                  <img
                    src={Team.profile}
                    alt={Team.name}
                    className="team-img"
                  />
                  <p className="team-name">{Team.name}</p>
                  <p className="team-job"> {Team.job}</p>
                </div>
              </Col>
            );
          })}
        </Row>
      </Col>
      <Col xs={24} sm={24} md={24} lg={8} xl={8}>
        <h2 className="Team-text culture-text">Culture</h2>
        <h2 className="Team-header-text">
          We are proud to have hybrid, work from home and on site work culture
          since 2018
        </h2>
        <Row>
          <Col
            xs={8}
            sm={8}
            md={8}
            lg={8}
            xl={8}
            style={{
              textAlign: 'start',
              padding: '5px',
            }}
          >
            <img src="/img/culture_3.png" alt="logo" className="culture-img" />
          </Col>
          <Col
            xs={8}
            sm={8}
            md={8}
            lg={8}
            xl={8}
            style={{
              textAlign: 'start',
              padding: '5px',
            }}
          >
            <img src="/img/culture_2.png" alt="logo" className="culture-img" />
          </Col>
          <Col
            xs={8}
            sm={8}
            md={8}
            lg={8}
            xl={8}
            style={{
              textAlign: 'start',
              padding: '5px',
            }}
          >
            <img src="/img/culture_1.png" alt="logo" className="culture-img" />
          </Col>
        </Row>
        <Row>
          {/* Partners*/}
          <h2 className="Team-text">Partners</h2>
          <Row gutter={[16, 16]}>
            <Col className="gutter-row" span={6}>
              <div className="partner-img-container">
                <img
                  src="/img/kwalee_partner.png"
                  alt="partner"
                  className="partner-img"
                />
              </div>
            </Col>
            <Col className="gutter-row" span={6}>
              <div
                style={{
                  padding: '4px 0',
                }}
                className="partner-img-container"
              >
                <img
                  src="/img/voodoo_partner.png"
                  alt="partner"
                  className="partner-img"
                />
              </div>
            </Col>
            <Col className="gutter-row" span={6}>
              <div
                style={{
                  padding: '5px 0',
                }}
                className="partner-img-container"
              >
                <img
                  src="/img/applovin_partners.png"
                  alt="partner"
                  className="partner-img"
                />
              </div>
            </Col>
            <Col className="gutter-row" span={6}>
              <div
                style={{
                  padding: '-10px 0',
                }}
                className="partner-img-container"
              >
                <img
                  src="/img/jopio_partner.png"
                  alt="partner"
                  className="partner-img"
                />
              </div>
            </Col>
            <Col className="gutter-row" span={6}>
              <div
                style={{
                  padding: '8px 0',
                  // marginTop: '-30px',
                }}
                className="partner-img-container"
              >
                <img src="/img/YSO.png" alt="partner" className="partner-img" />
              </div>
            </Col>
            <Col className="gutter-row" span={6}>
              <div
                style={{
                  padding: '4px 0',
                  marginTop: '-20px',
                }}
                className="partner-img-container"
              >
                <img
                  src="/img/lion_partners copy 2.png"
                  alt="partner"
                  className="partner-img-lion"
                />
              </div>
            </Col>
            <Col className="gutter-row" span={6}>
              <div
                style={{
                  padding: '8px 0',
                  marginTop: '-15px',
                }}
                className="partner-img-container"
              >
                <img
                  src="/img/martian_partnert.png"
                  alt="partner"
                  className="partner-img"
                />
              </div>
            </Col>
          </Row>
        </Row>
      </Col>
    </Row>
  );
};

export default TeamContainer;
