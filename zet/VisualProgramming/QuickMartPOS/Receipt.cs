using System;
using System.Collections.Generic;
using System.IO;

public class Receipt
{
    public List<SaleItem> Items { get; } = new();
    public DateTime Timestamp { get; } = DateTime.Now;

    public void AddItem(SaleItem item)
    {
        Items.Add(item);
    }

    public void PrintReceipt()
    {
        Console.WriteLine("\t\t\t=========QUICKMART SUPERMARKET RECEIPT===========");
        Console.WriteLine("\t\t\t| Date: " + Timestamp);
        Console.WriteLine("\t\t\t=================================================");

        decimal totalVat = 0, totalAmount = 0;

        foreach (var item in Items)
        {
            Console.WriteLine($"\t\t\t| {item.Product.Name} x {item.Quantity}");
            Console.WriteLine($"\t\t\t| Subtotal: KES {item.Subtotal:F2}");
            Console.WriteLine($"\t\t\t| VAT ({item.Product.VatCategory}): KES {item.Vat:F2}");
            Console.WriteLine($"\t\t\t| Total: KES {item.Total:F2}");
            Console.WriteLine("\t\t\t|");
            totalVat += item.Vat;
            totalAmount += item.Total;
        }
        Console.WriteLine("\t\t\t|");
        Console.WriteLine("\t\t\t=================================================");
        Console.WriteLine($"\t\t\t| Total VAT: KES {totalVat:F2}");
        Console.WriteLine($"\t\t\t| Total Amount: KES {totalAmount:F2}");
        Console.WriteLine("\t\t\t| Thank you for shopping at QuickMart Supermarket!");

        LogTransaction(totalAmount, totalVat); // Log the transaction
    }

    private void LogTransaction(decimal total, decimal vat)
    {
        string logEntry = $"Date: {Timestamp:yyyy-MM-dd HH:mm:ss}, Total: KES {total:F2}, VAT: KES {vat:F2}";
        File.AppendAllText("sales_log.txt", logEntry + Environment.NewLine);
    }
}