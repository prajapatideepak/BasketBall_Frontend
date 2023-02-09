import { lazy } from 'react'
import Heading from '../../Component/Heading'
import MatchDetailsCard from '../../Component/MatchDetails/MatchDetailcard';


const MatchDetails = () => {
    return (
        <>
            <section className="min-h-screen">
                <div className='heading-container flex justify-center items-center h-24 sm:h-32 md:h-48'>
                    <div className=''>
                        <Heading margin={true} text={'Match Details'} />
                    </div>
                </div>
                <MatchDetailsCard/>
                
            </section>
        </>
    );
};

export default MatchDetails
