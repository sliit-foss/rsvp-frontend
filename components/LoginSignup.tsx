import loginImage from '../public/login.svg';
import signupImage from '../public/signup.svg';
import googleLogo from '../public/logos/google_colour.svg';
import lineBreak from '../public/patterns/line-break.svg';
import NextImage from './NextImage';

const LoginSignup = (): JSX.Element => {
 return(
        <div className="container bg-white w-5/6 h-5/6 shadow-ds1 rounded-3xl">
            <h1 className="text-black font-extrabold text-6xl">
                SLIIT RSVP PORTAL
            </h1>
            <div className="flex">
                <div className="w-2/4 flex flex-col items-center">
                    <h2 className="text-5xl font-extrabold text-blue font-inter">Sign Up</h2>
                    <p className="text-textBlackSecondary font-medium text-lg">Sign up to access the best things!</p>
                    <button className="shadow-ds2 flex flex-row">
                        <NextImage
                            classnames=""
                            src={googleLogo}
                            alt="sign up"
                            layout="intrinsic"
                            quality={90}
                        />
                        Sign up with Google
                    </button>
                    <div className="flex justify-between">
                        <span className="border-t-2 text-black"></span>
                        <p>or Sign up with Email</p>
                        <span></span>
                    </div>
                    <form className="flex flex-col">
                        <input type="text" className="shadow-ds2 mt-4 w-full"></input>
                        <input type="text" className="shadow-ds2 mt-4 w-full"></input>
                        <input type="text" className="shadow-ds2 mt-4 w-full"></input>
                        <input type="text" className="shadow-ds2 mt-4 w-full"></input>
                        <button>Sign Up</button>
                    </form>
                    <p>Already have an account? <span>login</span></p>
                </div>
                <div
                    style={{backgroundImage: "url(/patterns/line-break.svg)"}}
                    className="bg-no-repeat"
                >
                </div>
                <div className="w-2/4">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi diam vitae non elementum tincidunt.</p>
                    <NextImage
                        classnames="md:col-span-1 flex items-center justify-center max-w-lg lg:w-auto sm:w-80 w-64 mx-auto my-8"
                        src={loginImage}
                        alt="sign up"
                        layout="intrinsic"
                        quality={90}
                    />
                </div>
            </div>
        </div>
 );   
}

export default LoginSignup;