let mix = require('laravel-mix');

mix.setPublicPath('public');
mix.disableNotifications();

mix.js('resources/js/app.js', 'public/js/app.js').react();
