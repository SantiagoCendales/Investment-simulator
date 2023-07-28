import React from 'react'

export const Contact = () => {
  return (
    <div className="flex items-center max-w-xs">
      <div
        className="mr-4 w-[60px] h-[60px] rounded-full border-2 border-[#3533FF] flex-shrink-0">
        <img style={{width: '100%', height: '100%'}} src="/src/assets/needHelp.png" alt="need-help-image" />
      </div>
      <p
        className="leading-[19px] text-[#3533FF]"
      >
        <span className="font-bold text-#0300F9">Asesórate</span> o resuelve tus  dudas con un expert. <a href="" className="underline">Aquí</a>
      </p>
    </div>
  )
}
