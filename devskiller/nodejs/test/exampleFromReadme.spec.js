import { SocialNetworkQueries } from "../src/index";

describe('SocialNetworkQueries', () => {
  describe("example from README", () => {

    it("should find potential likes", async () => {
      // given
      const user = {
        id: "mrouk3",
        likes: {
          books: ["Moby Dick", "Ulysses"],
        },
        friends: [{
          id: "YazL",
          likes: {
            books: ["Ulysses", "War and Peace"],
          },
        }, {
          id: "queen9",
          likes: {
            books: ["The Great Gatsby", "Ulysses"],
          },
        }, {
          id: "joyJoy",
          likes: {
            books: ["Don Quixote", "The Great Gatsby"],
          },
        }, {
          id: "0sin5k1",
          likes: {
            books: ["The Great Gatsby", "War and Peace"],
          },
        }, {
          id: "mariP",
          likes: {
            books: ["Don Quixote", "Hamlet", "Ulysses"],
          },
        }],
      };

      // when
      const potentialLikes = await new SocialNetworkQueries({
        fetchCurrentUser: () => Promise.resolve(user),
      }).findPotentialLikes({ minimalScore: 0.3 });

      // then
      expect(potentialLikes).toEqual({
        books: [
          "The Great Gatsby",
          "Don Quixote",
          "War and Peace",
        ],
      });
    });

  });
});
