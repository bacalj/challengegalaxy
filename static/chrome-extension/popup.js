const links = document.querySelectorAll('.challenge a')
for (const link of links) {
    link.addEventListener('click', (e) => { 
        e.preventDefault(); 
        const title = e.target.closest(".challenge").querySelector(".title").innerHTML
        const id = link.href.split("/").pop()
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.executeScript(
                tabs[0].id,
                {
                    code: 'loadTutorial("' + id + '", "' + title + '");'
                }
            )
        })
        window.close()
    })
}