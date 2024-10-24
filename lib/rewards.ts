import { RewardsData } from "@/models/Rewards"; // Ensure this import is correct

export const rewards: RewardsData = {
  rewards: {
    lyfDiscounts: {
      title: "Discounts at LYF Funan",
      items: [
        {
          rewardId: "001",
          name: "☕️ Free Coffee at Bond Café",
          description: "Enjoy a free coffee at the Bond Café inside LYF Funan.",
          validity: "Valid until October 30, 2024",
          smilesCost: 50,
          provider: "LYF Funan",
          location: "Bond Café, 1st Floor",
          type: "food",
          emoji: "☕️",
          imageUrl: "https://example.com/images/free-coffee.jpg",
        },
        {
          rewardId: "002",
          name: "💻 10% Off Co-working Space Booking",
          description:
            "Get 10% off your next booking at Connect, LYF Funan's co-working space.",
          validity: "Valid until November 15, 2024",
          smilesCost: 100,
          provider: "LYF Funan",
          location: "Connect, 2nd Floor",
          type: "service",
          emoji: "💻",
          imageUrl: "https://example.com/images/coworking-discount.jpg",
        },
        {
          rewardId: "003",
          name: "🏋️‍♂️ Free Gym Pass",
          description:
            "Access the Burn gym for free for one day. Stay active while at LYF!",
          validity: "Valid until December 1, 2024",
          smilesCost: 150,
          provider: "LYF Funan",
          location: "Burn Gym, 3rd Floor",
          type: "fitness",
          emoji: "🏋️‍♂️",
          imageUrl: "https://example.com/images/free-gym-pass.jpg",
        },
      ],
    },
    nearbyBusinessDiscounts: {
      title: "Deals from Nearby Businesses",
      items: [
        {
          rewardId: "004",
          name: "🍽️ 20% Off Dinner at Bento by Eight Café & Studio",
          description:
            "Enjoy 20% off your dinner at Bento by Eight, located just minutes away from LYF Funan.",
          validity: "Valid until October 31, 2024",
          smilesCost: 200,
          provider: "Bento by Eight Café & Studio",
          location: "8 Raffles Ave, Singapore",
          type: "food",
          emoji: "🍽️",
          imageUrl: "https://example.com/images/bento-cafe.jpg",
        },
        {
          rewardId: "005",
          name: "🧘 Free Yoga Class at Yoga Movement",
          description:
            "Attend a free yoga class at Yoga Movement, just around the corner from LYF Funan.",
          validity: "Valid until November 20, 2024",
          smilesCost: 250,
          provider: "Yoga Movement",
          location: "22 Keong Saik Rd, Singapore",
          type: "wellness",
          emoji: "🧘",
          imageUrl: "https://example.com/images/yoga-movement.jpg",
        },
        {
          rewardId: "006",
          name: "🎬 2-for-1 Movie Tickets at The Projector",
          description:
            "Buy one movie ticket and get another free at The Projector, a nearby boutique cinema.",
          validity: "Valid until October 28, 2024",
          smilesCost: 180,
          provider: "The Projector",
          location: "6001 Beach Rd, Singapore",
          type: "entertainment",
          emoji: "🎬",
          imageUrl: "https://example.com/images/projector-movie.jpg",
        },
        {
          rewardId: "007",
          name: "🖼️ Free Entry to National Gallery Singapore",
          description:
            "Explore Southeast Asian art with free entry to the National Gallery Singapore, a short walk from LYF Funan.",
          validity: "Valid until December 15, 2024",
          smilesCost: 220,
          provider: "National Gallery Singapore",
          location: "1 St. Andrew's Rd, Singapore",
          type: "entertainment",
          emoji: "🖼️",
          imageUrl: "https://example.com/images/national-gallery.jpg",
        },
        {
          rewardId: "008",
          name: "🍜 15% Off at Ajumma’s Korean Restaurant",
          description:
            "Enjoy 15% off your meal at Ajumma’s Korean Restaurant, a popular spot just near LYF Funan.",
          validity: "Valid until November 30, 2024",
          smilesCost: 170,
          provider: "Ajumma’s Korean Restaurant",
          location: "109 North Bridge Rd, Singapore",
          type: "food",
          emoji: "🍜",
          imageUrl: "https://example.com/images/ajummas-restaurant.jpg",
        },
      ],
    },
    specialOffers: {
      title: "Special Offers and Experiences",
      items: [
        {
          rewardId: "009",
          name: "👨‍🍳 Private Cooking Session at Bond Kitchen",
          description:
            "Join a private cooking session with a professional chef at Bond Kitchen. Learn to cook local dishes!",
          validity: "Valid until December 5, 2024",
          smilesCost: 300,
          provider: "LYF Funan",
          location: "Bond Kitchen, 1st Floor",
          type: "experience",
          emoji: "👨‍🍳",
          imageUrl: "https://example.com/images/cooking-class.jpg",
        },
        {
          rewardId: "010",
          name: "👕 Exclusive LYF T-shirt",
          description:
            "Get an exclusive LYF-branded T-shirt, only available for community members.",
          validity: "Until stocks last",
          smilesCost: 120,
          provider: "LYF Funan",
          location: "Reception Desk",
          type: "merchandise",
          emoji: "👕",
          imageUrl: "https://example.com/images/lyf-tshirt.jpg",
        },
        {
          rewardId: "011",
          name: "🚤 Sunset River Cruise",
          description:
            "Enjoy a scenic sunset cruise on the river. A relaxing way to end your day at LYF.",
          validity: "Valid until November 30, 2024",
          smilesCost: 350,
          provider: "Riverboat Tours",
          location: "Pier 3, River Road",
          type: "experience",
          emoji: "🚤",
          imageUrl: "https://example.com/images/sunset-cruise.jpg",
        },
      ],
    },
  },
};
