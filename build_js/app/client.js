define(["jquery"],function(e){var t=function(){n()},n=function(){e.ajax({url:"http://localhost/exodus4d/pathfinder/",headers:{foo:"bar"},complete:function(){alert(this.headers.foo)}})};return{getClient:t}});