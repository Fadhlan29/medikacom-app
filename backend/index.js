import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import db from './src/config/database.js';

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.post('/create', (req, res) => {
  const {nama_siswa, id_kelas} = req.body;

  const query = 'INSERT INTO siswa (nama_siswa, id_kelas) VALUES (?, ?)';
  const values = [nama_siswa, id_kelas];

  db.query(query, values, (err, result) => {
    if (err) {
      console.error(err);
      return res
        .status(500)
        .json({status: 'error', message: 'Failed to insert data'});
    }
    const createdData = {
      id_siswa: result.insertId,
      nama_siswa: nama_siswa,
      id_kelas: id_kelas,
    };
    return res.status(201).json({
      status: 'success',
      message: 'Successfully created new data',
      data: createdData,
    });
  });
});

app.get('/siswa/:id_kelas', (req, res) => {
  const id_kelas = req.params.id_kelas;

  const query =
    'SELECT siswa.nama_siswa, kelas.nama_kelas FROM siswa INNER JOIN kelas ON siswa.id_kelas = kelas.id_kelas WHERE siswa.id_kelas = ?';
  db.query(query, [id_kelas], (err, result) => {
    if (err) {
      console.error(err);
      return res
        .status(500)
        .json({status: 'error', message: 'Failed to fetch data'});
    }
    return res.status(200).json({
      status: 'success',
      message: 'Data retrieved successfully',
      data: result,
    });
  });
});

app.listen(5000, () => {
  console.log(`server running`);
});