export const setState = (state,set,e) => {
    set({
        ...state,
        text:e.target.value
    })
}