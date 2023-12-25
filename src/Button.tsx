import React from 'react'

type ButtonProps={
      //for style object as prop
      style: React.CSSProperties;
      //when we want to pass key-value pair and want to specify that key will be string and value will be number
      borderRadius: Record<string,number>
      //for functions as props
      onclick:(clicked: boolean)=>string
      //for children prop
      children:React.ReactNode

      //HOOKS- passing setter function of useState
      setCount:React.Dispatch<React.SetStateAction<number>>

      
}

export default function Button({style,borderRadius, onclick, children,setCount}:ButtonProps) {
  return (
    <div>
      <button style={style} >{children}</button>
    </div>
  )
}
