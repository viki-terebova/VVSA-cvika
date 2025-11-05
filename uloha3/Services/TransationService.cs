using System.Collections.Generic;
using uloha3.Models;
using uloha3.Repositories;

namespace uloha3.Services;

public class TransationService : ITransationService
{
    private readonly ITransationRepository repository;

    public TransationService(ITransationRepository _repository)
    {
        repository = _repository;
    }

    public List<Transation> GetAllTransations() => repository.GetAllTransations();

    public Transation? GetTransationById(int id) => repository.GetTransationById(id);
}

