import { Plan } from "@/models/Plan";

interface Category {
  title: string;
  plans: Plan[];
}

interface PlansCategoriesProps {
  categories: Category[];
}

export default function PlansCategories({ categories }: PlansCategoriesProps) {
  return (
    <div className="space-y-8">
      {categories.map((category) => (
        <div key={category.title}>
          <h2 className="text-2xl font-semibold">{category.title}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {category.plans.map((plan) => (
              <div
                key={plan.plan_id}
                className="bg-white p-4 rounded-lg shadow-md space-y-2"
              >
                <h3 className="text-xl font-bold">{plan.name}</h3>
                <p>{plan.description}</p>
                <p className="text-sm text-gray-600">
                  {plan.date} | {plan.time}
                </p>
                <p className="text-sm text-gray-600">
                  Location: {plan.location}
                </p>
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
                  className={`p-2 text-white ${
                    plan.is_free ? "bg-teal-500" : "bg-gray-500"
                  } rounded-md`}
                >
                  {plan.is_free ? "Join for Free" : "Paid Event"}
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
