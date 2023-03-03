import { lazy } from "react";
import Heading from "../../Component/Heading";
import MatchDetailsCard from "../../Component/MatchDetails/MatchDetailcard";
import { CgMediaLive } from "react-icons/cg";
const MatchDetails = () => {
  return (
    <section className="min-h-screen">
      {/* <div className="relative   ">
        <div className="absolute text-white font-bold">Deepak</div>
        <img
          className="object-cover  h-48  w-full"
          src="/CBL_Images/dash.jpg"
          alt="matchs"
        />
        <div className="bg-gradient-to-br from-gray-900 to-transparent absolute w-full h-full top-0"></div>
      </div> */}

      <div className="relative bg-gradient-to-r  py-10 bg-clip-border  mx-auto tsext-white  from-orange-500 via-transsparent to-blue-800">
        {/* heading start here */}
        <div className=" text-center py-2 px-12 ">
          <h1 className="text-2xl underline">Corporate BasketBall league </h1>
        </div>

        {true && (
          <div
            className="bg-white rounded-l-lg rounded-t-none flex items-center justify-center  px-3 py-1 font-bold top-0 right-0 absolute
        "
          >
            {" "}
            <div className="px-4 "> Live</div>
            <div>
              <CgMediaLive className="text-red-600 animate-ping" />
            </div>
          </div>
        )}
        {/* heading ends here */}

        {/* team score statics  start here */}
        <div className="flex py-6 justify-evenly items-center ">
          {/* team 1 Detail */}
          <div className="text-center space-y-2">
            <img
              className="w-32 h-32 mx-auto bg-white object-cover p-1 shadow-lg border border-gray-300 rounded-full  "
              src="/CBL_Images/logo5.png"
            />
            <h2 className="text-xl text-white font-semibold">
              Jetha ki Babita
            </h2>
          </div>
          {/* team detail end here  */}
          {/*  */}
          <div className="space-y-4 ">
            <div className="grid grid-cols-3 font-bold   text-3xl text-white">
              <div className=" bg-orange-600 shadow-xl rounded-b-none rounded-l-xl px-8 py-2 ">
                {12}
              </div>
              <div className="text-4xl px-6 bg-white shadow-xl text-black italic  py-1 text-">
                Vs
              </div>
              <div className=" bg-blue-600 shadow-xl rounded-b-none rounded-r-xl px-8 py-2">
                {12}
              </div>
              <div className="col-span-3 bg-black text-white flex justify-around w-full mx-auto mb-2 font-semibold rounded-b-xl text-lg items-center space-x-3">
                <span>3</span>
                <span>-</span>
                <span>1</span>
              </div>
            </div>
            {/* score Detail */}

            <div className="text-center">
              <span className="bg-black font-semibold w-full  text-lg text-white px-8 py-1 rounded-full ">
                {" "}
                Quarter - 1{" "}
              </span>
            </div>
          </div>
          {/*  */}
          {/* Team 2 Detail */}
          <div className="text-center  space-y-2">
            <img
              className="w-32 h-32 mx-auto  bg-white  object-cover p-1  shadow-lg border border-gray-300 rounded-full  "
              src="/CBL_Images/logo3.png"
            />
            <h2 className="text-xl text-white font-semibold">
              Champak ki Sonu
            </h2>
          </div>
          {/* Team 2 Detail */}
        </div>
        {/* team score statics  end here here */}
      </div>
    </section>
  );
};

export default MatchDetails;
