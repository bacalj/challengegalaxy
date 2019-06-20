<template>
    <section class="main container standards-alignment-page-container">
        <div class="columns">
            <div class="column menu is-one-fifth has-text-light">
                <aside>
                    <p class="menu-label has-text-light">
                        CSTA Standards
                    </p>
                    <ul class="menu-list">
                        <li><a v-scroll-to="{ el: '#csta-ap', offset: -75 }">Algorithms &amp; Programming</a></li>
                    </ul>
                    <p class="menu-label has-text-light">
                        Digital Literacy &amp; Computer Science
                    </p>
                    <ul class="menu-list">
                        <li><a v-scroll-to="{ el: '#digital-tools', offset: -75 }">Digital Tools &amp; Collaboration</a></li>
                        <li><a v-scroll-to="{ el: '#computational-thinking', offset: -75 }">Computational Thinking</a></li>
                    </ul>
                    <p class="menu-label has-text-light">
                        Next Generation Science Standards
                    </p>
                    <ul class="menu-list">
                        <li><a v-scroll-to="{ el: '#ngss', offset: -75 }">From Molecules to Organisms</a></li>
                        <li><a v-scroll-to="{ el: '#ngss', offset: -75 }">Motion &amp; Stability</a></li>
                    </ul>
                </aside>
            </div>
            <div class="column content is-three-fifths is-offset-one-quarter has-text-light">
                
                <h1 class="title is-1 has-text-light">Standards Alignment</h1>

                <section class="section">
                    <h2 class="title is-2">CSTA Standards</h2>
                </section>
                <section id="csta-ap" class="section">
                    <h3 class="title is-3">Algorithms &amp; Programming</h3>
                    <h4 class="title is-4">Grades K - 2</h4>
                    <div class="scrollable">
                    <table class="table is-fullwidth is-narrow">
                        <thead>
                            <tr>
                                <th class="challenge-title">Challenge</th>
                                <a-standardHeader v-for="standard in standards['CSTA-K-2-AP']"
                                    :key=standard.key
                                    :abbr=standard.id
                                    :link=standard.url  
                                    :description=standard.description>
                                </a-standardHeader>
                            </tr>
                        </thead>
                        <tbody>
                            <a-standard standard="CSTA-K-2-AP" v-for="challenge in getChallenges('CSTA-K-2-AP')"
                                :key=challenge.key
                                :title=challenge.title
                                :id=challenge.id
                                :challengeStandards=challenge.standards>
                            </a-standard>
                        </tbody>
                    </table>
                    </div>
                    <h4 class="title is-4">Grades 3 - 5</h4>
                    <div class="scrollable">
                        <table class="table is-fullwidth is-narrow">
                            <thead>
                                <tr>
                                    <th class="challenge-title">Challenge</th>
                                    <a-standardHeader v-for="standard in standards['CSTA-3-5-AP']"
                                        :key=standard.key
                                        :abbr=standard.id
                                        :link=standard.url  
                                        :description=standard.description>
                                    </a-standardHeader>
                                </tr>
                            </thead>
                            <tbody>
                                <a-standard standard="CSTA-3-5-AP" v-for="challenge in getChallenges('CSTA-3-5-AP')"
                                    :key=challenge.key
                                    :title=challenge.title
                                    :id=challenge.id
                                    :challengeStandards=challenge.standards>
                                </a-standard>
                            </tbody>
                        </table>
                    </div>
                    <h4 class="title is-4">Grades 6 - 8</h4>
                    <div class="scrollable">
                        <table class="table is-fullwidth is-narrow">
                            <thead>
                                <tr>
                                    <th class="challenge-title">Challenge</th>
                                    <a-standardHeader v-for="standard in standards['CSTA-6-8-AP']"
                                        :key=standard.key
                                        :abbr=standard.id
                                        :link=standard.url  
                                        :description=standard.description>
                                    </a-standardHeader>
                                </tr>
                            </thead>
                            <tbody>
                                <a-standard standard="CSTA-6-8-AP" v-for="challenge in getChallenges('CSTA-6-8-AP')"
                                    :key=challenge.key
                                    :title=challenge.title
                                    :id=challenge.id
                                    :challengeStandards=challenge.standards>
                                </a-standard>
                            </tbody>
                        </table>
                    </div>
                </section>

                <section id="digital-tools" class="section">
                    <h2 class="title is-2">Digital Literacy &amp; Computer Science</h2>
                </section>
                <section class="section">
                    <h3 class="title is-3">Digital Tools and Collaboration</h3>
                    <h4 class="title is-4">Grades K-2</h4>
                    <table class="table is-fullwidth">
                        <thead>
                            <tr class="titles">
                                <th></th>
                                <a-standardHeaderTitle v-for="standard in standards['DLCS-K-2-DTC']"
                                    :key=standard.key
                                    :title=standard.title>
                                </a-standardHeaderTitle>
                            </tr>
                            <tr>
                                <th class="challenge-title">Challenge</th>
                                <a-standardHeader v-for="standard in standards['DLCS-K-2-DTC']"
                                    :key=standard.key
                                    :abbr=standard.id
                                    :link=standard.url  
                                    :description=standard.description>
                                </a-standardHeader>
                            </tr>
                        </thead>
                        <tbody>
                            <a-standard standard="DLCS-K-2-DTC" v-for="challenge in getChallenges('DLCS-K-2-DTC')"
                                :key=challenge.key
                                :title=challenge.title
                                :id=challenge.id
                                :challengeStandards=challenge.standards>
                            </a-standard>
                        </tbody>
                    </table>
                    <h4 class="title is-4">Grades 3 - 5</h4>
                    <table class="table is-fullwidth">
                        <thead>
                            <tr class="titles">
                                <th></th>
                                <a-standardHeaderTitle v-for="standard in standards['DLCS-3-5-DTC']"
                                    :key=standard.key
                                    :title=standard.title>
                                </a-standardHeaderTitle>
                            </tr>
                            <tr>
                                <th class="challenge-title">Challenge</th>
                                <a-standardHeader v-for="standard in standards['DLCS-3-5-DTC']"
                                    :key=standard.key
                                    :abbr=standard.id
                                    :link=standard.url  
                                    :description=standard.description>
                                </a-standardHeader>
                            </tr>
                        </thead>
                        <tbody>
                            <a-standard standard="DLCS-3-5-DTC" v-for="challenge in getChallenges('DLCS-3-5-DTC')"
                                :key=challenge.key
                                :title=challenge.title
                                :id=challenge.id
                                :challengeStandards=challenge.standards>
                            </a-standard>
                        </tbody>
                    </table>
                    <h4 class="title is-4">Grades 6 - 8</h4>
                    <table class="table is-fullwidth">
                        <thead>
                            <tr class="titles">
                                <th></th>
                                <a-standardHeaderTitle v-for="standard in standards['DLCS-6-8-DTC']"
                                    :key=standard.key
                                    :title=standard.title>
                                </a-standardHeaderTitle>
                            </tr>
                            <tr>
                                <th class="challenge-title">Challenge</th>
                                <a-standardHeader v-for="standard in standards['DLCS-6-8-DTC']"
                                    :key=standard.key
                                    :abbr=standard.id
                                    :link=standard.url  
                                    :description=standard.description>
                                </a-standardHeader>
                            </tr>
                        </thead>
                        <tbody>
                            <a-standard standard="DLCS-6-8-DTC" v-for="challenge in getChallenges('DLCS-6-8-DTC')"
                                :key=challenge.key
                                :title=challenge.title
                                :id=challenge.id
                                :challengeStandards=challenge.standards>
                            </a-standard>
                        </tbody>
                    </table>
                </section>

                <section id="computational-thinking" class="section">
                    <h3 class="title is-3">Computational Thinking</h3>
                    <h4 class="title is-4">Grades K - 2</h4>
                    <table class="table is-fullwidth">
                        <thead>
                            <tr class="titles">
                                <th></th>
                                <a-standardHeaderTitle v-for="standard in standards['DLCS-K-2-CT']"
                                    :key=standard.key
                                    :title=standard.title>
                                </a-standardHeaderTitle>
                            </tr>
                            <tr>
                                <th class="challenge-title">Challenge</th>
                                <a-standardHeader v-for="standard in standards['DLCS-K-2-CT']"
                                    :key=standard.key
                                    :abbr=standard.id
                                    :link=standard.url  
                                    :description=standard.description>
                                </a-standardHeader>
                            </tr>
                        </thead>
                        <tbody>
                            <a-standard standard="DLCS-K-2-CT" v-for="challenge in getChallenges('DLCS-K-2-CT')"
                                :key=challenge.key
                                :title=challenge.title
                                :id=challenge.id
                                :challengeStandards=challenge.standards>
                            </a-standard>
                        </tbody>
                    </table>
                    <h4 class="title is-4">Grades 3 - 5</h4>
                    <table class="table">
                        <thead>
                            <tr class="titles">
                                <th></th>
                                <a-standardHeaderTitle v-for="standard in standards['DLCS-3-5-CT']"
                                    :key=standard.key
                                    :title=standard.title>
                                </a-standardHeaderTitle>
                            </tr>
                            <tr>
                                <th class="challenge-title">Challenge</th>
                                <a-standardHeader v-for="standard in standards['DLCS-3-5-CT']"
                                    :key=standard.key
                                    :abbr=standard.id
                                    :link=standard.url  
                                    :description=standard.description>
                                </a-standardHeader>
                            </tr>
                        </thead>
                        <tbody>
                            <a-standard standard="DLCS-3-5-CT" v-for="challenge in getChallenges('DLCS-3-5-CT')"
                                :key=challenge.key
                                :title=challenge.title
                                :id=challenge.id
                                :challengeStandards=challenge.standards>
                            </a-standard>
                        </tbody>
                    </table>
                    <h4 class="title is-4">Grades 6 - 8</h4>
                    <table class="table">
                        <thead>
                            <tr class="titles">
                                <th></th>
                                <a-standardHeaderTitle v-for="standard in standards['DLCS-6-8-CT']"
                                    :key=standard.key
                                    :title=standard.title>
                                </a-standardHeaderTitle>
                            </tr>
                            <tr>
                                <th class="challenge-title">Challenge</th>
                                <a-standardHeader v-for="standard in standards['DLCS-6-8-CT']"
                                    :key=standard.key
                                    :abbr=standard.id
                                    :link=standard.url  
                                    :description=standard.description>
                                </a-standardHeader>
                            </tr>
                        </thead>
                        <tbody>
                            <a-standard standard="DLCS-6-8-CT" v-for="challenge in getChallenges('DLCS-6-8-CT')"
                                :key=challenge.key
                                :title=challenge.title
                                :id=challenge.id
                                :challengeStandards=challenge.standards>
                            </a-standard>
                        </tbody>
                    </table>
                </section>

                <section id="ngss" class="section is-medium">
                    <h2 class="title is-2">Next Generation Science Standards</h2>
                    <table class="table">
                        <thead>
                            <tr class="titles">
                                <th></th>
                                <a-standardHeaderTitle v-for="standard in standards['NGSS']"
                                    :key=standard.key
                                    :title=standard.title>
                                </a-standardHeaderTitle>
                            </tr>
                            <tr>
                                <th class="challenge-title">Challenge</th>
                                <a-standardHeader v-for="standard in standards['NGSS']"
                                    :key=standard.key
                                    :abbr=standard.id
                                    :link=standard.url  
                                    :description=standard.description>
                                </a-standardHeader>
                            </tr>
                        </thead>
                        <tbody>
                            <a-standard standard="NGSS" v-for="challenge in getChallenges('NGSS')"
                                :key=challenge.key
                                :title=challenge.title
                                :id=challenge.id
                                :challengeStandards=challenge.standards>
                            </a-standard>
                        </tbody>
                    </table>
                </section>
            </div>
        </div>
    </section>
</template>

<script>
import AStandard from '~/components/AStandard.vue'
import AStandardHeader from '~/components/AStandardHeader.vue'
import AStandardHeaderTitle from '~/components/AStandardHeaderTitle.vue'

export default {
    components:{
        AStandard,
        AStandardHeader,
        AStandardHeaderTitle
    },
    computed: {
        challenges() {
            return this.$store.state.en
        },
        standards(){
            return this.$store.state.standards
        },
        NGSSChallenges(){
            let challenges = []
            const keys = Object.keys(this.challenges)
            keys.filter( (key) => {
                return this.challenges[key].hasOwnProperty('standards') && this.challenges[key].standards.hasOwnProperty('NGSS')
            }).map( (key) => {
                challenges.push(this.challenges[key])
            })
            return challenges
        },
    },
    methods: {
        getChallenges(standard) {
            let challenges = []
            const keys = Object.keys(this.challenges)
            keys.filter( (key) => {
                return this.challenges[key].hasOwnProperty('standards') && this.challenges[key].standards.hasOwnProperty(standard)
            }).map( (key) => {
                challenges.push(this.challenges[key])
            })
            return challenges
        }
    }
}
</script>

<style lang="scss" scoped>

h1.title {
    margin-top:60px;
    margin-bottom:40px !important;
}
.title {
    color: white;
}
h2 {
    font-size: 1.6rem;
    margin-bottom: 0px;
}
h3 {
    margin-top: 0px;
}
h4 {
    margin-top: 40px;
}
.column {
    padding-left:20px;
    padding-right:20px;
}
.section {
    padding-left: 0px;
    padding-right: 0px;
}
.table {
    th {     
        text-align: center;
        vertical-align: middle;
    }
    .titles, .challenge-title {
        background-color: #363636;
    }
    .titles th:first-of-type {
        border: 0;
    }
    .challenge-title {
        border-right: 2px solid #dbdbdb;
        color: white;
        text-align: left;
    }
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
.scrollable {
     overflow: scroll hidden; 
}
#csta-ap table::-webkit-scrollbar {
  -webkit-appearance: none;
  width: 7px;
}
#csta-ap table::-webkit-scrollbar-thumb {
  border-radius: 4px;
  background-color: rgba(0, 0, 0, .5);
  -webkit-box-shadow: 0 0 1px rgba(255, 255, 255, .5);
}
</style>