export const state = () => ({
    levelSetTo: 1
})

export const mutations = {
    setLevel(state, sliderVal){
        state.prefs.levelSetTo = sliderVal;
    }
} 