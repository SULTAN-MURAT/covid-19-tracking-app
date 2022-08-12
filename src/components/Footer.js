import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import styled from "styled-components";

const StyledFooter = styled.footer`
  margin-top: 10px;
  padding: 10px;
  font-size: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const IconSpan = styled.span`
  margin-left: 10px;
`;
const Link = styled.a`
  margin-left: 5px;
  text-decoration: none;
  &:visited {
    text-decoration: none;
  }
`;
function Footer() {
  return (
    <StyledFooter>
      <div>
        <span>Coded by Murat-Han</span>
        <Link
          href="https://www.linkedin.com/in/murat-han-470716128/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconSpan>
            <BsLinkedin />
          </IconSpan>
        </Link>
        <Link
          href="https://github.com/Murat-Han"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconSpan>
            <BsGithub className="icons" />
          </IconSpan>
        </Link>
      </div>
      <div>Copy Right &copy; {new Date().getFullYear()}</div>
      <div>
        Data provided by
        <Link
          href="https://covid19api.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Covid-19 API
        </Link>
      </div>
    </StyledFooter>
  );
}

export default Footer;
