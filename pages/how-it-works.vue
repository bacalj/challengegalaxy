<template>
    <section class="container getting-started-page-container">

        <div class="columns">
            <div class="column menu is-one-fifth has-text-light">
                <aside>
                    <p class="menu-label has-text-light">
                        Getting Started
                    </p>
                    <ul class="menu-list">
                        <li><a v-scroll-to="{ el: '#chrome', offset: -100 }">Chrome Extension</a></li>
                        <li><a v-scroll-to="{ el: '#other-browsers', offset: -100 }">Side-By-Side</a></li>
                    </ul>
                    <p class="menu-label has-text-light">
                        Using Challenge Galaxy
                    </p>
                    <ul class="menu-list">
                        <li><a v-scroll-to="{ el: '#getting-clues', offset: -100 }">Steps and Clues</a></li>
                        <li><a v-scroll-to="{ el: '#locked-clues', offset: -100 }">Locked Clues</a></li>
                        <li><a v-scroll-to="{ el: '#sharing-projects', offset: -100 }">Sharing Projects</a></li>
                    </ul>
                    <p class="menu-label has-text-light">
                        Educators
                    </p>
                    <ul class="menu-list">
                        <li><a v-scroll-to="{ el: '#in-your-classroom', offset: -100 }">In Your Classroom</a></li>
                        <li><a v-scroll-to="{ el: '#standards', offset: -100 }">Concepts & Standards</a></li>
                        <!-- <li><a>F.A.Q.</a></li>
                        <li><a>Troubleshooting</a></li> -->
                    </ul>
                </aside>
            </div>
            <div class="column content is-three-fifths is-offset-one-quarter has-text-light">
                <h1 class="page-title has-text-light">How It Works</h1>
                
                <h2 class="title has-text-light">Getting Started</h2>

                <p>There are two ways you can set up ChallengeGalaxy</p>

                <ul id="two-ways">
                    <li>
                        <h4><a href="#chrome">Chrome extension:</a></h4>
                        <p>You can use it right inside Scratch by using our Chrome extension</p>
                    </li>
                    <li>
                        <h4><a href="#other-browsers">Side-by-Side:</a></h4>
                        <p>Side-by-side: open ChallengeGalaxy in one tab or device and Scratch in the other</p>
                    </li>                
                </ul>

                <h3 id="chrome" class="subtitle has-text-light">Use the ChallengeGalaxy chrome extension</h3>
                <p>Our Chrome extension lets you see the challenges right inside Scratch.</p>
                <p>1. First, add the Challenge Galaxy extension to your Chrome browser. The button below will bring you to the Chrome Web Store.</p>
                <p><a class="button is-primary" href="https://chrome.google.com/webstore/detail/cbidhbafbppopanlhekfpjjaicagjbci" target="_blank">Add Chrome Extension</a></p>
                <p><img src="/gifs/add-to-chrome.gif" alt="Add to Chrome"/></p>
                <p>2. Next, open Scratch. The button below will open it in a new browser window for you.</p>
                <p><a class="button is-primary" href="https://scratch.mit.edu" target="_blank">Open Scratch</a></p>
                <p>3. Click the Challenge Galaxy button in your browser toolbar to open the list of challenges and pick your challenge!</p>
                <p><img src="/gifs/chrome-choose-a-challenge.gif" alt="Choose a challenge"/></p>
                <p>4. The challenge you choose will open right inside Scratch so you can build your project and look at the clues at the same time.</p>
                <p><img src="/gifs/embedded-cg.gif" alt="Challenge Galaxy embedded in Scratch website"/></p>
                <p>Have fun!</p>

                <h3 id="other-browsers" class="subtitle has-text-light">Use ChallengeGalaxy Side-by-Side with Scratch</h3>
                <p>If you are not using Chrome and/or if your screen is wide enough, we recommend opening two windows side-by-side like this:</p>
                <p><img src="/pngs/cgandscratch.png" alt="Challenge Galaxy and Scratch side-by-side"/></p>
                <p>If you're using a display that doesn't easily fit both windows, try opening Challenge Galaxy in one window and Scratch in another and switch back and forth as needed. Some people prefer switch between browser tabs and others prefer having different windows. Maybe you're more comfortable one way or the other?</p>
                <p>Another way that can work really well if you have a tablet or a phone is to open Challenge Galaxy on your mobile device and use Scratch on your computer.</p>
                <p>Have fun!</p>

                <hr>
                <h2 id="using" class="title has-text-light">Using Challenge Galaxy</h2>
              
                <p>You can complete challenges with as many or as few clues as you like. The first part of a challenge always shows you what your goal is.  If you want to, you can just start building. You can build your solution, and share it in the studio set up on Scratch for each challenge.</p>

                <h3 id="getting-clues" class="title has-text-light">Steps and Clues</h3>
               
                <p>Each challenge is broken up in a number of steps. To open a step, click the step name.</p>

                <p><img src="jpgs/open_step.jpg" alt="an image of a step open in ChallengeGalaxy"></p>

                <p>Maybe the step picture is enough to get you back to coding.  If not, you can open up clues. Click the "Give me a clue!"" button.</p>

                <p><img src="gifs/opening_a_clue.gif" alt="animation of opening a clue"></p>

                <p>This is part of the clue.  It might help you and you might not even open the clue up.  If your still curious or wondering, open up the clue by clicking on it. </p>
                
                <h3 id="locked-clues" class="title has-text-light">Locked Clues</h3>

                <p>The last clue in a step is often locked.  This usually means it has all the code you need to finish the step.  You can open this up if you need to by clicking on the lock.  You'll have to type the code you see backwards to open it.</p>

                <p><img src="gifs/open_locked_clue.gif" alt="moving image of opening a locked clue"></p>

                <h3 id="sharing-projects" class="title has-text-light">Sharing Projects</h3>

                <p>Finished a project? Great! We'd love for you to share it in the Scratch studio that we've set up for each challenge.</p>

                <p><img src="gifs/go_to_studio.gif" alt="moving image of opening a locked clue"></p>

                <hr>
                <h2 id="in-your-classroom" class="title has-text-light">In the Classroom</h2>

                <p>We're still in the early iterations of ChallengeGalaxy, and we're hoping to get feedback from other teachers who begin using it in their classrooms. Here are a few different ways ChallengeGalaxy might be used in a classroom setting.</p>

                <h3 class="title has-text-light">As A Lesson Foundation</h3>
                <p>Some series of challenges, such as the "Scratch Basics" series, are focused on helping students build and understand a particular programming concept to achieve a particular effect. In our experience, it can be engaging to work through a number of just-focus-on-the-concept projects before setting students to work on more open-ended or curriculum-connected projects. Here is a short sample lesson plan based on the <nuxt-link to="/challenges/learn-name">Teach an Elephant!</nuxt-link> challenge:</p>

                <h4 class="title has-text-light">Lesson: Teach An Elephant!</h4>

                <!-- <p><b>Concepts:</b></p>
                <ul>
                    <li>Events</li>
                    <li>String concatenation</li>
                    <li>Using variables</li>
                    <li>Input and output</li>
                </ul> -->

                <ol class="lesson">
                    <li>
                        <b>Present the goal and express it in human terms</b><br>
                        <p>In a group at the front of the classroom, students view the "Goal" project for a Scratch Basic Challenge</p>
                        <p>The teacher asks students to articulate exactly what happens in the project, e.g.</p>
                        <ul>
                            <li>What happens in this project? <br><em>An elephant asks your name and then says hi to you.</em></li>
                            <li>What "starts" the project? <br><em>The green flag.</em></li>
                            <li>What does the Elephant do first?<br><em>He asks you what your name is.</em></li>
                            <li>Does the Elephant "learn" something? What does it learn? How do we know?<br><em>He learns your name.  You know because he says it back to you.</em></li>
                            <li>Is there a pattern to what the Elephant does or says?<br><em>He always says "Hi, whatever your name is".</em></li>
                        </ul>
                    </li>

                    <li>
                        <b>Collectively Solve the Challenge</b><br>
                        <p>The thought process mapped out in the Challenge clues can be mirrored in the form of a group build of a solution to the challenge</p>
                        <p>Ask students to help as they assemble the script for the elephant (or bring students up to do it if you have a SmartBoard or if students can use the computer being displayed</p>
                        <ul>
                            <li>Which block can we use to start things off?<br><em>The green flag</em></li>
                            <li>Can anyone find a block that will ask a question<br><em>Ask () and wait</em></li>
                            <li>So now we have it asking, what happens to the answer we type in? (check off the answer variable so students can see it populate)<br><em>It goes "in" the answer variable</em></li>
                            <li>So what do we want to do with the answer?<br><em>Have the elephant say it in the "say" block</em></li>
                            <li>How do we get the elephant to say "Hi, " before he says the answer?<br><em>We need to make him say both</em></li>
                            <li>There is a block that helps us put two groups of words together or "join" them<br><em>So put it all together...</em></li>
                        </ul>
                    </li>

                    <li>
                        <b>Students make their own versions</b><br>
                        <p>Students are assigned to make their own version with the following directions</p>
                    
                        <ul>
                            <li>Make a sprite learn your name and say it back to you in a small conversation.</li>
                            <li>You can use the elephant, or choose another sprite</li>
                            <li>Try to put it together by searching for blocks and experimenting</li>
                            <li>If you get stuck - try opening some hints on the ChallengeGalaxy challenge</li>
                            <li>Once you get it working - publish it to the studio</li>
                            <li>Now, you can add more ideas of your own.  Do you want it to move it's mouth while it talks? What if it asked another question? What other ideas do you have?</li>
                        </ul>
                    </li>

                    <li>
                        <b>Whole group share</b><br>
                        <p>A few students can share their project.  Class members can offer questions and comments, using the prompts below if needed.</p>
                    
                        <ul>
                            <li>I noticed you used...</li>
                            <li>It's interesting that you...</li>
                            <li>How did you?...</li>
                        </ul>
                    </li>
                </ol>

                <h3 class="title has-text-light">Curriculum Support and Independent Reference</h3>
                <p>Challenges can be used as references or teaching objects that we can point students to when they have particular question that might be holding up their progress.  For example, a student who already has learned how to control a sprite with the arrow keys might be interested in adding an animation.  The teacher could ask them to work through the <nuxt-link to="/challenges/walk">Walking Animation</nuxt-link> Challenge as a way to get help independently. This is a good place to note that the Walking Animation challenge doesn't teach you the whole process of incorporating key-input based movement with animation, but it does give the student something to work with independently, and a secondary challenge which is integrating it with their existing work.</p>

                <h3 class="title has-text-light">Curriculum Connections</h3>
                <p>Sometimes the focus of the work is on curriculum content that is separate from learning Scratch and programming.  For example, a classroom teacher may assign students to complete a Scratch project to illustrate content they have learned in a science or history unit.  It can be useful to have a reference and teaching object that students can use to help with the Scratch part.  For example, the  <nuxt-link to="/challenges/label-it">Label It!</nuxt-link> challenge provides a consistent way to learn to build an interactive illustration.  It could be helpful for a wide variety of projects.</p>

                <hr>
                <h2 id="standards" class="title has-text-light">Computer Science Concepts and Curriculum Standards</h2>

                <p>Broadly, we're hoping to demonstrate that ChallengeGalaxy aligns with the <a target="_blank" href="https://www.iste.org/standards/for-students">ISTE Standards for Students</a>.  In particular:</p>

                <ul>
                    <li>
                        <b>ISTE Standard 5: "Computational Thinker"<br></b>
                        <p><em>Students develop and employ strategies for understanding and solving problems in ways that leverage the power of technological methods to develop and test solutions.</em></p>
                        
                        <p>Challenges are structured so that students are encouraged to understand first the end goal, and then discover ways to make the end goal happen with the technological methods of computer programming.</p>
                    </li>
                </ul>

                <p>In more detail, we're mapping out the connections between solutions to challenges and concepts and competencies in the CSTA K-12 Computer Science Standards, the Massachusetts Digital Literacy &amp; Computer Science (DLCS) Standards, and the Next Generation Science Standards.</p>

                <nuxt-link class="button is-link" to="/standards-alignment">See the Standards Alignment</nuxt-link>
            </div>
            <div class="column is-one-fifth" style="padding-top:100px">
                <nuxt-link class="button is-link" to="/contact">Contact Us</nuxt-link>
            </div>
        </div>
    </section>
</template>

<script>

export default {
    transition: 'pagechange'
}
</script>

<style scoped>
h1.page-title {
    font-size: 2.4rem;
    margin-top: 20px;
    margin-bottom: 40px;
}
h2.title {
    margin-top:20px;
    margin-bottom:40px !important;
}
h3.subtitle {
    font-size: 1.4rem;
}
.column.menu {
    display: none;
    padding-top: 60px;
}
@media screen and (min-width: 1088px) {
    .column.menu {
        display: block;
        position: fixed;
    }
    .column.content { 
        margin-left: 25%;
    }
}
p {
    padding-bottom: 5px;
}
.menu-label {
    padding: 0;
}

#two-ways p {
    margin-top:-16px;
    margin-bottom:10px;
}

p img {
    margin:0 auto;
    max-width:460px;
}

.lesson > li {
    margin-top:40px;
}
</style>