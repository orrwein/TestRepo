exports.handler = (event, context, callback) => {

    var time = require('time');
    var currentTime = new time.Date();

    currentTime.setTimezone("America/Los_Angeles");


    exports.handler = (event, context, callback) => {
    // TODO implement
    callback(null, {
        statusCode: '200',
        body: 'The time in Los Angeles is: ' + currentTime.toString(),
    });
};
};
