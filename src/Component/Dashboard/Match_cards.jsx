import React from 'react'
import { useNavigate } from 'react-router-dom'
import { RxDotFilled } from 'react-icons/rx';
import { AiFillCaretLeft } from 'react-icons/ai';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import moment from 'moment'


function Match_cards({ match }) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/match-details/${match.id}`)
  }
  const prevSlide = () => {
    var match = document.getElementById("match")
    match.scrollLeft = match.scrollLeft - 380;
  };

  const nextSlide = () => {
    var match = document.getElementById("match")
    match.scrollLeft = match.scrollLeft + 380;
  };
  return (
    <>
      <div className="relative min-w-[260px] xs:min-w-[320px] sm:min-w-[350px] md:min-w-[350px] max-w-[440px] h-[190px] sm:h-[200px] md:h-[185px] border-0 hover:border-2 hover:border-gray-400 hover:border-dashed group rounded-lg"
        onClick={handleClick} key={match.id}>
        <div className="absolute flex transition-all duration-300 ease-in-out cursor-pointer top-[-2px] left-[-2px] w-full h-full group-hover:left-[-10px] group-hover:top-[-10px] shadow-[#ea5a2e12] hover:left-[-10px] hover:top-[-10px] bg-white shadow-xl rounded-lg">
          {/* Live match  */}
          {
            match?.status == 2
              ?
              <div className='bg-[#ee6730] w-1 h-full  rounded-l'>

              </div>
              :
              null
          }
          <div className='flex justify-center items-start w-full flex-col ml-3'>
            {/* Upcoming Live   */}
            {
              match?.status == 1
                ?
                <div className='flex flex-col items-start '>
                  <div className='flex items-center space-x-3'>
                    <p className='uppercase font-semibold text-black text-sm xl:text-base flex items-center'>
                      UpComming
                    </p>
                  </div>
                  <div className='flex items-start space-x-3'>
                    <p className='text-black font-semibold uppercase'>
                      {match.round_name ? match.round_name : ""}
                    </p>
                    <p className='text-slate-500 text-[15px] font-medium'><span>{match.start_date ? moment(match?.start_date).format('ll') : "Comming Soon"}</span></p>
                    <p className='text-black font-bold text-[15px]'>{match?.start_time}  </p>
                  </div>
                </div>
                :
                null
            }
            {/* MAtch Live   */}
            {
              match?.status == 2
                ?
                <div className='flex flex-col items-start '>
                  <div className='flex items-center space-x-3'>
                    <p className='uppercase font-semibold text-red-600 text-sm xl:text-base flex items-center'>
                      <RxDotFilled className='text-2xl' />
                      Watch Live
                    </p>
                  </div>
                  <div className='flex items-start space-x-3'>
                    <p className='text-black font-semibold uppercase'>
                      {match.round_name ? match.round_name : ""}
                    </p>
                    <p className='text-slate-500 text-[15px] font-medium'><span>{match.start_date ? moment(match?.start_date).format('ll') : null}</span></p>
                    <p className='text-black font-bold text-[15px]'>{match?.start_time ? match.start_time : ""} </p>
                  </div>
                </div>
                :
                null
            }
            {/* MAtch Compelete   */}
            {
              match?.status == 3
                ?
                <div className='flex flex-col items-start '>
                  <div className='flex items-center space-x-3'>
                    <p className='uppercase font-semibold text-green-600 text-sm xl:text-base flex items-center'>
                      Finished
                    </p>
                  </div>
                  <div className='flex items-start space-x-3 '>
                    <p className='text-black font-semibold uppercase'>
                      {match.round_name ? match.round_name : ""}
                    </p>
                    <p className='text-slate-500 text-[15px] font-medium'><span>{match.start_date ? moment(match?.start_date).format('ll') : ""}</span></p>
                  </div>
                </div>
                :
                null
            }
            <div className='flex flex-col items-center text-white gap-2 py-1 w-full '>
              {/* First Team Details */}
              <div className='flex justify-start items-center w-full'>
                <div className='flex  justify-between items-center w-[95%]'>
                  <div className="t_1  flex  justify-start w-full items-center gap-2">
                    <div className="w-10 sm:w-12 h-10 sm:h-12 md:w-[40px] md:h-[40px] xl:w-10 xl:h-10">
                      <img src={match?.team_1.logo} className="object-contain h-full w-full rounded-full  border-2 border-gray-400 shadow-xl " alt="" />
                    </div>
                    <h1 className='text-black font-extrabold text-center uppercase'>{match?.team_1.team_name}</h1>
                  </div>
                  {/* Wining Team */}
                  
                </div>
                {
                  match?.status == 3 && match.won_by_team_id == match.team_1.id
                    ?
                    <div className=' w-[5%]'>
                      <div className='flex justify-end items-end'>
                        <AiFillCaretLeft className='text-[#ee6730] text-xl' />
                      </div>
                    </div>
                    :
                    null
                }
              </div>
              {/* Secound Team Details */}
              <div className='flex justify-start items-center w-full'>
                <div className='flex  justify-between items-center w-[95%]'>
                  <div className="t_1  flex  justify-start w-full items-center gap-2  ">
                    <div className="w-10 sm:w-12 h-10 sm:h-12 md:w-[40px] md:h-[40px] xl:w-10 xl:h-10">
                      <img src={match?.team_2.logo} className="object-contain h-full w-full rounded-full border-2 border-gray-400 shadow-xl " alt="" />
                    </div>
                    <h1 className='text-black font-extrabold text-center uppercase'>{match?.team_2.team_name}</h1>
                  </div>
                  {/* Wining Team */}
                 
                </div>
                {
                  match?.status == 3 && match.won_by_team_id == match.team_2.id
                    ?
                    <div className=' w-[5%]'>
                      <div className='flex justify-end items-end'>
                        <AiFillCaretLeft className='text-[#ee6730] text-xl' />
                      </div>
                    </div>
                    :
                    null
                }
              </div>
            </div>
            <div>
              <p className='text-slate-500 font-semibold text-sm'>
                {match?.tournaments.tournament_name}
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Left Arrow  */}
      <div onClick={prevSlide}
        className="justify-center hidden lg:block absolute left-2 bottom-[40%] active:scale-90 hover:bg-black duration-300 group items-center p-2 bg-white  text-black shadow-xl  rounded-full cursor-pointer">
        <FaChevronLeft
          className="text-lg group-hover:text-white" />
      </div>
      {/* Right Arrow  */}
      <div onClick={nextSlide}
        className="justify-center hidden lg:block absolute bottom-[40%] right-2 active:scale-90 hover:bg-black duration-300 group items-center p-2 bg-white  text-black shadow-xl  rounded-full cursor-pointer">
        <FaChevronRight
          className="text-lg group-hover:text-white" />
      </div>
    </>
  )
}

export default Match_cards
