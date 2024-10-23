'use client';
import { useState } from 'react';
import MissionItem from './MissionItem';
import { missions } from '../../../../lib/missons'; // Assuming your mission data is in this file

export default function MissionsPage() {
  const [selectedTab, setSelectedTab] = useState('daily');

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6 text-highlight">Missions</h1>
      {/* Tabs for Daily and Weekly Missions */}
      <div className="flex justify-center mb-6">
        <button
          className={`px-4 py-2 rounded-t-lg ${
            selectedTab === 'daily' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-blue-600'
          }`}
          onClick={() => handleTabChange('daily')}
        >
          Daily Missions
        </button>
        <button
          className={`px-4 py-2 rounded-t-lg ml-2 ${
            selectedTab === 'weekly' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-blue-600'
          }`}
          onClick={() => handleTabChange('weekly')}
        >
          Weekly Missions
        </button>
      </div>

      {/* Mission Items */}
      <div className="shadow-md rounded-lg p-4">
        {selectedTab === 'daily' &&
          missions.missions.dailyMissions.items.map((mission) => (
            <MissionItem key={mission.missionId} mission={mission} />
          ))}

        {selectedTab === 'weekly' &&
          missions.missions.weeklyMissions.items.map((mission) => (
            <MissionItem key={mission.missionId} mission={mission} />
          ))}
      </div>
    </div>
  );
}
