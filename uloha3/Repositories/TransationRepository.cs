using System;
using System.Collections.Generic;
using System.Linq;
using uloha3.Models;

namespace uloha3.Repositories;

public class TransationRepository : ITransationRepository
{
    public List<Transation> Transations { get; } = new();

    public TransationRepository()
    {
        Transations.Add(new Transation
        {
            TransationId = 1,
            FullName = "",
            TransationType = TransationType.Incoming,
            AccountNumber = "",
            BankCode = "",
            IssueDate = DateTime.UtcNow,
            Amount = 0
        });

        Transations.Add(new Transation
        {
            TransationId = 2,
            FullName = "",
            TransationType = TransationType.Outgoing,
            AccountNumber = "",
            BankCode = "",
            IssueDate = DateTime.UtcNow,
            Amount = 0
        });
    }

    public List<Transation> GetAllTransations() => Transations;

    public Transation? GetTransationById(int id)
        => Transations.FirstOrDefault(t => t.TransationId == id);
}
