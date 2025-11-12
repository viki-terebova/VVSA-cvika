using System.Collections.Generic;
using uloha3.DatabaseModel;
using uloha3.Repositories;
using uloha3.ViewModels;

namespace uloha3.Services;

public class TransationService : ITransationService
{
    private readonly ITransationRepository repository;

    public TransationService(ITransationRepository _repository)
    {
        repository = _repository;
    }

    public List<TransactionViewModel> GetAllTransations()
    {
        var items = repository.GetAllTransations();
        var result = new List<TransactionViewModel>(items.Count);
        foreach (var t in items)
        {
            var vm = new TransactionViewModel
            {
                transactionId = t.Id,
                transactionType = t.TransactionTypeId,
                accountNumber = t.AccountNumber,
                bankCode = t.BankCode,
                issueDate = t.IssueDate,
                amount = t.Amount
            };
            result.Add(vm);
        }
        return result;
    }

    public TransactionViewModel? GetTransationById(int id)
    {
        var t = repository.GetTransationById(id);
        if (t is null) return null;
        var vm = new TransactionViewModel
        {
            transactionId = t.Id,
            transactionType = t.TransactionTypeId,
            accountNumber = t.AccountNumber,
            bankCode = t.BankCode,
            issueDate = t.IssueDate,
            amount = t.Amount
        };
        return vm;
    }
}
