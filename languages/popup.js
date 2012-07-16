function adjustlanguage(){
	var b = document.body.innerHTML;
	if(widget.preferences.lang!=undefined && widget.preferences.lang!="auto")
		var language = widget.preferences.lang;
	else
		var language = window.navigator.language;
		
	if(language=="de"){
		b = b.replace(/#is currently#/,"ist zur Zeit");
		b = b.replace(/#active#/,"aktiv");
		b = b.replace(/#inactive#/,"inaktiv");
		b = b.replace(/#on site#/,"auf dieser Seite");
		b = b.replace(/#configure#/,"CSS PrefixR anpassen");
	}
	else if(language=="fr"){
		b = b.replace(/#is currently#/,"est maintenant");
		b = b.replace(/#active#/,"actif");
		b = b.replace(/#inactive#/,"inactif");
		b = b.replace(/#on site#/,"sur ce site");
		b = b.replace(/#configure#/,"ajuste CSS PrefixR");
	}
	else if(language=="nb"){
		b = b.replace(/#is currently#/,"er for tiden");
		b = b.replace(/#active#/,"aktiv");
		b = b.replace(/#inactive#/,"inaktiv");
		b = b.replace(/#on site#/,"på dette nettstedet");
		b = b.replace(/#configure#/,"konfigurere CSS PrefixR");
	}
	else if(language=="pl"){
		b = b.replace(/#is currently#/,"jest teraz");
		b = b.replace(/#active#/,"czynny");
		b = b.replace(/#inactive#/,"bierny");
		b = b.replace(/#on site#/,"na tej stronie");
		b = b.replace(/#configure#/,"dostosuj CSS PrefixR");
	}
	else if(language=="ru"){
		b = b.replace(/#is currently#/,"в настоящее время");
		b = b.replace(/#active#/,"активен");
		b = b.replace(/#inactive#/,"неактивен");
		b = b.replace(/#on site#/,"на этом сайте");
		b = b.replace(/#configure#/,"настроить CSS PrefixR");
	}
	else if(language=="ar"){
		b = b.replace(/#is currently#/,"حاليا");
		b = b.replace(/#active#/,"نشط");
		b = b.replace(/#inactive#/,"غير نشط");
		b = b.replace(/#on site#/,"في هذا الموقع");
		b = b.replace(/#configure#/,"CSS PrefixR عدل");
	}
	else{
		b = b.replace(/#is currently#/,"is currently");
		b = b.replace(/#active#/,"active");
		b = b.replace(/#inactive#/,"inactive");
		b = b.replace(/#on site#/,"on this site");
		b = b.replace(/#configure#/,"configure CSS PrefixR");
	}
	document.body.innerHTML = b;
}