import React from 'react'

type SecondProps = {
    setStep: React.Dispatch<React.SetStateAction<number>>
}

export default function Second({setStep}: SecondProps) {
  return (
    <div>Second</div>
  )
}
