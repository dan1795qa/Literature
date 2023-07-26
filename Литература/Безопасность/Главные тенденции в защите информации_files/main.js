$(document).ready(function () {
	setTimeout(change_top_news, 1000);
});

function change_top_news() {
	if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && $(window).width() < 900) {
		h_rm = parseInt($(".ta-right").height());  //


		left = $(".main-news-block .ta-left");
		left.removeAttr("id");
		left.after("<article class='ta-left ta-left-mobile' id='ta-left-main'></article>");


		nb = $(".main_fin").height();

		if (nb > 644) nb = 644;

		if ($(".ta-adv-block").height()) {
			var h_sum = 200 + nb; //$(".ta-adv-block").height();
		}
		else {
			var h_sum = -450;
		}

		button = $(".ta-news-ajax");

		$(".ta-news-ajax").remove();

		$(".main-news-block .ta-left > .ta-news-block").each(function () {

			h_sum = h_sum + $(this).height();

			if (h_sum > h_rm) {
				$(this).appendTo('#ta-left-main');
			}


		});

		button.appendTo('#ta-left-main');

		deleter = 2;

		if (document.domain == "tadviser.com") {
			deleter = -7;
		}

		if ((left.height() - h_rm) > 0) {
			minus = parseInt((left.height() - h_rm) / ($(".main-news-block .ta-right ul li").length * 2)) + deleter;
			if (minus < 0) minus = 0;
			console.log("Минус -" + (minus));

			$(".main-news-block .ta-right ul li").css("padding-bottom", 10 + minus);
		}
	}
}


$(document).ready(function () {

	var msleep = 0;
	if ($('.main_fin_inner')) {
		main_width = $(".main_fin").width() + 50;

		inner_width = 0;

		$(".main_fin_inner .ta-news-block").each(function () {
			inner_width += $(this).width() + 30;
		});

		step_width = parseInt(inner_width / ($(".main_fin_inner .ta-news-block").length));
		$(".main_fin_inner").width(inner_width);

		blocks_on_page = Math.floor(main_width / step_width);

		$(".fin_arrow_right").click(function () {

			if ($(this).hasClass("sleep")) return;

			new_margin = (parseInt($(".main_fin_inner").css("margin-left")) - step_width);

			if (new_margin * (-1) + step_width * blocks_on_page <= inner_width) {
				//$(".main_fin_inner").css("margin-left", new_margin+"px");
				$(".main_fin_inner").animate({ 'margin-left': new_margin }, 'slow');
				$(".fin_arrow_left").css("opacity", "1");
				if ((new_margin * (-1) + step_width * (blocks_on_page + 1)) > inner_width) {
					$(".fin_arrow_right").css("opacity", "0.2");
				}
			}
			else {
				$(".fin_arrow_right").css("opacity", "0.2");
			}


			$(this).addClass('sleep');

			setTimeout(function () {
				$(".fin_arrow_right").removeClass('sleep');
			}, 800);

		});

		$(".fin_arrow_left").click(function () {

			if ($(this).hasClass("sleep")) return;

			new_margin = (parseInt($(".main_fin_inner").css("margin-left")) + step_width);

			if (new_margin <= 0) {

				$(".main_fin_inner").animate({ 'margin-left': new_margin }, 'slow');
				$(".fin_arrow_right").css("opacity", "1");
				if (new_margin >= 0) $(".fin_arrow_left").css("opacity", "0.2");
			}
			else {
				$(".fin_arrow_left").css("opacity", "0.2");
			}

			$(this).addClass('sleep');

			setTimeout(function () {
				$(".fin_arrow_left").removeClass('sleep');
			}, 800);
		});

	}
});



$(document).ready(function () {

	$('.search_dop_button').click(function () {
		if ($("#search_dop").css('display') == 'none') {
			$("#search_dop").show(400);
		}
		else {
			$("#search_dop").hide(400);
		}
		return false;
	});

	$(document).click(function (event) {
		if ($(event.target).closest(".ta-header-nav-more-list").length) return;
		$(".ta-header-nav-more-list").hide(400);
		event.stopPropagation();
	});

	$(document).click(function (event) {
		if ($(event.target).closest("#extended_search").length) return;
		if ($(event.target).closest("#ta-header-nav-search").length) return;
		if (event.keyCode == 13) return;

		$("#extended_search").hide(400).html("");
		$("#searchInput").val("");
		event.stopPropagation();
	});

	$("#searchInput").keyup(function (event) {
		if (event.keyCode == 27) {
			$("#extended_search").hide(400).html("");
			$("#searchInput").val("");
			event.preventDefault();
		}
	});

	$('.ta-header-nav-more').click(function (event) {
		if ($(".ta-header-nav-more-list").css('display') == 'none') {
			$(".ta-header-nav-more-list").show(400);
		}
		else {
			$(".ta-header-nav-more-list").hide(400);
		}
		event.stopPropagation();

		return false;
	});




	var timerId = setInterval(function () {
		if ($(document).width() < 1040) {
			if ($("#ta-header-middle-banner2").css('display') == 'none') {
				$("#ta-header-middle-banner1").hide(100);
				$("#ta-header-middle-banner2").show(400);
			}
			else {
				$("#ta-header-middle-banner2").hide(100);
				$("#ta-header-middle-banner1").show(400);
			}
		}
	}, 7000);

	$(window).resize(function () {
		if ($(document).width() > 1040) {
			$("#ta-header-middle-banner1").show();
			$("#ta-header-middle-banner2").show();
		}
		else {
			$("#ta-header-middle-banner1").show();
			$("#ta-header-middle-banner2").hide();
		}
	});

	$('#photo_editor').click(function () {
		window.open("http://www.tadviser.ru/resize/");
	});
});

$(document).ready(function () {
	$('a[href^="#"]').bind("click", function (e) {
		var anchor = $(this);
		if (anchor.attr('href')) {
			of = $(anchor.attr('href')).offset();
			if (of) {
				if ($(window).scrollTop() < $(anchor.attr('href')).offset().top) {
					$('html, body').stop().animate({
						scrollTop: ($(anchor.attr('href')).offset().top)
					}, 600);
				}
				else {
					$('html, body').stop().animate({
						scrollTop: ($(anchor.attr('href')).offset().top + 1)
					}, 600);
				}

				e.preventDefault();
			}
		}
	});
	return false;
});

$(document).ready(function (e) {
	var loc = window.location.hash.replace("#", "");
	if (loc != "" && loc.search('&') == -1) {
		of = $("#" + loc).offset();
		if (of) {
			var destination = (of.top);
			$('html, body').stop().animate({
				scrollTop: destination
			}, 300);
		}
	}
});

function scrollto(id) {
	$('html, body').stop().animate({
		scrollTop: ($(id).offset().top)
	}, 600);
}

/*
// Залипание меню
home_h = $("#home").outerHeight();
$(window).scroll(function(){
	if($(this).scrollTop() > home_h){
		$('.menu-top').addClass('fixed');
	}
	else if ($(this).scrollTop() < home_h){
		$('.menu-top').removeClass('fixed');
	}
});
*/

const cyrb53 = function (str, seed = 0) {
	let h1 = 0xdeadbeef ^ seed, h2 = 0x41c6ce57 ^ seed;
	for (let i = 0, ch; i < str.length; i++) {
		ch = str.charCodeAt(i);
		h1 = Math.imul(h1 ^ ch, 2654435761);
		h2 = Math.imul(h2 ^ ch, 1597334677);
	}
	h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^ Math.imul(h2 ^ (h2 >>> 13), 3266489909);
	h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^ Math.imul(h1 ^ (h1 >>> 13), 3266489909);
	return 4294967296 * (2097151 & h2) + (h1 >>> 0);
};

window.onload = function () {
	var news1 = document.getElementById('tab_1');
	var news2 = document.getElementById('tab_2');
	var news3 = document.getElementById('tab_3');
	if (news1) {
		news1.onclick = function () {
			document.getElementById('top_news').className = 'active_1';
			return false;
		}
	}
	if (news1) {
		news2.onclick = function () {
			document.getElementById('top_news').className = 'active_2';
			return false;
		}
	}
	if (news1) {
		news3.onclick = function () {
			document.getElementById('top_news').className = 'active_3';
			return false;
		}
	}

}


function show_judge(id, type) {
	if (type == 'show') {
		document.getElementById(id + '_small').style.display = 'none';
		document.getElementById(id + '_big').style.display = 'block';
	}
	else {
		document.getElementById(id + '_small').style.display = 'block';
		document.getElementById(id + '_big').style.display = 'none';
	}
}


function show_person_form() {
	person_now = document.getElementById('person_now');
	person_old = document.getElementById('person_old');
	b_now = document.getElementById('person_now_button');
	b_old = document.getElementById('person_old_button');


	if (person_old.style.display == 'none') {
		person_old.style.display = 'block';
		person_now.style.display = 'none';
		b_now.style.fontWeight = 'normal';
		b_old.style.fontWeight = 'bold';
	}
	else {
		person_old.style.display = 'none';
		person_now.style.display = 'block';
		b_now.style.fontWeight = 'bold';
		b_old.style.fontWeight = 'normal';
	}
}


start_graph_show = 3;

function graph_show(id, name) {
	if (typeof name == "undefined") {
		var name = 'main_graph';
	}

	start_graph_show = id;

	for (i = 1; i <= 7; i++) {
		if (i == id) {
			document.getElementById(name + '_' + i).style.display = "block";
		}
		else {
			a = document.getElementById(name + '_' + i);
			a.style.display = "none";
		}
	}

}

var cake_button_id = '';
var array_button_id = new Array();

function show_cake2(id, name, button_name) {
	if (typeof (name) == "undefined") {
		name = 'integr';
	}

	if (typeof (button_name) == "undefined") {
		button_name = 'cake_button';
	}

	if (typeof (array_button_id[name]) == "undefined") {
		array_button_id[name] = "";
	}

	cake_button_id = array_button_id[name];

	if (id != cake_button_id) {
		document.getElementById(name + id).className = '';
		document.getElementById(button_name + id).className = 'graph_button_year graph_button_selected';

		document.getElementById(name + cake_button_id).className = 'integr_hidden';
		document.getElementById(button_name + cake_button_id).className = 'graph_button_year';

		cake_button_id = id;
	}

	array_button_id[name] = cake_button_id;
}

function show_cake_main(id, name, button_name) {
	if (typeof (name) == "undefined") {
		name = 'integr';
	}

	if (typeof (button_name) == "undefined") {
		button_name = 'cake_button';
	}

	if (typeof (array_button_id[name]) == "undefined") {
		array_button_id[name] = "";
	}

	cake_button_id = array_button_id[name];

	if (id != cake_button_id) {
		document.getElementById(name + id).className = '';
		document.getElementById(button_name + id).className = 'ta-msbutton ta-msbutton-year  active';

		document.getElementById(name + cake_button_id).className = 'hidden';
		document.getElementById(button_name + cake_button_id).className = 'ta-msbutton ta-msbutton-year';

		cake_button_id = id;
	}

	array_button_id[name] = cake_button_id;
}


function show_graph(name) {
	if (typeof (last_name) == "undefined") {
		last_name = "";
	}

	if (name != last_name) {
		document.getElementById("cdia" + last_name).className = 'cake_button';
		document.getElementById("cdia" + name).className = 'cake_button cake_button_selected';

		document.getElementById("cd" + last_name).className = 'integr_hidden';
		document.getElementById("cd" + name).className = '';

		last_name = name;
	}
}

$(document).ready(function () {
	$(".graph_ajax").click(function () {
		raw = $(this).attr('raw');

		$(".graph_ajax").removeClass('active');
		$(this).addClass('active');

		$("#main_tech_inner").animate({ opacity: '0.6' }, 200);

		graph_show_inner(raw);
		return false;
	});

	$(".gsbc").unbind('click');
	$(".gsbc").click(function (e) {

		page_id = $(this).attr('show');

		$('.ta-main-select-header [page]').hide();
		$('.ta-main-select-header [page]').removeClass("show");

		$('.ta-main-select-header [page=' + page_id + ']').show();
		$('.ta-main-select-header [page=' + page_id + ']').addClass("show");

		return false;
	});

	$('.ta-graph-button').click(function () {
		$(".ta-graph-button").removeClass('active');
		$(this).addClass('active');
	});

	each_rand = getRandomInRange(0, 11);

	$('.graph_ajax').each(function (i) {
		if (i == each_rand) {
			raw = $(this).attr('raw');
			$(".graph_ajax").removeClass('active');
			$(this).addClass('active');
			graph_show_inner(raw);

			return false;
		}
	});
});

function getRandomInRange(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}


function graph_show_inner(raw) {
	if (raw) {
		var unix = Math.round(+new Date() / 1000);
		$.ajax({
			url: "/get_cache.php?name=" + raw + "&" + unix
		}).done(function (msg) {
			$("#main_tech_inner").html(msg).animate({ opacity: '1' }, 400);


			$('.ta-graph-button').click(function () {
				$(".ta-graph-button").removeClass('active');
				$(this).addClass('active');
			});

			graph_show(start_graph_show);
			if (start_graph_show == 7) {
				drawChartT();
			}
			$(".ta-graph-button").removeClass("active");
			$(".ta-graph-button[raw='" + start_graph_show + "']").addClass("active");

		});
	}

	return true;
}


$(document).ready(function () {

	$("#lider_form select").change(function () {

		type = $('#select_type').val();
		tech = $('#select_tech').val();
		otr = $('#select_otr').val();
		$("#lider_form #lider_result").animate({ opacity: '0.1' }, 100);

		$.ajax({
			url: "/get_lider.php?type=" + type + "&tech=" + tech + "&otr=" + otr
		}).done(function (msg) {
			$("#lider_form #lider_result").html(msg);
			$("#lider_form #lider_result").animate({ opacity: '1' }, 200);
		});

	});
});


$('document').ready(function () {
	$('#table_hidden_button').click(function () {
		$(this).hide();
		$('#table_hidden').show();
	});

	$('.cbigs').click(function () {
		if (!$(this).hasClass('selected')) {
			$('.cbigs').removeClass('selected');
			$(this).addClass('selected');
			t = $(this).attr('type');
			$('.case_type').hide(600);
			$('.case_type.' + t).show(300);

			$(".cwiki_table tbody tr").each(function () {
				$(this).show();
			});

		}
	});

	$('.case_type .selector_letter').click(function () {
		l = $(this).attr('letter');
		$('.case_type .selector_letter').removeClass('selected');
		$(this).addClass('selected');

		$(".cwiki_table tbody tr").each(function () {
			if ($(this).attr('letter') == l || l == '') {
				$(this).show();
			}
			else {
				$(this).hide(100);
			}
		});


		return false;

	});
});

function ctableshow(t, th) {
	$('.ctable').hide(100);
	$('.' + t).slideToggle(700);

	$(".ctable_button").removeClass('active');
	$(th).addClass('active');
}

$(document).ready(function () {
	$().UItoTop({ easingType: 'easeOutQuart' });
});


function new_window(name, link) {
	if (name == "popup") {
		newWindow = window.open(link, "popup", "scrollbars=1, location=0, menubar=0, resizable=1, width=650, height=500, top=10, left=20");
	}
}

function new_window2(name, link) {
	if (name == "popup") {
		newWindow = window.open(link, "popup", "scrollbars=1, location=0, menubar=0, resizable=1, width=420, height=200, top=10, left=20");
	}
}

sw = document.getElementById('show_news_window');
if (sw) {
	sw.innerHTML = "<div style='padding-top: 6px;'><a class='clinks' onclick=\"show_window('/index.php/Служебная:PublicationSelect', 650, 620);  return false;\" href='#' style='margin-top: 5px;'>Выбрать статьи</a></div>";
}

function show_window(href, wd, ht) {
	var left = screen.availWidth / 2 - wd / 2;
	var top = screen.availHeight / 2 - ht / 2;
	window.open(href, "", "width=" + wd + ", height=" + ht + ", left=" + left + ", top=" + top + ", menubar=0, toolbar=0, location=0, directories=0, status=0, resizable=1, scrollbars=1");
}
/*
$('document').ready(function (){
	$(".ta-news-ajax").click(function() {
		ajax_main_news(this);
		return false;
	});

});
*/

function ajax_main_news(t) {
	last_id = $(t).attr('last_id');
	$.ajax({
		url: "/ajax/ajax_more_news.php?last_id=" + last_id + "&rand=" + Math.random(),
		success: function (data) {
			$("#ta-left-main").append(data);
		}
	});
	$(t).hide();
}

function flex_banner() {
	if ($('#pub_top_flex').length < 1) return false;

	e = $('#pub_top_flex');
	if (e.css('visibility') == 'hidden' && e.text().length > 100) {
		$('#pub_bottom_flex').append($('#pub_top_flex>a'));
		$('#pub_top_flex').text('');
	}
	else if (e.css('visibility') != 'hidden' && $('#pub_bottom_flex').text().length > 100) {
		$('#pub_top_flex').append($('#pub_bottom_flex>a'));
		$('#pub_bottom_flex').text('');
	}


}

setInterval(flex_banner, 1000);

jQuery(function ($) {
	$(document).mouseup(function (e) { // событие клика по веб-документу
		var div = $("#fullscreen"); // тут указываем ID элемента
		if (!div.is(e.target) // если клик был не по нашему блоку
			&& div.has(e.target).length === 0) { // и не по его дочерним элементам
			div.remove(); // скрываем его
			$('.overlay').remove();
		}
	});
});





$("#show_disq").click(function () {
	if ($("#block_disq").css('display') != 'none') {
		$("#block_disq").hide(1000);
	}
	else {
		$("#block_disq").show(1000);
	}

	return false;
});

function getRandomInRange(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

$(document).ready(function (e) {

	$(".ta-main-otr-header span").click(function () {
		$(".ta-main-otr-header span").removeClass('active');
		$(this).addClass('active');
		raw = $(this).attr('raw');
		$(".main-otr-block-item").hide();
		$("." + raw).show();
	});

	le = $(".ta-main-otr-header span").length - 1;
	raw = $(".ta-main-otr-header span").eq(getRandomInRange(0, le)).attr("raw");
	$(".ta-main-otr-header span").removeClass('active');
	$(".ta-main-otr-header span[raw='" + raw + "']").addClass('active');

	$(".main-otr-block-item").hide();
	$("." + raw).show();
});


$(document).ready(function (e) {
	$(".links_list h2").each(function (index) {
		$(this).attr("id", "h2_" + index);

	});
	/*
		$(".links_list div").each(function(index) {
	
			if (index > 1)
			{
				$(this).hide();
				$(this).prev().addClass("plus");
			}
		});
	*/
	$(".links_list h2").click(function () {


		if ($(this).next().css("display") == 'none') {
			$(".links_list div").hide();
			$(".links_list h2").addClass("plus");

			$(this).next().show(300);
			$(this).removeClass("plus");
		}
		else {
			$(this).next().hide(300);
			$(this).addClass("plus");
		}

		$("html, body").animate({ scrollTop: $(this).offset().top + "px" });

	});


});

$(document).ready(function (e) {
	div = $(".clients_inner");
	max_width = $(".clients_inner").width() - $(".clients").width();

	step_base = 250;

	$(".clients .leftarrow").css("opacity", "0.3");

	$(".clients .rightarrow").click(function () {
		step = step_base;
		new_marg = parseInt(div.css("margin-left")) - step;
		pos = max_width + step - new_marg * (-1);
		if (pos < 0) step = step + pos;
		if (pos > 0) {
			$(".leftarrow").css("opacity", "1");
			div.css("margin-left", new_marg + "px");
		}
		else {
			$(".clients_inner p").html($(".clients_inner p").html() + $(".clients_inner p").html());
			div.width(div.width * 2);
			max_width = $(".clients_inner").width() - $(".clients").width();
			new_marg = parseInt(div.css("margin-left")) - step;
			div.css("margin-left", new_marg + "px");


			//$(this).css("opacity", "0.3");
		}
	});

	$(".clients .leftarrow").click(function () {
		step = step_base;
		new_marg = parseInt(div.css("margin-left")) + step;
		pos = max_width - step - new_marg * (-1);

		if (pos < max_width) {
			$(".rightarrow").css("opacity", "1");
			div.css("margin-left", new_marg + "px");
		}
		else {
			$(this).css("opacity", "0.3");
		}
	});

	$(".analytics_type_filter span").click(function () {
		b_class = $(this).attr('class');
		n_class = b_class.replace("b-", "");
		console.log(n_class);

		$(".analytics_type_filter span").css('color', 'black');
		$(this).css("color", "red");

		if (b_class != 'b-none') {
			$(".bigblock, .smallblock").addClass("hideinner");
			$(".aleft h2").hide();
			$(".backline").hide();

			$("." + n_class).removeClass("hideinner");
			$(".smallblock_root").show();
			$("." + n_class).prev("h2").show();

			$(".smallblock_root").each(function () {
				var hide = 0;
				l = $(this).find(".smallblock.hideinner").length;
				l2 = $(this).find(".smallblock").length;

				if (l == l2) $(this).hide();

			});

			$(".links_list div").hide();
			$(".links_list h2").addClass("plus");
		}
		else {
			$(".bigblock, .smallblock").removeClass("hideinner");
			$(".aleft h2").show();
			$(".backline").show();
			$(".smallblock_root").show();
		}

		$("html, body").animate({ scrollTop: $(".aleft").offset().top + "px" });


	});
});


if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
}
else {
	jQuery.fn.reverse = [].reverse;
	$(document).ready(function () {

		var dpd = 0;
		if ($(".div_pub_diagr").height()) dpd = $(".div_pub_diagr").height();

		var ptf = 0;
		if ($("#pub_top_flex").height()) ptf = $("#pub_top_flex").height();


		max_h = $('.news_body').height() + $('.zdrav_left').height() + dpd + ptf;
		now_h = $('#content').height() - 300;

		console.log("max_h " + max_h + " - " + $('.news_body').height());
		console.log("now_h " + now_h);

		if ($("#amplitude-player").height()) {
			now_h = now_h - 100;
		}

		if (max_h < now_h) {
			i = 0;
			count = $(".block_rll .news_mlenta2").length;
			$(".block_rll .news_mlenta2").reverse().each(function () {

				i++;

				if (max_h > now_h || i >= count) {
					return false;
				}

				now_h = now_h - $(this).height();
				$(this).hide();
			});

			$(".block_rll").append('<div class="news_mlenta news_mlenta2" id="rll_show_more" style="text-align: center;padding: 5px;width: 100%;cursor: pointer;">Показать больше</div>');

			$("#rll_show_more").click(function () {
				$(".news_mlenta2").show(300);
				$(this).hide();
			});
		}

	});

}

/*copy link*/
(function ($) {
	$.fn.addClassAndRemove = function (classAdd, timeAdd, timeRemove) {
		let element = this;
		let addIt = function () {
			element.addClass(classAdd);
		};
		let removeIt = function () {
			element.removeClass(classAdd);
		};
		setTimeout(function () {
			addIt();
			setTimeout(removeIt, timeRemove);
		}, timeAdd);
		return this;
	};
}(jQuery));

$('.short-link').click(function (e) {

	if (window.location.hostname == 'tadviser.com') {
		$(this).addClassAndRemove('link-note-eng', 0, 3000); // function called with parameters
	}
	else {
		$(this).addClassAndRemove('link-note', 0, 3000); // function called with parameters
	}

	e.preventDefault();
	var copyText = $(this).attr('rel');

	var $temp = $("<input>");
	$("body").append($temp);
	$temp.val(copyText).select();
	document.execCommand("copy");
	$temp.remove();


	document.execCommand('copy');
});


$("#pconf .add_form_div input[type=image]").click(function () {
	t = $(this);
	t.css('filter', "grayscale(1)");
	t.css('cursor', 'auto')

	setTimeout(
		() => { t.attr("disabled", "disabled") },
		300,
		t);

	setTimeout(
		() => {
			t.css('filter', "grayscale(0)");
			t.css('cursor', "pointer");
			t.removeAttr("disabled");
		},
		5000,
		t);
});


$(".show_all_cp").click(function () {

	$(".cwiki_table .tr_hide").slideToggle('slow');

	if ($(this).html() == "Показать все проекты") {
		$(this).html("Скрыть проекты");
	}
	else {
		$(this).html("Показать все проекты");
	}

	$('html,body').stop().animate({ scrollTop: $('#pasport').offset().top }, 1000);
	e.preventDefault();
	return false;
});

$("#token_show").click(function () {
	$("#token_info").slideToggle(600);
});

$(".banner_information").each(function(){
	a = $(this).next("a");
	$(this).prependTo(a);
	$(this).before("<div class='banner_bib'><div class='banner_bib-overlay'></div><div class='banner_bib-points'><svg width='8' height='20' viewBox='0 0 8 20' fill='white' xmlns='http://www.w3.org/2000/svg'><circle cx='4' cy='4' r='1.5'></circle><circle cx='4' cy='10' r='1.5'></circle><circle cx='4' cy='16' r='1.5'></circle></svg></div></div>");
});

$(".banner_bib").click(function(event){
	$(this).next().toggle(600);
	event.stopPropagation()
	return false;
});


$(document).ready(function(){


    setTimeout(function() {
        $("table .sort a").each(function(){
            ts_resortTable(this); 
        });

    }, 500);
});

function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}