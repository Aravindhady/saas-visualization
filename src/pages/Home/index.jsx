import React from 'react'
import tower from '../../assets/tower.png'
import wifi from '../../assets/wifi.png'
import battery from '../../assets/battery.png'
import lense from '../../assets/lens.png'
const Home = () => {
  return (
    <>
      <div className='min-h-screen min-w-screen bg-gray-100 flex justify-center p-[50px] '>
        <div className='w-[320px] h-[600px] bg-gray-300 rounded-[60px] p-3  border-8 '>
          <div className='flex flex-row gap-3 pl-2 pr-4'>
            <h1 className='flex font-bold items-center mt-1 ml-4'>
              9:41
            </h1>
            <div className='w-[100px] h-[30px] ml-4 bg-gray-800 rounded-4xl'>
              <img src={lense} alt="" className='w-5 h-5 mt-1 ml-1' />
            </div>
            <div className='flex flex-row gap-1 mt-1'>
              <img src={tower} alt='tower' className='w-5 h-5 ' />
              <img src={wifi} alt='tower' className='w-5 h-5 ' />
              <img src={battery} alt='tower' className='w-5 h-5 ' />
            </div>
          </div>
          <div className='flex flex-row gap-3'>
            <div className='bg-green-300 h-[150px] w-[150px] rounded-xl mt-5'>
            </div>
            <div className='grid grid-cols-2 grid-rows-2 gap-2'>

              <div className='bg-green-200 w-15 h-15 rounded-xl mt-5 p-2 '>
                sdsf
              </div>
              <div className='bg-green-200 w-15 h-15 rounded-xl mt-5 p-2 '>
                sdsf
              </div>
              <div className='bg-green-200 w-15 h-15 rounded-xl mt-5 p-2 '>
                sdsf
              </div>
              <div className='bg-green-200 w-15 h-15 rounded-xl mt-5 p-2 '>
                sdsf
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
