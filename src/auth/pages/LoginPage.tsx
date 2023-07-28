import { Input } from "../../components/Input"
import { AuthLayout } from "../layout/AuthLayout"
import { PasswordInput } from "../../components/PasswordInput"
import { FieldValues, SubmitHandler, useForm } from "react-hook-form"
import { Checkbox } from "../../components/Checkbox"
import { Button } from "../../components/Button"
import { Link } from "react-router-dom"

export const LoginPage = () => {

  const {
    register,
    handleSubmit,
    formState: {
      errors,
    }
  } = useForm<FieldValues>({
    defaultValues: {
      email: '',
      password: ''
    }
  })

  const onSubmit: SubmitHandler<FieldValues> = (data => {
    console.log(data)
    // setIsLoading(true)
    // signIn('credentials', {
    //   ...data,
    //   redirect: false,

    // })
    // .then((callback) => {
    //   setIsLoading(false)

    //   if(callback?.ok) {
    //     toast.success('Logged in')
    //     router.refresh()
    //     loginModal.onClose()
    //   }

    //   if(callback?.error) {
    //     toast.error(callback.error)
    //   }
    // })
  })


  return (
    <div className="w-full h-screen flex justify-center items-center">
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
          <Checkbox label="Guardar en este navegador" />
        </div>
        
        <div className="mb-4">
          <Button onSubmit={handleSubmit(onSubmit)} label="Ingresar"/>
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
