const express = require('express');
const path = require('path');
const app = express();
const port = 3000; // 사용할 포트 번호를 지정합니다.

// GET 요청을 처리하여 index.html 파일을 제공합니다.
app.get('/', (req, res) => {
  // index.html 파일의 경로를 지정합니다.
  const indexPath = path.join(__dirname, 'index.html');
  res.sendFile(indexPath);
});

// POST 요청을 처리하고 서버에서 메시지를 출력합니다.
app.post('/post', (req, res) => {
  console.log('POST 요청을 받았습니다.');
  res.send('POST 요청이 성공적으로 처리되었습니다.');
});

// 서버를 시작합니다.
app.listen(port, () => {
  console.log(`서버가 http://localhost:${port} 에서 실행 중입니다.`);
});