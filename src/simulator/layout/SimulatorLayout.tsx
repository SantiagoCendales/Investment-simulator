import React from 'react'

export const SimulatorLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <div className="w-[519px] rounded-md mx-auto my-4 flex justify-center border pt-5 pb-5">
      {children}
    </div>
  )
}
