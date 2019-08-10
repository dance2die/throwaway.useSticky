import * as React from "react";

/**
 * Based on following resources
 *
 * 1. https://developers.google.com/web/updates/2017/09/sticky-headers
 * 2. https://github.com/ryanwalters/sticky-events
 */

// export interface StickyProps<T extends HTMLElement> {
//   container: React.MutableRefObject<T>;
//   stickySelector: string;
// }

const sentinelClasses = {
  SENTINEL: "sticky-events--sentinel",
  SENTINEL_TOP: "sticky-events--sentinel-top",
  SENTINEL_BOTTOM: "sticky-events--sentinel-bottom"
};

function useSticky<StickyProps>() {
  // Let users assign refs instead of letting them create their own~
  // Easier to use & less boiler-plate to write.
  const containerRef = React.useRef(document.body);
  const stickyRef = React.useRef(document.body.firstElementChild);

  const getContainerProps = props => {
    console.log(`getContainerProps props`, props);
  };
  const getStickyProps = props => {
    console.log(`getStickyProps props`, props);
  };

  return { getContainerProps, getStickyProps, containerRef, stickyRef };
}

export default useSticky;
