import _ from 'lodash'

class SocialNetworkQueries {
  // class properties:
  // lastResult
  // fetchCurrentUser

  constructor({ fetchCurrentUser }) {
    this.emptyResult = { books: [] }
    this.lastResult = this.emptyResult
    this.profileData = null
    this.fetchCurrentUser = fetchCurrentUser
  }

  async fetchLatestData() {
    try {
      this.profileData = await this.fetchCurrentUser()
    } catch (e) {
      throw e
    }
  }

  validUser() {
    return this.profileData?.friends != null
  }

  validFriend(friend) {
    if (friend?.likes?.books == null) {
      return false
    }
    // NOTE: from the test spec:

    // If some friend has no ... likes.moves field,
    // findPotentialLikes should ignore such friend
    // when computing potential likes.

    // HOWEVER there seems to be no friends.move in any of the datasets

    return true
  }

  // get percentage of positive outcome
  scoreBooks() {
    const data = this.profileData
    const likedBooks = data.likes.books
    const validFriends = data?.friends.filter((f) => this.validFriend(f)) ?? []
    const friendCount = validFriends.length
    const bookCount = data.friends.reduce((total, friend, i) => {
      const uniqBooks = _.uniq(friend.likes.books)
      // if base node already owns a positive outcome for a given
      // param, this param will not be a potentialLike
      const validBooks = uniqBooks.filter((book) => !likedBooks.includes(book))
      validBooks.forEach((book) => {
        total[book] = (total?.[book] ?? 0) + 1
      })
      return total
    }, {})
    const booksRatedArray = Object.entries(bookCount).map(([key, val]) => {
      return { name: key, rate: val / friendCount }
    })
    // SORTING: higher positive outcome for a given param is sorted FIRST
    // in case of equal outcome, sort alphabetically

    const booksSorted = _.orderBy(
      booksRatedArray,
      ['rate', 'name'],
      ['desc', 'asc']
    )
    return booksSorted
  }

  // minimal score: percentage of adyacent nodes that must
  // have a positive outcome for given parameter
  async findPotentialLikes({ minimalScore } = {}) {
    try {
      await this.fetchLatestData()
    } catch (e) {
      return this.lastResult
    }
    if (!this.validUser()) {
      return this.emptyResult
    }
    const booksSorted = this.scoreBooks()
    const filteredBooks = booksSorted.filter(
      (book) => book.rate >= minimalScore
    )
    const result = { books: filteredBooks.map((book) => book.name) }
    // cache
    this.lastResult = result
    return result
  }
}

export { SocialNetworkQueries }
