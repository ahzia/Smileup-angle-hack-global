import Image from "next/image";
import {
  MdLocationOn,
  MdEmojiEmotions,
  MdPeople,
  MdAttachMoney,
  MdCategory,
  MdPerson,
  MdCalendarToday,
  MdAccessTime,
} from "react-icons/md";
import Modal from "@/components/common/Modal";
import Members from "@/components/common/Members";
import { Plan } from "@/models/Plan";

interface PlanModalProps {
  isOpen: boolean;
  onClose: () => void;
  plan: Plan;
}

const PlanModal: React.FC<PlanModalProps> = ({ isOpen, onClose, plan }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="relative flex flex-col h-full">
        <Image
          src={plan.image}
          alt={plan.name}
          className="w-full h-80 object-cover"
        />
        <div className="p-6 flex-1 overflow-y-auto">
          <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>
          <section className="mb-6">
            <p className="text-gray-400">{plan.description}</p>
          </section>
          <section className="mb-6">
            <Members participants={plan.participants} />
          </section>
          <section className="mb-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-2">
                <MdCalendarToday className="text-pink-400 text-2xl" />
                <div>
                  <h5 className="text-lg font-semibold text-gray-200">Date</h5>
                  <p className="text-sm text-gray-400">{plan.date}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <MdAccessTime className="text-blue-400 text-2xl" />
                <div>
                  <h5 className="text-lg font-semibold text-gray-200">Time</h5>
                  <p className="text-sm text-gray-400">{plan.time}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <MdPerson className="text-orange-400 text-2xl" />
                <div>
                  <h5 className="text-lg font-semibold text-gray-200">
                    Created by
                  </h5>
                  <p className="text-sm text-gray-400">{plan.created_by}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <MdCategory className="text-purple-400 text-2xl" />
                <div>
                  <h5 className="text-lg font-semibold text-gray-200">
                    Category
                  </h5>
                  <p className="text-sm text-gray-400">{plan.category}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <MdLocationOn className="text-yellow-400 text-2xl" />
                <div>
                  <h5 className="text-lg font-semibold text-gray-200">
                    Location
                  </h5>
                  <p className="text-sm text-gray-400">{plan.location}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <MdPeople className="text-green-400 text-2xl" />
                <div>
                  <h5 className="text-lg font-semibold text-gray-200">
                    Participants
                  </h5>
                  <p className="text-sm text-gray-400">
                    {plan.participants}/{plan.max_participants}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <MdAttachMoney
                  className={
                    plan.is_free
                      ? "text-green-500 text-2xl"
                      : "text-yellow-500 text-2xl"
                  }
                />
                <h5 className="text-lg font-semibold text-gray-200">
                  {plan.is_free ? "Free Event" : plan.price}
                </h5>
              </div>
            </div>
          </section>
          <section className="mb-6">
            <div className="flex items-center space-x-2">
              <MdEmojiEmotions
                className={
                  plan.smiles >= 0
                    ? "text-green-500 text-2xl"
                    : "text-red-500 text-2xl"
                }
              />
              <h5 className="text-lg font-semibold text-gray-200">
                {plan.smiles} Smiles Given
              </h5>
            </div>
          </section>
        </div>
        <div className="bg-[#2A2D3D] p-4 sticky bottom-0 flex justify-center">
          <button className="bg-[#6e34a7] text-white px-4 py-2 rounded-lg hover:bg-[#532586] transition-all duration-200">
            Join Plan
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default PlanModal;
