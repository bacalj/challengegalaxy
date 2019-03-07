export const state = () => ({
    id: 'hat-landing',
    title: 'Hat Landing',
    goalImg: '/gifs/hat_landing.gif',
    goalText: 'Make something land on something',
    scratchprojid: 287880895,

    steps: [
        {
            id: 1,
            stepNum: '1',
            stepImg: '/gifs/hat_landing.gif',
            stepLabel: '<i class="fas fa-lightbulb"></i>',
            stepText: 'This is step 1.',
            clues:[
                {
                    cover: '<i class="fas fa-lightbulb"></i>',
                    id: 2, 
                    content: '<pre class="blocks">when green flag clicked</pre>'
                },
                {
                    cover: 'another scratchblock',
                    id: 3,
                    content: '<pre class="blocks">when green flag clicked\nforever\nturn cw (15) degrees\nsay [Hello!] for (2) secs\nif &lt;mouse down?&gt; then\nchange [mouse clicks v] by (1)\nend\n</pre>',
                    haslock: true
                }
            ]
        }
    ],
})