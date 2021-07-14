import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Snackbar } from '@material-ui/core'
import { Alert } from '@material-ui/lab'
import NextImage from '../NextImage'
import SignInFormFields from './FormFields/SignInFormFields'
import SignUpFormFields from './FormFields/SignUpFormFields'
import googleLogo from '../../public/logos/google_colour.svg'
import { UserEndpoints } from '../../pages/api/user'
import {
  UserSignInData,
  UserSignUpData,
} from '../../pages/api/user/user.interface'
import LoadingOverlay from '../LoadingOverlay'

interface LoginFormProps {
  login: boolean
  loginToggleHandler: () => void
}

const LoginForm = ({
  login,
  loginToggleHandler,
}: LoginFormProps): JSX.Element => {
  const [openSuccessSnackbar, setOpenSuccessSnackbar] = useState(false)
  const [openFailedSnackbar, setOpenFailedSnackbar] = useState(false)
  const [showLoading, setShowLoading] = useState(false)
  const [rememberMeValue, setRememberMeValue] = useState(false)

  const { errors } = useForm()

  if (Object.keys(errors).length > 0) {
    console.log('Err : ', errors)
  }

  const onSignInSubmitAction = (formData: UserSignInData, e: any) => {
    setShowLoading(true)
    e.preventDefault()

    UserEndpoints.signInUser(formData)
      .then(() => {
        setOpenSuccessSnackbar(true)
        setShowLoading(false)
        window.localStorage.setItem('RememberMe', rememberMeValue.toString())
      })
      .catch((e) => {
        console.error(e)
        setOpenFailedSnackbar(true)
        setShowLoading(false)
      })
  }

  const onSignUpSubmitAction = (formData: UserSignUpData, e: any) => {
    setShowLoading(true)
    e.preventDefault()
    console.log(formData)
    UserEndpoints.signUpUser(formData)
      .then(() => {
        setOpenSuccessSnackbar(true)
        setShowLoading(false)
      })
      .catch((error) => {
        console.error(error)
        setOpenFailedSnackbar(true)
        setShowLoading(false)
      })
  }

  const handleCheck = () => setRememberMeValue(!rememberMeValue)

  return (
    <>
      <LoadingOverlay show={showLoading} />
      <div className="flex flex-col order-1 lg:order-none items-center lg:w-6/12 lg:justify-center lg:transform lg:scale-90">
        <h2 className="font-inter font-extrabold text-blue font-inter text-3xl lg:text-2xl mb-2">
          {login ? 'LOGIN' : 'Sign Up'}
        </h2>
        <p className="font-inter text-textBlackSecondary font-medium mb-6 text-sm">
          {login ? 'Login' : 'Sign up'} to access the best things!
        </p>
        <button className="shadow-ds2 flex flex-row w-full lg:w-4/5 h-10 rounded-lg flex items-center justify-center leading-4 font-semibold font-inter text-sm mb-6">
          <NextImage
            classnames="w-4 h-4 mr-4 line"
            src={googleLogo}
            alt="sign up"
            layout="intrinsic"
            quality={90}
          />
          {login ? 'Sign in with Google' : 'Sign up with Google'}
        </button>
        <p
          className="text-sm border-b-2 w-full lg:w-4/5 text-center mb-2"
          style={{
            color: '#D2D2D2',
            lineHeight: '0.1rem',
            borderColor: '#D2D2D2',
          }}
        >
          <span className="px-3 bg-white">
            {login ? 'or Sign in with Email' : 'or Signup with Email'}
          </span>
        </p>
        {login ? (
          <SignInFormFields
            onSubmit={onSignInSubmitAction}
            handleCheck={handleCheck}
          />
        ) : (
          <SignUpFormFields onSubmit={onSignUpSubmitAction} />
        )}
        <button
          className="w-full lg:w-4/5 bg-lightBlue rounded-lg font-inter text-sm leading-6 text-white font-semibold h-10 mt-4 mb-2"
          form={login ? 'loginForm' : 'signUpForm'}
        >
          {login ? 'Login' : 'Sign Up'}
        </button>
        <div className="w-full lg:w-4/5">
          <p className="text-xs text-left font-semibold">
            {login ? 'Not Registered Yet?' : 'Already have an account?'}{' '}
            <span onClick={loginToggleHandler} className="text-blue">
              {login ? 'Create An Account' : 'login'}
            </span>
          </p>
        </div>
      </div>

      <Snackbar
        open={openSuccessSnackbar}
        autoHideDuration={2000}
        onClose={() => setOpenSuccessSnackbar(false)}
      >
        <Alert onClose={() => setOpenSuccessSnackbar(false)} severity="success">
          {login ? 'Successfully signed in' : 'Successfully signed up'}
        </Alert>
      </Snackbar>

      <Snackbar
        open={openFailedSnackbar}
        autoHideDuration={2000}
        onClose={() => setOpenFailedSnackbar(false)}
      >
        <Alert onClose={() => setOpenFailedSnackbar(false)} severity="error">
          {login ? 'Failed to sign in' : 'Failed to sign up'}
        </Alert>
      </Snackbar>
    </>
  )
}

export default LoginForm
