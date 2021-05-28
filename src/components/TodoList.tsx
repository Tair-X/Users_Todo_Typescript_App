import React, { useEffect } from 'react';
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useActions";
import { fetchTodos } from './../store/action-creators/todo';

const UserList: React.FC = () => {
    let { todos, error, loading, page, limit } = useTypedSelector(state => state.user)
    let { fetchTodos,setTodoPage } = useActions();
    let pages = [1, 2, 3, 4, 5]


    useEffect(() => {
        fetchTodos(page, limit)
    }, [page])


    if (loading) {
        return <h1>loading</h1>
    }


    if (error) {
        return <h1>{error}</h1>
    }

    return (
        <div>
            {todos.map(u =>
                <div key={user.id}> {u.title}</div>
            }
            )
            {pages.map(p =>
                <div style={{ display: "flex" }}>

                    <div onClick={() => { setTodoPage(p)}} style={{ border: p == page?"2px solid green":"2px solid grey"}}>
                        {p}
                    </div>

                </div>

            )}

        </div >
    );


};

export default UserList;
