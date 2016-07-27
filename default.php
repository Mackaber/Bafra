<?php /* Template Name: Default */ ?>

	<div id="primary" class="content-area">
		<main id="main" class="site-main" role="main">

			<?php
			while ( have_posts() ) : the_post();

				get_template_part( 'template-parts/content', 'page' );

				// If comments are open or we have at least one comment, load up the comment template.
				if ( comments_open() || get_comments_number() ) :
					comments_template();
				endif;

			endwhile; // End of the loop.
			?>

			<?php query_posts('posts_per_page=999'); ?>
				<?php if (have_posts()) : ?>
					<?php while (have_posts()) : the_post(); ?>
						<div id="<?php echo($post->post_name) ?>" class="post">
							<div class="post-title">
								<?php the_title(); ?>
							</div>
							<div class="post-content">
								<?php the_content(); ?>
							</div>
						</div>
					<?php endwhile; ?>
				<?php endif; ?>
			</>


		</main><!-- #main -->
	</div><!-- #primary -->

<?php wp_footer(); ?>
<script type="text/javascript">
	// Closes the sidebar menu

$("#menu-close").click(function(e) {
    e.preventDefault();
    $("#sidebar-wrapper").toggleClass("active");
});

// Opens the sidebar menu
$("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#sidebar-wrapper").toggleClass("active");
});

// Scrolls to the selected menu item on the page
$(function() {
    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {

            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});

$(document).ready(function() {
    var images = []

    $("#kenburns-images").children("img").each(function(id,el){
        images.push(el.src)
        console.log(images)
    })

    $('#kenburns').Kenburns({
        images: images,
        scale:0.75,
        duration:8000,
        fadeSpeed:1200,
        ease3d:'cubic-bezier(0.445, 0.050, 0.550, 0.950)'
    });

    $("#cotizar").on("click",function(){
        $("#wrapper").slideUp("slow");
        $("#navigator").slideDown("slow");
         $('html,body').animate({
                    scrollTop: 0
          }, 1);

    })

});


$(document).ready(function(){
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
});
</script>

<?php get_footer()

