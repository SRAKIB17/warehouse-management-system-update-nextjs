import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../../firebase.init';

const CheckAdmin = () => {
    const admin = { admin: true }
    return { admin }
};

export default CheckAdmin;