import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form"

interface InputProps {
  id: string
  label?: string
  placeholder?: string
  bold?: boolean
  type?: string
  labelCentered?: boolean
  disabled?: boolean
  formatPrice?: boolean
  required?: boolean,
  register: UseFormRegister<FieldValues>
  errors: FieldErrors,
  stackedPosition?: 'left' | 'right'
  updateValue?: () => void,
  min?: number
}

export const Input: React.FC<InputProps> = ({
  id,
  label,
  type = 'text',
  labelCentered,
  bold,
  placeholder = '',
  disabled,
  formatPrice,
  required,
  register,
  errors,
  stackedPosition,
  updateValue,
  min
}) => {


  return (
    <div className={`${labelCentered ? 'text-center' : ''}`}>
      <div
        className="
          relative
          rounded-md
          shadow-sm
        ">
        {
          formatPrice &&
          <div
            className="
              pointer-events-none
              absolute
              inset-y-0
              left-0
              flex
              items-center
              pl-3
              z-20
            ">
            <span className="font-bold sm:text-sm">$</span>
          </div>
        }
        <input
          onKeyUp={updateValue}
          id={id}
          disabled={disabled}
          {...register(id, { required})}
          placeholder={placeholder}
          type={type}
          className={`
            block
            w-full
            border-3
            py-2.5
            text-gray-900
            ring-1
            ring-inset
            ring-gray-300
            placeholder:text-gray-400
            focus:ring-1
            focus:ring-inset
            focus:relative
            focus:z-10
            focus:ring-indigo-600
            outline-none
            ${stackedPosition ? stackedPosition === 'left' ? 'rounded-s-md' : 'rounded-e-md ml-[-1px]' : 'rounded-md'}
            ${bold? 'font-bold' : ''}
            ${formatPrice ? 'pl-7 pr-7' : 'pl-5 pr-5'}
            ${labelCentered ? 'text-center' : ''}
          `}
        />
      </div>
      <label
        htmlFor={id}
        className={`
          ${errors[id] ? 'text-rose-500' : 'text-zinc-400'}
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
