;(function ($, window, undefined) {
  'use strict';

  var $doc = $(document),
      Modernizr = window.Modernizr;

  
  $.fn.foundationAlerts           ? $doc.foundationAlerts() : null;
  $.fn.foundationAccordion        ? $doc.foundationAccordion() : null;
  $.fn.foundationTooltips         ? $doc.foundationTooltips() : null;
  $('input, textarea').placeholder();
  
  
  $.fn.foundationButtons          ? $doc.foundationButtons() : null;
  
  
  $.fn.foundationNavigation       ? $doc.foundationNavigation() : null;
  
  
  $.fn.foundationTopBar           ? $doc.foundationTopBar() : null;
  
  $.fn.foundationCustomForms      ? $doc.foundationCustomForms() : null;
  $.fn.foundationMediaQueryViewer ? $doc.foundationMediaQueryViewer() : null;
  $.fn.foundationClearing         ? $doc.foundationClearing() : null;
  
    
    $.fn.foundationTabs             ? $doc.foundationTabs() : null;
    
  
  
    $("#featured").orbit();
  

  // UNCOMMENT THE LINE YOU WANT BELOW IF YOU WANT IE8 SUPPORT AND ARE USING .block-grids
   $('.block-grid.two-up>li:nth-child(2n+1)').css({clear: 'both'});
   $('.block-grid.three-up>li:nth-child(3n+1)').css({clear: 'both'});
   $('.block-grid.four-up>li:nth-child(4n+1)').css({clear: 'both'});
   $('.block-grid.five-up>li:nth-child(5n+1)').css({clear: 'both'});

  // Hide address bar on mobile devices
  if (Modernizr.touch) {
    $(window).load(function () {
      setTimeout(function () {
        window.scrollTo(0, 1);
      }, 0);
    });
  }

})(jQuery, this);


$('#real_entry_1').click(function() {
	$('#title-error-box').removeClass('error');
	$('#title-error-text').html('');
});

var namearr2 = [  "glennon", "schwlab", "johnson", "nygren" ];
var namearr3 = [  "kripp", "fox", "labi", "albertini"];
var namearr4 = [  "adams", "feehily" ];
var namearr5 = [  "convey", "o'hagan" ];


$('input[name="entry.2"]').change(function() {
	$('#fname-error-box').removeClass('error');
	$('#fname-error-text').html('');
	
	if ( ($.inArray($('#entry_3').val().toLowerCase().trim(), namearr4) > -1) || (($('#entry_3').val().toLowerCase().trim() == "meehan" && ($('#entry_2').val().toLowerCase().trim() == "francis" || $('#entry_2').val().toLowerCase().trim() == "carmel") )  )){
		$('#guest').css('display', 'block');
		$('#guestt').css('display', 'block');
		$('.name3').css('display', 'inherit');
		$('.name4').css('display', 'inherit');
		$('.name5').css('display', 'none');
	} else	if((($.inArray($('#entry_3').val().toLowerCase().trim(), namearr5) > -1) && ($('#entry_2').val().toLowerCase().trim() != "karl" && $('#entry_2').val().toLowerCase().trim() != "declan") ) ||($('#entry_3').val().toLowerCase().trim() == "meehan" && ($('#entry_2').val().toLowerCase().trim() == "johnjames" || $('#entry_2').val().toLowerCase().trim() == "maureen"))){
		$('#guest').css('display', 'block');
		$('#guestt').css('display', 'block');
		$('.name3').css('display', 'inherit');
		$('.name4').css('display', 'inherit');
		$('.name5').css('display', 'inherit');
	} else {
		$('.name3').css('display', 'none');		
		$('.name4').css('display', 'none');				
		$('.name5').css('display', 'none');
		$('#guest').css('display', 'block');
		$('#guestt').css('display', 'block');
	}
});

$('input[name="entry.3"]').change(function() {

	$('#lname-error-box').removeClass('error');
	$('#lname-error-text').html('');
	
	if( $.inArray($(this).val().toLowerCase().trim(), namearr2) > -1){
		$('#guest').css('display', 'none');
		$('#guestt').css('display', 'none');
		$('.name3').css('display', 'none');
		$('.name4').css('display', 'none');		
		$('.name5').css('display', 'none');
	}  else if( $.inArray($(this).val().toLowerCase().trim(), namearr3) > -1){
		$('#guest').css('display', 'block');
		$('#guestt').css('display', 'block');
		$('.name3').css('display', 'inherit');			
		$('.name4').css('display', 'none');				
		$('.name5').css('display', 'none');
	}  else	if( ($.inArray($(this).val().toLowerCase().trim(), namearr4) > -1) || (($(this).val().toLowerCase().trim() == "meehan" && ($('#entry_2').val().toLowerCase().trim() == "francis" || $('#entry_2').val().toLowerCase().trim() == "carmel") ) ) ){
		$('#guest').css('display', 'block');
		$('#guestt').css('display', 'block');
		$('.name3').css('display', 'inherit');
		$('.name4').css('display', 'inherit');
		$('.name5').css('display', 'none');
	} else	if( (($.inArray($(this).val().toLowerCase().trim(), namearr5) > -1) && ($('#entry_2').val().toLowerCase().trim() != "karl" && $('#entry_2').val().toLowerCase().trim() != "declan") ) || ($(this).val().toLowerCase().trim() == "meehan" && ($('#entry_2').val().toLowerCase().trim() == "johnjames" || $('#entry_2').val().toLowerCase().trim() == "maureen")) ){
		$('#guest').css('display', 'block');
		$('#guestt').css('display', 'block');
		$('.name3').css('display', 'inherit');
		$('.name4').css('display', 'inherit');
		$('.name5').css('display', 'inherit');
	} else {
		$('.name3').css('display', 'none');		
		$('.name4').css('display', 'none');				
		$('.name5').css('display', 'none');
		$('#guest').css('display', 'block');
		$('#guestt').css('display', 'block');
	}
});


$('input[name="entry.4"]').change(function() {
	$('#email-error-box').removeClass('error');
	$('#email-error-text').html('');
});

$('input[name="entry.5"]').change(function() {
		
	$('#response-error-box').removeClass('error');
	$('#response-error-inner-box').css('border', 'none');
	$('#response-error-text').html('');
		
	if( $(this).val()==="Accepts with pleasure"){
		$('.name2').fadeIn(1200)
	} else {
		$('.name2').fadeOut(1200)
	}	
});

var rsvpFields = [{
    name: 'entry.1',
    display: 'Title',    
    rules: 'required'
},{
    name: 'entry.2',
    display: 'First Name',    
    rules: 'required'
},{
    name: 'entry.3',
    display: 'Last Name',    
    rules: 'required'
},{
    name: 'entry.4',
    display: 'Email',    
    rules: 'required'
},{
    name: 'entry.5',
    display: 'Response',    
    rules: 'required'
},
];


function rsvpErrorCallback(errors, event){ 	
	if (errors.length > 0) {
	
        var errorString = '';
		
		//reset errors to off, i'm sure there is a better way to do this, but it's 2am and i'm tired
		$('#title-error-box').removeClass('error');
		$('#title-error-text').html('');
		$('#fname-error-box').removeClass('error');
		$('#fname-error-text').html('');
		$('#lname-error-box').removeClass('error');
		$('#lname-error-text').html('');
		$('#email-error-box').removeClass('error');
		$('#email-error-text').html('');
		$('#response-error-box').removeClass('error');
		$('#response-error-inner-box').css('border', 'none');
		$('#response-error-text').html('');
        
        for (var i = 0, errorLength = errors.length; i < errorLength; i++) {
			switch(errors[i].name) {
			
				case "entry.1" :
					$('#title-error-box').addClass('error');
					$('#title-error-text').html('Your title?');
				break;
				
				case "entry.2" :
					$('#fname-error-box').addClass('error');
					$('#fname-error-text').html('What\'s your first name?');
				break;
				
				case "entry.3" :
					$('#lname-error-box').addClass('error');
					$('#lname-error-text').html('What\'s your last name?');
				break;
				
				case "entry.4" :
					$('#email-error-box').addClass('error');
					$('#email-error-text').html('Please can we have an email address or phone number?');
				break;
				
				case "entry.5" :
					$('#response-error-box').addClass('error');
					$('#response-error-inner-box').css('border', '1px solid #c60f13');
					$('#response-error-text').html('Can\'t make your mind up?');
				break;
			}
            errorString += errors[i].message + '\n';
        }
		return false; 
    } else {	
		return true;
	}
};

//; 
//$('#defaultCountdown').countdown({until: weddingday, 
//    layout: '{dn} {dl}, {hn} {hl}, {mn} {ml} and {sn} {sl}'});
$(function () {
	var weddingday = new Date();
	weddingday = new Date(2013, 11-1, 08, 14, 00)
	//$('#defaultCountdown').countdown({since: weddingday, significant: 3,
	//layout: '{on} {ol}, {dn} {dl}'});
	$('#defaultCountdown').countdown({since: weddingday, format: 'yod', significant: 2, words: 1});
	$('#defaultCountdown2').countdown({since: weddingday, layout: '{dn} {dl}'});
});

$(document).ready (function () {
    $('.home-link').hover(function() {
		$('.nav-bg').css('background-position', '0 0');		
    }, function() {
		$('.nav-bg').css('background-position', '0px -170px');
    });    
});

var fnames = new Array();var ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';fnames[3]='COUNTRY';ftypes[3]='dropdown';fnames[4]='PHONE';ftypes[4]='phone';fnames[5]='MMERGE5';ftypes[5]='text';

var head= document.getElementsByTagName('head')[0];

var script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'http://downloads.mailchimp.com/js/jquery.form-n-validate.js';
head.appendChild(script);
var err_style = '';
try{
    err_style = mc_custom_error_style;
} catch(e){
    err_style = '#mc_embed_signup input.mce_inline_error{border-color:#6B0505;} #mc_embed_signup div.mce_inline_error{margin: 0 0 1em 0; padding: 5px 10px; background-color:#6B0505; font-weight: bold; z-index: 1; color:#fff;}';
}

var style= document.createElement('style');
style.type= 'text/css';
if (style.styleSheet) {
  style.styleSheet.cssText = err_style;
} else {
  style.appendChild(document.createTextNode(err_style));
}
head.appendChild(style);
setTimeout('mce_preload_check();', 250);

var mce_preload_checks = 0;
function mce_preload_check(){
    if (mce_preload_checks>40) return;
    mce_preload_checks++;
    try {
        var jqueryLoaded=jQuery;
    } catch(err) {
        setTimeout('mce_preload_check();', 250);
        return;
    }
    try {
        var validatorLoaded=jQuery("#fake-form").validate({});
    } catch(err) {
        setTimeout('mce_preload_check();', 250);
        return;
    }
    mce_init_form();
}
function mce_init_form(){
    jQuery(document).ready( function($) {
      var options = { errorClass: 'error', errorElement: 'small', onkeyup: function(){}, onfocusout:function(){}, onblur:function(){}  };
      var mce_validator = $("#mc-embedded-subscribe-form").validate(options);
      $("#mc-embedded-subscribe-form").unbind('submit');//remove the validator so we can get into beforeSubmit on the ajaxform, which then calls the validator
      options = { url: 'http://DianaAndCiaran.us6.list-manage.com/subscribe/post-json?u=c0ef1f0dbcc271fb2693225f5&id=d98ba5db30&c=?', type: 'GET', dataType: 'json', contentType: "application/json; charset=utf-8",
                    beforeSubmit: function(){
                        $('#mce_tmp_error_msg').remove();
                        $('.datefield','#mc_embed_signup').each(
                            function(){
                                var txt = 'filled';
                                var fields = new Array();
                                var i = 0;
                                $(':text', this).each(
                                    function(){
                                        fields[i] = this;
                                        i++;
                                    });
                                $(':hidden', this).each(
                                    function(){
                                        var bday = false;
                                        if (fields.length == 2){
                                            bday = true;
                                            fields[2] = {'value':1970};//trick birthdays into having years
                                        }
                                    	if ( fields[0].value=='MM' && fields[1].value=='DD' && (fields[2].value=='YYYY' || (bday && fields[2].value==1970) ) ){
                                    		this.value = '';
									    } else if ( fields[0].value=='' && fields[1].value=='' && (fields[2].value=='' || (bday && fields[2].value==1970) ) ){
                                    		this.value = '';
									    } else {
									        if (/\[day\]/.test(fields[0].name)){
    	                                        this.value = fields[1].value+'/'+fields[0].value+'/'+fields[2].value;									        
									        } else {
    	                                        this.value = fields[0].value+'/'+fields[1].value+'/'+fields[2].value;
	                                        }
	                                    }
                                    });
                            });
                        return mce_validator.form();
                    }, 
                    success: mce_success_cb
                };
      $('#mc-embedded-subscribe-form').ajaxForm(options);

      
    });
}
function mce_success_cb(resp){
    $('#mce-success-response').hide();
    $('#mce-error-response').hide();
    if (resp.result=="success"){
        $('#mce-'+resp.result+'-response').show();
        $('#mce-'+resp.result+'-response').html(resp.msg);
        $('#mc-embedded-subscribe-form').each(function(){
            this.reset();
    	});
    } else {
        var index = -1;
        var msg;
        try {
            var parts = resp.msg.split(' - ',2);
            if (parts[1]==undefined){
                msg = resp.msg;
            } else {
                i = parseInt(parts[0]);
                if (i.toString() == parts[0]){
                    index = parts[0];
                    msg = parts[1];
                } else {
                    index = -1;
                    msg = resp.msg;
                }
            }
        } catch(e){
            index = -1;
            msg = resp.msg;
        }
        try{
            if (index== -1){
                $('#mce-'+resp.result+'-response').show();
                $('#mce-'+resp.result+'-response').html(msg);            
            } else {
                err_id = 'mce_tmp_error_msg';
                html = '<small id="'+err_id+'" style="'+err_style+'"> '+msg+'</small>';
                
                var input_id = '#mc_embed_signup';
                var f = $(input_id);
                if (ftypes[index]=='address'){
                    input_id = '#mce-'+fnames[index]+'-addr1';
                    f = $(input_id).parent().parent().get(0);
                } else if (ftypes[index]=='date'){
                    input_id = '#mce-'+fnames[index]+'-month';
                    f = $(input_id).parent().parent().get(0);
                } else {
                    input_id = '#mce-'+fnames[index];
                    f = $().parent(input_id).get(0);
                }
                if (f){
                    $(f).append(html);
                    $(input_id).focus();
                } else {
                    $('#mce-'+resp.result+'-response').show();
                    $('#mce-'+resp.result+'-response').html(msg);
                }
            }
        } catch(e){
            $('#mce-'+resp.result+'-response').show();
            $('#mce-'+resp.result+'-response').html(msg);
        }
    }
}