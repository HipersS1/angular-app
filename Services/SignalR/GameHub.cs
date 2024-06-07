using Microsoft.AspNetCore.SignalR;

namespace Services.SignalR;

public sealed class GameHub : Hub<IGameHub>
{
    public override async Task OnConnectedAsync()
    {
        await Clients.All.ReceiveMessage($"{Context.ConnectionId} has joined");
    }
}

