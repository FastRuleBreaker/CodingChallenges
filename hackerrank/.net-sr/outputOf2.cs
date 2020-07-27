using System;

namespace Solution
{
    class Solution
    {
        static void DoTask(ref int i)
        {
            i = 6;
        }

        static void Main(string[] args)
        {
            int i = 5;
            DoTask(ref i);
            
            Console.WriteLine(i);
        }
    }
}