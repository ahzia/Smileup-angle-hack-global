'use client';
import { useState } from 'react';
import AIChat from './AiChat';
export default function Messages() {
  const [aiChatOpen, setAiChatOpen] = useState(false);

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
  return (
    <div className="container">
      {
        !aiChatOpen &&
        <div className={aiChatOpen ? 'd-none' : 'h-[800px] flex flex-col justify-between'}>
          <div className="bg-mainBg h-screen p-4 text-textPrimary">
            <div>
              <h2 className="text-xl font-bold mb-2">Messages</h2>
              <div className="space-y-4">
                {messages.map((msg) => (
                  <div key={msg.id} className={`flex ${msg.ai ? 'bg-highlight' : 'bg-cardBg'} p-4 rounded-lg shadow-lg`}>
                    <div className="flex-grow">
                      <div className="flex items-center mb-2 gap-3">
                        <img src={msg.avatar} alt="User Avatar" className="w-10 h-10 rounded-full" />
                        <div className="flex-grow">
                          <h3 className={`font-bold ${msg.ai ? 'text-mainBg' : 'text-textPrimary'}`}>
                            {msg.user}
                          </h3>
                          <p className={`text-sm ${msg.ai ? 'text-mainBg' : 'text-textSecondary'}`}>
                            {msg.message}
                          </p>
                        </div>
                      </div>

                    </div>

                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="mb-4">
            <h2 className="text-xl font-bold mb-2">AI Chat</h2>
            <div className="bg-cardBg rounded-lg p-4 shadow-lg">
              <p className="text-textPrimary">👋 Hello! How can I help you today?</p>
              <button className="mt-2 bg-highlight text-mainBg py-2 px-4 rounded-lg" onClick={
                () => setAiChatOpen(true)
              }>Start a conversation</button>
            </div>
          </div>
        </div>
      }
      <AIChat aiChatOpen={aiChatOpen} setAiChatOpen={setAiChatOpen} />
    </div>
  );
}
