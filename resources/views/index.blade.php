<html lang="en">
<head>
    <title></title>
    <script data-main="js/init" src="{{ URL::asset('js/libs/require.js') }}"></script>
    <link rel="stylesheet" href="{{ URL::asset('css/bootstrap.min.css') }}" />
</head>
<body>

<div class="container">

    <nav class="navbar navbar-inverse">
        <ul class="nav navbar-nav">
            <li><a href="#">View All Users</a></li>
            <li><a href="#add">Create a User</a>
        </ul>
    </nav>


    <div id="app" class="container-fluid"></div>

    <div id="user-add-container" class="user-add" style="display:none">
        <form id="form-user">
            <div class="form-group">
                <label for="input-name">Name</label>
                <input type="text" name="name" id="input-name" />
            </div>
            <div class="form-group">
                <label for="input-email">Email</label>
                <input type="text" name="email" id="input-email" />
            </div>
            <input type="submit" value="Add User" class="btn btn-primary" />
        </form>
    </div>

    <div id="user-list-container" style="display:none">
        <table id="all_users_table" class="table">
            <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th class="col-xs-1"></th>
                <th class="col-xs-1"></th>
            </tr>
            </thead>
        </table>
    </div>
</div>


<script id="userTpl" type="text/template">
    <td><%= id %></td>
    <td><%= name %></td>
    <td><%= email %></td>
    <td><button class="btn btn-small btn-info edit">Edit</button></td>
    <td><button class="btn btn-small btn-danger delete">Delete</button></td>
</script>

<script id="userEditTpl" type="text/template">
    <form id="form-user-edit">
        <div class="form-group">
            <label for="input-name">Name</label>
            <input type="text" name="name" value="<%= name %>" />
        </div>
        <div class="form-group">
            <label for="input-email">Email</label>
            <input type="text" name="email" value="<%= email %>" />
        </div>
        <input type="submit" value="Update User" class="btn btn-primary" />
    </form>
</script>

</body>
</html>