function saveItem(item) {
	var savedList = getStoreArray();
	savedList.push(item);
	localStorage.setItem("playlist", JSON.stringify(savedList));
}
function getStoreArray() {
	var savedList = localStorage.getItem("playlist");
	if(savedList == null || savedList == "") {
		return new Array();
	} else {
		return JSON.parse(savedList);
	}
}