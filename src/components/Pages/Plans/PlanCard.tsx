import { Plan } from "@/models/Plan";
import Image from "next/image";
import {
  MdLocationOn,
  MdEmojiEmotions,
  MdPeople,
  MdAttachMoney,
} from "react-icons/md"; // Filled icons from Material Design
import classNames from "classnames";

interface PlanCardProps {
  plan: Plan;
}

export default function PlanCard({ plan }: PlanCardProps) {
  return (
    <div className="bg-[#1E212D] p-4 rounded-lg shadow-md h-full flex flex-col justify-between transition-transform duration-200 hover:scale-105">
      <div className="relative">
        <Image
          src={plan.image}
          alt={plan.name}
          className="w-full h-52 object-cover rounded-lg"
        />
        <div
          className={classNames(
            "absolute top-2 left-2 bg-[#FFF] p-2 rounded-full shadow-lg border-4",
            {
              "border-green-500": plan.is_free,
              "border-yellow-500": !plan.is_free,
            }
          )}
        >
          <div className="flex items-center space-x-1">
            <MdAttachMoney
              className={classNames("text-lg", {
                "text-green-500": plan.is_free,
                "text-yellow-500": !plan.is_free,
              })}
            />
            <p
              className={classNames("font-bold text-sm", {
                "text-green-500": plan.is_free,
                "text-yellow-500": !plan.is_free,
              })}
            >
              {plan.is_free ? "Free" : "Paid"}
            </p>
          </div>
        </div>
        <div
          className={classNames(
            "absolute top-2 right-2 bg-[#FFF] p-2 rounded-full shadow-lg border-4 flex items-center space-x-1",
            {
              "border-green-500": plan.smiles >= 0,
              "border-red-500": plan.smiles < 0,
            }
          )}
        >
          <MdEmojiEmotions
            className={classNames("text-lg font-bold", {
              "text-green-500": plan.smiles >= 0,
              "text-red-500": plan.smiles < 0,
            })}
          />
          <span
            className={classNames("text-sm font-bold", {
              "text-green-500": plan.smiles >= 0,
              "text-red-500": plan.smiles < 0,
            })}
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
  );
}
