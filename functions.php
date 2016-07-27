<?php
/**
 * bafra functions and definitions.
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package bafra
 */

if ( ! function_exists( 'bafra_setup' ) ) :
/**
 * Sets up theme defaults and registers support for various WordPress features.
 *
 * Note that this function is hooked into the after_setup_theme hook, which
 * runs before the init hook. The init hook is too late for some features, such
 * as indicating support for post thumbnails.
 */
function bafra_setup() {
	/*
	 * Make theme available for translation.
	 * Translations can be filed in the /languages/ directory.
	 * If you're building a theme based on bafra, use a find and replace
	 * to change 'bafra' to the name of your theme in all the template files.
	 */
	load_theme_textdomain( 'bafra', get_template_directory() . '/languages' );

	// Add default posts and comments RSS feed links to head.
	add_theme_support( 'automatic-feed-links' );

	/*
	 * Let WordPress manage the document title.
	 * By adding theme support, we declare that this theme does not use a
	 * hard-coded <title> tag in the document head, and expect WordPress to
	 * provide it for us.
	 */
	add_theme_support( 'title-tag' );

	/*
	 * Enable support for Post Thumbnails on posts and pages.
	 *
	 * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
	 */
	add_theme_support( 'post-thumbnails' );

	// This theme uses wp_nav_menu() in one location.
	register_nav_menus( array(
		'primary' => esc_html__( 'Primary', 'bafra' ),
	) );

	/*
	 * Switch default core markup for search form, comment form, and comments
	 * to output valid HTML5.
	 */
	add_theme_support( 'html5', array(
		'search-form',
		'comment-form',
		'comment-list',
		'gallery',
		'caption',
	) );

	/*
	 * Enable support for Post Formats.
	 * See https://developer.wordpress.org/themes/functionality/post-formats/
	 */
	add_theme_support( 'post-formats', array(
		'aside',
		'image',
		'video',
		'quote',
		'link',
	) );

	// Set up the WordPress core custom background feature.
	add_theme_support( 'custom-background', apply_filters( 'bafra_custom_background_args', array(
		'default-color' => 'ffffff',
		'default-image' => '',
	) ) );

	// Add SVG Support
	function cc_mime_types($mimes) {
	  $mimes['svg'] = 'image/svg+xml';
	  return $mimes;
	}

add_filter('upload_mimes', 'cc_mime_types');
}
endif;
add_action( 'after_setup_theme', 'bafra_setup' );

/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 *
 * Priority 0 to make it available to lower priority callbacks.
 *
 * @global int $content_width
 */
function bafra_content_width() {
	$GLOBALS['content_width'] = apply_filters( 'bafra_content_width', 640 );
}
add_action( 'after_setup_theme', 'bafra_content_width', 0 );

/**
 * Register widget area.
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 */
function bafra_widgets_init() {
	register_sidebar( array(
		'name'          => esc_html__( 'Sidebar', 'bafra' ),
		'id'            => 'sidebar-1',
		'description'   => esc_html__( 'Add widgets here.', 'bafra' ),
		'before_widget' => '<section id="%1$s" class="widget %2$s">',
		'after_widget'  => '</section>',
		'before_title'  => '<h2 class="widget-title">',
		'after_title'   => '</h2>',
	) );
}
add_action( 'widgets_init', 'bafra_widgets_init' );

/**
 * Enqueue scripts and styles.
 */
function bafra_scripts() {

	// Jquery
	wp_enqueue_script( 'jquery-2.2.4.min.js', get_template_directory_uri() . '/js/jquery-2.2.4.min.js', array(), '20160532', true );
	
	if(!is_page_template( 'gallery.php' )){
		// wp_enqueue_script( 'jquery.mobile-1.4.5.js', get_template_directory_uri() . '/js/jquery.mobile-1.4.5.js', array(), '20160535', true );
	}

	// Snapsvg
	wp_enqueue_script( 'snap.svg-min', get_template_directory_uri() . '/js/snap.svg-min.js', array(), '20160532', true );
	wp_enqueue_script( 'query.textfill.min', get_template_directory_uri() . '/js/jquery.textfill.min.js', array(), '20160534', true );


	// Bootstrap
	wp_enqueue_style( 'bootstrap', get_template_directory_uri() . '/css/bootstrap.css', array(), '201605315', 'all');
	wp_enqueue_style( 'stylish-portfolio', get_template_directory_uri() . '/css/stylish-portfolio1.css', array(), '20160532', 'all');
	wp_enqueue_style( 'font-awesome', get_template_directory_uri() . '/css/font-awesome.min.css', array(), '20160534', 'all');
	wp_enqueue_script( 'bootstrap', get_template_directory_uri() . '/js/bootstrap.min.js', array(), '20160532', true );

	// Ken Burns
	wp_enqueue_style( 'kenburns', get_template_directory_uri() . '/css/kenburns.css', array(), '201605315', 'all');
	wp_enqueue_script( 'kenburns', get_template_directory_uri() . '/js/kenburns.js', array(), '20160532', true );

	// BAFRA
	wp_enqueue_style( 'style', get_template_directory_uri() . '/css/style3.css', array(), '201605317', 'all');

	// Circle
	wp_enqueue_style( 'circle', get_template_directory_uri() . '/css/circle17.css', array(), '201605317', 'all');
	wp_enqueue_script( 'circle', get_template_directory_uri() . '/js/circle42.js', array(), '20160536', true );

	wp_enqueue_style( 'contact-form', get_template_directory_uri() . '/css/contact-form6.css', array(), '201605317', 'all');


	// Card + GRID

	// card.css
	wp_enqueue_style( 'card', get_template_directory_uri() . '/css/gallery/card.css', array(), '201605317', 'all');
	// normalize.css
	wp_enqueue_style( 'normalize', get_template_directory_uri() . '/css/gallery/normalize.css', array(), '201605317', 'all');
	// pattern.css
	wp_enqueue_style( 'pattern', get_template_directory_uri() . '/css/gallery/pattern.css', array(), '201605317', 'all');
	// style1.css
	wp_enqueue_style( 'style1', get_template_directory_uri() . '/css/gallery/style3.css', array(), '201605317', 'all');
	// demo.css
	wp_enqueue_style( 'demo', get_template_directory_uri() . '/css/gallery/demo2.css', array(), '201605317', 'all');
	
	if(is_page_template( 'gallery.php' )){
		// modernizr-custom.js
		wp_enqueue_script( 'modernizr-custom', get_template_directory_uri() . '/js/gallery/modernizr-custom.js', array(), '20160614', true );
		// trianglify.min.js
		wp_enqueue_script( 'trianglify', get_template_directory_uri() . '/js/gallery/trianglify.min.js', array(), '20160614', true );
		// TweenMax.min.js
		wp_enqueue_script( 'TweenMax', get_template_directory_uri() . '/js/gallery/TweenMax.min.js', array(), '20160614', true );
		// ScrollToPlugin.min.js
		wp_enqueue_script( 'ScrollToPlugin', get_template_directory_uri() . '/js/gallery/ScrollToPlugin.min.js', array(), '20160614', true );
		// cash.min.js
		wp_enqueue_script( 'cash', get_template_directory_uri() . '/js/gallery/cash.min.js', array(), '20160614', true );
		// Card-circle.js
		wp_enqueue_script( 'card-circle', get_template_directory_uri() . '/js/gallery/Card-circle.js', array(), '20160614', true );
		// demo.js
		wp_enqueue_script( 'demo', get_template_directory_uri() . '/js/gallery/demo4.js', array(), '20160615', true );
		// imagesloaded.pkgd.min.js
		wp_enqueue_script( 'imagesloaded.pkgd', get_template_directory_uri() . '/js/gallery/imagesloaded.pkgd.min.js', array(), '20160614', true );
		// masonry.pkgd.min.js
		wp_enqueue_script( 'masonry.pkgd', get_template_directory_uri() . '/js/gallery/masonry.pkgd.min.js', array(), '20160614', true );
		// classie.js
		wp_enqueue_script( 'classie', get_template_directory_uri() . '/js/gallery/classie.js', array(), '20160614', true );
		// main.js
		wp_enqueue_script( 'main', get_template_directory_uri() . '/js/gallery/main3.js', array(), '20160614', true );
	}

	// wp_enqueue_style( 'circle', get_template_directory_uri() . '/css/gallery/circle.css', array(), '1.0','all');
	
	// UNDERSCORE
	// wp_enqueue_style( 'bafra-style', get_stylesheet_uri() );

	wp_enqueue_script( 'bafra-navigation', get_template_directory_uri() . '/js/navigation.js', array(), '20160531', true );

	wp_enqueue_script( 'bafra-skip-link-focus-fix', get_template_directory_uri() . '/js/skip-link-focus-fix.js', array(), '20160531', true );

	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}
}
add_action( 'wp_enqueue_scripts', 'bafra_scripts' );

/**
 * Implement the Custom Header feature.
 */
require get_template_directory() . '/inc/custom-header.php';

/**
 * Custom template tags for this theme.
 */
require get_template_directory() . '/inc/template-tags.php';

/**
 * Custom functions that act independently of the theme templates.
 */
require get_template_directory() . '/inc/extras.php';

/**
 * Customizer additions.
 */
require get_template_directory() . '/inc/customizer.php';

/**
 * Load Jetpack compatibility file.
 */
require get_template_directory() . '/inc/jetpack.php';
