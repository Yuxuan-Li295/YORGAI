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
  const dropdownRef = useRef<HTMLDivElement>(null);

  const onMouseEnter = () => {
    if (hoverable) {
      setExpand(true);
    }
  };

  const onMouseLeave = () => {
    if (hoverable) {
      setExpand(false);
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
      {expand && (
        <div
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          className={css`
            position: absolute;
            padding-top: 8px;
            animation: ${fadeIn} 0.3s ease-in-out;
            min-width: 100%;
            z-index: 10;
          `}
          onClick={() => {
            setExpand(false);
          }}
        >
          {menu}
        </div>
      )}
    </div>
  );
};

export { Dropdown, DropdownMenu };
