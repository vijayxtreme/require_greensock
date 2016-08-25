requirejs.config({
    baseUrl: 'lib',
    paths: {
        app: '../app',
        TweenLite:'../lib/greensock'
    }
});

requirejs(['jquery', 'TweenLite', 'app/main']);