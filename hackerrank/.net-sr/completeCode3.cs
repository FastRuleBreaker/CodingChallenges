class Solution {

    // Complete the hackerCards function below.
    static List<int> hackerCards(List<int> collection, int d) {
      List<int> boughtCards = new List<int>();
      for(int i = 1; i<=d; i++){
        if(!collection.Contains(i)){
          boughtCards.Add(i);
          d = d - i;
        }
      }
      return boughtCards;
    }
    static void Main(string[] args) {