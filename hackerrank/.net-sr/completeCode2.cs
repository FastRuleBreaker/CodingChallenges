
    // Complete the GetEvenNumbers function below.
    static List<int> GetEvenNumbers(List<int> numbers, int amountOfEvenNumbersRequired)
    {
        return numbers.Where(number => number % 2 == 0).Take(amountOfEvenNumbersRequired).ToList();
    }