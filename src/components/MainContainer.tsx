import { Colors } from "../constants";
import { useMainContainerContext } from "../state/useMainContainerContext";

export const MainContainer = () => {
  const { selectedText } = useMainContainerContext();
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
        {selectedText
          ?.trim()
          .split("\n")
          .map((singleLineText, index) => (
            <div key={singleLineText + index}>{singleLineText}</div>
          ))}
      </pre>
    </div>
  );
};
