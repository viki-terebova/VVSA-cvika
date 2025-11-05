using System.Collections.Generic;
using uloha3.Models;

namespace uloha3.Services;

public interface ITransationService
{
    List<Transation> GetAllTransations();
    Transation? GetTransationById(int id);
}
