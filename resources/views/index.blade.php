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


<script type="text/javascript" src="{{ URL::asset('js/app/backbone/app.js') }}" ></script>

<script type="text/javascript">
    new App.Router();

    Backbone.history.start();

    App.users = new App.Collections.Users();
    App.users.fetch().then(function() {
        new App.Views.User({collection: App.users});
    });
</script>

</body>
</html>