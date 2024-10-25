import React from 'react'
import './rewards.styles.css'
import { FaSmile } from 'react-icons/fa';



export const rewards = {
    rewards: {
        lyfDiscounts: {
            title: "Discounts at LYF Funan",
            items: [
                {
                    "rewardId": "001",
                    "name": "Free Coffee at Bond Café",
                    "description": "Enjoy a free coffee at the Bond Café inside LYF Funan.",
                    "validity": "Valid until October 30, 2024",
                    "smilesCost": 50,
                    "provider": "LYF Funan",
                    "location": "Bond Café, 1st Floor",
                    "type": "food",
                    "discount": "10%",
                    "imageUrl": "https://images.unsplash.com/photo-1453614512568-c4024d13c247?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                },
                {
                    "rewardId": "002",
                    "name": "10% Off Co-working Space Booking",
                    "description": "Get 10% off your next booking at Connect, LYF Funan's co-working space.",
                    "validity": "Valid until November 15, 2024",
                    "smilesCost": 100,
                    "provider": "LYF Funan",
                    "location": "Connect, 2nd Floor",
                    "type": "service",
                    "discount": "10%",
                    "imageUrl": "https://images.unsplash.com/photo-1624555130581-1d9cca783bc0?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                },
                {
                    "rewardId": "003",
                    "name": "Free Gym Pass",
                    "description": "Access the Burn gym for free for one day. Stay active while at LYF!",
                    "validity": "Valid until December 1, 2024",
                    "smilesCost": 150,
                    "provider": "LYF Funan",
                    "location": "Burn Gym, 3rd Floor",
                    "type": "fitness",
                    "imageUrl": "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    "discount": "10%",
                },
                {
                    "rewardId": "004",
                    "name": "20% Off Dinner at Bistro28",
                    "description": "Enjoy 20% off your dinner bill at Bistro28, a cozy restaurant just 5 minutes from LYF Funan.",
                    "validity": "Valid until October 31, 2024",
                    "smilesCost": 200,
                    "provider": "Bistro28",
                    "location": "28 River Road, Singapore",
                    "type": "food",
                    "imageUrl": "https://plus.unsplash.com/premium_photo-1723120354831-f06680d5784a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    "discount":"13%"
                },
                {
                    "rewardId": "005",
                    "name": "Free Yoga Class at Lotus Studio",
                    "description": "Attend a free yoga class at Lotus Studio. Recharge your body and mind!",
                    "validity": "Valid until November 20, 2024",
                    "smilesCost": 250,
                    "provider": "Lotus Yoga Studio",
                    "location": "15 Orchard Street, Singapore",
                    "type": "wellness",
                    "imageUrl": "https://plus.unsplash.com/premium_photo-1663047487227-0f3cd88ed8aa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    "discount": "10%",
                }
            ]
        }
    }
};

const RewardScreen = () => {
    const { items } = rewards.rewards.lyfDiscounts;
  return (
    <>
             {items.map((item) => (
                <div className="reward-card" key={item.rewardId}>
                    <div className="discount-badge">
                        {item.discount}
                    </div>
                     <div className="smile-cost">
                        <FaSmile /> {item.smilesCost}
                    </div>
                    
                    <img src={item.imageUrl} alt={item.name} className="reward-image" />
                    <h3 className="reward-title">{item.name}</h3>
                    <p className="reward-validity">{item.validity}</p>
                    
                </div>
            ))}
       </>     
   
  )
}

export default RewardScreen