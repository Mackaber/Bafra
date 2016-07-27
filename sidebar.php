<?php
/**
 * The sidebar containing the main widget area.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package bafra
 */

if ( ! is_active_sidebar( 'sidebar-1' ) ) {
	return;
}
?>

<style type="text/css">
    .navbar  {
        border-width: 0 0 1px;
        border-radius: 0;
        background-color: rgba(34, 34, 34, 0);
        border: none;
    }

    .navbar-inverse .navbar-nav > li > a {
        background-color: rgba(0, 0, 0, 0.47);
        margin: 0 10px;
        color: #9d9d9d;
    }

    .navbar-inverse .navbar-nav > li > a:hover {
        background-color: rgba(0, 0, 0, 1.0);
        margin: 0 10px;
        color: #FFF;
        -webkit-transition: 2s; /* Safari */
        transition: 2s;
    }

    .navbar-inverse .navbar-collapse, .navbar-inverse .navbar-form {
      border: none;
    }
</style>

<!-- <aside id="secondary" class="widget-area" role="complementary">
	<?php // dynamic_sidebar( 'sidebar-1' ); ?>
</aside>
 --><!-- #secondary -->
<?php if(is_page_template ( 'gallery.php' )): ?>
    <div class="navbar navbar-inverse opaque-navbar">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navMain">
            <span class="glyphicon glyphicon-chevron-right" style="color:white;"></span>
          </button>
          <a class="navbar-brand" href="/">
              <img class="logo alignnone size-large wp-image-105" src="//bafra.impactum.mx/wp-content/uploads/sites/12/2016/06/logo_blanco2.svg" alt="logo_blanco2" width="200">
          </a>
        </div>
        <div class="collapse navbar-collapse" id="navMain">
          <ul class="nav navbar-nav pull-right">
            <li><a href="/">Página Principal</a></li>
            <li><a href="#">Contáctanos</a></li> 
            <li class="active"><a href="#">Galeria</a></li> 
          </ul>
        </div>
      </div>
    </div>
<?php else: ?>
    <div class="navbar navbar-inverse opaque-navbar">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navMain">
            <span class="glyphicon glyphicon-chevron-right" style="color:white;"></span>
          </button>
          <a class="navbar-brand" href="/">
              <img class="logo alignnone size-large wp-image-105" src="//bafra.impactum.mx/wp-content/uploads/sites/12/2016/06/logo_blanco2.svg" alt="logo_blanco2" width="200">
          </a>
        </div>
        <div class="collapse navbar-collapse" id="navMain">
          <ul class="nav navbar-nav pull-right">
            <li class="active"><a href="#">Página Principal</a></li>
            <li><a href="#">Contáctanos</a></li> 
            <li><a href="/galeria">Galeria</a></li> 
          </ul>
        </div>
      </div>
    </div>
<?php endif; ?>

