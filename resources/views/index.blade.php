<html lang="en">
<head>
    <title></title>
    <script src="{{ URL::asset('js/underscore-min.js') }}"></script>
    <script src="{{ URL::asset('js/jquery-1.11.3.min.js') }}"></script>
    <script src="{{ URL::asset('js/backbone-min.js') }}"></script>
    <script src="{{ URL::asset('js/backbone.marionette.min.js') }}"></script>

    <link rel="stylesheet" href="{{ URL::asset('css/bootstrap.min.css') }}" />
</head>
<body>


<div id="app"></div>

<table id="all_users_table">
    <thead>
        <tr>Name</tr>
        <tr>Email</tr>
    </thead>
</table>

<script type="text/javascript" src="{{ URL::asset('js/app/backbone/app.js') }}" ></script>

<script id="userTpl" type="text/template">
    <td>name</td>
    <td>email</td>
</script>

<script type="text/javascript">
    new App.Router();

    Backbone.history.start();

    App.users = new App.Collections.Users();
    App.users.fetch().then(function() {
        new App.Views.App({collection: App.users});
    });
</script>

</body>
</html>