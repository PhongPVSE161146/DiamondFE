function showTab(tabId) {
    var tabs = document.getElementsByClassName('tab');
    var tabContents = document.getElementsByClassName('tab-content');

    for (var i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove('active');
    }

    for (var i = 0; i < tabContents.length; i++) {
        tabContents[i].classList.remove('active');
    }

    document.getElementById(tabId).classList.add('active');
    document.querySelector(`.tab[onclick="showTab('${tabId}')"]`).classList.add('active');
}
