var singleton = (function() {
    // private singleton value which gets initialized only once
    var config;

    function initializeConfiguration(values){
        this.randomNumber = Math.random();
        values = values || {};
        this.number = values.number || 5;
        this.size = values.size || 10;
    }

    // we export the centralized method for retrieving the singleton value
    return {
        getConfig: function(values) {
            // we initialize the singleton value only once
            if (config === undefined) {
                config = new initializeConfiguration(values);
            }

            // and return the same config value wherever it is asked for
            return config;
        }
    };
})();
module.exports.singleton = singleton;