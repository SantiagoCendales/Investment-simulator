import { FieldValues, SubmitHandler, useForm } from "react-hook-form"
import { Input } from "../../components/Input"
import { AuthLayout } from "../layout/AuthLayout"
import { Dropdown } from "../../components/Dropdown"
import { Checkbox } from "../../components/Checkbox"
import { Button } from "../../components/Button"
import { Link  } from 'react-router-dom'
import { PasswordInput } from "../../components/PasswordInput"
import { useState } from "react"
import { toast } from 'react-hot-toast';
import { singUp } from "../../services/auth"
import { useAuthStore } from "../../store/auth"


export const RegisterPage = () => {

  const loginState = useAuthStore((state) => state.loginState)


  const investmentAmount = useAuthStore((state) => state.investmentAmount)

  const [ isLoading, setIsLoading ] = useState(false)

  const {
    register,
    handleSubmit,
    formState: {
      errors,
    }
  } = useForm<FieldValues>({
    defaultValues: {
      name: '',
      lastName: '',
      email: '',
      phone: '',
      password: '',
      referralCode: '',
      acceptTermsAndConditions: false
    }
  })

  const onSubmit: SubmitHandler<FieldValues> = (data => {
    console.log(data)
    setIsLoading(true)
    const {name, lastName, password, phone, referralCode, email, acceptTermsAndConditions} = data
    singUp({name, lastName, password, phone, referralCode, investmentAmount, email, acceptTermsAndConditions}).then((resp) => {
      setIsLoading(false)

      if(resp.ok) {
        console.log('registro exitoso')
        toast.success('Registro exitoso')
        loginState()
      }

      if(!resp.ok) {
        toast.error(resp.msg)
      }
    })
  })

  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <AuthLayout
        title='Para simular tu inversión debes registrarte'
        subtitle='Regístrate a nuestra comunidad de inversionistas'
      >

        <div className="grid grid-cols-4 gap-y-3 mb-5">
          <div className="col-span-2">
            <Input
              id="name"
              type="text"
              placeholder="Nombre"
              register={register}
              errors={errors}
              required
              stackedPosition="left"
            />
          </div>
          <div className="col-span-2">
            <Input
              id="lastName"
              type="text"
              placeholder="Apellido"
              register={register}
              errors={errors}
              required
              stackedPosition="right"
            />
          </div>
          <div className="col-span-4">
            <Input
              id="email"
              type="email"
              placeholder="Correo electrónico"
              register={register}
              errors={errors}
              required
            />
          </div>
          <div className="col-span-1 flex justify-center items-center border border-gray-300 rounded-s-md">
            <p className="text-gray-400">Celular</p>
          </div>
          <div className="col-span-3">
            <Input
              id="phone"
              type="text"
              placeholder="+000 00 0000"
              register={register}
              errors={errors}
              required
              stackedPosition="right"
            />
          </div>
          <div className="col-span-4">
          <PasswordInput
            id="password" 
            errors={errors}
            placeholder="Contraseña"
            register={register}
            required
          />
          </div>
          <div className="col-span-4">
            <Dropdown />
          </div>
          <div className="col-span-4">
            <Input
              id="referralCode"
              type="text"
              placeholder="Código de referido"
              register={register}
              errors={errors}
              required
            />
          </div>
        </div>

        <div className="mb-8">
          <Checkbox
            required
            id="acceptTermsAndConditions"
            register={register}
            errors={errors}
            label="Acepto términos y condiciones"
          />
        </div>

        <div className="mb-4">
          <Button onSubmit={handleSubmit(onSubmit)} label="Ingresar" disabled={isLoading}/>
        </div>

        <div className="text-center text-sm">
          <p className="text-gray-500">¿Ya  tienes cuenta?</p>
          <Link to="/auth/login">
            Iniciar sesión
          </Link>
        </div>

      </AuthLayout>
    </div>
  )
}
