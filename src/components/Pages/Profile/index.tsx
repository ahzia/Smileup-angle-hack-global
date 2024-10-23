export default function Profile() {
  return (
    <div className="container">
      <div className="min-h-screen bg-[#130828] text-white flex flex-col items-center">
        {/* Profile Header */}
        <div className="w-full bg-[#262450] p-6 flex flex-col items-center rounded-b-3xl">
          <img
            src="/path/to/profile-pic.jpg"
            alt="User Avatar"
            className="w-24 h-24 rounded-full border-4 border-[#00D7FF]"
          />
          <h1 className="text-2xl font-semibold mt-4 text-[#FFFFFF]">John Doe</h1>
          <p className="text-sm text-[#ACADB9]">Digital Nomad | Travel Enthusiast</p>
          <div className="mt-4 flex gap-4">
            <div className="flex flex-col items-center">
              <span className="text-[#00D7FF] font-semibold text-xl">150</span>
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
  );
}
