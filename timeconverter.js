
/** Checks if given string is natural language date or unixtime
 *  returns an object containing date and unixtime corresponding
 *  to that time. */
var TimeConverter = function() {
    
    this.onlyNum = /^\d+$/;
    
    var months = ["January", "February", "March", "April",
    "May", "June", "July", "August", "September", "October",
    "November", "December"];
    
    var getNatural = function(date) {
        var day = date.getDate();
        var year = date.getFullYear();
        var month = months[date.getMonth()];
        var natural = month + " " + day + ", " + year;
        return natural;
    };
    
    /** Converts unixtime or natural date to both unixtime and a natural date.*/
    this.convert = function(str) {
        var res = {unix: null, natural: null};
        if (this.onlyNum.test(str)) {
            var unix = parseInt(str);
            var date = new Date(parseInt(str));
            
            res.natural = getNatural(date);
            res.unix = unix;
        }
        else {
            if (/^[a-zA-Z]/.test(str)) { // Verify first letter
                var value = Date.parse(str);
                if (!isNaN(value)) {
                    res.unix = value;
                    var date = new Date(value);
                    res.natural = getNatural(date);
                } 
            }
        }
        return res;
    };

};

module.exports = TimeConverter;