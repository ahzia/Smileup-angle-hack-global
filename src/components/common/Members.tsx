import { useEffect, useState } from "react";
import Image from "next/image";

interface User {
  login: {
    uuid: string;
  };
  picture: {
    medium: string;
  };
  name: {
    first: string;
    last: string;
  };
}

interface MembersProps {
  participants: number;
}

const Members: React.FC<MembersProps> = ({ participants }) => {
  const [members, setMembers] = useState<User[]>([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=10")
      .then((response) => response.json())
      .then((data) => setMembers(data.results));
  }, []);

  // Limit the number of displayed members based on `participants`
  const displayedMembers = members.slice(0, Math.min(participants, 9));
  const remainingCount = Math.max(0, participants - displayedMembers.length);

  return (
    <div className="flex justify-center mr-2">
      {displayedMembers.map((member) => (
        <Image
          key={member.login.uuid}
          src={member.picture.medium}
          alt={`${member.name.first} ${member.name.last}`}
          className="border-2 border-white dark:border-gray-800 rounded-full h-10 w-10 -mr-2"
          width={100}
          height={100}
        />
      ))}
      {remainingCount > 0 && (
        <span className="flex items-center justify-center bg-white dark:bg-gray-800 text-sm text-gray-800 dark:text-white font-semibold border-2 border-gray-200 dark:border-gray-700 rounded-full h-10 w-10">
          +{remainingCount}
        </span>
      )}
    </div>
  );
};

export default Members;
