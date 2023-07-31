import { FieldValues, UseFormRegister } from 'react-hook-form'


interface DropdownProps {
  placeholder?: string
  id: string
  options: {_id: string, name: string}[]
  register: UseFormRegister<FieldValues>
  required: boolean
}

export const Dropdown: React.FC<DropdownProps> = ({options, id, register, required, placeholder}) => {

  return (
    <select
      className="px-2 py-3 rounded-md w-full bg-transparent
      block
      text-gray-500
      border-3
      ring-1
      ring-inset
      ring-gray-300
      placeholder:text-gray-400
      focus:ring-1
      focus:ring-inset
      focus:relative
      focus:z-10
      focus:ring-indigo-600
      outline-none"
      {...register(id, { required })}
    >
      <option value="">{placeholder}</option>
      {options.map((value) => (
        <option key={value._id} value={value._id}>
          {value.name}
        </option>
      ))}
    </select>
  )
}
