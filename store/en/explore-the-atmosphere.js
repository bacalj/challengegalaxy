export const state = () => ({
    id: 'explore-the-atmosphere',
    title: 'Explore the Atmosphere',
    goalText: "Make an animated report",
    goalImg: '/explore-the-atmosphere/animate-ship.gif',
    scratchprojid: 317927828,
    studio: 'https://scratch.mit.edu/studios/17643085/projects/',
    pdf: '',
    standards: {
        'NGSS': ['5-ESS2-1'],
        'DLCS-6-8-DTC': ['6-8.DTC.a', '6-8.DTC.b', '6-8.DTC.c'],
        'DLCS-6-8-CT': ['6-8.CT.b', '6-8.CT.d', '6-8.CT.e'],
        'CSTA-6-8-AP': ['2-AP-11', '2-AP-12', '2-AP-13']
    },
    steps: [
        {
            id: 1,
            stepNum: '1',
            stepImg: '/explore-the-atmosphere/layers-of-the-atmosphere.jpeg',
            stepLabel: '<i class="fas fa-lightbulb"></i> Planning &amp; research',
            stepText: 'Before you start coding, it is important to plan and research your project.',
            initialCluesVisible:3,
            clues:[
                {
                    cover: 'What are YOU exploring?',
                    id: 1,
                    content: "This challenge will help you make a project about the layers of the atmosphere, but you can use these ideas and code blocks to make your project about whatever topic you are interested in exploring. Even if you choose to do the layers of the atmosphere, you will want to customize it and make it your own.",
                    type: 'question',
                },
                {
                    cover: 'What are the layers of the atmosphere?',
                    id: 2,
                    content: "Do some research:<br/><br/>What are the layers of the atmosphere? What are some key facts about each layer? How high does each layer go? What is the average temperature? What might you find there?<br/><br/>Do your own search or use these resources:<br/><ul><li><a href='https://www.nasa.gov/mission_pages/sunearth/science/atmosphere-layers2.html' target='_blank'>Earth's Atmospheric Layers by NASA</a></li><li><a href='https://sciencestruck.com/atmosphere-layers-facts' target='_blank'>Atmosphere Layers by ScienceStruck</a></li></ul><br/>Take notes as you read. If you want, <a href='https://doc.new' target='_blank'>click here to create a new Google Doc</a> for your notes.",
                    type: 'question',
                },
                {
                    cover: '<i class="fas fa-keyboard"></i> Write a script',
                    id: 3, 
                    content: "The narrator will tell you about where you are in each place you go on this trip. Write a script in your planning document for each location you will visit. <br/><br/> For example, the script for the troposphere might be something like this:<br/><br/> <blockquote>The troposphere is where all the plants and animals live.<br/>Most of the earth's weather happens in the troposphere.<br/>The air is relatively warm and there is a lot of water in the air.<br/>It gets colder as you go up...</blockquote>",
                },
                {
                    cover: '<i class="fas fa-city"></i> Choose, paint, or upload backdrops for the layers of the atmosphere.',
                    id: 4, 
                    content: '<img src="/explore-the-atmosphere/backdrops.png" alt=""/> Rename the backdrops to the name of the layer so we know which scene it is for. <br/><br/> <img src="/explore-the-atmosphere/rename-backdrop.gif"/>',
                },
            ]
        },
        {
            id: 2,
            stepNum: '2',
            stepImg: '/explore-the-atmosphere/step2.gif',
            stepLabel: '<i class="fas fa-thumbs-up"></i> Opening scene',
            stepText: 'Set the scene and tell the viewer about the voyage they are about to take.',
            initialCluesVisible:0,
            clues:[
                {
                    cover: '<i class="fas fa-cut"></i> Delete the cat',
                    id: 1, 
                    content: '/gifs/delete-scratch.gif',
                },
                {
                    cover: '<i class="fas fa-rocket"></i> Who will be your travel guide?',
                    id: 2,
                    content: "Choose a sprite that will be your narrator. If you're exploring the atmosphere, you might want someone who can fly? <br/><br/> <img src='/gifs/choose-a-sprite.gif'/>",
                },
                {
                    cover: '<i class="fas fa-city"></i> Set the stage',
                    id: 3, 
                    content: 'Choose a backdrop where you will begin the trip.<br/><br/><img src="/gifs/choose-a-backdrop.gif"/> <br/> Rename the backdrop to Intro so we know which scene it is for. <br/><br/> <img src="/explore-the-atmosphere/rename-backdrop.gif"/>',
                },
                {
                    cover: '<i class="fas fa-compress-arrows-alt"></i> Prepare your sprite?',
                    id: 4,
                    content: 'Move your sprite to where it should start. You might want to make your sprite smaller? <br/><br/> <img src="/gifs/shrink-sprite.gif"/>',
                },
                {
                    cover: '<i class="fas fa-flag"></i> When should we start?',
                    id: 5, 
                    content: '<pre class="blocks">when flag clicked</pre>',
                    sprite: 'rocketship.png'
                },
                {
                    cover: "Using 'My Blocks'",
                    id: 6, 
                    content: "To keep the code more organized, we will use 'My Blocks' so we can name sections of the code. This can make it easier to understand what is happening with different parts of your code and can help if you need to fix bugs later. <br/><br/> Make a 'My Block' called 'Intro': <br/><br/> <img src='/gifs/make-a-block.gif'/> <br/> and add it to your project. <br/> <br/> <pre class='blocks'>When flag clicked <br/> intro</pre>",
                    type: 'code',
                },
                {
                    cover: '<i class="fas fa-city"></i> Always start on this backdrop',
                    id: 7, 
                    content: 'When you start the project, make sure to switch back to the opening backdrop. <br/><br/> <pre class="blocks">switch backdrop to [Intro v]</pre>',
                },
                {
                    cover: '<i class="fas fa-map-marker-alt"></i> Where does the sprite start?',
                    id: 8,
                    content: 'Drag your sprite to where you want it to start. Scratch will automatically update the x and y coordinates for you. <br/><br/> <pre class="blocks">go to x () y()</pre>',
                },
                {
                    cover: 'How can you make your sprite talk?',
                    id: 9, 
                    content: "/explore-the-atmosphere/intro-say.gif",
                    type: 'question'
                },
                {
                    cover: 'Say what?',
                    id: 10,
                    content: "<pre class='blocks'>say [Let's explore the layers of the atmosphere!] for (2) seconds</pre>",
                    type: 'code'
                },
                {
                    cover: 'How can you make it fly to the top?',
                    id: 11, 
                    content: 'What is the y coordinate at the top? <br/><br/> <img src="/pngs/xygrid.png"/>',
                    type: 'question'
                },
                {
                    cover: 'Make it fly smoothly up!',
                    id: 12,
                    content: 'Choose an x coordinate that looks good to you. <br/><br/><pre class="blocks">glide (2) secs to x () y (180)</pre>',
                    type: 'code',
                },
                {
                    cover: 'Peek at the code',
                    id: 13,
                    content: "<pre class='blocks'>when flag clicked <br/> intro <br/> define intro <br/> switch backdrop to [Your Backdrop v] <br/> go to x (0) y (-100) <br/> say [Let's explore the layers of the atmosphere!] for (2) seconds <br/> glide (2) secs to x () y (180)</pre>",
                    type: 'locked',
                    sprite: 'rocketship.png'
                }
            ]
        },
        {
            id: 3,
            stepNum: '3',
            stepImg: '/explore-the-atmosphere/animate-ship.gif',
            stepLabel: '<i class="fas fa-rocket"></i> Animate your sprite',
            stepText: 'Switching costumes quickly can make your sprite seem like it is moving.',
            initialCluesVisible:0,
            clues:[
                {
                    cover: 'Basics of animating costumes',
                    id: 1, 
                    content: "Many of the flying sprites have multiple costumes that you can use to make it look like they are flying. If the one you chose doesn't, you might be able to duplicate it and make your own new costumes? Or skip this step and keep going on your journey. <br/><br/> There are different ways to animate sprites. You might want to look at <a href='./walk'>the walking animation challenge</a> to see one simple way.<br/><br/>In this challenge, we want to be able to start and stop the animation. We will use a variable to do that.",
                    type: 'info',
                },
                {
                    cover: 'Make a variable',
                    id: 2,
                    content: 'Make a variable named flying. <br/><br/> <img src="/gifs/make-a-variable.gif"/>',
                    type: 'idea',
                },
                {
                    cover: "What's the value of the flying variable when you start?",
                    id: 3, 
                    content: "<pre class='blocks'>define intro <br/>  set [flying v] to [false] // Add this block <br/> switch backdrop to [Your Backdrop v] <br/> go to x (0) y (-100) <br/> say [Let's explore the layers of the atmosphere!] for (2) seconds <br/> glide (2) secs to x () y (180)</pre>",
                    type: 'code',
                    sprite: 'rocketship.png'
                },
                {
                    cover: 'When will you start flying?',
                    id: 4, 
                    content: "<pre class='blocks'>define intro <br/> set [flying v] to [false] <br/> switch backdrop to [Your Backdrop v] <br/> go to x (0) y (-100) <br/> say [Let's explore the layers of the atmosphere!] for (2) seconds <br/> set [flying v] to [true] // Add this block <br/> glide (2) secs to x () y (180)</pre>",
                    type: 'code',
                    sprite: 'rocketship.png'
                },
                {
                    cover: 'How can you keep checking if flying is true?',
                    id: 5,
                    content: "Using the if-then-else block lets us set the default value if we are not flying. <br/><br/> <pre class='blocks'>when flag clicked <br/> forever <br/> if &lt; &gt; then <br/> else</pre>",
                    type: 'code',
                },
                {
                    cover: 'What do you put in the condition for the if block?',
                    id: 6, 
                    content: '<pre class="blocks">(flying) = [true]</pre>',
                    type: 'code',
                    sprite: 'rocketship.png'
                },
                {
                    cover: 'Animate the flying costumes',
                    id: 7,
                    content: "<pre class='blocks'>switch costume to [rocketship-a v] <br/> wait (0.1) secs <br/> switch costume to [rocketship-b v] <br/> wait (0.1) secs <br/> switch costume to [rocketship-c v] <br/> wait (0.1) secs <br/> switch costume to [rocketship-d v] <br/> wait (0.1) secs</pre> (If you're using a different sprite, the names of your costumes will be different.)",
                    type: 'code',
                    sprite: 'rocketship.png'
                },
                {
                    cover: "What should happen if you're not flying?",
                    id: 8,
                    content: '<pre class="blocks">switch costume to [rocketship-e v]</pre> (Or the name of a non-flying costume.)',
                    type: 'code',
                    sprite: 'rocketship.png'
                },
                {
                    cover: 'See it all together',
                    id: 9,
                    content: "<pre class='blocks'>when flag clicked <br/> forever <br/> if &lt; (flying) = [true] &gt; then <br/> switch costume to [rocketship-a v] <br/> wait (0.1) secs <br/> switch costume to [rocketship-b v] <br/> wait (0.1) secs <br/> switch costume to [rocketship-c v] <br/> wait (0.1) secs <br/> switch costume to [rocketship-d v] <br/> wait (0.1) secs <br/> else <br/> switch costume to [rocketship-e v] <br/> end <br/> define intro <br/> set [flying v] to [false] // Add this block <br/> switch backdrop to [Your Backdrop v] <br/> go to x (0) y (-100) <br/> say [Let's explore the layers of the atmosphere!] for (2) seconds <br/> set [flying v] to [true] // Add this block <br/> glide (2) secs to x () y (180)</pre>",
                    type: 'locked',
                    sprite: 'rocketship.png'
                }
            ]
        },
        {
            id: 4,
            stepNum: '4',
            stepLabel: '<i class="fas fa-tree"></i> Enter the troposphere',
            stepText: 'Visit the lowest layer of the atmosphere.',
            stepImg: '/explore-the-atmosphere/troposphere-entry.gif',
            initialCluesVisible:0,
            clues:[
                {
                    cover: 'Make a My Block',
                    id: 1, 
                    content: 'Make a My Block called troposphere and add it to your code. <pre class="blocks">when flag clicked <br/> intro <br/> troposphere // Add this block</pre>',
                    type: 'code'
                },
                {
                    cover: 'Show the right backdrop',
                    id: 2, 
                    content: '<pre class="blocks">define troposphere <br/> switch backdrop to [Troposphere v]</pre>',
                    type: 'code'
                },
                {
                    cover: 'Where should you enter the troposphere?',
                    id: 3, 
                    content: '<img src="/explore-the-atmosphere/place-ship-troposphere.gif"/> <br/> Drag your sprite to the place it should enter from and get this code block. Your numbers will vary depending on where you put it.<br/><br/> <pre class="blocks">go to x(-150) y(180)</pre>',
                    type: 'question'
                },
                {
                    cover: '<i class="fas fa-sync-alt"></i> Rotate the sprite',
                    id: 4, 
                    content: '<img src="/gifs/rotate-sprite.gif"/> <br/><br/> Turn your sprite so it points towards where it will land in the troposphere. Then use that angle in this code block. <br/><br/> <pre class="blocks">point in direction ()</pre>'
                },
                {
                    cover: '<i class="fas fa-rocket"></i> Fly into the troposphere',
                    id: 5, 
                    content: '<img src="/explore-the-atmosphere/drag-ship-troposphere.gif"/> <br/><br/> Drag your sprite to the the landing spot. Then get this block. Your numbers will be different. <br/><br/> <pre class="blocks">glide (2) secs to x (90) y(-90)</pre>'
                },
                {
                    cover: 'How can we animate turning to face up again?',
                    id: 6, 
                    content: '<pre class="blocks">repeat () <br/> turn left () degrees <br/> wait (0.1) seconds</pre>',
                    type: 'code'
                },
                {
                    cover: 'How many times should we turn?',
                    id: 7, 
                    content: "There are many answers to this; it depends on how fast you want to turn. <br/><br/> If you repeat the turn 10 times, you just need to divide the degrees you want to turn by 10. <br/><br/> <pre class='blocks'>repeat (10) <br/> turn left () degrees <br/> wait (0.1) seconds</pre>",
                    type: 'code'
                },
                {
                    cover: 'How many degrees do you need to turn each time?',
                    id: 8, 
                    content: "Most sprites are vertical at 90 degrees. What direction are you pointing now? <br/><br/> In this example, we turned to face -128 degrees. We need to turn left 142 degrees to face 90 degrees again. <br/><br/> You might find these formulas handy: <br/><br/> <blockquote>Rotate left: <br/> 270 + the angle you're facing = total degrees </blockquote><br/>e.g. 270 + (-128) = 142 degrees<br/><br/> Here's another example. Your sprite is pointing in direction -60 degrees and you want to rotate to the right. <br/><br/> <blockquote>Rotate right: <br/> 90 - the angle you're facing = total degrees </blockquote><br/> 90 - (-60) = 150 degrees <br/><br/> Or use trial and error until you figure it out... <i class='fas fa-smile-wink'></i>",
                    type: 'question'
                },
                {
                    cover: 'Example rotating code',
                    id: 9, 
                    content: "<pre class='blocks'>repeat (10) <br/> turn left (14.2) degrees <br/> wait (0.1) seconds</pre>",
                    type: 'locked',
                    sprite: 'rocketship.png'
                },
                {
                    cover: '<i class="fas fa-plane-arrival"></i> Land',
                    id: 10, 
                    content: "<pre class='blocks'>set [flying v] to [false]</pre>",
                    sprite: 'rocketship.png'
                }
            ]
        },
        {
            id: 5,
            stepNum: '5',
            stepLabel: '<i class="fas fa-info"></i> Troposphere facts',
            stepText: 'Use the information you collected in your research to teach people about this layer of the atmosphere.',
            stepImg: '/explore-the-atmosphere/troposphere-facts.gif',
            initialCluesVisible:0,
            clues:[
                {
                    cover: '<i class="fas fa-thermometer-half"></i> Temperature?',
                    id: 1, 
                    content: 'You can use a variable to display the average temperature in the troposphere. Make a variable and name it Temperature. <br/><br/> <img src="/gifs/make-a-variable.gif"/>',
                },
                {
                    cover: 'Temperature',
                    id: 2, 
                    content: "<pre class='blocks'>define troposphere <br/> switch backdrop to [troposphere v] <br/> set [Temperature v] to [?] // add this block to your code</pre>",
                    type: 'code',
                    sprite: 'rocketship.png'
                },
                {
                    cover: '<i class="fas fa-long-arrow-alt-up"></i> Altitude?',
                    id: 3, 
                    content: 'How high does the troposphere go? Make two variables and name them Minimum Altitude and Maximum Altitude.',
                },
                {
                    cover: 'Altitude',
                    id: 4, 
                    content: "<pre class='blocks'>define troposphere <br/> switch backdrop to [troposphere v] <br/> set [Temperature v] to [?] <br/> set [Minimum Altitude v] to [?] // add this block <br/> set [Maximum Altitude v] to [?] // add this block</pre>",
                    type: 'code'
                },
                {
                    cover: 'Showing and hiding variables',
                    id: 5, 
                    content: "It will look nicer if we don't show the variables in the intro scene. You can hide them until you get to the troposphere. <br/> <pre class='blocks'>define intro <br/> hide variable [Temperature v] // add this block <br/> hide variable [Minimum Altitude v] // add this block <br/> hide variable [Maximum Altitude v] // add this block <br/> define troposphere <br/> switch backdrop to [troposphere v] <br/> set [Temperature v] to [?] <br/> set [Minimum Altitude v] to [?] <br/> set [Maximum Altitude v] to [?] <br/> show variable [Temperature v] // add this block <br/> show variable [Minimum Altitude v] // add this block <br/> show variable [Maximum Altitude v] // add this block</pre>",
                    type: 'code'
                },
                {
                    cover: 'Narration',
                    id: 6, 
                    content: "How can the narrator tell us about the troposphere? Which blocks can you use?",
                    type: 'question'
                },
                {
                    cover: '<i class="fas fa-microphone"></i> Narration',
                    id: 7, 
                    content: "There are a lot of ways to speak in Scratch. Choose one of these: <pre class='blocks'>say [The troposphere is where all the plants and animals live.] for (2) seconds <br/> <br/> speak [Most of the earth's weather occurs in the troposphere.] :: tts<br/> <br/> play sound [Record your voice v] until done</pre>"
                },
                {
                    cover: 'Can you add other sprites, like an animal?',
                    id: 8, 
                    content: 'In the troposphere you might see animals.<br/> <br/> <img src="/explore-the-atmosphere/butterfly.gif"/>',
                    type: 'question'
                },
                {
                    cover: 'Animate other sprites',
                    id: 9, 
                    content: '<pre class="blocks">when backdrop switches to [intro v] <br/> hide <br/> when backdrop switches to [troposphere v] <br/> wait (3) seconds <br/> go to x (240) y (90) <br/> show <br/> glide (4) secs to x (-240) y (90) <br/> hide</pre> Use the wait block to have it appear when you want it to. You can use this same technique to add sprites to other layers also.',
                    type: 'code',
                    sprite: 'butterfly.png'
                },
            ]
        },

        {
            id: 6,
            stepNum: '6',
            stepLabel: '<i class="fas fa-plane-departure"></i> Leaving the troposphere',
            stepText: "It's time to move on to the stratosphere!",
            stepImg: '/explore-the-atmosphere/leaving-troposphere.gif',
            initialCluesVisible:0,
            clues:[
                {
                    cover: 'How do you restart the flying animation?',
                    id: 1, 
                    content: '<pre class="blocks">set [flying v] to [true]</pre>',
                    type: 'code',
                    sprite: 'rocketship.png'
                },
                {
                    cover: 'Animate the temperature dropping',
                    id: 2, 
                    content: 'You could use a glide block to fly away, but there is another way to move if you also want to animate the temperature dropping as you fly to higher altitudes. <br/><br/>  <pre class="blocks">repeat () <br/> change y by () <br/> change [Temperature v] by (-1)</pre> How cold is it at the top of the troposphere? How many times should you repeat this?',
                    type: 'question'
                },
                {
                    cover: 'One solution',
                    id: 3, 
                    content: 'Your code might look something like this: <br/><br/>  <pre class="blocks">repeat (80) <br/> change y by (3) <br/> change [Temperature v] by (-1)</pre>',
                    type: 'locked',
                    sprite: 'rocketship.png'
                },
            ]
        },
        {
            id: 7,
            stepNum: '7',
            stepLabel: '<i class="fas fa-cloud-sun"></i> Above the clouds in the stratosphere',
            stepText: "It's time to move on to the stratosphere!",
            stepImg: '/explore-the-atmosphere/stratosphere.gif',
            initialCluesVisible:0,
            clues:[
                {
                    cover: 'Make a new block',
                    id: 1, 
                    content: '<pre class="blocks">when flag clicked <br/> intro <br/> troposphere <br/> stratosphere // add this block</pre>',
                    type: 'code'
                },
                {
                    cover: 'Show the next backdrop',
                    id: 2, 
                    content: '<pre class="blocks">define stratosphere <br/> switch backdrop to [stratosphere v]</pre>',
                    type: 'code'
                },
                {
                    cover: 'Set temperature and altitude variables',
                    id: 3, 
                    content: "What's it like in the stratosphere? <br/><br/> <pre class='blocks'>set [Temperature v] to [?] <br/> set [Minimum Altitude v] to [?] <br/> set [Maximum Altitude v] to [?]</pre>",
                    type: 'code'
                },
                {
                    cover: 'Fly into the scene',
                    id: 4, 
                    content: 'Where will you enter from? <br/><br/> <pre class="blocks">go to x () y ()</pre> Where will you fly to? <br/><br/> <pre class="blocks">glide (2) secs to x () y ()</pre>',
                    type: 'code'
                },
                {
                    cover: 'Stratosphere facts',
                    id: 5, 
                    content: 'Tell us about the stratosphere <br/><br/> <pre class="blocks">say [] for (2) seconds</pre>',
                    type: 'code'
                },
                {
                    cover: 'The temperature rises as you leave the stratosphere',
                    id: 6, 
                    content: 'Ozone absorbs energy from the sun and makes it warmer as you go higher in the stratosphere <br/><br/> <pre class="blocks">repeat (40) <br/> change y by (3) <br/> change [Temperature v] by (1) <br/> end <br/> repeat (20) <br/> change y by (3) // Get all the way to the mesosphere</pre>',
                    type: 'code'
                },
            ]
        },
        {
            id: 7,
            stepNum: '7',
            stepLabel: '<i class="fas fa-meteor"></i> Mesosphere',
            stepText: "On to the mesosphere!",
            stepImg: '/explore-the-atmosphere/mesosphere.gif',
            initialCluesVisible:0,
            clues:[
                {
                    cover: 'Repeat the steps for the stratosphere',
                    id: 1, 
                    content: '<ol><li>Make a My Block</li><li>Set variable values</li><li>Fly into the scene</li><li>Tell us facts about this layer</li><li>Leave the scene</li></ol>',
                    type: 'idea'
                },
                {
                    cover: '<i class="fas fa-meteor"></i> Meteors!',
                    id: 2, 
                    content: 'Cool fact about the mesosphere: Meteors that enter the atmosphere often burn up here! <br/><br/> Can you animate meteors flying into the stage and burning up? Try to figure it out on your own or use these clues.',
                },
                {
                    cover: 'Add a meteor sprite',
                    id: 3, 
                    content: "There are many ways to do this. Here's a relatively simple one. <br/><br/> First, add a meteor sprite, either from the library, or paint or upload one.",
                    type: 'idea'
                },
                {
                    cover: 'How many meteors?',
                    id: 4, 
                    content: 'Meteors often come in showers. We can use the clone block to make lots of meteors. <br/><br/> When cloning, you often want to hide the original sprite. <pre class="blocks">when flag clicked <br/> hide</pre> How many do you want to make? <pre class="blocks">when backdrop switches to [mesosphere v]<br/> wait (2) seconds // Delay while the rocket flies in? <br/> repeat () <br/> create clone of [myself v] <br/> wait (pick random (0.5) to (1)) seconds></pre>',
                    type: 'code'
                },
                {
                    cover: 'How can you make the clones appear?',
                    id: 5, 
                    content: '<pre class="blocks">when i start as a clone <br/> show </pre>',
                    type: 'code',
                    sprite: 'star.png'
                },
                {
                    cover: 'Where should they start?',
                    id: 6, 
                    content: 'It depends, but often meteor showers seem to come from just one part of the sky. <br/><br/> <pre class="blocks">go to x() y()</pre>',
                    type: 'code'
                },
                {
                    cover: 'Shoot across the sky!',
                    id: 7, 
                    content: '<pre class="blocks">glide (0.5) secs to [random position v]</pre>',
                    type: 'code',
                    sprite: 'star.png'
                },
                {
                    cover: 'Disappear',
                    id: 8, 
                    content: "Meteors usually burn up in the atmosphere, but you should also get in the habit of deleting clones when you are done with them. Scratch has a limit to how many you can add. <br/><br/> <pre class='blocks'>delete this clone</pre>",
                    type: 'code'
                },
                {
                    cover: 'Burning up?',
                    id: 9, 
                    content: "You could animate costumes to make it look like the meteors are burning up, but this looks ok too. <br/><br/> <pre class='blocks'>when i start as a clone <br/> set [ghost v] effect to (0) <br/> repeat (5) <br/> change [ghost v] effect by (20) <br/> wait (0.1) seconds</pre>",
                    type: 'code'
                },
                {
                    cover: 'Full meteor code',
                    id: 10,
                    content: "<pre class='blocks'>when flag clicked <br/> hide <br/> end <br/> when backdrop switches to [mesosphere v]<br/> wait (2) seconds // Delay while the rocket flies in? <br/> repeat () <br/> create clone of [myself v] <br/> wait (pick random (0.5) to (1)) seconds> <br/> <pre class='blocks'>when i start as a clone <br/> show <br/> go to x() y() <br/> glide (0.5) secs to [random position v] <br/> delete this clone <br/> when i start as a clone <br/> set [ghost v] effect to (0) <br/> repeat (5) <br/> change [ghost v] effect by (20) <br/> wait (0.1) seconds</pre>",
                    type: 'locked',
                    sprite: 'star.png'
                },
                {
                    cover: 'Leaving the thermosphere',
                    id: 10, 
                    content: "<pre class='blocks'>repeat (60) <br/> change y by (3)</pre>",
                    type: 'code',
                    sprite: 'rocketship.png'
                },
            ]
        },
        {
            id: 8,
            stepNum: '8',
            stepLabel: '<i class="fas fa-asterisk"></i> What else?',
            stepText: "The thermosphere, ionosphere, exosphere...",
            stepImg: '/explore-the-atmosphere/satellite.jpeg',
            initialCluesVisible:0,
            clues:[
                {
                    cover: 'You can do it!',
                    id: 1, 
                    content: 'There are some really cool things in the outer layers of the atmosphere. Now that you know the basic steps, see if you can finish these layers on your own.',
                    type: 'idea'
                },
                {
                    cover: 'Aurora Borealis',
                    id: 2, 
                    content: 'The northern lights (or Aurora Borealis) occurs in the thermosphere. Can you make something like this in Scratch? <br/><br/> <div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/29568236?color=a3a3a3&title=0&byline=0&portrait=0" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe></div><script src="https://player.vimeo.com/api/player.js"></script> ',
                    type: 'idea'
                },
                {
                    cover: "It's hot up there!",
                    id: 3, 
                    content: "It can get up to 3000 degrees celsius in the thermosphere. Make sure you're safe!",
                    type: 'idea'
                },
                {
                    cover: "Where would you find satelites?",
                    id: 4, 
                    content: "Can you tell us about satelites and how they orbit the earth?",
                    type: 'question'
                },
            ]
        }
    ],
})