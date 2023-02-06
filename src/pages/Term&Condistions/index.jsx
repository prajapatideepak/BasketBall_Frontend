import react from "react";
import Heading from '../../Component/Heading';


const TermsandCondition = () => {
    const Termsandcondition = [
        {
            id: 1,
            heading: " 1. Agreements",
            subheading: "Introduction",
            paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi sed facere ut ea eaque, nam, veniam sapiente qui vel obcaecati laudantium enim quis maxime magni labore cupiditate perferendis repellendus dolore?"
        },
        {
            id: 2,
            heading: "2. Survices",
            subheading: "Introduction",
            paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi sed facere ut ea eaque, nam, veniam sapiente qui vel obcaecati laudantium enim quis maxime magni labore cupiditate perferendis repellendus dolore?"
        }
    ]
    return (
        <>
            <section className=''>
                <div className="pt-8 md:pt-12 lg:pt-20">
                    <Heading margin={true} text="Term & Conditions" />
                </div>
                <div className=" px-10 py-10 lg:py-14 lg:px-32 pb-10 ">
                    {
                        Termsandcondition.map((item, index) => {
                            return (
                                <div className="space-y-5  pb-10">
                                    <h1 className="text-2xl lg:text-4xl xl:text-5xl font-semibold text-[#ea592e]">{item.heading}</h1>
                                    <p className="text-lg lg:text-2xl xl:text-3xl">Introduction</p>
                                    <p className="text-sm xl:text-base text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi sed facere ut ea eaque, nam, veniam sapiente qui vel obcaecati laudantium enim quis maxime magni labore cupiditate perferendis repellendus dolore?</p>
                                </div>

                            )
                        })
                    }
                </div>

            </section>
        </>
    );
};

export default TermsandCondition;
