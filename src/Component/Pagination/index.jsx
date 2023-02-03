import React, {useState, useEffect} from 'react'
import Pagination from 'react-responsive-pagination'
import './pagination.css'

// ***Instructions to use:
// 1) Create useState having an empty array 
//      eg. const [paginationData, setPaginationData] = useState([])
//  after creating it pass it as a props to Paginate component
// 2) Pass your data variable (which stores your all data) to as a props to Paginate Component
//      eg. const [carData, setCarData] = useSate([{...}])
// 3) Pass items per page value
// 4) map paginationData to your component

// ***How to call:
// <Paginate data={carData} setPaginationData={setPaginationData} itemsPerPage={10} />


function Paginate({data, setPaginationData, itemsPerPage}) {
    const [itemOffset, setItemOffset] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageCount, setPageCount] = useState(0);

    const handlePageClick = (page) => {
        setCurrentPage(()=>page);
        const newOffset = ((page-1) * itemsPerPage) % data.length;
        setItemOffset(()=>newOffset);
    };

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        console.log(itemOffset, endOffset);
        setPaginationData(data.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(data.length / itemsPerPage));
    }, [itemOffset, itemsPerPage, data]);

  return (
    <div className="w-full flex justify-center">
        <div className="w-full xs:w-4/5 md:w-2/4">
            <Pagination
                total={data.length}
                current={currentPage}
                onPageChange={(page)=> handlePageClick(page)}
            />
        </div>
    </div>
  )
}

export default Paginate