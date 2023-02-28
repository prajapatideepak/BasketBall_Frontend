import React from 'react'
import { useNavigate } from 'react-router-dom'
import { RxDotFilled } from 'react-icons/rx';
import { AiFillCaretLeft } from 'react-icons/ai';


function Match_cards({ match }) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/match-details/${match.match_id}`)
  }
  return (
    <>
      <div className="relative min-w-[260px] xs:min-w-[320px] sm:min-w-[350px] md:min-w-[350px] max-w-[440px] h-[190px] sm:h-[200px] md:h-[185px] border-0 hover:border-2 hover:border-gray-400 hover:border-dashed group rounded-lg"  onClick={handleClick}>
        <div className="absolute flex transition-all duration-300 ease-in-out cursor-pointer top-[-2px] left-[-2px] w-full h-full group-hover:left-[-10px] group-hover:top-[-10px] hover:left-[-10px] hover:top-[-10px] bg-white shadow-xl rounded-lg">
          {
            match.is_live == 1
              ?
              <div className='bg-[#ee6730] w-1 h-full  rounded-l'>

              </div>
              :
              null
          }
          <div className='flex justify-center items-start w-full flex-col ml-3'>
            {/* Upcoming Live   */}
            {
              match.is_live == 0
                ?
                <div className='flex items-center space-x-2 ml-3'>
                  <p className='text-slate-500 text-[15px] font-medium'>{match.day}, <span>{match.date}</span></p>
                  <p className='text-black font-bold text-[15px]'>{match.time}  </p>
                </div>
                :
                null
            }
            {/* MAtch Live   */}
            {
              match.is_live == 1
                ?
                <div className='flex flex-col items-start '>
                  <div className='flex items-center space-x-3'>
                    <p className='uppercase font-semibold text-red-600 text-sm xl:text-base flex items-center'>
                      <RxDotFilled className='text-2xl' />
                      Watch Live
                    </p>
                    <p className='text-black font-semibold text-sm xl:text-base'>
                      FINAL
                    </p>
                  </div>
                  <div className='flex items-center space-x-2 ml-3'>
                    <p className='text-slate-500 text-[15px] font-medium'>{match.day}, <span>{match.date}</span></p>
                    <p className='text-black font-bold text-[15px]'>{match.time}  </p>
                  </div>
                </div>
                :
                null
            }
            {/* MAtch Compelete   */}
            {
              match.is_live == 2
                ?
                <div className='flex  items-start space-x-3 '>
                  <p className='text-black font-semibold'>
                    FINAL
                  </p>
                  <p className='text-slate-500 text-[15px] font-medium'>{match.day}, <span>{match.date}</span></p>
                </div>
                :
                null
            }
            <div className='flex flex-col items-center text-white gap-2 py-1 w-full '>
              <div className='flex justify-start items-center w-full'>
                <div className='flex  justify-between items-center w-[95%]'>
                  <div className="t_1  flex  justify-start w-full items-center gap-2  ">
                    <div className="w-10 sm:w-12 h-10 sm:h-12 md:w-[40px] md:h-[40px] xl:w-10 xl:h-10">
                      <img src={match.F_logo} className="object-contain h-full w-full rounded-full " alt="" />
                    </div>
                    <h1 className='text-black font-extrabold text-center uppercase'>{match.first_team}</h1>
                  </div>
                  {
                    match.is_live == 2
                      ?
                      <div className='flex items-center '>
                        <h1 className='font-bold text-black text-xl'>
                          {match.team_1_score}
                        </h1>
                      </div>
                      :
                      null
                  }
                </div>
                {
                  match.won_team == match.first_team
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
              <div className='flex justify-start items-center w-full'>
                <div className='flex  justify-between items-center w-[95%]'>
                  <div className="t_1  flex  justify-start w-full items-center gap-2  ">
                    <div className="w-10 sm:w-12 h-10 sm:h-12 md:w-[40px] md:h-[40px] xl:w-10 xl:h-10">
                      <img src={match.s_logo} className="object-contain h-full w-full rounded-full " alt="" />
                    </div>
                    <h1 className='text-black font-extrabold text-center uppercase'>{match.secound_team}</h1>
                  </div>
                  {
                    match.is_live == 2
                      ?
                      <div className='flex items-center '>
                        <h1 className='font-bold text-black text-xl'>
                          {match.team_2_score}
                        </h1>
                      </div>
                      :
                      null
                  }
                </div>
                {
                  match.won_team == match.secound_team
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
                {match.tournament}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Match_cards
