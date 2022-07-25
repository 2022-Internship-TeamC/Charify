const express = require('express');
const multer = require('multer');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const storage = multer.diskStorage({
  destination(req, file, callback) {
    callback(null, './images');
  },
  filename(req, file, callback) {
    callback(null, `${file.fieldname}_${Date.now()}_${file.originalname}`);
  },
});

const upload = multer({ storage });

app.get('/', (req, res) => {
  res.status(200).send('You can post to /characterize.');
});

app.post('/characterize', upload.fields({id_ch: 41, image:'image'}), (req, res) => {
  console.log('body', req.body);
  console.log('file', req.file);
  res.status(200).json({
    message: 'success!',
  });
});

app.listen(process.env.PORT || 8000, () => {
  console.log(
    `server is running at http://127.0.0.1:8000/:${process.env.PORT || 8000}`
  );
});