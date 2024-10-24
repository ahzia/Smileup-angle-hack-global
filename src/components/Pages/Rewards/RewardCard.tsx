import { useState } from "react";
import { Reward } from "@/models/Rewards";
import { MdLocationOn, MdEmojiEmotions, MdEvent } from "react-icons/md";
import RewardModal from "./RewardModal";

interface RewardItemProps {
    reward: Reward;
}

export default function RewardItem({ reward }: RewardItemProps) {
    const [isModalOpen, setModalOpen] = useState(false);
    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    return (
        <>
            <div
                className="bg-cardBg p-4 rounded-lg shadow-lg h-full flex flex-col justify-between transition-transform duration-200 hover:scale-105 cursor-pointer"
                onClick={openModal}
            >
                {/* Reward Details */}
                <div className="flex flex-col h-full">
                    {/* Reward Name */}
                    <h3 className="text-lg font-bold text-textPrimary">{reward.name}</h3>

                    {/* Reward Location and Validity */}
                    <div className="flex justify-between text-textSecondary mt-2">
                        <div className="flex items-center space-x-1">
                            <MdLocationOn className="text-yellow-400" />
                            <p className="text-sm">{reward.location}</p>
                        </div>
                        <div className="flex items-center space-x-1">
                            <MdEvent className="text-blue-400" />
                            <p className="text-sm">{reward.validity}</p>
                        </div>
                    </div>

                    {/* Smiles Cost Badge */}
                    <div className="mt-auto bg-cardBgLight p-2 rounded-full flex items-center justify-center">
                        <MdEmojiEmotions className="text-lg text-green-500" />
                        <span className="text-sm font-bold text-textPrimary ml-1">{reward.smilesCost}</span>
                    </div>
                </div>
            </div>

            {/* Modal for showing full details */}
            <RewardModal isOpen={isModalOpen} onClose={closeModal} reward={reward} />
        </>
    );
}
