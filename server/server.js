import express from 'express';
import cors from 'cors';
import mysql2 from 'mysql2';

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql2.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'fullstack'
});

function queryTable(res, sql) {
    db.query(sql, (err, results) => {
        if (err) {
            console.error(err);
            return res.json([]);
        }

        return res.json(results);
    });
}

app.get('/api/students', (req, res) => {
    queryTable(res, 'SELECT * FROM students');
});

app.get('/api/jobpostings', (req, res) => {
    queryTable(res, 'SELECT * FROM job_postings');
});

app.get('/api/applications', (req, res) => {
    queryTable(res, 'SELECT * FROM applications');
});

app.delete('/api/delete/:id', (req, res) => {
    const id = req.params.id;
    db.query('DELETE FROM applications WHERE id = ?', [id], (err) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Database error' });
        }
        return res.json();
    });
});

app.post('/api/create', (req, res) => {
    const { studentUin, jobPostingId } = req.body;
    db.query("INSERT INTO applications (student_uin, job_id) VALUES (?, ?)", [studentUin, jobPostingId], (err) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Database error' });
        }
        return res.json();
    });
});

app.get('/api/edit/:id', (req, res) => {
    const id = req.params.id;
    db.query('SELECT * FROM applications WHERE id = ?', [id], (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Database error' });
        }
        return res.json(results);
    });
});

app.put('/api/update/:id', (req, res) => {
    const id = req.params.id;
    db.query('UPDATE applications SET student_uin = ?, job_id = ? WHERE id = ?', [req.body.studentUin, req.body.jobPostingId, id], (err) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Database error' });
        }
        return res.json();
    });
});

app.listen(8000, () => {
    console.log('Server is running on port 8000');
});