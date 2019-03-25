export const state = () => ({
    id: 'maze',
    title: 'Maze 1',
    goalText: 'Make a maze game',
    goalImg: '/gifs/maze_win.gif',
    scratchprojid: 291566653,
    studio: 'https://scratch.mit.edu/studios/6026971/projects/',

    steps: [
        {
            id: 1,
            stepNum: '1',
            stepImg: '/gifs/mouse_move_1.gif',
            stepLabel: '<i class="fas fa-lightbulb"></i>',
            stepText: 'Move with the mouse',
            clues:[
                {
                    cover: 'When?',
                    id: 0,
                    content: 'Should it follow it all the time? How will we do that?',
                    type: 'idea',
                    showAtLevelAndAbove:"1"
                },
                {
                    cover: 'When?',
                    id: 1,
                    content: '<pre class="blocks">when green flag clicked\nforever</pre>',
                    type: 'code',
                    showAtLevelAndAbove:"2"
                },
                {
                    id: 3,
                    cover: 'How?',
                    content: 'Think about direction',
                    type: 'idea',
                    showAtLevelAndAbove:"1"
                },
                {
                    id: 4,
                    cover: 'How?',
                    content: '<pre class="blocks">point towards ()</pre>',
                    type: 'code',
                    showAtLevelAndAbove:"2"
                },
                {
                    cover: 'How?',
                    id: 5, 
                    content: '<pre class="blocks">point towards ( what should you point towards?! )</pre>',
                    type: 'idea',
                    showAtLevelAndAbove:"2"
                },
                {
                    cover: 'How?',
                    id: 6,
                    content: 'You point to where you want to go and then you...',
                    type: 'idea',
                    showAtLevelAndAbove:"2"
                },
                {
                    cover: 'How?',
                    id: 7,
                    content: '<pre class="blocks">move ( ) steps</pre>',
                    type: 'code',
                    showAtLevelAndAbove:"2"
                } 
            ]
        },

        {
            id: 2,
            stepNum: '2',
            stepImg: '/gifs/maze_bump_1.gif',
            stepLabel: '<i class="fas fa-lightbulb"></i>',
            stepText: 'Stop at the walls',
            clues:[
                {
                    cover: 'When?',
                    id: 1,
                    content: '<pre class="blocks">when green flag clicked\nforever</pre>',
                    showAtLevelAndAbove:"1",
                    type: 'code'
                },
                {
                    cover: '',
                    id: 2,
                    content: '<pre class="blocks">if  &lt; &gt; then</pre>',
                    type: 'code',
                    showAtLevelAndAbove:"1"
                },
                {
                    cover: '<i class="fas fa-hand-point-right"></i>✨<i class="fas fa-hand-point-left"></i>',
                    id: 3,
                    content: '<pre class="blocks">touching color ( ) ?</pre>',
                    type: 'code',
                    showAtLevelAndAbove:"1"
                },
                {
                    id: 4,
                    cover: '<i class="fas fa-magic"></i>',
                    content: '<pre class="blocks">go to x:( ) y:( )</pre>',
                    type: 'code',
                    showAtLevelAndAbove:"1"
                },
            ]
        },
        {
            id: 3,
            stepNum: '3',
            stepImg: '/gifs/maze_glitch.gif',
            stepLabel: '<i class="fas fa-lightbulb"></i>',
            stepText: 'Glitch!',
            clues:[
                {
                    cover: 'Why is it glitchy?',
                    id: 1,
                    type: 'info',
                    content: '<pre class="blocks">distance to [mouse pointer v]</pre>',
                    showAtLevelAndAbove:"1"
                },
                {
                    cover: '<Why is it glitchy?',
                    id: 2,
                    type: 'info',
                    content: '<pre class="blocks">&lt; () > () &gt;</pre>',
                    showAtLevelAndAbove:"1"
                },
                {
                    cover: 'Can we fix it',
                    id: 3,
                    type: 'idea',
                    content: 'Only move if the distance to the mouse pointer is greater than?',
                    showAtLevelAndAbove:"1"
                },
            ]
        },
        {
            id: 4,
            stepNum: '4',
            stepImg: '/gifs/maze_win.gif',
            stepLabel: '<i class="fas fa-lightbulb"></i>',
            stepText: 'You win!',
            clues:[
                {
                    cover: '<i class="fas fa-clock"></i>',
                    id: 1,
                    content: '<pre class="blocks">when green flag clicked\nforever</pre>',
                    showAtLevelAndAbove:"1"
                },
                {
                    cover: '<i class="fas fa-hand-point-right"></i>✨<i class="fas fa-hand-point-left"></i>',
                    id: 2,
                    content: '<pre class="blocks">touching color ( ) ?</pre>',
                    showAtLevelAndAbove:"1"
                },
                {
                    cover: '<i class="fas fa-microphone"></i>',
                    id: 3,
                    content: '<pre class="blocks">say ()</pre>',
                    showAtLevelAndAbove:"1"
                },
            ]
        }
    ],
})