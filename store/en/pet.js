export const state = () => ({
    id: 'pet',
    title: 'Make a Pet!',
    goalImg: '/gifs/pet.gif',
    goalText: 'Make and care for a pet!',
    studio: 'https://scratch.mit.edu/studios/7283045/projects',
    pdf: 'pet.pdf',
    scratchprojid: 300642126,

    steps: [
        {
            id: 1,
            stepNum: '1',
            stepImg: '/pet/your_own_sprite.png',
            stepLabel: '<i class="fas fa-lightbulb"></i> 1. Create your happy pet!',
            stepText: 'Create your own sprite',
            initialCluesVisible:10,
            clues:[
                {
                    cover: 'Choose to paint your own',
                    id: 1, 
                    content: "/pngs/choose_paint_tool.png",
                    type: 'info',
                },
                {
                    cover: 'Start with shapes',
                    id: 2, 
                    content: "/gifs/make_ellipse.gif",
                    type: 'info',
                },
                {
                    cover: 'put your shapes together',
                    id: 3, 
                    content: "/gifs/shapes_together.gif",
                    type: 'info',
                },
                {
                    cover: 'use the pencil tool',
                    id: 4, 
                    content: "/gifs/use_pencil.gif",
                    type: 'info',
                }
            ]
        },
        {
            id: 2,
            stepNum: '2',
            stepImg: '/pet/two_feelings.gif',
            stepLabel: '<i class="fas fa-lightbulb"></i> 2. Give your pet another feeling',
            stepText: 'Make a costume for each feeling',
            initialCluesVisible:10,
            clues:[
                {
                    cover: 'Make a copy of a costume',
                    id: 1, 
                    content: "/gifs/duplicate.gif",
                    type: 'info',
                },
                {
                    cover: 'change how it is feeling',
                    id: 2, 
                    content: "/pet/make_sad.gif",
                    type: 'info',
                },
                {
                    cover: 'name your costumes',
                    id: 3, 
                    content: "/pet/name_costumes.gif",
                    type: 'info',
                }
            ]
        },
        {
            id: 3,
            stepNum: '3',
            stepImg: '/pet/pet_and_donut.png',
            stepLabel: '<i class="fas fa-lightbulb"></i> 3. Put some food out for your pet!',
            stepText: 'You will need a new sprite!',
            initialCluesVisible:10,
            clues:[
                {
                    cover: 'Choose a food sprite',
                    id: 1, 
                    content: "/pet/new_sprite_donut.png",
                    type: 'info',
                }
            ]
        },
        {
            id: 4,
            stepNum: '4',
            stepImg: '/pet/moving_pet.gif',
            stepLabel: '<i class="fas fa-lightbulb"></i> 4. Make your pet move!',
            stepText: 'You can use keybaord buttons to make it move',
            initialCluesVisible:10,
            clues:[
                {
                    cover: 'make it move right',
                    id: 1, 
                    content: 'use these together!<pre class="blocks">when [right arrow v] key pressed</pre><pre class="blocks">point in direction(90)</pre><pre class="blocks">move (10) steps</pre>',
                    type: 'code',
                },
                {
                    cover: 'make it move left',
                    id: 1, 
                    content: "What can you copy and change?",
                    type: 'idea',
                },
                {
                    cover: 'make start in a certain spot',
                    id: 2, 
                    content: '<pre class="blocks">when green flag clicked\n go to x:(-100) y:(0)</pre>',
                    type: 'code',
                },
                {
                    cover: '...and that it doesn\'t go upside down',
                    id: 3, 
                    content: '<pre class="blocks">when green flag clicked\n go to x:(-100) y:(0)\nset rotation style [left-right v]</pre>',
                    type: 'code',
                }
            ]
        },
        {
            id: 5,
            stepNum: '5',
            stepImg: '/pet/get_happy.gif',
            stepLabel: '<i class="fas fa-lightbulb"></i> 4. Make your pet eat!',
            stepText: 'When will things change? What will change?',
            initialCluesVisible:10,
            clues:[
                {
                    cover: 'how does it "sense" the food?',
                    id: 2, 
                    content: 'put these together to make it always wondering if it has food<pre class="blocks">when green flag clicked\n</pre><pre class="blocks">forever</pre><pre class="blocks">if &lt; &gt; then</pre><pre class="blocks">touching (donut v) ?</pre>',
                    type: 'code',
                },
                {
                    cover: 'if it is touching the food, then...?',
                    id: 3, 
                    content: '<pre class="blocks">switch costume to (happy v)</pre>',
                    type: 'code',
                }
            ]
        },
        {
            id: 5,
            stepNum: '5',
            stepImg: '/pet/get_happy.gif',
            stepLabel: '<i class="fas fa-lightbulb"></i> 4. Make the food dissapear!',
            stepText: 'Add scripts to the food!',
            initialCluesVisible:10,
            clues:[
                {
                    cover: 'how does the food know it has been eaten?',
                    id: 2, 
                    content: 'put these together to make it always wondering if it has food<pre class="blocks">when green flag clicked\n</pre><pre class="blocks">forever</pre><pre class="blocks">if &lt; &gt; then</pre><pre class="blocks">touching (sprite1 v) ?</pre>',
                    type: 'code',
                },
                {
                    cover: 'if it is touching the Pet, then...?',
                    id: 3, 
                    content: '<pre class="blocks">hide</pre>',
                    type: 'code',
                }
            ]
        }
    ]
})