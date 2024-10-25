'use client';
import { useState, useCallback } from "react";
import { MdSend } from "react-icons/md";
import Image from "next/image";
import { users } from "../../../../lib/user";
import Modal from "@/components/common/Modal";
import { useDispatch, useSelector } from "react-redux";
import { addChatMessage } from "@/redux/plansSlice"; // Import the action to add chat messages
import { RootState } from "@/redux/store"; // Import RootState type for typings

const GroupChat = ({ isOpen, onClose, plan }) => {
  const [newMessage, setNewMessage] = useState("");
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user.loggedInUser); // Get the current logged-in user

  const handleSendMessage = useCallback(() => {
    if (!newMessage) return;

    // Dispatch the action to add a chat message
    dispatch(
      addChatMessage({
        planId: plan.plan_id,
        userId: user.id,
        message: newMessage,
        timestamp: new Date().toLocaleString(),
      })
    );

    setNewMessage("");
  }, [dispatch, newMessage, plan.plan_id, user.id]);

  const getUserById = useCallback((userId) => {
    return users.find((user) => user.id === userId);
  }, []);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="flex flex-col justify-between h-screen bg-mainBg text-white p-4">
        {/* Chat Header */}
        <header className="bg-secondary p-4 rounded-t-lg shadow-lg">
          <h2 className="text-2xl font-bold text-highlight">Plan Group Chat</h2>
          <p className="text-sm text-textSecondary">
            Chat with fellow participants about the plan
          </p>
        </header>

        {/* Chat Messages */}
        <section className="flex-1 overflow-y-auto mt-4 p-4 bg-cardBg rounded-lg shadow-lg space-y-4">
          {plan?.groupChat.map((msg) => {
            const sender = getUserById(msg.userId);
            return (
              <div key={msg.id} className={`flex ${msg.userId === user.id ? 'justify-end' : 'justify-start'}`}>
                {msg.userId !== user.id && sender && (
                  <div className="flex items-start mr-3">
                    <Image
                      src={sender.profilePic}
                      alt={sender.name}
                      width={40}
                      height={40}
                      className="rounded-full border-2 border-white"
                    />
                  </div>
                )}
                <div className={`max-w-xs p-3 rounded-lg ${msg.userId === user.id ? 'bg-highlight' : 'bg-secondary'} text-sm text-textPrimary`}>
                  <p className="font-semibold">{msg.userId === user.id ? 'You' : sender?.name}</p>
                  <p>{msg.message}</p>
                  <span className="text-xs text-textSecondary block mt-1">{msg.timestamp}</span>
                </div>
              </div>
            );
          })}
        </section>

        {/* Chat Input */}
        <footer className="bg-cardBgLight p-4 rounded-b-lg flex items-center">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 p-3 rounded-lg bg-secondary text-white placeholder-textSecondary focus:outline-none"
            aria-label="Message input"
          />
          <button
            onClick={handleSendMessage}
            className="ml-4 p-3 bg-highlight text-white rounded-full hover:bg-orange-600 transition duration-300"
            aria-label="Send message"
            type="button"
          >
            <MdSend className="text-2xl" />
          </button>
        </footer>
      </div>
    </Modal>
  );
};

export default GroupChat;