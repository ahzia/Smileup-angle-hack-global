import { Plan } from "@/models/Plan";
import PlanCard from "./PlanCard";
import Link from "next/link";
import { User } from "@/models/User";

interface Category {
  title: string;
  plans: Plan[];
}

interface PlansCategoriesProps {
  categories: Category[];
  user: User;
  setUser: (user: User) => void;
}

export default function PlansCategories({ categories, user, setUser }: PlansCategoriesProps) {
  return (
    <div className="space-y-10">
      {categories.map((category) => (
        <div key={category.title}>
          <div className="flex justify-between items-center mb-5">
            <h2 className="text-xl font-semibold text-textPrimary">
              {category.title}
            </h2>

            <Link
              href="#"
              className="text-highlight text-sm font-bold underline"
            >
              See More
            </Link>
          </div>
          <div className="overflow-x-auto">
            <div className="flex space-x-4 min-h-[350px]">
              {category.plans.map((plan) => (<div
                key={plan.plan_id}
                className="min-w-[300px] max-w-[300px] flex-shrink-0"
              >
                <PlanCard
                  plan={plan}
                  user={user}
                  setUser={setUser}
                />
              </div>)
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
