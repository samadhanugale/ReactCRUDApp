import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useParams } from "react-router-dom"
import { showStudents, updateStudents } from "../Actions/StudentAction";
import Student from "../StudentData/Student";

import TextField from '@material-ui/core/TextField';
import { Paper } from '@material-ui/core';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

export let UpdateStudent = () => {
    const paperStyle = { padding: '50px 20px', width: 600, margin: "100px auto" }



    let { id } = useParams();
    let [flag, setFlag] = useState(false);

    const [student, setStudent] = useState(new Student());

    const setDetail = (e) => {
        e.preventDefault();
        setStudent({ ...studentfound, [e.target.name]: e.target.value });
    }

    const test = (e) => {
        e.preventDefault();
        console.log(student);
        dispatch(updateStudents(student));
        setFlag(true);

    }
    let studAr = useSelector((store) => store.StudentReducer)
    let dispatch = useDispatch();
    useEffect(() => {
        dispatch(showStudents())
        setStudent(studentfound);
    }, 1000);

    let ii = parseInt(id);
    let searchStud = (i) => {
        return studAr.find((student) => student.id === i)
    }
    let studentfound = searchStud(ii);
    return (
        <> <Container>
            {
                flag === false ? <Paper elevation={3} style={paperStyle}>
                    <h1 style={{ color: "blue" }}>Update Student</h1>

                    <form noValidate autoComplete="off">

                        <TextField id="outlined-basic" label="Student ID" fullWidth
                            value={student.id}
                            disabled
                            name="id"
                            onChange={setDetail}
                        />
                        <TextField id="outlined-basic" label="Student Name" fullWidth
                            value={student.name}
                            name="name"
                            onChange={setDetail}
                        />
                        <TextField id="outlined-basic" label="Student Department" fullWidth
                            value={student.department}
                            name="department"
                            onChange={setDetail}
                        />
                        <TextField id="outlined-basic" label="Student Year" fullWidth
                            value={student.year}
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