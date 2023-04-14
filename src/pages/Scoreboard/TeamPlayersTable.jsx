import React from 'react'

function TeamPlayersTable({team_players}) {
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
            {
                team_players?.map((player, i) =>{
                    return <tr key={i} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th className="px-6 py-4 whitespace-nowrap">{i+1}</th>
                        <td className="px-2 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white flex">
                            <p className='capitalize'>{player.players.first_name}</p>
                            <p className='ml-1 capitalize'>{player.players.middle_name}</p>
                            <p className='ml-1 capitalize'>{player.players.last_name}</p>
                        </td>
                        <td className="px-2 py-4 whitespace-nowrap">{player.points}</td>
                        <td className="px-2 py-4 whitespace-nowrap">{player.fouls}</td>
                    </tr>
                })
            }
        </tbody>
    </table>
  )
}

export default TeamPlayersTable