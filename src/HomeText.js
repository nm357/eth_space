import React from 'react';

const homeTextString = `Welcome to eth_space! Built as a React app, eth_space is a project
  designed to explore and present ETH-related data in accessible
  and appealing ways.`
const HomeText = props => {
  return(
    <div className='home-text link'>
      {homeTextString}
    </div>
  )
}
export default HomeText;
