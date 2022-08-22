import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { join } from '../redux'
import styles from './css/join.module.css'

function Join() {
    // When user enter there name
    const [name, setName] = useState("");

    // When user select any group
    const [department, setDepartment] = useState("Select Department");

    // When user write there name the value of name will be set
    const handleChange = (e) => {
        setName(e.target.value);
    }

    // When user select any grp from list the value of department is set
    const handleDepartment = (e) => {
        setDepartment(e.target.innerHTML);
    }

    // Dispatching name and grp selected by user
    const disptach = useDispatch(name, department);

    // When user click on join the grp the dispatch function calls 
    const handleJoin = () => {
        if(name===""){
            alert("Please enter your name");
        }
        else if(department === "Select Department"){
            alert("Please select any Group");
        }
        else{
            disptach(join(name, department));
        }
    }
    return (
        <div>
            <div className={`${styles.heading}`}>
                <h1 className={`${styles.heading}`}>Join The Chat Room</h1>
                <div>
                    {/* Input value from user */}
                    <label className={`${styles.all}`}>Enter Your Name: </label>
                    <input type="text" placeholder='Enter Here ' value={name} onChange={handleChange} className={styles.name} />
                </div>
                <div>
                    {/* Drop down to select the particular group */}
                    <div className="dropdown">
                        <label>Select Group: </label>
                        <button className={`btn btn-secondary dropdown-toggle ${styles.name}`} type="button" data-bs-toggle="dropdown">
                            {department}
                        </button>
                        <ul className="dropdown-menu dropdown-menu-dark">
                            {/* HR */}
                            <li><button className="dropdown-item" type="button" onClick={handleDepartment}>HR</button></li>
                            {/* Sales */}
                            <li><button className="dropdown-item" type="button" onClick={handleDepartment}>Sales</button></li>
                            {/* IT */}
                            <li><button className="dropdown-item" type="button" onClick={handleDepartment}>IT</button></li>
                        </ul>
                    </div>
                </div>
                <div>
                    {/* Join the Group Button */}
                    <button onClick={handleJoin} className={`${styles.btn}`}>Join The Group</button>
                </div>
            </div>
        </div>
    )
}

export default Join
