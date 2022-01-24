import { useState } from "react";
import { useDispatch } from "react-redux";
import { addStudents } from "../Actions/StudentAction";
import Student from "../StudentData/Student";
import { Navigate } from "react-router-dom";

import TextField from '@material-ui/core/TextField';
import { Paper } from '@material-ui/core';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';




export let AddStudent = () => {

    const paperStyle = { padding: '50px 20px', width: 600, margin: "100px auto" }

    let dispatch = useDispatch();

    let [flag, setFlag] = useState(false);

    const [student, setStudent] = useState(new Student());

    const setDetail = (e) => {
        setStudent({ ...student, [e.target.name]: e.target.value });
    }
    const test = (e) => {
        e.preventDefault();
        console.log(student);
        dispatch(addStudents(student));
        setFlag(true);

    }


    return (
        <>
            <Container>
                {
                    flag === false ? <Paper elevation={3} style={paperStyle}>
                        <h1 style={{ color: "blue" }}>Add Student</h1>

                        <form noValidate autoComplete="off">

                            <TextField id="outlined-basic" label="Student ID" fullWidth
                                name="id"
                                onChange={setDetail}
                            />
                            <TextField id="outlined-basic" label="Student Name" fullWidth
                                name="name"
                                onChange={setDetail}
                            />
                            <TextField id="outlined-basic" label="Student Department" fullWidth
                                name="department"
                                onChange={setDetail}
                            />
                            <TextField id="outlined-basic" label="Student Year" fullWidth
                                name="year"
                                onChange={setDetail}
                            />
                            <Button style={{ marginTop: "30px" }} variant="contained" color="secondary" onClick={test}>
                                Submit
                            </Button>

                        </form>

                    </Paper>
                        : <Navigate to="/student/showall" />
                }
            </Container>
        </>

    )
}