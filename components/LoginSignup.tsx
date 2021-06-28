import loginImage from '../public/login.svg';
import signupImage from '../public/signup.svg';
import googleLogo from '../public/logos/google_colour.svg';
import lineBreak from '../public/patterns/line-break.svg';
import NextImage from './NextImage';

const LoginSignup = (): JSX.Element => {
 return(
        <div className="w-full h-full mx-2 my-2 bg-white p-5 rounded-3xl shadow-ds2 grid row-span-1">
            <h1 className="text-black text-3xl font-extrabold justify-self-center mb-4">
                SLIIT RSVP PORTAL
            </h1>
            <div className="">
                <p className="font-inter font-medium text-center pb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi diam vitae non elementum tincidunt.</p>
                <NextImage
                    classnames="pb-8"
                    src={loginImage}
                    alt="sign up"
                    layout="intrinsic"
                    quality={90}
                />
            </div>
            <div className="flex flex-col items-center">
                    <h2 className="font-inter font-extrabold text-blue font-inter text-2xl">Sign Up</h2>
                    <p className="font-inter text-textBlackSecondary font-medium mb-6">Sign up to access the best things!</p>
                    <button className="shadow-ds2 flex flex-row w-full h-10 rounded-lg flex items-center justify-center leading-4 font-semibold font-inter text-sm mb-4">
                        <NextImage
                            classnames="w-4 h-4 mr-4 line"
                            src={googleLogo}
                            alt="sign up"
                            layout="intrinsic"
                            quality={90}
                        />
                        Sign up with Google
                    </button>
                    <p className="text-gray-login text-sm">or Signup with Email</p>
                    <form className="flex flex-col w-full">
                        <input type="text" placeholder="User Name" className="shadow-ds2 mt-4 border-none text-xs font-semibold"></input>
                        <input type="text" placeholder="Email" className="shadow-ds2 mt-4 border-none text-xs font-semibold"></input>
                        <input type="text" placeholder="Password" className="shadow-ds2 mt-4 border-none text-xs font-semibold"></input>
                        <input type="text" placeholder="Confirm Password" className="shadow-ds2 mt-4 border-none text-xs font-semibold"></input>
                        <button className="w-full bg-lightBlue rounded-lg font-inter text-lg leading-6 text-white font-semibold h-12 mt-4 mb-2">Sign Up</button>
                    </form>
                    <div className="w-full">
                        <p className="text-xs text-left font-semibold">Already have an account? <span className="text-blue">login</span></p>
                    </div>
                </div>
        </div>
 );   
}

export default LoginSignup;