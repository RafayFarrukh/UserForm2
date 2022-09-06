import React,{Fragment} from 'react'

export const Table = (props) => {
  return (
   <>
  
{/* <div class="overflow-x-auto relative">  */}
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="py-3 px-6">
                    Name
                </th>
                <th scope="col" class="py-3 px-6">
                    Email
                </th>
                <th scope="col" class="py-3 px-6">
                    Address
                </th>
                <th scope="col" class="py-3 px-6">
                    Gender
                </th>
                <th scope="col" class="py-3 px-6">
                   DOB
                </th>
                <th scope="col" class="py-3 px-6">
                NIc
                </th>
                <th scope="col" class="py-3 px-6">
                Actions
                </th>
            </tr>
        </thead>
        <tbody>
        {props.users.length >> 0 ? (
        props.users.map(user => (
          <tr key={user.id}>
            <td className="py-4 px-6">{user.name}</td>
            <td className="py-4 px-6">{user.email}</td>
            <td className="py-4 px-6">{user.Address}</td>
            <td className="py-4 px-6">{user.Gender}</td>
            <td className="py-4 px-6">{user.DOB}</td>
            <td className="py-4 px-6">{user.NIC}</td>
            <td className='flex'>

            <button type="submit"  onClick={() => props.editRow(user)}class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
         Edit
        </button>
              {/* <button
                className="button muted-button"
                
              >
                Edit
              </button> */}

<span>&nbsp;</span>
<button type="submit"   onClick={() => props.deleteUser(user.id)} class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
         Delete
        </button>

              {/* <button
                className="button muted-button"
               
              >
                Delete
              </button> */}
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No users</td>
        </tr>
      )}
        </tbody>
    </table>

{/* </div> */}
</>
  )
}
