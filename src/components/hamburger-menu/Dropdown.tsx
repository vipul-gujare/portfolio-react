import { DropdownItem, IDropdownItem } from "./DropdownItem";

interface DropdownProps {
  items: IDropdownItem[];
  onPress: (text?: string) => void;
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
      {items.map(({ title, icon, initialIsOpen, items, textToDisplay }) => (
        // @ts-expect-error Type '{ title: string; icon: Element | undefined; initialIsOpen: boolean | undefined; items: IDropdownItem[] | undefined; onPress: (text?: string | undefined) => void; textToDisplay: string | undefined; key: string; }' is not assignable to type 'IntrinsicAttributes & IDropdownItem'.
        <DropdownItem
          title={title}
          icon={icon}
          initialIsOpen={initialIsOpen}
          items={items}
          onPress={onPress}
          textToDisplay={textToDisplay}
          key={title}
        />
      ))}
    </div>
  );
};
