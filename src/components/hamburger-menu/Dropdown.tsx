import { Tab } from "../../types";
import { DropdownItem, IDropdownItem } from "./DropdownItem";

interface DropdownProps {
  items: IDropdownItem[];
  onPress: (tab?: Tab) => void;
}
export const Dropdown = ({ items, onPress }: DropdownProps) => {
  return (
    <div
      style={{
        position: "relative",
        flexDirection: "column",
      }}
      className="dropdown-container"
    >
      {items.map(({ title, icon, initialIsOpen, items }) => (
        // @ts-expect-error Type '{ title: string; icon: Element | undefined; initialIsOpen: boolean | undefined; items: IDropdownItem[] | undefined; onPress: (text?: string | undefined) => void; tab: string | undefined; key: string; }' is not assignable to type 'IntrinsicAttributes & IDropdownItem'.
        <DropdownItem
          title={title}
          icon={icon}
          initialIsOpen={initialIsOpen}
          items={items}
          onPress={onPress}
          key={title}
        />
      ))}
    </div>
  );
};
