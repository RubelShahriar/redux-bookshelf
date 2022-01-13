export function addToReadingList(payload) {
    return {
        type: "ADD_TO_READING_LIST",
        payload
    }
}

export function removeBookFromList(payload) {
    return {
        type: "REMOVE_BOOK_FROM_LIST",
        payload
    }
}

export function addToFinishedList(payload) {
    return {
        type: "ADD_TO_FINISHED_LIST",
        payload
    }
}