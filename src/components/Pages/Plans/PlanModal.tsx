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
        {/* Plan Image */}
        <Image
          src={plan.image}
          alt={plan.name}
          className="w-full h-80 object-cover"
        />

        {/* Modal Content */}
        <div className="p-6 flex-1 overflow-y-auto bg-mainBg text-textPrimary">
          <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>

          {/* Plan Description */}
          <section className="mb-6">
            <p className="text-textSecondary">{plan.description}</p>
          </section>

          {/* Participants */}
          <section className="mb-6">
            <Members participants={plan.participants} />
          </section>

          {/* Plan Details */}
          <section className="mb-6">
            <div className="grid grid-cols-2 gap-4">
              {/* Date */}
              <div className="flex items-center space-x-2">
                <MdCalendarToday className="text-pink-400 text-2xl" />
                <div>
                  <h5 className="text-lg font-semibold">Date</h5>
                  <p className="text-textSecondary">{plan.date}</p>
                </div>
              </div>

              {/* Time */}
              <div className="flex items-center space-x-2">
                <MdAccessTime className="text-blue-400 text-2xl" />
                <div>
                  <h5 className="text-lg font-semibold">Time</h5>
                  <p className="text-textSecondary">{plan.time}</p>
                </div>
              </div>

              {/* Created by */}
              <div className="flex items-center space-x-2">
                <MdPerson className="text-orange-400 text-2xl" />
                <div>
                  <h5 className="text-lg font-semibold">Created by</h5>
                  <p className="text-textSecondary">{plan.created_by}</p>
                </div>
              </div>

              {/* Category */}
              <div className="flex items-center space-x-2">
                <MdCategory className="text-purple-400 text-2xl" />
                <div>
                  <h5 className="text-lg font-semibold">Category</h5>
                  <p className="text-textSecondary">{plan.category}</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center space-x-2">
                <MdLocationOn className="text-highlight text-2xl" />
                <div>
                  <h5 className="text-lg font-semibold">Location</h5>
                  <p className="text-textSecondary">{plan.location}</p>
                </div>
              </div>

              {/* Participants */}
              <div className="flex items-center space-x-2">
                <MdPeople className="text-highlight text-2xl" />
                <div>
                  <h5 className="text-lg font-semibold">Participants</h5>
                  <p className="text-textSecondary">
                    {plan.participants}/{plan.max_participants}
                  </p>
                </div>
              </div>

              {/* Price */}
              <div className="flex items-center space-x-2">
                <MdAttachMoney
                  className={plan.is_free ? "text-success text-2xl" : "text-warning text-2xl"}
                />
                <h5 className="text-lg font-semibold">
                  {plan.is_free ? "Free Event" : plan.price}
                </h5>
              </div>
            </div>
          </section>

          {/* Smiles Given */}
          <section className="mb-6">
            <div className="flex items-center space-x-2">
              <MdEmojiEmotions
                className={plan.smiles >= 0 ? "text-success text-2xl" : "text-error text-2xl"}
              />
              <h5 className="text-lg font-semibold">
                {plan.smiles} Smiles Given
              </h5>
            </div>
          </section>
        </div>

        {/* Join Button */}
        <div className="bg-cardBg p-4 sticky bottom-0 flex justify-center">
          <button className="bg-highlight text-white px-4 py-2 rounded-lg hover:bg-[#FF5500] transition-all duration-200">
            Join Plan
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default PlanModal;
