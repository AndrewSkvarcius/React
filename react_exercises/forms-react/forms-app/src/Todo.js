import React, { useState} from "react";

function Todo ( {task = "todo", id ="1", remove, update }){
    const [taskEdit, setTaskEdit] = useState(task);
    const [isEdit, SetisEdit] = useState(false)

    const toggleEdit = () => {
        SetisEdit(edit => !edit);
    };

    const handleChange = e => {
        setTaskEdit(e.target.value);
    };

    const handleDelete = () => {
        remove(id);
    }

    const handleUpdate = e => {
        e.preventDefault();
        update(id, taskEdit);
        SetisEdit(false);
    };
    //regular veiw of task
    let tasky = (
        <div>
            <li>{task}</li>
            <button onClick={toggleEdit}>Edit</button>
            <button onClick={handleDelete}>Remove</button>
        </div>
    );
    // veiw when editing task
    if(isEdit) {
        tasky = (
            <div>
                <form onSubmit={handleUpdate}>
                    <input type="text" value={taskEdit} onChange={handleChange} />
                    <button>Update</button>
                </form>
            </div>
        )
    }
    return tasky;



}

export default Todo;