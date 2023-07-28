import React from 'react'

interface CheckboxProps {
  label?: string
}

export const Checkbox: React.FC<CheckboxProps> = ({label}) => {
  return (
    <div>
      <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800"/>
      <label
        htmlFor="default-checkbox"
        className="ml-2 text-sm font-medium text-gray-700">
          {label}
      </label>
    </div>
  )
}
