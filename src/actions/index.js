
// fetch job list on pageload
// fetch joblist when 'JobSearch' title is clicked.
export function fetchJobsSuccess(jobs) {
    return {
        type: 'FETCH_JOBS',
        jobs
    };
}

export function fetchJobs(url) {
    return (dispatch) => {

        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }

                return response;
            })
            .then((response) => response.json())
            .then((jobs) => dispatch(fetchJobsSuccess(jobs)))
    };
}

// fetch jobs on search input

export function fetchJobSearchDataSuccess(jobs) {
    return {
        type: 'FETCH_JOB_SEARCH_DATA',
        jobs
    };
}

export function fetchJobsSearchData(url) {
    return (dispatch) => {

        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }

                return response;
            })
            .then((response) => response.json())
            .then((jobs) => dispatch(fetchJobSearchDataSuccess(jobs)))
    };
}


// fetch skills from search input

export function fetchSkillsSearchDataSuccess(jobs) {
    return {
        type: 'FETCH_SKILL_SEARCH_DATA',
        jobs
    };
}

export function fetchSkillsSearchData(url) {
    return (dispatch) => {

        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }

                return response;
            })
            .then((response) => response.json())
            .then((jobs) => dispatch(fetchSkillsSearchDataSuccess(jobs)))
    };
}