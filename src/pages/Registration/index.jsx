import React from "react";
import { Link } from "react-router-dom";

function Registration(){
    return(
        <>
         <div className="h-screen flex justify-center items-center">
         <Link to={"/tournament-add-edit"}>
            Tournament 
         </Link>

         </div>
        </>
    )
}
export default Registration