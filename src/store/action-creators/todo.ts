import { Dispatch } from "redux";
import axios from "axios";
import { todoAction, TodoActionTypes } from "../../types/todo";

export const fetchTodos = (page, limit) => {
    return async (dispatch: Dispatch<todoAction>) => {
        try {

            dispatch({ type: TodoActionTypes.FETCH_TODO })
            const response = await axios.get('dsds/todos', {
                params: { _page: page, _limit: limit }
            });
            dispatch({ type: TodoActionTypes.FETCH_TODO_SUCCESS, payload: response.data })

        }

        catch (e) {
            dispatch({ type: TodoActionTypes.FETCH_USERS_ERROR, payload: 'some error occured' })
        }
    }
}



export const setTodoPage(page: number): todoAction  {
    return { type: TodoActionTypes.SET_TODO_PAGE, payload: page }
}