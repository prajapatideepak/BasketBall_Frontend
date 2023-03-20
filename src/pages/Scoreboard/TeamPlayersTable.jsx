import React from 'react'

function TeamPlayersTable() {
  return (
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 whitespace-nowrap">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                    #
                </th>
                <th scope="col" className="px-2 py-3 whitespace-nowrap">
                    Players
                </th>
                <th scope="col" className="px-2 py-3 whitespace-nowrap">
                    Points
                </th>
                <th scope="col" className="px-2 py-3 whitespace-nowrap">
                    Fouls
                </th>
            </tr>
        </thead>
        <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th className="px-6 py-4 whitespace-nowrap">1</th>
                <td className="px-2 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">Sadikali shabbirali Karadiya</td>
                <td className="px-2 py-4 whitespace-nowrap">45</td>
                <td className="px-2 py-4 whitespace-nowrap">08</td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th className="px-6 py-4 whitespace-nowrap">2</th>
                <td className="px-2 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">MohammadShad MohammadSajid Rajput</td>
                <td className="px-2 py-4 whitespace-nowrap">45</td>
                <td className="px-2 py-4 whitespace-nowrap">08</td>
            </tr>
        </tbody>
    </table>
  )
}

export default TeamPlayersTable