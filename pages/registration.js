import React, { useState } from 'react'

export default function registration() {
    const [formData, setFormData] = useState({})

    function handleSubmit(event) {
        event.preventDefault()
        fetch('api/PostStudent', {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((res) => res.json())
            .then((data) => console.log(data))
            .catch((error) => console.log(error));
    }

    function handleChange(event) {
        setFormData({ ...formData, [event.target.name]: event.target.value });
      }

    return (
        <form className='FORMA' onSubmit={handleSubmit}>
            <input onChange={handleChange} style={{ width: "200px", margin: "10px 0px 0px 0px" }} name='facultyName' type='text' placeholder='Введите название факультета' />
            <input onChange={handleChange} style={{ width: "200px", margin: "10px 0px 0px 0px" }} name='studentName' type='text' placeholder='Введите имя студента' />
            <input onChange={handleChange} style={{ width: "200px", margin: "10px 0px 0px 0px" }} name='groupName' type='text' placeholder='Введите название группы' />
            <input value="Добавить" style={{ width: "80px", margin: "10px 0px 0px 0px" }} type='submit' />
        </form>
    )
}
