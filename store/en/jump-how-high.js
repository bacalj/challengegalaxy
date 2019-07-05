export const state = () => ({
    id: 'jump-how-high',
    title: 'Jump How High?',
    goalImg: '/gifs/variable_jump_2.gif',
    goalText: 'Control how high it jumps',
    scratchprojid: 319343223,
    pdf:'jump_how_high.pdf',
    studio: 'https://scratch.mit.edu/studios/19383775/',
    standards: {
        'DLCS-K-2-CT': ['K-2.CT.b', 'K-2.CT.d'],
    },
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
            stepImg: '/gifs/just_jump.gif',
            stepLabel: '<i class="fas fa-frog"></i> Make it jump',
            stepText: 'Click to jump the same height each time',
            initialCluesVisible:0,
            clues:[
                {
                    cover: 'How do you make it "listen" for a click?',
                    id: 1, 
                    content: '<pre class="blocks">when this sprite clicked</pre>',
                    type: 'code',
                    sprite:'chick.png'
                },
                {
                    cover: 'What\'s the first "half" of a jump?',
                    id: 2, 
                    content: '<pre class="blocks">glide(.2) secs to x:(0) y:()</pre><br><img src="/pngs/xygrid.png">',
                    type: 'code',
                    sprite:'chick.png'
                },
                {
                    cover: 'How to set how high it jumps?',
                    id: 3, 
                    content: '<pre class="blocks">glide(.2) secs to x:(0) y:(50)</pre>',
                    type: 'code',
                    sprite:'chick.png'
                },
                {
                    cover: 'What goes up...',
                    id: 4, 
                    content: '<pre class="blocks">glide(.2) secs to x:(0) y:(0)</pre>',
                    type: 'code',
                    sprite:'chick.png'
                }
            ]
        },
        {
            id: 3,
            stepNum: '3',
            stepImg: '/gifs/variable_jump_2.gif',
            stepLabel: '<i class="fas fa-sliders-h"></i> Control how high',
            stepText: 'How will you make it change how high it goes?',
            initialCluesVisible:0,
            clues:[
                {
                    cover: 'This way takes too long',
                    id: 1, 
                    content: '/gifs/manual_change_param.gif',
                    type: 'idea',
                    sprite:'chick.png'
                },
                {
                    cover: 'How can we make the number y:() changeable?',
                    id: 2, 
                    content: 'A "variable" is one way we can keep track of a thing that might change',
                    type: 'idea'
                },
                {
                    cover: 'You can make a variable...',
                    id: 3, 
                    content: '/gifs/click_variable_button.gif',
                    type: 'info',
                },
                {
                    cover: 'And give it a name that makes sense',
                    id: 4, 
                    content: '/gifs/name_variable.gif',
                    type: 'info',
                },
                {
                    cover: 'Scratch variables come with sliders',
                    id: 5, 
                    content: '/gifs/toggle_variable_display.gif',
                    type: 'info',
                },
                {
                    cover: 'Now where does the variable go?',
                    id: 6, 
                    content: '<pre class="blocks">glide(.2) secs to x:(0) y:()\n\n(jump_size)</pre>',
                    type: 'code',
                },
                {
                    cover: 'All together',
                    id: 7, 
                    content: '<pre class="blocks">when this sprite clicked \n go to x: (0) y: (0) \n glide (.02) secs to x: (0) y: (jump_size) \n switch costume to (chick-b v) \n say (jump_size) for (1) seconds \n switch costume to (chick-a v) \n glide (.2) secs to x: (0) y: (0)</pre>',
                    type: 'locked',
                    sprite:'chick.png'
                },
            ]
        }
    ],
})