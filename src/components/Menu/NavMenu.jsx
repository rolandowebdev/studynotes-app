import React from "react";
import InstagramIcon from "../../assets/instagram.svg";
import GithubIcon from "../../assets/github.svg";

export default function NavMenu() {
  return (
    <nav className='nav-menu'>
      <ul>
        <li>
          <a href='https://www.instagram.com/rolandowebdev/' target='_blank' rel='noreferrer'>
            <img src={InstagramIcon} alt='Logo' width={28} height={28} />
          </a>
        </li>
        <li>
          <a href='https://github.com/rolandopranata' target='_blank' rel='noreferrer'>
            <img src={GithubIcon} alt='Logo' width={28} height={28} />
          </a>
        </li>
      </ul>
    </nav>
  );
}
