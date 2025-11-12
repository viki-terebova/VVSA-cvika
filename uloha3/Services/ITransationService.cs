using System.Collections.Generic;
using uloha3.ViewModels;

namespace uloha3.Services;

public interface ITransationService
{
    List<TransactionViewModel> GetAllTransations();
    TransactionViewModel? GetTransationById(int id);
}
