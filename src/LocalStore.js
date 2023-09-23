
const getLocalStore = () => {
    const localData = localStorage.getItem('localItem')
    if (localData) {
        return JSON.parse(localData)
    }
    else {
        return []
    }
}



export default getLocalStore;