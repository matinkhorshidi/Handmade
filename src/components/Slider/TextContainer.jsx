import React from 'react';

const TextContainer = ({
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
    <>
      <h2 className="name-text">{Name}</h2>
      <h2 className="header-text">{Header}</h2>
      <h3 className="sub-header-text">{subHeader}</h3>
      {(id === 1 || id === 2 || id === 3 || id === 4) && (
        <>
          <a
            href={btnLink}
            target="_blank"
            rel="noreferrer noopener"
            // onClick={(e) => {
            //   window.location = btnLink;
            //   e.preventDefault();
            // }}
          >
            <span className="btn1">{btnTxt}</span>
          </a>
          <a
            href={btn2Link}
            target="_blank"
            rel="noreferrer noopener"
            // onClick={(e) => {
            //   window.location = btn2Link;
            //   e.preventDefault();
            // }}
          >
            <span className="btn2">{btn2Txt}</span>
          </a>
        </>
      )}
    </>
  );
};

export default TextContainer;
