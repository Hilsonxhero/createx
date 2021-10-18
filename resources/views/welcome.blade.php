<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Laravel</title>


    <link rel="stylesheet" href="{{ mix('css/app.css') }}"/>
   <script>
       window.csrf_token = '{{csrf_token()}}'
   </script>
    @auth
        <script>

            window.user = {
                id: '{{auth('sanctum')->user()->id}}',
                name: '{{auth('sanctum')->user()->name}}',
                username: '{{auth('sanctum')->user()->username}}',
                profile_src: '{{auth('sanctum')->user()->profile_src}}',
                phone: '{{auth('sanctum')->user()->phone}}',
                email: '{{auth('sanctum')->user()->email}}',
                isVerified: {{auth('sanctum')->user()->email_verified_at == null ? 1 :2}}
            }
        </script>
    @endauth

</head>
<body class="antialiased">

<div id="app">
    <v-app>
        <router-view></router-view>
    </v-app>
</div>
<script src="{{ mix('js/app.js') }}"></script>
</body>
</html>
