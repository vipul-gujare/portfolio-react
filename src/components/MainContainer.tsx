import { Colors, TabContentMap } from "../constants";
import { useMainContainerContext } from "../state/useMainContainerContext";

export const MainContainer = () => {
  const { selectedTab } = useMainContainerContext();
  const selectedText = TabContentMap.get(selectedTab);
  return (
    <div
      style={{
        backgroundColor: Colors.BACKGROUND_LIGHT,
        border: `1px solid ${Colors.BORDER_LIGHT}`,
        flex: 1,
        flexDirection: "column",
      }}
    >
      <div
        style={{
          backgroundColor: Colors.DARK,
        }}
      >
        <div
          style={{
            borderTop: `2px solid ${Colors.ACCENT}`,
            display: "inline-flex",
            width: "fit-content",
            padding: "0.5rem 1rem",
            backgroundColor: Colors.BACKGROUND_LIGHT,
          }}
        >
          {selectedTab}
        </div>
      </div>
      <div
        style={{
          overflow: "auto",
          flex: 1,
        }}
      >
        <pre
          contentEditable={true}
          spellCheck={false}
          className="main-container-editable"
          suppressContentEditableWarning
          style={{
            flex: 1,
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
    </div>
  );
};
