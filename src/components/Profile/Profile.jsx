import React, { use } from 'react';
import { AuthContext } from '../contexts/AuthContext';

const Profile = () => {
    const {user} = use(AuthContext);
    return (
        <div className='max-w-sm mx-auto text-center mt-16'>
            <h3>{user.email}</h3>
          
        </div>
    );
};

export default Profile;