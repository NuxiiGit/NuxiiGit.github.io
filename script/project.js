// terrible hack to scroll to the current section
if(window.location.hash) {
	var hash = window.location.hash.substring(1);
	var elem = document.getElementById(hash);
	if (elem != null) {
		elem.style.display = 'block';
		elem.scrollIntoView();
		elem.setAttribute('checked', 'checked');
		elem.style.display = 'none';
	}
}
