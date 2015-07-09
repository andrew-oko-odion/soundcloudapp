
$(document).ready(function() {
    $.ajax({
        url: "http://api.soundcloud.com/users/3207.json?client_id=YOUR_CLIENT_ID"
    }).then(function(data) {
       $('.user').append(data.id);
       $('.msg').append(data.country);
       $('.park').append(data.full_name); 
	
	$('.user').append(data.id);
       $('.msg').append(data.country);  
       $('.park').append(data.full_name);

	$('.user').append(data.id);
       $('.msg').append(data.country);  
       $('.park').append(data.full_name);


	$('.user').append(data.id);
       $('.msg').append(data.country);  
       $('.park').append(data.full_name);

    });

});


