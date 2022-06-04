import NextImage from '../Common/NextImage'
import signupImage from '../../public/signup.svg'
import loginImage from '../../public/login.svg'

interface LoginInfoProps {
  login: boolean
}

const LoginInfo = (props: LoginInfoProps): JSX.Element => {
  const outerContainerClass =
    'flex flex-col items-center justify-center lg:justify-center lg:w-6/12 lg:items-center'
  const paragraphClass =
    'text-center text-textBlackTertiary mb-6 lg:text-left lg:w-5/6 lg:text-sm lg:p-6'
  const imageClass = 'mb-6 lg:mb-0 w-3/4 lg:w-5/6'

  if (props.login) {
    return (
      <div className={outerContainerClass}>
        <NextImage
          classnames={imageClass}
          src={signupImage}
          alt="sign up"
          layout="intrinsic"
          quality={90}
        />
      </div>
    )
  } else {
    return (
      <div className={outerContainerClass}>
        <NextImage
          classnames={imageClass}
          src={loginImage}
          alt="sign up"
          layout="intrinsic"
          quality={90}
        />
      </div>
    )
  }
}

export default LoginInfo
