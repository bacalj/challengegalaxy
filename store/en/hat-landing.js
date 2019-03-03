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
                    id: 1,
                    cover: 'foo',
                    content: '/gifs/paint_a_sprite.gif',
                },
                {
                    cover: 'bar',
                    id: 2,
                    content: '/pngs/change_y_by_neg_10.png',
                },
                {
                    cover: 'testing scratchblock',
                    id: 3, 
                    content: '<pre class="blocks">when green flag clicked</pre>'
                },
                {
                    cover: 'gaga',
                    id: 4, 
                    content: '/pngs/touching.png'
                },
                {
                    cover: 'another scratchblock',
                    id: 5,
                    content: '<pre class="blocks">move (10) steps</pre>'
                }
            ]
        },
        {
            id: 2,
            stepNum: '2',
            stepImg: '/gifs/hat_landing.gif',
            stepText: 'This is step 2.',
            clues:[
                {
                    id: 1,
                    content: '/pngs/when_green_flag_clicked.png',
                    content: 'Testing, 1, 2, 3',
                },
                {
                    id: 2,
                    content: '/pngs/change_y_by_neg_10.png',
                },
            ]

        }
    ],

    
})