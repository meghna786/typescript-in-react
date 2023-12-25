import React from 'react'

//for default values we dont need to explicitly define types
export default function ButtonThree({count=0}) {
  return (
    <div>
      {count}
    </div>
  )
}
