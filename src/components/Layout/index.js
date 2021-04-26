import React from "react";
import Navbar from "../Navbar";

export default function Layout({ children, showLayout = true }) {
  return (
    <div className="body">
      {showLayout && <Navbar />}
      <main>{children}</main>
    </div>
  );
}
