<?php 

ob_start();

$host = $_SERVER['HTTP_HOST'];

$menu = strtolower(filter_input(INPUT_SERVER, 'REQUEST_URI', FILTER_SANITIZE_STRING));
$menu = str_replace("/", "", $menu);
if(empty($menu)) { $menu = "home"; }

include 'pages/header-tpl.php';

switch ($menu) {
    case "home":
        include 'pages/home-tpl.php';
        break;
    case "our-story":
        include 'pages/story-tpl.php';
        break;
    case "wedding-party":
        include 'pages/party-tpl.php';
        break;
    case "the-big-day":
        include 'pages/day-tpl.php';
        break;
    case "out-of-towners":
        include 'pages/town-tpl.php';
        break;
    case "gift-registery":
        include 'pages/gift-tpl.php';
        break;
    case "rsvp":
        include 'pages/rsvp-tpl.php';
        break;
	default:
		header('HTTP/1.0 404 Not Found');
		include 'addons/error/404.php';
	break;
}
 include 'pages/footer-tpl.php';
 ob_end_flush();
 ?>
