import NextImage from './NextImage';
import signupImage from '../public/signup.svg';
import loginImage from '../public/login.svg';

interface LoginInfoProps {
    login: boolean
}

const LoginInfo = (props:LoginInfoProps): JSX.Element => {
 if(props.login){
    return(
        <div className="flex flex-col items-center justify-center">
            <p className="text-center mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi diam vitae non elementum tincidunt. </p>
            <NextImage
                classnames="mb-6"
                src={loginImage}
                alt="sign up"
                layout="intrinsic"
                quality={90}
            />
        </div>
    )
 } else {
    return(
         <div className="flex flex-col items-center justify-center lg:w-6/12">
            <p className="text-center mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi diam vitae non elementum tincidunt. </p>
            <NextImage
                classnames="mb-6"
                src={signupImage}
                alt="sign up"
                layout="intrinsic"
                quality={90}
            />
         </div>
    )
 }
}

export default LoginInfo;
