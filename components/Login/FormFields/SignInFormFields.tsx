import { useForm, SubmitHandler } from 'react-hook-form'

interface IFormInput {
  username: string
  password: string
}

interface props {
  onSubmit: SubmitHandler<IFormInput>
  handleCheck: () => void
}

const SignInFormFields = ({ onSubmit, handleCheck }: props): JSX.Element => {
  const inputfieldClasses =
    'shadow-ds2 mt-4 border-none text-xs font-semibold h-10 rounded-lg'

  const { handleSubmit, register } = useForm<IFormInput>()

  return (
    <form
      id="loginForm"
      className="flex flex-col w-full lg:w-4/5"
      onSubmit={handleSubmit(onSubmit)}
    >
      <input
        {...(register('username'), { required: true })}
        type="text"
        placeholder="Username"
        className={inputfieldClasses}
      />

      <input
        {...(register('password'), { required: true })}
        type="password"
        placeholder="Password"
        className={inputfieldClasses}
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
