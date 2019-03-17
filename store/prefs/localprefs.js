export const state = () => ({
    //eventually get this from auth and db
    levelSetTo: 1
})

export const mutations = {
    setLevel(state, sliderVal){
        console.log('tryit');
        state.levelSetTo = sliderVal;
    }
} 