function init() {
	var btn = document.getElementById("addSong");	
	btn.onclick = addItemToList;
	loadPreviousItems();
}
function addItemToList() {
	var songName = document.getElementById("songInput").value;
	if(songName == null || songName == "") {
		alert("Please add the song name");
		return;
	}
	var element = createListItem(songName);
	appendItemToList(element);
	saveItem(songName);
}
function loadPreviousItems() {
	var savedList = getStoreArray();
	if(savedList.length > 0) {
		for (var i = 0; i < savedList.length; i++) {
			appendItemToList(createListItem(savedList[i]));			
		};
	}
}
function appendItemToList(element) {
	var items = document.getElementById("playlist");
	items.appendChild(element);
}
function createListItem(songName) {
	var element = document.createElement("li");
	element.innerHTML = songName;
	return element;
}
window.onload = init;