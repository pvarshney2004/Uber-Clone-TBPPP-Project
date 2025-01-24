import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <div className='bg-cover bg-center bg-[url(https://plus.unsplash.com/premium_photo-1736517550995-44ad360b5738?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] h-screen pt-6 w-full flex flex-col justify-between'>
            <img className='w-16 ml-5' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
            <div className='bg-white py-4 px-5 pb-5'>
                <h2 className='text-2xl font-semibold'>Get Started with Uber</h2>
                <Link to='/login' className='flex justify-center w-full bg-black text-white py-3 rounded-md mt-3'>Continue</Link>
            </div>
            
        </div>
    </div>
  )
}

export default Home