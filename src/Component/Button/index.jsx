import React from "react";

function Button({text , dataModalTarget='', dataModalToggle='', margin=true, onClick}) {
    
    return (
        <button onClick={()=> onClick()} type="button" data-modal-target={dataModalTarget} data-modal-toggle={dataModalToggle} className={`bg-slate-900 ${margin ? 'my-10' : ''} relative inline-flex items-center justify-center w-full px-4 py-2 xs:py-2.5 sm:px-8 sm:py-2.5 overflow-hidden font-medium tracking-tighter text-white rounded-lg cursor-pointer group`}>
            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-[#ee6730] rounded-lg group-hover:w-full group-hover:h-56"></span>
            <span className="relative text-xs xs:text-sm sm:text-base">{text == '' ? 'SUBMIT' : text}</span>
        </button>  
    )
}

export default Button;
