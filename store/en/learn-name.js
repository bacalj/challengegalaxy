export const state = () => ({
    id: 'learn-name',
    title: 'Teach An Elephant!',
    goalImg: '/gifs/name.gif',
    goalText: 'Save and use something typed in',
    scratchprojid: 316775974,
    isUnderConstruction:true,

    steps: [
        {
            id: 1,
            stepNum: '1',
            stepImg: '/learn-name/asking_name.jpg',
            stepLabel: '<i class="far fa-comment"></i></i> Make it ask!',
            stepText: 'Choose a sprite and make it ask a question',
            initialCluesVisible:0,
            clues:[
                {
                    cover: 'When the person clicks the green flag...',
                    id: 1, 
                    content: '<pre class="blocks">when green flag clicked</pre>',
                    type: 'code',
                    sprite: 'elephant.png'
                },
                {
                    cover: 'Ask them something!"',
                    id: 2, 
                    content: '<pre class="blocks">ask [ What\'s your name? ] and wait</pre>',
                    type: 'code',
                    sprite: 'elephant.png'
                }
            ]
        },
        {
            id: 2,
            stepNum: '2',
            stepImg: '/learn-name/saying_name.jpg',
            stepLabel: '<i class="fas fa-comment"></i></i> Make it answer!',
            stepText: 'Make the sprite repeat the person\'s answer',
            initialCluesVisible:0,
            clues:[
                {
                    cover: 'The elephant keeps the answer in a variable called...',
                    id: 1, 
                    content: '<pre class="blocks">answer</pre>',
                    type: 'code',
                    sprite: 'elephant.png'
                },
                {
                    cover: 'The join block puts words together',
                    id: 2, 
                    content: '<pre class="blocks">join()()</pre>',
                    type: 'code',
                    sprite: 'elephant.png'
                },
                {
                    cover: 'Blocks can fit in other blocks...',
                    id: 3,
                    content: '<pre class="blocks">say() \n join[Hello, ]() \n answer</pre>',
                    type: 'code',
                    sprite: 'elephant.png'
                },
                {
                    cover: 'Fit them all together',
                    id: 4,
                    content:'<pre class="blocks">When green flag clicked \n ask [ What\'s your name? ] and wait \n say (join[hello](answer))</pre>',
                    type: 'locked',
                    sprite: 'elephant.png'
                }
            ]
        },
        
    ],
})