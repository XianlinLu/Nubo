"use client";

import { useState } from "react";
import { ChevronDown, GiftIcon, GlobeIcon, MenuIcon, SearchIcon } from "./Icons";

const logo =
  "https://www.befreed.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.0_t8tcd03q3l4.png&w=384&q=75";

export function HeaderNav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bf-nav" aria-label="Primary navigation">
      <a className="bf-logo" href="#top" aria-label="BeFreed Home">
        <img src={logo} alt="BeFreed" />
      </a>

      <div className="bf-nav__desktop">
        <a className="bf-nav__item bf-nav__item--border" href="#community">
          <span className="bf-grid-icon" aria-hidden="true">
            <i />
            <i />
            <i />
            <i />
          </span>
          Community Content
          <ChevronDown />
        </a>
        <a className="bf-nav__item" href="#features">
          Learning Plans
        </a>
        <a className="bf-nav__item" href="#features">
          Learning Tools
          <ChevronDown />
        </a>
        <a className="bf-nav__item" href="#footer">
          Resources
          <ChevronDown />
        </a>
        <a className="bf-nav__gift" href="#download">
          Send a Gift
          <GiftIcon />
        </a>
      </div>

      <div className="bf-nav__actions">
        <button className="bf-icon-button bf-search" aria-label="Search">
          <SearchIcon />
        </button>
        <a
          className="bf-icon-button bf-discord"
          href="https://discord.com/"
          aria-label="Discord"
        >
          <span aria-hidden="true">☯</span>
        </a>
        <a className="bf-auth bf-auth--login" href="#download">
          Log In
        </a>
        <a className="bf-auth bf-auth--signup" href="#download">
          Sign Up
        </a>
        <button className="bf-icon-button" aria-label="Choose language">
          <GlobeIcon />
        </button>
        <button
          className="bf-icon-button"
          aria-label="Open menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((value) => !value)}
        >
          <MenuIcon />
        </button>
      </div>

      {menuOpen ? (
        <div className="bf-mobile-menu">
          <a href="#community" onClick={() => setMenuOpen(false)}>
            Community Content
          </a>
          <a href="#features" onClick={() => setMenuOpen(false)}>
            Learning Plans
          </a>
          <a href="#features" onClick={() => setMenuOpen(false)}>
            Learning Tools
          </a>
          <a href="#footer" onClick={() => setMenuOpen(false)}>
            Resources
          </a>
          <a href="#download" onClick={() => setMenuOpen(false)}>
            Get started
          </a>
        </div>
      ) : null}
    </nav>
  );
}
