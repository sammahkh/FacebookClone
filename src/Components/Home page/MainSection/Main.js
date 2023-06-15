import React from 'react'
import AddPost from './Post Section/AddPost'
import Posted from './Post Section/Posted'
import StoriesSection from './Stories Section/StoriesSection'
import"./Main.css";
function Main() {
  return (
    <div className='main'>
        <StoriesSection/>
        <AddPost/>
        <Posted/>

    </div>
  )
}

export default Main