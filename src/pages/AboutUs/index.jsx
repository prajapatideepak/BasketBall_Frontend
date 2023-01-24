import React from "react";
import AboutUsCard from "../../Component/aboutus/AboutUsCard";
import AboutusFeatureCard from "../../Component/aboutus/AboutusFeatureCard";
function AboutUs() {
const features = ["All-in-one app for basketball",
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
"Rules and regulations "]

  return (
    <div className="px-4 text-center lg:text-left lg:px-12 py-20  min-h-screen">
      <h1 className="text-4xl text-center ">About us</h1>
      <div className="py-8 ">
        <AboutUsCard key={1} name={1} />
      </div>
      <div>
              <h1 className="text-3xl text-center ">CBL Features</h1>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
                {features.map(feature=>{
                    return <AboutusFeatureCard key={feature} feature={feature}  />
                })}
              </div>

          
      </div>
    </div>
  );
}

export default AboutUs;
