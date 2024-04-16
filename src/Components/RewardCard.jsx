import React from 'react'

function RewardCard({ bgImage, brandName, requiredCoins, disabled, couponCode, onRedeem }) {
  return (
    <div className={`bg-white p-2 w-[15rem] h-[20rem] rounded-xl drop-shadow-xl flex flex-col gap-5 items-center hover:drop-shadow-2xl hover:scale-110 transition-all duration-300 justify-center ${disabled ? 'opacity-50 pointer-events-none' : ''}`}>
        <img src={bgImage} alt="" />
        <h2 className="text-2xl font-bold text-green-800">{brandName}</h2>
        <h2 className="text-xl font-bold text-black">🪙 {requiredCoins}</h2>
        {couponCode ? (
          <p className="text-lg font-semibold">Coupon Code: {couponCode}</p>
        ) : (
          <button 
            className="btn btn-outline btn-success"
            disabled={disabled}
            onClick={onRedeem}
          >
            Redeem
          </button>
        )}
    </div>
  )
}

export default RewardCard
