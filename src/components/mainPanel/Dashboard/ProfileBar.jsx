import React from 'react'
import WaveProfile from '../../path/waveProfile'


const ProfileBar=()=> {
  const data = [
    { text: 'O8h', status: 'Scheduled', className: 'w-28 h-20' },
    { text: 'O6h 30m', status: 'Approved', className: 'w-28 h-20' },
    { text: 'O7h 30m', status: 'Logged', className: 'w-28 h-20' },
    { text: '-O3h 25m', status: 'Balance', className: 'w-28 h-20' },
  ];
  return (
    <div className='w-1/4 bg-white mr-8 relative rounded-xl'>
        <div className='absolute'>

        <WaveProfile/>
        </div>
        <div className='flex flex-col justify-center items-center pt-20'>
        <img src="images/profile.png" alt="Tea" style={{width:'80px',height:'80px'}} />
        <p className='text-center text-xl pt-2'>Jonaus Kahnwald (You)</p>
        <p className='text-center text-gray-400'>Human Resuorces</p>
        <p className='font-semibol text-xl pt-5'>Timelog</p>
        <p className='text-gray-300 pt-1'>---------------- Today ----------------</p>
        
        <div className="flex flex-wrap justify-center">
    {data.map((item, index) => (
      <div key={index} className={`flex flex-col items-center text-center justify-center ${item.className}`}>
        <p className='text-xl font-semibold'>{item.text}</p>
        <p className='text-gray-400'>{item.status}</p>
      </div>
    ))}
  </div>
    
        </div>
        
    </div>
  )
}

export default ProfileBar