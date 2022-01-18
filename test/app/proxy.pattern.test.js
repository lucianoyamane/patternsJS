var chai = require('chai'); 
var expect = chai.expect;

const { GeoProxy } = require('../../src/app/proxy.pattern'); 

describe("index test", function(){

    it('test size', function() {

        var geo = new GeoProxy();

        // geolocation requests

        geo.getLatLng("Paris");
        geo.getLatLng("London");
        geo.getLatLng("London");
        geo.getLatLng("London");
        geo.getLatLng("London");
        geo.getLatLng("Amsterdam");
        geo.getLatLng("Amsterdam");
        geo.getLatLng("Amsterdam");
        geo.getLatLng("Amsterdam");
        geo.getLatLng("London");
        geo.getLatLng("London");

        console.log("\nCache size: " + geo.getCount());
          
    })

})