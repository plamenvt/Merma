const http = window.http;
const handlebars = window.handlebars || window.Handlebars;

((scope) => {
    scope.templates = {
        getByUrl(url) {
            return http.get(url)
                .then((templateHtml) => {
                    const templateFunc = handlebars.compile(templateHtml);
                    return templateFunc;
                });
        },
        getPage(name) {
            const url = `/static/pages/${name}/${name}.html`;
            return this.getByUrl(url);
        }
    };
})(window);