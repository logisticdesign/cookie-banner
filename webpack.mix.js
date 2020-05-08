const mix = require('laravel-mix');

mix
    .js('src/cookie-banner.js', 'build/cookie-banner.js')
    .sass('src/cookie-banner.scss', 'build/cookie-banner.css');
