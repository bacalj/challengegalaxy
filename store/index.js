export const state = () => {

}

export const getters = {
    
}

export const mutations = {
    sortChallengesByTitle(state){
        state.challengeslist.published = state.challengeslist.published.sort((a, b) => (a.title > b.title) ? 1 : -1);
    },

    applyFilters(state, levelFilter, collectFilter){
        console.log(levelFilter);
        console.log(collectFilter);
        console.log(state.challengeslist.published);
        console.log(state.collections.collectionslist);
    }
}