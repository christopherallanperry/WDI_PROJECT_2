"use strict";var photoWalk=photoWalk||{},google=google;photoWalk.home=function(e){e&&e.preventDefault(),this.$main.html('\n    <div class="imagebackdrop">\n      <h1>Welcome to our Humble Home Page</h1>\n      <p>We hope you\'ll enjoy your stay here and choose to hang out a while</p>\n    </div\n    ')},photoWalk.adminTemplate=function(){var e='\n    <div class="admin-content">\n      <nav class="pure-menu admin-menu">\n        <h3 class="menu-heading">Admin Menu</h3>\n        <ul class="pure-menu-list">\n          <li class="pure-menu-item"><a href="#" class="pure-menu-link landmark-admin">Edit Landmarks</a></li>\n          <li class="pure-menu-item"><a href="#" class="pure-menu-link walk">Edit Walks</a></li>\n          <li class="pure-menu-item"><a href="#" class="pure-menu-link user">Edit Users</a></li>\n        </ul>\n      </nav>\n      <section class="admin-body">\n        <h1>Welcome to the admin section</h1>\n      </section>\n    </div>\n    ';this.$main.html(e)},photoWalk.register=function(e){e&&e.preventDefault;var a="\n    <h2>Register</h2>\n    ",n='\n    <form class="pure-form" method="post" action="/register">\n      <div class="form-group">\n        <label for="username">Enter your username: </label>\n        <input id="username" class="form-control" type="text" name="user[username]" placeholder="Username">\n      </div>\n      <div class="form-group">\n        <label for="email">Enter an email address: </label>\n        <input id="email" class="form-control" type="email" name="user[email]" placeholder="Email">\n      </div>\n      <div class="form-group">\n        <label for="email">Enter a password: </label>\n        <input class="form-control" type="password" name="user[password]" placeholder="Password">\n      </div>\n      <div class="form-group">\n        <label for="password_conf">Enter the password again: </label>\n        <input id="password_conf" class="form-control" type="password" name="user[passwordConfirmation]" placeholder="Password Confirmation">\n      </div>\n      <input class="pure-button pure-button-primary" type="submit" value="Register">\n    </form>\n    ',t='\n    <p>Made with <span class="redheart">&hearts;</span> at <a href="https://generalassemb.ly/locations/london">GA</a> in London</p>\n    ';photoWalk.modalTemplate(a,n,t)},photoWalk.login=function(e){e&&e.preventDefault();var a="\n    <h2>Login</h2>\n    ",n='\n    <form class="pure-form" method="post" action="/login">\n      <div class="form-group">\n        <label for="email">Enter your registered email address: </label>\n        <input id="email" class="form-control" type="email" name="email" placeholder="Email">\n      </div>\n      <div class="form-group">\n        <label for="password">Enter your password: </label>\n        <input id="password" class="form-control" type="password" name="password" placeholder="Password">\n      </div>\n      <input class="pure-button pure-button-primary" type="submit" value="Login">\n    </form>\n    ',t='\n    <p>Made with <span class="redheart">&hearts;</span> at <a href="https://generalassemb.ly/locations/london">GA</a> in London</p>\n    ';photoWalk.modalTemplate(a,n,t)},photoWalk.landmarkCreate=function(e){e&&e.preventDefault(),$.ajax({method:"POST",url:"http://localhost:3000/api/landmarks",beforeSend:photoWalk.setRequestHeader.bind(photoWalk)});var a="\n    <h2>Register</h2>\n    ",n='\n    <form class="pure-form" method="post" action="/create">\n\n      <div class="form-group">\n        <label for="landmarkName">Enter a name for the new landmark: </label>\n        <input id="landmarkName" class="form-control" type="text" name="landmark[name]" placeholder="Landmark name">\n      </div>\n\n      <div class="form-group">\n        <label for="landmarkAddress">Enter an address: </label>\n        <input id="landmarkAddress" class="form-control" type="text" name="landmark[address]" placeholder="Postal address">\n      </div>\n\n      <div class="form-group">\n        <label for="landmarkPostcode">Enter a postcode: </label>\n        <input id="landmarkPostcode" class="form-control" type="text" name="landmark[postcode]" placeholder="Postcode">\n      </div>\n\n      <div class="form-group">\n        <label for="landmarkBuildDate">Add a build date (if known): </label>\n        <input id="landmarkBuildDate" class="form-control" type="text" name="landmark[buildDate]" placeholder="Add a build date">\n      </div>\n\n      <div class="form-group">\n        <label for="landmarkListed">Listed building status (if known): </label>\n        <input id="landmarkListed" class="form-control" type="text" name="landmark[listed]" placeholder="Add listed building status">\n      </div>\n\n      <div class="form-group">\n        <label for="landmarkPublicAccess">Level of public access available: </label>\n        <input id="landmarkPublicAccess" class="form-control" type="text" name="landmark[publicaccess]" placeholder="Level of Public Access available">\n      </div>\n\n      <div class="form-group">\n        <label for="landmarkNearestTube">Add nearest tube station: </label>\n        <input id="landmarkNearestTube" class="form-control" type="text" name="landmark[nearestTube]" placeholder="Add nearest tube station">\n      </div>\n\n      <div class="form-group">\n        <label for="landmarkWebsite">Add website URL (if available): </label>\n        <input id="landmarkWebsite" class="form-control" type="text" name="landmark[website]" placeholder="Add website URL">\n      </div>\n\n      <div class="form-group">\n        <label for="landmarkImage">Add image file name: </label>\n        <input id="landmarkImage" class="form-control" type="text" name="landmark[image]" placeholder="Add image file name">\n      </div>\n\n      <div class="form-group">\n        <label for="landmarkDesc">Add a description for the landmark: </label>\n        <input id="landmarkDesc" class="form-control" type="textarea" name="landmark[description]" placeholder="Add a description for the landmark">\n      </div>\n\n      <div class="form-group">\n        <label for="landmarkLat">Add a Google LAT coordinate for the landmark: </label>\n        <input id="landmarkLat" class="form-control" type="text" name="landmark[lat]" placeholder="Add a Google LAT coordinate for the landmark">\n      </div>\n\n      <div class="form-group">\n        <label for="landmarkLng">Add a Google LNG coordinate for the landmark: </label>\n        <input id="landmarkLng" class="form-control" type="text" name="landmark[lng]" placeholder="Add a Google LNG coordinate for the landmark">\n      </div>\n\n      <input class="pure-button pure-button-primary" type="submit" value="Save Landmark">\n    </form>\n    ',t='\n    <p>Made with <span class="redheart">&hearts;</span> at <a href="https://generalassemb.ly/locations/london">GA</a> in London</p>\n    ';photoWalk.modalTemplate(a,n,t)},photoWalk.landmarkIndex=function(e){var a=this;e&&e.preventDefault(),$.ajax({method:"GET",url:"http://localhost:3000/api/landmarks",beforeSend:photoWalk.setRequestHeader.bind(photoWalk)}).done(function(e){var n="";$.each(e.landmarks,function(e,t){n+='\n        <tr id="'+t._id+'">\n          <td>'+(e+1)+'</td>\n          <td><a href="'+a.apiUrl+"/landmarks/"+t._id+'">'+t.name+"</a></td>\n          <td>"+t.address+". "+t.postcode+'.</td>\n          <td><a href="'+t.website+'">'+t.website+'</a></td>\n          <td><button class="button-warning pure-button"><i class="fa fa-pencil fa-fw"></button></i></td>\n          <td><button class="button-error pure-button"><i class="fa fa-trash-o fa-fw"></button></td>\n        </tr>\n      '});var t='\n      <h2 class="admin-header">Landmark Administration</h2>\n      <table class="pure-table pure-table-bordered">\n        <thead>\n          <tr>\n            <th>#</th>\n            <th>Name</th>\n            <th>Address & Postcode</th>\n            <th>Website</th>\n            <th>Edit</th>\n            <th>Delete</th>\n          </tr>\n        </thead>\n        <tbody>'+n+"</tbody>\n      </table>\n      ";$(".admin-body").html(t)})},photoWalk.landmarkEdit=function(e){e&&e.preventDefault()},photoWalk.AutocompleteDirectionsHandler=function(){this.originPlaceId=null,this.destinationPlaceId=null,this.originInput=document.getElementById("origin-input"),this.destinationInput=document.getElementById("destination-input"),this.directionsService=new google.maps.DirectionsService,this.directionsDisplay=new google.maps.DirectionsRenderer,this.directionsDisplay.setMap(this.map),this.originAutocomplete=new google.maps.places.Autocomplete(this.originInput,{placeIdOnly:!0}),this.destinationAutocomplete=new google.maps.places.Autocomplete(this.destinationInput,{placeIdOnly:!0}),this.setupAutocompletePlaceChangedListener(this.originAutocomplete,"ORIG"),this.setupAutocompletePlaceChangedListener(this.destinationAutocomplete,"DEST")},photoWalk.setupAutocompletePlaceChangedListener=function(e,a){var n=this;e.bindTo("bounds",n.map),e.addListener("place_changed",function(){var t=e.getPlace();return t.place_id?void("ORIG"===a?n.originPlaceId=t.place_id:n.destinationPlaceId=t.place_id):void window.alert("Please select an option from the dropdown list.")})},photoWalk.route=function(waypoints,name){var self=this;if(!self.originPlaceId||!self.destinationPlaceId)return void console.log("No originPlaceId, destinationPlaceId");for(var waypts=[],i=0;i<waypoints.length;i++){var tmp=eval(waypoints[i]);waypts.push({location:{lng:tmp[0],lat:tmp[1]},stopover:!0})}self.directionsService.route({origin:{placeId:self.originPlaceId},destination:{placeId:self.destinationPlaceId},travelMode:"WALKING",waypoints:waypts,optimizeWaypoints:!0},function(e,a){"OK"===a?self.directionsDisplay.setDirections(e):window.alert("Directions request failed due to "+a)});var walk={walkName:name,origin:self.originPlaceId,destination:self.destinationPlaceId,wayPoints:waypoints};return photoWalk.ajaxRequest("/api/walks","post",{walk:walk},function(e){console.log(e)})},photoWalk.makeRoute=function(e){e&&e.preventDefault(),photoWalk.$modalContainer.css("display","none"),photoWalk.$modalContainer.html("");var a=$(e.target).find("#name").val(),n=$(e.target).find('input[name="waypoints"]:checked').map(function(){return $(this).val()}).toArray();photoWalk.route(n,a)},photoWalk.createRoute=function(e){e&&e.preventDefault(),$.ajax({method:"GET",url:"http://localhost:3000/api/landmarks",beforeSend:photoWalk.setRequestHeader.bind(photoWalk)}).done(function(e){var a="";$.each(e.landmarks,function(e,n){a+='<label class="check-waypoint"><input name="waypoints" type="checkbox" value="['+n.lng+", "+n.lat+']"> - '+n.name+"<br>"});var n="<h2>Create a Route</h2>",t='\n      <form id="makeRoute" class="pure-form pure-form-stacked">\n        <fieldset class="form-fields">\n          <div class="form-group">\n            <label for="name">Add a name for your new route: </label>\n            <input id="name" class="form-control" type="text" name="name" placeholder="Add route name">\n          </div>\n          <div class="form-group">\n            <input id="origin-input" class="controls" type="text" placeholder="Enter an origin location">\n          </div>\n          <div class="form-group">\n            <input id="destination-input" class="controls" type="text" placeholder="Enter a destination location">\n          </div>\n          <div class="form-group">\n            <label for="waypoints">Enter your chosen waypoints: </label>\n            '+a+'\n          </div>\n          <input class="pure-button pure-button-primary" type="submit" value="Create Route">\n        </fieldset>\n      </form>\n      ',o='\n      <p>Made with <span class="redheart">&hearts;</span> at <a href="https://generalassemb.ly/locations/london">GA</a> in London</p>';photoWalk.modalTemplate(n,t,o),photoWalk.AutocompleteDirectionsHandler()})},photoWalk.plotRoute=function(e){var _this2=this;e.preventDefault(),$.ajax({method:"GET",url:$(e.target).attr("href"),beforeSend:photoWalk.setRequestHeader.bind(photoWalk)}).done(function(data){for(var walk=data.walk,waypts=[],i=0;i<walk.wayPoints.length;i++){var tmp=eval(walk.wayPoints[i]);waypts.push({location:{lng:tmp[0],lat:tmp[1]},stopover:!0})}_this2.directionsService=new google.maps.DirectionsService,_this2.directionsDisplay=new google.maps.DirectionsRenderer,_this2.directionsDisplay.setMap(_this2.map),photoWalk.directionsService.route({origin:{placeId:walk.origin},destination:{placeId:walk.destination},travelMode:"WALKING",waypoints:waypts,optimizeWaypoints:!0},function(e,a){"OK"===a?(console.log("Response is: ",e),photoWalk.directionsDisplay.setDirections(e)):window.alert("Directions request failed due to "+a)})})},photoWalk.availableRouteMenu=function(e){e&&e.preventDefault();var a="http://localhost:3000/api/walks",n="GET";$.ajax({method:n,url:a,beforeSend:photoWalk.setRequestHeader.bind(photoWalk)}).done(function(e){var n="";$.each(e.walks,function(e,t){n+='<li class="pure-menu-item"><a href="'+a+"/"+t._id+'" class="pure-menu-link plotRoute">'+t.walkName+"</a></li>"}),$("#walk-menu").html(n)})},photoWalk.logout=function(e){e.preventDefault(),this.removeToken(),this.loggedOutState()},photoWalk.loggedInState=function(){$(".loggedIn").show(),$(".loggedOut").hide(),this.$main.html('<div id="map-canvas"></div>'),this.setupMap(),photoWalk.availableRouteMenu()},photoWalk.loggedOutState=function(){$(".loggedIn").hide(),$(".loggedOut").show(),this.$main.html('<div id="map-canvas"></div>'),this.setupMap()},photoWalk.removeToken=function(){return window.localStorage.clear()},photoWalk.handleForm=function(e){if(e.preventDefault(),"makeRoute"!==$(this).attr("id")){var a=""+photoWalk.apiUrl+$(this).attr("action"),n=$(this).attr("method"),t=$(this).serialize();return photoWalk.ajaxRequest(a,n,t,function(e){e.token&&(photoWalk.setToken(e.token),photoWalk.loggedInState(),photoWalk.$modalContainer.css("display","none"),photoWalk.$modalContainer.html(""))})}},photoWalk.ajaxRequest=function(e,a,n,t){return $.ajax({url:e,method:a,data:n,beforeSend:this.setRequestHeader.bind(this)}).done(t).fail(function(e){console.log(e)})},photoWalk.setRequestHeader=function(e){return e.setRequestHeader("Authorization","Bearer "+this.getToken())},photoWalk.setToken=function(e){return window.localStorage.setItem("token",e)},photoWalk.getToken=function(){return window.localStorage.getItem("token")},photoWalk.addInfoWindowForLandmark=function(e,a){var n=this,t="";google.maps.event.addListener(a,"click",function(){"undefined"!=typeof n.infoWindow&&n.infoWindow.close(),t=e.website?"\n      <a href='"+e.website+"'>\n        <h3>"+e.name+"</h3>\n      </a>\n      ":"<h3>"+e.name+"</h3>",n.infoWindow=new google.maps.InfoWindow({content:"\n      <img src='../images/"+e.file+"' alt='"+e.name+"'>\n      "+t+"\n      <p>"+e.address+"</p>\n      <p>"+e.postcode+"</p>\n      "}),n.infoWindow.open(n.map,a)})},photoWalk.createMarkerForLandmark=function(e){var a=new google.maps.LatLng(e.lat,e.lng),n=new google.maps.Marker({position:a,map:this.map,animation:google.maps.Animation.DROP});this.addInfoWindowForLandmark(e,n)},photoWalk.loopThroughLandmarks=function(e){$.each(e.landmarks,function(e,a){setTimeout(function(){photoWalk.createMarkerForLandmark(a)},50*e)})},photoWalk.getLandmarks=function(){$.ajax({method:"GET",url:"http://localhost:3000/api/landmarks",beforeSend:photoWalk.setRequestHeader.bind(photoWalk)}).done(this.loopThroughLandmarks)},photoWalk.modalTemplate=function(e,a,n){var t='\n    <div class="modal-content">\n      <span class="close">&times;</span>\n      <div class="modal-header">'+e+'</div>\n      <div class="modal-body">'+a+'</div>\n      <div class="modal-footer">'+n+"</div>\n    </div>\n    ";this.$modalContainer.html(t),photoWalk.callModal()},photoWalk.callModal=function(){this.$modalContainer.css("display","block"),$(".close").on("click",function(){photoWalk.$modalContainer.css("display","none"),photoWalk.$modalContainer.html("")}),$(window).on("click",function(e){e.target.className===photoWalk.$modalContainer[0].className&&(photoWalk.$modalContainer.css("display","none"),photoWalk.$modalContainer.html(""))})},photoWalk.setupMap=function(){var e=document.getElementById("map-canvas"),a={zoom:15,center:new google.maps.LatLng(51.516026,(-.062226)),mapTypeId:google.maps.MapTypeId.ROADMAP};this.map=new google.maps.Map(e,a),this.getToken()&&this.getLandmarks()},photoWalk.init=function(){this.apiUrl="http://localhost:3000/api",this.$main=$("main"),this.$modalContainer=$("#modal"),this.setupMap(),$(".home").on("click",this.setupMap.bind(this)),$(".register").on("click",this.register.bind(this)),$(".login").on("click",this.login.bind(this)),$(".logout").on("click",this.logout.bind(this)),$(".createLandmark").on("click",this.landmarkCreate.bind(this)),$(".createRoute").on("click",this.createRoute.bind(this)),$(".admin").on("click",this.adminTemplate.bind(this)),$(".modal").on("submit","#makeRoute",this.makeRoute.bind(this)),$("body").on("click",".landmark-admin",this.landmarkIndex.bind(this)),$("body").on("click",".plotRoute",this.plotRoute.bind(this)),this.$main.on("submit","form",this.handleForm),this.$modalContainer.on("submit","form",this.handleForm),this.getToken()?this.loggedInState():this.loggedOutState()},$(photoWalk.init.bind(photoWalk));