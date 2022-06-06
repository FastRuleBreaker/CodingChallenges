class SocialNetworkQueries {

    constructor({ fetchCurrentUser }) {
        this.fetchCurrentUser = fetchCurrentUser;
    }

    findPotentialLikes({ minimalScore } = {}) {
        return Promise.resolve({});
    }

}

export { SocialNetworkQueries };
