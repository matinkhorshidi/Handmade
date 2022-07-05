import { Col, Divider, Drawer, Row } from 'antd';
import React, { useRef, useState } from 'react';
import Swiper from 'react-id-swiper';
import TeamContainer from './TeamContainer';
import TextContainer from './TextContainer';
import TwoColCountainer from './TwoColContainer';
import { MenuOutlined } from '@ant-design/icons';

const EachItem = (props) => {
  let { bg, Name, Header, subHeader, id, btnTxt, btnLink, btn2Txt, btn2Link } =
    props;

  const Team = [
    {
      id: 1,
      profile: '/img/kayhan_team.png',
      name: 'kayhan Yaghoubian',
      job: 'Game Director',
    },
    {
      id: 2,
      profile: '/img/morteza_team.png',
      name: 'Morteza Soozban',
      job: 'Art Director',
    },
    {
      id: 3,
      profile: '/img/kayvan_team.png',
      name: 'Keyvan Yaghoubian',
      job: 'Product Manager',
    },
    {
      id: 4,
      profile: '/img/amir_team.png',
      name: 'Amir H Ebadatiyan',
      job: 'Lead Technical Developer',
    },
    {
      id: 5,
      profile: '/img/amin_team.png',
      name: 'Amin Jamal',
      job: 'Lead back-end Developer',
    },
    {
      id: 6,
      profile: '/img/ehsan_team.png',
      name: 'Ehsan Samimi',
      job: 'Lead Front Developer',
    },
    {
      id: 7,
      profile: '/img/Mohammad_team.png',
      name: 'Mohammad Joorsara',
      job: 'Lead Graphic Designer',
    },
    {
      id: 8,
      profile: '/img/Sahand_team.png',
      name: 'Sahand Mirzai',
      job: 'UI/UX Designer',
    },
    {
      id: 9,
      profile: '/img/Mahdi_team.png',
      name: 'Mahdi Nazari',
      job: 'Character Artist and Animator',
    },
    {
      id: 10,
      profile: '/img/tarokh_team.png',
      name: 'Tarokh Tarhandeh',
      job: 'PR Expert',
    },
    {
      id: 11,
      profile: '/img/shoabe_team.png',
      name: 'Shoabe Arab',
      job: 'Sound And Music Composer',
    },
    {
      id: 12,
      profile: '/img/sajjad_team.png',
      name: 'Sajjad Saeedi',
      job: 'Associate Game Designer',
    },
    {
      id: 13,
      profile: '/img/Payman_team.png',
      name: 'Payman Ansari',
      job: 'Technical Developer',
    },
    {
      id: 14,
      profile: '/img/reza_team.png',
      name: 'Reza Afshar',
      job: 'External Concept Artist',
    },
    {
      id: 15,
      profile: '/img/kian_team.png',
      name: 'Kian Ashrafi',
      job: 'External Graphic Designer',
    },
  ];
  return (
    <Row
      className={['bg-cover position-relative 100vh', bg].join(' ')}
      style={{ backgroundImage: `url(${bg}) `, zIndex: '0' }}
      key={id}
    >
      <Col xs={1} sm={1} md={1} lg={1} xl={1}></Col>
      {/* ! Middle */}
      <Col xs={22} sm={22} md={22} lg={22} xl={22} className="middle-col">
        <div className="middle-content">
          {/* Slides 1 3 4 */}
          {(id === 1 || id === 2 || id === 3 || id === 4) && (
            <div className="text-content">
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
          )}
          {/* Slide 2 */}
          {id === 5 && (
            <TwoColCountainer
              Name={Name}
              Header={Header}
              subHeader={subHeader}
              id={id}
              btnTxt={btnTxt}
              btnLink={btnLink}
              btn2Txt={btn2Txt}
              btn2Link={btn2Link}
            />
          )}
          {/* Slide 5 */}
          {id === 6 && <TeamContainer Teams={Team} />}
        </div>
      </Col>
      <Col xs={1} sm={1} md={1} lg={1} xl={1}></Col>
    </Row>
  );
};

const Slider = (props) => {
  const swiperRef = useRef(null);
  const initialSlide = 0;
  const [sliderIndex, updateCurrentIndex] = useState(1);
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };
  const goToSlide = (id) => {
    if (swiperRef.current && swiperRef.current.swiper) {
      updateCurrentIndex(id);
      swiperRef.current.swiper.slideTo(id);
    }
  };
  const onSlideChange = () => {
    updateCurrentIndex(swiperRef?.current?.swiper?.activeIndex);
  };

  const params = {
    initialSlide: initialSlide,
    slidesPerView: 1,
    speed: 700,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    direction: 'vertical',
    on: {
      slideChange: onSlideChange,
    },
    // autoplay: {
    //   delay: 5000,
    //   disableOnInteraction: false,
    // },
  };

  const SliderInside = [
    {
      bg: '/img/bg/slide1_cover.png',
      Name: 'Ticket To Heaven',
      Header: 'Fight to heaven, or stay  in hell',
      subHeader:
        'Enter the ultimate battle to win the grand prize of a ticket to heaven',
      id: 1,
      btnTxt: 'Available 2024',
      btnLink: 'http://tickettoheaven.thehandmade.io/',
      btn2Txt: 'Learn More',
      btn2Link: 'http://tickettoheaven.thehandmade.io/',
    },
    {
      bg: '/img/bg/slide2_cover.png',
      Name: 'The Last Scent Of Love',
      Header: 'The Story Of Love And Liberation',
      subHeader:
        'A classic retro experience with the handmade art style in 80s timeline',
      id: 2,
      btnTxt: 'Comming Soon...',
      btnLink: '',
      btn2Txt: 'Learn More',
      btn2Link: 'http://tickettoheaven.thehandmade.io/',
    },
    {
      bg: '/img/bg/slide3_cover.png',
      Name: 'Upcoming Harror Story',
      Header: "There's a new fear in the universe",
      subHeader:
        'Enter the journey to the heart of the universe as the bounty hunter who discovers stynning mysteries',
      id: 3,
      btnTxt: 'TBA',
      btnLink: 'mailto:info@thehandmade.io',
      btn2Txt: 'Learn More',
      btn2Link: 'http://tickettoheaven.thehandmade.io/',
    },
    {
      bg: '/img/bg/slide4_cover.png',
      Name: 'Mobile Games',
      Header: 'The Ultimate Fun in Your Pockets',

      subHeader:
        'Enjoy our casual and cross platform games for your mobile devices Available on android and IOS',
      id: 4,
      btnTxt: 'Drop A Message',
      btnLink: 'mailto:info@thehandmade.io',
      btn2Txt: 'Learn More',
      btn2Link: 'http://tickettoheaven.thehandmade.io/',
    },
    {
      bg: '/img/bg/slide5_cover.png',
      Name: 'Our Mission, Making Games',
      Header: `Its all about you! all the time...`,
      subHeader:
        'For more than 10 years weve been dedicated to create unique games in the most creactive way...',
      id: 5,
      btnTxt: 'App Store',
      btnLink:
        'https://apps.apple.com/us/developer/shima-ghafouri/id1534210976',
      btn2Txt: 'Google Play',
      btn2Link: 'http://tickettoheaven.thehandmade.io/',
    },
    {
      bg: '/img/bg/slide6_cover.png',
      Name: 'GET IN TOUCH',
      Header: 'INTERESTED IN WORKING WITH US',
      subHeader: 'SEND US A MESSAGE ABOUT YOUR BUSINESS',
      id: 6,
      btnTxt: 'Drop A Message',
      btnLink: 'mailto:info@thehandmade.io',
      btn2Txt: 'Learn More',
      btn2Link: 'http://tickettoheaven.thehandmade.io/',
    },
  ];

  return (
    <div className=" position-relative" id="main">
      <Swiper {...params} ref={swiperRef}>
        {SliderInside.map(EachItem)}
      </Swiper>
      <span className="logo-container">
        <img src="/img/items/logo.png" alt="logo" className="logo-img" />
      </span>
      {console.log(sliderIndex)}
      <div className="navlink-container">
        <a
          className={`navlink navlink-ltr ${
            sliderIndex === 1 ||
            sliderIndex === 2 ||
            sliderIndex === 3 ||
            sliderIndex === 4 ||
            sliderIndex === 7
              ? 'navlink-active'
              : ''
          }`}
          href="/#"
          onClick={() => goToSlide(1)}
        >
          HOME
        </a>

        <a
          className={`navlink navlink-ltr ${
            sliderIndex === 5 ? 'navlink-active' : ''
          }`}
          href="/#"
          onClick={() => goToSlide(5)}
        >
          Our Mission
        </a>
        <a
          className={`navlink navlink-ltr ${
            sliderIndex === 6 || sliderIndex === 0 ? 'navlink-active' : ''
          }`}
          href="/#"
          onClick={() => goToSlide(6)}
        >
          Team
        </a>
        <a
          className={`navlink navlink-ltr`}
          href="mailto:info@thehandmade.io"
          target="_blank"
          rel="noreferrer noopener"
          // onClick={() => goToSlide(0)}
        >
          Contact Us
        </a>
      </div>
      <div
        className="burger-button"
        style={{
          position: 'absolute',
          right: '3rem',
          top: '3rem',
          zIndex: '2',
          display: 'flex',
          overflow: 'hidden',
          color: 'white',
        }}
      >
        <MenuOutlined
          className="burger-button"
          onClick={showDrawer}
          style={{ fontSize: '30px' }}
        />
      </div>
      <div className="ml-2 socialmedia-container">
        <a
          href="https://twitter.com/handmadellc"
          style={{ marginTop: '0.7rem' }}
        >
          <img
            src="/img/items/twitter.png"
            className="me-3 social-img object-fit-container cursor-pointer"
            alt="twitter"
          />
        </a>
        <a
          href="https://www.instagram.com/thehandmade.io/"
          style={{ marginTop: '0.7rem' }}
        >
          <img
            src="/img/items/instagram.png"
            className="me-3 social-img object-fit-container cursor-pointer"
            alt="instagram"
          />
        </a>
        <a
          href="https://www.linkedin.com/company/handmadeinteractive"
          style={{ marginTop: '0.7rem' }}
        >
          <img
            src="/img/items/linkedin.png"
            className="me-3 social-img object-fit-container cursor-pointer"
            alt="linkedin"
          />
        </a>
      </div>
      <span className="footer-text">
        2022 Handmade Interactive LLC, All Right Reserved
      </span>

      <Drawer
        title="HandMade"
        placement="right"
        closable={false}
        onClose={onClose}
        visible={visible}
        getContainer={false}
        style={{
          position: 'absolute',
          overflow: 'hidden',
          Color: '#00ccff',
        }}
        className="drawer-custom"
      >
        <p
          onClick={() => {
            goToSlide(1);
            setVisible(false);
          }}
          className="navlink-drawer"
        >
          Home
        </p>
        <Divider />
        <p
          onClick={() => {
            goToSlide(2);
            setVisible(false);
          }}
          className="navlink-drawer"
        >
          {' '}
          Our Mission
        </p>
        <Divider />
        <p
          onClick={() => {
            goToSlide(0);
            setVisible(false);
          }}
          className="navlink-drawer"
        >
          Team
        </p>
        <Divider />
        <p
          onClick={() => {
            goToSlide(0);
            setVisible(false);
          }}
          className="navlink-drawer"
        >
          Contact Us
        </p>
        <Divider />
        <div
          style={{
            textAlign: 'center',
            marginTop: '200px',
          }}
        >
          <img
            src="/img/items/logo.png"
            alt="logo"
            className="logo-img"
            style={{
              marginTop: 'auto',
              textAlign: 'center',
            }}
          />
        </div>
      </Drawer>
    </div>
  );
};

export default Slider;
