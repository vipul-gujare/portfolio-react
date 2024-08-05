import { useState } from "react";
import { Colors } from "../../constants";
import { ChevronDownIcon } from "./assets/ChevronDownIcon";

export type IDropdownItem = {
  title: string;
  nestingLevel?: number;
  initialIsOpen?: boolean;
} & (
  | {
      items: IDropdownItem[];
      icon?: never;
    }
  | {
      icon: JSX.Element;
      items?: never;
    }
);

export const DropdownItem = ({
  title,
  icon,
  initialIsOpen = false,
  nestingLevel = 0,
  items,
}: IDropdownItem) => {
  const [isOpen, setIsOpen] = useState<boolean>(initialIsOpen);
  const hasItems = !!items?.length;
  return (
    <>
      <div
        style={{
          gap: "0.2rem",
          alignItems: "center",
          flexDirection: "row",
          ...(nestingLevel && {
            paddingLeft: `calc(${nestingLevel} * 16px)`,
          }),
        }}
        className="dropdown-hoverable"
        {...(hasItems && {
          role: "button",
          onClick: () => setIsOpen((prev) => !prev),
        })}
      >
        <div
          {...(hasItems && {
            style: {
              transform: `rotate(${isOpen ? "0deg" : "-90deg"})`,
            },
          })}
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
              nestingLevel={nestingLevel + 1}
            />
          ))}
        </div>
      )}
    </>
  );
};
