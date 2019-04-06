export const state = () => ({
    id: 'magic-pencil',
    title: 'Magic Pencil',
    goalImg: '/gifs/magic_pencil.gif',
    goalText: 'Make a pencil that draws patterns',
    scratchprojid: 16940666,

    steps: [
        {
            id: 1,
            stepNum: '1',
            stepImg: '/gifs/magic_pencil.gif',
            stepLabel: '<i class="fas fa-lightbulb"></i> Change Colors',
            stepText: 'This is step 1.',
            initialCluesVisible:0,
            clues:[
                {
                    cover: 'Before you start',
                    id: 1, 
                    content: 'What will your sprites be?',
                    type: 'info',
                }
            ]
        }
    ]
})