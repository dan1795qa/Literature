var ss_memory = null;
var timer_start = 0;
setInterval(function() {ss_show_text();}, 600);

function SearchCall(){
	var newdiv = document.getElementById("extended_search");
	var x = document.getElementById("searchInput").value;



	if (x.length <= 2)
	{	
		newdiv.style.display="none"; 
		return;
	}

	if (x == ss_memory) {
		return;
	}

	document.getElementById("search").className = '';
	if (x.length < 30 && x.length > 2 && x.value != "") {

		if (!timer_start)
		{
			timer_start = 1;
			setTimeout(function() {	timer_start = 0; sajax_do_call("wfAjaxSearchSuggest", [document.getElementById("searchInput").value], newdiv); ss_show_text(); ss_memory = x;}, 500);
		}

	}

	/*ss_show_text();*/
}

function ss_show_text()
{
	x = document.getElementById("searchInput").value;

	if (x == 'поиск')
	{
		return '';
	}
	
	ext_s = document.getElementById("extended_search").innerHTML;

	if (x.length <= 2)
	{	
		document.getElementById("extended_search").style.display="none"; 
		return;
	}

	if (ext_s != '')
	{	
		document.getElementById("extended_search").style.display="block";
		//document.getElementById("hide").style.display="none";
		document.getElementById("search").className = 'extended_active';
	}
	else
	{
		document.getElementById("extended_search").style.display="none";
	}
}

function ss_ajax_onload(){
	var x = document.getElementById('searchInput');

	x.onkeyup = function(){
		SearchCall();
	};

	x.focusin = function(){
		var scint = setInterval(function() {SearchCall();}, 400);
	};

	x.focusout = function(){
		clearInterval(scint);
	};
}

if (document.getElementById('hideonshow'))
{
	document.getElementById('hideonshow').onclick = function (){
		id = document.getElementById('big_send_form'); 
		if (id.style.display == 'none'){id.style.display = 'block';} 
			else{ id.style.display = 'none';}
	}
}
