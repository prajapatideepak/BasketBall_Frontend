import React from 'react';
import Masonry from 'react-masonry-css'
import LazyLoad from 'react-lazyload';
import './Gallery.css';
import { AiFillCloseCircle } from 'react-icons/ai';
import {
    useGetAllGalleryQuery,
} from "../../services/gallery"
import Loader from '../../Component/Loader';
import { GrGallery } from "react-icons/gr"
import Pagination from 'react-responsive-pagination'
import '../../Component/Pagination/pagination.css'

const Gallery = () => {
    const [pageNo, setPageNo] = React.useState(1);
    const [category, setCategory] = React.useState('all')
    const { isLoading, data, refetch } = useGetAllGalleryQuery({
        pageNo: pageNo - 1,
        category: category
    });
    const breakpointColumnsObj = {
        default: 4,
        1100: 3,
        700: 2,
        500: 1
    };

    const [currentTab, setCurrentTab] = React.useState(0)
    const [currentTabImages, setCurrentTabImages] = React.useState(data?.data)
    const [champsImages, setChampsImages] = React.useState([])
    const [awardsImages, setAwardsImages] = React.useState([]);
    const [previewImage, setPreviewImage] = React.useState('');

    React.useEffect(() => {
        setCurrentTabImages(data?.data)
    },[data])

    const handleTabChange = (value) => {
        setCurrentTab(value)
        setPageNo(1)
        if(value == 1){
            setCategory('champions')
        }
        else if(value == 2){
            setCategory('awards')
        }
        else{
            setCategory('all')
        }
        refetch()
    }

    return (
        <>
            <div className='min-h-screen'>
                <div className='heading-container flex justify-center items-center h-24 sm:h-32 md:h-48 bg-black'>
                    <span className='text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold text-white'>
                        Gallery
                    </span>
                </div>
                <div className='flex justify-center items-center mt-12'>
                    <div className="flex flex-wrap justify-center items-center gap-3 md:gap-5">
                        <span
                            className={`${currentTab == 0 ? 'bg-[#ee6730] text-white' : 'bg-orange-100 text-gray-600'} cursor-pointer px-4 py-1.5 text-xs sm:text-sm md:text-base rounded-full text-center`}
                            onClick={() => handleTabChange(0)}>All</span>
                        <span
                            className={`${currentTab == 1 ? 'bg-[#ee6730] text-white' : 'bg-orange-100 text-gray-600'} cursor-pointer px-4 py-1.5 text-xs sm:text-sm md:text-base rounded-full text-center`}
                            onClick={() => handleTabChange(1)}>Champions</span>
                        <span
                            className={`${currentTab == 2 ? 'bg-[#ee6730] text-white' : 'bg-orange-100 text-gray-600'} cursor-pointer px-4 py-1.5 text-xs sm:text-sm md:text-base rounded-full text-center`}
                            onClick={() => handleTabChange(2)}>Achievement & Awards</span>
                    </div>
                </div>

                {
                    isLoading ?
                        <Loader />
                        :
                        currentTabImages?.length < 1
                            ?
                            <div className='flex justify-center items-center w-full py-5 mt-48'>
                                <GrGallery className=" text-2xl sm:text-xl md:text-2xl text-gray-400 mr-2" />
                                <p className='text-xs xs:text-sm sm:text-lg lg:text-xl font-medium text-gray-400'>No gallery image found</p>
                            </div>
                            :
                            <div className='mx-auto px-20 py-12 sm:px-24 sm:py-12 md:px-28 md:py-16'>
                                <Masonry
                                    breakpointCols={breakpointColumnsObj}
                                    className="my-masonry-grid"
                                    columnClassName="my-masonry-grid_column"
                                >
                                    {
                                        currentTabImages?.map((item, i) => {
                                            return (
                                                <div key={i} className='bg-gray-200 break-inside-avoid cursor-pointer overflow-hidden' onClick={() => setPreviewImage(item.photo)}>
                                                    <LazyLoad placeholder={<Placeholder />} once>
                                                        <img src={item.photo} alt="" effect='blur' className='w-full h-full hover:scale-105 transition-all duration-500' />

                                                    </LazyLoad>
                                                </div>
                                            )
                                        })
                                    }
                                </Masonry>
                            </div>
                }
                <div className='mx-auto px-20 py-12 sm:px-24 sm:py-12 md:px-28 md:py-16'>
                    <Pagination
                        total={data && data.pageCount ? data.pageCount : 0}
                        current={pageNo}
                        onPageChange={(page)=> setPageNo(page)}
                        // previousLabel="Previous" nextLabel="Next"
                    />
                </div>

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
        </>
    );
}

export default Gallery;

const Placeholder = () => {
    return <span className='bg-gray-200 w-[337px] h-[225px]'></span>

}