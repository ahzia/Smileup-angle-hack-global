import { Plan } from "@/models/Plan";
import Image from "next/image";

interface PlanCardProps {
  plan: Plan;
}

export default function PlanCard({ plan }: PlanCardProps) {
  return (
    <div className="bg-[#282C34] p-4 rounded-lg shadow-md space-y-2">
      <Image src={plan.image} alt={plan.name} />
      <h3 className="text-xl font-bold">{plan.name}</h3>
      <p className="text-sm text-gray-600">Location: {plan.location}</p>
      <p
        className={`text-sm ${
          plan.smiles >= 0 ? "text-green-500" : "text-red-500"
        }`}
      >
        Smiles: {plan.smiles}
      </p>
      <p className="text-sm text-gray-600">
        Participants: {plan.participants}/{plan.max_participants}
      </p>
      <p className="text-sm text-gray-600">
        {plan.is_free ? "Join for Free" : "Paid Event"}
      </p>
    </div>
  );
}
