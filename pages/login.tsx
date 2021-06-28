import Layout from '../components/Layout'
import LoginSignup from '../components/LoginSignup';

const Loginpage = (): JSX.Element => {
    return(
        <Layout title="Login">
            <div 
                style={{ backgroundImage: "url(/patterns/login.svg)",height: "100%", width: "100%"}}
                className="bg-no-repeat bg-center bg-cover flex items-center justify-center"
            >
                <LoginSignup/>
            </div>
        </Layout>
    );
}

export default Loginpage;