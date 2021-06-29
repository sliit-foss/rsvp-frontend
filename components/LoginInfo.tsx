import NextImage from './NextImage';
import signupImage from '../public/signup.svg';
import loginImage from '../public/login.svg';

interface LoginInfoProps {
    login: boolean
}

const LoginInfo = (props:LoginInfoProps): JSX.Element => {

    const outerContainerClass = "flex flex-col items-center justify-center lg:w-6/12";
    
    const paragraphClass = "text-center mb-6 lg:text-left lg:w-4/5 lg:text-sm";
    const imageClass = "mb-6 w-3/4 lg:w-5/6"
    if(props.login){
        return(
            <div className={outerContainerClass}>

                <p className={paragraphClass}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi diam vitae non elementum tincidunt. </p>
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
        return(
            <div className={outerContainerClass}>

                <p className={paragraphClass}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi diam vitae non elementum tincidunt. </p>
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

export default LoginInfo;
