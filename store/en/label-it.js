export const state = () => ({
    id: 'label-it',
    title: 'Label It!',
    goalImg: '/label-it/positioned-numbers.jpg',
    goalText: 'Make an interactive quiz',
    scratchprojid: 289710261,
    studio: 'https://scratch.mit.edu/studios/6020136/projects/',
    pdf: 'Label It.pdf',
    standards: {
        'NGSS': ['4-LS1-1'],
        'DLCS-6-8-DTC': ['6-8.DTC.a', '6-8.DTC.b', '6-8.DTC.c'],
        'DLCS-6-8-CT': ['6-8.CT.b', '6-8.CT.d', '6-8.CT.e', ],
        'CSTA-6-8-AP': ['2-AP-11', '2-AP-12', '2-AP-13']
    },
    steps: [
        {
            id: 0,
            stepNum: '0',
            stepImg: '/label-it/filled-form.jpg',
            stepText: 'Make a plan and get ready. For example:',
            stepLabel: '<i class="fas fa-edit"></i> Planning!',
            initialCluesVisible:0,
            clues:[
                {
                    id: 1, 
                    cover: 'Plan & research',
                    content: 'Decide what parts you will be labeling. <a href="https://docs.google.com/document/d/19Z-eE5IT0wjJgrdMsyfG-xEmpozemhMeUWzRqaSaCmk/copy" target="_blank">Click here</a> to use our Google Document that can help you get organized.'
                },
                {
                    id: 2,
                    cover: 'Get an image',
                    content: 'Search for an image without labels on it. Cross sections are often good. <a href="https://www.google.com/search?q=flower+cross+section&tbs=isz:lt,islt:vga&tbm=isch&source=lnt&sa=X&ved=0ahUKEwjkm-CtjNrgAhVthuAKHVa7C_4QpwUIHw&biw=1044&bih=648&dpr=2" target="_blank">Try this link</a> or do your own search. If you have time, draw your artwork.',
                },
                {
                    id: 3,
                    cover: 'Downloading images',
                    content: '/label-it/flower-save-as.gif',
                },
            ]
        },
        {
            id: 1,
            stepNum: '1',
            stepImg: '/label-it/flower-backdrop.jpg',
            stepText: 'Delete the cat and add a backdrop.',
            stepLabel: '<i class="fas fa-mountain"></i> Add a backdrop',
            initialCluesVisible:0,
            clues:[
                {
                    id: 1, 
                    cover: 'Delete the cat',
                    content: '/label-it/delete-scratch.gif'
                },
                {
                    id: 2, 
                    cover: 'Upload a backdrop',
                    content: '/label-it/upload-backdrop.gif'
                }
            ]
        },
        {
            id: 2,
            stepNum: '2',
            stepImg: '/label-it/flower-backdrop-2.jpg',
            stepText: 'Make your labels.',
            stepLabel: '<i class="fas fa-tags"></i> Add labels',
            initialCluesVisible:0,
            clues:[
                {
                    id: 1,
                    cover: 'Paint a sprite.',
                    content: '/label-it/paint-a-sprite.gif',
                },
                {
                    id: 2,
                    cover: "Make a label shape to put your text on.",
                    content: '/label-it/draw-rectangle.gif',
                },
                {
                    id: 3,
                    cover: "Add text",
                    content: '/label-it/label-text.gif',
                },
                {
                    id: 4,
                    cover: "Duplicate label sprite and change the sprite name and text.",
                    content: '/label-it/duplicate-labels.gif',
                },
                {
                    id: 5,
                    cover: "Repeat",
                    content: 'Repeat the last step for each label.',
                },
                {
                    id: 6,
                    cover: "Arrange the labels around your picture.",
                    content: '/label-it/move-labels.gif',
                },
            ]
        },
        {
            id: 3,
            stepNum: '3',
            stepImg: '/label-it/positioned-numbers.jpg',
            stepText: 'Add numbers for each part you are labeling.',
            stepLabel: '<i class="fas fa-list-ol"></i> Number the labels',
            initialCluesVisible:0,
            clues:[
                {
                    id: 1,
                    cover: 'Paint a new sprite',
                    content: '/label-it/add-number-sprite.gif',
                },
                {
                    id: 2,
                    cover: "Add a circle. (Hold the shift key to draw circles instead of ovals)",
                    content: '/label-it/draw-circle.gif',
                },
                {
                    id: 3,
                    cover: "Add a number",
                    content: '/label-it/add-number.gif',
                },
                {
                    id: 4,
                    cover: "Resize and position",
                    content: '/label-it/resize-number.gif',
                },
                {
                    id: 5,
                    cover: "Duplicate the number sprite",
                    content: '/label-it/duplicate-numbers.gif',
                },
                {
                    id: 6,
                    cover: "Change numbers",
                    content: '/label-it/change-number.gif',
                },
                {
                    id: 7,
                    cover: "Arrange numbers on your picture.",
                    content: '/label-it/position-labels.jpg',
                },
            ]
        },
        {
            id: 4,
            stepNum: '4',
            stepImg: '/label-it/coin-sound.jpg',
            stepText: 'Add sounds to play when a match is made.',
            stepLabel: '<i class="fas fa-volume-up"></i> Add sound',
            initialCluesVisible:0,
            clues:[
                {
                    id: 1,
                    cover: "Add a sound from the library to each label sprite.",
                    content: '/label-it/add-sound.gif',
                }
            ]
        },
        {
            id: 5,
            stepNum: '5',
            stepText: 'Add code to detect if a label is dropped on the right number.',
            stepLabel: '<i class="fas fa-hand-point-right"></i> Check for right answer',
            initialCluesVisible:0,
            clues:[
                {
                    id: 1,
                    cover: 'Reset position at start. Do this on each number.',
                    content: '<pre class="blocks">define home \n go to x () y () \n when flag clicked \n home</pre> Scratch will automatically set the X and Y coordinates to the place where you have put the label to start.',
                },
                {
                    id: 2,
                    cover: "Keep checking (as long as you're not dragging the label).",
                    content: '<pre class="blocks">when flag clicked \n forever \n if &lt;not &lt;mouse down?&gt;&gt; then \n end \n end</pre>',
                },
                {
                    id: 3,
                    cover: "Is it touching the right answer?",
                    content: '<pre class="blocks">if &lt;touching [1 v]&gt; then \n else \n home \n end\n</pre>',
                },
                {
                    id: 4,
                    cover: "It's right! Play a sound, but just once.",
                    content: '<pre class="blocks"> start sound [Coin v] \n stop [this script v] \n</pre>',
                },
                {
                    id: 5,
                    cover: "Full code example",
                    type: "locked",
                    content: '<pre class="blocks">define home \n go to x () y () \n when flag clicked \n home \n when flag clicked \n forever \n if &lt;not &lt;mouse down?&gt;&gt; then \n if &lt;touching [1 v]&gt; then \n start sound [Coin v] \n stop [this script v] \n else \n home \n end\n end \n end\n </pre>',
                },
            ]
        },
        {
            id: 6,
            stepNum: '6',
            stepText: 'Copy code to other sprites',
            stepLabel: '<i class="fas fa-clone"></i> Duplicate code',
            initialCluesVisible:0,
            clues:[
                {
                    id: 1,
                    cover: "Drag and drop code on other sprites.",
                    content: '/label-it/copy-code.gif',
                },
                {
                    id: 2,
                    cover: "Change label numbers.",
                    content: '/label-it/change-label-number.gif',
                },
                {
                    id: 3,
                    cover: "Make draggable in full screen mode.",
                    content: '<pre class="blocks">when flag clicked \n set drag mode [draggable v]</pre>',
                },
            ]
        },
        {
            id: 7,
            stepNum: '7',
            stepText: 'There are lots of things that can make this even more fun. Try letting the player know when they have gotten all the answers right or using a timer to see how fast they can do it.',
            stepLabel: '<i class="fas fa-asterisk"></i> More things you can try',
            initialCluesVisible:3,
            clues:[
                {
                    id: 1,
                    cover: "All right answers?",
                    content: 'Try using these blocks: <pre class="blocks">set [total v] to (0)</pre><pre class="blocks">change [total v] by (1)</pre><pre class="blocks">if &lt; (total) = () &gt; then <br/> play sound [win v] until done <br/> stop [all v]</pre>',
                },
                {
                    id: 2,
                    cover: "Timer?.",
                    content: 'Check the box next to the timer to show it. <pre class="blocks">(timer)</pre>',
                },
                {
                    id: 3,
                    cover: "Best time?",
                    content: 'Try these code blocks: <pre class="blocks">if &lt; &lt; (timer) < (Best Time) &gt; or &lt; (Best Time) = (0) &gt; &gt; then <br/> set [Best Score v] to (timer)</pre>',
                },
            ]
        }
    ],

    
})