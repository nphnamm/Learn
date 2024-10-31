// using System.Runtime.InteropServices;
// using CS033;
// using Microsoft.Extensions.DependencyInjection;

// namespace CS033{

//     class  ClassC1: IClassC 
//     {
//      public  ClassC1 ()  => Console.WriteLine ( "ClassC1 is created" );
//      public  void  ActionC () 
//     {
//         Console.WriteLine( "Action in C1" );
//     }
//     }

//     class  ClassB1  :  IClassB 
//     {
//     IClassC c_dependency;
//      public  ClassB1 ( IClassC classc ) 
//     {
//         c_dependency = classc;
//         Console.WriteLine( "ClassB1 is created" );
//     }
//      public  void  ActionB () 
//     {
//         Console.WriteLine( "Action in B1" );
//         c_dependency.ActionC();
//     }
//     }
//     interface  IClassB  {
//      public  void  ActionB () ;
//     }
//     interface  IClassC  {
//      public  void  ActionC () ;
//     }

//     class  ClassC  :  IClassC  {
//      public  ClassC ()  => Console.WriteLine ( "ClassC is created" );
//      public  void  ActionC ()  => Console.WriteLine( "Action in ClassC" );
//     }

//     class  ClassB  :  IClassB  {
//     IClassC c_dependency;
//      public  ClassB ( IClassC classc ) 
//     {
//         c_dependency = classc;
//         Console.WriteLine( "ClassB is created" );
//     }
//      public  void  ActionB () 
//     {
//         Console.WriteLine( "Action in ClassB" );
//         c_dependency.ActionC();
//     }
//     }


//     class  ClassA  {
//     IClassB b_dependency;
//      public  ClassA ( IClassB classb ) 
//     {
//         b_dependency = classb;
//         Console.WriteLine( "ClassA is created" );
//     }
//      public  void  ActionA () 
//     {
//         Console.WriteLine( "Action in ClassA" );
//         b_dependency.ActionB();
//     }
//     }


//     class Horn{

//         int level = 0;
//         public Horn(int level) => this.level = level;

//         public void Beep() => Console.WriteLine("Beep -Beep - Beep...");


//     }
//     class Car{

//         public Horn horn {set;get;}
//         public Car(Horn _horn) => horn =_horn;
//         public void Beep(){
            
//             horn.Beep();
//         }
//     }
//     class Program
//     {
//         static void Main(string[] args)
//         {
//             // IClassC objectC =  new  ClassC1();             // new ClassC(); 
//             // IClassB objectB =  new  ClassB1(objectC);      // new ClassB(); 
//             // ClassA objectA =  new  ClassA(objectB);
//             // objectA.ActionA();

//             // Horn horn = new Horn(7);
//             // Car car = new Car(horn);

//             // car.horn = horn;
//             // car.Beep();
//             var services = new ServiceCollection();

//             //IClass, ClassC, ClassC1

//             // services.AddTransient<IClassC,ClassC>();
//             services.AddScoped<IClassC,ClassC>();
            

//             var provider = services.BuildServiceProvider();
//             //var a = provider.GetService<NameService>();
            
//             //var classc = provider.GetService<IClassC>();
//             for(int i =0;i<5;i++){
//                 IClassC c = provider.GetService<IClassC>();
//                 Console.WriteLine(c.GetHashCode());
//             }

//             using(var scope = provider.CreateScope())
//             {

//                 var provider1 = scope.ServiceProvider;
//                 for(int i =0;i<5;i++){
//                 IClassC c = provider.GetService<IClassC>();
//                 Console.WriteLine(c.GetHashCode());
//             }
//             }


//         }
//     }
// }
