using System.Threading.Tasks;
using Microsoft.AspNetCore.SignalR;

namespace rubix.Hubs
{
    public class NotificationHub : Hub
    {
        public async Task RoomsUpdated(bool flag)
            => await Clients.Others.SendAsync("RoomsUpdated", flag);
    }
}