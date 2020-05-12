// src/Project.js

import React from 'react'

function POPOSSpace() {
  return (
    <div>
      <img src="" width="300" height="300" alt="Hello" />
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
  return (
    <div>
      <POPOSSpace />
      <POPOSSpace />
      <POPOSSpace />
      <POPOSSpace />
    </div>
  )
}

...
