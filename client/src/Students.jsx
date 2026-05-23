import React, { useEffect, useState } from 'react';
import axios from 'axios';


function Students() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/students')
            .then(response => {
                setData(response.data);
            });
    }, []);

    return (
        <div className="d-flex vh-100 justify-content-center align-items-center">
            <div className="w-50 bg-secondary border p-3 rounded">
                <h1>Students</h1>
                    <table className="table">
                        <thead>
                            <tr>
                            <th>UIN</th>
                            <th>Name</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((student) => (
                            <tr key={student.uin}>
                                <td>{student.uin}</td>
                                <td>{student.name}</td>
                                <td>{student.email}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>

    );
}

export default Students;