export const state = () => {

}

export const getters = {
    
}

export const mutations = {
    sortFilterRenderChals( state, payload ){
        state.challengeslist.published = state.challengeslist.published.sort((a, b) => (a.title > b.title) ? 1 : -1);
    }
}