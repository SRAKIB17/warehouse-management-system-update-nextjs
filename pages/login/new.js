import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import Loading from '../../components/Common/Loading';
import Register from '../../components/Login/Register';
import auth from '../../firebase.init';

const Index = ({ secretCode }) => {
    const [user, loading, error] = useAuthState(auth);

    if (loading) {
        return <Loading />
    }
    if (user) {
        const jwtToken = jwt.sign({ email: user?.email }, secretCode, { expiresIn: '1d' })
        localStorage.setItem('token', jwtToken)
    }
    return (
        <div>
            <Register />
        </div>
    );
};

export default Index;

export async function getServerSideProps(context) {
    const { req, res } = context
    const secretCode = process.env.SECRET_KEY;

    return { props: { secretCode } }
}
