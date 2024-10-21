import { Plan } from "@/models/Plan";
import PlanCard from "./PlanCard";

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
              <PlanCard key={plan.plan_id} plan={plan} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
