import React, { Children, useState, useEffect } from "react";
import AppProvider from "../../providers/AppProvider.js";

const ChildrenWithKey = (children, fn) => {
  let mapper = child => (fn ? fn(child) : child)

  let result = Object.create(null)
  if (children)
    Children.map(children, c => c).forEach(child => {
      result[child.key] = mapper(child)
    })
  return result
};
const getValueForKey = (key, prev, next) => {
  return key in next ? next[key] : prev[key];
}

const pushChildren = (prev, next) => {
  const nextKeysPending = {};
  let pendingKeys = [];
  for (let prevKey in prev) {
    if (prevKey in next) {
      if (pendingKeys.length) {
        nextKeysPending[prevKey] = pendingKeys;
        pendingKeys = [];
      }
    } else {
      pendingKeys.push(prevKey);
    }
  }

  let i;
  let childMapping = {};
  for (let nextKey in next) {
    if (nextKeysPending[nextKey]) {
      for (i = 0; i < nextKeysPending[nextKey].length; i++) {
        let pendingNextKey = nextKeysPending[nextKey][i];
        childMapping[nextKeysPending[nextKey][i]] = getValueForKey(
          pendingNextKey,
          prev,
          next
        );
      }
    }
    childMapping[nextKey] = getValueForKey(nextKey, prev, next);
  }

  pendingKeys.map(
    item => (childMapping[item] = getValueForKey(item, prev, next))
  );
  const prevArray = Object.values(prev);

  if (prevArray.length >= 2) {
    delete childMapping[prevArray.pop().key];
  }
  console.log(childMapping)
  return childMapping;
};

const AnimationRoute = ({ children, ...props }) => {
  const [child, setChild] = useState({});
  const [first, setFirst] = useState(true);

  useEffect(() => {
    const getFirst = () => {
      return ChildrenWithKey(children, (child, index) =>
        React.cloneElement(child, {
          in: true
        })
      );
    };
    const getNext = () => {
      const childrenNext = ChildrenWithKey(children, (child, index) =>
        React.cloneElement(child, {
          in: true
        })
      );
      const childrenNew = pushChildren(child, childrenNext);
      return childrenNew
    };
    setChild(first ? getFirst() : getNext());
    setFirst(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [first, children]);

  const childrenRender = Object.values(child);

  return (
    <AppProvider>
      <div {...props}>{childrenRender}</div>
    </AppProvider>
  );
};

export default AnimationRoute;
