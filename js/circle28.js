// new Circle(n, [{name: "name", description: "description", image: "/path/to/image.png", onclick: "/path/to/onclick"} ]);
var Circle = function(content) {  
    this.content = content;
    this.sides = content.length;
};

$.extend(Circle.prototype, {
    draw: function(container) {
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
		$(".menu-trigger").css('fill',"#EAEAEA");
		snapped.animate({y: factormax }, 100);
	}

	function shrink(){
		$("#content-circle").animate({width:0, height:0, opacity: 0},10);
		circle.animate({r: 65},100);
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
		});

	}

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
	 	e.stopPropagation(); 
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