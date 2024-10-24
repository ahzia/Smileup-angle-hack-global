import Modal from "@/components/common/Modal";
import { userData } from "../../../lib/user";
import { BiEdit } from "react-icons/bi";
import Image from "next/image";
import PlanCard from "../Pages/Plans/PlanCard";
import { userPlans } from "../../../lib/plans";
export default function Profile({ isOpen, onClose, user }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="container">
        <div className="min-h-screen bg-[#130828] text-white flex flex-col items-center">
          {/* Profile Header */}
          <div className="w-full bg-[#262450] p-6 flex flex-col items-center rounded-b-3xl">
            <Image
              src={userData.profilePic}
              alt="User Avatar"
              className="w-24 h-24 rounded-full border-4 border-[#00D7FF]"
            />
            <div className="flex">
              <h1 className="text-2xl font-semibold mt-4 text-[#FFFFFF]">{userData.name}</h1>
              {/* edit icon */}
              <BiEdit className="text-[#00D7FF] text-2xl ml-2 mt-6" />
            </div>
            <p className="text-sm text-[#ACADB9]">{userData.bio}</p>
            <div className="mt-4 flex gap-4">
              <div className="flex flex-col items-center">
                <span className="text-[#00D7FF] font-semibold text-xl">{userData.smiles}</span>
                <span className="text-[#ACADB9] text-sm">Smiles</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-[#00D7FF] font-semibold text-xl">4</span>
                <span className="text-[#ACADB9] text-sm">Badges</span>
              </div>
            </div>
          </div>

          {/* Community Stats */}
          <div className="bg-[#232627] w-11/12 p-4 mt-6 rounded-lg">
            <h2 className="text-xl font-bold mb-4 text-[#FFFFFF]">Community Stats</h2>
            <div className="flex justify-between">
              <div className="flex flex-col items-center">
                <span className="text-2xl text-[#00D7FF] font-semibold">12</span>
                <span className="text-sm text-[#ACADB9]">Friends</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-2xl text-[#00D7FF] font-semibold">5</span>
                <span className="text-sm text-[#ACADB9]">Plans Joined</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-2xl text-[#00D7FF] font-semibold">3</span>
                <span className="text-sm text-[#ACADB9]">Plans Created</span>
              </div>
            </div>
          </div>

          {/* Recent Activities */}
          <div className="bg-[#232627] w-11/12 p-4 mt-6 rounded-lg">
            <h2 className="text-xl font-bold text-[#FFFFFF] mb-4">Recent Activities</h2>
            <ul className="space-y-4">
              <li className="flex justify-between items-center text-[#ACADB9]">
                <span>Joined "Beach Volleyball"</span>
                <span className="text-[#00D7FF]">2 hours ago</span>
              </li>
              <li className="flex justify-between items-center text-[#ACADB9]">
                <span>Earned 20 Smiles from "AI Chat"</span>
                <span className="text-[#00D7FF]">Yesterday</span>
              </li>
              <li className="flex justify-between items-center text-[#ACADB9]">
                <span>Added 3 new friends</span>
                <span className="text-[#00D7FF]">2 days ago</span>
              </li>
            </ul>
          </div>
          {/* Settings Button */}
          <button className="mt-6 mb-6 py-2 px-6 bg-[#00D7FF] text-[#130828] font-bold rounded-full">
            Settings
          </button>
        </div>
      </div>
    </Modal>
  );
}
