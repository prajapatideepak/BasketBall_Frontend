import React from "react";
import { AiOutlineTeam } from "react-icons/ai";
import { FaFilter } from "react-icons/fa";
import TournamentTeamCard from "./TournamentTeamCard";

function Teams({isOrganizer, teams, tournamentDetails, refetchData}) {
  const [allTeams, setAllTeams] = React.useState(teams)
  const [genderType, setGenderType] = React.useState('')
  const [ageCategory, setAgeCategory] = React.useState('')

  const handleAgeChange = (e) =>{
    setAgeCategory(e.target.value)
    setAllTeams(()=>{
      return teams.filter(t =>
        (
          e.target.value == ''
          ?
            true
          :
            t.age_categories.includes(e.target.value) 
        )
        && 
        (
          genderType == ''
          ?
            true
          :
            t.gender_type.includes(genderType)
        )
      )
    })
  }

  const handleGenderChange = (e) =>{
    setGenderType(e.target.value)
    setAllTeams(()=>{
      return teams.filter(t =>
        (
          e.target.value == ''
          ?
            true
          :
            t.gender_type.includes(e.target.value) 
        )
        && 
        (
          ageCategory == ''
          ?
            true
          :
            t.age_categories.includes(ageCategory)
        )
      )
    })
  }

  React.useEffect(() => {
    setAllTeams(teams)
  }, [teams]);
  
  return (
    <div>
      <div className="mb-5">
        <div className="flex  justify-center">
          <div className="flex items-center space-x-3 border shadow-md py-2 px-3">
            <span className="flex items-center space-x-1 border-r-2 px-2">
              <h3 className="sm:flex hidden text-base lg:text-lg text-gray-700">Filter</h3>
              <FaFilter className="text-[#ee6730]" />
            </span>
            <div className="flex justify-center items-center md:flex-row flex-col space-y-1 md:space-y-0 md:space-x-2">
              <label htmlFor="" className="text-sm text-gray-500">
                Age Category
              </label>
              <select
                name="age_category"
                id=""
                onChange={handleAgeChange}
                className="bg-gray-100 outline-none w-24 px-2 py-1 border text-sm"
              >
                <option value="">All</option>
                {
                  tournamentDetails.age_categories.map((item, index) =>{
                    return(
                      <option key={index} value={item} className="capitalize">{item}</option>
                    )
                  })
                }
              </select>
            </div>
            <div className="flex justify-center items-center md:flex-row flex-col space-y-1 md:space-y-0 md:space-x-2">
              <label htmlFor="" className="text-sm text-gray-500">
                Gender Type
              </label>
              <select
                name="gender_type"
                id=""
                onChange={handleGenderChange}
                className="bg-gray-100 outline-none w-24 px-2 py-1 border text-sm"
              >
                <option value="">All</option>
                {
                  tournamentDetails.gender_types.map((item, index) =>{
                    return(
                      <option key={index} value={item} className="capitalize">{item}</option>
                    )
                  })
                }
              </select>
            </div>
          </div>
        </div>
      </div>
      {allTeams.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 mt-10">
          {allTeams.map((team, i) => {
            return team.tournament_teams_reg_type.map((item, index)=>{
              return <TournamentTeamCard key={index} isOrganizer={isOrganizer} teamDetails={team} teamCategoryType={item} is_disqualified={item.is_disqualified} tournament_teams_id={item.id} refetchData={refetchData} />;
            })
          })}
        </div>
      ) : (
        <div className="flex justify-center items-center mt-16 md:mt-24">
          <AiOutlineTeam className="text-2xl xs:text-3xl sm:text-5xl text-gray-400 mr-2" />
          <p className="text-xs xs:text-sm sm:text-lg font-medium text-gray-400">
            No Team Found
          </p>
        </div>
      )}
    </div>
  );
}

export default Teams;
