import { Colors } from "../constants";

export const Terminal = () => {
  return (
    <div
      style={{
        backgroundColor: Colors.DARK,
        border: `1px solid ${Colors.BORDER_LIGHT}`,
        height: "30vh",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          flexDirection: "row",
          fontSize: "0.75rem",
        }}
      >
        {["PROBLEMS", "OUTPUT", "TERMINAL", "COMMENTS"].map((txt) => (
          <div
            key={txt}
            style={{
              padding: "0.5rem 1rem",
              textTransform: "uppercase",
              ...(txt === "TERMINAL" && {
                borderBottom: `2px solid ${Colors.ACCENT}`,
              }),
            }}
          >
            {txt}
          </div>
        ))}
        <div
          style={{
            marginLeft: "auto",
            marginRight: "2rem",
            alignItems: "center",
          }}
        >
          &#10005;
        </div>
      </div>
      <div style={{ flex: 1, paddingLeft: "0.5rem", marginTop: "0.5rem" }}>
        <code>
          <span style={{ color: Colors.ICON_YELLOW }}>vipulgujare:$</span> Hi
          there! Welcome to my website!
        </code>
      </div>
    </div>
  );
};
