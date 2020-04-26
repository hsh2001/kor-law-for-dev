// 로그인.js
const fs = require('fs');
const bcrypt = require('bcrypt');

// 이 예제에서는 콘솔과 파일에서 입력을 받아오기
// 위해 아래와 같은 구문을 사용합니다.
// 지금 개발하고 있는 환경에 맞게
// 입력을 스스로 조정해주세요.
const [password = ''] = process.argv.slice(2);
const hash = fs.readFileSync(__dirname + '/비밀번호', 'utf8');

bcrypt.compare(password, hash).then((result) => {
  if (result) {
    console.log('로그인하셨습니다.');
  } else {
    console.log('비밀번호가 틀렸네요.');
  }
});
