import React, { useRef, useState } from 'react'


//USE-STATE
type User={
      name:string,
      age:number
}
export default function ButtonWithHooks() {
      const [count,setCount]=useState<number>(0);
      const [str,setStr]=useState('Hello World');
      const [user, setUser]=useState<User|null>(null);
  return (
    <div>
      {user?.name}
    </div>
  )
}



//USE-REF
export function ButtonWithRefHook() {
      const ref=useRef<HTMLButtonElement>(null)
  return (
    <button ref={ref}></button>
  )
}



//USE-CONTEXT

