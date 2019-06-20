const loadTutorial = function loadTutorial(id, title) {

    const html = "<div class='tutorial draggable'><div class='tutorial-header'><div class='tutorial-title'><img src='" + chrome.extension.getURL('/images/spacescratch-128.png') + "' style='width: 32px'> <span>" + title + "</span></div><div style='display: flex'><div class='card_shrink-expand-button_vbegz'><img src='/static/assets/76121b7f4eff7d7ca0d49a45479d3f3f.svg'><span>Shrink</span></div><div class='close-tutorial card_remove-button_1F8SI'><img class='card_close-icon_1FYf5' src='/static/assets/a3e689235188ba10c5cfd75730cb88a7.svg'><span>Close</span></div></div></div><div class='tutorial-content'><iframe src='https://www.challengegalaxy.com/extension/"+id+"'/></div></div>";

    document.querySelector(".gui").insertAdjacentHTML("afterbegin", html );
    $(".draggable" ).draggable();
    $(".draggable").resizable({
        handles: 'se', 
        alsoResize: ".tutorial-content iframe",
        minWidth: 300,
        minHeight: 60,
        maxWidth: 480,
        handles: 'e, se, s, sw, w',
        start: (e, ui) => {
            ui.element.css('max-height', 'none') 
        },
        stop: (e, ui) => { 
            ui.element.css('max-height', ui.size.height) 
        },
    });
    $(".tutorial-content iframe").fadeIn(1000)

    document.querySelector('.close-tutorial').addEventListener("click", () => {
        let tutorial = document.querySelector(".tutorial");
        tutorial.parentNode.removeChild(tutorial);
    })

    let tutorialHeight
    
    document.querySelector('.tutorial .card_shrink-expand-button_vbegz').addEventListener("click", () => {
        const tutorial = document.querySelector('.tutorial')
        let content = document.querySelector('.tutorial-content')
        let iframe = document.querySelector('.tutorial-content iframe')
        if (content.style.maxHeight != '0px') {
            content.style.maxHeight = '0px'
            tutorialHeight = tutorial.style.height || '370px'
            tutorial.style.maxHeight = '60px'
            tutorial.querySelector('.card_shrink-expand-button_vbegz img').src = '/static/assets/04e28ba12fe914cf4f131dcb85ae82d6.svg'
            tutorial.querySelector('.card_shrink-expand-button_vbegz span').textContent = 'Expand'
            document.querySelector('.ui-resizable-se').style.display = 'none'
        } else {
            content.style.maxHeight = iframe.style.height || '324px'
            tutorial.style.maxHeight = tutorialHeight
            tutorial.querySelector('.card_shrink-expand-button_vbegz img').src = '/static/assets/76121b7f4eff7d7ca0d49a45479d3f3f.svg'
            tutorial.querySelector('.card_shrink-expand-button_vbegz span').textContent = 'Shrink'
            document.querySelector('.ui-resizable-se').style.display = 'block'
        }
    })
}

