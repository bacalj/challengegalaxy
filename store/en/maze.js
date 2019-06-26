export const state = () => ({
    id: 'maze',
    title: 'Maze 1',
    goalText: 'Make a maze game',
    goalImg: '/gifs/maze_win.gif',
    scratchprojid: 291566653,
    studio: 'https://scratch.mit.edu/studios/6026971/projects/',
    pdf: 'Maze.pdf',
    standards: {
        'DLCS-3-5-DTC': ['3-5.DTC.a'],
        'DLCS-3-5-CT': ['3-5.CT.b', '3-5.CT.d'],
        'CSTA-3-5-AP': ['1B-AP-10', '1B-AP-11', '1B-AP-15', '1B-AP-16', '1B-AP-17']
    },
    steps: [
        {
            id: 1,
            stepNum: '1',
            stepImg: '/gifs/mouse_move_1.gif',
            stepLabel: '<i class="fas fa-arrows-alt"></i> Move',
            stepText: 'Move with the mouse',
            initialCluesVisible:0,
            clues:[
                {
                    cover: 'When?',
                    id: 1,
                    content: 'Should it follow it all the time? How will we do that?',
                    type: 'idea',
                },
                {
                    cover: 'When?',
                    id: 2,
                    content: '<pre class="blocks">when green flag clicked\nforever</pre>',
                    type: 'code',
                },
                {
                    id: 3,
                    cover: 'How?',
                    content: 'Think about direction',
                    type: 'idea',
                },
                {
                    id: 4,
                    cover: 'How?',
                    content: '<pre class="blocks">point towards ()</pre>',
                    type: 'code',
                },
                {
                    cover: 'How?',
                    id: 5, 
                    content: '<pre class="blocks">point towards ( what should you point towards?! )</pre>',
                    type: 'idea',
                },
                {
                    cover: 'How?',
                    id: 6,
                    content: 'You point to where you want to go and then you...',
                    type: 'idea'
                },
                {
                    cover: 'How?',
                    id: 7,
                    content: 'How fast should it go? <br/><br/> <pre class="blocks">move ( ) steps</pre>',
                    type: 'code'
                },
                {
                    cover: 'An example',
                    id: 8,
                    content: '<pre class="blocks">When green flag clicked\nforever\npoint towards (mouse pointer v)\nmove (2) steps\n</pre>',
                    type:'locked'
                }
            ]
        },
        {
            id: 2,
            stepNum: '2',
            stepImg: '/gifs/maze_bump_1.gif',
            stepLabel: '<i class="fas fa-dungeon"></i> Walls',
            stepText: 'Stop at the walls',
            initialCluesVisible:0,
            clues:[
                {
                    cover: 'When?',
                    id: 1,
                    content: '<pre class="blocks">when green flag clicked\nforever</pre>',
                    type: 'code'
                },
                {
                    cover: 'When what?',
                    id: 2,
                    content: '<pre class="blocks">if  &lt; &gt; then</pre>',
                    type: 'code',
                },
                {
                    cover: 'When what?',
                    id: 3,
                    content: 'What color are your walls? <br/><br/> <pre class="blocks">touching color ( ) ?</pre>',
                    type: 'code',
                },
                {
                    cover: '<i class="fas fa-eye-dropper"></i> Picking the right color',
                    id: 4,
                    content: 'Make sure the color is an exact match to the color of your walls. <img src="/gifs/color-picking.gif"/>',
                },
                {
                    id: 5,
                    cover: '<i class="fas fa-magic"></i>',
                    content: 'Where is the start of your maze? <br/><br/> Drag your sprite there and then find this block. Scratch will update the coordinates for you! <br/><br/> <pre class="blocks">go to x:( ) y:( )</pre>',
                    type: 'code',
                },
                {
                    cover: 'An example',
                    id: 6,
                    content: '<pre class="blocks">When green flag clicked\nforever\nif &lt;touching color () &gt; then \n go to x () y() \n</pre>',
                    type:'locked'
                }
            ]
        },
        {
            id: 3,
            stepNum: '3',
            stepImg: '/gifs/maze_glitch.gif',
            stepLabel: '<i class="fas fa-dumpster-fire"></i> Glitch',
            stepText: 'Glitch!',
            initialCluesVisible:0,
            clues:[
                {
                    cover: 'Why is it glitchy?',
                    id: 1,
                    type: 'info',
                    content: '<pre class="blocks">distance to [mouse pointer v]</pre>',
                },
                {
                    cover: 'Why is it glitchy?',
                    id: 2,
                    type: 'info',
                    content: '<pre class="blocks">&lt; () > () &gt;</pre>',
                },
                {
                    cover: 'Can we fix it',
                    id: 3,
                    type: 'idea',
                    content: 'Only move if the distance to the mouse pointer is greater than?',
                },
                {
                    cover: 'An example',
                    id: 4,
                    type: 'locked',
                    content: 'Add this to the code you wrote before: <br/><br/><pre class="blocks">if &lt;(distance to [mouse-pointer v]) > (5)&gt; then <br/> your point and move code here</pre>',
                },
                {
                    cover: 'A full example',
                    id: 5,
                    type: 'locked',
                    content: '<pre class="blocks">when flag clicked <br/> forever <br/> if &lt;(distance to [mouse-pointer v]) > (5)&gt; then <br/> point towards [mouse-pointer v] <br/> move (2) steps</pre>',
                },
            ]
        },
        {
            id: 4,
            stepNum: '4',
            stepImg: '/gifs/maze_win.gif',
            stepLabel: '<i class="fas fa-trophy"></i> Win',
            stepText: 'You win!',
            initialCluesVisible:0,
            clues:[
                {
                    cover: 'When?',
                    id: 1,
                    type: 'code',
                    content: '<pre class="blocks">when green flag clicked\nforever\nif &lt; &gt; then</pre>',
                },
                {
                    cover: 'When?',
                    id: 2,
                    type: 'code',
                    content: '<pre class="blocks">touching color ( ) ?</pre>',
                },
                {
                    cover: 'Yay!',
                    id: 3,
                    type: 'code',
                    content: '<pre class="blocks">say []</pre>',
                },
                {
                    cover: 'Peek at code',
                    id: 4,
                    type: 'locked',
                    content: '<pre class="blocks">when flag clicked <br/> forever <br/> if &lt; touching color () &gt; then <br/> say [You win!]</pre>',
                }
            ]
        }
    ]
})