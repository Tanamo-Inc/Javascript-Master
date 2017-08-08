    // Handling Multiple Requests in Node.js

    function Order(num){

        console.log('Customer order', num);
        Reques(function(){
            console.log('Delivered Success');

        });

    }

    //set time to 5 second.
    function Reques(callback){

        setTimeout(callback,5000);
    }


    //Users Request
    Order(1);
    Order(2);
    Order(3);
    Order(4);
    Order(5);
    Order(6);

