import ahmadPic from "../images/Users/Ahmadzia.png";
import tamimPic from "../images/Users/tamim.jpeg";
import pushkarPic from "../images/Users/pushkar.jpg";
import fistonPic from "../images/Users/fiston.jpeg"


export const users = [
  {
    id: 1,
    name: "Alice Johnson",
    age: 26,
    email: "alice.johnson@example.com",
    profilePic: ahmadPic,
    interests: ["Yoga", "Photography", "Cooking"],
    residency: "lyf Funan Singapore",
    smiles: 50,
    bio: "A yoga enthusiast and amateur photographer. Loves cooking and exploring new places.",
    joinedPlans: [1, 2]
  },
  {
    id: 2,
    name: "Bob Smith",
    age: 30,
    email: "bob.smith@example.com",
    profilePic: pushkarPic,
    interests: ["Cycling", "Programming", "Movies"],
    residency: "lyf Funan Singapore",
    smiles: 38,
    bio: "Tech geek who loves cycling and binge-watching movies on weekends."
  },
  {
    id: 3,
    name: "john willson",
    age: 33,
    email: "bob.smith@example.com",
    profilePic: tamimPic,
    interests: ["Cycling", "Programming", "Movies"],
    residency: "lyf Funan Singapore",
    smiles: 38,
    bio: "Tech geek who loves cycling and binge-watching movies on weekends."
  },  {
    id: 4,
    name: "jayse joseph",
    age: 28,
    email: "bob.smith@example.com",
    profilePic: fistonPic,
    interests: ["Cycling", "Programming", "Movies"],
    residency: "lyf Funan Singapore",
    smiles: 38,
    bio: "Tech geek who loves cycling and binge-watching movies on weekends.",
    joinedPlans: [3, 4]
  },
  {
    id: 3,
    name: "Charlie Brown",
    age: 28,
    email: "charlie@example.com",
    profilePic: ahmadPic,
    interests: ["Programming", "Movies"],
    residency: "lyf Funan Singapore",
    smiles: 38,
    bio: "Tech geek who loves cycling and binge-watching movies on weekends.",
    joinedPlans: [2, 4]
  }
];

//loged in user(we will alwys this static user as loged in user)

export const userData = {
  id: 4,
  name: "John Doe",
  age: 30,
  email: "example@gmail.com",
  profilePic: tamimPic,
  smiles: 100,
  bio: 'Digital Nomad | Travel Enthusiast',
  friends: 12,
  recentActivities: [
    {
      activity: 'Joined "Beach Volleyball"',
      time: '2 hours ago'
    },
    {
      activity: 'Earned 20 Smiles from "AI Chat"',
      time: 'Yesterday'
    },
    {
      activity: 'Added a new friends',
      time: '2 days ago'
    }
  ],
  plansJoined: [2,5],
  plansCreated: [10, 11]
};
