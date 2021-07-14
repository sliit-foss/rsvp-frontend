import { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'

interface props {
  onSubmit: any
}

const SignUpFormFields = ({ onSubmit }: props): JSX.Element => {
  const inputfieldClasses =
    'shadow-ds2 mt-4 border-none text-xs font-semibold h-10'

  const [password, setPassword] = useState('')
  const [passwordMatch, setPasswordMatch] = useState(true)
  const { handleSubmit, control } = useForm()

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
      <Controller
        as={
          <input
            type="text"
            placeholder="User Name"
            className={inputfieldClasses}
          />
        }
        control={control}
        required
        name="username"
        autoComplete="name"
        autoFocus
        size={'small'}
        defaultValue=""
      />
      <Controller
        as={
          <input
            type="email"
            placeholder="Email"
            className={inputfieldClasses}
          />
        }
        control={control}
        required
        name="email"
        autoComplete="email"
        autoFocus
        size={'small'}
        defaultValue=""
      />
      <Controller
        as={
          <input
            type="text"
            placeholder="Password"
            className={inputfieldClasses}
            style={
              passwordMatch
                ? { border: '1px solid #ffffff00' }
                : { border: '1px solid #ff0022' }
            }
          />
        }
        control={control}
        required
        name="password"
        type="password"
        autoComplete="current-password"
        size={'small'}
        defaultValue=""
        rules={{ required: true, validate: handlePasswordChange }}
      />

      <Controller
        as={
          <input
            type="text"
            placeholder="Confirm Password"
            className={inputfieldClasses}
            style={
              passwordMatch
                ? { border: '1px solid #ffffff00' }
                : { border: '1px solid #ff0022' }
            }
          />
        }
        control={control}
        required
        id="confirmPassword"
        name="confirmPassword"
        type="password"
        autoComplete="current-password"
        size={'small'}
        defaultValue=""
        rules={{ required: true, validate: passwordCheck }}
      />
    </form>
  )
}

export default SignUpFormFields
