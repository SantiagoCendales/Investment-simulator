import React from 'react'

export const TermsAndConditions = () => {
  return (
    <div>
      <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800"/>
      <label
        htmlFor="default-checkbox"
        className="ml-2 text-sm font-medium text-gray-400">
          Acepto los <a href="" className="text-gray-700 underline">
          términos y condiciones
        </a> de la política de tratamiento de datos
      </label>
    </div>
  )
}
