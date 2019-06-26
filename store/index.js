export const state = () => {

}

export const getters = {
    getChallenges: (state, getters) => (founds) => {
        return state.challengeslist.published.filter(obj => founds.includes(obj.id))
    }
}

export const mutations = {
    sortChallengesByTitle(state){
        state.challengeslist.published = state.challengeslist.published.sort((a, b) => (a.title > b.title) ? 1 : -1);
    },
    sortChallengesByTitleReversed(state){
        state.challengeslist.published = state.challengeslist.published.sort((a, b) => (a.title < b.title) ? 1 : -1);
    },
    sortChallengesByNumSteps(state){
        state.challengeslist.published = state.challengeslist.published.sort((a,b) => (state.en[a.id].steps.length > state.en[b.id].steps.length) ? 1 : -1);
    },
    sortChallengesByNumStepsReversed(state){
        state.challengeslist.published = state.challengeslist.published.sort((a,b) => (state.en[a.id].steps.length < state.en[b.id].steps.length) ? 1 : -1);
    }
}