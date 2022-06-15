import React from "react";
import InstagramIcon from "../../assets/instagram.svg";
import SpotifyIcon from "../../assets/spotify.svg";
import GithubIcon from "../../assets/github.svg";

export default function NavMenu() {
  return (
    <nav className='nav-menu'>
      <ul>
        <li>
          <a href='https://www.instagram.com/rolandowebdev/' target='_blank' rel='noreferrer'>
            <img src={InstagramIcon} alt='Logo' />
          </a>
        </li>
        <li>
          <a href='https://github.com/rolandopranata' target='_blank' rel='noreferrer'>
            <img src={GithubIcon} alt='Logo' />
          </a>
        </li>
        <li>
          <a href='https://www.spotify.com/id/account/overview/' target='_blank' rel='noreferrer'>
            <img src={SpotifyIcon} alt='Logo' />
          </a>
        </li>
      </ul>
    </nav>
  );
}
