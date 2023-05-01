import React from "react";
import Heading from "../../../Component/Heading";
import moment from 'moment'
import { useDispatch, useSelector } from "react-redux";


export default function PlayerInfo({ PlayerDetail }) {
  const { user } = useSelector((state) => state.user)

  const [city, setCity] = React.useState('');
  const [state, setState] = React.useState('');


  React.useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://api.postalpincode.in/pincode/${PlayerDetail?.SinglePlayerDetails?.pincode}`);
      const json = await response.json();
      setCity(json[0]?.PostOffice[0]?.District)
      setState(json[0]?.PostOffice[0]?.State)
    };
    fetchData();
  }, []);

  return (
    <div className="mx-auto text-center">
      <div className="xs:py-10 py-5 xl:py-5">
        <h1 className="xs:text-5xl text-6xl  text-center font-bold  italic uppercase text-[#ee6730]  ">Player Information</h1>
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
              {city ? city : ""}, {state ? state : ""}
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
