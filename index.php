<?php
    require_once 'config/db_connection.php';
?>
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" type="text/css" href="css/style.css">
    <script src="libs/jquery-3.6.0.min.js"></script>
    <script src="https://www.google.com/jsapi"></script>
    <script src="js/script.js"></script>
</head>
<body>
    <div class="container">
        <div class="header">  
            <img src="/images/main.png" />
        </div>
        <div class="left-sidebar">

            <div class="menu-item">
                <img src="/images/employees.png" />
                <a href="#" onclick="getAllEmployees()">Сотрудники</a>
            </div>

            <div class="menu-item">
                <img src="/images/suppliers.png" />
                <a href="#" onclick="getAllSuppliers()">Поставщики</a>
            </div>

            <div class="menu-item">
                <img src="/images/clients.png" />
                <a href="#" onclick="getAllClients()">Клиенты</a>
            </div>

            <div class="menu-item">
                <img src="/images/purchase.png" />
                <a href="#" onclick="getAllPurchases()">Закупки</a>
            </div>

            <div class="menu-item">
                <img src="images/sales.png" />
                <a href="#" onclick="getAllSales()">Продажи</a>
            </div>

            <div class="menu-item">
                <img src="/images/product.png" />
                <a href="#" onclick="getAllProducts()">Товары</a>
            </div>

            <div class="menu-item">
                <img src="/images/analysis.png" />
                <a href="#" onclick="getAnalytics()">Аналитика</a>
            </div>
        </div>
        <div class="content" id="content">
            <div class="table-area" id="table_area">
                <form method="POST" id="form_post"></form>
                <table id="table"></table>
            </div>
            <div id="buttons-container">
                <div class="buttons-area" id="button_add_area"></div>
                <div class="buttons-area" id="button_save_area"></div>
                <div class="buttons-area" id="button_cancel_area"></div>
            </div>
        </div>

        <div class="footer">
        </div>

    </div>

</body>
</html>