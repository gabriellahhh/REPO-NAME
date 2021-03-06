// src/Project.js

import React from 'react'

function POPOSSpace() {
  return (
    <div>
      <img src={`${process.env.PUBLIC_URL}images/50-california-st.jpg`} width="300" height="300" alt="Hello" />
      <h1>Name...</h1>
      <div>Address...</div>
    </div>
  )
}

export default POPOSSpace
/ src/POPOSList.js

import POPOSSpace from './POPOSSpace';

...

function POPOSList() {
 const { name, image, address } = props
  return (
    <div>
      <img src={`${process.env.PUBLIC_URL}images/${image}`} width="300" height="300" alt="Hello" />
      <h1>{name}</h1>
      <div>{address}</div>
    </div>
  )
}
function POPOSList() {
  return (
    <div className="POPOSList">
      <POPOSSpace
        name="50 California Street"
        address="50 California St."
        image="50-california-st.jpg"
      />
      <POPOSSpace
        name="100 Pine Street"
        address="100 Pine St."
        image="100-pine.jpg"
      />
      <POPOSSpace
        name="101 California Street"
        address="101 California"
        image="101-california.jpg"
      />
      <POPOSSpace
        name="343 Sansome Roof Garden"
        address="343 Sansome St."
        image="343-sansome-roof-garden.jpg"
      />
      <POPOSSpace
        name="525 Market Street Plaza"
        address="525 Market St."
        image="525-market-street-plaza.jpg"
      />
      <POPOSSpace
        name="Citigroup Center"
        address="1 Sansome St."
        image="citigroup-center.jpg"
      />
    </div>
  )
}
...
// src/POPOSList.js

import './POPOSList.css';

...

function POPOSList() {
  return (
    <div className="POPOSList"> // <- add the class name here!
      ...
  )
}

...
