
export function jobsFetchDataSuccess(jobs) {
    return {
        type: 'JOBS_FETCH_DATA_SUCCESS',
        jobs
    };
}

export function jobsFetchSearchDataSuccess(searchJobs) {
    return {
        type: 'JOBS_FETCH_SEARCH_DATA_SUCCESS',
        searchJobs
    };
}

export function jobsFetchSearchData(url) {
    return (dispatch) => {

        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }

                return response;
            })
            .then((response) => response.json())
            .then((searchJobs) => dispatch(jobsFetchSearchDataSuccess(searchJobs)))
    };
}

export function jobsFetchData(url) {
    return (dispatch) => {

        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }

                return response;
            })
            .then((response) => response.json())
            .then((jobs) => dispatch(jobsFetchDataSuccess(jobs)))
    };
}