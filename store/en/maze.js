export const state = () => ({
    id: 'maze',
    title: 'Maze 1',
    goalText: 'Make a maze game',
    scratchprojid: 22314685,

    steps: [
        {
            id: 1,
            stepNum: '1',
            stepImg: '/gifs/mouse_move_1.gif',
            stepLabel: '<i class="fas fa-mouse-pointer"></i> <i class="fas fa-arrows-alt"></i>',
            stepText: 'Move around!',
            clues:[
                {
                    cover: '<i class="fas fa-clock"></i>',
                    id: 1,
                    content: '<pre class="blocks">when green flag clicked</pre>'
                },
                {
                    cover: '<i class="fas fa-clock"></i>',
                    id: 2,
                    content: '<pre class="blocks">forever</pre>'
                },
                {
                    id: 3,
                    cover: '<i class="fas fa-compass"></i>',
                    content: '<pre class="blocks">point towards ()</pre>',
                },
                {
                    cover: '<i class="fas fa-compass"></i>',
                    id: 4, 
                    content: '<pre class="blocks">point towards ( what should you point towards?! )</pre>'
                },
                {
                    cover: '<i class="fas fa-arrows-alt"></i>',
                    id: 5,
                    content: 'You point to where you want to go and then you...'
                },
                {
                    cover: '<i class="fas fa-arrows-alt"></i>',
                    id: 6,
                    content: '<pre class="blocks">move ( ) steps</pre>'
                }
            ]
        },

        {
            id: 2,
            stepNum: '2',
            stepImg: '/gifs/maze_bump_1.gif',
            stepLabel: '<i class="fas fa-walking"></i> <i class="fas fa-ban"></i>',
            stepText: 'Bump!',
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
    ],
})