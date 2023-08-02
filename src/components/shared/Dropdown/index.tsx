import { ReactElement } from "react";
import { DropdownBase } from "./DropdownBase";
import { DropdownMenu } from "./DropdownMenu";

const Dropdown = ({
  children,
  hoverable = false,
  above = false,
  align = "left",
  menuItems,
  setValue,
}: {
  children: ReactElement;
  hoverable?: boolean;
  above?: boolean;
  align?: "left" | "center" | "right";
  menuItems: string[];
  setValue?: (item: string) => void;
}) => {
  return (
    <DropdownBase
      dropdownToggle={children}
      dropdownMenu={
        <DropdownMenu menuItems={menuItems} setValue={setValue} above={above} />
      }
      hoverable={hoverable}
      above={above}
      align={align}
      fullWidth
    />
  );
};

export { Dropdown, DropdownBase };
