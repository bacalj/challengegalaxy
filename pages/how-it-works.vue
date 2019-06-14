<template>
    <section class="container getting-started-page-container">

        <div class="columns">
            <div class="column menu is-one-fifth has-text-light">
                <aside>
                    <p class="menu-label has-text-light">
                        Getting Started
                    </p>
                    <ul class="menu-list">
                        <li><a v-scroll-to="{ el: '#chrome', offset: -100 }">Chrome</a></li>
                        <li><a v-scroll-to="{ el: '#other-browsers', offset: -100 }">Other Browsers</a></li>
                    </ul>
                    <p class="menu-label has-text-light">
                        Using Challenge Galaxy
                    </p>
                    <ul class="menu-list">
                        <li><a>Getting Clues</a></li>
                        <li><a>Locked Clues</a></li>
                        <li><a>Sharing Projects</a></li>
                    </ul>
                    <p class="menu-label has-text-light">
                        Teachers
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
                <h3 id="chrome" class="subtitle has-text-light">Are you using Chrome?</h3>
                <p>Our Chrome extension lets you see the challenges right inside Scratch.</p>
                <p>First, add the Challenge Galaxy extension to your Chrome browser. The button below will bring you to the Chrome Web Store.</p>
                <p><a class="button is-primary" href="https://chrome.google.com/webstore/detail/cbidhbafbppopanlhekfpjjaicagjbci" target="_blank">Add Chrome Extension</a></p>
                <p><img src="/gifs/add-to-chrome.gif" alt="Add to Chrome"/></p>
                <p>Next, open Scratch. The button below will open it in a new browser window for you.</p>
                <p><a class="button is-primary" href="https://scratch.mit.edu" target="_blank">Open Scratch</a></p>
                <p>Click the Challenge Galaxy button in your browser toolbar to open the list of challenges and pick your challenge!</p>
                <p><img src="/gifs/chrome-choose-a-challenge.gif" alt="Choose a challenge"/></p>
                <p>The challenge you choose will open right inside Scratch so you can build your project and look at the clues at the same time.</p>
                <p><img src="/gifs/embedded-cg.gif" alt="Challenge Galaxy embedded in Scratch website"/></p>
                <p>Have fun!</p>

                <h3 id="other-browsers" class="subtitle has-text-light">Other Browsers</h3>
                <p>Challenge Galaxy works great in other web browsers too!</p>
                <p>If you have a display that is wide enough, we recommend opening two windows side-by-side like this:</p>
                <p><img src="/pngs/cgandscratch.png" alt="Challenge Galaxy and Scratch side-by-side"/></p>
                <p>If you're using a display that doesn't easily fit both windows, try opening Challenge Galaxy in one window and Scratch in another and switch back and forth as needed. Some people prefer switch between browser tabs and others prefer having different windows. Maybe you're more comfortable one way or the other?</p>
                <p>Another way that can work really well if you have a tablet or a phone is to open Challenge Galaxy on your mobile device and use Scratch on your computer.</p>
                <p>Have fun!</p>

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
</style>