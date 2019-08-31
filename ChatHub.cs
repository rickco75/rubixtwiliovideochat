using Microsoft.AspNetCore.SignalR;
using System;

namespace rubix{
public class ChatHub : Hub
{
    public void SendToAll(string name, string message)
    {
        //Clients.All.InvokeAsync("sendToAll", name, message);
    }
}
} 

