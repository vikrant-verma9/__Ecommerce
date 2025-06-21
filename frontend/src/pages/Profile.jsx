import React from 'react'
import MyOrdersPage from './MyOrdersPage'

const Profile = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow container mx-auto p-4 md: p-6">
<div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0">
{/* Left Section */}
<div className="w-full md:w-1/3 lg:w-1/4 shadow-md rounded-lg p-6">
<h1 className="text-2xl md:text-3xl font-bold mb-4">John Doe</h1>
<p className="text-lg text-gray-600 mb-4 ">John@example.com</p>
<button className="w-full bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600">
    Log out
</button>
</div>
{/* Right Section Orders Table */}
<div className="w-full md:w-2/3 lg:w-3/4">
<MyOrdersPage />
</div>
</div>  
      </div>
    </div>
  )
}

export default Profile
