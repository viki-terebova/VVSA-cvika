using System;

namespace uloha3.Models;

public class Transation
{
    public decimal TransationId { get; set; }
    public string FullName { get; set; } = string.Empty;
    public TransationType TransationType { get; set; }
    public string AccountNumber { get; set; } = string.Empty;
    public string BankCode { get; set; } = string.Empty;
    public DateTime IssueDate { get; set; }
    public decimal Amount { get; set; }
}

