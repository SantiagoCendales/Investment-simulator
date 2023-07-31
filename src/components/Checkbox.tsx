import React from 'react'
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form'

interface CheckboxProps {
  id: string
  label?: string,
  register: UseFormRegister<FieldValues>
  errors: FieldErrors,
  required: boolean
}

export const Checkbox: React.FC<CheckboxProps> = ({id, label, register, errors, required}) => {
  return (
    <div>
      <input
        id={id}
        type="checkbox"
        {...register(id, { required })}
        value=""
        className="
          w-4
          h-4
          text-blue-600
          bg-gray-100
          border-gray-300
          rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800"/>
      <label
        htmlFor={id}
        className={`ml-2 text-sm font-medium text-gray-700 ${errors[id] ? 'text-rose-500' : 'text-zinc-400'}`}>
          {label}
      </label>
    </div>
  )
}
