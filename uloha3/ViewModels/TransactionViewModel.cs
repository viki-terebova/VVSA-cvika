namespace uloha3.ViewModels;

public class TransactionViewModel
{
    public int transactionId { get; set; }
    public string firstName { get; set; } = string.Empty;
    public string lastName { get; set; } = string.Empty;
    public int transactionType { get; set; }
    public string accountNumber { get; set; } = string.Empty;
    public string bankCode { get; set; } = string.Empty;
    public DateTime issueDate { get; set; }
    public decimal amount { get; set; }
}
