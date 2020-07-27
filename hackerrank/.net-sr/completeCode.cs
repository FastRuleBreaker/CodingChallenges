using System;

namespace Solution
{
    class Student
    {
        private string name = null;
        
        /*
         * Complete the missing code
        public string Name { get { return name; } set { name = value; } }
         */
    }
    
    class Solution
    {
        static void Main(string[] args)
        {
            Student student = new Student();
            student.Name = "Julia";
            
            Console.WriteLine(student.Name);
        }
    }
}