import { useRouter } from 'next/router';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loading from '../../Common/Loading';

const FirebaseCheckUser = () => {
    const router = useRouter()
    const [user, loading, error] = useAuthState(auth);
    if (!loading) {
        return <Loading />
    }
    const query = router.query;
    console.log(query)
};

export default FirebaseCheckUser;