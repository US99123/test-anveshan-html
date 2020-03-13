window.onscroll = function() {myFunction()};

var discoverStages = document.getElementById("discover_stages_wrapper_id");
var procureStage = document.getElementById("discover_stages_stages_stage1");
var processStage = document.getElementById("discover_stages_stages_stage2");
var packStage = document.getElementById("discover_stages_stages_stage3");
var sticky = 1050;
var stickyUpperLimit = 4500;
var threshold = 100;
var bgFocusClassName = "bg_focus_circle";
procureStage.classList.add(bgFocusClassName);

function myFunction() {

	var featuresDiv = document.getElementById("features_div_wrapper_id").getBoundingClientRect().top;
	var procure = document.getElementById("processInfo_content_box_procure").getBoundingClientRect().top;
	var myprocess = document.getElementById("processInfo_content_box_process").getBoundingClientRect().top;
	var pack = document.getElementById("processInfo_content_box_pack").getBoundingClientRect().top;
	if (window.pageYOffset >= sticky && window.pageYOffset <= stickyUpperLimit) {
  		discoverStages.classList.add("sticky");
  	} else {
    	discoverStages.classList.remove("sticky");
    }
    if(featuresDiv <= 10) {
    	discoverStages.classList.remove("sticky");
    }
    if(procure >= 0 && procure <= threshold) {
    	console.log('procure');
    	processStage.classList.remove(bgFocusClassName);
    	packStage.classList.remove(bgFocusClassName);
    	procureStage.classList.add(bgFocusClassName);
    }
    if(myprocess >= 0 && myprocess <= threshold) {
    	console.log('process');
    	processStage.classList.add(bgFocusClassName);
    	packStage.classList.remove(bgFocusClassName);
    	procureStage.classList.remove(bgFocusClassName);
    }
    if(pack >= 0 && pack <= threshold) {
    	console.log('pack');
    	processStage.classList.remove(bgFocusClassName);
    	packStage.classList.add(bgFocusClassName);
    	procureStage.classList.remove(bgFocusClassName);
    }
}
 
function myMap() {
            var locations = [
                [27.492413, 77.673676, 1],
                [23.344101,  85.309563, 2],
                [12.907459,  77.601682, 3]
            ];
            var myLoc = new google.maps.LatLng(12.9716,77.5946);
            var mapProp = {
                center: myLoc,
                zoom: 4
            };

            var map = new google.maps.Map(document.getElementById("location_div"), mapProp);
            var infowindow = new google.maps.InfoWindow();
            var marker, i;
            for (i = 0; i < locations.length; i++) { 
                marker = new google.maps.Marker({
                    position: new google.maps.LatLng(locations[i][0], locations[i][1]),
                    map: map
                });

                google.maps.event.addListener(marker, 'click', (function(marker, i) {
                    return function() {
                    infowindow.setContent(locations[i][0]);
                    infowindow.open(map, marker);
                    }
                })(marker, i));
            }
        }
