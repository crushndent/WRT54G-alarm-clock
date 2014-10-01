/********
* cvhXHR - A friendly wrapper for XMLHttpRequest
* (c) 2008 Chris VandenHeuvel (fastballweb.com)
* version 1.1 (2008-08-04)
* callback is the function you want to run when the server responds
* callback receives XHR as a parameter
* post is the string you'd send in a POST request
* format post like a query string minus the opening ampersand
********/
function cvhXHR(callback, url, post) {
	var that = {};
  var XHR; 
  var post = (post === undefined) ? null : post;
  if (window.XMLHttpRequest) {
    XHR = new XMLHttpRequest();
  } else if (window.ActiveXObject) {
    XHR = new ActiveXObject("Microsoft.XMLHTTP");
  } else {
    XHR = false;
  }
	var XHRMonitor = function() {
    if(XHR.readyState == 4) {
			if(XHR.status == 200) {
	   		callback(XHR);
			} else {
	  		throw new Error("XHR error:\n"+XHR.statusText);
			}
    }
  }
  if(XHR) {
    XHR.onreadystatechange = XHRMonitor; 
    XHR.open((post ? "POST" : "GET"), url, true);
    if(post) {
      XHR.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
      XHR.send(post);
    } else {
      XHR.send('');
    }
  }
	return that;
}
