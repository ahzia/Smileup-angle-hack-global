'use client';
import React, { useState } from "react";
import { MdEmojiEmotions, MdCheckCircle } from "react-icons/md";

export default function MissionItem({ mission }) {
  const [showDescription, setShowDescription] = useState(false);

  // Calculate progress based on steps
  const progressPercent = mission.steps
    ? (mission.currentStep / mission.steps) * 100
    : 0;
  
  const isMissionCompleted = mission.progress === "Completed";
  const needsProgressBar = mission.steps && !isMissionCompleted;

  return (
    <div
      className={`flex flex-col items-start justify-between p-4 mb-4 border rounded-lg shadow-sm ${
        isMissionCompleted ? "border-green-500" : ""
      }`}
      onClick={() => setShowDescription(!showDescription)}
    >
      <div className="flex items-start w-full">
        {/* Icon */}
        <div className="flex flex-col gap-3 items-start">
          <div className="text-3xl mr-4">{mission.icon}</div>
          <div className="flex items-center">
            <p className="font-semibold text-green-500">+{mission.reward}</p>
            <MdEmojiEmotions className={`text-lg font-bold text-green-500`} />
          </div>
        </div>

        {/* Mission Details */}
        <div className="w-full">
          <h2 className={`text-xl font-semibold flex items-center`}>
            {mission.name}
            {/* Show tick mark for completed missions */}
            {isMissionCompleted && (
              <MdCheckCircle className="text-green-500 ml-2 text-2xl" />
            )}
          </h2>

          {showDescription && (
            <p className="text-gray-500">{mission.description}</p>
          )}

          {/* Progress Bar or Completed Status */}
          {needsProgressBar ? (
            <div className="flex items-center w-full mt-2">
              <div className="w-full h-4 bg-gray-200 rounded-full">
                <div
                  className="h-full bg-green-500 rounded-full"
                  style={{ width: `${progressPercent}%` }}
                ></div>
              </div>
              <p className="ml-2 text-gray-500">
                {mission.currentStep}/{mission.steps}
              </p>
            </div>
          ) : isMissionCompleted ? (
            <p className="text-green-500 font-semibold">Mission Completed!</p>
          ) : (
            <p className="text-gray-500 mt-2">Not Started</p>
          )}
        </div>
      </div>
    </div>
  );
}
