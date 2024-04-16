import { Fifth, First, Fourth, Second, Sixth, Third } from "./Card";
import FeatureTitle from "./FeatureTitle";

// import FeatureTitle from "./components/FeatureTitle";

const features = [
  {
    title: "Use advanced AI recognition",
    id: "todo-list",
    card: First,
  },
  { title: "Calculate Carbon footprint", id: "team", card: Second },

  { title: "Get personalized recommendations", id: "colors", card: Third },
  {
    title: "Track what you completetd",
    id: "availability",
    card: Fourth,
  },
  { title: "Complete task and get coupons", id: "music", card: Fifth },
  {
    title: "Contribute to nature",
    id: "scheduling-links",
    card: Sixth,
  },
];

export default function ScollFeature() {
  return (
    <div className="mx-auto max-w-6xl px-4 ">
      <div className=" flex w-full g-20 items-start">
        <div className="left w-full py-[50vh]">
          <ul>
            {features.map((feature) => {
              return (
                <li className=" list-none" key={feature.id}>
                  <FeatureTitle id={feature.id}>{feature.title}</FeatureTitle>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="right w-full sticky h-screen flex items-center top-0">
          {/* <div className=" relative w-full aspect-square rounded-2xl bg-gray-100  "> */}
          <div className=" relative  w-full rounded-2xl bg-gray-100  ">
            {features.map((feature) => (
              <feature.card id={feature.id} key={feature.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
