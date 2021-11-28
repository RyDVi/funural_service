import { InfoEmail, InfoPhoneNumber, Logo } from "components/Info";
import { NavbarList, NavItemLink } from "components/NavLink";
import React from "react";
import { scrollOffsetFunction } from "utils";
import useResizeObserver from "use-resize-observer";

const Info: React.FC<Pick<HTMLImageElement, "src" | "alt">> = ({
  alt,
  src,
  children,
}) => (
  <div className="info">
    <img src={src} alt={alt} />
    {children}
  </div>
);

const AdditionalInfo: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  children,
}) => <div className={`additionalInfo ${className}`}>{children}</div>;

const DesktopAdditionalInfo: React.FC = () => (
  <AdditionalInfo className="hide-on-mobile hide-on-tablet">
    <InfoPhoneNumber phone="phone1" />
    <InfoEmail />
    <Info src="icons/часы.png" alt="Время работы">
      <span>Круглосуточно</span>
    </Info>
  </AdditionalInfo>
);

const MobileAdditionalInfo: React.FC = () => (
  <AdditionalInfo className="hide-on-desktop">
    <InfoPhoneNumber phone="phone1" />
  </AdditionalInfo>
);

interface NavLink {
  linkId: string;
  content: React.ReactNode;
}

const NavHeader: React.FC<{ navLinks: NavLink[] }> = ({ navLinks }) => {
  const [currentNavLink, setCurrentNavLink] = React.useState(
    navLinks[0].linkId
  );
  const { ref: refNavbar, height: navbarHeight = 56 } = useResizeObserver();
  const buildLinkProps = React.useCallback(
    (href: string) => ({
      href,
      onClick: scrollOffsetFunction(-navbarHeight),
    }),
    [navbarHeight]
  );
  React.useEffect(() => {
    // Включаем слежение за изменением текущей секции (для выделения текущей навигационной ссылки)
    var intersectionObserver = new IntersectionObserver(function (entries) {
      if(entries[0].isIntersecting){
        setCurrentNavLink(entries[0].target.id);
      }
    });
    navLinks.forEach((navLink) => {
      const element = document.getElementById(navLink.linkId);
      if (element) {
        intersectionObserver.observe(element);
      }
    });
  }, [navLinks]);
  return (
    <nav
      ref={refNavbar}
      className="navbar navbar-expand-lg navbar-dark navbar-default fixed-top container-fluid"
    >
      <a className="navbar-brand" href="#mainHeader">
        <Logo />
      </a>
      <MobileAdditionalInfo />
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbar-links"
        aria-controls="navbar-links"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="navbar-collapse collapse" id="navbar-links">
        <NavbarList>
          {navLinks.map((link) => (
            <NavItemLink
              key={link.linkId}
              linkProps={{
                ...buildLinkProps(`#${link.linkId}`),
                className: currentNavLink === link.linkId ? "active" : "",
              }}
            >
              {link.content}
            </NavItemLink>
          ))}
        </NavbarList>
      </div>
      <DesktopAdditionalInfo />
    </nav>
  );
};

export default NavHeader;
