import LoginForm from './LoginForm';
import LoginInfo from './LoginInfo';
import NextImage from './NextImage';
import lineBreak from '../public/patterns/linebreak.svg'
import {useState} from 'react';

const LoginSignup = (): JSX.Element => {

    const [selectLogin,setSelectLogin] = useState(false);

    const loginToggler = () =>{
        setSelectLogin(!selectLogin);
    }

    const lineBreakClass = "hidden lg:block lg:w-3.5 lg:h-full";
    const layoutClass = "lg:flex lg:flex-col-2";
    const titleClass = `text-black text-3xl font-extrabold text-center mb-4`;
    const titleWrapper = "flex justify-center items-center lg:grid lg:grid-cols-2";

    const loginTitle = 
        <div className={titleWrapper}>
            <h1 className={titleClass}>
                SLIIT RSVP PORTAL
            </h1>
            <div></div>
        </div>
    
    const signupTitle = 
        <div className={titleWrapper}>
            <div></div>
            <h1 className={titleClass}>
                SLIIT RSVP PORTAL
            </h1>
        </div>

    const loginLayout = 
        <div className={layoutClass}>
            <LoginInfo login={true} />
            <div className="lg:my-auto">
                <NextImage
                        classnames={lineBreakClass}
                        src={lineBreak}
                        alt="sign up"
                        layout="intrinsic"
                        quality={90}
                />
            </div>
            <LoginForm login={true} loginToggleHandler={loginToggler}/>
        </div>

    const signupLayout = 
    <div className={layoutClass}>
        <LoginForm login={false} loginToggleHandler={loginToggler}/>
        <div className="lg:my-auto">
            <NextImage
                    classnames={lineBreakClass}
                    src={lineBreak}
                    alt="sign up"
                    layout="intrinsic"
                    quality={90}
            />
        </div>
        <LoginInfo login={false}/>
    </div>

    return(
            <div className="w-full h-full bg-white p-5 lg:p-16 lg:mx-auto lg:my-auto lg:w-4/6 lg:h-5/6 rounded-3xl shadow-ds2 grid row-span-1">
                {selectLogin ? loginTitle : signupTitle}
                {selectLogin ? loginLayout : signupLayout}
            </div>
    );   
}

export default LoginSignup;