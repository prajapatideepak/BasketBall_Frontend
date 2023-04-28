import React from "react";
import Heading from "../../../Component/Heading";
import moment from 'moment'
import { useDispatch, useSelector } from "react-redux";


export default function PlayerInfo({ PlayerDetail }) {
  const {user} = useSelector((state)=> state.user)

  return (
    <div className="mx-auto text-center">
      <div className="flex justify-center ">
        <Heading
          text={"Player Information"}
          className="text-lg md:text-2xl text-center  "
          margin={true}
        />
      </div>
      {/*  */}
      <div className="text-left pt-4 ">
        <h2 className="text-xl py-2">Basic Information</h2>

        <div className="flex flex-wrap p-2  gap-2 lg:gap-3">
          <div className="bg-white px-2 py-1 rounded-lg border-2 border-orange-100 shadow-xl">
            <span className="text-xs md:text-base">Height : </span>
            <span className="text-xs md:text-sm font-semibold ">
              {PlayerDetail?.SinglePlayerDetails?.height} cm
            </span>
          </div>
          <div className="bg-white px-2 py-1 rounded-lg border-2 border-orange-100 shadow-xl">
            <span className="text-xs md:text-base">Weight : </span>
            <span className="text-xs md:text-sm font-semibold ">
              {PlayerDetail?.SinglePlayerDetails?.weight} kg
            </span>
          </div>

          <div className="bg-white px-2 py-1 rounded-lg border-2 border-orange-100 shadow-xl">
            <span className="text-xs md:text-base">{PlayerDetail?.SinglePlayerDetails.users.id == user.id 
                  ? 'Date of Birth' : 'Age'} : </span>
            <span className="text-xs md:text-sm font-semibold ">
              {
                PlayerDetail?.SinglePlayerDetails?.date_of_birth 
                ?
                  PlayerDetail?.SinglePlayerDetails.users.id == user.id 
                  ?
                    moment(PlayerDetail?.SinglePlayerDetails?.date_of_birth).format('DD / MM / YY')
                  :
                    moment().diff(PlayerDetail?.SinglePlayerDetails?.date_of_birth, "years") 
                :
                  ""
              }
            </span>
          </div>

          <div className="bg-white px-2 py-1 rounded-lg border-2 border-orange-100 shadow-xl">
            <span className="text-xs md:text-base">From : </span>
            <span className="text-xs md:text-sm font-semibold ">
              Ahmedabad , Gujarat
            </span>
          </div>
        </div>
      </div>

      {/* contat */}
      <div className="text-left ">
        <h2 className="text-xl py-2">Game Information</h2>

        <div className="flex flex-wrap p-2  gap-3">
          <div className="bg-white px-2 py-1 rounded-lg border-2 border-orange-100 shadow-xl">
            <span className="text-xs md:text-base">Jersey Number :</span>
            <span className="text-xs md:text-sm font-semibold px-1">
              {PlayerDetail?.SinglePlayerDetails?.jersey_no}
            </span>
          </div>
          <div className="bg-white px-2 py-1 rounded-lg border-2 border-orange-100 shadow-xl">
            <span className="text-xs md:text-base">Game Position : </span>
            <span className="text-xs md:text-sm font-semibold capitalize ">
              {PlayerDetail?.SinglePlayerDetails?.playing_position}
            </span>
          </div>
        </div>
      </div>
      {/* for contact infor */}
      {

        PlayerDetail?.SinglePlayerDetails.users.id == user.id 
        ?
          <div className="text-left ">
            <h2 className="text-xl py-2">Contact Information</h2>

            <div className="flex flex-wrap p-2  ">
              <div className="bg-white   px-2 py-1 rounded-lg border-2 border-orange-100 shadow-xl">
                <span className="text-xs md:text-base">Email : </span>
                <span className="text-xs md:text-sm font-semibold">
                  {PlayerDetail?.SinglePlayerDetails?.users?.email}
                </span>
              </div>
            </div>
          </div>
        :
          null
      }
    </div>
  );
}
