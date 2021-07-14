import { Controller, useForm } from 'react-hook-form'

interface props {
  onSubmit: any
  handleCheck: any
}

const SignInFormFields = ({ onSubmit, handleCheck }: props): JSX.Element => {
  const inputfieldClasses =
    'shadow-ds2 mt-4 border-none text-xs font-semibold h-10'

  const { handleSubmit, control } = useForm()

  return (
    <form
      id="loginForm"
      className="flex flex-col w-full lg:w-4/5"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Controller
        as={
          <input
            type="text"
            placeholder="Username"
            className={inputfieldClasses}
          />
        }
        control={control}
        required
        name="username"
        autoComplete="email"
        autoFocus
        size={'small'}
        defaultValue=""
      />
      <Controller
        as={
          <input
            type="password"
            placeholder="Password"
            className={inputfieldClasses}
          />
        }
        control={control}
        required
        name="password"
        type="password"
        autoComplete="current-password"
        size={'small'}
        defaultValue=""
      />

      <div className="flex justify-between mt-4">
        <div className="flex items-center">
          <input
            className="w-3 h-3 mr-2"
            type="checkbox"
            onChange={handleCheck}
          />
          <p className="text-xs text-blue">Remember</p>
        </div>
        <a className="text-xs text-blue">Forgot Password</a>
      </div>
    </form>
  )
}

export default SignInFormFields
