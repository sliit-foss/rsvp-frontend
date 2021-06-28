import LoginForm from './LoginForm';
import LoginInfo from './LoginInfo';
import {useState} from 'react';

const LoginSignup = (): JSX.Element => {

    const loginToggler = () =>{
        console.log('Clicked toggler');
        setSelectLogin(!selectLogin);
    }
    const [selectLogin,setSelectLogin] = useState(false);

        const loginLayout = <div className="lg:flex lg:flex-col-2">
        <LoginInfo login={true} />
        <LoginForm login={true} loginToggleHandler={loginToggler}/>
    </div>

    const signupLayout = <div className="lg:flex lg:flex-col-2">
        <LoginForm login={false} loginToggleHandler={loginToggler}/>
        <LoginInfo login={false}/>
    </div>

    return(
            <div className="w-full h-full lg:container mx-2 my-2 bg-white p-5 rounded-3xl shadow-ds2 grid row-span-1">
                <h1 className={`text-black text-3xl font-extrabold text-center mb-4 text-center ${selectLogin ? 'lg:text-right':'lg:text-left'}`}>
                    SLIIT RSVP PORTAL
                </h1>
                {selectLogin ? loginLayout : signupLayout}
            </div>
    );   
}

export default LoginSignup;