import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../../firebase.init';

const CheckAdmin = () => {
    const [admin, setAdmin] = useState({})
    const [user, loading, error] = useAuthState(auth);
    const { data } = useQuery(['userInfo', user?.email], () => axios.get(`/api/user/?email=${user?.email}`))
    const userInfo = data?.data;
    useEffect(() => {
        if (userInfo?.roll == 'admin') {
            setAdmin({ admin: true })
        }
        else {
            setAdmin({ admin: false })
        }
    }, [user, userInfo])
    if (loading) {
        return {}
    }
    return { admin }
};

export default CheckAdmin;