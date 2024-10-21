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
          <h2 className="text-2xl font-semibold mb-4">{category.title}</h2>
          <div className="overflow-x-auto">
            <div className="flex space-x-4">
              {category.plans.map((plan) => (
                <div key={plan.plan_id} className="min-w-[300px]">
                  <PlanCard plan={plan} />
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
