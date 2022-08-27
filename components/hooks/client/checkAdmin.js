import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../../firebase.init';

const CheckAdmin = () => {
    // const [user, loading, error] = useAuthState(auth);
    // const { data } = useQuery('user', user.email, () => axios.get(`http://localhost:3000/api/user?email=rakibulssc5%40gmail.com`))
    // console.log(data)
    return (
        <div>

        </div>
    );
};

export default CheckAdmin;