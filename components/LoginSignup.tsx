import LoginForm from './LoginForm';
import LoginInfo from './LoginInfo';

const LoginSignup = (): JSX.Element => {
 return(
        <div className="w-full h-full mx-2 my-2 bg-white p-5 rounded-3xl shadow-ds2 grid row-span-1">
            <h1 className="text-black text-3xl font-extrabold justify-self-center text-center mb-4">
                SLIIT RSVP PORTAL
            </h1>
            <LoginInfo login={false}/>
            <LoginForm login={false}/>
        </div>
 );   
}

export default LoginSignup;