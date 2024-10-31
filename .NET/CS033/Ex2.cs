// using System.Runtime.InteropServices;
// using CS033;

// namespace CS033{

//     interface IClassB{
//         public void ActionB();

//     }

//     interface IClassC{
//         public void ActionC();
//     }


//     class ClassC : IClassC{

//             public void ActionC() => Console.WriteLine("Action in Class C");
//     }
   
//     class ClassB :IClassB{
        
//         IClassC c_dependency;
//         public ClassB(IClassC classC ) => c_dependency = classC;
//         public void ActionB(){
//             Console.WriteLine("Action in Class B");
//             c_dependency.ActionC();
         
            
//         }
//     }


//      class ClassA{

//         IClassB b_dependency;
//         public ClassA(IClassB classB ) => b_dependency = classB;
//         public void ActionA(){
//             Console.WriteLine("Action in Class A");
//             b_dependency.ActionB();

            
//         }
//     }

    

//     class Program
//     {
//         static void Main(string[] args)
//         {
//             IClassC objectC =  new  ClassC();
//             IClassB objectB =  new  ClassB(objectC);
//             ClassA objectA =  new  ClassA(objectB);

//             objectA.ActionA();
//         }
//     }


// }
