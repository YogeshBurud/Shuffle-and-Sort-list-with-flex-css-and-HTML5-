var listContainer = document.querySelector('.div-container');

function displayRandomlist() {
    debugger
    for (var i = listContainer.children.length; i >= 0; i--) {
        listContainer.appendChild(listContainer.children[Math.random() * i | 0]);
    }
}

function sortListByAscending() {
    var i, switching, shouldSwitch;
    switching = true;
    while (switching) {
        switching = false;
        selectedItem = listContainer.getElementsByTagName("div");
        for (i = 0; i < (selectedItem.length - 1); i++) {
            shouldSwitch = false;
            if (selectedItem[i].innerHTML.toLowerCase() > selectedItem[i + 1].innerHTML.toLowerCase()) {
                shouldSwitch = true;
                break;
            }
        }
        if (shouldSwitch) {
            selectedItem[i].parentNode.insertBefore(selectedItem[i + 1], selectedItem[i]);
            switching = true;
        }
    }
}