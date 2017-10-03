
export function jobs(state = [], action) {
    switch (action.type) {
        case 'FETCH_JOBS':
            return action.jobs;

        case 'FETCH_SKILL_SEARCH_DATA':
            return action.jobs;

        default:
            return state;
    }
}

export function searchHasErrored(state = false, action) {
    switch (action.type) {
        case 'SEARCH_HAS_ERRORED':
            return action.hasErrored;
        default:
            return state;
    }
}
export function searchIsLoading(state = false, action) {
    switch (action.type) {
        case 'SEARCH_IS_LOADING':
            return action.isLoading;
        default:
            return state;
    }
}
