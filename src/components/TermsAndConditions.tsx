import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form'

interface TermsAndConditionsProps {
  id: string,
  register: UseFormRegister<FieldValues>
  required: boolean,
  errors: FieldErrors
}

export const TermsAndConditions: React.FC<TermsAndConditionsProps> = ({id, register, required, errors}) => {
  return (
    <div>
      <input
        id={id}
        {...register(id, { required })}
        type="checkbox"
        value=""
        className="cursor-pointer relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none" />
      <label
        htmlFor={id}
        className={`ml-2 text-sm font-medium text-gray-700 ${errors[id] ? 'text-rose-500' : 'text-zinc-400'}`}>
          Acepto los <a href="" className="text-gray-700 underline">
          términos y condiciones
        </a> de la política de tratamiento de datos
      </label>
    </div>
  )
}
