import { useState } from "react";
import { Colors } from "../../constants";
import { ChevronDownIcon } from "./assets/ChevronDownIcon";
import { callIfEnterOrSpace } from "../../utils";

export type IDropdownItem = {
  title: string;
  nestingLevel?: number;
  initialIsOpen?: boolean;
  onPress?: (textContent?: string) => void;
} & (
  | {
      items: IDropdownItem[];
      icon?: never;
      textToDisplay?: never;
    }
  | {
      icon: JSX.Element;
      textToDisplay?: string;
      items?: never;
    }
);

export const DropdownItem = ({
  title,
  icon,
  initialIsOpen = false,
  nestingLevel = 0,
  items,
  onPress,
  textToDisplay,
}: IDropdownItem) => {
  const [isOpen, setIsOpen] = useState<boolean>(initialIsOpen);
  const hasItems = !!items?.length;
  const handlePress = () => {
    if (hasItems) {
      setIsOpen((prev) => !prev);
      return;
    }
    if (onPress && textToDisplay) {
      onPress(textToDisplay);
      return;
    }
    if (onPress) {
      onPress();
      return;
    }
  };
  return (
    <>
      <div
        style={{
          gap: "0.2rem",
          alignItems: "center",
          flexDirection: "row",
          padding: "0.2rem",
          ...(nestingLevel && {
            paddingLeft: `calc(${nestingLevel} * 16px)`,
          }),
          ...(nestingLevel === 0 &&
            hasItems && {
              fontWeight: "bold",
            }),
        }}
        className="dropdown-hoverable"
        tabIndex={0}
        role="button"
        onClick={handlePress}
        onKeyUp={(event) => callIfEnterOrSpace(event, handlePress)}
      >
        {hasItems ? (
          <div
            style={{
              transform: `rotate(${isOpen ? "0deg" : "-90deg"})`,
            }}
          >
            <ChevronDownIcon fill={Colors.TEXT_LIGHT_ACTIVE} />
          </div>
        ) : (
          icon
        )}
        {title}
      </div>
      {hasItems && isOpen && (
        <div
          style={{
            flexDirection: "column",
            position: "relative",
          }}
        >
          <div
            style={{
              borderLeft: `1px solid #3D3E3F`,
              height: "100%",
              marginLeft: `calc(${nestingLevel + 1} * 0.65rem)`,
              position: "absolute",
              zIndex: 1,
            }}
          ></div>
          {items.map(
            (
              {
                icon,
                title,
                items,
                initialIsOpen,
                textToDisplay,
                onPress: itemOnPress,
              },
              index
            ) => (
              // @ts-expect-error Type '{ title: string; icon: Element | undefined; initialIsOpen: boolean | undefined; items: IDropdownItem[] | undefined; key: string; }' is not assignable to type 'IntrinsicAttributes & IDropdownItem'.
              <DropdownItem
                title={title}
                icon={icon}
                key={title + index}
                items={items}
                initialIsOpen={initialIsOpen}
                nestingLevel={nestingLevel + 1}
                onPress={itemOnPress ?? onPress}
                textToDisplay={textToDisplay}
              />
            )
          )}
        </div>
      )}
    </>
  );
};
