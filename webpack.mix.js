const mix = require('laravel-mix')

mix
    .js('src/cookie-banner.js', 'dist/cookie-banner.js')
    .sass('src/cookie-banner.scss', 'dist/cookie-banner.css');
