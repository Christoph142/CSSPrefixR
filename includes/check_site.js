function site_is_excluded(current_url){
	if(widget.preferences.enabled_by_default != 2){//not disabled: 0 = not set yet, 1 = enabled
		var i = 0, all_excludes, excl_array = new Array;
		if(widget.preferences.excludes==undefined) all_excludes = "google.\nfacebook.\nebay.\nyoutube.\ntwitter.\nyahoo.\nopera.com\n";
		else all_excludes = "google.\nfacebook.\nebay.\nyoutube.\ntwitter.\nyahoo.\nopera.com\n" + widget.preferences.excludes;
		excl_array = all_excludes.split("\n");
		while(i < excl_array.length){
			excl_array[i] = excl_array[i].replace(/(\*|\s+)/g,""); // wildcard- & alle whitespace-zeichen entfernen
			if(excl_array[i].length>1 && current_url.match(excl_array[i])){ // >1 to exclude empty lines
				return 1;
			}
			i++;
		}
	}
	else{ //if CSS PrefixR is disabled by default:
		var i = 0, found = 0, incl_array = new Array;
		if(widget.preferences.includes!=undefined) incl_array = widget.preferences.includes.split("\n");
		else incl_array = "";
		while(i < incl_array.length){
			incl_array[i] = incl_array[i].replace(/(\*|\s+)/g,""); // wildcard- & alle whitespace-zeichen entfernen
			if(incl_array[i].length>1 && current_url.match(incl_array[i])){ // >1 to exclude empty lines
				found = 1;
			}
			i++;
		}
		if(found == 0){
			return 1;
		}
	}
	return 0;
}