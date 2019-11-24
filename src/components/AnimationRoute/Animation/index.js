import React, { useEffect, useState, useRef } from "react";
import classNames from "classnames";
import usePrevious from "../../../hook/usePrevious.js";
import '../styles.css';

const Animation = ({ children, id }) => {
  const [prevChildrent, setPrevChildrent] = usePrevious();
  const [prevId, setPrevId] = usePrevious();
  const [state, SetState] = useState({
    curChild: children,
    prevChild: null,
  });
  const [animation, setAnimation] = useState(false);
  const ref = useRef();

  useEffect(() => {
    if (prevId !== id) {
      SetState({
        curChild: children,
        prevChild: prevChildrent,
      });
    }
    setPrevChildrent(children);
    setPrevId(id);
    setAnimation(false);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [children, prevChildrent, prevId, id]);

  useEffect(() => {
    const node = ref.current;
    setTimeout(() => setAnimation(true), 100);
    if (node) {
      node.addEventListener("transitionend", swapChildren);
    }
    return () => {
      if (node) {
        node.removeEventListener("transitionend", swapChildren);
      }
    };
  });

  const swapChildren = () => {
    SetState({
      curChild: children,
      prevChild: null,
    });
  };

  return (
    <div className="animation-route">
      {state.prevChild || state.curChild}

      {state.prevChild && (
        <div
          ref={ref}
          className={classNames("animation-route__container", {
            'animation': animation
          })}
        >
          {state.curChild}
        </div>
      )}
    </div>
  );
};

export default Animation;
