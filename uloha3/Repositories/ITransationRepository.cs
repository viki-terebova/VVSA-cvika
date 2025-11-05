using System.Collections.Generic;
using uloha3.Models;

namespace uloha3.Repositories;

public interface ITransationRepository
{
    List<Transation> GetAllTransations();
    Transation? GetTransationById(int id);
}
