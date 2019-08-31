using System.Net;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using System.Linq;
using Microsoft.AspNetCore.Identity;
using rubix.Models;
using System;
using System.Collections.Generic;
using System.Transactions;
using System.Security.Claims;
using rubix.Abstractions;

namespace rubix.Controllers
{
    [
        ApiController,
        Route("api/video")
    ]
    public class VideoController : ControllerBase
    {
        readonly IVideoService _videoService;

        public VideoController(IVideoService videoService)
            => _videoService = videoService;

        [HttpGet("token")]
        public IActionResult GetToken()
            => new JsonResult(new { token = _videoService.GetTwilioJwt(User.Identity.Name) });

        [HttpGet("rooms")]
        public async Task<IActionResult> GetRooms()
            => new JsonResult(await _videoService.GetAllRoomsAsync());
    }
}