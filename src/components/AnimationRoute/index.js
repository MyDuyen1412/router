import React from "react";
import { Switch, useLocation } from "react-router-dom";
import Animation from "./Animation";

const AnimationRoute = ({
  children,
  timeout,
  slideToLeft,
  slideToRight,
  slideToTop,
  slideToBottom,
  fadeIn
}) => {
  const location = useLocation();
  return (
    <Animation
      id={location.pathname}
      timeout={timeout}
      slideToLeft={slideToLeft}
      slideToRight={slideToRight}
      slideToTop={slideToTop}
      slideToBottom={slideToBottom}
      fadeIn={fadeIn}
    >
      {React.Children.count(children) <= 1 &&
      children.type.name === "Switch" ? (
        <>
          {children.props.location
            ? children
            : React.cloneElement(children, {
                location: location
              })}
        </>
      ) : (
        <Switch location={location}>{children}</Switch>
      )}
    </Animation>
  );
};

export default AnimationRoute;
