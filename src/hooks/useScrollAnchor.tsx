import { useEffect } from "react";
import { useLocation } from "react-router";
interface ScrollAnchorProps {
  behavior?: ScrollBehavior;
  block?: ScrollLogicalPosition;
}

export const useScrollAnchor = (
  defaultScrollOptions: ScrollAnchorProps = {
    behavior: "smooth",
    block: "start",
  }
) => {
  const location = useLocation();
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (location.hash) {
        const element = document.querySelector(location.hash);
        if (element) {
          element.scrollIntoView(defaultScrollOptions);
        } else {
          window.scrollTo({ top: 0, ...defaultScrollOptions });
        }
      }
    }, 0);
    return () => clearTimeout(timeoutId);
  }, [location.hash]);
};
