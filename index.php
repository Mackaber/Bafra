<? get_header() ?>
<div id="primary" class="content-area">
	<main id="main" class="site-main" role="main">
		<?php
			switch(have_posts()) {
				case(true && (is_home() && ! is_front_page())):
					?>
						<header>
							<h1 class="page-title screen-reader-text">
								<? single_post_title() ?>
							</h1>
						</header>
					<?php
				break;
				case true:
					while(have_posts()) {
						the_post();
						get_template_part("template-parts/content", get_post_format());
					}
				break;
				case false:
					get_template_part( 'template-parts/content', 'none' );
				break;
			}
		?>
	</main>
</div>
<?php
	get_sidebar();
	get_footer();
?>