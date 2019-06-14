export const state = () => ({
    id: 'arrow-move',
    title: 'Move with Arrow Keys',
    goalImg: '/gifs/arrow_move.gif',
    goalText: 'Move your sprite around with arrow keys',
    scratchprojid: 316679663,

    steps: [
        {
            id: 1,
            stepNum: '1',
            stepImg: '/jpgs/choose_any_sprite.jpg',
            stepLabel: '<i class="fas fa-shapes"></i> Get Set Up!',
            stepText: 'Choose any sprite!',
            initialCluesVisible:0,
            clues:[
                {
                    cover: 'Start here to choose a sprite',
                    id: 1, 
                    content: '/gifs/choose-a-sprite.gif',
                    type: 'info',
                }
            ]
        },
        {
            id: 2,
            stepNum: '2',
            stepImg: '/gifs/go_right.gif',
            stepLabel: '<i class="fas fa-caret-square-right"></i> Go to the right!',
            stepText: 'When you press right arrow, go right!',
            initialCluesVisible:0,
            clues:[
                {
                    cover: 'Which block responds to a key press?',
                    id: 1, 
                    content: '<pre class="blocks">when [right arrow v] key pressed</pre>',
                    type: 'code',
                    sprite: 'scratch_cat.png'
                },
                {
                    cover: 'How to go to the right?',
                    id: 2, 
                    content: '<pre class="blocks">change x by: ()</pre><img src="/pngs/xygrid.png">',
                    type: 'code',
                    sprite: 'scratch_cat.png'
                },
                {
                    cover: 'x is how much left or right',
                    id: 3,
                    content:'<pre class="blocks">change x by:(10)</pre>',
                    type: 'code',
                    sprite: 'scratch_cat.png'
                },
                {
                    cover: 'Now put it all together!',
                    id: 4,
                    content: '<pre class="blocks">when [right arrow v] key pressed \n change x by: (10)</pre>',
                    type: 'locked',
                    sprite: 'scratch_cat.png'
                }
            ]
        },
        {
            id: 3,
            stepNum: '3',
            stepImg: '/gifs/arrow_move.gif',
            stepLabel: '<i class="fas fa-arrows-alt"></i> Move other directions!',
            stepText: 'Connect each arrow to different movements',
            initialCluesVisible:0,
            clues:[
                {
                    cover: 'More x means more right, so less x means...',
                    id: 1, 
                    content: '<pre class="blocks">when [left arrow v] key pressed \n change x by: (-10)</pre>',
                    type: 'idea',
                    sprite: 'scratch_cat.png'
                },
                {
                    cover: 'y is a number that says how much up or down',
                    id: 2,
                    content: '<pre class="blocks">when [up arrow v] key pressed \n change y by: (10)</pre>',
                    type: 'code',
                    sprite: 'scratch_cat.png'
                },
                {
                    cover: 'Now put it all together',
                    id: 3,
                    content: '<pre class="blocks">when [up arrow v] key pressed \n change y by: (10) \n \n when [down arrow v] key pressed \n change y by: (-10) \n \n when [right arrow v] key pressed \n change x by: (10) \n \n when [left arrow v] key pressed \n change x by: (-10)</pre>',
                    type: 'locked',
                    sprite: 'scratch_cat.png'
                }
            ]
        }
    ],
})