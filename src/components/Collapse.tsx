import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

interface CollapseProps {
  header: React.ReactNode;
  arrowPosition?: 'left'|'right'
}

const Collapse: React.FC<CollapseProps> = ({ header, arrowPosition = 'left', children }) => {
  const [isOpened, setOpened] = React.useState(false);
  const collapsableRef = React.useRef<HTMLDivElement>(null);
  return (
    <div>
      <div className="collapse-header" onClick={() => setOpened(!isOpened)}>
        <FontAwesomeIcon className={`arrow ${arrowPosition}`} icon={isOpened ? faChevronUp : faChevronDown} />
        {header}
      </div>
      <div
        ref={collapsableRef}
        className="collapsable"
        style={{
          height: isOpened ? collapsableRef.current?.scrollHeight || 0 : 0,
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Collapse;
