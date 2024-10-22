import { Plan } from "@/models/Plan";
import PlanCard from "./PlanCard";
import Link from "next/link";

interface Category {
  title: string;
  plans: Plan[];
}

interface PlansCategoriesProps {
  categories: Category[];
}

export default function PlansCategories({ categories }: PlansCategoriesProps) {
  return (
    <div className="space-y-10">
      {categories.map((category) => (
        <div key={category.title}>
          {/* Category Title */}
          <div className="flex justify-between items-center mb-5">
            <h2 className="text-xl font-semibold text-white">
              {category.title}
            </h2>

            <Link
              href="#"
              className="text-[#6e34a7] text-sm font-bold underline"
            >
              See More
            </Link>
          </div>
          <div className="overflow-x-auto">
            <div className="flex space-x-4 min-h-[350px]">
              {category.plans.map((plan) => (
                <div
                  key={plan.plan_id}
                  className="min-w-[300px] max-w-[300px] flex-shrink-0"
                >
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
