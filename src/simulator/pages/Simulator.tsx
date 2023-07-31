import { Contact } from '../../components/Contact'
import { TermsAndConditions } from '../../components/TermsAndConditions'
import { ChartExample } from '../../components/ChartExample'
import { Input } from '../../components/Input'
import { Dropdown } from '../../components/Dropdown'
import { Heading } from '../../components/Heading'
import { SimulatorLayout } from '../layout/SimulatorLayout'
import { Button } from '../../components/Button'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getProject } from '../../services/projects'
import { getSimulation } from '../../services/simulator'
import { toast } from 'react-hot-toast'
import { useAuthStore } from '../../store/auth'

export const Simulator = () => {

  const navigate = useNavigate()

  const token = useAuthStore((state) => state.token)
  const isAuth = useAuthStore((state) => state.isAuth)

  const [ isloading, setIsLoading ] = useState(false)

  const [projects, setProjects] = useState([])

    const [ simulationData, setSimulationData] = useState();

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
      project: '',
      termsAndConditions: false
    }
  })

  const onSubmit: SubmitHandler<FieldValues> = (data => {
    setIsLoading(true)
    const {project, price} = data
    getSimulation({investmentValue: price, projectId: project, token: token}).then((resp) => {
      if(resp.ok) {
        toast.success('Hemos calculado el retorno de tu inversión')
        setSimulationData(resp)
      }
      if(resp.status === 401) {
        toast.error('Para poder hacer la simulación debes registrarte o iniciar sesión en la plataforma')
        navigate('/auth/register')
      }
    }).finally(() => {
      setIsLoading(false)
    })
  })

  useEffect(() => {
    getProject().then((resp) => {
      if(resp.ok) {
        setProjects(resp.projects)
      }
    })
  }, [])
  

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
            <Dropdown
              placeholder='Selecciona el proyecto que quieres invertir'
              options={projects}
              id="project"
              register={register}
              required
            />
          </div>

          <div className="grid grid-cols-4 gap-2">
            <div className="col-span-3">
              <Input
                required
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
                required
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
            <ChartExample dataProp={simulationData} />

          </div>
          <p className="text-xs text-gray-400">*Proyecciones estimadas, sujetas a cambios.</p>
        </div>

        <div className="flex items-start mb-8 mx-auto w-3/4">
          <TermsAndConditions
            errors={errors}
            id='termsAndConditions'
            required
            register={register}
          />
        </div>

        <div className="w-3/4 mx-auto mb-6">
          <Button disabled={isloading} onSubmit={handleSubmit(onSubmit)} label='Calcular inversión'/>
        </div>

        {
          !isAuth 
          && <div className="text-center mb-4">
          <p className="mb-1 text-gray-500 text-sm">¿Ya tienes cuenta?</p>
          <div className="flex justify-center items-center">
            <Link to="/auth">
              Iniciar sesión
            </Link>
            <div
              className="border-r h-[15px] mx-4"
              style={{borderColor: '#4743E0'}}
            ></div>
            <Link to="/auth/register">
              Crea tu cuenta
            </Link>
          </div>
        </div>
        }



        <footer className="w-3/5 mx-auto mb-8">
          <Contact />
        </footer>

      </div>
    </SimulatorLayout>
  )
}
