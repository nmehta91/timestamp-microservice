'use strict'

var moment = require('moment');

module.exports = function(app) {
    app.get('/:query', function(request, response) {
        var date = request.params.query;
        var unix = null;
        var natural = null;
        
        if(typeof +date === "number"){
            unix = +date;
            natural = unixToNatural(unix);
        }
        
        if(isNaN(+date) && moment(date, "MMMM D, YYYY").isValid()){
            unix = naturalToUnix(date);
            natural = unixToNatural(unix);
        }
        
        var dateJSON = {
          "unix": unix,
          "natural": natural
        };
       
       response.send(JSON.stringify(dateJSON));
    });
    
    function naturalToUnix(ndate){
        return moment(ndate, "MMMM D, YYYY").format("X");
    }
    
    function unixToNatural(xdate){
        return moment.unix(xdate).format("MMMM D, YYYY");
    }
}