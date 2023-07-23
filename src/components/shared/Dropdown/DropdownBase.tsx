import { css, keyframes } from "@emotion/css";
import { ReactElement, useEffect, useRef, useState } from "react";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 100;  
  }
`;

const DropdownBase = ({
  dropdownToggle,
  dropdownMenu,
  hoverable = false,
  above = false,
}: {
  dropdownToggle: ReactElement;
  dropdownMenu: ReactElement;
  hoverable?: boolean;
  above?: boolean;
}) => {
  const [expand, setExpand] = useState(false);
  const [offset, setOffset] = useState<number>();

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (dropdownRef.current !== null) {
      setOffset(dropdownRef.current.clientHeight);
    }
  }, [dropdownRef]);

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
        {dropdownToggle}
      </div>
      {expand && (
        <div
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          className={css`
            position: absolute;
            bottom: ${above ? offset + "px" : "unset"};
            left: 1px;
            padding: 8px 0;
            animation: ${fadeIn} 0.3s ease-in-out;
            min-width: 100%;
            z-index: 10;
          `}
          onClick={() => {
            setExpand(false);
          }}
        >
          {dropdownMenu}
        </div>
      )}
    </div>
  );
};

export { DropdownBase };
