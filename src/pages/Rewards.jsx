import { useState } from "react";
import RewardCard from "../Components/RewardCard";
import Navbar from "../ui/Navbar";
import { useRecoilState } from "recoil";
import { coin } from "./state";

function Rewards() {
  const [totalCoins, setTotalCoins] = useRecoilState(coin);
  const [couponCodes, setCouponCodes] = useState({});

  const [cardStatus, setCardStatus] = useState([
    {
      id: 1,
      brandName: "Myntra",
      requiredCoins: 20,
      disabled: totalCoins < 20,
      logoUrl:
        "https://1000logos.net/wp-content/uploads/2022/08/Myntra-Logo.png",
    },
    {
      id: 2,
      brandName: "Amazon",
      requiredCoins: 40,
      disabled: totalCoins < 40,
      logoUrl:
        "https://cdn.pixabay.com/photo/2021/08/10/16/02/amazon-6536326_1280.png",
    },
    {
      id: 3,
      brandName: "Uber Eats",
      requiredCoins: 60,
      disabled: totalCoins < 60,
      logoUrl:
        "https://1000logos.net/wp-content/uploads/2021/04/Uber-Eats-logo.png",
    },
    {
      id: 4,
      brandName: "Netflix",
      requiredCoins: 80,
      disabled: totalCoins < 80,
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png",
    },
    {
      id: 5,
      brandName: "Starbucks",
      requiredCoins: 1800,
      disabled: totalCoins < 1800,
      logoUrl: "",
    },
    {
      id: 6,
      brandName: "Nike",
      requiredCoins: 2200,
      disabled: totalCoins < 2200,
      logoUrl: "",
    },
    {
      id: 7,
      brandName: "Domino's Pizza",
      requiredCoins: 1700,
      disabled: totalCoins < 1700,
      logoUrl: "",
    },
    {
      id: 8,
      brandName: "Adidas",
      requiredCoins: 2800,
      disabled: totalCoins < 2800,
      logoUrl: "",
    },
    {
      id: 9,
      brandName: "Flipkart",
      requiredCoins: 2000,
      disabled: totalCoins < 2000,
      logoUrl: "",
    },
    {
      id: 10,
      brandName: "McDonald's",
      requiredCoins: 1600,
      disabled: totalCoins < 1600,
      logoUrl: "",
    },
    {
      id: 11,
      brandName: "Apple",
      requiredCoins: 3500,
      disabled: totalCoins < 3500,
      logoUrl: "",
    },
    {
      id: 12,
      brandName: "Zara",
      requiredCoins: 2400,
      disabled: totalCoins < 2400,
      logoUrl: "",
    },
    {
      id: 13,
      brandName: "Subway",
      requiredCoins: 1900,
      disabled: totalCoins < 1900,
      logoUrl: "",
    },
    {
      id: 14,
      brandName: "Sony",
      requiredCoins: 2600,
      disabled: totalCoins < 2600,
      logoUrl: "",
    },
    {
      id: 15,
      brandName: "Burger King",
      requiredCoins: 2100,
      disabled: totalCoins < 2100,
      logoUrl: "",
    },
    {
      id: 16,
      brandName: "Samsung",
      requiredCoins: 3200,
      disabled: totalCoins < 3200,
      logoUrl: "",
    },
    {
      id: 17,
      brandName: "KFC",
      requiredCoins: 1700,
      disabled: totalCoins < 1700,
    },
    {
      id: 18,
      brandName: "H&M",
      requiredCoins: 2300,
      disabled: totalCoins < 2300,
      logoUrl: "",
    },
    {
      id: 19,
      brandName: "PlayStation",
      requiredCoins: 2700,
      disabled: totalCoins < 2700,
      logoUrl: "",
    },
    {
      id: 20,
      brandName: "Google Play",
      requiredCoins: 2000,
      disabled: totalCoins < 2000,
      logoUrl: "",
    },
  ]);

  const handleRedeem = (id, requiredCoins) => {
    if (totalCoins >= requiredCoins) {
      const couponCode = Math.floor(1000000000 + Math.random() * 9000000000);
      alert(`Coupon redeemed! Your coupon code: ${couponCode}`);
      setTotalCoins(totalCoins - requiredCoins);
      setCouponCodes((prevCodes) => ({ ...prevCodes, [id]: couponCode }));
    } else {
      alert("Insufficient balance to redeem this coupon!");
    }
  };

  return (
    <div className="w-full space-y-5 bg-white">
      <Navbar />
      <div className="bg-green-800 py-20">
        <div className=" flex flex-col items-center h-[15rem] max-w-6xl space-y-5 container mx-auto">
          <h1 className="text-left text-6xl font-bold text-green-500">
            Rewards and benefits every time you reduce carbon emissions!
          </h1>
          <div className="w-full flex items-end justify-between">
            <div>
              {/* <h2 className="text-3xl font-semibold text-white">
                Hi, Username
              </h2> */}
            </div>
            <div className="flex flex-col items-end">
              <p className="text-2xl font-semibold text-white">
                🪙 {totalCoins}
              </p>
              <h2 className="text-3xl font-semibold text-white">
                Coins Balance
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-6xl container mx-auto p-5">
        <h1 className="text-3xl text-green-800 font-bold mb-10">Top Rewards</h1>
        <div className="grid grid-cols-4 place-content-center">
          {cardStatus.slice(0, 4).map((newCard) => (
            <RewardCard
              key={newCard.id}
              brandName={newCard.brandName}
              requiredCoins={newCard.requiredCoins}
              disabled={newCard.disabled}
              couponCode={couponCodes[newCard.id]}
              bgImage={newCard.logoUrl}
              onRedeem={() => handleRedeem(newCard.id, newCard.requiredCoins)}
            />
          ))}
        </div>
        <h1 className="text-3xl text-green-800 font-bold my-10">More</h1>
        <div className="grid grid-cols-4 place-content-center gap-5">
          {cardStatus.slice(4).map((card) => (
            <RewardCard
              key={card.id}
              brandName={card.brandName}
              requiredCoins={card.requiredCoins}
              disabled={card.disabled}
              couponCode={couponCodes[card.id]}
              onRedeem={() => handleRedeem(card.id, card.requiredCoins)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Rewards;
