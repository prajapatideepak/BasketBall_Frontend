import React, {useState} from 'react'
import Masonry from 'react-masonry-css'
import LazyLoad from 'react-lazyload';
import '../../Gallery/Gallery.css';
import { AiFillCloseCircle } from 'react-icons/ai';

function Gallery() {
  const breakpointColumnsObj = {
        default: 4,
        1100: 3,
        700: 2,
        500: 1
    };
  const [previewImage, setPreviewImage] = React.useState('')
  
  const tournamentImages = [
        {
            id: 0,
            imageUrl: 'https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2Fyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
            category: 'champ'
        },
        {
            id: 1,
            imageUrl: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2Fyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
            category: 'champ'
        },
        {
            id: 2,
            imageUrl: 'https://images.unsplash.com/photo-1514316454349-750a7fd3da3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y2Fyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
            category: 'champ'
        },
        {
            id: 4,
            imageUrl: 'https://images.unsplash.com/photo-1462396881884-de2c07cb95ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGNhcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
            category: 'champ'
        },
        {
            id: 5,
            imageUrl: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmlrZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
            category: 'award'
        },
        {
            id: 6,
            imageUrl: 'https://images.unsplash.com/photo-1610553556003-9b2ae8ef1b8e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmlrZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
            category: 'award'
        },
        {
            id: 9,
            imageUrl: 'https://images.unsplash.com/photo-1620193827194-6ce9e26d668d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTJ8fGJpa2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            category: 'award'
        },
    ]

  return (
    <div>
      <Masonry
      breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
      >
          {
              tournamentImages.map((item, i) =>{
                  return(
                      <div key={i} className='bg-gray-200 break-inside-avoid cursor-pointer overflow-hidden' onClick={()=> setPreviewImage(item.imageUrl)}>
                          <LazyLoad placeholder={<Placeholder/>} once>
                          <img src={item.imageUrl} alt="" effect='blur' className='w-full h-full hover:scale-105 transition-all duration-500' />

                          </LazyLoad>
                      </div>
                  )
              })
          }
      </Masonry>
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