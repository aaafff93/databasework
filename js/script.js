function getAllEmployees()
{
    $('.buttons-area').html('');
    /*$.get('/commands/allemployees.php', function(data)
    {
        document.getElementById('table').innerHTML = 
            '<tr><th>Имя</th><th>Телефон</th><th>Должность</th></tr>' +  data;
    });*/
    $.ajax
    (
        {
            url: '/commands/allemployees.php',
            method: 'get',
            async: false,
            success: function(data)
            {
                $('#table').html(data);
                $('#button_add_area').append(`<button id="button_add" onclick="addEmployee()">Добавить</button>`);
                $('#button_save_area').append(`<button id="button_save" onclick="save()" disabled>Сохранить</button>`);
                $('#button_cancel_area').append(`<button id="button_cancel" onclick="getAllEmployees()" disabled>Отмена</button>`);
            }
        }
    )
    return false;
}

function addEmployee()
{
    getAllEmployees();
    $('#button_add').prop('disabled', true);
    $('#button_save').prop('disabled', false);
    $('#button_save').attr('onclick', 'save("commands/addnewemployee.php", getAllEmployees)');
    $('#button_cancel').prop('disabled', false);
    $('#table').append(
        `<tr class="changeable-table-part">
            <td><input class="input-field" type="text" name="name" form="form_post"></td>
            <td><input class="input-field" type="text" name="phone_number" form="form_post"></td>
            <td><input class="input-field" type="text" name="post" form="form_post"></td>
        </tr>`);
}

function updateEmployee(tableIndex, employeeIndex)
{
    getAllEmployees();
    $('#button_save').prop('disabled', false);
    $('#button_save').attr('onclick', 'save("commands/updateemployee.php", getAllEmployees)');
    $('#button_cancel').prop('disabled', false);

    $('#table tr').eq(tableIndex).each( //или не каждый
    function()
    {
        //id в hidden

        let td = $(this).find('td')
        td.eq(0).html(`<input class="input-field" type="text" name="name" form="form_post" 
            value="${td.eq(0).text()}">`);
        
        td.eq(0).append(`<input class="input-field" type="hidden" name="employeeID" 
            value="${employeeIndex}" form="form_post">`);
        
        td.eq(1).html(`<input class="input-field" type="text" name="phone_number" form="form_post" 
            value="${td.eq(1).text()}">`);
        
        td.eq(2).html(`<input class="input-field" type="text" name="post" form="form_post" 
            value="${td.eq(2).text()}">`);
    }); 
}

function deleteEmployee(tableIndex, employeeIndex)
{
    getAllEmployees();
    $('#table tr').eq(tableIndex).find('td:lt(3)').css({'background': '#FFB6B6'});

    if (confirm('Удалить выбранную запись?'))
    {
        $('#table tr').eq(tableIndex).find('td').eq(0).append(`<input type="hidden" name="employeeID" 
            value="${employeeIndex}" form="form_post">`);
        save('commands/deleteemployee.php', getAllEmployees);
    }
    else
    {
        getAllEmployees();
    } 
}

function save(url, refresh)
{
    let isEmpty = $('.input-field').filter
        (
            function()
            {
                return !$(this).val().trim().length; //собираются пустые
            }
        ).length //длина пустых

        if (!isEmpty)
        {
            $.ajax
            (
                {
                    url: url,
                    method: 'post',
                    data: $('#form_post').serialize(),
                    success: function(data)
                    {
                        refresh();
                    }
                    //с ошибкой
                }
            );
        }
        else
            alert('Заполнены не все поля!');
}

/*function cancel()
{
    getAllEmployees();
}*/

function getAllSuppliers()
{
    $('.buttons-area').html('');
    $.ajax
    (
        {
            url: '/commands/allsuppliers.php',
            method: 'get',
            async: false,
            success: function(data)
            {
                $('#table').html(data);
                $('#button_add_area').append(`<button id="button_add" onclick="addSupplier()">Добавить</button>`);
                $('#button_save_area').append(`<button id="button_save" onclick="save()" disabled>Сохранить</button>`);
                $('#button_cancel_area').append(`<button id="button_cancel" onclick="getAllSuppliers()" disabled>Отмена</button>`);
            }
        }
    )
    return false;
}

function addSupplier()
{
    getAllSuppliers();
    $('#button_add').prop('disabled', true);
    $('#button_save').prop('disabled', false);
    $('#button_save').attr('onclick', 'save("commands/addnewsupplier.php", getAllSuppliers)');
    $('#button_cancel').prop('disabled', false);
    $('#table').append(
        `<tr class="changeable-table-part">
            <td><input class="input-field" type="text" name="name" form="form_post"></td>
            <td><input class="input-field" type="text" name="company" form="form_post"></td>
            <td><input class="input-field" type="text" name="phone_number" form="form_post"></td>
        </tr>`);
}


function updateSupplier(tableIndex, supplierIndex)
{
    getAllSuppliers();
    $('#button_save').prop('disabled', false);
    $('#button_save').attr('onclick', 'save("commands/updatesupplier.php", getAllSuppliers)');
    $('#button_cancel').prop('disabled', false);

    $('#table tr').eq(tableIndex).each( //или не каждый
    function()
    {
        let td = $(this).find('td')
        td.eq(0).html(`<input class="input-field" type="text" name="name" form="form_post" 
            value="${td.eq(0).text()}">`);
        
        td.eq(0).append(`<input class="input-field" type="hidden" name="supplierID" 
            value="${supplierIndex}" form="form_post">`);

        td.eq(1).html(`<input class="input-field" type="text" name="company" form="form_post" 
            value="${td.eq(1).text()}">`);
        
        td.eq(2).html(`<input class="input-field" type="text" name="phone_number" form="form_post" 
            value="${td.eq(2).text()}">`);
        
    }); 
}

function deleteSupplier(tableIndex, supplierIndex)
{
    getAllSuppliers();
    $('#table tr').eq(tableIndex).find('td:lt(3)').css({'background': '#FFB6B6'});

    if (confirm('Удалить выбранную запись?'))
    {
        $('#table tr').eq(tableIndex).find('td').eq(0).append(`<input type="hidden" name="supplierID" 
            value="${supplierIndex}" form="form_post">`);
        save('commands/deletesupplier.php', getAllSuppliers);
    }
    else
    {
        getAllSuppliers();
    } 
}

function getAllClients()
{
    $('.buttons-area').html('');
    $.ajax
    (
        {
            url: '/commands/allclients.php',
            method: 'get',
            async: false,
            success: function(data)
            {
                $('#table').html(data);
                $('#button_add_area').append(`<button id="button_add" onclick="addClient()">Добавить</button>`);
                $('#button_save_area').append(`<button id="button_save" onclick="save()" disabled>Сохранить</button>`);
                $('#button_cancel_area').append(`<button id="button_cancel" onclick="getAllClients()" disabled>Отмена</button>`);
            }
        }
    )
    return false;
}

function addClient()
{
    getAllClients();
    $('#button_add').prop('disabled', true);
    $('#button_save').prop('disabled', false);
    $('#button_save').attr('onclick', 'save("commands/addnewclient.php", getAllClients)');
    $('#button_cancel').prop('disabled', false);
    $('#table').append(
        `<tr class="changeable-table-part">
            <td><input class="input-field" type="text" name="name" form="form_post"></td>
            <td><input class="input-field" type="text" name="company" form="form_post"></td>
            <td><input class="input-field" type="text" name="phone_number" form="form_post"></td>
        </tr>`);
}

function updateClient(tableIndex, clientIndex)
{
    getAllClients();
    $('#button_save').prop('disabled', false);
    $('#button_save').attr('onclick', 'save("commands/updateclient.php", getAllClients)');
    $('#button_cancel').prop('disabled', false);

    $('#table tr').eq(tableIndex).each( //или не каждый
    function()
    {
        let td = $(this).find('td')
        td.eq(0).html(`<input class="input-field" type="text" name="name" form="form_post" 
            value="${td.eq(0).text()}">`);
        
        td.eq(0).append(`<input class="input-field" type="hidden" name="clientID" 
            value="${clientIndex}" form="form_post">`);

        td.eq(1).html(`<input class="input-field" type="text" name="company" form="form_post" 
            value="${td.eq(1).text()}">`);
        
        td.eq(2).html(`<input class="input-field" type="text" name="phone_number" form="form_post" 
            value="${td.eq(2).text()}">`);
        
    }); 
}

function deleteClient(tableIndex, clientIndex)
{
    getAllClients();
    $('#table tr').eq(tableIndex).find('td:lt(3)').css({'background': '#FFB6B6'});

    if (confirm('Удалить выбранную запись?'))
    {
        $('#table tr').eq(tableIndex).find('td').eq(0).append(`<input type="hidden" name="clientID" 
            value="${clientIndex}" form="form_post">`);
        save('commands/deleteclient.php', getAllClients);
    }
    else
    {
        getAllClients();
    } 
}

function getAllPurchases()
{
    $('.buttons-area').html('');
    $.ajax
    (
        {
            url: '/commands/allpurchases.php',
            method: 'get',
            async: false,
            success: function(data)
            {
                $('#table').html(data);
                $('#button_add_area').append(`<button id="button_add" onclick="addPurchase()">Добавить</button>`);
                $('#button_save_area').append(`<button id="button_save" onclick="save()" disabled>Сохранить</button>`);
                $('#button_cancel_area').append(`<button id="button_cancel" onclick="getAllPurchases()" disabled>Отмена</button>`);
            }
        }
    )
    return false;
}

function addPurchase()
{
    getAllPurchases();
    $('#button_add').prop('disabled', true);
    $('#button_save').prop('disabled', false);
    $('#button_save').attr('onclick', 'save("commands/addnewpurchase.php", getAllPurchases)');
    $('#button_cancel').prop('disabled', false);

    let valuesForPurchase;
    $.ajax
    (
        {
            url: '/commands/productsforchange.php',
            method: 'get',
            async: false,
            dataType: 'json',
            success: function(data)
            {
                console.log(data);
                valuesForPurchase = data;
            }
        }
    );

    console.log(valuesForPurchase)
    let products = '';
    let price = '';
    for (let row of valuesForPurchase)
    {
        products += `<option value="${row[0]}">${row[1]}</option>`
    }
    //alert(products)

    $('#table').append(
        `<tr class="changeable-table-part">
            <td>
                <select class="input-field" id="select" form="form_post">
                    ${products}
                </select>
            </td>
            <td><input class="input-field" type="date" name="date" form="form_post"></td>
            <td><input class="input-field" type="number" name="price" form="form_post">
            
            </td>
            <td><input class="input-field" type="number" name="count" form="form_post"></td>
            <td><input class="input-field" type="text" name="unit" form="form_post"></td>
            <td><input class="input-field" type="number" name="amount_price" form="form_post"></td>
        </tr>`);

        $("#select").on("change", function() {
            alert('123');
        }); 
}







function getAllSales()
{
    $('#add').html('');
    $.get('commands/allsales.php', function(data)
    {
        document.getElementById('table').innerHTML = 
            '<tr><th>Товар</th><th>Количество</th><th>Дата</th><th>Цена</th><th>Общая сумма</th></tr>' +  data;
    });
    $('#add').html(
        `<form action="commands/addnewsale.php" method="post">
            <p>Количество</p>
            <input type="number" name="count">
            <p>Дата</p>
            <input type="date" name="date">
            <p>Цена</p>
            <input type="number" name="phone_number">
            <p>Общая сумма</p>
            <input type="number" name="amount_price">
            <button type="submit">Добавить</button>
        </form>`);
    return false;
}


function getAllProducts()
{
    $('#add').html('');
    $.get('commands/allproducts.php', function(data)
    {
        document.getElementById('table').innerHTML = 
            '<tr><th>Товар</th><th>Цена закупки</th><th>Цена продажи</th><th>Количество</th></tr>' +  data;
    });
    return false;
}


function getAnalytics()
{
    google.load("visualization", "1", {packages:["corechart"]});
    google.setOnLoadCallback(drawChart);
    function drawChart() 
    {
        var data = google.visualization.arrayToDataTable([
        ['Петров А.П', 12],
        ['Иванов С.П.', 5],
        ['Васильев И.С.', 3],
        ['Иванов И.И.', 6]
        ]);
        var options = {
        title: 'Количество сделок за месяц',
        is3D: true,
        pieResidueSliceLabel: 'Остальное'
    };
    var chart = new google.visualization.PieChart(document.getElementById('table_area'));
     chart.draw(data, options);
    }
}