import { Plan } from "@/models/Plan";

interface PlanCardProps {
  plan: Plan;
}

export default function PlanCard({ plan }: PlanCardProps) {
  return (
    <div className="bg-[#282C34] p-4 rounded-lg shadow-md space-y-2">
      <h3 className="text-xl font-bold">{plan.name}</h3>
      <p>{plan.description}</p>
      <p className="text-sm text-gray-600">
        {plan.date} | {plan.time}
      </p>
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
      <button
        className={`p-2 text-[#E5E5E5] ${
          plan.is_free ? "bg-[#9370DB]" : "bg-gray-500"
        } rounded-md`}
      >
        {plan.is_free ? "Join for Free" : "Paid Event"}
      </button>
    </div>
  );
}
