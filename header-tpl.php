<!DOCTYPE html>

<!-- paulirish.com/2008/conditional-stylesheets-vs-css-hacks-answer-neither/ -->
<!--[if lt IE 7]> <html class="no-js lt-ie9 lt-ie8 lt-ie7" lang="en"> <![endif]-->
<!--[if IE 7]>    <html class="no-js lt-ie9 lt-ie8" lang="en"> <![endif]-->
<!--[if IE 8]>    <html class="no-js lt-ie9" lang="en"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js" lang="en"> <!--<![endif]-->
<head>
  <meta charset="utf-8" />

  <!-- Set the viewport width to device width for mobile -->
  <meta name="viewport" content="width=device-width" />

  <title>Welcome to Foundation</title>
  
  <!-- Included CSS Files (Uncompressed) -->
  <!--
  <link rel="stylesheet" href="stylesheets/foundation.css">
  -->
  
  <!-- Included CSS Files (Compressed) -->
  <link rel="stylesheet" href="stylesheets/foundation.css">
  <link rel="stylesheet" href="stylesheets/app.css">

  <script src="javascripts/modernizr.foundation.js"></script>
  <style>
  .rot-neg-90 {
    -moz-transform:rotate(-270deg); 
    -moz-transform-origin: top left;
    -webkit-transform: rotate(-270deg);
    -webkit-transform-origin: top left;
    -o-transform: rotate(-270deg);
    -o-transform-origin:  top left;
    filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=1);
	background: #69C;
  }
  .ny {
	margin-left: 130px;
  }
  .ldn {
	margin-left: 220px;
  }
  </style>
  
  <!--[if lt IE 10]>
  <style>
  .ny {
	margin-left: -50px;
  }
  .ldn {
	margin-left: 0px;
  }
  </style>
  <![endif]-->
  <!-- IE Fix for HTML5 Tags -->
  <!--[if lt IE 9]>
    <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
  <![endif]-->

</head>
<body style="background: #6699cc;">
  <div style="background: #000066; color: #6699cc !important; width:100%">
  <div class="row" style="background-image:url('images/header.png');background-repeat:no-repeat;width:1150px;height:190px;">

    <div class="five columns">
        <p style="text-align:center;margin-top:80px"><a href="/our-story" style="float:left;">Our Story</a> <a href="/wedding-party">Wedding Party</a> <a href="/the-big-day"  style="float:right;padding-right:50px">The Big Day</a></p>
    </div>
	<div class="two columns">
	  <p style="text-align:center"><a href="/" style="display:block;width:200px;height:100px;">&nbsp;</a></p>
	</div>
    <div class="five columns">
        <p style="text-align:center;margin-top:80px;padding-left:50px"><a href="/out-of-towners" style="float:left;">Out of Towners</a> <a href="/gift-registery">Gift Registry</a> <a href="/rsvp" style="float:right;">RSVP</a></p>
    </div>
  </div>
  </div>