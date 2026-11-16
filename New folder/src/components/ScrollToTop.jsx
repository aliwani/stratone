import React, { useEffect, useRef } from "react";
import {
  useLocation,
  useNavigationType,
} from "react-router-dom";

import { lenis } from "../main"; // apne path ke according change karo

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  const navigationType = useNavigationType();

  // Sirf first page load ke liye
  const isFirstLoad = useRef(true);

  // -----------------------------------
  // SAVE SCROLL POSITION
  // -----------------------------------
  useEffect(() => {
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

  // -----------------------------------
  // HANDLE NAVIGATION
  // -----------------------------------
  useEffect(() => {
    // =================================
    // HASH LINK
    // /about#team
    // =================================
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

    // =================================
    // FIRST PAGE LOAD
    // =================================
    if (isFirstLoad.current) {
      isFirstLoad.current = false;

      const navigation =
        performance.getEntriesByType("navigation")[0];

      const isRefresh =
        navigation?.type === "reload";

      // -------------------------------
      // REFRESH
      // -------------------------------
      if (isRefresh) {
        const savedPosition =
          sessionStorage.getItem(
            `scroll-${pathname}`
          );

        setTimeout(() => {
          if (savedPosition !== null) {
            lenis.scrollTo(
              Number(savedPosition),
              {
                immediate: true,
              }
            );
          } else {
            lenis.scrollTo(0, {
              immediate: true,
            });
          }
        }, 100);

        return;
      }

      // -------------------------------
      // NORMAL FIRST LOAD
      // -------------------------------
      lenis.scrollTo(0, {
        immediate: true,
      });

      return;
    }

    // =================================
    // BACK / FORWARD
    // =================================
    if (navigationType === "POP") {
      const savedPosition =
        sessionStorage.getItem(
          `scroll-${pathname}`
        );

      setTimeout(() => {
        if (savedPosition !== null) {
          lenis.scrollTo(
            Number(savedPosition),
            {
              immediate: true,
            }
          );
        } else {
          lenis.scrollTo(0, {
            immediate: true,
          });
        }
      }, 100);

      return;
    }

    // =================================
    // NORMAL LINK CLICK
    // =================================
    if (navigationType === "PUSH") {
      // First attempt
      lenis.scrollTo(0, {
        immediate: true,
      });

      // Make absolutely sure after
      // React has rendered the new page
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

      // One more frame because some components
      // may change layout after rendering
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