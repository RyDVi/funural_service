import React from "react";

interface NavLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {}

const NavLink: React.FC<NavLinkProps> = ({ children, className, ...props }) => (
  <a className={"nav-link " + className} {...props}>
    {children}
  </a>
);

interface NavItemProps extends React.LiHTMLAttributes<HTMLLIElement> {
  linkProps: NavLinkProps;
}

export const NavItemLink: React.FC<NavItemProps> = ({
  linkProps,
  children,
  className,
  ...props
}) => (
  <li className={"nav-item " + className} {...props}>
    <NavLink {...linkProps}>{children}</NavLink>
  </li>
);

export const NavbarList: React.FC<React.HTMLAttributes<HTMLUListElement>> = ({
  className,
  ...props
}) => <ul className={"navbar-nav " + className} {...props} />;

export default NavLink;
