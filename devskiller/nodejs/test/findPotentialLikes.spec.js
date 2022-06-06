import { SocialNetworkQueries } from "../src/index";

const anyError = () => Error("any error");

const resolved = (value) => Promise.resolve(value);

const rejected = (error) => Promise.reject(error);

const includeAllMinimalScore = () => 0;

const aLittleBitAbove = (minimalScore) => minimalScore + 0.01;

const anyMinimalScore = 0.5;

describe("SocialNetworkQueries", () => {

    let friendsQueries;
    let fetchCurrentUser;

    beforeEach(() => {
        let mockedUserPromise;
        fetchCurrentUser = () => mockedUserPromise;
        fetchCurrentUser.willReturn = (userPromise) => {
            mockedUserPromise = userPromise;
        };
        friendsQueries = new SocialNetworkQueries({ fetchCurrentUser });
    });

    describe("potential book likes", () => {

        it("should find no potential likes if current user has no friends", async () => {
            // given
            const user = {
                likes: { books: [] },
                friends: [],
            };
            fetchCurrentUser.willReturn(resolved(user));

            // when
            const potentialLikes = await friendsQueries.findPotentialLikes({
                minimalScore: includeAllMinimalScore(),
            });

            // then
            expect(potentialLikes).toBeDefined();
            expect(potentialLikes.books.length).toEqual(0);
        });

        it("should find no potential likes if user's friends like no books", async () => {
            // given
            const user = {
                likes: { books: [] },
                friends: [{
                    id: "friend1",
                    likes: { books: [] },
                }],
            };
            fetchCurrentUser.willReturn(resolved(user));

            // when
            const potentialLikes = await friendsQueries.findPotentialLikes({
                minimalScore: includeAllMinimalScore(),
            });

            // then
            expect(potentialLikes).toBeDefined();
            expect(potentialLikes.books.length).toEqual(0);
        });

        it("potential likes should include books liked by friends", async () => {
            // given
            const user = {
                likes: { books: [] },
                friends: [{
                    id: "friend1",
                    likes: { books: ["Book1"] },
                }, {
                    id: "friend2",
                    likes: { books: ["Book2"] },
                }],
            };
            fetchCurrentUser.willReturn(resolved(user));

            // when
            const potentialLikes = await friendsQueries.findPotentialLikes({
                minimalScore: includeAllMinimalScore(),
            });

            // then
            expect(potentialLikes).toBeDefined();
            expect(potentialLikes.books.length).toEqual(2);
            expect(potentialLikes.books).toContain("Book1");
            expect(potentialLikes.books).toContain("Book2");
        });

        it("potential likes should include only books liked by given ratio of friends (score)", async () => {
            // given
            const user = {
                likes: { books: [] },
                friends: [{
                    id: "friend1",
                    likes: {
                        books: ["Book1"],
                    },
                }, {
                    id: "friend2",
                    likes: {
                        books: ["Book1", "Book2"],
                    },
                }, {
                    id: "friend3",
                    likes: {
                        books: ["Book1", "Book2", "Book3"],
                    },
                }],
            };
            fetchCurrentUser.willReturn(resolved(user));

            // when
            const potentialLikes = await friendsQueries.findPotentialLikes({
                minimalScore: aLittleBitAbove(2 / 3),
            });

            // then
            expect(potentialLikes).toBeDefined();
            expect(potentialLikes.books.length).toEqual(1);
            expect(potentialLikes.books).toContain("Book1");
            expect(potentialLikes.books).not.toContain("Book2");
            expect(potentialLikes.books).not.toContain("Book3");
        });

        it("potential likes should not include books already liked by user", async () => {
            // given
            const user = {
                likes: { books: ["Book2"] },
                friends: [{
                    id: "friend1",
                    likes: { books: ["Book1"] },
                }, {
                    id: "friend2",
                    likes: { books: ["Book2"] },
                }],
            };
            fetchCurrentUser.willReturn(resolved(user));

            // when
            const potentialLikes = await friendsQueries.findPotentialLikes({
                minimalScore: includeAllMinimalScore(),
            });

            // then
            expect(potentialLikes).toBeDefined();
            expect(potentialLikes.books.length).toEqual(1);
            expect(potentialLikes.books).toContain("Book1");
            expect(potentialLikes.books).not.toContain("Book2");
        });

        it("potential likes should be ordered by popularity among friends (score)", async () => {
            // given
            const user = {
                likes: { books: [] },
                friends: [{
                    id: "friend1",
                    likes: {
                        books: [
                            "A-Like Title: Book Liked By 1 Friend",
                            "B-Like Title: Book Liked By 3 Friends",
                            "C-Like Title: Book Liked By 2 Friends",
                        ],
                    },
                }, {
                    id: "friend2",
                    likes: {
                        books: [
                            "B-Like Title: Book Liked By 3 Friends",
                            "C-Like Title: Book Liked By 2 Friends",
                        ],
                    },
                }, {
                    id: "friend3",
                    likes: {
                        books: [
                            "B-Like Title: Book Liked By 3 Friends",
                        ],
                    },
                }],
            };
            fetchCurrentUser.willReturn(resolved(user));

            // when
            const potentialLikes = await friendsQueries.findPotentialLikes({
                minimalScore: includeAllMinimalScore(),
            });

            // then
            expect(potentialLikes).toBeDefined();
            expect(potentialLikes.books).toEqual([
                "B-Like Title: Book Liked By 3 Friends",
                "C-Like Title: Book Liked By 2 Friends",
                "A-Like Title: Book Liked By 1 Friend",
            ]);
        });

        it("potential likes of same popularity (score) should be ordered by title", async () => {
            // given
            const user = {
                likes: { books: [] },
                friends: [{
                    id: "friend1",
                    likes: {
                        books: [
                            "C-Like Title",
                            "A-Like Title",
                            "B-Like Title",
                        ],
                    },
                }, {
                    id: "friend2",
                    likes: {
                        books: [
                            "B-Like Title",
                            "A-Like Title",
                            "C-Like Title",
                        ],
                    },
                }],
            };
            fetchCurrentUser.willReturn(resolved(user));

            // when
            const potentialLikes = await friendsQueries.findPotentialLikes({
                minimalScore: includeAllMinimalScore(),
            });

            // then
            expect(potentialLikes).toBeDefined();
            expect(potentialLikes.books).toEqual([
                "A-Like Title",
                "B-Like Title",
                "C-Like Title",
            ]);
        });

    });

    describe("fetch failure", () => {

        it("should return no matches if user fetch failed", async () => {
            // given
            fetchCurrentUser.willReturn(rejected(anyError()));

            // when
            const potentialLikes = await friendsQueries.findPotentialLikes({
                minimalScore: anyMinimalScore,
            });

            // then
            expect(potentialLikes).toEqual({
                books: [],
            });
        });

    });

    describe("invalid data", () => {

        it("should find no potential likes if current user has no 'friends' field", async () => {
            // given
            const user = {
                likes: { books: [] },
                // no 'friends' field
            };
            fetchCurrentUser.willReturn(resolved(user));

            // when
            const potentialLikes = await friendsQueries.findPotentialLikes({
                minimalScore: includeAllMinimalScore(),
            });

            // then
            expect(potentialLikes).toEqual({
                books: [],
            });
        });

    });

});