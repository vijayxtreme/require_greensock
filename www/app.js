requirejs.config({
    baseUrl: 'lib',
    paths: {
        app: '../app',
        TweenLite:'greensock',
        CSSPlugin:'cssplugin'
    }
});

requirejs(['jquery', 'TweenLite', 'CSSPlugin', 'app/main']);