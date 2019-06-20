export const state = () => ({
    id: 'hat-landing',
    title: 'Hat Landing',
    goalImg: '/gifs/hat_landing.gif',
    goalText: 'Make it land on something',
    scratchprojid: 316200322,
    standards: {
        'DLCS-K-2-DTC': ['K-2.DTC.a'],
        'DLCS-K-2-CT': ['K-2.CT.b', 'K-2.CT.d'],
        'CSTA-K-2-AP': ['1A-AP-8', '1A-AP-10', '1A-AP-11', '1A-AP-14', '1A-AP-15']
    },
    steps: [
        {
            id: 1,
            stepNum: '1',
            stepImg: '/hat-landing/hat_landing_setup.jpg',
            stepLabel: '<i class="fas fa-lightbulb"></i> Get Set Up!',
            stepText: 'Choose two sprites',
            initialCluesVisible:0,
            clues:[
                {
                    cover: 'Use your imagination!',
                    id: 1, 
                    content: "<img src='/svgs/unicorn.svg' alt='unicorn'/><p>You can choose any sprites and backdrops you like for this project. In some places you may need to adapt the clues if you choose something different. Remember this challenge is meant to inspire your own ideas!</p>",
                    type: 'info',
                },
                {
                    cover: 'Start here to choose a sprite',
                    id: 2, 
                    content: '/gifs/choose-a-sprite.gif',
                    type: 'info',
                },
                {
                    cover: 'Start here to choose a backdrop',
                    id: 3, 
                    content: '/gifs/choose-a-backdrop.gif',
                    type: 'info',
                }
            ]
        },
        {
            id: 2,
            stepNum: '2',
            stepImg: '/gifs/hat_landing.gif',
            stepLabel: '<i class="fas fa-lightbulb"></i> Make it work!',
            stepText: 'Make one sprite fall until it lands on the other',
            initialCluesVisible:0,
            clues:[
                {
                    cover: 'How will it always start on top?',
                    id: 1, 
                    content: '<pre class="blocks">when flag clicked</pre>',
                    type: 'code',
                    sprite: 'hat.png'
                },
                {
                    cover: 'How will it always start on top?',
                    id: 2, 
                    content: '<pre class="blocks">go to x:() y:()</pre><img src="/pngs/xygrid.png">',
                    type: 'code',
                    sprite: 'hat.png'
                },
                {
                    cover: 'How will it fall on its own?',
                    id: 3,
                    content:'<pre class="blocks">change y by:()</pre>',
                    type: 'code',
                    sprite: 'hat.png'
                },
                {
                    cover: 'How will it keep falling (until it lands)?',
                    id: 4, 
                    content: '<pre class="blocks">repeat until &lt; &gt; \n \n &lt; touching (sprite1 v)?&gt;</pre>',
                    type: 'code',
                    sprite: 'hat.png'
                },
                {
                    cover: 'Make it move a little futher.',
                    id: 5, 
                    content: '<pre class="blocks">change y by (-20)</pre>',
                    type: 'code',
                    sprite: 'hat.png'
                },
                {
                    cover: 'Keep experimenting before you click this open!',
                    id: 6,
                    content: '<pre class="blocks">when green flag clicked\n go to x:(0) y:(165)\n repeat until &lt; touching (sprite2 v) ? &gt;\n &emsp; change y by (-10)\n end\n change y by (-20)</pre>',
                    type: 'locked',
                    sprite: 'hat.png'
                }
            ]
        }
    ],
})