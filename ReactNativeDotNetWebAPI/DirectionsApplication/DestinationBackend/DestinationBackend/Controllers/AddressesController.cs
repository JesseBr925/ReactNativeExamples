using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Runtime.Intrinsics.X86;
using System.Security.Cryptography.X509Certificates;

namespace DestinationBackend.Controllers
{
    [AllowAnonymous]
    [Route("api/[controller]")]
    [ApiController]
    public class AddressesController : ControllerBase
    {
        [EnableCors]
        [AllowAnonymous]
        [HttpGet(Name = "GetAddresses")]
        public List<Address> Get()
        {
            List<Address> currentAddresses = new List<Address>();

            currentAddresses.Add(new Address("1 Canal St", "Beetle Exhibit", "New Orleans", "LA", "United States", "70130", "29.95069294957944", "-90.06328663825992"));
            currentAddresses.Add(new Address("800 Decatur St", "Cafe Du Monde", "New Orleans", "LA", "United States", "70116", "29.957624945833416", "-90.06173806074497"));
            currentAddresses.Add(new Address("833 Poydras St", "Room 103", "New Orleans", "LA", "United States", "70112", "29.950622154732116", "-90.07281045914677"));
            currentAddresses.Add(new Address("628 St Charles Ave", "", "New Orleans", "LA", "United States", "70130", "29.947481799829465", "-90.07111955577416"));

            return currentAddresses;
        }
    }

    public class Address {
        public string Address1 { get; set; }
        public string Address2 { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public string Country { get; set; }
        public string Zipcode { get; set; }
        public string Longitude { get; set; }
        public string Latitude { get; set; }

        public Address(string _Address1, string _Address2, string _City, string _State, string _Country, string _Zipcode, string _Latitude, string _Longitude ) { 
            Address1 = _Address1;
            Address2 = _Address2;
            City = _City;              
            State = _State;
            Country = _Country;
            Zipcode = _Zipcode;
            Longitude = _Longitude;
            Latitude = _Latitude;
        }
    }
}
