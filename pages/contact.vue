<template>
    <section class="container about-page-container">

        <div class="columns">
            <div class="column is-three-fifths is-offset-one-fifth has-text-light">
                
                <h1 class="title has-text-light">Contact Us</h1>
                <h2 class="subtitle has-text-light">We'll respond!</h2>

                <form name="contact" netlify-honeypot="bot-field" data-netlify-recaptcha="true" method="POST" data-netlify="true">

                    <div class="hidden-from-humans">
                        <label><input name="bot-field" /></label>
                    </div>

                    <div class="field">
                        <label class="label">Name</label>
                        <div class="control">
                            <input class="input" name="name" type="text" placeholder="Your name">
                        </div>
                    </div>

                    <div class="field">
                        <label class="label">Email</label>
                        <div class="control has-icons-left has-icons-right">
                            <input class="input" name="email" type="email" placeholder="Email" value="">
                            <span class="icon is-small is-left">
                                <i class="fas fa-envelope"></i>
                            </span>
                        </div>
                    </div>

                    <div class="field">
                        <label class="label">Challenge</label>
                        <div class="select">
                            <select v-model="selected">
                                <option :value="placeholder" disabled>Does this relate to a specific challenge?</option>
                                <option v-for="(challenge, index) in challenges" :key="index" v-bind:value="challenge.title">
                                    {{ challenge.title }}
                                </option>
                            </select>
                        </div>
                    </div>

                    <div class="field">
                        <label class="label">Message</label>
                        <div class="control">
                            <textarea name="message" class="textarea" placeholder=""></textarea>
                        </div>
                    </div>

                    <div class="control">
                        <button type="submit" class="button is-link">Submit</button>
                    </div>

                </form>

                <h2 class="subtitle has-text-light">Connect on Social Media</h2>
                <p><a href="https://twitter.com/joe_bacal">https://twitter.com/joe_bacal</a></p>
                <p><a href="https://twitter.com/apasquale">https://twitter.com/apasquale</a></p>
            </div>

        </div>
    </section>
</template>

<script>
import { mapState } from 'vuex'
export default {
    computed: {
        ...mapState({
            challenges: state => state.challengeslist.published,
        }),
    },
    data: {
        selected: 'Does this related to a specific challenge?',
    },
    transition: 'pagechange'
}
</script>

<style scoped>

h1.title {
    margin-top:60px;
    margin-bottom:40px !important;
}

.field label {
    color:white;
}

.column {
    padding-left:20px;
    padding-right:20px;
}

.hidden-from-humans {
    position: absolute;
    left:-6000px;
}

.recaptcha-wrap {
    margin-bottom:10px;
}

h2 {
    margin-top:30px;
}

</style>