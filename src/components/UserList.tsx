import React, { useEffect } from 'react';
import { useTypedSelector } from "../hooks/useTypedSelector";
import { fetchUsers } from "../store/action-creators/user";
import { useActions } from "../hooks/useActions";
import { useDispatch } from 'react-redux';

const UserList: React.FC = () => {
    let { users, error, loading } = useTypedSelector(state => state.user)
    let { fetchUsers } = useActions();


    useEffect(() => {
        fetchUsers()
    }, [])


    if (loading) {
        return <h1>loading</h1>
    }


    if (error) {
        return <h1>{error}</h1>
    }

    return (
        <div>
            {users.map(u =>
                <div key={user.id}> {u.name}</div>
            }
            )
        </div >
    );


};

export default UserList;
