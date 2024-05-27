import React from 'react'
import "./homepage.css"
import sidenav from './navigation/sidenav'
import timeline from './timeline/timeline'

function homepage() {
  return (
    <div className='homepage'>
      <div className='homepage_nav'>
          <sidenav />
      </div>
        <div className='homepage_timeline'>
           <timeline />
        </div>
    </div>
  )
}

export default homepage
