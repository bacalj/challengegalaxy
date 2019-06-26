export const state = () => {

}

export const getters = {
    gotChals: (state, getters) => (founds) => {
        return state.challengeslist.published.filter(obj => founds.includes(obj.id))
    }
}

export const mutations = {
    sortFilterRenderChals: ( state, pl ) => {
        const col = pl.colecto
        const foundChals = state.collections[col].challenges
        state.challengeslist.published = state.challengeslist.published
            .filter(obj => foundChals.includes(obj.id))
            .sort((a, b) => (a.title > b.title) ? 1 : -1);
    }
}