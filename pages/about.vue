<template>
    <section class="container about-page-container">

        <div class="columns">
            <div class="column is-three-fifths is-offset-one-fifth has-text-light">
                
                <h1 class="title has-text-light">About ChallengeGalaxy</h1>

                <h2 class="subtitle has-text-light">Experimentation and Play</h2>
                <p>Fiddling, puzzling, playing and experimenting are at the core of learning. Progressive educational movements like constructivism, constructionism, “Maker Education,” “Hands on Learning.” are all connected by the notion that the best learning happens when people engage with materials, and build their own understanding through active inquiry and experimentation.  What are the core concepts of engineering? Try building a bridge out of drinking straws and marshmallows and you’ll probably arrive at a good portion of the answer.</p>
                <br>

                <h2 class="subtitle has-text-light">The Right Amount of Scaffolding</h2>
                <p>The big challenge for educators is how to manage the tension between the instinct to show someone how to do something and the harder task of laying out the pieces and engaging them in the task of figuring it out. Sometimes a student is stuck and could benefit from a bit of direction or information to keep moving forward.  Since we know there are certain things we want our students to learn, how do we devise assignments that allows them to develop their own questions and methods, but still help them arrive at the particular understandings that we have been tasked with “teaching”?  At the end of the day we may really need to know how to build a real bridge.</p>
                <br>
                
                <h2 class="subtitle has-text-light">A Flexible Platform</h2>
                <p>The goal of ChallengeGalaxy is to create a platform that allows for this flexibility - and provides encouragement for experimentation and the key information when it is needed.  We are working to give learners a place where they can puzzle through the key concepts of programming with optional clues and pointers which can give a hand up over a wall, solidify knowledge, confirm suspicions, or open paths to new inquiries.  Some people will want a lot of pointers, some will want a few, and some will want none.</p>

                <p>To learn more about how to get started with ChallengeGalaxy you can read <nuxt-link to="/how-it-works">our documentation</nuxt-link>.  Or, you can just <nuxt-link to="/challenges">Find a challenge</nuxt-link>, open up <a href="www.scratch.mit.edu">Scratch</a>, and start programming!</p>
                <br/>

                <h2 class="subtitle has-text-light">Who We Are</h2>
                <p>At the moment, ChallengeGalaxy is the creation of <a href="https://github.com/bacalj">Joe Bacal</a> and <a href="https://github.com/a-pasquale/">Andrew Pasquale</a>, in collaboration with <a href="https://holyokecodes.org">Holyoke Codes</a>.</p>

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

h1.title {
    margin-top:60px;
    margin-bottom:40px !important;
}
</style>