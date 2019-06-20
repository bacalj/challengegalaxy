export const state = () => ({
    id: 'pet',
    title: 'Make a Pet!',
    goalImg: '/gifs/pet.gif',
    goalText: 'Make and care for a pet!',
    studio: 'https://scratch.mit.edu/studios/7283045/projects',
    pdf: 'petsimple.pdf',
    scratchprojid: 300694444,
    lessonplan: 'pet_simple_lesson.pdf',
    standards: {
        'DLCS-3-5-DTC': ['3-5.DTC.a'],
        'DLCS-3-5-CT': ['3-5.CT.b', '3-5.CT.d'],
    },
    steps: [
        {
            id: 1,
            stepNum: '1',
            stepImg: '/pet/your_own_sprite.png',
            stepLabel: '<i class="fas fa-lightbulb"></i> 1. Create your happy pet!',
            stepText: 'Create your own sprite',
            initialCluesVisible:0,
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
                    cover: 'Put your shapes together',
                    id: 3, 
                    content: "/gifs/shapes_together.gif",
                    type: 'info',
                },
                {
                    cover: 'Use the pencil tool',
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
            initialCluesVisible:0,
            clues:[
                {
                    cover: 'Make a copy of a costume',
                    id: 1, 
                    content: "/gifs/duplicate.gif",
                    type: 'info',
                    sprite: 'pet.png'
                },
                {
                    cover: 'change how it is feeling',
                    id: 2, 
                    content: "/pet/make_sad.gif",
                    type: 'info',
                    sprite: 'pet.png'
                },
                {
                    cover: 'name your costumes',
                    id: 3, 
                    content: "/pet/name_costumes.gif",
                    type: 'info',
                    sprite: 'pet.png'
                }
            ]
        },
        {
            id: 3,
            stepNum: '3',
            stepImg: '/pet/pet_and_donut.png',
            stepLabel: '<i class="fas fa-lightbulb"></i> 3. Put some food out for your pet!',
            stepText: 'You will need a new sprite!',
            initialCluesVisible:0,
            clues:[
                {
                    cover: 'Choose a food sprite',
                    id: 1, 
                    content: '/gifs/choose-a-sprite.gif',
                    type: 'info',
                }
            ]
        },
        {
            id: 4,
            stepNum: '4',
            stepImg: '/pet/moving_pet.gif',
            stepLabel: '<i class="fas fa-lightbulb"></i> 4. Make your pet move!',
            stepText: 'You can use keyboard buttons to make it move',
            initialCluesVisible:0,
            clues:[
                {
                    cover: 'Make it move right',
                    id: 1, 
                    content: 'Use these together!<pre class="blocks">when [right arrow v] key pressed</pre><pre class="blocks">point in direction(90)</pre><pre class="blocks">move (10) steps</pre>',
                    type: 'code',
                    sprite: 'pet.png'
                },
                {
                    cover: 'Make it move left',
                    id: 2, 
                    content: "What can you copy and change?",
                    type: 'idea',
                    sprite: 'pet.png'
                },
                {
                    cover: 'Make it move left',
                    id: 3, 
                    content: 'Right click on a block to duplicate it. <img src="/gifs/right-click-duplicate.gif"/>',
                    type: 'code',
                    sprite: 'pet.png'
                },
                {
                    cover: 'Make start in a certain spot',
                    id: 4, 
                    content: '<pre class="blocks">when green flag clicked\n go to x (-100) y (0)</pre>',
                    type: 'code',
                    sprite: 'pet.png'
                },
                {
                    cover: '...and that it doesn\'t go upside down',
                    id: 5, 
                    content: '<pre class="blocks">when green flag clicked\n go to x:(-100) y:(0)\nset rotation style [left-right v]</pre>',
                    type: 'code',
                    sprite: 'pet.png'
                }
            ]
        },
        {
            id: 5,
            stepNum: '5',
            stepImg: '/pet/get_happy.gif',
            stepLabel: '<i class="fas fa-lightbulb"></i> 5. Make your pet happy when it gets food!',
            stepText: 'When will things change? What will change?',
            initialCluesVisible:0,
            clues:[
                {
                    cover: 'how does it "sense" the food?',
                    id: 2, 
                    content: 'put these together to make it always wondering if it has food<pre class="blocks">when green flag clicked\n</pre><pre class="blocks">forever</pre><pre class="blocks">if &lt; &gt; then</pre><pre class="blocks">touching (donut v) ?</pre>',
                    type: 'code',
                    sprite: 'pet.png'
                },
                {
                    cover: 'if it is touching the food, then...?',
                    id: 3, 
                    content: '<pre class="blocks">switch costume to (happy v)</pre>',
                    type: 'code',
                    sprite: 'pet.png'
                }
            ]
        },
        {
            id: 6,
            stepNum: '6',
            stepImg: '/pet/eat_donut.gif',
            stepLabel: '<i class="fas fa-lightbulb"></i> 6. Make the pet eat the food!',
            stepText: 'Add scripts to the food!',
            initialCluesVisible:0,
            clues:[
                {
                    cover: 'how does the food know it has been eaten?',
                    id: 1, 
                    content: '<pre class="blocks">when green flag clicked\n</pre><pre class="blocks">forever</pre><pre class="blocks">if &lt; &gt; then</pre><pre class="blocks">touching (sprite1 v) ?</pre>',
                    type: 'code',
                    sprite: 'donut.png'
                },
                {
                    cover: 'How will we show it is eaten up?',
                    id: 2, 
                    content: '<pre class="blocks">hide</pre>',
                    type: 'code',
                    sprite: 'donut.png'
                },
                {
                    cover: 'Make the food come back at the start',
                    id: 3,
                    content: '<pre class="blocks">when green flag clicked\nshow</pre>',
                    type: 'code',
                    sprite: 'donut.png'
                }
            ]
        },
        {
            id: 7,
            stepNum: '7',
            stepImg: '/pet/eat_donut.gif',
            stepLabel: '<i class="fas fa-warning"></i>7. See all the code together',
            stepText: 'Unlock clues to see one way to do it',
            initialCluesVisible:0,
            clues:[
                {
                    cover: 'The code for the pet',
                    id: 1, 
                    content: '<img src="/pet/pet_scripts_long.svg">',
                    type: 'locked',
                    sprite: 'pet.png'
                },
                {
                    cover: 'The code for the food',
                    id: 2, 
                    content: '<img src="/pet/all_donut.svg">',
                    type: 'locked',
                    sprite: 'donut.png'
                }
            ]
        },
        {
            id: 8,
            stepNum: '8',
            stepImg: '/pet/pet_plate_eat_2.gif',
            stepLabel: 'More things you can try',
            stepText: 'See if you can figure out a way to do these ideas',
            initialCluesVisible:2,
            clues:[
                {
                    cover: 'Put the food on a plate and let the pet leave some crumbs',
                    id: 1, 
                    content: 'Right now the food just hides. What could happen instead? What ostumes will you need?',
                    type: 'idea'
                },
                {
                    cover: 'Make the pet notice when it is close to the food',
                    id: 2, 
                    content: 'These blocks will be useful: <pre class="blocks">(distance to [donut v])</pre><pre class="blocks">&lt; () \< () &gt;</pre>',
                    type: 'code',
                    sprite: 'donut.png'
                }
            ]
        }   
    ]
})