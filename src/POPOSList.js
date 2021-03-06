// src/POPOSList.js

import React from 'react';
import POPOSSpace from './POPOSSpace';
import './POPOSList.css';
import data from './sfpopos-data.json'

function POPOSList() {

 const spaces = data.map(( { title, address, images } ) => {
  return (
    <POPOSSpace
      key={title} // The title could be a key
      name={title}
      address={address}
      image={images[0]}
    />
  )
})

  return (
    <div className="POPOSList">
      { spaces }
    </div>
  )
}

export default POPOSList
