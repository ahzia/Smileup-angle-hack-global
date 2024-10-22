import { User } from "@/models/User";
import Image from "next/image";
import { FaPlus, FaSmile } from "react-icons/fa";
import classNames from "classnames";

export default function MyProfile({ user }: { user: User }) {
  return (
    <div className="container flex items-center justify-between mb-5 text-white">
      <h1 className="text-2xl font-semibold">{user.name}</h1>
      <div className="relative flex items-center flex-col">
        <div className="relative">
          <div
            className={classNames(
              "absolute -top-1 -left-1 w-20 h-20 rounded-full z-0",
              {
                "bg-yellow-400": user.smiles > 0,
                "bg-red-500": user.smiles < 0,
                "bg-white": user.smiles === 0,
              }
            )}
          ></div>
          <Image
            src={user.profilePic}
            alt={`${user.name}'s profile picture`}
            className="rounded-full w-20 h-20 relative z-10"
          />
        </div>
        <div
          className={classNames(
            "absolute z-20 bottom-[-10px] flex items-center space-x-1 bg-[#6e34a7] p-1 rounded-full shadow-lg border-2",
            {
              "border-yellow-400": user.smiles > 0,
              "border-red-500": user.smiles < 0,
              "border-white": user.smiles === 0,
            }
          )}
        >
          <FaSmile
            className={classNames("text-base", {
              "text-yellow-400": user.smiles > 0,
              "text-red-500": user.smiles < 0,
              "text-white": user.smiles === 0,
            })}
            aria-label={`${user.smiles >= 0 ? "Positive" : "Negative"} smiles`}
          />
          <p className="text-sm">{user.smiles}</p>
          {user.smiles > 0 && <FaPlus className="text-sm text-white" />}
        </div>
      </div>
    </div>
  );
}
