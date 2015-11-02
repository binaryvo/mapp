<html lang="en">
<head>
    <title></title>
    <script data-main="js/init" src="{{ URL::asset('js/libs/require.js') }}"></script>
    <link rel="stylesheet" href="{{ URL::asset('css/bootstrap.min.css') }}" />
</head>
<body>


<div id="app" class="container-fluid"></div>

<table id="all_users_table" class="table">
    <thead>
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th></th>
            <th></th>
        </tr>
    </thead>
</table>


<script id="userTpl" type="text/template">
    <td><%= id %></td>
    <td><%= name %></td>
    <td><%= email %></td>
    <td><button>Edit</button></td>
    <td><button class="delete">Delete</button></td>
</script>

</body>
</html>