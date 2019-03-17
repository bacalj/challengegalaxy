export const state = () => ({
    levelSetTo: 1
})

export const mutations = {
    setLevel(state, sliderVal){
        console.log('tryit');
        state.levelSetTo = sliderVal;
    }
} 