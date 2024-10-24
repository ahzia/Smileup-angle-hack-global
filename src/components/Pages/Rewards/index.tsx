import {MdEmojiEmotions} from "react-icons/md";
import {rewards} from "../../../../lib/rewards";
export default function Rewards() {
  return (
    <div className="container">
      <div className="min-h-screen bg-[#130828] text-white p-4">
        {/* Page Header */}
        <h1 className="text-2xl font-bold mb-6 text-center">Rewards Hub</h1>

        {/* Reward Sections */}
        {Object.values(rewards.rewards).map((rewardSection) => (
          <div key={rewardSection.title} className="mb-8">
            {/* Section Title */}
            <h2 className="text-xl font-semibold mb-4">{rewardSection.title}</h2>

            {/* Reward Cards */}
            <div className="space-y-4">
              {rewardSection.items.map((reward) => (
                <div
                  key={reward.rewardId}
                  className="flex items-center bg-[#232627] rounded-lg p-4 shadow-md"
                >
                  {/* Reward Image */}
                  <img
                    src={reward.imageUrl}
                    alt={reward.name}
                    className="w-16 h-16 rounded-full mr-4"
                  />

                  {/* Reward Info */}
                  <div className="flex flex-col">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold">
                        {reward.name}
                      </h3>
                      <p className="text-green-500 font-bold">{reward.smilesCost} <MdEmojiEmotions className={`text-lg font-bold text-green-500`} /></p>
                    </div>
                    <p className="text-sm text-[#ACADB9]">{reward.description}</p>
                    <p className="text-xs text-[#ACADB9]">📍 {reward.location}</p>
                    <p className="text-xs text-[#ACADB9]">⏳ {reward.validity}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
