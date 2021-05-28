import { todoAction, TodoActionTypes, TodoState } from "../../types/todo";

let initialState: TodoState = {
    todo: [],
    error: '',
    loading: false,
    page: 1,
    limit: 10
}


export const todoReducer = (state = initialState, action: todoAction) => {

    switch (action.type) {
        case TodoActionTypes.FETCH_TODO:
            return { ...state, loading: true }
        case TodoActionTypes.FETCH_TODO_ERROR:
            return { ...state, error: action.payload }
        case TodoActionTypes.FETCH_TODO_SUCCESS:
            return { ...state, loading: false, todo: action.payload }
        case TodoActionTypes.SET_TODO_PAGE:
            return { ...state, page: action.payload }

    }


}