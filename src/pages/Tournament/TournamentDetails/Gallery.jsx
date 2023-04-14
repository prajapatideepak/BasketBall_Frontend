import React, {useState} from 'react'
import Masonry from 'react-masonry-css'
import LazyLoad from 'react-lazyload';
import '../../Gallery/Gallery.css';
import { AiFillCloseCircle } from 'react-icons/ai';

function Gallery({galleryDetails}) {
  const breakpointColumnsObj = {
        default: 4,
        1100: 3,
        700: 2,
        500: 1
    };
  const [previewImage, setPreviewImage] = React.useState('')

  return (
    <div>
        {
            galleryDetails.length > 0
            ?
                <Masonry
                breakpointCols={breakpointColumnsObj}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
                >
                    {
                        galleryDetails.map((item, i) =>{
                            return(
                                <div key={i} className='bg-gray-200 break-inside-avoid cursor-pointer overflow-hidden' onClick={()=> setPreviewImage(item.photo)}>
                                    <LazyLoad placeholder={<Placeholder/>} once>
                                    <img src={item.photo} alt="" effect='blur' className='w-full h-full hover:scale-105 transition-all duration-500' />

                                    </LazyLoad>
                                </div>
                            )
                        })
                    }
                </Masonry>
            :
                <div className="w-full text-center mt-12 py-5">
                    <h4 className='text-lg font-medium text-gray-400'>No Images Found</h4>
                </div>
        }
        {
            previewImage != ''
            ?
                <div tabIndex="-1" aria-hidden="true" className="fixed bg-black top-0 left-0 right-0 w-full min-h-screen p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full z-[9999]">
                <div className='flex justify-end items-center px-5 py-3'>
                    <AiFillCloseCircle className='cursor-pointer text-2xl text-[#ee6730]' onClick={() => setPreviewImage('')}>close</AiFillCloseCircle>
                </div>
                <div className="w-full flex justify-center items-center">
                    <div className='flex justify-center items-center w-full mt-20'>
                        <img src={previewImage} className='lg:w-2/4' alt="" />
                    </div>
                </div>
                </div>
            : 
                null
        }
    </div>
  )
}

export default Gallery

const Placeholder = () =>{
    return  <span className='bg-gray-200 w-[337px] h-[225px]'></span>

}