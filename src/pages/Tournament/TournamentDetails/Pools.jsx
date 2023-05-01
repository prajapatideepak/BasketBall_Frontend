import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Select from "react-select";
import {ImMakeGroup, ImTelegram} from 'react-icons/im'

function Pools({tournamentTeams, gender_types, age_categories}) {
  const navigate = useNavigate();
  const {tournament_id} = useParams()

  const [pools, setPools] = React.useState([])
  const [ageCategory, setAgeCategory] = React.useState('')
  const [genderType, setGenderType] = React.useState('')
  
  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      backgroundColor: 'white',
      borderWidth: '2px',
      borderColor: "#e5e7eb",
      borderRadius: "8px",
      minHeight: "48px",
      height: "48px",
      cursor: 'pointer',
      boxShadow: state.isFocused ? null : null,
      '&:hover': {
        borderColor: '#bfdbfe',
      },
    }),

    valueContainer: (provided, state) => ({
      ...provided,
      height: "48px",
      padding: "0 6px",
    }),

    singleValue: (provided) => ({
      ...provided,
      color: "black",
    }),

    input: (provided, state) => ({
      ...provided,
      margin: "0px",
    }),
    indicatorSeparator: (state) => ({
      display: "none",
    }),
    indicatorsContainer: (provided, state) => ({
      ...provided,
      height: "48px",
    }),
  };

  const handleAgeCutoff = (e) => {
    setAgeCategory(e.value)
    let allPools = [];
    const teams = tournamentTeams.map((team)=>{
      team.tournament_teams_reg_type.map((item)=>{
        if(item.age_category == e.value && item.gender_type == genderType && item.pool_name != null){

          const foundObject = allPools.find(obj => obj.hasOwnProperty(item.pool_name))
          if (foundObject) {
            foundObject[item.pool_name].push(team);
          } else {
            allPools.push({[item.pool_name]: [team]});
          }
        }
      })
    })

    setPools(allPools)
  }


  const handleGenderType = (e) => {
    setGenderType(e.value)
    let allPools = [];
    const teams = tournamentTeams.map((team)=>{
      team.tournament_teams_reg_type.map((item)=>{
        if(item.age_category == ageCategory && item.gender_type == e.value && item.pool_name != null){

          const foundObject = allPools.find(obj => obj.hasOwnProperty(item.pool_name))
          if (foundObject) {
            foundObject[item.pool_name].push(team);
          } else {
            allPools.push({[item.pool_name]: [team]});
          }
        }
      })
    })

    setPools(allPools)
  }

  return (
    <div>
      <div className='flex flex-col xs:flex-row justify-center items-center gap-4'>
        <Select
            className="rounded-lg border-transparent appearance-none border border-gray-300 w-full xs:w-80 outline-none bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent"
            name="age_category"
            id="age_category"
            placeholder='Select age-Cutoff...'
            onChange={handleAgeCutoff}
            styles={customStyles}
            isSearchable={false}
            options={[
              ...age_categories?.map((item)=>{
                return { value: `${item}`, label: `${item}` }
              })
            ]}
          />
        <Select
            className="rounded-lg border-transparent appearance-none border border-gray-300 w-full xs:w-80 outline-none bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent"
            name="gender_type"
            id="gender_type"
            placeholder='Select gender type...'
            onChange={handleGenderType}
            styles={customStyles}
            isSearchable={false}
            options={[
              ...gender_types?.map((item)=>{
                return { value: `${item}`, label: `${item}` }
              })
            ]}
          />
      </div>
      <div className=" mt-10 md:mt-20">
        {
          pools.length > 0
          ?
            pools.map((pool, idx)=>{
              return(
                <div key={idx}>
                  <div className='sm:text-lg bg-black py-1 text-center text-gray-400 font-semibold'>Pool {Object.keys(pool)[0]}</div>
                  <div className="py-8 px-4 mb-6 flex flex-wrap justify-center items-center gap-5 bg-gray-200">
                  {
                    pool[Object.keys(pool)[0]].map((item, i) => {
                      return(
                          <div key={i} className=" shadow-md shadow-[#ea5a2e29] bg-white rounded-md p-4 hover:bg-black transition-all duration-500 cursor-pointer" onClick={()=> navigate(`/team/profile-detail/${item.teams.id}`)}>
                            <p className='text-[#ee6730] text-sm sm:text-base'>
                              {item.teams.team_name}
                            </p>
                          </div>
                        )
                      })
                    }
                  </div>
                </div>
              )
            })
          :
            <div className="flex justify-center items-center">
              <h2 className='flex justify-center items-center text-sm sm:text-base md:text-lg text-gray-400 font-medium text-center mt-20'> <ImMakeGroup className="text-base sm:text-lg md:text-xl mr-3"/> No pools found</h2>
            </div>
        }
      </div>
    </div>
  )
}

export default Pools