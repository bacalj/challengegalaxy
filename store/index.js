export const state = () => {

}

export const getters = {
    
}

export const mutations = {
    sortChallengesByTitle(state){
        state.challengeslist.published = state.challengeslist.published.sort((a, b) => (a.title > b.title) ? 1 : -1);
    },

    applyFilters(state, payload){
        console.log(payload.level);
        console.log(payload.collecto);
        console.log(state.challengeslist.published);
        console.log(state.collections.collectionslist);
    }
}