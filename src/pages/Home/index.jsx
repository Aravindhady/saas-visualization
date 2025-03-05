import React from 'react'
import tower from '../../assets/tower.png'
import wifi from '../../assets/wifi.png'
import battery from '../../assets/battery.png'
import lense from '../../assets/lens.png'
import wallpaper from '../../assets/iphone.jpg'
import download from '../../assets/download.jpg'
import camera from '../../assets/camera.png'
import photos from '../../assets/photos.png'
import cam from '../../assets/cam.png'
import phone from '../../assets/phoneicon.png'
import music from '../../assets/music.png'
import message from '../../assets/messages.png'
import safari from '../../assets/safari.png'
import mail from '../../assets/mail.png'
import note from '../../assets/notes.png'
import remainder from '../../svg/reminders.svg'
import clock from '../../svg/clock.svg'
import appletv from '../../svg/apple-tv.svg'
import applestore from '../../svg/appstore.svg'
import podcast from '../../svg/podcasts.svg'
import news from '../../svg/news.svg'
const Home = () => {
  return (
    <>
      <div className='min-h-screen min-w-screen bg-gray-100 flex justify-center p-[50px] '>
        <img src={download} alt='img' className='w-[320px] h-[600px] object-fill' />
        <div
          className="w-[320px] h-[600px] bg-gray-300 rounded-[60px] p-3 border-8"
          style={{ backgroundImage: `url(${wallpaper})`, backgroundSize: "cover", backgroundPosition: "center" }}
        >
          <div className='flex flex-col'>
            <div className='flex flex-row gap-3 pl-2 pr-4'>
              <h1 className='flex font-bold items-center mt-1 ml-4 text-white'>
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
              <div>
                <div className='bg-white h-[135px] w-[135px] rounded-xl mt-5'>
                  <h1 className='pt-2 pl-2 text-[red] font-semibold'>
                    WEDNESDAY
                  </h1>
                  <h1 className='text-2xl font-semibold pl-3'>
                    27
                  </h1>
                  <div className='flex flex-col gap-1'>
                    <div className='flex '>
                      <div className='w-[5px] h-[28px] bg-green-400 rounded-4xl ml-3 '></div>
                      <div className='w-[90px] h-[28px] bg-green-100 rounded-md ml-1 flex flex-col justify-self-start pl-2'>
                        <div className='flex flex-col gap-0'>
                          <span className='text-[10px] font-bold text-green-500'>
                            Gym
                          </span>
                          <span className='text-green-400 font-semibold text-[8px]'>
                            10:00-11:30<span className='text-[6px] text-green-400 font-bold'>AM</span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className='flex '>
                      <div className='w-[5px] h-[28px] bg-yellow-400 rounded-4xl ml-3 '></div>
                      <div className='w-[90px] h-[28px] bg-yellow-50 rounded-md ml-1 flex flex-col justify-self-start pl-2'>
                        <div className='flex flex-col gap-0'>
                          <span className='text-[10px] font-bold text-yellow-500 pl-2'>
                            Lunch & Learn
                          </span>
                          <span className='text-yellow-400 font-semibold text-[8px] pl-2'>
                            12-1<span className='text-[6px] text-yellow-400 font-bold'>PM</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <h1 className='text-[13px] font-semibold text-center text-white'>
                  Calendar
                </h1>
              </div>
              <div className='grid grid-cols-2 grid-rows-2 gap-2'>
                <div className='flex flex-col'>
                  <div className='bg-gradient-to-tl from-green-500 to-green-400 w-13 h-13 rounded-xl mt-5 p-2 '>
                    <img src={camera} alt="" />
                  </div>
                  <h1 className='text-[11px] font-semibold text-center text-white'>
                    FaceTime
                  </h1>
                </div>
                <div>
                  <div className='bg-white  w-13 h-13 rounded-xl mt-5 flex flex-col justify-center'>
                    <h1 className='text-center text-[11px] text-[red] font-semibold'>
                      WED
                    </h1>
                    <span className='text-3xl text-center text-black'>
                      27
                    </span>
                  </div>
                  <h1 className='text-[11px] font-semibold text-center text-white pt-1'>
                    Calendar
                  </h1>
                </div>
                <div className='bg-green-200  w-13 h-13 rounded-xl '>
                  <img src={photos} alt="img" className='object-cover' />
                  <h1 className='text-[11px] font-semibold text-center text-white pt-1'>
                    Photos
                  </h1>
                </div>
                <div className='bg-gray-200  w-13 h-13 rounded-xl p-1'>
                  <img src={cam} alt="img" className='object-cover' />
                  <h1 className='text-[11px] font-semibold text-center text-white pt-2'>
                    Camera
                  </h1>
                </div>
              </div>
            </div>
            <div className='w-80% h-[100px] bg-amber-400 rounded-lg'>
              dfe
            </div>
            <div className='flex justify-evenly mt-2 mb-2'>
              <div className=" w-12 h-12 rounded-xl">
                <img src={mail} alt="img" className='object-cover' />
                <h1 className='text-[11px] font-semibold text-center text-white '>
                  Mail
                </h1>
              </div>
              <div className='  w-12 h-11 rounded-xl'>
                <img src={note} alt="img" className='object-cover' />
                <h1 className='text-[11px] font-semibold text-center text-white'  >
                  Note
                </h1>
              </div>
              <div className='  w-12 h-12 rounded-xl'>
                <img src={remainder} alt="img" className='object-cover' />
                <h1 className='text-[11px] font-semibold text-center text-white'>
                  Remainder
                </h1>
              </div>
              <div className='bg-black  w-12 h-12 rounded-xl'>
                <img src={clock} alt="img" className='object-cover' />
                <h1 className='text-[11px] font-semibold text-center text-white'>
                  Clock</h1>
              </div>
            </div>
            <div className='flex justify-evenly mt-3 mb-8'>
              <div className='bg-gray-200  w-12 h-12 rounded-xl'>
                <img src={news} alt="img" className='object-cover' />
                <h1 className='text-[11px] font-semibold text-center text-white'>
                  News
                </h1>
              </div>
              <div className='bg-gray-200  w-12 h-12 rounded-xl'>
                <img src={appletv} alt="img" className='object-cover' />
                <h1 className='text-[11px] font-semibold text-center text-white'>
                  TV
                </h1>
              </div>
              <div className='bg-gray-200  w-12 h-12 rounded-xl '>
                <img src={podcast} alt="img" className='object-cover' />
                <h1 className='text-[11px] font-semibold text-center text-white '>
                Podcast
                </h1>
              </div>
              <div className='bg-gray-200  w-12 h-12 rounded-xl'>
                <img src={applestore} alt="img" className='object-cover' />
                <h1 className='text-[11px] font-semibold p-1 text-white'>
                  AppStore
                </h1>
              </div>
            </div>
            <div className='mt-4 w-90% h-[70px] bg-gray-100/30 backdrop-blur-lg rounded-3xl p-3 flex justify-between items-center border border-white/20 shadow-lg'>
              <div className='bg-gradient-to-tl from-green-500 to-green-400  w-13 h-13 rounded-xl p-1'>
                <img src={phone} alt="img" className='object-cover' />
              </div>
              <div className='bg-white  w-13 h-13 rounded-xl p-1'>
                <img src={safari} alt="img" className='object-cover' />
              </div>
              <div className='rounded-xl '>
                <img src={message} alt="img" className='object-cover w-13 h-13' />
              </div>
              <div className='bg-red-500  w-13 h-13 rounded-xl p-2  flex justify-center items-center'>
                <img src={music} alt="img" className='object-cover ' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
