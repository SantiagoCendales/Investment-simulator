import { Contact } from '../../components/Contact'
import { TermsAndConditions } from '../../components/TermsAndConditions'
import { ChartExample } from '../../components/ChartExample'
import { Input } from '../../components/Input'
import { Dropdown } from '../../components/Dropdown'
import { Heading } from '../../components/Heading'
import { SimulatorLayout } from '../layout/SimulatorLayout'
import { Button } from '../../components/Button'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'

export const Simulator = () => {

  const {
    register,
    handleSubmit,
    formState: {
      errors,
    }
  } = useForm<FieldValues>({
    defaultValues: {
      price: '',
      units: '',
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
    <SimulatorLayout>
      <div className="w-[447px] rounded-lg border border-light" style={{boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.1)'}}>
            
        <div className="mx-auto w-4/5 mb-5 mt-14">
          <Heading
            title='Simula tu inversión'
            subtitle='Proyecta tu retorno de inversión'
            />
        </div>

        <div className="w-4/5 mx-auto mb-8">
          <div className="mb-2">
            <Dropdown />
          </div>

          <div className="grid grid-cols-4 gap-2">
            <div className="col-span-3">
              <Input
                register={register}
                errors={errors}
                placeholder='0.00'
                bold
                id='price'
                formatPrice={true}
                label='Digita la cantidad a invertir'
                type='text'
              />
            </div>
            <div className="col-span-1">
              <Input
                register={register}
                errors={errors}
                bold
                id='units'
                placeholder='0'
                label='Units'
                type='text'
                labelCentered={true}
              />
            </div>
          </div>

        </div>

        <div className="border-t-2 mb-8"></div>

        <div className="px-2 text-center mb-4">
          <div className="pr-5">
            <ChartExample />
          </div>
          <p className="text-xs text-gray-400">*Proyecciones estimadas, sujetas a cambios.</p>
        </div>

        <div className="flex items-start mb-8 mx-auto w-3/4">
          <TermsAndConditions />
        </div>

        <div className="w-3/4 mx-auto mb-6">
          {/* <button
            className="
              w-full
              rounded-full
              bg-black
              text-white
              font-bold
              px-6
              py-2
            ">
                Calcular inversión
          </button> */}
          <Button onSubmit={handleSubmit(onSubmit)} label='Calcular inversión'/>
        </div>

        <div className="text-center mb-4">
          <p className="mb-1 text-gray-500 text-sm">¿Ya tienes cuenta?</p>
          <div className="flex justify-center items-center">
            <a href="">Iniciar sesión</a>
            <div
              className="border-r h-[15px] mx-4"
              style={{borderColor: '#4743E0'}}
            ></div>
            <a href="">Crea tu cuenta</a>
          </div>
        </div>

        <footer className="w-3/5 mx-auto mb-8">
          <Contact />
        </footer>

      </div>
    </SimulatorLayout>
  )
}
