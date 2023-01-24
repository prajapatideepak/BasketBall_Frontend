import React from 'react';
import Masonry from 'react-masonry-css'
import LazyLoad from 'react-lazyload';
import './Gallery.css';

const Gallery = () => {
    const breakpointColumnsObj = {
        default: 4,
        1100: 3,
        700: 2,
        500: 1
    };

    const allImages = [
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
            id: 3,
            imageUrl: 'https://images.unsplash.com/photo-1542362567-b07e54358753?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGNhcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
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
            id: 7,
            imageUrl: 'https://images.unsplash.com/photo-1626840362735-afb64615318d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YmlrZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
            category: 'award'
        },
        {
            id: 8,
            imageUrl: 'https://images.unsplash.com/photo-1622185135505-2d795003994a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YmlrZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
            category: 'award'
        },
        {
            id: 9,
            imageUrl: 'https://images.unsplash.com/photo-1620193827194-6ce9e26d668d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTJ8fGJpa2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            category: 'award'
        },
    ]
    
    const [currentTab, setCurrentTab] = React.useState(0)
    const [currentTabImages, setCurrentTabImages] = React.useState(allImages)
    const [champsImages, setChampsImages] = React.useState([])
    const [awardsImages, setAwardsImages] = React.useState([])

    React.useEffect(() => {
        let champs = []
        let awards = []
        allImages.map((image)=>{
            if(image.category == 'champ'){
                champs.push(image)
            }
            else if(image.category == 'award'){
                awards.push(image)
            }
        })
        setChampsImages(champs);
        setAwardsImages(awards)
    }, []);

    React.useEffect(() => {
        if(currentTab == 1){
            setCurrentTabImages(champsImages);
        }
        else if(currentTab == 2){
            setCurrentTabImages(awardsImages)
        }
        else{
            setCurrentTabImages(allImages)
        }
    },[currentTab])

    return (
        <div className='min-h-screen'>
            <div className='heading-container flex justify-center items-center h-24 sm:h-32 md:h-48 bg-black'>
                <span className='text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold text-white'>
                    Gallery
                </span>
            </div>
            <div className='flex justify-center items-center mt-12'>
                <div className="flex flex-wrap justify-center items-center gap-3 md:gap-5">
                    <span 
                    className={`${currentTab == 0 ? 'bg-orange-600 text-white' : 'bg-orange-100 text-gray-600'} cursor-pointer px-4 py-1.5 text-xs sm:text-sm md:text-base rounded-full text-center`} 
                    onClick={()=>setCurrentTab(0)}>All</span>
                    <span 
                    className={`${currentTab == 1 ? 'bg-orange-600 text-white' : 'bg-orange-100 text-gray-600'} cursor-pointer px-4 py-1.5 text-xs sm:text-sm md:text-base rounded-full text-center`} 
                    onClick={()=>setCurrentTab(1)}>Champions</span>
                    <span 
                    className={`${currentTab == 2 ? 'bg-orange-600 text-white' : 'bg-orange-100 text-gray-600'} cursor-pointer px-4 py-1.5 text-xs sm:text-sm md:text-base rounded-full text-center`} 
                    onClick={()=>setCurrentTab(2)}>Achievement & Awards</span>
                </div>
            </div>
            <div className='mx-auto px-20 py-12 sm:px-24 sm:py-12 md:px-28 md:py-16'>
                <Masonry
                breakpointCols={breakpointColumnsObj}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
                >
                    {
                        currentTabImages.map((item, i) =>{
                            return(
                                <div key={i} className='bg-gray-200 break-inside-avoid'>
                                    <LazyLoad placeholder={<Placeholder/>} once>
                                    <img src={item.imageUrl} alt="" effect='blur' className='w-full h-full' />

                                    </LazyLoad>
                                </div>
                            )
                        })
                    }
                </Masonry>
            </div>
        </div>
    );
}

export default Gallery;

const Placeholder = () =>{
    return  <span className='bg-gray-200 w-[337px] h-[225px]'></span>

}