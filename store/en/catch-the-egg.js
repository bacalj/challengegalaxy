export const state = () => ({
    id: 'catch-the-egg',
    title: 'Catch the Egg',
    goalText: "Don't let the egg hit the ground!",
    goalImg: '/catch-the-egg/catching-eggs.gif',
    scratchprojid: 296663990,
    studio: 'https://scratch.mit.edu/studios/6229749/projects/',
    code: 'Catch-the-Egg-Code.pdf',
    
    steps: [
        {
            id: 1,
            stepNum: '1',
            stepImg: '/catch-the-egg/step-1.jpg',
            stepLabel: '<i class="fas fa-lightbulb"></i> Setup',
            stepText: 'Choose sprites and a backdrop',
            clues:[
                {
                    cover: 'Use your imagination!',
                    id: 0, 
                    content: "<img src='/svgs/unicorn.svg' alt='unicorn'/><p>You can choose any sprites and backdrops you like for this project. In some places you may need to adapt the clues if you choose something different. Remember this challenge is meant to inspire your own ideas!</p>",
                    type: 'info',
                    showAtLevelAndAbove:"1"
                },
                {
                    cover: 'Delete Scratch',
                    id: 1, 
                    content: '/gifs/delete-scratch.gif',
                    type: 'idea',
                    showAtLevelAndAbove:"4"
                },
                {
                    cover: 'Choose 2 sprites',
                    id: 2, 
                    content: '/gifs/choose-a-sprite.gif',
                    type: 'idea',
                    showAtLevelAndAbove:"4"
                },

                {
                    cover: 'Choose a backdrop',
                    id: 3, 
                    content: '/gifs/choose-a-backdrop.gif',
                    type: 'idea',
                    showAtLevelAndAbove:"4"
                },
                {
                    cover: 'Ground?',
                    id: 4,
                    content: "The ground should be a unique color. Use the drawing tools if needed.<br/><br/><img src='/catch-the-egg/add-ground.gif'/>",
                    type: 'idea',
                    showAtLevelAndAbove:"2"
                },
            ]
        },
        {
            id: 2,
            stepNum: '2',
            stepImg: '/catch-the-egg/moving-catcher.gif',
            stepLabel: '<i class="fas fa-lightbulb"></i> Moving',
            stepText: 'Move your catcher',
            clues:[
                {
                    cover: 'Select the catcher sprite',
                    id: 1, 
                    content: '/catch-the-egg/select-the-catcher-sprite.gif',
                    type: 'idea',
                    showAtLevelAndAbove:"4"
                },
                {
                    cover: 'Start the game',
                    id: 2, 
                    content: '<pre class="blocks">when flag clicked</pre>',
                    type: 'code',
                    showAtLevelAndAbove:"4"
                },
                {
                    cover: 'For how long?',
                    id: 3, 
                    content: '<pre class="blocks">forever</pre>',
                    type: 'code',
                    showAtLevelAndAbove:"4"
                },
                {
                    cover: 'if - then',
                    id: 4, 
                    content: '<pre class="blocks">if &lt;&gt; then</pre>',
                    type: 'code',
                    showAtLevelAndAbove:"2"
                },
                {
                    cover: 'Which key?',
                    id: 5,
                    content: '<pre class="blocks">key &lt;&gt; pressed?</pre>',
                    type: 'code',
                    showAtLevelAndAbove:"2"
                },
                {
                    cover: 'Move right',
                    id: 6,
                    content: 'How fast do you want to move?<br/><pre class="blocks">change x by ()</pre>',
                    type: 'code',
                    showAtLevelAndAbove:"2"
                },
                {
                    cover: 'Move left?',
                    id: 7,
                    content: 'Changing x by a positive number moves you to the right. What will make you move left?',
                    type: 'idea',
                    showAtLevelAndAbove:"2"
                },
                {
                    cover: 'Having trouble?',
                    id: 8,
                    content: '<pre class="blocks">when flag clicked<br/>forever<br/>if &lt;key [right arrow v] pressed?&gt; then <br/> change x by (10) <br/> end  <br/> if &lt;key [left arrow v] pressed?&gt; then <br/> change x by (-10) <br/> end <br/>end</pre>',
                    type: 'locked',
                    showAtLevelAndAbove:"4"
                },
            ]
        },
        {
            id: 3,
            stepNum: '3',
            stepImg: '/catch-the-egg/falling-eggs.gif',
            stepLabel: '<i class="fas fa-lightbulb"></i> Falling',
            stepText: 'Make the egg fall',
            clues:[
                {
                    cover: 'Select the egg sprite',
                    id: 1, 
                    content: '/gifs/select-the-egg-sprite.gif',
                    type: 'idea',
                    showAtLevelAndAbove:"4"
                },
                {
                    cover: 'Start the game',
                    id: 2, 
                    content: '<pre class="blocks">when flag clicked</pre>',
                    type: 'code',
                    showAtLevelAndAbove:"4"
                },
                {
                    cover: 'For how long?',
                    id: 3, 
                    content: '<pre class="blocks">forever</pre>',
                    type: 'code',
                    showAtLevelAndAbove:"4"
                },
                {
                    cover: 'Go to the top',
                    id: 4, 
                    content: '<pre class="blocks">go to x () y (180)</pre>',
                    type: 'code',
                    showAtLevelAndAbove:"2"
                },
                {
                    cover: 'At a random place',
                    id: 5,
                    content: '<pre class="blocks">pick random (-240) to (240)</pre>',
                    type: 'code',
                    showAtLevelAndAbove:"2"
                },
                {
                    cover: 'Falling',
                    id: 6,
                    content: '<pre class="blocks">repeat until <> <br/>change y by (-5)</pre>',
                    type: 'code',
                    showAtLevelAndAbove:"2"
                },
                {
                    cover: 'Until?',
                    id: 7,
                    content: '<pre class="blocks">touching [catcher v]</pre>',
                    type: 'code',
                    showAtLevelAndAbove:"2"
                },
                {
                    cover: 'Having trouble?',
                    id: 8,
                    content: '<pre class="blocks">when flag clicked<br/>forever<br/>go to x (pick random (-240) to (240)) y (180)<br/>repeat until &lt;touching [Catcher v]?&gt;<br/>change y by (-5)</pre>',
                    type: 'locked',
                    showAtLevelAndAbove:"4"
                } 
            ]
        },
        {
            id: 4,
            stepNum: '4',
            stepImg: '/catch-the-egg/catching-eggs.gif',
            stepLabel: '<i class="fas fa-lightbulb"></i> Points',
            stepText: 'How many can you collect?',
            clues:[
                {
                    cover: 'Select the catcher sprite',
                    id: 0, 
                    content: '/catch-the-egg/select-the-catcher-sprite.gif',
                    type: 'idea',
                    showAtLevelAndAbove:"4"
                },
                {
                    cover: 'Make a score variable ',
                    id: 1, 
                    content: '<img src="/gifs/make-a-variable.gif"/><br/><img src="/gifs/score-variable.gif"/>',
                    type: 'idea',
                    showAtLevelAndAbove:"4"
                },
                {
                    cover: 'When the game starts',
                    id: 2, 
                    content: '<pre class="blocks">when flag clicked</pre>',
                    type: 'code',
                    showAtLevelAndAbove:"4"
                },
                {
                    cover: 'What is the score at the beginning?',
                    id: 3, 
                    content: '<pre class="blocks">set [score v] to (0)</pre>',
                    type: 'code',
                    showAtLevelAndAbove:"4"
                },
                {
                    cover: 'When do you know the egg has been caught?',
                    id: 4, 
                    content: 'After this is finished:<br/><pre class="blocks">repeat until &lt;touching [Catcher v]?&gt;</pre>',
                    type: 'question',
                    showAtLevelAndAbove:"2"
                },
                {
                    cover: 'Then change the score',
                    id: 5, 
                    content: '<pre class="blocks">change [score v] by (1)</pre>',
                    type: 'code',
                    showAtLevelAndAbove:"2"
                },
                {
                    cover: 'Play a sound!',
                    id: 6,
                    content: '<pre class="blocks">start sound [pop v]</pre>',
                    type: 'code',
                    showAtLevelAndAbove:"2"
                },
                {
                    cover: 'Having trouble?',
                    id: 7,
                    content: "Look at the script you wrote before and add three new blocks: <br/> <pre class='blocks'>when flag clicked <br/> set [score v] to (0) <br/> forever <br/> go to x (pick random (-240) to (240)) y (180) <br/> repeat until &lt;touching [catcher v]&gt; <br/> change y by (-5) <br/> end <br/> change [score v] by (1) <br/> start sound [pop v]</pre>",
                    type: 'locked',
                    showAtLevelAndAbove:"4"
                }     
            ]
        },
        {
            id: 5,
            stepNum: '5',
            stepImg: '/catch-the-egg/cracking-egg.gif',
            stepLabel: '<i class="fas fa-lightbulb"></i> Ground',
            stepText: 'Hit the ground?',
            clues:[
                {
                    cover: 'Select the egg sprite',
                    id: 0, 
                    content: '/catch-the-egg/select-the-egg-sprite.gif',
                    type: 'idea',
                    showAtLevelAndAbove:"4"
                },
                {
                    cover: 'When the game starts',
                    id: 1, 
                    content: '<pre class="blocks">when flag clicked</pre>',
                    type: 'code',
                    showAtLevelAndAbove:"4"
                },
                {
                    cover: 'Always start with the original costume',
                    id: 2, 
                    content: '<pre class="blocks">switch costume to [egg-a v]</pre>',
                    type: 'code',
                    showAtLevelAndAbove:"2"
                },
                {
                    cover: 'For how long?',
                    id: 3, 
                    content: '<pre class="blocks">forever</pre>',
                    type: 'code',
                    showAtLevelAndAbove:"4"
                },
                {
                    cover: 'if - then',
                    id: 4, 
                    content: '<pre class="blocks">if &lt;&gt; then</pre>',
                    type: 'code',
                    showAtLevelAndAbove:"4"
                },
                {
                    cover: 'Touching the ground?',
                    id: 5, 
                    content: '<pre class="blocks">&lt;touching color (#653b09)&gt;</pre>',
                    type: 'code',
                    showAtLevelAndAbove:"2"
                },
                {
                    cover: 'Switch to the broken costume',
                    id: 6, 
                    content: '<pre class="blocks">switch costume to [egg-b v]</pre>',
                    type: 'code',
                    showAtLevelAndAbove:"2"
                },
                {
                    cover: 'Stop the game!',
                    id: 7, 
                    content: '<pre class="blocks">stop [all v]</pre>',
                    type: 'code',
                    showAtLevelAndAbove:"2"
                },
                {
                    cover: 'Having trouble?',
                    id: 8,
                    content: '<pre class="blocks">when flag clicked <br/> switch costume to [egg-a v] <br/> forever <br/> if &lt;touching color (#653b09)&gt; then <br/> switch costume to [egg-b v] <br/> stop [all v]</pre>',
                    type: 'locked',
                    showAtLevelAndAbove:"4"
                }     
            ]
        },
        {
            id: 6,
            stepNum: '6',
            stepLabel: '<i class="fas fa-asterisk"></i> Extras!',
            stepText: 'What else can you add? Powerups? Levels?',
            clues:[
                {
                    cover: 'Make the eggs fall faster',
                    id: 0, 
                    content: "Try different speeds? <pre class='blocks'>change y by ()</pre>",
                    type: 'idea',
                    showAtLevelAndAbove:"0"
                },
                {
                    cover: 'More levels',
                    id: 0, 
                    content: '<pre class="blocks">when flag clicked <br/> switch backdrop to [backdrop1 v] <br/> forever <br/> if &lt; (score) = (10) &gt; then <br/> switch backdrop to [backdrop2 v]</pre>',
                    type: 'locked',
                    showAtLevelAndAbove:"0"
                },
                {
                    cover: 'High score?',
                    id: 2, 
                    content: '<pre class="blocks">when flag clicked <br/> forever <br/> if &lt; (score) &gt; (high score) &gt; then <br/> set [high score v] to (score) </pre>',
                    type: 'locked',
                    showAtLevelAndAbove:"0"
                },
                {
                    cover: 'Make more falling things',
                    id: 1, 
                    content: 'Try duplicating sprites or experiment with cloning.',
                    type: 'idea',
                    showAtLevelAndAbove:"0"
                },
            ]
        }
    ],
})