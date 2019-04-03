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
            initialCluesVisible:0,
            clues:[
                {
                    cover: 'Before you start',
                    id: 1, 
                    content: 'What will your sprites be?',
                    type: 'info',
                },
                {
                    cover: 'Start here',
                    id: 2, 
                    content: '<pre class="blocks">when green flag clicked</pre>',
                    type: 'idea',
                },

                {
                    cover: 'For how long?',
                    id: 3, 
                    content: '<pre class="blocks">forever</pre>',
                    type: 'code',
                },
                {
                    cover: 'another scratchblock',
                    id: 4,
                    content: '<pre class="blocks">when green flag clicked\nforever\nturn cw (15) degrees\nsay [Hello!] for (2) secs\nif &lt;mouse down?&gt; then\nchange [mouse clicks v] by (1)\nend\n</pre>',
                    type: 'locked',
                },
                {
                    cover: 'Bonus',
                    id: 5,
                    content: '<pre class="blocks">say [You are amazing!]</pre>',
                    type: 'extra',
                }
            ]
        }
    ],
})