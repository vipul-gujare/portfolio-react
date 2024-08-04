import { useState } from "react";
import { Colors } from "../../constants";
import { ChevronDownIcon } from "./assets/ChevronDownIcon";

export type IDropdownItem =
  | {
      title: string;
      items: IDropdownItem[];
      icon?: never;
      initialIsOpen?: boolean;
    }
  | {
      title: string;
      icon: JSX.Element;
      initialIsOpen?: boolean;
      items?: never;
    };

export const DropdownItem = ({
  title,
  icon,
  initialIsOpen = false,
  items,
}: IDropdownItem) => {
  const [isOpen, setIsOpen] = useState<boolean>(initialIsOpen);
  const hasItems = !!items?.length;
  return (
    <>
      <div
        style={{ gap: "0.2rem", alignItems: "center", flexDirection: "row" }}
        className="dropdown-hoverable"
        {...(hasItems && {
          role: "button",
          onClick: () => setIsOpen((prev) => !prev),
        })}
      >
        <div
          style={{
            transform: `rotate(${isOpen ? "0deg" : "-90deg"})`,
          }}
        >
          {hasItems ? (
            <ChevronDownIcon fill={Colors.TEXT_LIGHT_ACTIVE} />
          ) : (
            icon
          )}
        </div>
        {title}
      </div>
      {hasItems && isOpen && (
        <div
          style={{
            padding: "16px 0.5rem",
            flexDirection: "column",
          }}
        >
          {items.map(({ icon, title, items, initialIsOpen }, index) => (
            <DropdownItem
              title={title}
              icon={icon}
              key={title + index}
              items={items}
              initialIsOpen={initialIsOpen}
            />
          ))}
        </div>
      )}
    </>
  );
};
