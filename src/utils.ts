/**
 * Provide function for scroll by href with offset position
 * @param offsetY 
 */
export const scrollOffsetFunction =
  (offsetY: number) => (event: React.SyntheticEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const navToEl = document.getElementById(
      event.currentTarget.getAttribute("href")?.split("#")[1] || ""
    );
    if (navToEl) {
      window.scrollTo({
        top: navToEl.offsetTop + offsetY,
        behavior: "smooth",
      });
    }
  };
