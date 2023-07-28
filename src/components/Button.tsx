import React, { useCallback } from 'react'

interface ButtonProps {
  label: string
  disabled?: boolean
  onSubmit: () => void
}

export const Button: React.FC<ButtonProps> = ({label, disabled, onSubmit}) => {

  const handleSubmit = useCallback(() => {
    if(disabled) return
    onSubmit()
  }, [disabled, onSubmit])

  return (
    <button
    disabled={disabled}
    onClick={handleSubmit}
    className="
      w-full
      rounded-full
      bg-black
      text-white
      font-bold
      px-6
      py-2
    ">
      {label}
  </button>
  )
}
