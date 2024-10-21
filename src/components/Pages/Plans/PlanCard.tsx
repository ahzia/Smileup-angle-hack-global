import { Plan } from "@/models/Plan";
import Image from "next/image";
import { FiMapPin, FiSmile, FiUsers, FiDollarSign } from "react-icons/fi"; // Importing relevant icons

interface PlanCardProps {
  plan: Plan;
}

export default function PlanCard({ plan }: PlanCardProps) {
  return (
    <div className="bg-[#282C34] p-4 rounded-lg shadow-md space-y-2 h-full flex flex-col justify-between">
      <Image
        src={plan.image}
        alt={plan.name}
        className="w-full h-32 object-cover rounded-lg"
      />
      <h3 className="text-xl font-bold text-white">{plan.name}</h3>
      <div className="flex flex-col space-y-2 text-gray-400">
        <div className="flex items-center space-x-1">
          <FiMapPin className="text-yellow-400" />
          <p className="text-sm">{plan.location}</p>
        </div>
        <div className="flex items-center space-x-1">
          <FiSmile
            className={`${
              plan.smiles >= 0 ? "text-green-500" : "text-red-500"
            }`}
          />
          <p className="text-sm">
            Smiles:{" "}
            <span
              className={plan.smiles >= 0 ? "text-green-500" : "text-red-500"}
            >
              {plan.smiles}
            </span>
          </p>
        </div>
        <div className="flex items-center space-x-1">
          <FiUsers className="text-blue-400" />
          <p className="text-sm">
            Participants: {plan.participants}/{plan.max_participants}
          </p>
        </div>
        <div className="flex items-center space-x-1">
          {plan.is_free ? (
            <>
              <FiDollarSign className="text-green-500" />
              <p className="text-sm text-green-500">Join for Free</p>
            </>
          ) : (
            <>
              <FiDollarSign className="text-yellow-500" />
              <p className="text-sm text-yellow-500">Paid Event</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
