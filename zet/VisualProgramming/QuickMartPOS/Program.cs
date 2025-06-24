using System;

class Program
{
    static void Main()
    {
        var milk = new Product("Milk", 60.00m, VatCategory.ZeroRated);
        var headset = new Product("Headset", 1000.00m, VatCategory.Standard);
        var mouse = new Product("Mouse", 500.00m, VatCategory.Exempt);

        var receipt = new Receipt();
        receipt.AddItem(new SaleItem(milk, 2));
        receipt.AddItem(new SaleItem(headset, 3));
        receipt.AddItem(new SaleItem(mouse, 4));

        receipt.PrintReceipt();
    }
}