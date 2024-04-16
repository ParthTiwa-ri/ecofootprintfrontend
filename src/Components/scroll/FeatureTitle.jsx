import classNames from "classnames";
import { useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { useInViewGlobal } from "../Context/ViewContext";

/* eslint-disable react/prop-types */
function FeatureTitle({ children, id }) {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-50% 0px -50% 0px" });
  const { setInViewGlobal } = useInViewGlobal();
  useEffect(() => {
    if (isInView) {
      setInViewGlobal(id);
    }
  }, [isInView, id, setInViewGlobal]);
  return (
    <p
      ref={ref}
      className={classNames(
        "py-16 text-5xl leading-[4rem] transition-color",
        isInView ? "text-black" : "text-gray-300"
        // isInView ? " active-text" : "text-gray-300",
      )}
    >
      {children}
    </p>
  );
}

export default FeatureTitle;
