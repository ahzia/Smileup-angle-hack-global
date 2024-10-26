'use client';
import { useState, useEffect } from 'react';
import AIChat from './AiChat';
import GroupChat from '../Plans/Chat';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store'; // Import RootState for typing
import Image from 'next/image';
import { HiOutlineChatAlt2 } from 'react-icons/hi';

export default function Messages() {
  const [aiChatOpen, setAiChatOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [messages, setMessages] = useState([
    {
      id: 1, user: 'Tamim', message: 'Hey! Are you coming to the meetup?', time: '2:45 PM', ai: false,
      avatar: 'https://scontent-dus1-1.xx.fbcdn.net/v/t39.30808-6/376505701_6353841408077351_150784840174199327_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGVxehGE4bUKt-3v53X7OEr2FVML0gFd3rYVUwvSAV3euEPvIZeNvYG0WJ_KC-BaiEXsjeApyJ0NA2bEZvLSFJz&_nc_ohc=ANQfWkon_xEQ7kNvgHrBI92&_nc_zt=23&_nc_ht=scontent-dus1-1.xx&_nc_gid=ABvyOJ1TSBaWzI-nOhfky6A&oh=00_AYCK2QtAygPvRgP3-_lBf516wkJm1N04oJMjtuffvh9Cew&oe=671CA226'
    },
    {
      id: 2, user: 'Ahmad', message: 'What time is the activity tonight?', time: '3:10 PM', ai: false,
      avatar: 'https://scontent-dus1-1.xx.fbcdn.net/v/t39.30808-1/448375495_2645348365642128_5106598841488368326_n.jpg?stp=dst-jpg_s200x200&_nc_cat=101&ccb=1-7&_nc_sid=50d2ac&_nc_eui2=AeF7AnIi5XDkoBk0bn8mvY9VYb0uDrJxhDlhvS4OsnGEObfqCUtXR3N9CaxwYv8tQP3HGUx4gFo5eozYcc_yojs7&_nc_ohc=Dg6pGatYhG0Q7kNvgHHA2ON&_nc_zt=24&_nc_ht=scontent-dus1-1.xx&_nc_gid=AIE2LJ3aLb7DxMqcCjNBp5I&oh=00_AYB4uyppOz3ctl1U1ZDE1ZIkBlE2Kn31s4sYRTCwOhJnpQ&oe=671C9371'
    },
  ]);

  const [planMessages, setPlanMessages] = useState([]);
  const [activeTab, setActiveTab] = useState(0); // State to track the active tab

  // Get the logged-in user and the plans from the Redux store
  const user = useSelector((state: RootState) => state.user.loggedInUser);
  const plans = useSelector((state: RootState) => state.plans); // Assuming plans are stored in state.plans.data

  const userPlanIds = user.plansJoined;

  useEffect(() => {
    const fetchUserPlanMessages = () => {
      const filteredMessages = [];

      // Filter plans by the user's joined plan IDs
      if (plans) {
        for (const category of plans.categories) {
          const relevantPlans = category.plans.filter(plan => userPlanIds.includes(plan.plan_id));

          relevantPlans.forEach(plan => {
            if (plan.groupChat.length > 0) {
              const lastMessage = plan.groupChat[plan.groupChat.length - 1];
              filteredMessages.push({
                ...lastMessage,
                planName: plan.name,
                planAvatar: plan.image || 'https://via.placeholder.com/50', // Default avatar if none exists
              });
            }
          });
        }

        setPlanMessages(filteredMessages);
      }
    };

    fetchUserPlanMessages();
  }, [plans, userPlanIds]);

  return (
    <>
      <div className="container">
        {!aiChatOpen && (
          <div className={aiChatOpen ? 'd-none' : 'h-[800px] flex flex-col justify-between'}>
            <div className="bg-mainBg h-screen p-4 text-textPrimary">
              <div>
                {/* Message Tabs */}
                <h2 className="text-xl font-bold mb-2">Messages</h2>
                <div className="flex space-x-4 mb-4">
                  <button
                    className={`px-4 py-2 rounded-lg transition duration-200 ${activeTab === 0 ? 'bg-highlight text-mainBg' : 'bg-cardBg text-textPrimary'}`}
                    onClick={() => setActiveTab(0)}
                  >
                    User Messages
                  </button>
                  <button
                    className={`px-4 py-2 rounded-lg transition duration-200 ${activeTab === 1 ? 'bg-highlight text-mainBg' : 'bg-cardBg text-textPrimary'}`}
                    onClick={() => setActiveTab(1)}
                  >
                    Plan Messages
                  </button>
                </div>

                {/* Render Messages based on the active tab */}
                <div className="space-y-4">
                  {activeTab === 0 && messages.map((msg, index) => (
                    <div
                      key={index}
                      className="flex p-4 rounded-lg shadow-lg bg-cardBg cursor-pointer"
                      onClick={() => {
                        setSelectedPlan(null); // Set to null since it's a user message
                        setIsChatOpen(true);
                      }}
                    >
                      <div className="flex items-center gap-3">
                        <img src={msg.avatar} alt="User Avatar" className="w-10 h-10 rounded-full" />
                        <div className="flex-grow">
                          <h3 className="font-bold text-textPrimary">{msg.user}</h3>
                          <p className="text-sm text-textSecondary">{msg.message}</p>
                        </div>
                      </div>
                      <p className="text-xs text-textSecondary">{msg.time}</p>
                    </div>
                  ))}

                  {activeTab === 1 && planMessages.map((msg, index) => (
                    <div
                      key={index}
                      className="flex p-4 rounded-lg shadow-lg bg-cardBg cursor-pointer"
                      onClick={() => {
                        // Find the selected plan
                        const selectedPlan = plans.categories
                          .flatMap(category => category.plans)
                          .find(plan => plan.name === msg.planName);

                        setSelectedPlan(selectedPlan);
                        setIsChatOpen(true);
                      }}
                    >
                      <div className="flex items-center gap-3">
                        <Image src={msg.planAvatar} alt="Plan Avatar" className="w-10 h-10 rounded-full" width={40} height={40} />
                        <div className="flex-grow">
                          <h3 className="font-bold text-textPrimary">{msg.planName}</h3>
                          <p className="text-sm text-textSecondary">{msg.message}</p>
                        </div>
                      </div>
                      <p className="text-xs text-textSecondary">{msg.time}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* AI Chat Section */}
            <div className="mb-4">
              <h2 className="text-xl font-bold mb-2">AI Chat</h2>
              <div className="bg-cardBg rounded-lg p-4 shadow-lg flex items-center justify-between">
                <div className="flex flex-col">
                  <h3 className="text-lg font-bold">SmileUp AI</h3>
                  <p className="text-textPrimary">👋 Hello! How can I help you today?</p>
                  <button
                    className="mt-2 bg-highlight text-mainBg py-2 px-4 rounded-lg transition duration-200 hover:bg-opacity-80"
                    onClick={() => setAiChatOpen(true)}
                  >
                    Start a conversation
                  </button>
                </div>
                <HiOutlineChatAlt2 className="w-10 h-10 text-highlight" />
              </div>
            </div>
          </div>
        )}
        <AIChat aiChatOpen={aiChatOpen} setAiChatOpen={setAiChatOpen} />
      </div>
      {isChatOpen && selectedPlan && (
        <GroupChat
          isOpen={isChatOpen}
          onClose={() => setIsChatOpen(false)}
          plan={selectedPlan}
        />
      )}
    </>
  );
}
