import NextImage from './NextImage';
import signupImage from '../public/signup.svg';
import loginImage from '../public/login.svg';

interface LoginInfoProps {
    login: boolean
}

const LoginInfo = (props:LoginInfoProps): JSX.Element => {
 if(props.login){
    return(
        <div>
            <p className="text-center mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi diam vitae non elementum tincidunt. </p>
            <NextImage
                classnames="w-full mb-6"
                src={loginImage}
                alt="sign up"
                layout="intrinsic"
                quality={90}
            />
        </div>
    )
 } else {
    return(
         <div>
            <p className="text-center mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi diam vitae non elementum tincidunt. </p>
            <NextImage
                classnames="w-full mb-6"
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
