export const state = () => ({
    id: 'reaction-time',
    title: 'How fast are you?',
    goalText: "Test your reaction time!",
    goalImg: '/reaction-time/step-2.jpg',
    scratchprojid: 296799990,
    studio: 'https://scratch.mit.edu/studios/6230608/projects/',
    pdf: 'Reaction Time.pdf',
    standards: {
        'NGSS': ['4-LS1-2'],
        'DLCS-6-8-DTC': ['6-8.DTC.a'],
        'DLCS-6-8-CT': ['6-8.CT.b', '6-8.CT.c', '6-8.CT.d', '6-8.CT.e', ]
    },
    steps: [
        {
            id: 1,
            stepNum: '1',
            stepImg: '/reaction-time/watch.jpg',
            stepLabel: '<i class="fas fa-lightbulb"></i> Experiment Design',
            stepText: 'Before you start coding, it is important to think about how to design your experiment.',
            initialCluesVisible:0,
            clues:[
                {
                    cover: 'What is reaction time?',
                    id: 1,
                    content: 'How quickly can you react?<br/><br/> Reaction time is how long it takes us to respond to something. Reaction time is important for many things including sports, driving, emergencies, and many other activities.<br/><br/>Reaction time is a measurement of how long it takes for our brain and nerves to react to a stimulus. After receiving a signal, our brain sends a signal through our nerves to our muscles with the appropriate reaction to the stimulus.',
                    type: 'question',
                },
                {
                    cover: 'How can we measure reaction time?',
                    id: 2,
                    content: 'We can measure how long it takes to respond to a stimulus. Using Scratch we can play a sound or show an image. Then we can use a timer to measure how long it takes the subject to respond.',
                    type: 'question',
                },
                {
                    cover: 'What stimulus will you test?',
                    id: 3, 
                    content: "Do we react equally quickly to sounds and sights? Do we react faster to some sound frequencies or colors? Does it matter if an image is moving or not?<br/><br/>You are designing this experiment and can choose what you will test. You can choose any sounds, sprites, and backdrops you like for this project. In some places you may need to adapt the clues if you choose something different than the example presented here. Remember this challenge is meant to inspire your own ideas!</p>",
                    type: 'question',
                },
                {
                    cover: 'Repetition',
                    id: 4,
                    content: 'Science is knowledge gained through repeated experiments or observations. Any single data point collected may vary a lot due to many factors, but we can get much more accurate answers by repeating an experiment many times and averaging the results. The results of each repetition is called a sample.<br/><br/>How many times do you want to repeat this experiment to measure reaction time?',
                    type: 'question',
                }
            ]
        },
        {
            id: 2,
            stepNum: '2',
            stepImg: '/reaction-time/step-1.jpg',
            stepLabel: '<i class="fas fa-code"></i> Code your experiment',
            stepText: 'Write code that plays a sound and measures how long it takes to respond.',
            initialCluesVisible:0,
            clues:[
                {
                    cover: 'Start the experiment',
                    id: 1, 
                    content: '<pre class="blocks">when flag clicked</pre>',
                    type: 'code',
                },
                {
                    cover: 'Sample size',
                    id: 2,
                    content: 'How many times will this experiment be repeated? Which code block would you use to do that?',
                    type: 'question',
                },
                {
                    cover: 'How many times do you want to run the experiment?',
                    id: 3, 
                    content: '<pre class="blocks">repeat ()</pre>',
                    type: 'code',
                },
                {
                    cover: 'Unpredictability?',
                    id: 4,
                    content: 'We want to make it hard to guess when the stimulus will happen. How can we have Scratch wait for an amount of time that is hard to predict?',
                    type: 'question',
                },
                {
                    cover: 'Make them wait',
                    id: 5, 
                    content: '<pre class="blocks">wait () seconds',
                    type: 'code',
                },
                {
                    cover: 'Be unpredictable',
                    id: 6, 
                    content: '<pre class="blocks">pick random (1) to ()',
                    type: 'code',
                },
                {
                    cover: 'Choose a sound',
                    id: 7, 
                    content: '<img src="/gifs/sounds-tab.gif"/><br/><img src="/gifs/choose-a-sound.gif"/>',
                    type: 'info',
                },
                {
                    cover: 'Stimulate!',
                    id: 8,
                    content: 'How can you play your sound?',
                    type: 'question',
                },
                {
                    cover: 'Play your sound',
                    id: 9, 
                    content: '<pre class="blocks">start sound [meow v]</pre>',
                    type: 'code',
                },
                {
                    cover: 'Measuring time?',
                    id: 10,
                    content: 'How can you measure how long it takes to respond? Which blocks let you use the timer? How will the test subject indicate their reaction?',
                    type: 'question',
                },
                {
                    cover: 'Start the timer',
                    id: 11, 
                    content: '<pre class="blocks">reset timer</pre>',
                    type: 'code',
                },
                {
                    cover: 'Wait for reaction',
                    id: 12,
                    content: '<pre class="blocks">wait until &lt;&gt;</pre>',
                    type: 'code',
                },
                {
                    cover: 'Key pressed?',
                    id: 13,
                    content: 'What key should they press? <br/><br/> <pre class="blocks">key &lt;&gt; pressed?</pre>',
                    type: 'code',
                },
                {
                    cover: 'Storing results?',
                    id: 14,
                    content: 'Which data structure will you use to store your results? How many times will you repeat the experiment? You could use a variable if you only needed to store one reaction time, but remember you are repeating the experiment many times.',
                    type: 'question',
                },
                {
                    cover: 'Make a list to store reaction times',
                    id: 15,
                    content: '<img src="/gifs/make-a-list.gif"/><br/><img src="/gifs/list-named-list.gif"/>',
                    type: 'info',
                },
                {
                    cover: 'Add time to list',
                    id: 16,
                    content: 'What is the name of your list? <br/><br/> <pre class="blocks">add (timer) to [list v]</pre>',
                    type: 'code',
                },
                {
                    cover: 'Clear list for next experiment',
                    id: 17,
                    content: '<pre class="blocks">when flag clicked <br/> delete all of [list v]</pre>',
                    type: 'code',
                },
                {
                    cover: 'Having trouble?',
                    id: 18,
                    content: '<pre class="blocks">when flag clicked <br/> delete all of [list v]<br/> repeat (10) <br/> wait (pick random (1) to (10)) seconds <br/> start sound [meow v] <br/> reset timer <br/> wait until &lt;key [space v] pressed?&gt; <br/>add (timer) to [list v]</pre>',
                    type: 'locked',
                },
            ]
        },
        {
            id: 3,
            stepNum: '3',
            stepImg: '/reaction-time/step-2.jpg',
            stepLabel: '<i class="fas fa-chart-line"></i> Analyze the Data',
            stepText: 'Analyze your data to find the average response time for all the samples.',
            initialCluesVisible:0,
            clues:[
                {
                    cover: 'Calculate the average?',
                    id: 1, 
                    content: 'How would you calculate the average of a list of numbers? Think about how to do this as a math operation.',
                    type: 'question',
                },
                {
                    cover: 'Variables',
                    id: 2,
                    content: 'The average of a list is the sum of all the numbers divided by the count of how many numbers in the list. <br/><br/> Variables are a way to store values. In addition to the average, we will need know the total and where in the list we are as you add up the numbers.',
                    type: 'info',
                },
                {
                    cover: 'Make 3 variables: count, total, and average',
                    id: 3, 
                    content: '/gifs/make-a-variable.gif',
                    type: 'info',
                },
                {
                    cover: 'What values do variables start at?',
                    id: 4, 
                    content: '<pre class="blocks">set [total v] to (0) <br/> set [count v] to (1)</pre>',
                    type: 'code',
                },
                {
                    cover: 'How many times do we need to add numbers to the total?',
                    id: 5,
                    content: '<pre class="blocks">repeat (length of [list v])</pre>',
                    type: 'code',
                },
                {
                    cover: 'Add to the total',
                    id: 6, 
                    content: '<pre class="blocks">change [total v] by (item (count) of [list v])</pre>',
                    type: 'code',
                },
                {
                    cover: 'Add to the count',
                    id: 7,
                    content: '<pre class="blocks">change [count v] by (1)</pre>',
                    type: 'code',
                },
                {
                    cover: 'Division',
                    id: 8,
                    content: 'After you are done adding all the numbers together: <br/> <pre class="blocks">set [average v] to ( (total) / (count) )</pre>',
                    type: 'code',                },
                {
                    cover: 'Show average',
                    id: 9,
                    content: "<pre class='blocks'>show variable [average v]</pre><br/>Let's hide the average during the experiment: <br/> <pre class='blocks'>when flag clicked <br/> hide variable [average v]</pre>",
                    type: 'code',
                },
                {
                    cover: 'Having trouble?',
                    id: 10,
                    content: 'Attach this to the code you wrote before: <br/> <pre class="blocks">set [total v] to (0) <br/> set [count v] to (1) <br/> repeat (length of [list v]) <br/> change (total) by (item (count) of [list v]) <br/> change (count) by (1) <br/> end <br/> set [average v] to ((total) / (count)) <br/> show variable [average v] <br/> when flag clicked <br/> hide variable [average v]</pre>',
                    type: 'locked',
                },
            ]
        },
        {
            id: 4,
            stepNum: '4',
            stepLabel: '<i class="fas fa-palette"></i> Make it nice',
            stepText: 'Add instructions and other graphics.',
            stepImg: '/reaction-time/step-3.jpg',
            initialCluesVisible:0,
            clues:[
                {
                    cover: 'Tell the person participating in your experiment what to do.',
                    id: 1, 
                    content: 'Good instructions are important to collect good data. Make sure the person knows what to expect and how to respond to the stimulus.',
                },
                {
                    cover: 'Add instructions',
                    id: 2, 
                    content: '<img src="/gifs/edit-backdrop.gif"/><br/><img src="/gifs/switch-to-backdrop.gif"/><br/><img src="/gifs/add-instructions.gif"/>',
                },
                {
                    cover: 'Hide variables',
                    id: 3, 
                    content: 'Maybe you do not want to show all the variable values? <br/><br/> <img src="/reaction-time/hide-variables.gif"/> <br/><br/> Try this: <br/><br/> <pre class="blocks">say (join [Your average reaction time was ] ( join (average) [ seconds]))</pre><br/><br/> instead of <br/> <pre class="blocks"> show variable [average v]</pre>',
                },
                {
                    cover: 'Make it look nice!',
                    id: 4, 
                    content: 'What else could you do to make it look nice? People may be more likely to participate in your experiment if you make it look nice.',
                },
            ]
        },
        {
            id: 5,
            stepNum: '5',
            stepLabel: '<i class="fas fa-asterisk"></i> Bonus',
            stepText: 'Extras!',
            initialCluesVisible:1,
            clues:[
                {
                    cover: 'Compare different stimuli',
                    id: 1, 
                    content: 'Do different sounds or frequencies affect reaction time? Does color affect it? Motion? <br/> <br/> Can you design an experiment that tests your hypothesis?',
                }
            ]
        }
    ],
})