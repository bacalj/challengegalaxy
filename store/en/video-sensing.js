export const state = () => ({
    id: 'video-sensing',
    title: 'Video Sensing!',
    goalImg: '/gifs/video-sensing-collect-gems.gif',
    goalText: 'Use your webcam to interact with Scratch!',
    studio: 'https://scratch.mit.edu/studios/6050621/projects/',
    code: 'Video-Sensing.pdf',

    steps: [
        {
            id: 1,
            stepImg: '',
            stepLabel: '<i class="fas fa-info"></i> Getting started',
            stepText: "These challenges will help you learn to use video sensing in your projects. Feel free to use other sprites and/or sounds - it's your project! Try to use as few hints as possible.",
            clues:[
                {
                    id: 0,
                    cover: 'Add the Video Sensing extension',
                    content: '/gifs/video-sensing-add-extension.gif',
                    type: 'info',
                    showAtLevelAndAbove:"3"
                }
            ]
        },
        {
            id: 2,
            stepLabel: 'Pet the cat',
            stepImg: '/gifs/video-sensing-pet-cat.gif',
            stepText: 'Play sounds when you pet Scratch.',
            clues:[
                {
                    id: 1,
                    cover: 'Detect motion',
                    content: '<pre class="blocks">when video motion &gt; (20)</pre>',
                    type: 'code',
                    showAtLevelAndAbove:"3"
                },
                {
                    id: 2,
                    cover: 'Play a sound',
                    content: '<pre class="blocks">play sound [meow v] until done</pre>',
                    type: 'code',
                    showAtLevelAndAbove:"3"
                },
            ]
        },
        {
            id: 3,
            stepLabel: '<i class="fas fa-lightbulb"></i> Fire-Breathing Dragon',
            stepImg: '/gifs/video-sensing-touch-dragon.gif',
            stepText: "Don't get burned!",
            clues:[
                {
                    id: 1,
                    cover: 'Detect motion',
                    content: '<pre class="blocks">when video motion &gt; (20)</pre>',
                    type: 'code',
                    showAtLevelAndAbove:"3"
                },
                {
                    id: 2,
                    cover: 'Change costume',
                    content: '<pre class="blocks">switch costume to [dragon-c v]</pre>',
                    type: 'code',
                    showAtLevelAndAbove:"3"
                },
                {
                    id: 3,
                    cover: 'Wait a bit',
                    content: '<pre class="blocks">wait (1) seconds</pre>',
                    type: 'code',
                    showAtLevelAndAbove:"3"
                },
                {
                    id: 4,
                    cover: 'Switch back to normal',
                    content: '<pre class="blocks">switch costume to [dragon-a v]</pre>',
                    type: 'code',
                    showAtLevelAndAbove:"3"
                },
                {
                    id: 5,
                    cover: 'Full code example',
                    content: '<pre class="blocks">when video motion &gt; (20) <br/> switch costume to [dragon-c v] <br/> wait (1) seconds <br/> switch costume to [dragon-a v]</pre>',
                    type: 'locked',
                    showAtLevelAndAbove:"3"
                },
            ]
        },
        {
            id: 4,
            stepLabel: '<i class="fas fa-lightbulb"></i> Collect Gems',
            stepImg: '/gifs/video-sensing-collect-gems.gif',
            stepText: "How many can you collect?",
            clues:[
                {
                    id: 1,
                    cover: 'Detect motion',
                    content: '<pre class="blocks">when video motion &gt; (20)</pre>',
                    type: 'code',
                    showAtLevelAndAbove:"3"
                },
                {
                    id: 2,
                    cover: 'Start a sound',
                    content: '<pre class="blocks">start sound [Magic Spell v]</pre>',
                    type: 'code',
                    showAtLevelAndAbove:"3"
                },
                {
                    id: 3,
                    cover: 'Move to a new place',
                    content: '<pre class="blocks">go to [random position v]</pre>',
                    type: 'code',
                    showAtLevelAndAbove:"3"
                },
                {
                    id: 4,
                    cover: 'Change color',
                    content: '<pre class="blocks">change [color v] effect by (25)</pre>',
                    type: 'code',
                    showAtLevelAndAbove:"3"
                },
                {
                    id: 5,
                    cover: 'Make a variable',
                    content: '<img src="/gifs/make-a-variable.gif"/><img src="/gifs/score-variable.gif"/>',
                    type: 'info',
                    showAtLevelAndAbove:"3"
                },
                {
                    id: 6,
                    cover: 'Keep count',
                    content: '<pre class="blocks">change [score v] by (1)</pre>',
                    type: 'code',
                    showAtLevelAndAbove:"3"
                },
                {
                    id: 7,
                    cover: 'Full code example',
                    content: '<pre class="blocks">when video motion &gt; (20) <br/> start sound [Magic Spell v] <br/> go to [random position v] <br/> change [color v] effect by (25) <br/> change [score v] by (1)</pre>',
                    type: 'locked',
                    showAtLevelAndAbove:"3"
                },
            ]
        }
    ],
})