import Yoga from "../images/yoga.jpeg";
import DigitalNomads from "../images/digital-meetup.jpeg";
import MovieNight from "../images/movie-night.jpeg";
import CookingWorkshop from "../images/cooking.png";
import PhotographyWalk from "../images/photography.jpg";
import NightRun from "../images/running.jpg";
import BoardGames from "../images/board-games.jpg";
import KaraokeNight from "../images/karoke.jpg";
import WeekendBrunch from "../images/kitchen.jpg";
import CyclingAdventure from "../images/cycling.jpg";
// import ChinatownTour from "../images/chinatown-tour.jpg";
// import HawkerCenterTour from "../images/hawker-center.jpg";
// import LocalCoffeeWorkshop from "../images/local-coffee.jpg";

export const data = {
  community: {
    name: "LYF Funan",
    location: "Singapore",
    description:
      "A vibrant hub of social activities, located in the heart of Singapore. Experience community-driven events, coworking, and creative engagements.",
    members: 245,
  },
  categories: [
    {
      title: "Plans at LYF Funan",
      plans: [
        {
          plan_id: 1,
          name: "Morning Yoga at the Rooftop",
          description:
            "Start your day with an energizing yoga session on our scenic rooftop. Open to all skill levels.",
          time: "7:00 AM - 8:00 AM",
          date: "2024-10-21",
          location: "Rooftop",
          created_by: "LYF Funan",
          smiles: 0,
          status: "Open",
          participants: 12,
          max_participants: 20,
          is_free: true,
          category: "Health & Wellness",
          image: Yoga,
        },
        {
          plan_id: 2,
          name: "Digital Nomads Meetup",
          description:
            "Meet fellow remote workers and digital nomads over coffee at the Bond kitchen.",
          time: "3:00 PM - 5:00 PM",
          date: "2024-10-21",
          location: "Bond Kitchen",
          created_by: "AI",
          smiles: 5,
          status: "Open",
          participants: 8,
          max_participants: 15,
          is_free: true,
          category: "Networking",
          image: DigitalNomads,
        },
        {
          plan_id: 3,
          name: "Movie Night: Sci-Fi Classics",
          description:
            "Unwind with fellow residents and enjoy a selection of classic sci-fi movies.",
          time: "8:00 PM - 10:30 PM",
          date: "2024-10-21",
          location: "Meet/Huddle Space",
          created_by: "LYF Funan",
          smiles: -10,
          status: "Open",
          participants: 30,
          max_participants: 35,
          is_free: true,
          category: "Entertainment",
          image: MovieNight,
        },
      ],
    },
    {
      title: "Local Exploration Plans",
      plans: [
        {
          plan_id: 4,
          name: "Chinatown Heritage Tour",
          description:
            "Explore the rich history and vibrant culture of Singapore's Chinatown district.",
          time: "10:00 AM - 12:00 PM",
          date: "2024-10-22",
          location: "Meet at LYF Lobby",
          created_by: "AI",
          smiles: 15,
          status: "Open",
          participants: 10,
          max_participants: 20,
          is_free: false,
          price: "$30",
          category: "Cultural Exploration",
          // image: ChinatownTour,
        },
        {
          plan_id: 5,
          name: "Hawker Center Food Tour",
          description:
            "Indulge in a guided food tour through some of Singapore’s famous hawker centers.",
          time: "6:00 PM - 8:00 PM",
          date: "2024-10-22",
          location: "Meet at LYF Lobby",
          created_by: "AI",
          smiles: 20,
          status: "Open",
          participants: 12,
          max_participants: 15,
          is_free: false,
          price: "$50",
          category: "Food & Beverage",
          // image: HawkerCenterTour,
        },
        {
          plan_id: 6,
          name: "Photography Walk: Explore Singapore",
          description:
            "Capture the beauty of Singapore’s urban landscape with a guided photography walk.",
          time: "5:00 PM - 7:00 PM",
          date: "2024-10-22",
          location: "Meet at LYF Lobby",
          created_by: "User123",
          smiles: 10,
          status: "Open",
          participants: 7,
          max_participants: 10,
          is_free: true,
          category: "Arts & Culture",
          image: PhotographyWalk,
        },
      ],
    },
    {
      title: "Workshops & Experiences",
      plans: [
        {
          plan_id: 7,
          name: "Cooking Workshop: Local Delights",
          description:
            "Learn how to prepare traditional Singaporean dishes at our cooking workshop.",
          time: "4:00 PM - 6:00 PM",
          date: "2024-10-22",
          location: "Bond Kitchen",
          created_by: "AI",
          smiles: 15,
          status: "Open",
          participants: 5,
          max_participants: 10,
          is_free: false,
          price: "$40",
          category: "Food & Beverage",
          image: CookingWorkshop,
        },
        {
          plan_id: 8,
          name: "Local Coffee Brewing Workshop",
          description:
            "Discover the art of brewing local coffee and learn the traditional techniques.",
          time: "10:00 AM - 12:00 PM",
          date: "2024-10-23",
          location: "Bond Kitchen",
          created_by: "User789",
          smiles: 5,
          status: "Open",
          participants: 8,
          max_participants: 10,
          is_free: false,
          price: "$20",
          category: "Food & Beverage",
          // image: LocalCoffeeWorkshop,
        },
      ],
    },
    {
      title: "Your Plans",
      plans: [
        {
          plan_id: 9,
          name: "Night Run by the Bay",
          description:
            "Join fellow fitness enthusiasts for a refreshing night run around Marina Bay.",
          time: "9:00 PM - 10:00 PM",
          date: "2024-10-21",
          location: "Meet at LYF Lobby",
          created_by: "You",
          smiles: 0,
          status: "Joined",
          participants: 4,
          max_participants: 10,
          is_free: true,
          category: "Fitness",
          image: NightRun,
        },
        {
          plan_id: 10,
          name: "Board Games Night",
          description:
            "Challenge your neighbors to a night of strategy and fun with classic board games.",
          time: "7:00 PM - 9:00 PM",
          date: "2024-10-23",
          location: "Bond Kitchen",
          created_by: "You",
          smiles: 10,
          status: "Created",
          participants: 3,
          max_participants: 8,
          is_free: true,
          category: "Entertainment",
          image: BoardGames,
        },
      ],
    },
    {
      title: "Plans for Tonight",
      plans: [
        {
          plan_id: 11,
          name: "Karaoke Night",
          description:
            "Sing your heart out with fellow residents at a fun-filled karaoke night!",
          time: "9:00 PM - 11:00 PM",
          date: "2024-10-21",
          location: "Meet/Huddle Space",
          created_by: "LYF Funan",
          smiles: -5,
          status: "Open",
          participants: 10,
          max_participants: 20,
          is_free: true,
          category: "Entertainment",
          image: KaraokeNight,
        },
      ],
    },
    {
      title: "Weekend Plans",
      plans: [
        {
          plan_id: 12,
          name: "Weekend Brunch at the Bond Kitchen",
          description:
            "Enjoy a delicious brunch and meet new people in the LYF Funan community.",
          time: "10:00 AM - 12:00 PM",
          date: "2024-10-26",
          location: "Bond Kitchen",
          created_by: "LYF Funan",
          smiles: 10,
          status: "Open",
          participants: 15,
          max_participants: 25,
          is_free: false,
          price: "$25",
          category: "Food & Beverage",
          image: WeekendBrunch,
        },
        {
          plan_id: 13,
          name: "Cycling Adventure",
          description:
            "Explore the city on two wheels with a cycling adventure to the Marina Barrage.",
          time: "8:00 AM - 11:00 AM",
          date: "2024-10-27",
          location: "Meet at LYF Lobby",
          created_by: "User456",
          smiles: 15,
          status: "Open",
          participants: 6,
          max_participants: 10,
          is_free: false,
          price: "$15",
          category: "Fitness",
          image: CyclingAdventure,
        },
      ],
    },
  ],
};
