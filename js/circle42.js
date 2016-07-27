// new Circle(n, [{name: "name", description: "description", image: "/path/to/image.png", onclick: "/path/to/onclick"} ]);
var Circle = function(content) {  
    this.content = content;
    this.sides = content.length;
};

$.extend(Circle.prototype, {
    draw: function(container) {

    	var bafra_logo = `
    		<svg version="1.1" id="bafra-logo" style: "pointer-events: none;" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="215px" y="-2px" viewBox="-450 829.5 339.4 550.5" style="enable-background:new -450 829.5 339.4 550.5;" xml:space="preserve" width="70">
			<style type="text/css">
				.st0{fill:#FFFFFF;}
			</style>
			<g>
	<polygon class="st0" points="-352.2,1210.8 -389.1,1245.4 -389.1,973 -296.4,880.6 -296.4,1089.8 -352.2,1140.7 	"></polygon>
	<polygon class="st0" points="-186.3,1156.2 -226.5,1194.6 -226.5,1142.3 -280.8,1090.9 -280.8,921.9 -186.3,829.5 	"></polygon>
	<polygon class="st0" points="-354.7,1130.4 -448.8,1215.1 -448.8,1090.6 -354.7,997.1 	"></polygon>
	<polygon class="st0" points="-111.7,1121.7 -203.1,1215.1 -203.1,1017 -111.7,934.8 	"></polygon>
	<rect x="-317.2" y="1135.3" class="st0" width="56" height="22.3"></rect>
	<rect x="-317.2" y="1170.8" class="st0" width="56" height="22.3"></rect>
	<path class="st0" d="M-412.7,1288h2c5.8,0,10.2-0.8,13.3-2.5c3-1.7,4.6-4.2,4.6-7.4c0-3-1.6-5.3-4.9-7c-3.2-1.7-7.7-2.6-13.4-2.6
		h-0.8L-412.7,1288L-412.7,1288z M-412.8,1292.9l-0.9,16.7c0,0.1,0,0.4,0,0.8s0,0.7,0,1c0,1.8,0.3,2.9,1,3.5
		c0.7,0.6,1.9,0.9,3.6,0.9c4.7,0,8.9-1.3,12.5-3.8c3.7-2.6,5.5-5.5,5.5-8.7c0-3.2-1.4-5.7-4.1-7.5c-2.7-1.8-6.5-2.7-11.4-2.7h-6.2
		V1292.9z M-422.8,1322.1l0.3-51.6l-5.1-6c-0.1-0.1-0.2-0.2-0.2-0.2c0-0.1-0.1-0.2-0.1-0.2c0-0.3,0.1-0.5,0.2-0.6
		c0.2-0.1,0.5-0.1,1.1-0.1l5.8-0.2h9.3c5.8,0,10,0.1,12.7,0.4c2.7,0.3,4.9,0.8,6.6,1.5c2.7,1.1,4.8,2.6,6.4,4.4
		c1.6,1.9,2.4,3.9,2.4,6c0,3.1-1.3,5.9-3.8,8.2c-2.5,2.4-6,4-10.3,4.9c5.2,0.1,9.3,1.3,12.2,3.5c2.9,2.2,4.4,5.2,4.4,9.1
		c0,5.9-3.3,10.9-9.8,15.1c-6.5,4.2-14.7,6.3-24.6,6.3c-1,0-2.2,0-3.5-0.1C-420.1,1322.3-421.4,1322.2-422.8,1322.1L-422.8,1322.1z
		 M-354.1,1298.2l21,0.6l-9.4-22.8L-354.1,1298.2L-354.1,1298.2z M-347.2,1265.3l10.1-3.4l22.2,59.1l-7.4,3.1l-8.4-19.7l-15.4,0.2
		c-0.2,0-0.4,0-0.7,0c-7.2,0.1-12,2.3-14.4,6.7l-4.7,8.9c-0.8,1.5-1.7,2.6-2.8,3.3c-1.1,0.7-2.4,1-3.9,1c-0.5,0-0.9-0.1-1.3-0.2
		c-0.4-0.1-0.6-0.3-0.6-0.4s0-0.2,0.1-0.3s0.2-0.4,0.3-0.7l18.9-36.8c3.3-6.3,5.4-10.7,6.4-13.4c1-2.6,1.5-4.8,1.5-6.5
		L-347.2,1265.3L-347.2,1265.3z M-298.8,1270.7l-5.4-6.4c-0.1-0.2-0.2-0.3-0.3-0.5c-0.1-0.2-0.1-0.3-0.1-0.4c0-0.2,0.1-0.3,0.2-0.4
		c0.2-0.1,0.4-0.1,0.7-0.1h42.6c0.6,0,1,0,1.1,0.1c0.1,0.1,0.2,0.2,0.2,0.4c0,0.1,0,0.2,0,0.2c0,0.1,0,0.1-0.1,0.2l-1.6,4.4
		l-26.5,1.7l-0.7,17.5l23.8,0.2c0.4,0,0.6,0,0.8,0.1c0.1,0.1,0.2,0.2,0.2,0.3c0,0.1,0,0.2,0,0.3s-0.1,0.2-0.1,0.3l-2.1,4l-16.9,1.8
		c-2.3,0.2-3.9,0.7-4.7,1.4s-1.3,2.3-1.4,4.7l-0.5,13.6c-0.1,2-0.2,3.4-0.5,4.3s-0.8,1.8-1.5,2.6c-0.8,1-1.8,1.9-3,2.6
		c-1.2,0.7-2.2,1.1-2.9,1.1c-0.3,0-0.5-0.1-0.7-0.2c-0.2-0.2-0.2-0.4-0.3-0.8L-298.8,1270.7L-298.8,1270.7z M-234.8,1299.4
		c7-3,12.2-6,15.6-9.2c3.4-3.1,5.2-6.4,5.2-9.8c0-3.6-1.5-6.4-4.5-8.4c-3-2.1-7.2-3.1-12.5-3.1h-3.1L-234.8,1299.4L-234.8,1299.4z
		 M-243.6,1323.1l-1.2-51.9l-5.6-6.3c-0.1-0.2-0.2-0.3-0.3-0.4c0-0.1-0.1-0.2-0.1-0.3c0-0.2,0.1-0.3,0.2-0.4
		c0.2-0.1,0.4-0.1,0.7-0.1l9.8-0.5c1.7-0.1,3.3-0.2,4.9-0.2c1.5,0,3-0.1,4.5-0.1c8.4,0,14.9,1.4,19.6,4.1c4.6,2.7,6.9,6.6,6.9,11.5
		c0,3.4-1.4,6.8-4.3,10.1c-2.9,3.3-7.6,7-14.3,11.1c7.5,7.3,15.2,13.8,23,19.6c1.7,1.3,2.6,2,2.6,2.1c0,0.6-0.6,1.2-1.9,1.9
		c-1.3,0.7-2.7,1-4.4,1c-2.7,0-9.1-4.1-19.4-12.4c-4.9-4-8.9-7.1-11.9-9.4l-0.3,0.2l-0.4,19.1L-243.6,1323.1L-243.6,1323.1z
		 M-173,1298.2l21,0.6l-9.4-22.8L-173,1298.2L-173,1298.2z M-166.1,1265.3l10.1-3.4l22.2,59.1l-7.4,3.1l-8.4-19.7l-15.4,0.2
		c-0.2,0-0.4,0-0.7,0c-7.2,0.1-12,2.3-14.4,6.7l-4.7,8.9c-0.8,1.5-1.7,2.6-2.8,3.3c-1.1,0.7-2.4,1-3.9,1c-0.5,0-0.9-0.1-1.3-0.2
		c-0.4-0.1-0.6-0.3-0.6-0.4s0-0.2,0.1-0.3s0.2-0.4,0.3-0.7l18.9-36.8c3.3-6.3,5.4-10.7,6.4-13.4c1-2.6,1.5-4.8,1.5-6.5
		L-166.1,1265.3L-166.1,1265.3z"></path>
	<path class="st0" d="M-425,1358.9c-0.3,4-1.5,7.2-3.8,9.5c-2.2,2.4-5.1,3.5-8.6,3.5c-3.6,0-6.6-1.2-9-3.6c-2.4-2.4-3.6-5.4-3.6-9
		c0-1.9,0.3-3.7,1-5.3c0.7-1.7,1.6-3.2,2.9-4.5c1.6-1.7,3.4-2.9,5.5-3.8c2.1-0.8,4.4-1.3,6.9-1.3c1.1,0,2.1,0.1,3.1,0.3
		s1.8,0.6,2.6,1l-0.4,4.9c0,0.2-0.1,0.3-0.1,0.4s-0.1,0.1-0.2,0.1h-0.1l-0.1-0.1l-2.9-2.9c-0.5-0.2-1-0.4-1.5-0.5
		c-0.6-0.1-1.2-0.2-1.8-0.2c-3.1,0-5.6,1-7.4,2.9c-1.9,1.9-2.8,4.5-2.8,7.7c0,3.1,0.9,5.7,2.6,7.8c1.7,2.1,3.8,3.1,6.4,3.1
		c1.8,0,3.3-0.6,4.7-1.7c1.3-1.1,2-2.4,2-3.7c0-0.6-0.2-1-0.5-1.3c-0.3-0.3-0.9-0.4-1.7-0.5l-5.6-0.3c-0.2,0-0.3,0-0.4,0
		c-0.1,0-0.1-0.1-0.1-0.1v-0.1c0-0.1,0-0.1,0.1-0.2l0.9-1.9L-425,1358.9L-425,1358.9z M-420.8,1372l-0.1-15.4l-2.8-2.4
		c0-0.1-0.1-0.1-0.1-0.2c0-0.1-0.1-0.1-0.1-0.1c0-0.1,0-0.1,0.1-0.2c0.1,0,0.2-0.1,0.3-0.1l7-0.6l-0.7,7.1c1.3-2.4,2.6-4.2,4.1-5.3
		c1.4-1.2,3-1.7,4.7-1.7c0.1,0,0.3,0,0.4,0s0.3,0,0.4,0l-0.6,4.4c-0.1,0-0.3,0-0.5,0c-0.2,0-0.4,0-0.8,0c-2.6,0-4.5,1.1-5.8,3.4
		c-1.3,2.3-2.1,5.9-2.3,10.7L-420.8,1372L-420.8,1372z M-403.1,1356.7l-2.9-2.5c-0.1,0-0.1-0.1-0.2-0.2c0-0.1-0.1-0.1-0.1-0.2
		c0-0.1,0-0.1,0.1-0.2c0.1,0,0.2-0.1,0.3-0.1l7.2-0.7c-0.2,2.4-0.3,4.5-0.4,6.5s-0.1,3.4-0.1,4.2c0,1.6,0.2,2.8,0.5,3.4
		c0.3,0.7,0.9,1,1.7,1c1.4,0,2.9-1.3,4.4-4s2.9-6.2,4-10.7l3.6-0.5c-0.1,3.2-0.3,6.1-0.3,8.6c-0.1,2.6-0.1,4.5-0.1,5.8
		c0,1.8,0.1,3.2,0.3,4.1c0,0.1,0,0.1,0,0.1c0,0.1,0,0.2-0.1,0.2c0,0-0.1,0.1-0.3,0.1c-0.3,0-0.7-0.1-1.2-0.3s-0.8-0.4-1.1-0.6
		c-0.5-0.4-0.8-0.9-1-1.4c-0.2-0.6-0.3-1.5-0.3-2.8v-1.8c0-0.2,0-0.5,0-1s0-1.2,0.1-2.1c-1.2,3.2-2.6,5.7-4.2,7.4
		c-1.6,1.7-3.3,2.6-5.1,2.6c-1.1,0-2-0.3-2.7-0.9c-0.7-0.6-1.3-1.4-1.5-2.5c-0.2-0.7-0.3-1.6-0.4-2.7c-0.1-1.1-0.1-3-0.1-5.6v-1.6
		c0,0,0-0.2,0-0.7C-403.1,1357.6-403.1,1357.1-403.1,1356.7L-403.1,1356.7z M-376.1,1368.3c0.5,0.3,1,0.4,1.6,0.6
		c0.5,0.1,1,0.2,1.6,0.2c2.2,0,4.1-0.8,5.7-2.3c1.6-1.5,2.4-3.3,2.4-5.4c0-1.4-0.4-2.5-1.2-3.4c-0.8-0.9-1.9-1.3-3.1-1.3
		c-2.2,0-3.8,1-5,3C-375.4,1361.5-376,1364.4-376.1,1368.3L-376.1,1368.3z M-379.9,1380l-0.1-23.5l-2.7-2.4l-0.1-0.1v-0.1
		c0-0.1,0-0.2,0.1-0.2c0.1-0.1,0.1-0.1,0.3-0.1l7.1-0.6l-0.5,5.3c1.1-1.7,2.4-3,3.9-3.9c1.4-0.9,3-1.4,4.6-1.4
		c1.9,0,3.4,0.6,4.5,1.8c1.2,1.2,1.8,2.8,1.8,4.8c0,1.4-0.3,2.8-1,4.2c-0.6,1.4-1.6,2.7-2.8,4c-1.3,1.3-2.6,2.3-4.2,3.1
		c-1.5,0.7-3,1.1-4.4,1.1c-0.4,0-0.9,0-1.3-0.1c-0.5-0.1-1-0.2-1.5-0.3l-0.5,7.8L-379.9,1380L-379.9,1380z M-354.6,1355.8l-0.9-1
		c-0.1-0.1-0.1-0.2-0.1-0.2c0-0.1,0-0.1,0-0.1c0-0.2,0.7-0.5,2-0.9c1.4-0.4,2.8-0.6,4.3-0.6c2.8,0,5,0.8,6.8,2.3
		c1.8,1.5,2.7,3.5,2.7,5.8c0,1.5-0.3,2.9-1,4.2c-0.7,1.3-1.7,2.5-3,3.7c-1.1,1-2.3,1.7-3.6,2.2c-1.3,0.5-2.6,0.7-4.1,0.7
		c-2.4,0-4.3-0.8-5.8-2.3s-2.3-3.4-2.3-5.7c0-1.6,0.4-3,1.2-4.4C-357.6,1358.3-356.3,1357-354.6,1355.8L-354.6,1355.8z
		 M-351.2,1355.7c-1.3,0.9-2.3,2-3.1,3.3c-0.7,1.3-1.1,2.6-1.1,4c0,1.8,0.5,3.2,1.6,4.4c1.1,1.2,2.3,1.8,3.9,1.8s3-0.7,4.1-2
		c1.1-1.3,1.7-3,1.7-5s-0.6-3.6-1.9-4.8s-3-1.8-5.1-1.8L-351.2,1355.7L-351.2,1355.7z M-305.1,1369.7c-1.1,0.7-2.4,1.3-3.9,1.7
		c-1.4,0.4-3,0.6-4.5,0.6c-1.9,0-3.8-0.4-5.5-1.2c-1.7-0.8-3.3-2-4.6-3.5c-0.9-1.1-1.7-2.4-2.2-3.8c-0.5-1.4-0.8-2.9-0.8-4.4
		c0-2.1,0.5-4.1,1.4-5.9c0.9-1.8,2.3-3.5,4.1-4.9c1.5-1.2,3.1-2.1,5-2.7c1.9-0.7,3.7-1,5.7-1c1.1,0,2.1,0.1,3,0.3s1.8,0.4,2.5,0.8
		l-0.3,5.1c0,0.1,0,0.2,0,0.3l-0.1,0.1h-0.1c0,0-0.1,0-0.1-0.1l-3.5-3.1c-0.3-0.1-0.7-0.2-1-0.2c-0.4-0.1-0.8-0.1-1.4-0.1
		c-2.9,0-5.3,1.1-7.3,3.2c-2,2.1-3,4.7-3,7.8c0,3,0.9,5.5,2.8,7.5c1.8,2,4.2,3,7,3c2.2,0,4.4-0.7,6.7-2c0.3-0.2,0.5-0.3,0.6-0.3
		c0,0,0.1,0,0.1,0.1c0,0,0.1,0.1,0.1,0.2c0,0.1-0.1,0.4-0.2,0.9C-304.8,1368.3-304.9,1368.9-305.1,1369.7L-305.1,1369.7z
		 M-296.4,1355.8l-0.9-1c-0.1-0.1-0.1-0.2-0.1-0.2c0-0.1,0-0.1,0-0.1c0-0.2,0.7-0.5,2-0.9c1.4-0.4,2.8-0.6,4.3-0.6
		c2.8,0,5,0.8,6.8,2.3s2.7,3.5,2.7,5.8c0,1.5-0.3,2.9-1,4.2c-0.7,1.3-1.7,2.5-3,3.7c-1.1,1-2.3,1.7-3.6,2.2
		c-1.3,0.5-2.6,0.7-4.1,0.7c-2.4,0-4.3-0.8-5.8-2.3s-2.3-3.4-2.3-5.7c0-1.6,0.4-3,1.2-4.4C-299.4,1358.3-298.1,1357-296.4,1355.8
		L-296.4,1355.8z M-293,1355.7c-1.3,0.9-2.3,2-3.1,3.3c-0.7,1.3-1.1,2.6-1.1,4c0,1.8,0.5,3.2,1.6,4.4s2.3,1.8,3.9,1.8
		c1.6,0,3-0.7,4.1-2c1.1-1.3,1.7-3,1.7-5s-0.6-3.6-1.9-4.8C-289.1,1356.2-290.8,1355.6-293,1355.7L-293,1355.7L-293,1355.7z
		 M-277.6,1372l-0.1-15.4l-2.8-2.4c0-0.1-0.1-0.1-0.1-0.2c0-0.1-0.1-0.1-0.1-0.2s0-0.1,0.1-0.2c0.1,0,0.2-0.1,0.3-0.1l7.2-0.6
		l-0.7,7.1c1.3-2.3,2.7-4.1,4.2-5.3s3-1.8,4.5-1.8c1.7,0,2.9,0.6,3.8,1.8s1.3,2.9,1.3,5.2c0,1.4-0.1,3.3-0.3,5.6
		c-0.2,2.4-0.3,4.1-0.3,5.1c0,0.5,0.1,1,0.3,1.4c0,0.1,0.1,0.2,0.1,0.2c0,0.1,0,0.2-0.1,0.2c-0.1,0.1-0.2,0.1-0.3,0.1
		c-0.4,0-0.8-0.1-1.2-0.3c-0.5-0.2-0.9-0.5-1.2-0.9c-0.4-0.4-0.7-0.9-0.8-1.5c-0.2-0.6-0.2-1.6-0.2-2.9c0-0.3,0-0.9,0-1.8
		c0-0.9,0-1.7,0-2.3c0-2.4-0.2-4-0.6-4.8c-0.4-0.8-1.2-1.2-2.2-1.2c-1.9,0-3.5,1.4-5,4.1s-2.2,6.1-2.2,10.1v0.5L-277.6,1372
		L-277.6,1372z M-256.2,1370.7l-0.3-2c0.9,0.3,1.9,0.5,2.8,0.7c0.9,0.1,1.9,0.2,2.9,0.2c1.8,0,3.3-0.3,4.4-0.8
		c1.1-0.5,1.7-1.2,1.7-1.9c0-0.5-0.3-0.9-0.8-1.2c-0.6-0.3-1.8-0.8-3.7-1.3c-2.9-0.8-4.8-1.6-5.7-2.3c-0.9-0.7-1.3-1.6-1.3-2.7
		c0-1.7,1-3.2,3-4.4c2-1.3,4.4-1.9,7.3-1.9c0.9,0,1.8,0.1,2.7,0.2c0.9,0.1,1.8,0.3,2.7,0.5l-0.3,4c0,0.2-0.1,0.4-0.1,0.4
		c0,0.1-0.1,0.1-0.2,0.1c-0.1,0-0.1,0-0.2,0c-0.1,0-0.1-0.1-0.1-0.1l-2.8-2.4c-0.4-0.1-0.7-0.1-1.1-0.2c-0.4,0-0.8-0.1-1.2-0.1
		c-1.5,0-2.7,0.3-3.7,0.8s-1.5,1.2-1.5,1.9c0,0.9,1.5,1.7,4.4,2.4c0.6,0.1,1,0.2,1.3,0.3c2.3,0.6,3.9,1.3,4.8,2
		c0.9,0.7,1.3,1.7,1.3,2.8c0,1.8-0.9,3.3-2.8,4.5c-1.9,1.2-4.2,1.8-7,1.8c-1.2,0-2.4-0.1-3.5-0.3
		C-254.5,1371.4-255.4,1371.1-256.2,1370.7L-256.2,1370.7z M-238.5,1356.1l0.7-2.7h2.4v-4.6l4.6-1.3l-0.2,5.9h6.5c0.1,0,0.2,0,0.3,0
		c0,0,0.1,0.1,0.1,0.2c0,0.8-0.5,1.4-1.4,1.8s-2.3,0.6-4.2,0.6c-0.4,0-0.7,0-0.9,0s-0.4,0-0.6,0l-0.4,8v0.6c0,1.5,0.3,2.6,0.8,3.3
		c0.5,0.7,1.3,1.1,2.3,1.1c0.8,0,1.6-0.2,2.6-0.7c0.2-0.1,0.4-0.2,0.5-0.2s0.1,0,0.1,0s0,0.1,0,0.2s0,0.4,0,0.8
		c0,0.4-0.1,0.8-0.1,1.2c-0.6,0.5-1.3,0.9-2,1.2c-0.8,0.3-1.5,0.4-2.4,0.4c-1.8,0-3.1-0.6-4.1-1.7c-1-1.1-1.5-2.8-1.5-4.9l-0.1-9.4
		L-238.5,1356.1L-238.5,1356.1z M-220.6,1372l-0.1-15.4l-2.8-2.4c0-0.1-0.1-0.1-0.1-0.2c0-0.1-0.1-0.1-0.1-0.1c0-0.1,0-0.1,0.1-0.2
		c0.1,0,0.2-0.1,0.3-0.1l7-0.6l-0.7,7.1c1.3-2.4,2.6-4.2,4.1-5.3c1.4-1.2,3-1.7,4.7-1.7c0.1,0,0.3,0,0.4,0c0.1,0,0.3,0,0.4,0
		l-0.6,4.4c-0.1,0-0.3,0-0.5,0s-0.4,0-0.8,0c-2.6,0-4.5,1.1-5.8,3.4c-1.3,2.3-2.1,5.9-2.3,10.7L-220.6,1372L-220.6,1372z
		 M-202.9,1356.7l-2.9-2.5c-0.1,0-0.1-0.1-0.2-0.2c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.1,0.1-0.2c0.1,0,0.2-0.1,0.3-0.1l7.2-0.7
		c-0.2,2.4-0.3,4.5-0.4,6.5c-0.1,2-0.1,3.4-0.1,4.2c0,1.6,0.2,2.8,0.5,3.4c0.3,0.7,0.9,1,1.7,1c1.4,0,2.9-1.3,4.4-4s2.9-6.2,4-10.7
		l3.6-0.5c-0.1,3.2-0.3,6.1-0.3,8.6c-0.1,2.6-0.1,4.5-0.1,5.8c0,1.8,0.1,3.2,0.3,4.1c0,0.1,0,0.1,0,0.1c0,0.1,0,0.2-0.1,0.2
		c0,0-0.1,0.1-0.3,0.1c-0.3,0-0.7-0.1-1.2-0.3s-0.8-0.4-1.1-0.6c-0.5-0.4-0.8-0.9-1-1.4c-0.2-0.6-0.3-1.5-0.3-2.8v-1.8
		c0-0.2,0-0.5,0-1s0-1.2,0.1-2.1c-1.2,3.2-2.6,5.7-4.2,7.4s-3.3,2.6-5.1,2.6c-1.1,0-2-0.3-2.7-0.9c-0.7-0.6-1.3-1.4-1.5-2.5
		c-0.2-0.7-0.3-1.6-0.4-2.7c-0.1-1.1-0.1-3-0.1-5.6v-1.6c0,0,0-0.2,0-0.7C-202.9,1357.6-202.9,1357.1-202.9,1356.7L-202.9,1356.7z
		 M-169,1355.7c-0.3,0-0.6,0-1.1,0c-2.3,0-4.1,0.6-5.6,1.9c-1.4,1.3-2.1,2.9-2.1,5c0,1.9,0.7,3.5,2,4.6c1.3,1.2,3,1.8,5.2,1.8
		c0.9,0,1.9-0.1,3-0.3c1-0.2,2.1-0.5,3.2-1l-0.5,2.2c-1.2,0.7-2.5,1.2-3.8,1.5c-1.3,0.4-2.5,0.5-3.7,0.5c-2.8,0-5.1-0.8-6.8-2.3
		c-1.8-1.5-2.6-3.5-2.6-5.9c0-3,1.3-5.5,4-7.6c2.6-2.1,5.9-3.1,9.8-3.1c0.6,0,1.1,0,1.7,0.1c0.6,0.1,1.1,0.2,1.6,0.4l-0.3,4.3
		c0,0.2-0.1,0.3-0.1,0.3c0,0.1-0.1,0.1-0.1,0.1c-0.1,0-0.1,0-0.2,0s-0.1-0.1-0.2-0.1L-169,1355.7L-169,1355.7z M-163.5,1356.1
		l0.7-2.7h2.4v-4.6l4.6-1.3l-0.2,5.9h6.5c0.1,0,0.2,0,0.3,0c0,0,0.1,0.1,0.1,0.2c0,0.8-0.5,1.4-1.4,1.8s-2.3,0.6-4.2,0.6
		c-0.4,0-0.7,0-0.9,0c-0.2,0-0.4,0-0.6,0l-0.4,8v0.6c0,1.5,0.3,2.6,0.8,3.3c0.5,0.7,1.3,1.1,2.3,1.1c0.8,0,1.6-0.2,2.6-0.7
		c0.2-0.1,0.4-0.2,0.5-0.2s0.1,0,0.1,0s0,0.1,0,0.2s0,0.4,0,0.8c0,0.4-0.1,0.8-0.1,1.2c-0.6,0.5-1.3,0.9-2,1.2
		c-0.8,0.3-1.5,0.4-2.4,0.4c-1.8,0-3.1-0.6-4.1-1.7c-1-1.1-1.5-2.8-1.5-4.9l-0.1-9.4L-163.5,1356.1L-163.5,1356.1z M-142.7,1355.8
		l-0.9-1c-0.1-0.1-0.1-0.2-0.1-0.2c0-0.1,0-0.1,0-0.1c0-0.2,0.7-0.5,2-0.9c1.4-0.4,2.8-0.6,4.3-0.6c2.8,0,5,0.8,6.8,2.3
		s2.7,3.5,2.7,5.8c0,1.5-0.3,2.9-1,4.2c-0.7,1.3-1.7,2.5-3,3.7c-1.1,1-2.3,1.7-3.6,2.2c-1.3,0.5-2.6,0.7-4.1,0.7
		c-2.4,0-4.3-0.8-5.8-2.3s-2.3-3.4-2.3-5.7c0-1.6,0.4-3,1.2-4.4C-145.7,1358.3-144.4,1357-142.7,1355.8L-142.7,1355.8z
		 M-139.3,1355.7c-1.3,0.9-2.3,2-3.1,3.3c-0.7,1.3-1.1,2.6-1.1,4c0,1.8,0.5,3.2,1.6,4.4s2.3,1.8,3.9,1.8s3-0.7,4.1-2
		c1.1-1.3,1.7-3,1.7-5s-0.6-3.6-1.9-4.8s-3-1.8-5.1-1.8L-139.3,1355.7L-139.3,1355.7z M-123.9,1372l-0.1-15.4l-2.8-2.4
		c0-0.1-0.1-0.1-0.1-0.2c0-0.1-0.1-0.1-0.1-0.1c0-0.1,0-0.1,0.1-0.2c0.1,0,0.2-0.1,0.3-0.1l7-0.6l-0.7,7.1c1.3-2.4,2.6-4.2,4.1-5.3
		c1.4-1.2,3-1.7,4.7-1.7c0.1,0,0.3,0,0.4,0s0.3,0,0.4,0l-0.6,4.4c-0.1,0-0.3,0-0.5,0s-0.4,0-0.8,0c-2.6,0-4.5,1.1-5.8,3.4
		c-1.3,2.3-2.1,5.9-2.3,10.7L-123.9,1372z"></path>
		</g>
		</svg>
    	`

		circle = Snap(container);
		circle.clear();
		circle.attr({ viewBox: "-2 -2 504 504", id: "menu", style: "transform-origin: 50% 50% 0px; transform: translate3d(0px, 0px, 0px); touch-action: none; -webkit-user-select: none;" });
		symbolsContainer = circle.g({id: "symbolsContainer"});

    	$.each(this.content,function(i,item){
    		s = symbolsContainer.el("symbol", {id: "icon-" + (i + 1), class: "icon icon-", viewBox: "0 0 57 57"});
    		text = s.text("50%","50%",item.name);
    		if(item.description)
    			text.attr({ dy: "0.3em", "text-anchor": "middle", "font-size": "1.4em", fill: "#222", "data:name": item.name, "data:description": item.description, "data:image": item.image, "data:links": (item.links) ? item.links.toString() : "" });
    		else 
    			text.attr({ dy: "0.3em", "text-anchor": "middle", "font-size": "1.4em", fill: "#222", "data:name": item.name, "data:image": item.image, "data:links": (item.links) ? item.links.toString() : "" });

    	});

    	circle.add(Snap.parse(this.template(this.sides)));
    	trigger = circle.g({id: "trigger", style: "pointer-events: none;", class: "trigger menu-trigger", role: "button"});
    	trigger.el("circle",{id: "center-circle", style: "pointer-events: none;", cx: "250", cy: "250", r: "65"});
    	trigger.el("foreignObject", { id: "foreignObject", x: "95", y: "95", width: "310", height: "310"});
    	circle.add(Snap.parse(bafra_logo))
    	load();
    },
    template: function(sides) {
    	switch(sides) {
    		case 2:
    			return `
    		<g id="itemsContainer" transform="translate(200,200) scale(0.1) translate(200,200)" >        
    			<a class="item" id="item-1" href="#" role="link" tabindex="0" xlink:href="" xlink:title="" xlink:target="_parent" transform="matrix(1,0,0,1,0,0)" data-svg-origin="250 250" style="">
    				<path fill="none" stroke="#111" stroke-width="1" class="sector" d="M250,250 l250,0 A250,250 0 0,0 0,250 z"></path>
    				<use xlink:href="#icon-1" width="40" height="40" x="230" y="80" transform="rotate(0 300 200)"></use>
    			</a>
        		<a class="item" id="item-2" href="#" role="link" tabindex="0" xlink:href="" xlink:title="" xlink:target="_parent" transform="matrix(-1,0,0,-1,500,500)" data-svg-origin="250 250" style="">
        			<path fill="none" stroke="#111" stroke-width="1" class="sector" d="M250,250 l250,0 A250,250 0 0,0 0,250 z"></path>
        			<use xlink:href="#icon-2" width="40" height="40" x="230" y="80" transform="rotate(0 300 200)"></use>
        		</a>
			</g>`;
    		case 3: 
    			return `
			<g id="itemsContainer" transform="translate(200,200) scale(0.1) translate(200,200)">        
				<a class="item" id="item-1" href="#" role="link" tabindex="0" xlink:href="" xlink:title="" xlink:target="_parent" transform="matrix(1,0,0,1,0,0)" data-svg-origin="250 250" style="">
					<path fill="none" stroke="#111" stroke-width="1" class="sector" d="M250,250 l250,0 A250,250 0 0,0 125.00000000000006,33.493649053890294 z"></path>
					<use xlink:href="#icon-1" width="81" height="81" x="317.2687683105469" y="57.90220642089844" transform="rotate(30 357.7687683105469 98.40220642089844)"></use>
				</a>
        		<a class="item" id="item-2" href="#" role="link" tabindex="0" xlink:href="" xlink:title="" xlink:target="_parent" transform="matrix(-0.49999,-0.86602,0.86602,-0.49999,158.49364905389024,591.5063509461097)" data-svg-origin="250 250" style="">
        			<path fill="none" stroke="#111" stroke-width="1" class="sector" d="M250,250 l250,0 A250,250 0 0,0 125.00000000000006,33.493649053890294 z"></path>
        			<use xlink:href="#icon-2" width="81" height="81" x="317.2687683105469" y="57.90220642089844" transform="rotate(30 357.7687683105469 98.40220642089844)"></use>
        		</a>
        		<a class="item" id="item-3" href="#" role="link" tabindex="0" xlink:href="" xlink:title="" xlink:target="_parent" transform="matrix(-0.5,0.86602,-0.86602,-0.5,591.5063509461097,158.4936490538905)" data-svg-origin="250 250" style="">
        			<path fill="none" stroke="#111" stroke-width="1" class="sector" d="M250,250 l250,0 A250,250 0 0,0 125.00000000000006,33.493649053890294 z"></path>
        			<use xlink:href="#icon-3" width="81" height="81" x="317.2687683105469" y="57.90220642089844" transform="rotate(30 357.7687683105469 98.40220642089844)"></use>
        		</a>
			</g>`;
    		case 4:
    		case 5:
    		case 6:
    		case 7: 
    			return `
    		<g id="itemsContainer" transform="translate(200,200) scale(0.1) translate(200,200)"> 
				<a class="item" id="item-1" href="#" href="#" role="link" tabindex="0" xlink:href="#" xlink:title="" xlink:target="_parent" transform="matrix(1,0,0,1,0,0)" data-svg-origin="250 250" style="z-index:1;">
					<path id="patito" fill="none" stroke="#111" stroke-width="1" class="sector" d="M250,250 l250,0 A250,250 0 0,0 405.8724504646834,54.542129382992556 z"></path>
					<use xlink:href="#icon-1" width="40" height="40" x="383.1647033691406" y="156.23976135253906" transform="rotate(64.28571428571428 403.1647033691406 176.23976135253906)"></use>
				</a>
        		<a class="item" id="item-2" href="#" role="link" tabindex="0" xlink:href="" xlink:title="" xlink:target="_parent" transform="matrix(0.62348,-0.78183,0.78183,0.62348,-101.33032108169084,289.58542015232405)" data-svg-origin="250 250" style="">
        			<path fill="none" stroke="#111" stroke-width="1" class="sector" d="M250,250 l250,0 A250,250 0 0,0 405.8724504646834,54.542129382992556 z"></path>
        			<use xlink:href="#icon-2" width="40" height="40" x="383.1647033691406" y="156.23976135253906" transform="rotate(64.28571428571428 403.1647033691406 176.23976135253906)"></use>
        		</a>
        		<a class="item" id="item-3" href="#" role="link" tabindex="0" xlink:href="" xlink:title="" xlink:target="_parent" transform="matrix(-0.22252,-0.97492,0.97492,-0.22252,61.89825544362267,549.3622115345345)" data-svg-origin="250 250" style="">
        			<path fill="none" stroke="#111" stroke-width="1" class="sector" d="M250,250 l250,0 A250,250 0 0,0 405.8724504646834,54.542129382992556 z"></path>
        			<use xlink:href="#icon-3" width="40" height="40" x="383.1647033691406" y="156.23976135253906" transform="rotate(64.28571428571428 403.1647033691406 176.23976135253906)"></use>
        		</a>
        		<a class="item" id="item-4" href="#" role="link" tabindex="0" xlink:href="" xlink:title="" xlink:target="_parent" transform="matrix(-0.90096,-0.43388,0.43388,-0.90096,366.7712821962152,583.7131517549943)" data-svg-origin="250 250" style="">
        			<path fill="none" stroke="#111" stroke-width="1" class="sector" d="M250,250 l250,0 A250,250 0 0,0 405.8724504646834,54.542129382992556 z"></path>
        			<use xlink:href="#icon-4" width="40" height="40" x="383.1647033691406" y="156.23976135253906" transform="rotate(64.28571428571428 403.1647033691406 176.23976135253906)"></use>
        		</a>
        		<a class="item" id="item-5" href="#" role="link" tabindex="0" xlink:href="" xlink:title="" xlink:target="_parent" transform="matrix(-0.90096,0.43388,-0.43388,-0.90096,583.7131517549942,366.7712821962153)" data-svg-origin="250 250" style="">
        			<path fill="none" stroke="#111" stroke-width="1" class="sector" d="M250,250 l250,0 A250,250 0 0,0 405.8724504646834,54.542129382992556 z"></path>
        			<use xlink:href="#icon-5" width="40" height="40" x="383.1647033691406" y="156.23976135253906" transform="rotate(64.28571428571428 403.1647033691406 176.23976135253906)"></use>
        		</a>
        		<a class="item" id="item-6" href="#" role="link" tabindex="0" xlink:href="" xlink:title="" xlink:target="_parent" transform="matrix(-0.22252,0.97492,-0.97492,-0.22252,549.3622115345344,61.898255443622475)" data-svg-origin="250 250" style="">
        			<path fill="none" stroke="#111" stroke-width="1" class="sector" d="M250,250 l250,0 A250,250 0 0,0 405.8724504646834,54.542129382992556 z"></path>
        			<use xlink:href="#icon-6" width="40" height="40" x="383.1647033691406" y="156.23976135253906" transform="rotate(64.28571428571428 403.1647033691406 176.23976135253906)"></use>
        		</a>
        		<a class="item" id="item-7" href="#" role="link" tabindex="0" xlink:href="" xlink:title="" xlink:target="_parent" transform="matrix(0.62348,0.78183,-0.78183,0.62348,289.5854201523241,-101.33032108169084)" data-svg-origin="250 250" style="">
        			<path fill="none" stroke="#111" stroke-width="1" class="sector" d="M250,250 l250,0 A250,250 0 0,0 405.8724504646834,54.542129382992556 z"></path>
        			<use xlink:href="#icon-7" width="40" height="40" x="383.1647033691406" y="156.23976135253906" transform="rotate(64.28571428571428 403.1647033691406 176.23976135253906)"></use>
        		</a>
			</g>`;
    		case 8:
    		case 9:
    		case 10:
    		case 11:
    		case 12:
    	}
	}
});

function load() {
	$("#content-circle").textfill({});	
	var snapped = Snap.selectAll(".item use");
	var tapped = 0;

	// -------------------------------------------------------CIRCLE-------------------------------------------------------------
	container = Snap.selectAll("#itemsContainer");
	// container.animate({d: 0},100,null,build);
	var factor = (parseInt($(".item use").first().attr("y")) + 100) * 0.75 - parseInt($(".item use").first().attr("y"));
	var factormax = parseInt($(".item use").first().attr("y")) - factor;
	var factormin = parseInt($(".item use").first().attr("y"));
	$(".item use").first().attr("y",factormax);
	container.animate({ transform: "translate(200,200) scale(0.1) translate(200,200)" },1000,mina.easeInBounce,build);
	var circle = Snap("#center-circle");
	var circle_template = `
		<div id="content-circle" class="info" style="background-image: url('{image}')">
			<div class="hole">
				<div class="shadow">
					<p>{name}</p>
					<p class="description">
						{description}
					</p>
				</div>	
			</div>			
		</div>
	`;
	var circle_template_name = `
		<div id="content-circle" class="info" style="background-image: url('{image}')">
			<div class="hole">
				<div class="shadow" style="padding-top:40px">
					<p>{name}</p>
				</div>	
			</div>			
		</div>
	`;

	function grow(el){
		if(el.children("text").attr("data:description")) {
			$("#foreignObject").html(circle_template
								.replace("{name}",el.children("text").attr("data:name"))
								.replace("{description}",el.children("text").attr("data:description"))
								.replace("{image}",el.children("text").attr("data:image"))
						);
		} else {
			$("#foreignObject").html(circle_template_name
							.replace("{name}",el.children("text").attr("data:name"))
							.replace("{image}",el.children("text").attr("data:image"))
						);
		}
		$("#content-circle").animate({width:310, height:310, opacity: 1},10);
		circle.animate({r: 160},100);
		$("#bafra-logo").animate({opacity: 0}, {queue: false})
		$(".menu-trigger").css('fill',"#EAEAEA");
		snapped.animate({y: factormax }, 100);
	}

	function shrink(){
		$("#content-circle").animate({width:0, height:0, opacity: 0},10);
		circle.animate({r: 65},100);
		$("#bafra-logo").animate({opacity: 1}, {queue: false})
		$(".menu-trigger").css('fill',"#3DA1CC");
		snapped.animate({y: factormin }, 100);
	}

	function build(){
		shrink();
		container.animate({ transform: "" },100);
	}

	function selectOption(element){
		var posts = [];
		options = $(element).children("text").attr("data:links").split(",");

		options.forEach(function(el){
		   posts.push({
		     name: $(el).find(".post-title").html().trim(),
		     description: $(el).find(".post-description").html().trim(),
		     image: $(el).find(".post-image").find("img").attr("src"),
		   })
		});

		container.animate({ transform: "translate(200,200) scale(0.1) translate(200,200)" },1000,mina.easeInBounce,function(){
			innerCircle = new Circle(posts);
			innerCircle.draw("#menu");
			$("#menu").addClass("innerMenu");
		});

	}

	function closeCircle(){
		$("#wpcf7-f45-p120-o1").slideUp("slow");
		$("#navigator").slideUp("slow");
		$("#wrapper").slideDown("slow");
		 $('html,body').animate({
		            scrollTop: 0
		  }, 1);

		 		// Create the circle
	    var posts = []

	    $(".post").each(function(){
	       var links = []
	       $(this).find(".post-links").find("a").each(function(){
	          links.push($(this).attr("href"))
	       });

	       console.log(links.length)

	       if(links.length > 0) {
	            if($(this).find(".post-description").html()){
	                posts.push({
	                  name: $(this).find(".post-title").html().trim(),
	                  description: $(this).find(".post-description").html(),
	                  image: $(this).find(".post-image").find("img").attr("src"),
	                  links: links
	                });
	            } else {
	                posts.push({
	                  name: $(this).find(".post-title").html().trim(),
	                  image: $(this).find(".post-image").find("img").attr("src"),
	                  links: links
	                });
	            }
	        }
	    });

	    console.log(posts)

	    circle = new Circle(posts);
	    circle.draw("#menu");
	}

	$(document).on("click","#closecircle",function(e){
		closeCircle();
	});

	$(document).on("click",".innerMenu a",function(e){
		jQuery('#myModal').modal("toggle")
		// $(".entry-footer").after($("#wpcf7-f45-p120-o1"))
		// $(".wpcf7-form").slideDown("slow");
	});

	$(document).on("mouseover",".item", function(e){ 
		grow($($(this).children("use").attr("xlink:href"))); 
		e.stopPropagation();	
	});

	$(document).on("tap",".item", function(e){ 
		if(tapped > 1){
			selectOption($($(this).children("use").attr("xlink:href")));
			e.preventDefault();
			tapped = 0;
		} else {
			grow($($(this).children("use").attr("xlink:href"))); 
			e.stopPropagation();	
			tapped += 1;
		}
	});

	$(document).on("mouseleave",".item", function(e){
	 	shrink($($(this).children("use").attr("xlink:href"))); 
	 	e.stopImmediatePropagation(); 
	});

	$(document).on("click",".item",function(e){
		selectOption($($(this).children("use").attr("xlink:href")));
		e.preventDefault();
	});

	$(document).on("change","#hover:checked", function(){ 
		grow($($("#item-1").children("use").attr("xlink:href"))); 
	});
	$(document).on("change","#hover:not(:checked)", function(){
	 	shrink($($("#item-1").children("use").attr("xlink:href"))); 
	});
}