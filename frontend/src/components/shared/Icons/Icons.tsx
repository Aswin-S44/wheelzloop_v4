import React from 'react'

interface IconProps {
    size?: number;
    color?:string
    type: string
}

export default function Icons({size= 24,color='black',type}:IconProps) {
  return (
    <div>
      Your icon here
    </div>
  )
}


