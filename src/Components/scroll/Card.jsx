/* eslint-disable react/prop-types */
import classNames from "classnames";
import { useInViewGlobal } from "../Context/ViewContext";

function FeatureCard({ gradient, children, id }) {
  const { inViewGlobal } = useInViewGlobal();

  return (
    <div
      className={classNames(
        " absolute inset-0 h-content w-full rounded-xl  bg-gradient-to-br transition-all flex items-center justify-center",
        gradient,
        inViewGlobal === id ? "opacity-100  " : "opacity-0"
      )}
    >
      {children}
    </div>
  );
}

export default FeatureCard;

export const First = ({ id }) => {
  return (
    <FeatureCard id={id} gradient="from-[#f7f0ff] to-[#a78efe]">
      <div className="mockup-browser w-full shadow-2xl border bg-base-300">
        <div className="mockup-browser-toolbar">
          <div className="input">https://EcoFootprint.com/ai</div>
        </div>
        <img src="images/first.png" alt="" />
      </div>
    </FeatureCard>
  );
};

export const Second = ({ id }) => {
  return (
    <FeatureCard id={id} gradient="from-[#f5fbff] to-[#addeff]">
      <div className="mockup-browser w-full shadow-2xl border bg-base-300">
        <div className="mockup-browser-toolbar">
          <div className="input">https://EcoFootprint.com/calculate</div>
        </div>
        <img src="images/second.png" alt="" />
      </div>
    </FeatureCard>
  );
};
export const Third = ({ id }) => {
  return (
    <FeatureCard id={id} gradient="from-[#f5fff7] to-[#adf8ff]">
      <div className="mockup-browser w-full shadow-2xl border bg-base-300">
        <div className="mockup-browser-toolbar">
          <div className="input">https://EcoFootprint.com/personal</div>
        </div>
        <img src="images/third.png" alt="" />
      </div>
    </FeatureCard>
  );
};
export const Fourth = ({ id }) => {
  return (
    <FeatureCard id={id} gradient="from-[#f7fff5] to-[#adffd8]">
      <div className="mockup-browser w-full shadow-2xl border bg-base-300">
        <div className="mockup-browser-toolbar">
          <div className="input">https://EcoFootprint.com/track</div>
        </div>
        <img src="images/fourth.png" alt="" />
      </div>
    </FeatureCard>
  );
};
export const Fifth = ({ id }) => {
  return (
    <FeatureCard id={id} gradient="from-[#fff7f5] to-[#ffd8ad]">
      <div className="mockup-browser w-full shadow-2xl border bg-base-300">
        <div className="mockup-browser-toolbar">
          <div className="input">https://EcoFootprint.com/coupon</div>
        </div>
        <img src="images/fifth.png" alt="" />
      </div>
    </FeatureCard>
  );
};

export const Sixth = ({ id }) => {
  return (
    <FeatureCard id={id} gradient="from-[#fef5ff] to-[#ffade1]">
      <div className="mockup-browser w-full shadow-2xl border bg-base-300">
        <div className="mockup-browser-toolbar">
          <div className="input">https://EcoFootprint.com/nature</div>
        </div>
        <img src="images/sixth.png" alt="" />
      </div>
    </FeatureCard>
  );
};
