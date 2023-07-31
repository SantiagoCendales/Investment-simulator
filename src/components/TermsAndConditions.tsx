import React from 'react'

export const TermsAndConditions = () => {
  return (
    <div>
      <input
        id="default-checkbox"
        type="checkbox"
        value=""
        className="cursor-pointer relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none" />
      <label
        htmlFor="default-checkbox"
        className="inline-block pl-[0.15rem] hover:cursor-pointer font-medium text-gray-400">
          Acepto los <a href="" className="text-gray-700 underline">
          términos y condiciones
        </a> de la política de tratamiento de datos
      </label>
    </div>
  )
}
