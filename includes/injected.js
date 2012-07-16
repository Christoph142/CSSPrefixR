window.addEventListener('DOMContentLoaded', function(){ // internal CSS-code

	// site_is_excluded(current_url) is declared in check_site.js
	if(site_is_excluded(document.URL)) return;
	
	// style tags within the head section:
	for(var i=0; i<document.getElementsByTagName("style").length; i++){
		var style = document.getElementsByTagName("style")[i].innerHTML;
		if(style.search(/-(moz|ms|webkit|khtml|o)-/)!=-1)
			document.getElementsByTagName("style")[i].innerHTML = fix_prefixes(style);
	}

	// style-properties noted within the body:
	if(document.body.outerHTML.search(/<[^>]*style=[^>]*-(moz|ms|webkit|khtml|o)-[^<]*>/)!=-1){
		var bodystyles = document.body.outerHTML;
		var regexp = /<[^>]*style=([^>]*-(moz|ms|webkit|khtml|o)-[^<]*)>/gim;
		while( regexp.test(bodystyles) ){
			var original = RegExp.$1;
			var verbessert = fix_prefixes(RegExp.$1);
			bodystyles = bodystyles.replace(original, verbessert);
		}
		document.body.outerHTML = bodystyles;
	}
	
}, true);

window.opera.addEventListener('BeforeCSS', function(userJSEvent){ // external CSS-files

	if(site_is_excluded(document.URL)) return;
	
	if(userJSEvent.cssText.search(/-(moz|ms|webkit|khtml|o)-/)!=-1)
		userJSEvent.cssText = fix_prefixes(userJSEvent.cssText);
		
}, false);

function fix_prefixes(s){
	s = s.replace(/[^-](transition|transform|animation)/,"-o-$1");//-o--prefix CSS3 styles without prefix
	s = s.replace(new RegExp(widget.preferences.prefixfree,"gim"),'$2');//create prefixfree versions for all known working properties
	s = s.replace(/-(moz|ms|webkit|khtml)-([^:])/gim,'-o-$2');//change prefixes to -o- for all of the remaining ones
	s = s.replace(/(-o-[^;]+;\s*)\1+/gim,"$1");//removes duplicates of -o-properties
	return s;
};