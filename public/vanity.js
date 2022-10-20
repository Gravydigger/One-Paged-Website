function changePage(clicked){
	var content = document.getElementsByClassName("content");
	var contentIds = [];
	for (let i = 0; i < content.length; i++) {
		contentIds.push(content[i].id);
	}
	
	//Note: There is probably a more elegent way to do this that makes it look nicer. Prob should use Vue.js or something like that.
	document.getElementById(contentIds[0]).classList.add("hidden");
	document.getElementById(contentIds[1]).classList.add("hidden");
	document.getElementById(contentIds[2]).classList.add("hidden");
	
	switch (clicked) {
		case "contact":
			document.getElementById(contentIds[1]).classList.remove("hidden");
			break;
		case "web":
			document.getElementById(contentIds[2]).classList.remove("hidden");
			break;
		case "about":
		default:
			document.getElementById(contentIds[0]).classList.remove("hidden");
			break;
	}
}