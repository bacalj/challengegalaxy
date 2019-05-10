const loadTutorial = function loadTutorial(id, title) {

    const html = "<div class='tutorial draggable'><div class='tutorial-header'><div class='tutorial-title'><img src='" + chrome.extension.getURL('/images/spacescratch-128.png') + "' style='width: 32px'> <span>" + title + "</span></div><div class='close-tutorial card_remove-button_1F8SI'><span>Close</span><img class='card_close-icon_1FYf5' src='/static/assets/a11c1802ec38e7fe60918fb52186261f.svg'></div></div><div class='tutorial-content'><iframe src='https://www.challengegalaxy.com/extension/"+id+"'/></div></div>";

    document.querySelector(".gui").insertAdjacentHTML("afterbegin", html );
    $(".draggable" ).draggable();
    $(".draggable").resizable({
        handles: 'se', 
        alsoResize: ".tutorial-content iframe",
        maxWidth: 480
    });
    $(".tutorial-content iframe").fadeIn(1000)

    document.querySelector('.close-tutorial').addEventListener("click", function () {
        let tutorial = document.querySelector(".tutorial");
        tutorial.parentNode.removeChild(tutorial);
    })
}

