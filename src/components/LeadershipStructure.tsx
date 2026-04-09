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
} from "@/assets/images/administration/Administration";
import { Card, CardContent } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const leadershipTeam = [
  { id: 1, name: "Somoire Keen", role: "Chief Executive Officer", team: "Executive Leadership", image: SomoBosieImg, level: 1 },
  { id: 2, name: "John Chemirmir", role: "General Manager", team: "Executive Leadership", image: JohnChemirmir, level: 2 },
  { id: 3, name: "Pius Leshoo", role: "Operations Manager", team: "Operations Team", image: PiusLeshoo, level: 3 },
  { id: 4, name: "Jimmy John Olemonah", role: "Safety Manager", team: "HSSE Department", image: JimmyJohnOlemonah, level: 3 },
  { id: 5, name: "David Mbugua", role: "Finance Manager", team: "Finance Team", image: DavidMbugua, level: 3 },
  { id: 6, name: "Robert Oloo", role: "Chief Mechanic", team: "Technical Team", image: RobertOloo, level: 4 },
  { id: 7, name: "John Gachuiri", role: "Chief Driver", team: "Logistics Team", image: JohnGachuiri, level: 4 },
];

const LeadershipStructure = () => {
  const groupByLevel = leadershipTeam.reduce(
    (acc: { [key: number]: typeof leadershipTeam }, leader) => {
      if (!acc[leader.level]) acc[leader.level] = [];
      acc[leader.level].push(leader);
      return acc;
    },
    {}
  );

  const renderLeaderCard = (
    leader: (typeof leadershipTeam)[0],
    avatarSize: string,
    borderColor: string
  ) => (
    <div key={leader.id} className="relative z-10 flex flex-col items-center">
      <div className={`mb-4 relative ${avatarSize} rounded-full overflow-hidden border-4 ${borderColor} shadow-lg bg-background`}>
        <Image src={leader.image} alt={leader.name} fill className="object-cover" />
      </div>
      <Card className={`border-l-4 ${borderColor} max-w-xs w-full`}>
        <CardContent className="p-4 text-center">
          <h3 className="text-lg md:text-xl font-bold text-card-foreground">{leader.name}</h3>
          <p className="font-semibold text-primary">{leader.role}</p>
          <p className="text-muted-foreground text-sm">{leader.team}</p>
        </CardContent>
      </Card>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-3xl text-foreground font-bold mb-12 text-center">
        Leadership Structure
      </h2>

      {/* Desktop Org Chart */}
      <div className="hidden md:block relative">
        <div className="absolute left-1/2 top-44 h-[calc(100%-11rem)] w-0.5 bg-primary/30 -translate-x-1/2" />

        {/* Level 1 */}
        <div className="flex justify-center mb-16">
          {groupByLevel[1]?.map((l) => renderLeaderCard(l, "w-32 h-32 md:w-40 md:h-40", "border-primary"))}
        </div>

        {/* Level 2 */}
        <div className="flex justify-center mb-16">
          {groupByLevel[2]?.map((l) => renderLeaderCard(l, "w-28 h-28 md:w-36 md:h-36", "border-primary/80"))}
        </div>

        {/* Level 3 */}
        <div className="flex justify-center gap-4 md:gap-8 lg:gap-16 mb-16">
          {groupByLevel[3]?.map((l) => renderLeaderCard(l, "w-24 h-24 md:w-32 md:h-32", "border-primary/60"))}
        </div>

        {/* Level 4 */}
        <div className="flex justify-center md:justify-evenly gap-4 md:gap-32">
          {groupByLevel[4]?.map((l) => renderLeaderCard(l, "w-24 h-24 md:w-28 md:h-28", "border-primary/40"))}
        </div>
      </div>

      {/* Mobile List View */}
      <div className="md:hidden space-y-4">
        <h3 className="text-xl font-bold text-center text-primary mb-6">
          Leadership Team
        </h3>
        {leadershipTeam.map((leader) => (
          <Card key={leader.id} className="border-l-4 border-l-primary">
            <CardContent className="p-4 flex items-center gap-4">
              <Avatar className="w-16 h-16 border-2 border-primary/30">
                <AvatarImage src={typeof leader.image === "string" ? leader.image : undefined} alt={leader.name} />
                <AvatarFallback className="bg-accent text-primary font-bold">
                  {leader.name.split(" ").map((n) => n[0]).join("")}
                </AvatarFallback>
              </Avatar>
              <div>
                <h4 className="font-bold text-card-foreground">{leader.name}</h4>
                <p className="text-primary text-sm">{leader.role}</p>
                <p className="text-muted-foreground text-xs">{leader.team}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default LeadershipStructure;
