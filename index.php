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
    case "wedding-party":
        include 'party-tpl.php';
        break;
    case "the-big-day":
        include 'day-tpl.php';
        break;
    case "out-of-towners":
        include 'town-tpl.php';
        break;
    case "gift-registery":
        include 'gift-tpl.php';
        break;
    case "rsvp":
        include 'rsvp-tpl.php';
        break;
	default:
		header('HTTP/1.0 404 Not Found');
		include 'addons/error/404.php';
	break;
}
 include 'footer-tpl.php';
 ob_end_flush();
 ?>
