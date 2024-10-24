import { Reward } from "@/models/Rewards";
import Modal from "@/components/common/Modal";
import { MdEmojiEmotions, MdLocationOn, MdEvent } from "react-icons/md";
// import Image from "next/image";

interface RewardModalProps {
    isOpen: boolean;
    onClose: () => void;
    reward: Reward;
}

export default function RewardModal({ isOpen, onClose, reward }: RewardModalProps) {
    if (!isOpen) return null;

    return (
        <Modal isOpen={isOpen} onClose={onClose} className="max-w-md h-1/3 p-6 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-lg shadow-lg text-white">
            {/* Reward Image */}
            {/* <div className="relative h-40 w-full mb-4">
                <Image
                    src={reward.imageUrl}
                    alt={reward.name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                />
            </div> */}

            {/* Reward Title */}
            <h2 className="text-2xl font-bold mt-10">{reward.name}</h2>

            {/* Reward Description */}
            <p className="text-sm mt-2 mb-4">{reward.description}</p>

            {/* Reward Provider */}
            <p className="text-sm font-semibold mb-2">
                Provided by: <span className="font-bold">{reward.provider}</span>
            </p>

            {/* Reward Location and Validity */}
            <div className="flex justify-between text-gray-100 mb-4">
                <div className="flex items-center space-x-1">
                    <MdLocationOn className="text-yellow-400" />
                    <p className="text-sm">{reward.location}</p>
                </div>
                <div className="flex items-center space-x-1">
                    <MdEvent className="text-blue-400" />
                    <p className="text-sm">{reward.validity}</p>
                </div>
            </div>

            {/* Reward Cost */}
            <div className="flex items-center mt-4">
                <MdEmojiEmotions className="text-lg text-green-500" />
                <p className="ml-2 text-lg font-semibold">{reward.smilesCost} Smiles</p>
            </div>
        </Modal>
    );
}
