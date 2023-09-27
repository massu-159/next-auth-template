'use client'

import { FieldValues, UseFormRegister } from "react-hook-form";

type InputProps = {
  id: string
  label: string
  type?: string
  register: UseFormRegister<FieldValues>
  errors: any
  required?: boolean
  disabled?: boolean
}

const Input: React.FC<InputProps> = ({
  id,
  label,
  type = 'text',
  register,
  errors,
  required,
  disabled
}) => {
  return (
    <div className="relative w-full">
      <div className="mb-2 font-bold">{label}</div>
      <input
        id={id}
        disabled={disabled}
        {...register(id, { required })}
        placeholder=""
        type="type"
        className={`w-full rounded-lg border-2 p-4 outline-none transition disabled:cursor-not-allowed disabled:opacity-70 ${errors[id] ? 'border-red-500 focus:border-red-500' : 'border-sky-500 focus:border-sky-500'}`} />
      {errors[id] && (
        <div className="my-3 text-center text-sm text-red-500">{errors[id].message}</div>
      )}
    </div>
  )
}

export default Input