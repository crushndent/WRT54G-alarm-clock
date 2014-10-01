// JavaScript Document

// toggles element from none to block based on id
function flip(rid) {
	current=(document.getElementById(rid).style.display == 'none') ? 'block' : 'none';
	document.getElementById(rid).style.display = current;
}
/*
// gets the nav menu to work in IE since the pseudo class ":hover" only works on links (<a>) in IE
startList = function() {
if (document.all&&document.getElementById) {
navRoot = document.getElementById("menu");
for (i=0; i<navRoot.childNodes.length; i++) {
node = navRoot.childNodes[i];
if (node.nodeName=="LI") {
node.onmouseover=function() {
this.className+=" over";
  }
  node.onmouseout=function() {
  this.className=this.className.replace(" over", "");
   }
   }
  }
 }
}
window.onload=startList;
*/
//function bigOnLoadFunction () { getCurrent();startDisplaying(); startList();}

function launch_wcsg()
        {
        media_player=window.open
   ("/tune/index.php","media_player",'statusbar=0,toolbar=0,menubar=0,scrollbars=0,resizable=no,width=460,height=350')
  }

function launch_hkr()
        {
        media_player=window.open
   ("http://www.hiskids.net/player/?show=hkr","media_player",'statusbar=0,toolbar=0,menubar=0,scrollbars=0,resizable=no,width=560,height=410')
  }

function launch_webcams()
        {
        media_player=window.open
   ("/sharathon/webcams.php","webcams",'statusbar=0,toolbar=0,menubar=0,scrollbars=0,resizable=no,width=725,height=300')
  }

function launch_privacy()
        {
        privacy=window.open
   ("/privacy/window.php","privacy",'statusbar=0,toolbar=0,menubar=0,scrollbars=1,resizable=no,width=460,height=350')
  }

function launch_rand($url) {
	random_win=window.open
   ($url,"random_win",'statusbar=0,toolbar=0,menubar=0,scrollbars=1,resizable=no,width=400,height=400')
  }

function launch_win($keyword) {
	random_win=window.open
   ("/includes/window.php?keyword="+$keyword,"random_win",'statusbar=0,toolbar=0,menubar=0,scrollbars=1,resizable=no,width=400,height=400')
  }

function launch_video(video) {
	random_win=window.open
   ("/includes/video.php?video_keyword="+video,"random_win",'statusbar=0,toolbar=0,menubar=0,scrollbars=1,resizable=no,width=466,height=430')
  }

function launch_mp3_news($id) {
        random_win=window.open
   ("/includes/window_mp3_news.php?id="+$id,"random_win",'statusbar=0,toolbar=0,menubar=0,scrollbars=1,resizable=no,width=400,height=200')
  }

function hkr_order($station_id)
        {
        hkr_order_win=window.open
   ("https://hiskids.net/radios/door.php?station_id="+$station_id,"hkr_order",'statusbar=0,toolbar=0,menubar=0,scrollbars=1,resizable=no,width=470,height=460')
  }
var nowPlaying = (function() {
	var that = {};
	var display; 
	that.check = function() {
		cvhXHR(that.update, '/includes/wcsg_current_playing.php');
	}
	that.update = function(XHR) {
		display.innerHTML = XHR.responseText;
	}
	that.init = function() {
		display = document.getElementById('current');
		setInterval(that.check, 30000);
	}
	return that;
})();
function getCurrent() {
    var current=""
    xmlhttp = new XMLHttpRequest();
    myurl="/includes/wcsg_current_playing.php";
    xmlhttp.open("GET", myurl, true);
    xmlhttp.onreadystatechange=function() {
      if (xmlhttp.readyState==4) {
         displayCurrent(xmlhttp.responseText);    }}
    xmlhttp.send(null);
}

function displayCurrent(currenthtml) {
   document.getElementById("current").innerHTML=currenthtml;
}


function startDisplaying() {
    var interval=setInterval("getCurrent()",30000); // milliseconds
    return interval;
}

// Radioblog Archive AJAX
function createRequestObject() {
    var ro;
    var browser = navigator.appName;
    if(browser == "Microsoft Internet Explorer"){
        ro = new ActiveXObject("Microsoft.XMLHTTP");
    }else{
        ro = new XMLHttpRequest();
    }
    return ro;
}

var http = createRequestObject();

function sndReq(month,user) {
    http.open('get', '/includes/blogs/archive_month.ajax.php?month='+month+'&user='+user);
    http.onreadystatechange = handleResponse;
    http.send(null);
}

function handleResponse() {
    if(http.readyState == 4){
        var response = http.responseText;

        document.getElementById('radioblog_archive').innerHTML = response;
    }
}

// set Google's background image for the CSE
(function() {
var f = document.getElementById('searchbox_002000615475373984251:s0rhgn_bmmq');
if (!f) {
f = document.getElementById('searchbox_demo');
}
if (f && f.q) {
var q = f.q;
var n = navigator;
var l = location;
if (n.platform == 'Win32') {
q.style.cssText = 'border: 1px solid #7e9db9; padding: 2px;';
}
var b = function() {
if (q.value == '') {
//q.style.background = '#FFFFFF url(\x2Fgraphics\x2Fgoogle_custom_search_watermark.gif) left no-repeat';
q.style.background = '#FFFFFF url(http:\x2F\x2Fwww.google.com\x2Fcoop\x2Fintl\x2Fen\x2Fimages\x2Fgoogle_custom_search_watermark.gif) left no-repeat';
}
};
var f = function() {
q.style.background = '#ffffff';
};
q.onfocus = f;
q.onblur = b;
if (!/[&?]q=[^&]/.test(l.search)) {
b();
}
}
})();
