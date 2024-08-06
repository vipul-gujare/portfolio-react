export const openInNewTab = (url: string | URL) =>
  window.open(url, "_blank", "noreferrer");

export const callIfEnterOrSpace = (
  event: React.KeyboardEvent,
  callback: () => void
) => {
  if (event.key === "Enter" || event.key === " ") {
    callback();
  }
};
