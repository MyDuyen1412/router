import React, { useEffect, useState, useRef } from "react";
import classNames from "classnames";
import usePrevious from "../../../hook/usePrevious.js";
import "../styles.css";

const Animation = ({
  children,
  id,
  timeout,
  slideToLeft,
  slideToRight,
  slideToTop,
  slideToBottom,
  fadeIn
}) => {
  const [prevChildrent, setPrevChildrent] = usePrevious();
  const [prevId, setPrevId] = usePrevious();
  const [state, setState] = useState({
    curChild: children,
    prevChild: null
  });
  const [animation, setAnimation] = useState(false);
  const refCur = useRef();
  const refPrev = useRef();

  useEffect(() => {
    if (prevId !== id) {
      setState({
        curChild: children,
        prevChild: prevChildrent
      });
    }
    setPrevChildrent(children);
    setPrevId(id);
    setAnimation(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [children, prevChildrent, prevId, id]);

  useEffect(() => {
    const node = refCur.current;
    setTimeout(() => setAnimation(true), 100);
    if (node) {
      // node.addEventListener("transitionend", swapChildren);
      setTimeout(() => swapChildren(), timeout);
      document.querySelector(
        ".animation-route .animation-route__cur"
      ).style.transition = `all ${timeout}ms ease-in-out`;
    }
    // return () => {
    //   if (node) {
    //     // node.removeEventListener("transitionend", swapChildren);
    //   }
    // };
  });

  const swapChildren = () => {
    setState({
      curChild: children,
      prevChild: null
    });
  };

  return (
    <div className="animation-route">
      {state.prevChild ? (
        <>
          <div
            ref={refPrev}
            className={classNames("animation-route__prev", {
              "animation-prev": animation
            })}
          >
            {state.prevChild}
          </div>
          <div
            ref={refCur}
            className={classNames("animation-route__cur", {
              "animation-route__slideToLeft": slideToLeft,
              "animation-route__slideToRight": slideToRight,
              "animation-route__slideToTop": slideToTop,
              "animation-route__slideToBottom": slideToBottom,
              "animation-cur": animation
            })}
          >
            {state.curChild}
          </div>
        </>
      ) : (
        state.curChild
      )}
    </div>
  );
};

export default Animation;
