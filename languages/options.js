function adjustlanguage(){
	var b = document.body.innerHTML;
	if(widget.preferences.lang!=undefined && widget.preferences.lang!="auto")
		var language = widget.preferences.lang;
	else
		var language = window.navigator.language;
	if(language=="de"){
		b = b.replace(/#Options#/,"Optionen");
		b = b.replace(/#by default#/,"CSS PrefixR ist standardmäßig");
		b = b.replace(/#enabled#/,"aktiv");
		b = b.replace(/#disabled#/,"inaktiv");
		b = b.replace(/#exclude#/,"Trage hier Adressen ein um sie von CSS PrefixR auszuschließen, falls Probleme auftreten");
		b = b.replace(/#include#/,"Du kannst hier Adressen hinzufügen, die CSS PrefixR verbessern soll");
		b = b.replace(/#1address#/g,"1 Adresse pro Zeile");
		b = b.replace(/#hide_button#/,"Toolbar Button nicht anzeigen (Neustart erforderlich)");
		b = b.replace(/#footer#/,"Für Feedback, Fragen und Wünsche könnt ihr mich gerne auch direkt kontaktieren");
	}
	else if(language=="fr"){
		b = b.replace(/#Options#/,"Options");
		b = b.replace(/#by default#/,"par défaut CSS PrefixR est");
		b = b.replace(/#enabled#/,"actif");
		b = b.replace(/#disabled#/,"inactif");
		b = b.replace(/#exclude#/,"Tu peux ajouter des adresses ici, si un site est cassé pour l'exclure de CSS PrefixR");
		b = b.replace(/#include#/,"Tu peux ajouter des adresses ici que tu veux CSS PrefixR de fixer");
		b = b.replace(/#1address#/g,"1 adresse par ligne");
		b = b.replace(/#hide_button#/,"ne montre pas le button de toolbar (nécessite redémarrage)");
		b = b.replace(/#footer#/,"Pour rétroaction et de l'aide, n'hésite pas à me contacter");
	}
	else if(language=="nb"){
		b = b.replace(/#Options#/,"Valg");
	    b = b.replace(/#by default#/,"som standard er CSS PrefixR");
	    b = b.replace(/#enabled#/,"påslått");
	    b = b.replace(/#disabled#/,"avslått");
	    b = b.replace(/#exclude#/,"Legg til en adresse her om CSS PrefixR skaper problemer på siden");
	    b = b.replace(/#include#/,"Legg til en adresse her om du vil at CSS PrefixR skal rette den");
	    b = b.replace(/#1address#/g,"1 adresse per linje");
	 	b = b.replace(/#hide_button#/,"viser ikke verktøylinjeknappen (start Opera skal iverksettes)");
	    b = b.replace(/#footer#/,"For å gi tilbakemeldinger og be om hjelp, ikke nøl med å kontakte meg<br>takk til<a href='http://my.opera.com/daniel' target='_blank' style='background-color:transparent;'>Daniel</a>for å oversette!");
	}
	else if(language=="pl"){
		b = b.replace(/#Options#/,"Ustawienia");
		b = b.replace(/#by default#/,"domyślnie CSS PrefixR będzie");
		b = b.replace(/#enabled#/,"czynny");
		b = b.replace(/#disabled#/,"bierny");
		b = b.replace(/#exclude#/,"Tu możesz podać adresy stron, które CSS PrefixR psuje, aby na nich nie pracował");
		b = b.replace(/#include#/,"Tu możesz podać adresy stron, które CSS PrefixR ma naprawiać");
		b = b.replace(/#1address#/g,"Jedna linia — jeden adres.");
		b = b.replace(/#hide_button#/,"Opuszczenie guzika na pasku narzędzi (potrzebne ponowne uruchomienie)");
		b = b.replace(/#footer#/,"Nie wahaj się kontaktować ze mną, jeśli chcesz wyrazić swoją opinię lub pomóc<br>Dzięki <a href='http://my.opera.com/chocimir' target='_blank' style='background-color:transparent;'>Chocimier</a> za tłumaczenia!");
	}
	else if(language=="ru"){
		b = b.replace(/#Options#/,"Настройка");
		b = b.replace(/#by default#/,"по умолчанию CSS PrefixR");
		b = b.replace(/#enabled#/,"включен");
		b = b.replace(/#disabled#/,"выключен");
		b = b.replace(/#exclude#/,"Вы можете добавить здесь адреса, если сайт ломается, чтобы исключить их из CSS PrefixR'а");
		b = b.replace(/#include#/,"Вы можете добавить здесь адреса, которые вы хотите починить CSS PrefixR'ом");
		b = b.replace(/#1address#/g,"1 адрес на линию");
		b = b.replace(/#hide_button#/,"не отображать кнопку на панели инструментов (перезапустите Оперу, чтобы изменение вступило в силу)");
		b = b.replace(/#footer#/,"Для обратной связи и помощи не стесняйтесь связатся со мной");
	}
	else if(language=="ar"){
		b = b.replace(/#Options#/,"خيارات");
		b = b.replace(/#by default#/,"CSS PrefixR تبعا للأعدادت الأفتراضية فأن");
		b = b.replace(/#enabled#/,"مفعل");
		b = b.replace(/#disabled#/,"مطفأ");
		b = b.replace(/#exclude#/,"، و تضيفهم هنا اذا الموقع انكسرCSS PrefixR تستطيع أن تستخرج العناوين من");
		b = b.replace(/#include#/,"أن يصلحها CSS PrefixR تستطيع أن تضيف العناوين هنا، التي تريد");
		b = b.replace(/#1address#/g,"عنوان واحد لكل خط");
		b = b.replace(/#hide_button#/,"لا تظهر زر شريط الأدوات (اعمل اعادة تشغيل لأوبرا ليتم التفعيل)");
		b = b.replace(/#footer#/,"للرد على الأستفسارات و المساعدة لا تتردد في الأتصال الي<br>Thanks to <a href='http://my.opera.com/mha2999' target='_blank' style='background-color:transparent;'>Muneer Hassan Abdulla</a> for translating!");
	}
	else{
		b = b.replace(/#Options#/,"Options");
		b = b.replace(/#by default#/,"by default CSS PrefixR is");
		b = b.replace(/#enabled#/,"enabled");
		b = b.replace(/#disabled#/,"disabled");
		b = b.replace(/#exclude#/,"You can add addresses in here, if a site gets broken to exclude them from CSS PrefixR");
		b = b.replace(/#include#/,"You can add addresses in here, which you want CSS PrefixR to fix");
		b = b.replace(/#1address#/g,"1 address per line");
		b = b.replace(/#hide_button#/,"do not display toolbar button (restart Opera to take effect)");
		b = b.replace(/#footer#/,"For Feedback and help don't hesitate to contact me");
	}
	document.body.innerHTML = b;
}

function change_lang(new_lang){
	widget.preferences.lang = new_lang;
	document.getElementById("current_lang").src = "images/"+new_lang+".jpg";
	setTimeout(function(){location.reload();}, 300)
}