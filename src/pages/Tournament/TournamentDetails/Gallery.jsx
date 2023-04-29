import React, {useState} from 'react'
import Masonry from 'react-masonry-css'
import LazyLoad from 'react-lazyload';
import '../../Gallery/Gallery.css';
import { toast } from "react-toastify";
import { AiFillCloseCircle } from 'react-icons/ai';
import { MdDelete } from 'react-icons/md';
import { useDeleteGalleryImageMutation } from '../../../services/organizer';

function Gallery({galleryDetails, refetchData}) {
    const breakpointColumnsObj = {
        default: 4,
        1100: 3,
        700: 2,
        500: 1
    };
  const [previewImage, setPreviewImage] = React.useState('')
  const [galleryId, setGalleryId] = React.useState(null)

  const [deleteGalleryImage, {isLoading}] = useDeleteGalleryImageMutation()

  const handleDeleteImage = async (tournament_id, gallery_id) =>{
    setGalleryId(gallery_id)
    const response = await deleteGalleryImage({tournament_id, gallery_id})
    if(response.error){
      toast.error(response.error.data.message)
    }
    else if(response.data.success){
      toast.success(response.data.message)
      refetchData()
    }
    setGalleryId(null)
  }

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
                                <div key={i} className='relative bg-gray-200 break-inside-avoid cursor-pointer overflow-hidden group'>
                                    <LazyLoad placeholder={<Placeholder/>} once>
                                    <img src={item.photo} alt="" effect='blur' className='image w-full h-full hover:scale-105 transition-all duration-500 
                                    '
                                     onClick={()=> setPreviewImage(item.photo)}
                                     />

                                    </LazyLoad>
                                    <div className={`${isLoading ? 'opacity:60' : ''} absolute hidden w-full h-10 group-hover:flex justify-center items-center transition-all duration-500 bg-black left-0 bottom-0`} onClick={() => {handleDeleteImage(item.tournament_id, item.id)}}>
                                        <button 
                                        disabled = {isLoading}
                                        >
                                            {
                                                isLoading && galleryId == item.id
                                                ?
                                                    <span className='text-red-500 text-sm md:text-base'>Deleting...</span>
                                                 :
                                                    <MdDelete className='text-2xl text-red-500 opacity-100'/>
                                            }
                                        </button>
                                    </div>
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
                    <AiFillCloseCircle className='cursor-pointer text-3xl text-[#ee6730]' onClick={() => setPreviewImage('')}>close</AiFillCloseCircle>
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