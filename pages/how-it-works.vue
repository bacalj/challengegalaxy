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
                        <li><a>In Your Classroom</a></li>
                        <li><a>F.A.Q.</a></li>
                        <li><a>Troubleshooting</a></li>
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

                <div class="column is-one-fifth" style="padding-top:100px">
                    <nuxt-link class="button is-link" to="/contact">Contact Us</nuxt-link>
                </div>
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
</style>