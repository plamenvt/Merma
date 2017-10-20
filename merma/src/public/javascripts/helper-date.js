import moment from 'moment';


const DateFormats = {
    short: "MMMM DD, YYYY",
    long: "dddd DD.MM.YYYY HH:mm"
};

const dateFormatter = {
    do() {
        Handlebars.registerHelper("formatDate", function (datetime, format) {
            if (moment) {
                format = DateFormats[format] || format;
                return moment(datetime).format(format);
            }
            else {
                return datetime;
            }
        });
    }
};

export { dateFormatter };