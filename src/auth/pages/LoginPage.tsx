import { Input } from "../../components/Input"
import { AuthLayout } from "../layout/AuthLayout"
import { PasswordInput } from "../../components/PasswordInput"
import { FieldValues, SubmitHandler, useForm } from "react-hook-form"
import { Checkbox } from "../../components/Checkbox"
import { Button } from "../../components/Button"
import { Link } from "react-router-dom"
import { login } from '../../services/auth'
import { useAuthStore } from "../../store/auth"
import { useState } from "react"
import { toast } from "react-hot-toast"


export const LoginPage = () => {

  const [isLoading, setIsLoading] = useState(false)

  const loginState = useAuthStore((state) => state.loginState)
  const {
    register,
    handleSubmit,
    formState: {
      errors,
    }
  } = useForm<FieldValues>({
    defaultValues: {
      email: '',
      password: '',
      saveBrowser: false
    }
  })

  const onSubmit: SubmitHandler<FieldValues> = (data => {
    setIsLoading(true)
    const {email, password} = data
    console.log(data)
    login({email, password}).then((resp) => {
      if(resp.ok) {
        setIsLoading(false)
        toast.success('Bienvenido de nuevo')
        loginState()
        localStorage.setItem('auth_token', resp.token)
      }
      if(!resp.ok) {
        toast.error(resp.msg)
      }
    })
  })


  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <AuthLayout
        title='Para simular tu inversión debes iniciar sesión'
        subtitle='Hola de nuevo, un gusto tenerte de vuelta, conoce los nuevos proyectos que tenemos para ti'
      >
        <div className="grid grid-rows-2 gap-3 mb-3">
          <Input
            id="email"
            type="text"
            placeholder="Digita tu usuario o correo electrónico"
            register={register}
            errors={errors}
            required
          />
          <PasswordInput
            id="password" 
            errors={errors}
            placeholder="Contraseña"
            register={register}
            required
          />
        </div>
        <div className="mb-3">
          <a href="" className="underline">Olvidé mi contraseña</a>
        </div>
        <div className="mb-8">
          <Checkbox
            required={false}
            register={register}
            errors={errors}
            id="saveBrowser"
            label="Guardar en este navegador"
          />
        </div>
        
        <div className="mb-4">
          <Button disabled={isLoading} onSubmit={handleSubmit(onSubmit)} label="Ingresar"/>
        </div>

        <div className="text-center text-sm">
          <p className="text-gray-500">¿Aún no tienes una cuenta?</p>
          <Link to="/auth/register">
            Registrarme
          </Link>
        </div>
      </AuthLayout>
    </div>
  )
}
