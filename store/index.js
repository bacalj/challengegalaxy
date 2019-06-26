export const state = () => {

}

export const getters = {
    getChallenges: (state, getters) => (founds) => {
        return state.challengeslist.published
            .filter(obj => founds.includes(obj.id))
            .sort((a, b) => (a.title > b.title) ? 1 : -1);
    }
}

export const mutations = {

}