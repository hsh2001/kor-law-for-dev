// 비밀번호_저장.js
const fs = require('fs');
const bcrypt = require('bcrypt');

// 이 예제에서는 콘솔에서 입력을 받아오기
// 위해 아래와 같은 구문을 사용합니다.
// 지금 개발하고 있는 환경에 맞게
// 입력을 스스로 조정해주세요.
const [password] = process.argv.slice(2);

// cost와 saltRounds는 동치입니다.
const saltRounds = 10;

if (!password) {
  console.log('비밀번호를 입력하지 않았습니다!!!');
  process.exit(0);
}

if (password.length < 8) {
  console.log('비밀번호가 너무 짧습니다. 8글자 이상 입력해주세요!');
  process.exit(0);
}

bcrypt.hash(password, saltRounds).then((hash) => {
  // 이 예제에서는 비밀번호의 결과를 파일로 저장합니다.
  // 지금 개발하고 있는 환경에 맞게
  // 출력을 스스로 조정해주세요. [예시) MySQL]
  fs.writeFileSync(__dirname + '/비밀번호', hash);
  console.log('비밀번호가 저장되었습니다.');
});
