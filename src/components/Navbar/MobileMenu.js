import React from "react";
import { IoMdMail } from "react-icons/io";
import {
  CloseIcon,
  Icon,
  MobileMenuContainer,
  MobileMenuList,
  MobileMenuLink,
  MobileButton,
  MobileSocials,
  MobileSocial,
  MobileQuote,
  CloseText,
} from "../styles/MobileMenu.styled";

const MobileMenu = ({ isOpen, toggle }) => {
  return (
    <MobileMenuContainer isOpen={isOpen} toggle={toggle}>
      <Icon onClick={toggle}>
        <CloseText>Close</CloseText>
        <CloseIcon />
      </Icon>
      <MobileMenuList>
        <MobileMenuLink to="home" onClick={toggle}>
          Home
        </MobileMenuLink>
        <MobileMenuLink to="projects" onClick={toggle}>
          Projects
        </MobileMenuLink>
        <MobileMenuLink to="about" onClick={toggle}>
          About
        </MobileMenuLink>
        <MobileMenuLink to="playground" onClick={toggle}>
          Playground
        </MobileMenuLink>
        <MobileButton
          href="mailto:cheruiyotbony@gmail.com "
          target="_blank"
          rel="noreferrer"
        >
          <span>
            <IoMdMail />
            <span>get in touch</span>
          </span>
        </MobileButton>
      </MobileMenuList>
      <MobileSocials>
        <MobileSocial
          href="mailto:cheruiyotbony@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Mail
        </MobileSocial>
        <MobileSocial
          href="https://github.com/kieyp"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </MobileSocial>

        <MobileSocial
          href="linkedin.com/in/kipbon/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </MobileSocial>
      </MobileSocials>
      <MobileQuote></MobileQuote>
    </MobileMenuContainer>
  );
};

export default MobileMenu;
