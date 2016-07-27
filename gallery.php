<?php /* Template Name: Gallery */ ?>

<?php get_header(); ?>

<div class="container">
	<header class="codrops-header">
		<h1><a style="padding-right: 20px;" href="http://bafra.mx/"><i class="fa fa-arrow-left" aria-hidden="true"></i></a>Galeria</h1>
	</header>
	<div class="content">

		<div class="pattern">
		</div>

		<div class="wrapper">


		<div class="preview">
			<button class="action action--close ui-btn ui-shadow ui-corner-all"><i class="fa fa-times"></i><span class="text-hidden">Close</span></button>
			<div class="description description--preview"></div>
		</div>


		<?php query_posts('category_name=prototipos&posts_per_page=999'); ?>
			<?php if (have_posts()) : ?>
				<?php while (have_posts()) : the_post(); ?>

					<?php $myHash = bin2hex(random_bytes(16)) ?>

					<div id="<?php echo($post->post_name) ?>" class="card" style="">
						<div class="card__container card__container--closed">
							<svg class="card__image" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1920 500" preserveAspectRatio="xMidYMid slice" data-cshid="<?php echo $myHash ?>">
								<defs>
									<clippath id="clipPath-<?php echo($post->ID);?>">
										<circle class="clip" cx="960" cy="250" r="992"></circle>
									</clippath>
								</defs>
								<image clip-path="url(#clipPath-<?php echo($post->ID);?>)" width="1920" height="500" xlink:href="<?php the_field('imagen_principal'); ?>"></image>
							</svg>
							<div class="card__content">
								<i class="card__btn-close fa fa-times" data-cshid="<?php echo $myHash ?>"></i>
								<div class="card__caption">
									<h2 class="card__title"><?php the_title(); ?></h2>
									<p class="card__subtitle"></p>
								</div>
								<div class="card__copy">
									<div class="meta">

									</div>

									<div class="inner-content">
										<div class="grid grid--loaded" style="display: table; position: relative; width: 1080px; height: 1560px;">
											<div class="grid__item" data-size="1280x853" style="display: table-cell;">
												<a href="<?php the_field('render_1'); ?>" class="img-wrap">
												<img src="<?php the_field('render_1'); ?>">
													<div class="description description--grid"></div>
												</a>
											</div>
											<div class="grid__item" data-size="1280x853" style="display: table-cell;">
												<a href="<?php the_field('render_2'); ?>" class="img-wrap">
												<img src="<?php the_field('render_2'); ?>">
													<div class="description description--grid"></div>
												</a>
											</div>
											<div class="grid__item" data-size="1280x853" style="display: table-cell;">
												<a href="<?php the_field('render_3'); ?>" class="img-wrap">
												<img src="<?php the_field('render_3'); ?>">
													<div class="description description--grid"></div>
												</a>
											</div>
											<div class="grid__item" data-size="1280x853" style="display: table-cell;">
												<a href="<?php the_field('render_4'); ?>" class="img-wrap">
												<img src="<?php the_field('render_4'); ?>">
													<div class="description description--grid"></div>
												</a>
											</div>
										</div>
									</div>

									<?php the_content(); ?>
								</div>
							</div>
						</div>
					</div>

				<?php endwhile; ?>
			<?php endif; ?>
		</>
		</div>
	</div>
</div>

<?php $post_objects = get_field('prototipos_hijos') ?>

<?php if ($post_objects): ?>
    <?php foreach( $post_objects as $post_object): ?>
		<?php // echo $post_object->post_name; ?>
	<?php endforeach; ?>
<?php endif; ?>

<?php get_sidebar(); ?>

<?php wp_footer(); ?>
<script type="text/javascript">
	(function() {
	
	// DISABLE JQM ROUTER
	jQuery(document).bind("mobileinit", function () {
		$.mobile.ajaxEnabled = false;
		$.mobile.linkBindingEnabled = false;
		$.mobile.hashListeningEnabled = false;
		$.mobile.pushStateEnabled = false;
		$.mobile.changePage.defaults.changeHash = false;
	});

  // create SVG circle overlay and append it to the preview element
  function createCircleOverlay(previewEl) {
    var dummy = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    dummy.setAttributeNS(null, 'version', '1.1');
    dummy.setAttributeNS(null, 'width', '100%');
    dummy.setAttributeNS(null, 'height', '100%');
    dummy.setAttributeNS(null, 'class', 'overlay');
    var g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    var circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttributeNS(null, 'cx', 0);
    circle.setAttributeNS(null, 'cy', 0);
    circle.setAttributeNS(null, 'r', Math.sqrt(Math.pow(previewEl.offsetWidth,2) + Math.pow(previewEl.offsetHeight,2)));
    dummy.appendChild(g);
    g.appendChild(circle);
    previewEl.appendChild(dummy);
  }


  document.querySelectorAll('.grid').forEach(function(element){
    grid = new GridFx(element, {
      onInit : function(instance) {
        createCircleOverlay(instance.previewEl);
      },
      onResize : function(instance) {
        instance.previewEl.querySelector('svg circle').setAttributeNS(null, 'r', Math.sqrt(Math.pow(instance.previewEl.offsetWidth,2) + Math.pow(instance.previewEl.offsetHeight,2)));
      },
      onOpenItem : function(instance, item) {
        // item's image
        var gridImg = item.querySelector('img'),
          gridImgOffset = gridImg.getBoundingClientRect(),
          win = {width: document.documentElement.clientWidth, height: window.innerHeight},
          SVGCircleGroupEl = instance.previewEl.querySelector('svg > g'),
          SVGCircleEl = SVGCircleGroupEl.querySelector('circle');
          
        SVGCircleEl.setAttributeNS(null, 'r', Math.sqrt(Math.pow(instance.previewEl.offsetWidth,2) + Math.pow(instance.previewEl.offsetHeight,2)));
        // set the transform for the SVG g node. This will animate the circle overlay. The origin of the circle depends on the position of the clicked item.
        if( gridImgOffset.left + gridImg.offsetWidth/2 < win.width/2 ) {
          SVGCircleGroupEl.setAttributeNS(null, 'transform', 'translate(' + win.width + ', ' + (gridImgOffset.top + gridImg.offsetHeight/2 < win.height/2 ? win.height : 0) + ')');
        }
        else {
          SVGCircleGroupEl.setAttributeNS(null, 'transform', 'translate(0, ' + (gridImgOffset.top + gridImg.offsetHeight/2 < win.height/2 ? win.height : 0) + ')');
        }
      }
    });
  });

})();
</script>
<?php get_footer(); ?>

