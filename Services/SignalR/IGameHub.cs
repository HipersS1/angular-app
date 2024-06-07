namespace Services.SignalR
{
    public interface IGameHub
    {
        Task ReceiveMessage(string message);
    }
}
