using System;
using System.Collections.Generic;
using System.Linq;
using uloha3.DatabaseModel;

namespace uloha3.Repositories;

public class TransationRepository : ITransationRepository
{
    private readonly Whiyes5oContext context;
    public List<Transaction> Transations { get; } = new();

    public TransationRepository(Whiyes5oContext context)
    {
        this.context = context;

        Transations.Add(new Transaction
        {
            Id = 1,
            TransactionTypeId = 1,
            UserId = 1,
            AccountNumber = string.Empty,
            BankCode = string.Empty,
            IssueDate = DateTime.UtcNow,
            Amount = 0m
        });

        Transations.Add(new Transaction
        {
            Id = 2,
            TransactionTypeId = 2,
            UserId = 1,
            AccountNumber = string.Empty,
            BankCode = string.Empty,
            IssueDate = DateTime.UtcNow,
            Amount = 0m
        });
    }

    public List<Transaction> GetAllTransations() => context.Transactions.ToList();

    public Transaction? GetTransationById(int id)
        => context.Transactions.FirstOrDefault(t => t.Id == id);
}

