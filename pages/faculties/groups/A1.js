import React from 'react'
import { useEffect, useState } from 'react'

export default function A1() {

  const [students, setStudents] = useState([])
  const [formData, setFormData] = useState({})

  useEffect(() => {
    async function fetchData() {
      const res = await fetch('../../api/GetStudents')
      const data = await res.json()
      setStudents(data)
      console.log(data)
    }
    fetchData()
  }, [])

  function handleDelete(id) {
    fetch(`../../api/DeleteStudent/${id}`, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then((data) => { console.log(data), setStudents(data) })
      .catch((error) => console.log(error));
  }




  function handlePut(id) {
    fetch(`../../api/PutStudent/${id}`, {
        method: 'PUT',
        body: JSON.stringify(formData),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then((res) => res.json())
        .then((data) => { console.log(data), setStudents(data) })
        .catch((error) => console.log(error));
}

function handleChange(event) {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  return (
    <div>
      Students:
      {students.map((student) => (
        <div key={student.id}> {student.id} {student.name} {student.faculty} {student.group} {student.isDeleted.toString()}
          <button id={student.id} onClick={() => handleDelete(student.id)}>Удалить</button>
          <button id={student.id} onClick={() => handlePut(student.id)}>Изменить</button>
        </div>
      ))}
      <div className='FORMA'>
        <input onChange={handleChange} style={{ width: "200px", margin: "10px 0px 0px 0px" }} name='facultyName' type='text' placeholder='Введите название факультета' />
        <input onChange={handleChange} style={{ width: "200px", margin: "10px 0px 0px 0px" }} name='studentName' type='text' placeholder='Введите имя студента' />
        <input onChange={handleChange} style={{ width: "200px", margin: "10px 0px 0px 0px" }} name='groupName' type='text' placeholder='Введите название группы' />
      </div>
    </div>
  )
}
