import React from "react";

export default function Layout({ children }) {
  return (
    <div className="main-container">
      <header>
        <h1>Moviefinder.com</h1>
      </header>
      <main>{children}</main>
    </div>
  );
}
