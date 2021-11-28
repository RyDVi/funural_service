import React from "react";

export interface TabProps {
  tabName: string;
  active?: boolean;
}

export const TabPanel: React.FC<
  TabProps & React.HTMLAttributes<HTMLDivElement>
> = ({ tabName, active, className, ...props }) => (
  <div
    className={`tab-pane fade ${active ? "active show" : ""} ${className}`}
    id={`nav-${tabName}`}
    role="tabpanel"
    aria-labelledby={`nav-${tabName}-tab`}
    {...props}
  />
);

export const TabContent: React.FC = ({ children }) => (
  <div className="tab-content">{children}</div>
);

export const Tab: React.FC<TabProps> = ({
  tabName,
  active,
  children,
  ...props
}) => (
  <button
    className={`nav-link ${active ? "active" : ""}`}
    data-bs-toggle="tab"
    data-bs-target={`#nav-${tabName}`}
    type="button"
    role="tab"
    aria-controls={`nav-${tabName}`}
    aria-selected={!!active}
    {...props}
  >
    {children || tabName}
  </button>
);

export const Tabs: React.FC = ({ children }) => (
  <nav className="nav nav-tabs" id="nav-tab" role="tablist">
    {children}
  </nav>
);
