import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

interface IFormInput {
  username: string
  email: string
  password: string
  confirmPassword: string
}

interface props {
  onSubmit: SubmitHandler<IFormInput>
}

const SignUpFormFields = ({ onSubmit }: props): JSX.Element => {
  const inputfieldClasses =
    'shadow-ds2 mt-4 border-none text-xs font-semibold h-10 rounded-lg'

  const [password, setPassword] = useState('')
  const [passwordMatch, setPasswordMatch] = useState(true)
  const { handleSubmit, register } = useForm<IFormInput>()

  const passwordCheck = (confirmPassword: string) => {
    const valid = password === confirmPassword
    setPasswordMatch(valid)
    return valid
  }

  const handlePasswordChange = (password: string) => {
    setPassword(password)
    return true
  }

  return (
    <form
      id="signUpForm"
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
        {...(register('email'), { required: true })}
        type="email"
        placeholder="Email"
        className={inputfieldClasses}
      />

      <input
        {...(register('password'),
        { required: true, validate: handlePasswordChange })}
        type="password"
        placeholder="Password"
        className={inputfieldClasses}
        style={
          passwordMatch
            ? { border: '1px solid #ffffff00' }
            : { border: '1px solid #ff0022' }
        }
      />

      <input
        {...(register('confirmPassword'),
        { required: true, validate: passwordCheck })}
        type="password"
        placeholder="Confirm Password"
        className={inputfieldClasses}
        style={
          passwordMatch
            ? { border: '1px solid #ffffff00' }
            : { border: '1px solid #ff0022' }
        }
      />

    </form>
  )
}

export default SignUpFormFields
