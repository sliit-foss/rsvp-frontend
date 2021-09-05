import { useState } from 'react'
import NextImage from '../Common/NextImage'
import { useRouter } from 'next/router'
import SignInFormFields from './FormFields/SignInFormFields'
import SignUpFormFields from './FormFields/SignUpFormFields'
import googleLogo from '../../public/logos/google_colour.svg'
import { AuthEndpoints } from '../../pages/api/auth'
import LoadingOverlay from '../Common/LoadingOverlay'
import Swal from 'sweetalert2'

interface LoginFormProps {
  login: boolean
  loginToggleHandler: () => void
}

const LoginForm = ({
  login,
  loginToggleHandler,
}: LoginFormProps): JSX.Element => {
  const [showLoading, setShowLoading] = useState(false)
  const [rememberMeValue, setRememberMeValue] = useState(false)

  const router = useRouter()

  const onSignInSubmitAction = (event: any) => {
    event.preventDefault()
    setShowLoading(true)

    const formData = {
      username: event.target.username.value,
      password: event.target.password.value,
    }

    AuthEndpoints.signInUser(formData)
      .then(() => {
        setShowLoading(false)
        window.localStorage.setItem('RememberMe', rememberMeValue.toString())
        window.localStorage.setItem('LoggedIn', 'true')
        let timerInterval: any
        Swal.fire({
          icon: 'success',
          title: '<div class="text-2xl">Signed in sucessfully!</div>',
          showConfirmButton: false,
          timer: 1500,
          willClose: () => {
            clearInterval(timerInterval)
          },
        }).then(() => {
          router.push({
            pathname: '/admin',
          })
        })
      })
      .catch((e) => {
        console.log(e)
        setShowLoading(false)
        Swal.fire({
          icon: 'error',
          title: '<div class="text-2xl">Failed to sign in!</div>',
          showConfirmButton: false,
          timer: 1500,
        })
      })
  }

  const onSignUpSubmitAction = (event: any) => {
    event.preventDefault()
    setShowLoading(true)

    const formData = {
      username: event.target.username.value,
      email: event.target.email.value,
      password: event.target.password.value,
    }

    AuthEndpoints.signUpUser(formData)
      .then(() => {
        setShowLoading(false)
        let timerInterval: any
        Swal.fire({
          heightAuto: false,
          icon: 'success',
          title: '<div class="text-2xl">Signed up sucessfully!</div>',
          showConfirmButton: false,
          timer: 1500,
          willClose: () => {
            clearInterval(timerInterval)
          },
        }).then(() => {
          loginToggleHandler()
        })
      })
      .catch((error) => {
        console.error(error)
        setShowLoading(false)
        Swal.fire({
          icon: 'error',
          heightAuto: false,
          title: '<div class="text-2xl">Failed to sign up!</div>',
          showConfirmButton: false,
          timer: 1500,
        })
      })
  }

  const handleCheck = () => setRememberMeValue(!rememberMeValue)

  return (
    <>
      <LoadingOverlay show={showLoading} />
      <div className="flex flex-col order-1 lg:order-none items-center lg:w-6/12 lg:justify-center lg:transform lg:scale-90">
        <h2 className="font-inter font-extrabold text-blue text-3xl lg:text-2xl mb-2">
          {login ? 'LOGIN' : 'Sign Up'}
        </h2>
        <p className="font-inter text-textBlackSecondary font-medium mb-6 text-sm">
          {login ? 'Login' : 'Sign up'} to access the best things!
        </p>
        <button className="shadow-ds2 flex flex-row w-full lg:w-4/5 h-10 rounded-lg items-center justify-center leading-4 font-semibold font-inter text-sm mb-6">
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
          className="w-full lg:w-4/5 bg-gradientBlue hover:bg-gradientPurple shadow-md hover:shadow-lg rounded-lg font-inter text-sm leading-6 text-white font-semibold h-10 mt-4 mb-10 transition ease-in duration-150"
          form={login ? 'loginForm' : 'signUpForm'}
        >
          {login ? 'Login' : 'Sign Up'}
        </button>
      </div>
    </>
  )
}

export default LoginForm
