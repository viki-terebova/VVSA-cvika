using System.Collections.Generic;
using uloha3.DatabaseModel;

namespace uloha3.Repositories;

public interface ITransationRepository
{
    List<Transaction> GetAllTransations();
    Transaction? GetTransationById(int id);
}
