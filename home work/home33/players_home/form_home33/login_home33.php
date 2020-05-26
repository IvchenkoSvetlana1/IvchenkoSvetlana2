<?php
    $login = htmlspecialchars(trim($_GET['login']));
    $pass = htmlspecialchars(trim($_GET['pass']));

    if ($login === '' || $pass === '') {
        echo 'Ошибка. Заполните все поля';
        return;
    }
    
    if ($login != 'login' || $pass != '123') {
        echo 'Такой пользователь не найдено';
        return;
    } else {
        echo 'Доро пожаловать, ' . $login;
    }