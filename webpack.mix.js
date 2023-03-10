const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
    .js('resources/js/ajax.js', 'public/js')
    .js('resources/js/jquery.js', 'public/js')
    .js('resources/js/bootstrap.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css')
    .sass('resources/sass/style/style.scss', 'public/css')
    .sourceMaps();

if (mix.inProduction()) {
    mix.version();
}

mix.browserSync('127.0.0.1:8000')
