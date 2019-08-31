using System.Collections.Generic;
using System.Threading.Tasks;
using rubix.Models;

namespace rubix.Abstractions
{
    public interface IVideoService
    {
        string GetTwilioJwt(string identity);
        Task<IEnumerable<RoomDetails>> GetAllRoomsAsync();
    }
}