import React from "react";
import TeamCard from "../../../Component/TeamCard";
import Heading from "../../../Component/Heading";
import { AiOutlineTeam } from "react-icons/ai";
import { useGetuserTeamsQuery } from "../../../services/team";

function TeamProfile() {
  const userId = 1;

  const teamData = useGetuserTeamsQuery({ userId });

  return (
    <section className="min-h-screen-fit">
      <div className="mx-auto px-10 py-12 sm:px-20 sm:py-12 md:px-20 md:py-16 lg:px-24 xl:px-28 2xl:px-32">
        <Heading text="Your Teams" />
        {teamData?.data?.data?.length > 0 ? (
          teamData?.data?.data?.map((team, i) => {
            return <TeamCard key={i} teamDetails={team} isPublic={true} />;
          })
        ) : (
          <div className="flex justify-center items-center mt-16 md:mt-24">
            <AiOutlineTeam className="text-2xl xs:text-3xl sm:text-5xl text-gray-400 mr-2" />
            <p className="text-xs xs:text-sm sm:text-lg font-medium text-gray-400">
              No Team Found
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

export default TeamProfile;
