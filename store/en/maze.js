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
                    id: 1,
                    content: '<pre class="blocks">when green flag clicked\nforever</pre>',
                    type: 'code',
                    showAtLevelAndAbove:"1"
                },
                {
                    id: 2,
                    cover: '<i class="fas fa-compass"></i>',
                    content: '<pre class="blocks">point towards ()</pre>',
                    type: 'code',
                    showAtLevelAndAbove:"1"
                },
                {
                    cover: '<i class="fas fa-compass"></i>',
                    id: 4, 
                    content: '<pre class="blocks">point towards ( what should you point towards?! )</pre>',
                    type: 'idea',
                    showAtLevelAndAbove:"1"
                },
                {
                    cover: '<i class="fas fa-arrows-alt"></i>',
                    id: 5,
                    content: 'You point to where you want to go and then you...',
                    type: 'idea',
                    showAtLevelAndAbove:"1"
                },
                {
                    cover: '<i class="fas fa-arrows-alt"></i>',
                    id: 6,
                    content: '<pre class="blocks">move ( ) steps</pre>',
                    type: 'code',
                    showAtLevelAndAbove:"1"
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
                    cover: '<i class="fas fa-clock"></i>',
                    id: 1,
                    content: '<pre class="blocks">when green flag clicked\nforever</pre>'
                },
                {
                    cover: '<i class="fas fa-hand-point-right"></i>✨<i class="fas fa-hand-point-left"></i>',
                    id: 2,
                    content: '<pre class="blocks">if  &lt; &gt; then</pre>'
                },
                {
                    cover: '<i class="fas fa-hand-point-right"></i>✨<i class="fas fa-hand-point-left"></i>',
                    id: 3,
                    content: '<pre class="blocks">touching color ( ) ?</pre>'
                },
                {
                    id: 4,
                    cover: '<i class="fas fa-magic"></i>',
                    content: '<pre class="blocks">go to x:( ) y:( )</pre>',
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
                    cover: '<i class="fas fa-crosshairs"></i>',
                    id: 1,
                    content: '<pre class="blocks">distance to [mouse pointer v]</pre>'
                },
                {
                    cover: '<i class="fas fa-greater-than"></i>',
                    id: 2,
                    content: '<pre class="blocks">&lt; () > () &gt;</pre>'
                },
                {
                    cover: '<i class="fas fa-arrows-alt"></i>',
                    id: 3,
                    content: 'Only move if the distance to the mouse pointer is greater than?'
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
                    content: '<pre class="blocks">when green flag clicked\nforever</pre>'
                },
                {
                    cover: '<i class="fas fa-hand-point-right"></i>✨<i class="fas fa-hand-point-left"></i>',
                    id: 2,
                    content: '<pre class="blocks">touching color ( ) ?</pre>'
                },
                {
                    cover: '<i class="fas fa-microphone"></i>',
                    id: 3,
                    content: '<pre class="blocks">say ()</pre>'
                },
            ]
        }
    ],
})