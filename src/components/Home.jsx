import React from 'react'
import SideBar from './partial/SideBar';
import TopNav from './partial/TopNav';

const Home = () => {
  document.title='SCSDB | Homepage';
  return (
    <>
    
    <SideBar />
    <div className='h-full w-[80%]'>
      <TopNav />
    </div>
    
    </>
  )
}
export default Home