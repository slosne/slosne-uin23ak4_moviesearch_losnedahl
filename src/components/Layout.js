import React from "react";

export default function Layout({ children }) {
  return (
    <div className="main-container">
      <header>
        <h1>Moviefinder</h1>
      </header>
      <main>{children}</main>
      <footer>
        <p>&copy; Stine Losnedahl</p>
      </footer>
    </div>
  );
}
