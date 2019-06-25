export const state = () => {

}

export const getters = {
    // sortedChallenges: (state) => {
    //     return state.challengeslist.published.sort((a, b) => (a.title > b.title) ? 1 : -1);
    // }
    sortedChallengesByTitle(state){
        state.challengeslist.published = state.challengeslist.published.sort((a, b) => (a.title > b.title) ? 1 : -1);
    }
}

export const mutations = {
    sortChallengesByTitle(state){
        state.challengeslist.published = state.challengeslist.published.sort((a, b) => (a.title > b.title) ? 1 : -1);
    },

    applyFilters(state, payload){
        const lvl = payload.level;
        const col = payload.collecto;
       // console.log(lvl, col);
        const foundChals = state.collections[col].challenges
        //console.log(foundChals);
        state.challengeslist.published = state.challengeslist.published.filter( chal => foundChals.includes(chal.id) );
    }
}