import React from "react";
import Image from "next/image";
import {
  DavidMbugua,
  JimmyJohnOlemonah,
  JohnChemirmir,
  JohnGachuiri,
  PiusLeshoo,
  RobertOloo,
  SomoBosieImg,
  SomoireKeen,
} from "@/assets/images/administration/Administration";

const LeadershipStructure = () => {
  const leadershipTeam = [
    {
      id: 1,
      name: "Somoire Keen",
      role: "Chief Executive Officer",
      team: "Executive Leadership",
      image: SomoBosieImg,
      level: 1,
    },
    {
      id: 2,
      name: "John Chemirmir",
      role: "General Manager",
      team: "Executive Leadership",
      image: JohnChemirmir,
      level: 2,
    },
    {
      id: 3,
      name: "Pius Leshoo",
      role: "Operations Manager",
      team: "Operations Team",
      image: PiusLeshoo,
      level: 3,
    },
    {
      id: 4,
      name: "Jimmy John Olemonah",
      role: "Safety Manager",
      team: "HSSE Department",
      image: JimmyJohnOlemonah,
      level: 3,
    },
    {
      id: 5,
      name: "David Mbugua",
      role: "Finance Manager",
      team: "Finance Team",
      image: DavidMbugua,
      level: 3,
    },
    {
      id: 6,
      name: "Robert Oloo",
      role: "Chief Mechanic",
      team: "Technical Team",
      image: RobertOloo,
      level: 4,
    },
    {
      id: 7,
      name: "John Gachuiri",
      role: "Chief Driver",
      team: "Logistics Team",
      image: JohnGachuiri,
      level: 4,
    },
  ];

  // Group the leadership team by level
  const groupByLevel = leadershipTeam.reduce(
    (acc: { [key: number]: typeof leadershipTeam }, leader) => {
      if (!acc[leader.level]) {
        acc[leader.level] = [];
      }
      acc[leader.level].push(leader);
      return acc;
    },
    {}
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-3xl text-black font-bold mb-12 text-center">
        Leadership Structure
      </h2>

      {/* Organizational Chart */}
      <div className="relative">
        {/* Vertical connecting lines */}
        <div className="absolute left-1/2 top-44 h-[calc(100%-11rem)] w-0.5 bg-orange-300 -translate-x-1/2 hidden md:block"></div>

        {/* Level 1 - Managing Director */}
        <div className="flex justify-center mb-16">
          {groupByLevel[1]?.map((leader) => (
            <div
              key={leader.id}
              className="relative z-10 flex flex-col items-center"
            >
              <div className="mb-4 relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-orange-500 shadow-lg bg-white">
                <Image
                  src={leader.image}
                  alt={leader.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-center bg-white p-4 rounded-lg shadow-md border-l-4 border-orange-500 max-w-xs">
                <h3 className="text-xl font-bold text-gray-800">
                  {leader.name}
                </h3>
                <p className="font-semibold text-orange-600">{leader.role}</p>
                <p className="text-gray-600 text-sm">{leader.team}</p>
              </div>
              {/* Connector line */}
              <div className="absolute bottom-0 left-1/2 w-0.5 h-8 bg-orange-300 -translate-x-1/2 hidden md:block"></div>
            </div>
          ))}
        </div>

        {/* Level 2 - General Manager */}
        <div className="flex justify-center mb-16">
          {groupByLevel[2]?.map((leader) => (
            <div
              key={leader.id}
              className="relative z-10 flex flex-col items-center"
            >
              <div className="mb-4 relative w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden border-4 border-orange-400 shadow-lg bg-white">
                <Image
                  src={leader.image}
                  alt={leader.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-center bg-white p-4 rounded-lg shadow-md border-l-4 border-orange-400 max-w-xs">
                <h3 className="text-xl font-bold text-gray-800">
                  {leader.name}
                </h3>
                <p className="font-semibold text-orange-600">{leader.role}</p>
                <p className="text-gray-600 text-sm">{leader.team}</p>
              </div>
              {/* Connector line */}
              <div className="absolute bottom-0 left-1/2 w-0.5 h-8 bg-orange-300 -translate-x-1/2 hidden md:block"></div>
            </div>
          ))}
        </div>

        {/* Level 3 - Department Managers */}
        <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-8 lg:gap-16 mb-16">
          {groupByLevel[3]?.map((leader) => (
            <div
              key={leader.id}
              className="relative z-10 flex flex-col items-center mb-8 md:mb-0"
            >
              {/* Horizontal connector to the center vertical line for desktop */}
              <div className="absolute top-14 md:top-16 left-1/2 w-full h-0.5 bg-orange-300 -translate-x-1/2 -translate-y-1/2 hidden md:block"></div>

              <div className="mb-4 relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-orange-300 shadow-lg bg-white">
                <Image
                  src={leader.image}
                  alt={leader.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-center bg-white p-3 md:p-4 rounded-lg shadow-md border-l-4 border-orange-300 max-w-xs w-full">
                <h3 className="text-lg md:text-xl font-bold text-gray-800">
                  {leader.name}
                </h3>
                <p className="font-semibold text-orange-600">{leader.role}</p>
                <p className="text-gray-600 text-sm">{leader.team}</p>
              </div>
              {/* Vertical connector for each manager to Level 4 */}
              {(leader.id === 3 || leader.id === 4) && (
                <div className="absolute bottom-0 left-1/2 w-0.5 h-8 bg-orange-300 -translate-x-1/2 hidden md:block"></div>
              )}
            </div>
          ))}
        </div>

        {/* Level 4 - Chiefs */}
        <div className="flex flex-col md:flex-row justify-center md:justify-evenly gap-4 md:gap-32">
          {groupByLevel[4]?.map((leader, index) => (
            <div
              key={leader.id}
              className="relative z-10 flex flex-col items-center"
            >
              {/* Horizontal connector to the department manager above */}
              <div className="absolute top-14 md:top-16 left-1/2 w-full h-0.5 bg-orange-300 -translate-x-1/2 -translate-y-1/2 hidden md:block"></div>

              <div className="mb-4 relative w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden border-4 border-orange-200 shadow-lg bg-white">
                <Image
                  src={leader.image}
                  alt={leader.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-center bg-white p-3 md:p-4 rounded-lg shadow-md border-l-4 border-orange-200 max-w-xs w-full">
                <h3 className="text-lg md:text-xl font-bold text-gray-800">
                  {leader.name}
                </h3>
                <p className="font-semibold text-orange-600">{leader.role}</p>
                <p className="text-gray-600 text-sm">{leader.team}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile-friendly view (stacked cards for small screens) */}
      <div className="md:hidden mt-16 space-y-4">
        <h3 className="text-xl font-bold text-center text-orange-600 mb-6">
          Leadership Team
        </h3>
        {leadershipTeam.map((leader) => (
          <div
            key={leader.id}
            className="flex items-center p-4 bg-white rounded-lg shadow-md border-l-4 border-orange-500"
          >
            <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-orange-300 flex-shrink-0">
              <Image
                src={leader.image}
                alt={leader.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="ml-4">
              <h4 className="font-bold text-gray-800">{leader.name}</h4>
              <p className="text-orange-600 text-sm">{leader.role}</p>
              <p className="text-gray-600 text-xs">{leader.team}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeadershipStructure;
