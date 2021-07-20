import React from 'react';
import './TodoItem.css';
import Checkbox from '@material-ui/core/Checkbox';

import { useDispatch } from 'react-redux';
import { setChecked } from '../features/todoSlice';

const TodoItem = ({ name, done, id }) => {

    const dispatch = useDispatch();


    const handleChange = () => {
        dispatch(setChecked(id));
    }

    return (
        <div className="todoItem">
            <Checkbox
                checked={done}
                onChange={handleChange}
                color="primary"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
            />
            <p className={done && 'todoItem--done'}>{name}</p>
        </div>
    )
}

export default TodoItem
