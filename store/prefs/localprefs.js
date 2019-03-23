export const state = () => ({
    //eventually get this from auth and db
    levelSetTo: 1,
    fallingStars: false
})

export const mutations = {
    setLevel(state, sliderVal){
        state.levelSetTo = sliderVal;
    }
} 