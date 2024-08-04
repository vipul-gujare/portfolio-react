import { DropdownItem, IDropdownItem } from "./DropdownItem";

interface DropdownProps {
  items: IDropdownItem[];
}
export const Dropdown = ({ items }: DropdownProps) => {
  return (
    <div
      style={{
        position: "relative",
        flexDirection: "column",
      }}
      className="dropdown-container"
    >
      {items.map(({ title, icon, initialIsOpen, items }) => (
        <DropdownItem
          title={title}
          icon={icon}
          initialIsOpen={initialIsOpen}
          items={items}
          key={title}
        />
      ))}
    </div>
  );
};
