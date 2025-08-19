using System;

public class Product
{
    public string Name { get; set; }
    public decimal Price { get; set; }
    public VatCategory VatCategory { get; set; }

    public Product(string name, decimal price, VatCategory vatCategory)
    {
        Name = name;
        Price = price;
        VatCategory = vatCategory;
    }

    public decimal GetVatAmount()
    {
        var rate = VatRates.Rates[VatCategory];
        return rate >= 0 ? Price * rate : 0;
    }

    public decimal GetTotalPrice()
    {
        return Price + GetVatAmount();
    }

    public static Product CreateFromInput()
    {
        Console.Write("Enter product name: ");
        string? inputName = Console.ReadLine();
        string name = inputName ?? string.Empty;

        decimal price;
        while (true)
        {
            Console.Write("Enter product price (e.g., 199.99): ");
            if (decimal.TryParse(Console.ReadLine(), out price)) break;
            Console.WriteLine("Invalid price. Try again.");
        }

        Console.WriteLine("Select VAT Category:");
        Console.WriteLine("1. Standard (16%)");
        Console.WriteLine("2. Zero-Rated (0%)");
        Console.WriteLine("3. Exempt (No VAT)");

        VatCategory vatCategory;
        while (true)
        {
            Console.Write("Enter choice (1–3): ");
            string? choice = Console.ReadLine();
            switch (choice)
            {
                case "1":
                    vatCategory = VatCategory.Standard;
                    break;
                case "2":
                    vatCategory = VatCategory.ZeroRated;
                    break;
                case "3":
                    vatCategory = VatCategory.Exempt;
                    break;
                default:
                    Console.WriteLine("Invalid choice. Try again.");
                    continue;
            }
            break;
        }

        return new Product(name, price, vatCategory);
    }
}
