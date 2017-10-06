/* globals $ */

const loader = window.loader;
const modals = window.modals;
const http = window.http;
const templates = window.templates;

((scope) => {
    const $pagePlaceholder = $('#page-placeholder');

    const initial = () => {
        const url = window.baseUrl + 'home';
        Promise.all([http.get(url), templates.getPage('home')]);
    };

    scope.home = {
        initial
    };
})(window.controllers = window.controllers || {});