import React from 'react-dom';

function DropDownComponent(props){

    const onSelectDropdown = (e) => {
        const selectedForm = e.target.value;
        console.log("app-container: " + selectedForm)
        props.setValueOfCurrentForm(selectedForm);
    }

    return (<div className='dropdown-component-container'>
        <select onChange={onSelectDropdown}>
            <option>Form A</option>
            <option>Form B</option>
            <option>Form C</option>
        </select>
    </div>)
}

export default DropDownComponent;