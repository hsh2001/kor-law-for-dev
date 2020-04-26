<?php
$password = $_POST['password'];
$hash = file_get_contents('password');

if (password_verify($password, $hash)) {
    echo "로그인 성공!";
} else {
    echo "비밀번호가 틀렸습니다.";
}
?>