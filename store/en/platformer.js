export const state = () => ({
    id: 'platformer',
    title: 'Platformer Game',
    goalImg: '/platformer/level2.gif',
    goalText: 'Use physics and gravity',
    studio: 'https://scratch.mit.edu/studios/15698174/projects/',
    pdf: 'Platformer Game.pdf',
    scratchprojid: 304133549,
    lessonplan: '',
    standards: {
        'NGSS': ['5-PS2-1'],
        'DLCS-6-8-DTC': ['6-8.DTC.a'],
        'DLCS-6-8-CT': ['6-8.CT.a', '6-8.CT.b', '6-8.CT.d', '6-8.CT.e', ],
        'CSTA-6-8-AP': ['2-AP-11', '2-AP-12', '2-AP-13', '2-AP-17']
    },

    steps: [
        {
            id: 1,
            stepNum: '1',
            stepImg: '/jpgs/giga.jpg',
            stepLabel: '<i class="fas fa-signal"></i> Choose your character',
            stepText: 'Pick a sprite or paint your own.',
            initialCluesVisible:0,
            clues:[
                {
                    cover: 'Pick a sprite or paint your own.',
                    id: 1, 
                    content: "/pngs/choose_paint_tool.png",
                    type: 'info',
                },
                {
                    cover: 'Shrink it',
                    id: 2, 
                    content: "/gifs/shrink-sprite.gif",
                    type: 'info',
                },
            ]
        },
        {
            id: 2,
            stepNum: '2',
            stepImg: '/jpgs/giga-left-bottom-corner.jpg',
            stepLabel: '<i class="fas fa-dot-circle"></i> Starting position and physics',
            stepText: 'We can use variables to control how fast we move in the x and y directions and how strong the force of gravity is in the game.',
            initialCluesVisible:0,
            clues:[
                {
                    cover: 'Go to a location',
                    id: 1, 
                    content: "<p>Using 'My Blocks' can help make the code easier to understand and to reuse. Make a block and name it spawn. <img src='/gifs/make-a-block.gif'/>",
                    type: 'idea',
                },
                {
                    cover: 'Go to a location',
                    id: 2, 
                    content: '<p>Often games start in the lower left corner of the stage, but you can start anywhere you like. Your x and y coordinates might not match these.</p><pre class="blocks">when flag clicked <br/> spawn <br/> define spawn <br/> go to x (-200) y (-140)</pre>',
                    type: 'code',
                },
                {
                    cover: "Don't flip upside down",
                    id: 3, 
                    content: 'Many sprites flip upside down when facing the left. This fixes that. <pre class="blocks">set rotation style [left-right v]</pre>',
                    type: 'code',
                },
                {
                    cover: 'Make variables for x and y velocity',
                    id: 4, 
                    content: '<p>x velocity is how fast you are moving in the horizontal direction (left or right). y velocity is fast you are moving in the vertical direction (up or down).</p><img src="/gifs/make-a-variable.gif"/>',
                    type: 'info',
                },
                {
                    cover: 'Set velocity variables to 0',
                    id: 5, 
                    content: '<pre class="blocks">set [x-velocity v] to (0) <br/> set [y-velocity v] to (0)</pre>',
                    type: 'code',
                },
                {
                    cover: 'Make gravity',
                    id: 6, 
                    content: 'Gravity is a force affecting our y velocity. Make another variable for gravity. Do you think gravity will be a force in the positive y direction (up) or the negative y direction (down)? Read more about gravity on <a href="https://spaceplace.nasa.gov/what-is-gravity/en/">the NASA website</a>.',
                    type: 'info',
                },
                {
                    cover: 'Set gravity variable',
                    id: 7, 
                    content: '<p>On earth, gravity is a force of approximately 10 meters per second squared. Later, you can experiment with what it would be like if gravity changes in your game.</p><pre class="blocks">set [gravity v] to (-1)</pre>',
                    type: 'code',
                },
                {
                    cover: 'Full code example',
                    id: 8, 
                    content: '<pre class="blocks">when flag clicked <br/> spawn <br/> define spawn <br/> go to x (-200) y (-140) <br/> set rotation style [left-right v] <br/> set [x-velocity v] to (0) <br/> set [y-velocity v] to (0) <br/> set [gravity v] to (-1)</pre>',
                    type: 'locked',
                },
            ]
        },
        {
            id: 3,
            stepNum: '3',
            stepImg: '/gifs/giga-running.gif',
            stepLabel: '<i class="fas fa-running"></i> Running',
            stepText: 'Use the keyboard to move left and right',
            initialCluesVisible:0,
            clues:[
                {
                    cover: 'Main Game Loop',
                    id: 1, 
                    content: "This project uses a main game loop. Inside this forever block, Scratch will keep checking if the character is moving, jumping, or falling.",
                    type: 'info'
                },
                {
                    cover: 'Start with these blocks',
                    id: 2, 
                    content: '<pre class="blocks">when flag clicked <br/> spawn <br/> forever // add this block </pre>',
                    type: 'code',
                    sprite: 'giga.png'
                },
                {
                    cover: 'x velocity',
                    id: 3, 
                    content: "First, we set the x velocity based on which key is pressed. Then we will update the x position of the sprite based on the x velocity.",
                    type: 'info'
                },
                {
                    cover: 'Running?',
                    id: 4, 
                    content: '<p>Make a block called running? and add it to the game loop</p><pre class="blocks">when flag clicked <br/> spawn <br/> forever <br/> running? // add this block</pre>',
                    type: 'idea'
                },
                {
                    cover: 'To the right',
                    id: 5, 
                    content: '<pre class="blocks">define running? <br/> if &lt; key [right arrow v] pressed? &gt; then <br/> change [x-velocity v] by (1) <br/> end </pre>',
                    type: 'code',
                    sprite: 'giga.png'
                },
                {
                    cover: 'To the left',
                    id: 6, 
                    content: 'How could you make the player move left?',
                    type: 'question'
                },
                {
                    cover: 'To the left',
                    id: 7, 
                    content: '<img src="/gifs/duplicate-right-arrow.gif"/><p>What do you need to change to make the player go left?</p>',
                    type: 'idea'
                },
                {
                    cover: 'Slide to a stop',
                    id: 8, 
                    content: '<p>The player should gradually slow down when you stop pressing a key.</p><pre class="blocks">set [x-velocity v] to ( (x-velocity) * (0.9) )</pre>',
                    type: 'code'
                },
                {
                    cover: 'Move the player',
                    id: 9, 
                    content: '<p>Finally we can move the player using the x velocity.</p><pre class="blocks">change x by (x-velocity) </pre>',
                    type: 'code'
                },
                {
                    cover: 'Full code example',
                    id: 10, 
                    content: '<pre class="blocks">define running? <br/> if &lt; key [right arrow v] pressed? &gt; then <br/> change [x-velocity v] by (1) <br/> end <br/> if &lt; key [left arrow v] pressed? &gt; then <br/> change [x-velocity v] by (-1) <br/> end <br/> set [x-velocity v] to ( (x-velocity) * (0.9) ) <br/> change x by (x-velocity) <br/> when flag clicked <br/> spawn <br/> forever <br/> running? </pre>',
                    type: 'locked',
                    sprite: 'giga.png'
                },
            ]
        },
        {
            id: 4,
            stepNum: '4',
            stepImg: '/platformer/falling.gif',
            stepLabel: '<i class="fas fa-angle-double-down"></i> Gravity makes you fall',
            stepText: 'You will need some platforms to stand on.',
            initialCluesVisible:0,
            clues:[
                {
                    cover: 'Paint a backdrop',
                    id: 1, 
                    content: '/gifs/paint-a-backdrop.gif',
                    type: 'info',
                },
                {
                    cover: 'Draw the ground',
                    id: 2, 
                    content: '/platformer/paint-the-ground.gif',
                    type: 'info',
                },
                {
                    cover: 'Make a falling? block',
                    id: 3, 
                    content: "<p>Create a 'My Block' called falling?</p><img src='/gifs/make-a-block.gif'/>",
                    type: 'info',
                    sprite: 'giga.png'
                },
                {
                    cover: 'Add it to the game loop',
                    id: 4, 
                    content: '<pre class="blocks">when flag clicked <br/> spawn <br/> forever <br/>  running? <br/> falling? // add this block</pre>',
                    type: 'code',
                    sprite: 'giga.png'
                },
                {
                    cover: 'Gravity always affects you',
                    id: 5, 
                    content: '<pre class="blocks">define falling? <br/> change [y-velocity v] by (gravity) <br/> change y by (y-velocity)</pre>',
                    type: 'code',
                    sprite: 'giga.png'
                },
                {
                    cover: 'But go back up if you hit a platform',
                    id: 6, 
                    content: '<pre class="blocks">if &lt; touching color (#000000) &gt; then <br/> change y by ( (0) - (y-velocity) ) <br/> set [y-velocity v] to (0)</pre>',
                    type: 'code',
                    sprite: 'giga.png'
                },
                {
                    cover: 'Full code example',
                    id: 7, 
                    content: '<pre class="blocks">define falling? <br/> change [y-velocity v] by (gravity) <br/> change y by (y-velocity) <br/> if &lt; touching color (#000000) &gt; then <br/> change y by ( (0) - (y-velocity) ) <br/> set [y-velocity v] to (0) <br/> when flag clicked <br/> spawn <br/> forever <br/> running? <br/> falling?</pre>',
                    type: 'locked',
                    sprite: 'giga.png'
                }


            ]
        },
        {
            id: 5,
            stepNum: '5',
            stepImg: '/platformer/obstacles.gif',
            stepLabel: '<i class="fas fa-dungeon"></i> Walls',
            stepText: "You can't walk through walls...",
            initialCluesVisible:0,
            clues:[
                {
                    cover: 'Add an obstacle to the platform backdrop',
                    id: 1, 
                    content: '/platformer/wall.jpg',
                    type: 'idea'
                },
                {
                    cover: "Make a 'My Block'",
                    id: 2, 
                    content: "Make a 'My Block' called wall? and add it to the game loop.",
                    type: 'idea',
                    sprite: 'giga.png'
                },
                {
                    cover: "Make a 'My Block'",
                    id: 3, 
                    content: '<pre class="blocks">when flag clicked <br/> spawn <br/> forever <br/> running? <br/> falling? <br/> wall? // add this block</pre>',
                    type: 'code',
                    sprite: 'giga.png'
                },
                {
                    cover: "Don't walk through walls",
                    id: 4, 
                    content: '<pre class="blocks">define wall? <br/> if &lt; touching color (#000000) &gt; then <br/> change x by ((0) - (x-velocity) <br/> set [x-velocity v] to (0) <br/> </pre>',
                    type: 'code',
                    sprite: 'giga.png'
                },
                {
                    cover: 'Full code example',
                    id: 5, 
                    content: '<pre class="blocks">when flag clicked <br/> spawn <br/> forever <br/> running? <br/> falling? <br/> wall? <br/> define wall? <br/> if &lt; touching color (#000000) &gt; then <br/> change x by ((0) - (x-velocity) <br/> set [x-velocity v] to (0) <br/> </pre>',
                    type: 'locked',
                    sprite: 'giga.png'
                }
            ]
        },
        {
            id: 6,
            stepNum: '6',
            stepImg: '/platformer/jumping.gif',
            stepLabel: '<i class="fas fa-plane-departure"></i> Jump!',
            stepText: 'Jump over obstacles and to reach platforms',
            initialCluesVisible:0,
            clues:[
                {
                    cover: 'Make a jump? block and add it to the falling? definition',
                    id: 1, 
                    content: '<pre class="blocks">define falling? <br/> change [y-velocity v] by (gravity) <br/> change y by (y-velocity) <br/> if &lt; touching color (#000000) &gt; then <br/> change y by ( (0) - (y-velocity) ) <br/> set [y-velocity v] to (0) <br/> jump? // add this block</pre>',
                    type: 'code',
                    sprite: 'giga.png'
                },
                {
                    cover: 'Which key will you use to jump?',
                    id: 2, 
                    content: '<pre class="blocks">define jump? <br/> if &lt; key [up arrow v] pressed? &gt; then</pre>',
                    type: 'code',
                    sprite: 'giga.png'
                },
                {
                    cover: 'Jumping force is the opposite of gravity',
                    id: 3, 
                    content: 'Experiment with different jumping abilities by changing this number. <pre class="blocks">change [y-velocity v] by (12)</pre>',
                    type: 'code',
                    sprite: 'giga.png'
                },
                {
                    cover: 'Full code example',
                    id: 4, 
                    content: '<pre class="blocks">define falling? <br/> change [y-velocity v] by (gravity) <br/> change y by (y-velocity) <br/> if &lt; touching color (#000000) &gt; then <br/> change y by ( (0) - (y-velocity) ) <br/> set [y-velocity v] to (0) <br/> jump? // add this block <br/> define jump? <br/> if &lt; key [up arrow v] pressed? &gt; then <br/> change [y-velocity v] by (12) </pre>',
                    type: 'locked',
                    sprite: 'giga.png'
                }
            ]
        },
        {
            id: 7,
            stepNum: '7',
            stepImg: '/platformer/ramps.gif',
            stepLabel: '<i class="fas fa-signal"></i> Walk up ramps',
            stepText: 'Add this code if you want to be able to walk up ramps.',
            initialCluesVisible:0,
            clues:[
                {
                    cover: 'Make a block call ramp? and add it to the game loop',
                    id: 1, 
                    content: '<pre class="blocks">when flag clicked <br/> spawn <br/> forever <br/> running? <br/> falling? <br/> ramp? // add this block <br/> wall? </pre>',
                    type: 'code',
                    sprite: 'giga.png'
                },
                {
                    cover: "Move up a bit, if you're stilling touching the wall color, then you're not on a ramp so move back down.",
                    id: 2, 
                    content: '<pre class="blocks">define ramp? <br/> if &lt; touching color (#000000) &gt; then <br/> change y by (2) <br/> if &lt; touching color (#000000) &gt; then <br/> change y by (-2) </pre>',
                    type: 'code',
                    sprite: 'giga.png'
                }
            ]
        },
        {
            id: 8,
            stepNum: '8',
            stepImg: '/platformer/winning.gif',
            stepLabel: '<i class="fas fa-award"></i> Winning?',
            stepText: 'Get to the goal!',
            initialCluesVisible:0,
            clues:[
                {
                    cover: 'Add a goal',
                    id: 1, 
                    content: 'Use the art tools to add a unique color to the backdrop for the goal. Alternately, add a new sprite to be the goal.',
                    type: 'idea'
                },
                {
                    cover: 'Impossible?',
                    id: 2, 
                    content: 'Play test your level and make sure you can get to the goal. Move things around and redraw platforms until it is not too easy or too hard.',
                    type: 'idea'
                },
                {
                    cover: 'When do you need to check if you won?',
                    cover: 'Make a block called win? and add it to the game loop',
                    id: 3, 
                    content: '<pre class="blocks">when flag clicked <br/> spawn <br/> forever <br/> running? <br/> falling? <br/> ramp? <br/> wall? <br/> win? // add this block</pre>',
                    type: 'code',
                    sprite: 'giga.png'
                },
                {
                    cover: 'How do you know if you won?',
                    id: 4, 
                    content: '<pre class="blocks">define win? <br/> if &lt; touching color () &gt; then </pre> Use the eyedrop color picker to select the exact color of the goal. Or use this if you chose a sprite for the goal: <pre class="blocks">touching [Giga v] ?</pre>',
                    type: 'code'
                },
                {
                    cover: 'What happens when you win?',
                    id: 5, 
                    content: '<pre class="blocks">say [You won!] for (2) seconds</pre>',
                    type: 'code'
                },
                {
                    cover: 'Full code example',
                    id: 6, 
                    content: '<pre class="blocks">define win? <br/> if &lt; touching color (#fffb19) &gt; then <br/> say [You won!]  for (2) seconds <br/> end <br/> when flag clicked <br/> spawn <br/> forever <br/> running? <br/> falling? <br/> ramp? <br/> wall? <br/> win? // add this block</pre>',
                    type: 'locked'
                }
            ]
        },
        {
            id: 9,
            stepNum: '9',
            stepImg: '/platformer/next-level.gif',
            stepLabel: '<i class="fas fa-level-up-alt"></i> Next Level!',
            stepText: 'What happens on the next level?',
            initialCluesVisible:0,
            clues:[
                {
                    cover: 'Paint a new level',
                    id: 1, 
                    content: "Create a new backdrop. It's easiest if the spawn point is in the same place. <img src='/platformer/new-level.jpg'/>",
                    type: 'idea'
                },
                {
                    cover: 'Spawn when you get to the goal',
                    id: 2, 
                    content: '<pre class="blocks">define win? <br/> if &lt; touching color (#fffb19) &gt; then <br/> say [You won!]  for (2) seconds <br/> spawn // add this block <br/> end </pre>',
                    type: 'code',
                    sprite: 'giga.png'
                },
                {
                    cover: 'Switch backdrops when you win',
                    id: 3, 
                    content: '<pre class="blocks">define win? <br/> if &lt; touching color (#fffb19) &gt; then <br/> say [You won!]  for (2) seconds <br/> next backdrop // add this block <br/> spawn </pre>',
                    type: 'code',
                    sprite: 'giga.png'
                },
                {
                    cover: 'Switch to first level when you start',
                    id: 4, 
                    content: '<pre class="blocks">when flag clicked <br/> switch backdrop to [backdrop1 v] // add this block <br/> spawn <br/> forever <br/> running? <br/> falling? <br/> ramp? <br/> wall? <br/> win?</pre>',
                    type: 'code',
                    sprite: 'giga.png'
                }
            ]
        },
        {
            id: 10,
            stepNum: '10',
            stepImg: '/platformer/baddie.gif',
            stepLabel: '<i class="fas fa-skull"></i> Baddies!',
            stepText: 'Watch out for the baddies!',
            initialCluesVisible:0,
            clues:[
                {
                    cover: 'Add an enemy sprite',
                    id: 1, 
                    content: "Put the baddy in the location where it should start and change the size.",
                    type: 'idea'
                },
                {
                    cover: 'Only show on the right level',
                    id: 2, 
                    content: '<pre class="blocks">when backdrop switches to [backdrop1 v] <br/> hide <br/> when backdrop switches to [backdrop2 v] <br/> show</pre>',
                    type: 'code',
                    sprite: 'frank.png'
                },
                {
                    cover: 'Glide back and forth to guard the goal',
                    id: 3, 
                    content: 'Scratch will automatically update the x and y coordinates for the position of your sprite. Your numbers will be different than this! <pre class="blocks">when backdrop switches to [backdrop2 v] <br/> show <br/> forever // add this block <br/> glide (3) secs to x (200) y(-130) </pre>',
                    type: 'code',
                    sprite: 'frank.png'
                },
                {
                    cover: 'Guarding',
                    id: 4, 
                    content: 'Drag the baddy to the next location it will move to.',
                    type: 'idea'
                },
                {
                    cover: 'Glide to the the next position',
                    id: 5, 
                    content: '<pre class="blocks">when backdrop switches to [backdrop2 v] <br/> show <br/> forever <br/> glide (3) secs to x (200) y(-130) <br/> glide (3) secs to x (35) y (-130) // add this block</pre>',
                    type: 'code',
                    sprite: 'frank.png'
                },
                {
                    cover: 'Full baddy code example',
                    id: 6, 
                    content: '<pre class="blocks">when backdrop switches to [backdrop1 v] <br/> hide <br/> when backdrop switches to [backdrop2 v] <br/> show <br/> forever <br/> glide (3) secs to x (200) y(-130) <br/> glide (3) secs to x (35) y (-130)</pre>',
                    type: 'locked',
                    sprite: 'frank.png'
                },
                {
                    cover: 'Make a baddy block',
                    id: 7, 
                    content: 'Switch to your main character sprite. <pre class="blocks">define baddy? <br> when flag clicked <br/> switch backdrop to [backdrop1 v] <br/> spawn <br/> forever <br/> running? <br/> falling? <br/> ramp? <br/> wall? <br/> win? <br/> baddy? // add this block</pre>',
                    type: 'code',
                    sprite: 'giga.png'
                },
                {
                    cover: 'How can you tell if you run into the baddy?',
                    id: 8, 
                    content: '<pre class="blocks">if &lt; &gt; then</pre>',
                    type: 'idea',
                    sprite: 'giga.png'
                },
                {
                    cover: 'Touching?',
                    id: 9, 
                    content: '<pre class="blocks">touching [Frank  v] ?</pre>',
                    type: 'code',
                    sprite: 'giga.png'
                },
                {
                    cover: 'Restart!',
                    id: 10, 
                    content: '<pre class="blocks">if &lt; touching [Frank  v] ? &gt; then <br/> spawn</pre>',
                    type: 'code',
                    sprite: 'giga.png'
                },
                {
                    cover: 'Full character code example',
                    id: 11, 
                    content: '<pre class="blocks">define baddy? <br/> if &lt; touching [Frank  v] ? &gt; then <br/> spawn <br/> when flag clicked <br/> switch backdrop to [backdrop1 v] <br/> spawn <br/> forever <br/> running? <br/> falling? <br/> ramp? <br/> wall? <br/> win? <br/> baddy?</pre>',
                    type: 'locked',
                    sprite: 'giga.png'
                }
            ]
        },
        {
            id: 11,
            stepNum: '11',
            stepImg: '/platformer/level2.gif',
            stepLabel: '<i class="fas fa-birthday-cake"></i> More ideas',
            stepText: "What else can you add?",
            initialCluesVisible:3,
            clues:[
                {
                    cover: 'Hide variables',
                    id: 1, 
                    content: "/platformer/hide-variables.gif",
                    type: 'idea'
                },
                {
                    cover: 'Add lava',
                    id: 2, 
                    content: "Add patches of lava to your level. You might use this block: <pre class='blocks'>if &lt; touching color [#ff0000] &gt; then",
                    type: 'idea'
                },
                {
                    cover: 'Spinning obstacles',
                    id: 3, 
                    content: '<pre class="blocks">when backdrop switches to [backdrop1 v] <br/> hide <br/> when backdrop switches to [backdrop2 v] <br/> show <br/> forever <br/> turn right (1) degrees </pre>',
                    type: 'code'
                }
            ]
        }     
    ]
})