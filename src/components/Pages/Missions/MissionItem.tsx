import { MdEmojiEmotions } from "react-icons/md";
export default function MissionItem({ mission }) {
    return (
        <div className={`flex items-center justify-between p-4 mb-4 border rounded-lg shadow-sm ${mission.progress==='Completed' ? 'border-green-500' : ''}`}>
            <div className="flex items-center">
                {/* Icon */}
                <div className="flex flex-col gap-3">
                    <div className="text-3xl mr-4">{mission.icon}</div>
                    <div className="flex items-center">
                    <p className="font-semibold text-green-500">+{mission.reward}</p>
                    <MdEmojiEmotions
                        className={`text-lg font-bold text-green-500`} />
                    </div>
                </div>


                {/* Mission Details */}
                <div>
                    <h2 className={`text-xl font-semibold`}>{mission.name}</h2>
                    <p className="text-gray-500">{mission.description}</p>
                    {/* <p className="text-sm text-blue-500">Deadline: {mission.deadline}</p> */}
                </div>
            </div>

            {/* Progress and Reward */}
            <div className="text-right">
                <p
                    className={`${mission.progress === 'Completed'
                        ? 'text-green-500'
                        : 'text-gray-700'
                        }`}
                >
                    {mission.progress}
                </p>
            </div>
        </div>
    );
}
