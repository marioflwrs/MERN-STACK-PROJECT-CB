import React from 'react';

import UsersList from './UsersList';

const Users = () => {
    const USERS = [
        {
            id: 'u1',
            name: 'Toyz',
            image:'https://pbs.twimg.com/profile_images/378800000386034507/7d3f718f196bd3314153492e0d73ac26_400x400.jpeg',
            location: 'USA - Maryland'
        }
    ];
    return <UsersList items={USERS} />
}

export default Users;   