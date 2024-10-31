using System.Collections.Generic;
using System.Linq;

class Product{
    public string ID{get;set;}

    public string Name{get;set;}

    public double Price{get;set;}


}

public class ProductService{
    List<Product> products = new List<Product>();

    public ProductService(){
        products.AddRange(new Product[]{
            new Product(){ID ="product01" ,Name ="iphone 8",Price =100},
            new Product(){ID ="product02" ,Name ="iphone x",Price =200},
            new Product(){ID ="product03" ,Name ="iphone xs max",Price =300},
            new Product(){ID ="product04" ,Name ="iphone 11",Price =500},

        
        });
    }
    public Product FindProduct(string productid){
            var qr = from p in products where p.ID == productid select p;

            return qr.FirstOrDefault();


    }
}