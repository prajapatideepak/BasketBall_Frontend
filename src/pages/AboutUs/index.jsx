import React from "react";
import AboutUsCard from "../../Component/aboutus/AboutUsCard";
import AboutusFeatureCard from "../../Component/aboutus/AboutusFeatureCard";
function AboutUs() {
  const features = [
    "All-in-one app for basketball",
    "Free to use",
    "Live scoring",
    "Fixtures",
    "Player registration",
    "Player profiling",
    "Player Ranking",
    "Tournament registration",
    "Tournament updates",
    "Team registration",
    "Team Profile",
    "Volleyball news",
    "Scoreboard",
    "Set points",
    "Time-outs",
    "Rules and regulations ",
  ];

  return (
    <div>
      {/* <div className='heading-container flex justify-center items-center h-24 sm:h-32 md:h-48 bg-black'>
                <span className='text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold text-white'>
                    About us
                </span>
            </div> */}
      <div className=" text-center lg:text-left mx-auto px-10 py-12 sm:px-20 sm:py-12 md:px-20 md:py-16 lg:px-24 xl:px-28 2xl:px-32">
        <h1 className="text-4xl text-center ">About us</h1>
        <div className="py-8 ">
          <AboutUsCard key={1} name={1} />
        </div>
        <div>
          <div className="text-center">
            <h1 className="text-3xl text-center ">CBL Features</h1>
            <p className="w-full md:w-2/3 mx-auto p-2 text-gray-800 italic">
              <span className="text-2xl text-black">"</span> Unleash the full
              potential of your basketball passion with our all-in-one web
              portal, featuring live scores, tournament updates, stats, and more
              <span className="text-2xl text-black">"</span>
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
            {features.map((feature) => {
              return <AboutusFeatureCard key={feature} feature={feature} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
