import * as React from "react";
import { render } from "react-dom";

import useSticky from "./useSticky";

import "./styles.scss";

function App() {
  const {
    getContainerProps,
    getStickyProps,
    containerRef,
    stickyRef
  } = useSticky();

  // prettier-ignore
  const onChange = (e: any) => {console.log(`onChange`, e)}
  // prettier-ignore
  const onStuck = (e: any) => {console.log(`onStuck`, e)}
  // prettier-ignore
  const onUnstuck = (e: any) => {console.log(`onUnstuck`, e)}

  const contentElements = Array.from({ length: 5 }, (_, i) => i + 1).map(i => (
    <section
      key={i}
      ref={containerRef}
      {...getContainerProps({ className: "content" })}
    >
      <h1
        ref={stickyRef}
        {...getStickyProps({
          onChange,
          onStuck,
          onUnstuck,
          className: "header"
        })}
      >
        Header {i}
      </h1>
      <article>This is the content for {i}</article>
    </section>
  ));

  return <div className="App">{contentElements}</div>;
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
