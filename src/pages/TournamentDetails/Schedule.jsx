import React from 'react'
import Button from '../../Component/Button'
import MatchFormModal from './MatchFormModal'

function Schedule() {
    const [showModal, handleShowModal] = React.useState(false)

    return (
        <div>
            <div className='flex justify-end -mt-16'>
                <div className='w-40'>
                <Button text='Form Matches' onClick={()=> handleShowModal(true)} />
                </div>
            </div>
            <div>
                <div className="table-container relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                    Sr.
                                </th>
                                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                    Team 1
                                </th>
                                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                    
                                </th>
                                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                    Team 2
                                </th>
                                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                    Date
                                </th>
                                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                    Address
                                </th>
                                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                                    1
                                </th>
                                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Mehta Ke Mahaarathi
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    VS
                                </td>
                                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Jetha Ke Jabaaz
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    02/03/2023
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                Sardar Patel Court, Sarkhej, Ahmedabad
                                {/* <input type="text" className='w-full bg-transparent' disabled={true} name="match_address" id="" value="Sardar Patel Court, Sarkhej, Ahmedabad" /> */}
                                </td>
                                <td className="flex items-center px-6 py-4 whitespace-nowrap space-x-3">
                                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                    <a href="#" className="font-medium text-red-600 dark:text-red-500 hover:underline">Remove</a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <MatchFormModal showModal={showModal} handleShowModal={handleShowModal} />
        </div>
    )
}

export default Schedule