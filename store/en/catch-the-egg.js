export const state = () => ({
    id: 'catch-the-egg',
    title: 'Catch the Egg',
    goalText: "Don't let it hit the ground!",
    goalImg: '/catch-the-egg/catching-eggs.gif',
    scratchprojid: 296663990,
    studio: 'https://scratch.mit.edu/studios/6229749/projects/',
    pdf: 'Catch-the-Egg-Code.pdf',
    standards: {        
        'DLCS-3-5-DTC': ['3-5.DTC.a'],
        'DLCS-3-5-CT': ['3-5.CT.b', '3-5.CT.d'],
        'CSTA-3-5-AP': ['1B-AP-9', '1B-AP-10', '1B-AP-11', '1B-AP-15', '1B-AP-16', '1B-AP-17']
    },
    steps: [
        {
            id: 1,
            stepNum: '1',
            stepImg: '/catch-the-egg/step-1.jpg',
            stepLabel: '<i class="fas fa-cat"></i> Setup',
            stepText: 'Choose sprites and a backdrop',
            initialCluesVisible:0,
            clues:[
                {
                    cover: 'Use your imagination!',
                    id: 1, 
                    content: "<img src='/svgs/unicorn.svg' alt='unicorn'/><p>You can choose any sprites and backdrops you like for this project. In some places you may need to adapt the clues if you choose something different. Remember this challenge is meant to inspire your own ideas!</p>",
                    type: 'info',
                },
                {
                    cover: 'Delete Scratch',
                    id: 2, 
                    content: '/gifs/delete-scratch.gif',
                    type: 'idea',
                },
                {
                    cover: 'Choose 2 sprites',
                    id: 3, 
                    content: '/gifs/choose-a-sprite.gif',
                    type: 'idea',
                },

                {
                    cover: 'Choose a backdrop',
                    id: 4, 
                    content: '/gifs/choose-a-backdrop.gif',
                    type: 'idea',
                },
                {
                    cover: 'Ground?',
                    id: 5,
                    content: "The ground should be a unique color. Use the drawing tools if needed.<br/><br/><img src='/catch-the-egg/add-ground.gif'/>",
                    type: 'idea',
                },
            ]
        },
        {
            id: 2,
            stepNum: '2',
            stepImg: '/catch-the-egg/moving-catcher.gif',
            stepLabel: '<i class="fas fa-arrows-alt-h"></i> Moving',
            stepText: 'Move your catcher',
            initialCluesVisible:0,
            clues:[
                {
                    cover: 'Select the catcher sprite',
                    id: 1, 
                    content: '/catch-the-egg/select-the-catcher-sprite.gif',
                    type: 'idea',
                },
                {
                    cover: 'Start the game',
                    id: 2, 
                    content: '<pre class="blocks">when flag clicked</pre>',
                    type: 'code',
                    sprite: 'catcher.png',
                },
                {
                    cover: 'For how long?',
                    id: 3, 
                    content: '<pre class="blocks">forever</pre>',
                    type: 'code',
                    sprite: 'catcher.png',
                },
                {
                    cover: 'if - then',
                    id: 4, 
                    content: '<pre class="blocks">if &lt;&gt; then</pre>',
                    type: 'code',
                    sprite: 'catcher.png',
                },
                {
                    cover: 'Which key?',
                    id: 5,
                    content: '<pre class="blocks">key &lt;&gt; pressed?</pre>',
                    type: 'code',
                    sprite: 'catcher.png',
                },
                {
                    cover: 'Move right',
                    id: 6,
                    content: 'How fast do you want to move?<br/><pre class="blocks">change x by ()</pre>',
                    type: 'code',
                    sprite: 'catcher.png',
                },
                {
                    cover: 'Move left?',
                    id: 7,
                    content: 'Changing x by a positive number moves you to the right. What will make you move left?',
                    type: 'idea',
                },
                {
                    cover: 'Having trouble?',
                    id: 8,
                    content: '<pre class="blocks">when flag clicked<br/>forever<br/>if &lt;key [right arrow v] pressed?&gt; then <br/> change x by (10) <br/> end  <br/> if &lt;key [left arrow v] pressed?&gt; then <br/> change x by (-10) <br/> end <br/>end</pre>',
                    type: 'locked',
                    sprite: 'catcher.png',
                },
            ]
        },
        {
            id: 3,
            stepNum: '3',
            stepImg: '/catch-the-egg/falling-eggs.gif',
            stepLabel: '<i class="fas fa-arrow-down"></i> Falling',
            stepText: 'Make the egg fall',
            initialCluesVisible:0,
            clues:[
                {
                    cover: 'Select the egg sprite',
                    id: 1, 
                    content: '/catch-the-egg/select-the-egg-sprite.gif',
                    type: 'idea'
                },
                {
                    cover: 'Start the game',
                    id: 2, 
                    content: '<pre class="blocks">when flag clicked</pre>',
                    type: 'code',
                    sprite: 'egg.png'
                },
                {
                    cover: 'For how long?',
                    id: 3, 
                    content: '<pre class="blocks">forever</pre>',
                    type: 'code',
                    sprite: 'egg.png'
                },
                {
                    cover: 'Go to the top',
                    id: 4, 
                    content: '<pre class="blocks">go to x () y (180)</pre>',
                    type: 'code',
                    sprite: 'egg.png'
                },
                {
                    cover: 'At a random place',
                    id: 5,
                    content: '<pre class="blocks">pick random (-240) to (240)</pre>',
                    type: 'code',
                    sprite: 'egg.png'
                },
                {
                    cover: 'Falling',
                    id: 6,
                    content: '<pre class="blocks">repeat until <> <br/>change y by (-5)</pre>',
                    type: 'code',
                    sprite: 'egg.png'
                },
                {
                    cover: 'Until?',
                    id: 7,
                    content: '<pre class="blocks">touching [catcher v]</pre>',
                    type: 'code',
                    sprite: 'egg.png'
                },
                {
                    cover: 'Having trouble?',
                    id: 8,
                    content: '<pre class="blocks">when flag clicked<br/>forever<br/>go to x (pick random (-240) to (240)) y (180)<br/>repeat until &lt;touching [Catcher v]?&gt;<br/>change y by (-5)</pre>',
                    type: 'locked',
                    sprite: 'egg.png',
                } 
            ]
        },
        {
            id: 4,
            stepNum: '4',
            stepImg: '/catch-the-egg/catching-eggs.gif',
            stepLabel: '<i class="fas fa-gem"></i> Points',
            stepText: 'How many can you collect?',
            initialCluesVisible:0,
            clues:[
                {
                    cover: 'Select the egg sprite',
                    id: 1, 
                    content: '/catch-the-egg/select-the-egg-sprite.gif',
                    type: 'idea'
                },
                {
                    cover: 'Make a score variable ',
                    id: 2, 
                    content: '<img src="/gifs/make-a-variable.gif"/><br/><img src="/gifs/score-variable.gif"/>',
                    type: 'idea'
                },
                {
                    cover: 'When the game starts',
                    id: 3, 
                    content: '<pre class="blocks">when flag clicked</pre>',
                    type: 'code',
                    sprite: 'egg.png'
                },
                {
                    cover: 'What is the score at the beginning?',
                    id: 4, 
                    content: '<pre class="blocks">set [score v] to (0)</pre>',
                    type: 'code',
                    sprite: 'egg.png'
                },
                {
                    cover: 'When do you know the egg has been caught?',
                    id: 5, 
                    content: 'After this is finished:<br/><pre class="blocks">repeat until &lt;touching [Catcher v]?&gt;</pre>',
                    type: 'question',
                    sprite: 'egg.png'
                },
                {
                    cover: 'Then change the score',
                    id: 6, 
                    content: '<pre class="blocks">change [score v] by (1)</pre>',
                    type: 'code',
                    sprite: 'egg.png'
                },
                {
                    cover: 'Play a sound!',
                    id: 7,
                    content: '<pre class="blocks">start sound [pop v]</pre>',
                    type: 'code',
                    sprite: 'egg.png'
                },
                {
                    cover: 'Having trouble?',
                    id: 8,
                    content: "Look at the script you wrote before and add three new blocks: <br/> <pre class='blocks'>when flag clicked <br/> set [score v] to (0) // add this block <br/> forever <br/> go to x (pick random (-240) to (240)) y (180) <br/> repeat until &lt;touching [catcher v]&gt; <br/> change y by (-5) <br/> end <br/> change [score v] by (1) // add this block <br/> start sound [pop v]// add this block </pre>",
                    type: 'locked',
                    sprite: 'egg.png'
                }     
            ]
        },
        {
            id: 5,
            stepNum: '5',
            stepImg: '/catch-the-egg/cracking-egg.gif',
            stepLabel: '<i class="fas fa-smog"></i> Ground',
            stepText: 'Hit the ground?',
            initialCluesVisible:0,
            clues:[
                {
                    cover: 'Select the egg sprite',
                    id: 1, 
                    content: '/catch-the-egg/select-the-egg-sprite.gif',
                    type: 'idea'
                },
                {
                    cover: 'When the game starts',
                    id: 2, 
                    content: '<pre class="blocks">when flag clicked</pre>',
                    type: 'code',
                    sprite: 'egg.png'
                },
                {
                    cover: 'Always start with the original costume',
                    id: 3, 
                    content: '<pre class="blocks">switch costume to [egg-a v]</pre>',
                    type: 'code',
                    sprite: 'egg.png'
                },
                {
                    cover: 'For how long?',
                    id: 4, 
                    content: '<pre class="blocks">forever</pre>',
                    type: 'code',
                    sprite: 'egg.png'
                },
                {
                    cover: 'if - then',
                    id: 5, 
                    content: '<pre class="blocks">if &lt;&gt; then</pre>',
                    type: 'code',
                    sprite: 'egg.png'
                },
                {
                    cover: 'Touching the ground?',
                    id: 6, 
                    content: '<pre class="blocks">&lt;touching color (#653b09)&gt;</pre>',
                    type: 'code',
                    sprite: 'egg.png'
                },
                {
                    cover: 'Switch to the broken costume',
                    id: 7, 
                    content: '<pre class="blocks">switch costume to [egg-b v]</pre>',
                    type: 'code',
                    sprite: 'egg.png'
                },
                {
                    cover: 'Stop the game!',
                    id: 8, 
                    content: '<pre class="blocks">stop [all v]</pre>',
                    type: 'code',
                    sprite: 'egg.png'
                },
                {
                    cover: 'Having trouble?',
                    id: 9,
                    content: '<pre class="blocks">when flag clicked <br/> switch costume to [egg-a v] <br/> forever <br/> if &lt;touching color (#653b09)&gt; then <br/> switch costume to [egg-b v] <br/> stop [all v]</pre>',
                    type: 'locked',
                    sprite: 'egg.png'
                }     
            ]
        },
        {
            id: 6,
            stepNum: '6',
            stepLabel: '<i class="fas fa-asterisk"></i> Extras!',
            stepText: 'What else can you add? Powerups? Levels?',
            initialCluesVisible:0,
            clues:[
                {
                    cover: 'Make the eggs fall faster',
                    id: 1, 
                    content: "Try different speeds? <pre class='blocks'>change y by ()</pre>",
                    type: 'idea',
                    sprite: 'egg.png'
                },
                {
                    cover: 'More levels',
                    id: 2, 
                    content: '<pre class="blocks">when flag clicked <br/> switch backdrop to [backdrop1 v] <br/> forever <br/> if &lt; (score) = (10) &gt; then <br/> switch backdrop to [backdrop2 v]</pre>',
                    type: 'locked'
                },
                {
                    cover: 'High score?',
                    id: 3, 
                    content: '<pre class="blocks">when flag clicked <br/> forever <br/> if &lt; (score) &gt; (high score) &gt; then <br/> set [high score v] to (score) </pre>',
                    type: 'locked'
                },
                {
                    cover: 'Make more falling things',
                    id: 4, 
                    content: 'Try duplicating sprites or experiment with cloning.',
                    type: 'idea'
                },
            ]
        }
    ],
})