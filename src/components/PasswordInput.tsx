import { useState } from "react"
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form"

interface InputProps {
  id: string
  label?: string
  placeholder?: string
  bold?: boolean
  labelCentered?: boolean
  disabled?: boolean
  required?: boolean
  register: UseFormRegister<FieldValues>
  errors: FieldErrors
}

export const PasswordInput: React.FC<InputProps> = ({
  id,
  label,
  labelCentered,
  bold,
  placeholder = '',
  disabled,
  required,
  register,
  // errors
}) => {

  const [show, setShow] = useState(false)

  const showPassword = () => {
    setShow((value) => !value)
  }

  return (
    <div className={`${labelCentered ? 'text-center' : ''}`}>
      <div
        className="
          relative
          rounded-md
          shadow-sm
        ">

        <div
          onClick={showPassword}
          className={`
            cursor-pointer
            absolute
            inset-y-0
            right-4
            flex
            items-center
            pl-3
            ${ show ? 'line-through' : '' }
          `}>
          <span className="sm:text-sm text-gray-400 font-light">Hide</span>
        </div>

        <input
          {...register(id, { required })}
          disabled={disabled}
          type={show ? 'text' : 'password'}
          id={id}
          placeholder={placeholder}
          className={`
            block
            w-full
            rounded-md
            border-3
            py-2.5
            text-gray-900
            ring-1
            ring-inset
            ring-gray-300
            placeholder:text-gray-400
            focus:ring-1
            focus:ring-inset
            focus:ring-indigo-600
            outline-none
            pl-5
            pr-14
            ${bold? 'font-bold' : ''}
            ${labelCentered ? 'text-center' : ''}
          `}
        />
      </div>
      <label
        htmlFor={id}
        className={`
          block
          text-sm
          font-medium
          leading-6
          text-gray-500
          ${labelCentered ? '' : 'pl-3'}
        `}>
        {label}
      </label>
    </div>
  )
}
