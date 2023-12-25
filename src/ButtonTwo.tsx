import React from 'react'


type ButtonTwoProps={
      //jsx.element is more specific than React.ReactNode, it allows only jsx element which are html tags basically. 
      //not primitive types like bool, string etc
      children: JSX.Element
}

export default function ButtonTwo({children}:ButtonTwoProps) {
  return (
    <button>{children}</button>
  )
}
