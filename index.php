<?php 

ob_start();

$host = $_SERVER['HTTP_HOST'];

$menu = strtolower(filter_input(INPUT_SERVER, 'REQUEST_URI', FILTER_SANITIZE_STRING));
$menu = str_replace("/", "", $menu);
if(empty($menu)) { $menu = "home"; }

include 'header-tpl.php';

switch ($menu) {
    case "home":
        include 'home-tpl.php';
        break;
    case "our-story":
        include 'story-tpl.php';
        break;
    case "speakers":
        include 'speakers-tpl.php';
        break;
    case "schedule":
        include 'schedule-tpl.php';
        break;
    case "sponsors":
        include 'sponsors-tpl.php';
        break;
    case "socials":
        include 'socials-tpl.php';
        break;
    case "venue":
        include 'venue-tpl.php';
        break;
	default:
		header('HTTP/1.0 404 Not Found');
		include '../addons/error/404.php';
	break;
}
 include 'footer-tpl.php';
 ob_end_flush();
 ?>
