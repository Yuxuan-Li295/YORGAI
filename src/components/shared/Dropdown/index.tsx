import { css, keyframes } from "@emotion/css";
import { ReactElement, useEffect, useRef, useState } from "react";
import { DropdownMenu } from "./DropdownMenu";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 100;  
  }
`;

const Dropdown = ({
  children,
  menu,
  hoverable = false,
}: {
  children: ReactElement;
  menu: ReactElement;
  hoverable?: boolean;
}) => {
  const [expand, setExpand] = useState(false);
  const [selectable, setSelectable] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const onMouseEnter = () => {
    if (hoverable) {
      setExpand(true);
      setSelectable(true);
    }
  };

  const onMouseLeave = () => {
    if (hoverable) {
      setExpand(false);
      setTimeout(() => setSelectable(false), 300);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setExpand(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div
      className={css`
        position: relative;
      `}
      ref={dropdownRef}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div
        onClick={() => {
          setExpand(!expand);
        }}
      >
        {children}
      </div>
      <div
        className={css`
          position: absolute;
          padding-top: 8px;
          min-width: 100%;
          z-index: 10;
        `}
        style={{
          opacity: expand ? 1 : 0,
          animation: expand ? `${fadeIn} 0.3s ease-in-out` : "",
          pointerEvents: selectable ? "all" : "none",
        }}
      >
        {menu}
      </div>
    </div>
  );
};

export { Dropdown, DropdownMenu };
