using System.Runtime.InteropServices;
using CS033;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Options;


namespace CS033{

    class  ClassC1: IClassC 
    {
     public  ClassC1 ()  => Console.WriteLine ( "ClassC1 is created" );
     public  void  ActionC () 
    {
        Console.WriteLine( "Action in C1" );
    }
    }

    class  ClassB1  :  IClassB 
    {
    IClassC c_dependency;
     public  ClassB1 ( IClassC classc ) 
    {
        c_dependency = classc;
        Console.WriteLine( "ClassB1 is created" );
    }
     public  void  ActionB () 
    {
        Console.WriteLine( "Action in B1" );
        c_dependency.ActionC();
    }
    }
    interface  IClassB  {
     public  void  ActionB () ;
    }
    interface  IClassC  {
     public  void  ActionC () ;
    }

    class  ClassC  :  IClassC  {
     public  ClassC ()  => Console.WriteLine ( "ClassC is created" );
     public  void  ActionC ()  => Console.WriteLine( "Action in ClassC" );
    }

    class  ClassB  :  IClassB  {
    IClassC c_dependency;
     public  ClassB ( IClassC classc ) 
    {
        c_dependency = classc;
        Console.WriteLine( "ClassB is created" );
    }
     public  void  ActionB () 
    {
        Console.WriteLine( "Action in ClassB" );
        c_dependency.ActionC();
    }
    }


    class  ClassA  {
    IClassB b_dependency;
     public  ClassA ( IClassB classb ) 
    {
        b_dependency = classb;
        Console.WriteLine( "ClassA is created" );
    }
     public  void  ActionA () 
    {
        Console.WriteLine( "Action in ClassA" );
        b_dependency.ActionB();
    }
    }


    class Horn{

        int level = 0;
        public Horn(int level) => this.level = level;

        public void Beep() => Console.WriteLine("Beep -Beep - Beep...");


    }
    class Car{

        public Horn horn {set;get;}
        public Car(Horn _horn) => horn =_horn;
        public void Beep(){
            
            horn.Beep();
        }
    }

    class ClassB2 : IClassB
    {
        IClassC c_dependency;
        string message;
        public ClassB2(IClassC classc, string mgs)
        {
            c_dependency = classc;
            message = mgs;
            Console.WriteLine("ClassB2 is created");
        }
        public void ActionB()
        {
            Console.WriteLine(message);
            c_dependency.ActionC();
        }
    }

   
    class Program
    {

        // public static IClassB CreateB2(IServiceProvider provider){
        //     var b2 = new ClassB2(
        //         provider.GetService<IClassC>(),
        //         "Implement in Class B2"
        //     );
        //     return b2;
        // }
        public class MyServiceOptions
        {
            public string data1{get;set;}

            public int data2{get;set;}
            
        }
        public class MyService 
        {
            public string data1{get;set;}

            public int data2{get;set;}

            public MyService(IOptions<MyServiceOptions> options)
            {
                var _options = options.Value;
                data1 = _options.data1;
                data2 = _options.data2;    
            }
            public void PrintData() => Console.WriteLine($"{data1} / {data2}");

        }
        
  
        static void Main(string[] args)
        {
            // IClassC objectC =  new  ClassC1();             // new ClassC(); 
            // IClassB objectB =  new  ClassB1(objectC);      // new ClassB(); 
            // ClassA objectA =  new  ClassA(objectB);
            // objectA.ActionA();

            // Horn horn = new Horn(7);
            // Car car = new Car(horn);

            // car.horn = horn;
            // car.Beep();
        //     var services = new ServiceCollection();

        //     //IClass, ClassC, ClassC1

        //     // services.AddTransient<IClassC,ClassC>();
        //     // services.AddScoped<IClassC,ClassC>();
            

        //     //Class A
        //     //IClassC, ClassC, ClassC1
        //     //IClassB,ClassB,ClassB1,ClassB2
            
        //     services.AddSingleton<ClassA,ClassA>();
        //     services.AddSingleton<IClassB>(CreateB2);
        //     services.AddSingleton<IClassC,ClassC>();


            


            

        //     var provider = services.BuildServiceProvider();
        //     //var a = provider.GetService<NameService>();
            
        //    ClassA a = provider.GetService<ClassA>();
        //    a.ActionA();

            // var services = new ServiceCollection();

            // services.AddSingleton<MyService>();


            // services.Configure<MyServiceOptions>(
            //     (MyServiceOptions options) => {
            //         options.data1 = "Hello everyone";
            //         options.data2 = 2021;
            //     }
            // ); 
            // var provider = services.BuildServiceProvider();
            // var myservice = provider.GetServices<MyService>();

            // myservice.PrintData();
            IConfigurationRoot configurationRoot;

            ConfigurationBuilder configBuilder = new ConfigurationBuilder();

            configBuilder.SetBasePath(Directory.GetCurrentDirectory());
            configBuilder.AddJsonFile("configuration.json");

            configurationRoot = configBuilder.Build();

            // var key1 = configurationRoot.GetSection("section-1").GetSection("key-1").Value;
       
            // var key2 = configurationRoot.GetSection("MyServiceOption").GetSection("data-1").Value;


            // Console.WriteLine(key1);
            // Console.WriteLine(key2);


            var sectionMyServiceOptions = configurationRoot.GetSection("MyServiceOptions");
            


            var services = new ServiceCollection();
            services.AddSingleton<MyService>();
            services.Configure<MyServiceOptions>(
                sectionMyServiceOptions
            );

            var provider = services.BuildServiceProvider();
            var myservice = provider.GetService<MyService>();

            myservice.PrintData();

        }
    }
}
