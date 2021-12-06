var chai = require('chai'); 
var expect = chai.expect;

const { publisherSubscriber } = require('../../src/app/observer.patterns'); 

describe("index test", function(){

    it('test size', function() {

        var subscriptionID1 = publisherSubscriber.subscribe("mouseClicked", function(data) {
            console.log("I am Bob's callback function for a mouse clicked event and this is my event data: " + JSON.stringify(data));
        });
        
        var subscriptionID2 = publisherSubscriber.subscribe("mouseHovered", function(data) {
            console.log("I am Bob's callback function for a hovered mouse event and this is my event data: " + JSON.stringify(data));
        });
        
        var subscriptionID3 = publisherSubscriber.subscribe("mouseClicked", function(data) {
            console.log("I am Alice's callback function for a mouse clicked event and this is my event data: " + JSON.stringify(data));
        });

        publisherSubscriber.publish("mouseClicked", {"data": "data1"});
        publisherSubscriber.publish("mouseHovered", {"data": "data2"});

        publisherSubscriber.unsubscribe("mouseClicked", subscriptionID3);

        publisherSubscriber.publish("mouseClicked", {"data": "data1"});
        publisherSubscriber.publish("mouseHovered", {"data": "data2"});
          
    })

})