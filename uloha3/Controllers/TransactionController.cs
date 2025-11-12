using Microsoft.AspNetCore.Mvc;
using uloha3.Services;
using uloha3.ViewModels;

namespace uloha3.Controllers;

[ApiController]
[Route("[controller]")]
public class TransactionsController : ControllerBase
{
    private readonly ITransationService _service;

    public TransactionsController(ITransationService service)
    {
        _service = service;
    }

    [HttpGet]
    public ActionResult<List<TransactionViewModel>> GetAllTransations()
        => _service.GetAllTransations();

    [HttpGet("{id}")]
    public ActionResult<TransactionViewModel> GetTransationById(int id)
    {
        var item = _service.GetTransationById(id);
        if (item is null) return NotFound();
        return item;
    }
}
