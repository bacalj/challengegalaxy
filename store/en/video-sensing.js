export const state = () => ({
    id: 'video-sensing',
    title: 'Video Sensing!',
    goalImg: '/gifs/video-sensing-collect-gems.gif',
    goalText: 'Use your webcam to interact with Scratch!',
    studio: 'https://scratch.mit.edu/studios/6050621/projects/',

    steps: [
        {
            id: 1,
            stepImg: '',
            stepLabel: '<i class="fas fa-info"></i> Getting started',
            stepText: "These challenges will help you learn to use video sensing in your projects. Feel free to use other sprites and/or sounds - it's your project! Try to use as few hints as possible.",
            clues:[
                {
                    id: 0,
                    cover: '<i class="fas fa-info"></i> Add the Video Sensing extension',
                    content: '/gifs/video-sensing-add-extension.gif'
                }
            ]
        },
        {
            id: 2,
            stepLabel: '<i class="fas fa-lightbulb"></i> Pet the cat',
            stepImg: '/gifs/video-sensing-pet-cat.gif',
            stepText: 'Play sounds when you pet Scratch.',
            clues:[
                {
                    id: 1,
                    cover: '<i class="fas fa-code"></i> Detect motion',
                    content: '<pre class="blocks">when video motion &gt; (20)</pre>',
                },
                {
                    id: 2,
                    cover: '<i class="fas fa-code"></i> Play a sound',
                    content: '<pre class="blocks">play sound [meow] until done</pre>',
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
                    cover: '<i class="fas fa-code"></i> Detect motion',
                    content: '<pre class="blocks">when video motion &gt; (20)</pre>',
                },
                {
                    id: 2,
                    cover: '<i class="fas fa-code"></i> Change costume',
                    content: '<pre class="blocks">switch costume to [dragon-c v]</pre>',
                },
                {
                    id: 3,
                    cover: '<i class="fas fa-code"></i> Wait a bit',
                    content: '<pre class="blocks">wait (1) seconds</pre>',
                },
                {
                    id: 4,
                    cover: '<i class="fas fa-code"></i> Switch back to normal',
                    content: '<pre class="blocks">switch costume to [dragon-a v]</pre>',
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
                    cover: '<i class="fas fa-code"></i> Detect motion',
                    content: '<pre class="blocks">when video motion &gt; (20)</pre>',
                },
                {
                    id: 2,
                    cover: '<i class="fas fa-code"></i> Start a sound',
                    content: '<pre class="blocks">start sound [Magic Spell v]</pre>',
                },
                {
                    id: 3,
                    cover: '<i class="fas fa-code"></i> Move to a new place',
                    content: '<pre class="blocks">go to [random position v]</pre>',
                },
                {
                    id: 4,
                    cover: '<i class="fas fa-code"></i> Change color',
                    content: '<pre class="blocks">change [color v] effect by (25)</pre>',
                },
                {
                    id: 5,
                    cover: '<i class="fas fa-info"></i> Make a variable',
                    content: '<img src="/gifs/make-a-variable.gif"/><img src="/gifs/score-variable.gif"/>',
                },
                {
                    id: 6,
                    cover: '<i class="fas fa-code"></i> Keep count',
                    content: '<pre class="blocks">change [score v] by (1)</pre>',
                },
            ]
        }
    ],
})