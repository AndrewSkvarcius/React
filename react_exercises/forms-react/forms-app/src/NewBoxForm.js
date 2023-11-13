import React, {useState} from 'react';
import { v4 as uuid } from 'uuid';

function NewBoxForm({createBox}){

    const [formData, SetFormData] = useState({
    height: "",
    width: "",
    backgroundColor: ""
});

    const handleChange = e => {
        const { name, value } = e.target;
        SetFormData(formData => ({
            ...formData,
            [name]: value
        }));
    };

    const gatherInput = e => {
        e.preventDefault();
        createBox({ ...formData, id: uuid()});
        SetFormData({ height:"", width: "", backgroundColor: "" });
    };

    return (
        <div>
            <form onSubmit={gatherInput}>
                <div>
                    <label htmlFor='height'>Height</label>
                    <input 
                    onChange={handleChange}
                    type="text"
                    name="height"
                    value={formData.height}
                    id="height"
                    />
                </div>
                <div>
                    <label htmlFor='width'>Width</label>
                    <input 
                    onChange={handleChange}
                    type="text"
                    name="width"
                    value={formData.width}
                    id="width"
                    />
                </div>
                <div>
                    <label htmlFor='backgroundColor'>Background Color</label>
                    <input 
                    onChange={handleChange}
                    type="test"
                    name="backgroundColor"
                    value={formData.backgroundColor}
                    id="backgroundColor"
                    />
                </div>
                <button id="newBoxBtn">Add Box</button>
            </form>
        </div>
    )

}

export default NewBoxForm;