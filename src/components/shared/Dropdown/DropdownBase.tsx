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
  align = "left",
  closeOnClick = true,
  fullWidth = false,
  FileMenu = false,
}: {
  dropdownToggle: ReactElement;
  dropdownMenu: ReactElement;
  hoverable?: boolean;
  above?: boolean;
  align?: "left" | "center" | "right";
  closeOnClick?: boolean;
  fullWidth?: boolean;
  FileMenu?: boolean;
}) => {
  const [expand, setExpand] = useState(false);
  const [verticalOffset, setVerticalOffset] = useState<number>();
  const [horizontalOffset, setHorizontalOffset] = useState(0);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const dropdownMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (dropdownRef.current !== null && dropdownMenuRef.current !== null) {
      setVerticalOffset(dropdownRef.current.clientHeight);
      if (align !== "left") {
        setHorizontalOffset(
          (dropdownRef.current.clientWidth -
            dropdownMenuRef.current.clientWidth) /
            (align === "center" ? 2 : 1),
        );
      }
    }
  }, [dropdownRef, dropdownMenuRef, expand]);

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
      <div onClick={() => setExpand(!expand)}>{dropdownToggle}</div>
      {expand && (
        <div
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          ref={dropdownMenuRef}
          className={css`
            position: absolute;
            bottom: ${above ? verticalOffset + "px" : "unset"};
            left: ${horizontalOffset}px;
            padding: 8px 0;
            animation: ${fadeIn} 0.3s ease-in-out;
            z-index: 10;
            min-width: ${fullWidth ? "100%" : "unset"};
          `}
          onClick={() => closeOnClick && !FileMenu && setExpand(false)}
        >
          {dropdownMenu}
        </div>
      )}
    </div>
  );
};

export { DropdownBase };
