export let showStudents = ()=>{
    return{
        type:'SHOWSTUDENT'
    }
}


export let deleteStudents = (id)=>{
    return{
        type:'DELETESTUDENT',
        payload:id
    }
}

export let addStudents = (student)=>{
    return{
        type:'ADDSTUDENT',
        payload:student
    }
}
export let updateStudents = (student)=>{
    return{
        type:'UPDATESTUDENT',
        payload:student
    }
}