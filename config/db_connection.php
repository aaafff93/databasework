<?php
    $connect = mysqli_connect('project', 'root', '', 'db_company');
    mysqli_query($connect, "SET NAMES 'utf8'");
    if(!$connect)
    {
        die('Ошибка подключения к базе данных');
    }
?>