"use strict";var googleMap=googleMap||{},google=google;googleMap.addInfoWindowForLandmark=function(o,a){var n=this;google.maps.event.addListener(a,"click",function(){"undefined"!=typeof n.infoWindow&&n.infoWindow.close(),n.infoWindow=new google.maps.InfoWindow({content:"\n      <img src='../images/"+o.file+"' alt='"+o.name+"'>\n      <a href='"+o.website+"'>\n        <h3>"+o.name+"</h3>\n      </a>\n      <p>"+o.address+"</p>\n      <p>"+o.postcode+"</p>\n      "}),n.infoWindow.open(n.map,a)})},googleMap.createMarkerForLandmark=function(o){var a=new google.maps.LatLng(o.lat,o.lng),n=new google.maps.Marker({position:a,map:this.map,animation:google.maps.Animation.DROP});this.addInfoWindowForLandmark(o,n)},googleMap.loopThroughLandmarks=function(o){$.each(o.landmarks,function(o,a){setTimeout(function(){googleMap.createMarkerForLandmark(a)},50*o)})},googleMap.getLandmarks=function(){$.get("http://localhost:3000/api/landmarks").done(this.loopThroughLandmarks)},googleMap.mapSetup=function(){var o=document.getElementById("map-canvas");console.log(o);var a={zoom:15,center:new google.maps.LatLng(51.516026,(-.062226)),mapTypeId:google.maps.MapTypeId.ROADMAP};this.map=new google.maps.Map(o,a),this.getLandmarks()},$(googleMap.mapSetup.bind(googleMap));