export const state = () => ({
    id: 'walk',
    title: 'Walking Animation',
    goalImg: '/gifs/walk.gif',
    goalText: 'Make a sprite look like it is walking',
    scratchprojid: 316774682,
    pdf: 'walking_animation.pdf',
    studio: 'https://scratch.mit.edu/studios/21875620/',
    standards: {
        'DLCS-K-2-DTC': ['K-2.DTC.a'],
        'DLCS-K-2-CT': ['K-2.CT.b', 'K-2.CT.d'],
        'CSTA-K-2-AP': ['1A-AP-8','1A-AP-10','1A-AP-11','1A-AP-14','1A-AP-15']
    },
    steps: [
        {
            id: 1,
            stepNum: '1',
            stepImg: '/walk/walk_setup.jpg',
            stepLabel: '<i class="fas fa-shapes"></i> Get Set Up!',
            stepText: 'Choose a sprite with multiple costumes',
            initialCluesVisible:0,
            clues:[
                {
                    cover: 'Start here to choose a sprite',
                    id: 1, 
                    content: '/gifs/choose-a-sprite.gif',
                    type: 'info',
                },
                {
                    cover: 'Find a sprite with many costumes',
                    id: 2, 
                    content: '/gifs/hover_find_walk.gif',
                    type: 'info',
                }
            ]
        },
        {
            id: 2,
            stepNum: '2',
            stepImg: '/gifs/walk_in_place.gif',
            stepLabel: '<i class="fas fa-video"></i> Animate it',
            stepText: 'Make your sprite walk in place',
            initialCluesVisible:0,
            clues:[
                {
                    cover: 'Find a block that changes the sprites costume',
                    id: 1, 
                    content: '<pre class="blocks">next costume</pre>',
                    type: 'code',
                    sprite: 'avery.png'
                },
                {
                    cover: 'What block will make it happen over and over?',
                    id: 2, 
                    content: '<pre class="blocks">repeat[15]</pre>',
                    type: 'code',
                    sprite: 'avery.png'
                },
                {
                    cover: 'Too fast? Not starting?',
                    id: 3,
                    content: '<p>These will be useful</p><pre class="blocks">when green flag clicked \n \n wait [.2] seconds</pre>',
                    type:'code',
                    sprite: 'avery.png'
                },
                {
                    cover: 'Put it all together',
                    id:4,
                    content:'<pre class="blocks">when green flag clicked \n  repeat [18] \n wait [.2] seconds \n next costume \n end \n</pre>',
                    type:'locked',
                    sprite: 'avery.png'
                }
            ]
        },
        {
            id: 3,
            stepNum: '2',
            stepImg: '/gifs/walk.gif',
            stepLabel: '<i class="fas fa-angle-double-right"></i> Add movement',
            stepText: 'Put animation and motion together',
            initialCluesVisible:0,
            clues:[
                {
                    cover: 'Where will you add a block that adds motion?',
                    id: 1, 
                    content: '<pre class="blocks">move [10] steps</pre>',
                    type: 'code',
                    sprite: 'avery.png'
                },
                {
                    cover: 'Put it all together',
                    id: 2, 
                    content: '<pre class="blocks">when green flag clicked \n go to x:[-100] y:[0] \n repeat [18] \n wait [.2] seconds \n move [18] steps \n next costume \n end \n</pre><p>Notice how we got Avery back to the middle when we start?</p>',
                    type: 'locked',
                    sprite: 'avery.png'
                }
            ]
        }
    ],
})