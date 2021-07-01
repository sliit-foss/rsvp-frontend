import NextImage from '../NextImage'
import googleLogo from '../../public/logos/google_colour.svg'

interface LoginFormProps {
	login: boolean
	loginToggleHandler: () => void
}

const signupFormFields = (
	<form className="flex flex-col w-full lg:w-4/5">
		<input
			type="text"
			placeholder="User Name"
			className="shadow-ds2 mt-4 border-none text-xs font-semibold h-10"
		></input>
		<input
			type="text"
			placeholder="Email"
			className="shadow-ds2 mt-4 border-none text-xs font-semibold h-10"
		></input>
		<input
			type="text"
			placeholder="Password"
			className="shadow-ds2 mt-4 border-none text-xs font-semibold h-10"
		></input>
		<input
			type="text"
			placeholder="Confirm Password"
			className="shadow-ds2 mt-4 border-none text-xs font-semibold h-10"
		></input>
	</form>
)

const loginFormFields = (
	<form className="flex flex-col w-full lg:w-4/5">
		<input
			type="text"
			placeholder="Email"
			className="shadow-ds2 mt-4 border-none text-xs font-semibold h-10"
		></input>
		<input
			type="text"
			placeholder="Password"
			className="shadow-ds2 mt-4 border-none text-xs font-semibold h-10"
		></input>
		<div className="flex justify-between mt-4">
			<div className="flex items-center">
				<input className="w-3 h-3 mr-2" type="checkbox" />
				<p className="text-xs text-blue">Remember</p>
			</div>
			<a className="text-xs text-blue">Forgot Password</a>
		</div>
	</form>
)

const LoginForm = ({
	login,
	loginToggleHandler,
}: LoginFormProps): JSX.Element => {
	return (
		<div className="flex flex-col order-1 lg:order-none items-center lg:w-6/12 lg:justify-center lg:transform lg:scale-90">
			<h2 className="font-inter font-extrabold text-blue font-inter text-3xl lg:text-2xl mb-2">
				{login ? 'LOGIN' : 'Sign Up'}
			</h2>
			<p className="font-inter text-textBlackSecondary font-medium mb-6 text-sm">
				{login ? 'Login' : 'Sign up'} to access the best things!
			</p>
			<button className="shadow-ds2 flex flex-row w-full lg:w-4/5 h-10 rounded-lg flex items-center justify-center leading-4 font-semibold font-inter text-sm mb-6">
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
			{login ? loginFormFields : signupFormFields}
			<button className="w-full lg:w-4/5 bg-lightBlue rounded-lg font-inter text-sm leading-6 text-white font-semibold h-10 mt-4 mb-2">
				{login ? 'Login' : 'Sign Up'}
			</button>
			<div className="w-full lg:w-4/5">
				<p className="text-xs text-left font-semibold">
					{login ? 'Not Registered Yet?' : 'Already have an account?'}{' '}
					<span onClick={loginToggleHandler} className="text-blue">
						{login ? 'Create An Account' : 'login'}
					</span>
				</p>
			</div>
		</div>
	)
}

export default LoginForm
