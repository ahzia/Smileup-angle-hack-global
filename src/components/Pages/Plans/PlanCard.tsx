import { useState } from "react";
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
import { Plan } from "@/models/Plan";
import Members from "@/components/common/Members";

interface PlanCardProps {
  plan: Plan;
}

export default function PlanCard({ plan }: PlanCardProps) {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <>
      <div
        className="bg-[#1E212D] p-4 rounded-lg shadow-md h-full flex flex-col justify-between transition-transform duration-200 hover:scale-105 cursor-pointer"
        onClick={openModal}
      >
        <div className="relative">
          <Image
            src={plan.image}
            alt={plan.name}
            className="w-full h-52 object-cover rounded-lg"
          />
          <div
            className={`absolute top-2 left-2 bg-[#FFF] p-2 rounded-full shadow-lg border-4 ${
              plan.is_free ? "border-green-500" : "border-yellow-500"
            }`}
          >
            <div className="flex items-center space-x-1">
              <p
                className={`font-bold text-sm ${
                  plan.is_free ? "text-green-500" : "text-yellow-500"
                }`}
              >
                {plan.is_free ? "Free" : plan?.price}
              </p>
            </div>
          </div>
          <div
            className={`absolute top-2 right-2 bg-[#FFF] p-2 rounded-full shadow-lg border-4 flex items-center space-x-1 ${
              plan.smiles >= 0 ? "border-green-500" : "border-red-500"
            }`}
          >
            <MdEmojiEmotions
              className={`text-lg font-bold ${
                plan.smiles >= 0 ? "text-green-500" : "text-red-500"
              }`}
            />
            <span
              className={`text-sm font-bold ${
                plan.smiles >= 0 ? "text-green-500" : "text-red-500"
              }`}
            >
              {plan.smiles}
            </span>
          </div>
        </div>
        <h3 className="text-lg font-bold text-white">{plan.name}</h3>
        <div className="flex justify-between text-gray-400">
          <div className="flex items-center space-x-1">
            <MdLocationOn className="text-yellow-400" />
            <p className="text-sm">{plan.location}</p>
          </div>
          <div className="flex items-center space-x-1">
            <MdPeople className="text-blue-400" />
            <p className="text-sm">
              {plan.participants}/{plan.max_participants}
            </p>
          </div>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
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
                    <h5 className="text-lg font-semibold text-gray-200">
                      Date
                    </h5>
                    <p className="text-sm text-gray-400">{plan.date}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <MdAccessTime className="text-blue-400 text-2xl" />
                  <div>
                    <h5 className="text-lg font-semibold text-gray-200">
                      Time
                    </h5>
                    <p className="text-sm text-gray-400">{plan.time}</p>
                  </div>
                </div>

                {/* Created by */}
                <div className="flex items-center space-x-2">
                  <MdPerson className="text-orange-400 text-2xl" />
                  <div>
                    <h5 className="text-lg font-semibold text-gray-200">
                      Created by
                    </h5>
                    <p className="text-sm text-gray-400">{plan.created_by}</p>
                  </div>
                </div>

                {/* Category */}
                <div className="flex items-center space-x-2">
                  <MdCategory className="text-purple-400 text-2xl" />
                  <div>
                    <h5 className="text-lg font-semibold text-gray-200">
                      Category
                    </h5>
                    <p className="text-sm text-gray-400">{plan.category}</p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center space-x-2">
                  <MdLocationOn className="text-yellow-400 text-2xl" />
                  <div>
                    <h5 className="text-lg font-semibold text-gray-200">
                      Location
                    </h5>
                    <p className="text-sm text-gray-400">{plan.location}</p>
                  </div>
                </div>

                {/* Participants */}
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

                {/* Price */}
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
    </>
  );
}
