define(['./Base', 'bootstrap'], function (Base, Bootstrap) {
    var mCheckout = new Base('This is the data for Page Checkout');

	/**
	 * =================
	 * FUNCTIONS
	 * =================
	 */
	function getCityState(results) {
        var a = results[0].address_components;
        var city, state;
        for(i = 0; i <  a.length; ++i)
        {
           var t = a[i].types;
           if(compIsType(t, 'administrative_area_level_1'))
              state = a[i].long_name; //store the state
           else if(compIsType(t, 'locality'))
              city = a[i].long_name; //store the city
        }
        return (city + ', ' + state)
    }

	function compIsType(t, s) { 
       for(z = 0; z < t.length; ++z) 
          if(t[z] == s)
             return true;
       return false;
    }

	/**
	 * =================
	 * EVENTS
	 * =================
	 */

	/**
	 * =================
	 * TO EXECUTE WHEN INIT
	 * =================
	 */

    $(document).ready( function() {
		// Init popover
		$('[data-toggle="popover"]').popover({
			trigger: 'hover',
			html: true
		});


    });

    return mCheckout;
});