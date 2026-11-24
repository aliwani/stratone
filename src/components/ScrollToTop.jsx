
import React, { useEffect, useRef } from "react";
import {
  useLocation,
  useNavigationType,
} from "react-router-dom";

import { getLenis } from "../lib/lenis";

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  const navigationType = useNavigationType();

  const isFirstLoad = useRef(true);

  // SAVE SCROLL POSITION
  useEffect(() => {
    const lenis = getLenis();

    if (!lenis) return;

    const saveScroll = () => {
      sessionStorage.setItem(
        `scroll-${pathname}`,
        String(lenis.scroll)
      );
    };

    lenis.on("scroll", saveScroll);

    return () => {
      lenis.off("scroll", saveScroll);
    };
  }, [pathname]);

  // HANDLE NAVIGATION
  useEffect(() => {
    const lenis = getLenis();

    if (!lenis) return;

    // HASH LINK
    if (hash) {
      const timer = setTimeout(() => {
        const element = document.getElementById(
          hash.substring(1)
        );

        if (element) {
          lenis.scrollTo(element, {
            duration: 1,
          });
        }
      }, 150);

      return () => clearTimeout(timer);
    }

    // FIRST PAGE LOAD
    if (isFirstLoad.current) {
      isFirstLoad.current = false;

      const navigation =
        performance.getEntriesByType("navigation")[0];

      const isRefresh =
        navigation?.type === "reload";

      if (isRefresh) {
        const savedPosition = sessionStorage.getItem(
          `scroll-${pathname}`
        );

        const timer = setTimeout(() => {
          if (savedPosition !== null) {
            lenis.scrollTo(Number(savedPosition), {
              immediate: true,
            });
          } else {
            lenis.scrollTo(0, {
              immediate: true,
            });
          }
        }, 100);

        return () => clearTimeout(timer);
      }

      lenis.scrollTo(0, {
        immediate: true,
      });

      return;
    }

    // BACK / FORWARD
    if (navigationType === "POP") {
      const savedPosition = sessionStorage.getItem(
        `scroll-${pathname}`
      );

      const timer = setTimeout(() => {
        if (savedPosition !== null) {
          lenis.scrollTo(Number(savedPosition), {
            immediate: true,
          });
        } else {
          lenis.scrollTo(0, {
            immediate: true,
          });
        }
      }, 100);

      return () => clearTimeout(timer);
    }

    // NORMAL LINK CLICK
    if (navigationType === "PUSH") {
      lenis.scrollTo(0, {
        immediate: true,
      });

      requestAnimationFrame(() => {
        lenis.scrollTo(0, {
          immediate: true,
        });

        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "auto",
        });
      });

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          lenis.scrollTo(0, {
            immediate: true,
          });

          window.scrollTo(0, 0);
        });
      });
    }
  }, [pathname, hash, navigationType]);

  return null;
}

export default ScrollToTop;
