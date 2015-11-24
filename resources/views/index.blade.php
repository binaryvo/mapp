<html lang="en">
<head>
    <title></title>
    <script data-main="js/init" src="{{ URL::asset('js/libs/require.js') }}"></script>
    <link rel="stylesheet" href="{{ URL::asset('css/bootstrap.min.css') }}" />
</head>
<body>

<div class="container">

    <!-- navigation -->
    <nav class="navbar navbar-inverse">
        <ul class="nav navbar-nav">
            <li><a href="#">View All Users</a></li>
            <li><a href="#add">Create a User</a>
        </ul>
    </nav>

    <!-- application content container -->
    <div id="app" class="container-fluid"></div>

    <!-- user add form container -->
    <div id="user-add-container" class="user-add" style="display:none">
        <form id="form-user" class="form-horizontal">
            <div class="form-group">
                <label class="control-label col-sm-1" for="input-name">Name</label>
                <div class="col-sm-4">
                    <input class="form-control" type="text" name="name" id="input-name" />
                </div>
            </div>
            <div class="form-group">
                <label class="control-label col-sm-1"  for="input-email">Email</label>
                <div class="col-sm-4">
                    <input type="text" class="form-control" name="email" id="input-email" />
                </div>
            </div>
            <div class="col-sm-10 pull-right">
                <input type="button" value="Cancel" class="btn btn-cancel" />
                <input type="submit" value="Add User" class="btn btn-primary" />
            </div>
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

<!-- user list template -->
<script id="userTpl" type="text/template">
    <td><%= id %></td>
    <td><%= name %></td>
    <td><%= email %></td>
    <td><button class="btn btn-small btn-info edit">Edit</button></td>
    <td><button class="btn btn-small btn-danger delete">Delete</button></td>
</script>

<!-- user edit template -->
<script id="userEditTpl" type="text/template">
    <form id="form-user-edit" class="form-horizontal">
        <div class="form-group control-group">
            <label class="control-label col-sm-1" for="input-name">Name</label>
            <div class="col-sm-4">
                <input type="text" class="form-control" name="name" value="<%= name %>" />
            </div>
        </div>
        <div class="form-group control-group">
            <label class="control-label col-sm-1" for="input-email">Email</label>
            <div class="col-sm-4">
                <input type="text" class="form-control" name="email" value="<%= email %>" />
            </div>
        </div>

        <div class="col-sm-10 pull-right">
            <input type="button" value="Cancel" class="btn btn-cancel" />
            <input type="submit" value="Update User" class="btn btn-primary" />
        </div>
    </form>
</script>

<script type="text/template" id="confirmation-dialog">
    <div class="modal fade" id="confirmation-window">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    Confirmation
                </div>
                <div class="modal-body">
                    <%= text %>
                </div>
                <div class="modal-footer">
                    <button type="button" data-dismiss="modal" class="btn btn-primary button-yes">Yes</button>
                    <button type="button" data-dismiss="modal" class="btn">No</button>
                </div>
            </div>
        </div>
    </div>
</script>

<div id="modal-container" class="modal fade" style="display:none">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                <h4 class="modal-title"><%= title %></h4>
            </div>
            <div class="modal-body">
                <%= content %>
            </div>
            <div class="modal-footer">
            </div>
        </div>
    </div>
</div>

</body>
</html>