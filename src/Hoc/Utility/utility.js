
const utilityObject = (utilityState, utilityAction) => {
    return{
        ...utilityState,
        ...utilityAction
    }
}

export default utilityObject