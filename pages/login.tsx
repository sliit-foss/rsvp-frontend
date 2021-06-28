import Layout from '../components/Layout'
import LoginSignup from '../components/LoginSignup';

const Loginpage = (): JSX.Element => {
    return(
        <Layout title="Login">
            <div className="flex justify-center items-center">
                <LoginSignup/>
            </div>
        </Layout>
    );
}

export default Loginpage;