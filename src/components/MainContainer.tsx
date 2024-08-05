import { Colors } from "../constants";

export const MainContainer = () => {
  return (
    <div
      style={{
        backgroundColor: Colors.BACKGROUND_LIGHT,
        flex: 1,
      }}
    >
      <pre
        contentEditable={true}
        spellCheck={false}
        className="main-container-editable"
        suppressContentEditableWarning
        style={{
          width: "100%",
        }}
      >
        Lorem Ipsum
      </pre>
    </div>
  );
};
