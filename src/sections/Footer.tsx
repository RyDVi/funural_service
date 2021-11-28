import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      Copyright © 2020-{new Date().getFullYear()} RyDVi (Ryabchunov Dmitry) Production. All rights reserved
    </footer>
  );
};

export default Footer;
