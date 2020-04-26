<?php
$password = $_POST['password'];

if (!$password) {
    die('비밀번호를 입력하지 않았습니다!!!');
}

if (strlen($password) < 8) {
    die('비밀번호가 너무 짧습니다. 8글자 이상 입력해주세요!');
}

$hash = password_hash($password, PASSWORD_BCRYPT, [
    // 세번째 인자에서 cost 값을 지정해줄 수 있다.
    // 기본값은 12이다.
    'cost' => 10
]);

// 이 예제에서는 비밀번호의 결과를 파일로 저장합니다.
// 지금 개발하고 있는 환경에 맞게
// 출력을 스스로 조정해주세요. [예시) MySQL]
file_put_contents('password', $hash);
echo "등록되었습니다.";
?>