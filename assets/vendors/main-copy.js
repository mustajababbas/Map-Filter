// var url = 'assets/vendors/map-data.json';



// // MARKET

// let market = $('#market');

// market.empty();

// market.append('<option selected="true" value="">All</option>');
// market.prop('selectedIndex', 0);



// // Populate dropdown with list of Market
// $.getJSON(url, function (data) {
//   $.each(data, function (key, entry) {
//     market.append($('<option></option>').attr('value', entry.Market).text(entry.Market));
//   })
// });


// // STATE

// let state = $('#state');

// state.empty();

// state.append('<option selected="true" value="">All</option>');
// state.prop('selectedIndex', 0);


// // Populate dropdown with list of State
// $.getJSON(url, function (data) {
//   $.each(data, function (key, entry) {
//     state.append($('<option></option>').attr('value', entry.State).text(entry.State));
//   })
// });

// // REGION

// let region = $('#region');

// region.empty();

// region.append('<option selected="true" value="">All</option>');
// region.prop('selectedIndex', 0);


// // Populate dropdown with list of Region
// $.getJSON(url, function (data) {
//   $.each(data, function (key, entry) {
//     region.append($('<option></option>').attr('value', entry.Region).text(entry.Region));
//   })
// });

var gmarkers1 = [];
var markers1 = [];
var map=null;


markers1 =[
  {
   "Organization": "Cleveland Clinic",
   "City State Zip": "Cleveland OH 44195",
   "lat": 41.5031003,
   "lng": -81.620567,
   "Market": "Cleveland",
   "Region": "Central",
   "State": "OH",
   "Market ranking": 1,
   "National ranking": 1,
   "Rank": "Topten"
  },
  {
   "Organization": "The Ohio State University Wexner Medical Center",
   "City State Zip": "Columbus OH 43210",
   "lat": 39.9990626,
   "lng": -83.0173386,
   "Market": "Columbus",
   "Region": "Central",
   "State": "OH",
   "Market ranking": 1,
   "National ranking": 2,
   "Rank": "Topten"
  },
  {
   "Organization": "The Christ Hospital",
   "City State Zip": "Cincinnati OH 45219",
   "lat": 39.1269228,
   "lng": -84.514354,
   "Market": "Cincinnati",
   "Region": "Central",
   "State": "OH",
   "Market ranking": 1,
   "National ranking": 3,
   "Rank": "Topten"
  },
  {
   "Organization": "UC Davis Health",
   "City State Zip": "Davis CA 95616",
   "lat": 38.5449065,
   "lng": -121.7405167,
   "Market": "Sacramento",
   "Region": "West",
   "State": "CA",
   "Market ranking": 1,
   "National ranking": 4,
   "Rank": "Topten"
  },
  {
   "Organization": "Nebraska Medicine",
   "City State Zip": "Omaha NE 68105",
   "lat": 41.2418116,
   "lng": -95.9673967,
   "Market": "Omaha",
   "Region": "Central",
   "State": "NE",
   "Market ranking": 1,
   "National ranking": 5,
   "Rank": "Topten"
  },
  {
   "Organization": "Johns Hopkins Medicine",
   "City State Zip": "Baltimore MD 21263",
   "lat": 39.2900106,
   "lng": -76.6100287,
   "Market": "Baltimore",
   "Region": "East",
   "State": "MD",
   "Market ranking": 1,
   "National ranking": 6,
   "Rank": "Topten"
  },
  {
   "Organization": "Johns Hopkins Medicine",
   "City State Zip": "Washington, D.C. 20001",
   "lat": 38.89511,
   "lng": -77.036,
   "Market": "District of Columbia (DC)",
   "Region": "East",
   "State": "DC",
   "Market ranking": 1,
   "National ranking": 6,
   "Rank": "Topten"
  },
  {
   "Organization": "University of Michigan Health",
   "City State Zip": "Ann Arbor MI 48109",
   "lat": 42.3053253,
   "lng": -83.6694169,
   "Market": "Ann Arbor",
   "Region": "Central",
   "State": "MI",
   "Market ranking": 1,
   "National ranking": 7,
   "Rank": "Topten"
  },
  {
   "Organization": "University of Michigan Health",
   "City State Zip": "Detroit MI 48127",
   "lat": 42.3314,
   "lng": 83.0458,
   "Market": "Detroit",
   "Region": "Central",
   "State": "MI",
   "Market ranking": 1,
   "National ranking": 7,
   "Rank": "Topten"
  },
  {
   "Organization": "Valley Health System",
   "City State Zip": "Ridgewood NJ 07450",
   "lat": 40.9845896,
   "lng": -74.1063776,
   "Market": "New Jersey",
   "Region": "East",
   "State": "NJ",
   "Market ranking": 1,
   "National ranking": 8,
   "Rank": "Topten"
  },
  {
   "Organization": "UAB Medicine",
   "City State Zip": "Birmingham AL 35233",
   "lat": 33.5118197,
   "lng": -86.8011326,
   "Market": "Birmingham",
   "Region": "South",
   "State": "AL",
   "Market ranking": 1,
   "National ranking": 9,
   "Rank": "Top25"
  },
  {
   "Organization": "Baptist Health South Florida",
   "City State Zip": "Coral Gables FL 33143",
   "lat": 25.6993807,
   "lng": -80.2934522,
   "Market": "Miami",
   "Region": "South",
   "State": "FL",
   "Market ranking": 1,
   "National ranking": 10,
   "Rank": "Top25"
  },
  {
   "Organization": "Massachusetts General Hospital",
   "City State Zip": "Boston MA 02114",
   "lat": 42.3652917,
   "lng": -71.0646337,
   "Market": "Boston",
   "Region": "East",
   "State": "MA",
   "Market ranking": 1,
   "National ranking": 11,
   "Rank": "Top25"
  },
  {
   "Organization": "UT Southwestern Medical Center",
   "City State Zip": "Dallas TX 75001",
   "lat": 32.7767,
   "lng": 96.797,
   "Market": "Dallas",
   "Region": "South",
   "State": "TX",
   "Market ranking": 1,
   "National ranking": 12,
   "Rank": "Top25"
  },
  {
   "Organization": "University of Miami Health System",
   "City State Zip": "Coral Gables FL 33146",
   "lat": 25.7213213,
   "lng": -80.2711588,
   "Market": "Miami",
   "Region": "South",
   "State": "FL",
   "Market ranking": 2,
   "National ranking": 13,
   "Rank": "Top25"
  },
  {
   "Organization": "Kadlec",
   "City State Zip": "Richland WA 99352",
   "lat": 46.239409,
   "lng": -119.2934654,
   "Market": "Seattle",
   "Region": "West",
   "State": "WA",
   "Market ranking": 1,
   "National ranking": 14,
   "Rank": "Top25"
  },
  {
   "Organization": "Mayo Clinic",
   "City State Zip": "Rochester MN 55902",
   "lat": 43.9731715,
   "lng": -92.5197932,
   "Market": "Minneapolis ",
   "Region": "Central",
   "State": "MN",
   "Market ranking": 1,
   "National ranking": 15,
   "Rank": "Top25"
  },
  {
   "Organization": "Mayo Clinic",
   "City State Zip": "Phoenix AZ 85001",
   "lat": 33.4484,
   "lng": 112.074,
   "Market": "Phoenix",
   "Region": "West",
   "State": "AZ",
   "Market ranking": 1,
   "National ranking": 15,
   "Rank": "Top25"
  },
  {
   "Organization": "UNC Health",
   "City State Zip": "Chapel Hill NC 27514",
   "lat": 35.9722081,
   "lng": -79.0475559,
   "Market": "Raleigh-Durham",
   "Region": "South",
   "State": "NC",
   "Market ranking": 1,
   "National ranking": 16,
   "Rank": "Top25"
  },
  {
   "Organization": "OhioHealth",
   "City State Zip": "Columbus OH 43215",
   "lat": 39.9602601,
   "lng": -83.0092803,
   "Market": "Columbus",
   "Region": "Central",
   "State": "OH",
   "Market ranking": 2,
   "National ranking": 17,
   "Rank": "Top25"
  },
  {
   "Organization": "Bronson Healthcare",
   "City State Zip": "Kalamazoo MI 49007",
   "lat": 42.3042239,
   "lng": -85.5869352,
   "Market": "Kalamazoo",
   "Region": "Central",
   "State": "MI",
   "Market ranking": 1,
   "National ranking": 18,
   "Rank": "Top25"
  },
  {
   "Organization": "Memorial Healthcare System",
   "City State Zip": "Hollywood FL 33021",
   "lat": 26.0197012,
   "lng": -80.1819268,
   "Market": "Miami",
   "Region": "South",
   "State": "FL",
   "Market ranking": 3,
   "National ranking": 19,
   "Rank": "Top25"
  },
  {
   "Organization": "Spectrum Health",
   "City State Zip": "Grand Rapids MI 49503",
   "lat": 42.9616689,
   "lng": -85.6588999,
   "Market": "Grand Rapids",
   "Region": "Central",
   "State": "MI",
   "Market ranking": 1,
   "National ranking": 20,
   "Rank": "Top25"
  },
  {
   "Organization": "Brigham &amp; Women's Hospital",
   "City State Zip": "Boston MA 02115",
   "lat": 42.339904,
   "lng": -71.0898892,
   "Market": "Boston",
   "Region": "East",
   "State": "MA",
   "Market ranking": 2,
   "National ranking": 21,
   "Rank": "Top25"
  },
  {
   "Organization": "The University of Kansas Health System",
   "City State Zip": "Kansas City KS 66103",
   "lat": 39.0575219,
   "lng": -94.6295394,
   "Market": "Kansas City",
   "Region": "Central",
   "State": "KS",
   "Market ranking": 1,
   "National ranking": 22,
   "Rank": "Top25"
  },
  {
   "Organization": "IU Health",
   "City State Zip": "Indianapolis IN 46202",
   "lat": 39.7794767,
   "lng": -86.1700894,
   "Market": "Indianapolis",
   "Region": "Central",
   "State": "IN",
   "Market ranking": 1,
   "National ranking": 23,
   "Rank": "Top50"
  },
  {
   "Organization": "Beaumont Health",
   "City State Zip": "Royal Oak MI 48073",
   "lat": 42.5183235,
   "lng": -83.15954,
   "Market": "Detroit",
   "Region": "Central",
   "State": "MI",
   "Market ranking": 2,
   "National ranking": 24,
   "Rank": "Top50"
  },
  {
   "Organization": "Froedtert &amp; Medical College of Wisconsin",
   "City State Zip": "Green Bay WI 54229",
   "lat": 44.5133,
   "lng": 88.0133,
   "Market": "Green Bay",
   "Region": "Central",
   "State": "WI",
   "Market ranking": 1,
   "National ranking": 25,
   "Rank": "Top50"
  },
  {
   "Organization": "Froedtert &amp; Medical College of Wisconsin",
   "City State Zip": "Milwaukee WI 53226",
   "lat": 43.0513426,
   "lng": -88.0411993,
   "Market": "Milwaukee",
   "Region": "Central",
   "State": "WI",
   "Market ranking": 1,
   "National ranking": 25,
   "Rank": "Top50"
  },
  {
   "Organization": "Bellin Health",
   "City State Zip": "Green Bay WI 54229",
   "lat": 44.5133,
   "lng": 88.0133,
   "Market": "Green Bay",
   "Region": "Central",
   "State": "WI",
   "Market ranking": 2,
   "National ranking": 26,
   "Rank": "Top50"
  },
  {
   "Organization": "Northwestern Medicine",
   "City State Zip": "Chicago IL 60611",
   "lat": 41.8925085,
   "lng": -87.6161696,
   "Market": "Chicago",
   "Region": "Central",
   "State": "IL",
   "Market ranking": 1,
   "National ranking": 27,
   "Rank": "Top50"
  },
  {
   "Organization": "West Hills Hospital and Medical Center",
   "City State Zip": "West Hills CA 91307",
   "lat": 34.2124444,
   "lng": -118.6848112,
   "Market": "Los Angeles",
   "Region": "West",
   "State": "CA",
   "Market ranking": 1,
   "National ranking": 28,
   "Rank": "Top50"
  },
  {
   "Organization": "UVA Health",
   "City State Zip": "Charlottesville VA 22903",
   "lat": 38.0293059,
   "lng": -78.4766781,
   "Market": "Virginia",
   "Region": "South",
   "State": "VA",
   "Market ranking": 1,
   "National ranking": 29,
   "Rank": "Top50"
  },
  {
   "Organization": "UChicago Medicine",
   "City State Zip": "Chicago IL 60637",
   "lat": 41.7805099,
   "lng": -87.603826,
   "Market": "Chicago",
   "Region": "Central",
   "State": "IL",
   "Market ranking": 2,
   "National ranking": 30,
   "Rank": "Top50"
  },
  {
   "Organization": "Duke Health",
   "City State Zip": "Durham NC 27705",
   "lat": 36.025609,
   "lng": -78.9853813,
   "Market": "Raleigh-Durham",
   "Region": "South",
   "State": "NC",
   "Market ranking": 2,
   "National ranking": 31,
   "Rank": "Top50"
  },
  {
   "Organization": "UCSF Medical Center",
   "City State Zip": "San Francisco CA 94016",
   "lat": 37.7749,
   "lng": 122.4194,
   "Market": "San Francisco",
   "Region": "West",
   "State": "CA",
   "Market ranking": 1,
   "National ranking": 32,
   "Rank": "Top50"
  },
  {
   "Organization": "Intermountain Healthcare",
   "City State Zip": "Salt Lake City UT 84111",
   "lat": 40.7569389,
   "lng": -111.8836874,
   "Market": "Salt Lake City",
   "Region": "West",
   "State": "UT",
   "Market ranking": 1,
   "National ranking": 33,
   "Rank": "Top50"
  },
  {
   "Organization": "Ochsner Health System",
   "City State Zip": "New Orleans LA 70121",
   "lat": 29.9595011,
   "lng": -90.1612029,
   "Market": "New Orleans",
   "Region": "South",
   "State": "LA",
   "Market ranking": 1,
   "National ranking": 34,
   "Rank": "Top50"
  },
  {
   "Organization": "UCLA Health",
   "City State Zip": "Los Angeles CA 90024",
   "lat": 34.0631451,
   "lng": -118.4367551,
   "Market": "Los Angeles",
   "Region": "West",
   "State": "CA",
   "Market ranking": 2,
   "National ranking": 35,
   "Rank": "Top50"
  },
  {
   "Organization": "UCLA Health",
   "City State Zip": "Irvine CA 92604",
   "lat": 33.6846,
   "lng": 117.8265,
   "Market": "Orange-High Desert",
   "Region": "West",
   "State": "CA",
   "Market ranking": 1,
   "National ranking": 35,
   "Rank": "Top50"
  },
  {
   "Organization": "Asante",
   "City State Zip": "Medford OR 97504",
   "lat": 42.3376195,
   "lng": -122.7855028,
   "Market": "Portland",
   "Region": "West",
   "State": "OR",
   "Market ranking": 1,
   "National ranking": 36,
   "Rank": "Top50"
  },
  {
   "Organization": "Atlantic Health System",
   "City State Zip": "Morristown NJ 07960",
   "lat": 40.7967667,
   "lng": -74.4815438,
   "Market": "New Jersey",
   "Region": "East",
   "State": "NJ",
   "Market ranking": 2,
   "National ranking": 37,
   "Rank": "Top50"
  },
  {
   "Organization": "UC San Diego Health",
   "City State Zip": "San Diego CA 92103",
   "lat": 32.749789,
   "lng": -117.1676501,
   "Market": "San Diego",
   "Region": "West",
   "State": "CA",
   "Market ranking": 1,
   "National ranking": 38,
   "Rank": "Top50"
  },
  {
   "Organization": "UT Health San Antonio",
   "City State Zip": "San Antonio TX 78229",
   "lat": 29.5060908,
   "lng": -98.577596,
   "Market": "San Antonio",
   "Region": "South",
   "State": "TX",
   "Market ranking": 1,
   "National ranking": 39,
   "Rank": "Top50"
  },
  {
   "Organization": "TriHealth",
   "City State Zip": "Cincinnati OH 45202",
   "lat": 39.1031971,
   "lng": -84.5064881,
   "Market": "Cincinnati",
   "Region": "Central",
   "State": "OH",
   "Market ranking": 2,
   "National ranking": 40,
   "Rank": "Top50"
  },
  {
   "Organization": "Texas Health Resources",
   "City State Zip": "Arlington TX 76011",
   "lat": 32.7476492,
   "lng": -97.0924899,
   "Market": "Dallas",
   "Region": "South",
   "State": "TX",
   "Market ranking": 2,
   "National ranking": 41,
   "Rank": "Top50"
  },
  {
   "Organization": "Dartmouth-Hitchcock",
   "City State Zip": "Lebanon NH 03766",
   "lat": 43.6217757,
   "lng": -72.2492351,
   "Market": "Greater New Hampshire",
   "Region": "East",
   "State": "NH",
   "Market ranking": 1,
   "National ranking": 42,
   "Rank": "Top50"
  },
  {
   "Organization": "UC Health",
   "City State Zip": "Cincinnati OH 45202",
   "lat": 39.1031,
   "lng": 84.512,
   "Market": "Cincinnati",
   "Region": "Central",
   "State": "OH",
   "Market ranking": 3,
   "National ranking": 43,
   "Rank": "Top50"
  },
  {
   "Organization": "Houston Methodist",
   "City State Zip": "Houston TX 77030",
   "lat": 29.7050857,
   "lng": -95.4018087,
   "Market": "Houston",
   "Region": "South",
   "State": "TX",
   "Market ranking": 1,
   "National ranking": 44,
   "Rank": "Top50"
  },
  {
   "Organization": "Saint Luke's Health System",
   "City State Zip": "Boise ID 83712",
   "lat": 43.6156568,
   "lng": -116.1170738,
   "Market": "Boise",
   "Region": "West",
   "State": "ID",
   "Market ranking": 1,
   "National ranking": 45,
   "Rank": "Top50"
  },
  {
   "Organization": "Main Line Health",
   "City State Zip": "Bryn Mawr PA 19010",
   "lat": 40.0230237,
   "lng": -75.3151772,
   "Market": "Philadelphia",
   "Region": "East",
   "State": "PA",
   "Market ranking": 1,
   "National ranking": 46
  },
  {
   "Organization": "Virtua Health",
   "City State Zip": "Marlton NJ 08053",
   "lat": 39.8912248,
   "lng": -74.9218324,
   "Market": "New Jersey",
   "Region": "East",
   "State": "NJ",
   "Market ranking": 3,
   "National ranking": 47
  },
  {
   "Organization": "National Jewish Health",
   "City State Zip": "Denver CO 80206",
   "lat": 39.7271021,
   "lng": -104.9564084,
   "Market": "Denver",
   "Region": "West",
   "State": "CO",
   "Market ranking": 1,
   "National ranking": 48
  },
  {
   "Organization": "University of Utah Health",
   "City State Zip": "Salt Lake City UT 84132",
   "lat": 40.7704811,
   "lng": -111.8367368,
   "Market": "Salt Lake City",
   "Region": "West",
   "State": "UT",
   "Market ranking": 2,
   "National ranking": 49
  },
  {
   "Organization": "Yale New Haven Health",
   "City State Zip": "New Haven CT 06510",
   "lat": 41.3052226,
   "lng": -72.9268626,
   "Market": "New Haven",
   "Region": "East",
   "State": "CT",
   "Market ranking": 1,
   "National ranking": 50
  },
  {
   "Organization": "Catholic Health",
   "City State Zip": "Buffalo NY 14204",
   "lat": 42.8801089,
   "lng": -78.8637428,
   "Market": "New York",
   "Region": "East",
   "State": "NY",
   "Market ranking": 1,
   "National ranking": 51
  },
  {
   "Organization": "Emory Healthcare",
   "City State Zip": "Atlanta GA 30322",
   "lat": 33.7980995,
   "lng": -84.3259367,
   "Market": "Atlanta",
   "Region": "South",
   "State": "GA",
   "Market ranking": 1,
   "National ranking": 52
  },
  {
   "Organization": "Edward-Elmhurst Health",
   "City State Zip": "Naperville IL 60540",
   "lat": 41.7606321,
   "lng": -88.1437782,
   "Market": "Illinois",
   "Region": "Central",
   "State": "IL",
   "Market ranking": 1,
   "National ranking": 53
  },
  {
   "Organization": "Beth Israel Lahey Health",
   "City State Zip": "Burlington MA 01803",
   "lat": 42.5005723,
   "lng": -71.2042619,
   "Market": "Boston",
   "Region": "East",
   "State": "MA",
   "Market ranking": 3,
   "National ranking": 54
  },
  {
   "Organization": "Stanford Health Care",
   "City State Zip": "Stanford CA 94305",
   "lat": 37.4135757,
   "lng": -122.1689284,
   "Market": "San Francisco",
   "Region": "West",
   "State": "CA",
   "Market ranking": 2,
   "National ranking": 55
  },
  {
   "Organization": "Memorial Hermann",
   "City State Zip": "Houston TX 77024",
   "lat": 29.7726138,
   "lng": -95.514493,
   "Market": "Houston",
   "Region": "South",
   "State": "TX",
   "Market ranking": 2,
   "National ranking": 56
  },
  {
   "Organization": "University Hospitals",
   "City State Zip": "Cleveland OH 44106",
   "lat": 41.5091257,
   "lng": -81.6089873,
   "Market": "Cleveland",
   "Region": "Central",
   "State": "OH",
   "Market ranking": 2,
   "National ranking": 57
  },
  {
   "Organization": "Penn Medicine",
   "City State Zip": "Philadelphia PA 19104",
   "lat": 39.9583587,
   "lng": -75.1953934,
   "Market": "Philadelphia",
   "Region": "East",
   "State": "PA",
   "Market ranking": 2,
   "National ranking": 58
  },
  {
   "Organization": "BJC HealthCare",
   "City State Zip": "St. Louis MO 63108",
   "lat": 38.647459,
   "lng": -90.25731,
   "Market": "St. Louis",
   "Region": "Central",
   "State": "MO",
   "Market ranking": 1,
   "National ranking": 59
  },
  {
   "Organization": "Tampa General Hospital",
   "City State Zip": "Tampa FL 33606",
   "lat": 27.926156,
   "lng": -82.4563199,
   "Market": "Tampa",
   "Region": "South",
   "State": "FL",
   "Market ranking": 1,
   "National ranking": 60
  },
  {
   "Organization": "Mercy Hospital",
   "City State Zip": "St Louis MO 63108",
   "lat": 38.647459,
   "lng": -90.25731,
   "Market": "St. Louis",
   "Region": "Central",
   "State": "MO",
   "Market ranking": 2,
   "National ranking": 61
  },
  {
   "Organization": "Rush University System for Health",
   "City State Zip": "Chicago IL 60612",
   "lat": 41.8816606,
   "lng": -87.6926257,
   "Market": "Chicago",
   "Region": "Central",
   "State": "IL",
   "Market ranking": 3,
   "National ranking": 62
  },
  {
   "Organization": "Saint Luke's Health System",
   "City State Zip": "Kansas City MO 64131",
   "lat": 38.9450668,
   "lng": -94.5779191,
   "Market": "Kansas City",
   "Region": "Central",
   "State": "MO",
   "Market ranking": 2,
   "National ranking": 63
  },
  {
   "Organization": "UCHealth",
   "City State Zip": "Fort Collins CO 80528",
   "lat": 40.4882728,
   "lng": -104.9973028,
   "Market": "Denver",
   "Region": "West",
   "State": "CO",
   "Market ranking": 2,
   "National ranking": 64
  },
  {
   "Organization": "Allegheny Health Network",
   "City State Zip": "Pittsburgh PA 15212",
   "lat": 40.4828051,
   "lng": -80.0367259,
   "Market": "Pittsburgh",
   "Region": "East",
   "State": "PA",
   "Market ranking": 1,
   "National ranking": 65
  },
  {
   "Organization": "Henry Ford Health System",
   "City State Zip": "Detroit MI 48202",
   "lat": 42.3664506,
   "lng": -83.0737195,
   "Market": "Detroit",
   "Region": "Central",
   "State": "MI",
   "Market ranking": 3,
   "National ranking": 66
  },
  {
   "Organization": "Atrium Health",
   "City State Zip": "Charlotte NC 28203",
   "lat": 35.2146586,
   "lng": -80.8599193,
   "Market": "Charlotte",
   "Region": "South",
   "State": "NC",
   "Market ranking": 1,
   "National ranking": 67
  },
  {
   "Organization": "NewYork-Presbyterian",
   "City State Zip": "New York NY 10032",
   "lat": 40.8409822,
   "lng": -73.9447994,
   "Market": "New York",
   "Region": "East",
   "State": "NY",
   "Market ranking": 2,
   "National ranking": 68
  },
  {
   "Organization": "St. Luke's Hospital",
   "City State Zip": "St Louis MO 63108",
   "lat": 38.647459,
   "lng": -90.25731,
   "Market": "St. Louis",
   "Region": "Central",
   "State": "MO",
   "Market ranking": 3,
   "National ranking": 69
  },
  {
   "Organization": "ChristianaCare",
   "City State Zip": "Wilmington DE 19801",
   "lat": 39.7312603,
   "lng": -75.5451379,
   "Market": "Delmarva Peninsula",
   "Region": "East",
   "State": "DE",
   "Market ranking": 1,
   "National ranking": 70
  },
  {
   "Organization": "ChristianaCare",
   "City State Zip": "Philadelphia PA 19104",
   "lat": 39.9583587,
   "lng": -75.1953934,
   "Market": "Philadelphia",
   "Region": "East",
   "State": "PA",
   "Market ranking": 3,
   "National ranking": 70
  },
  {
   "Organization": "BayCare",
   "City State Zip": "Clearwater FL 33759",
   "lat": 27.9711651,
   "lng": -82.6969408,
   "Market": "Tampa",
   "Region": "South",
   "State": "FL",
   "Market ranking": 2,
   "National ranking": 71
  },
  {
   "Organization": "Hoag Memorial Health",
   "City State Zip": "Costa Mesa CA 92626",
   "lat": 33.6834142,
   "lng": -117.9073244,
   "Market": "Orange-High Desert",
   "Region": "West",
   "State": "CA",
   "Market ranking": 2,
   "National ranking": 72
  },
  {
   "Organization": "Inova",
   "City State Zip": "Falls Church VA 22042",
   "lat": 38.8681054,
   "lng": -77.2002745,
   "Market": "District of Columbia (DC)",
   "Region": "East",
   "State": "DC",
   "Market ranking": 2,
   "National ranking": 73
  },
  {
   "Organization": "AdventHealth",
   "City State Zip": "Orlando FL 32789",
   "lat": 28.5384,
   "lng": 81.3789,
   "Market": "Orlando",
   "Region": "South",
   "State": "FL",
   "Market ranking": 1,
   "National ranking": 74
  },
  {
   "Organization": "AdventHealth",
   "City State Zip": "Tampa FL 33606",
   "lat": 27.9506,
   "lng": 82.4572,
   "Market": "Tampa",
   "Region": "South",
   "State": "FL",
   "Market ranking": 3,
   "National ranking": 74
  },
  {
   "Organization": "Torrance Memorial Medical Center",
   "City State Zip": "Torrance CA 90505",
   "lat": 33.8101772,
   "lng": -118.3520389,
   "Market": "Los Angeles",
   "Region": "West",
   "State": "CA",
   "Market ranking": 3,
   "National ranking": 75
  },
  {
   "Organization": "LCMC Health",
   "City State Zip": "New Orleans LA 70118",
   "lat": 29.9450835,
   "lng": -90.1261013,
   "Market": "New Orleans",
   "Region": "South",
   "State": "LA",
   "Market ranking": 2,
   "National ranking": 76
  },
  {
   "Organization": "Northside Hospital Atlanta",
   "City State Zip": "Atlanta GA 30342",
   "lat": 33.8856615,
   "lng": -84.3699767,
   "Market": "Atlanta",
   "Region": "South",
   "State": "GA",
   "Market ranking": 2,
   "National ranking": 77
  },
  {
   "Organization": "UPMC",
   "City State Zip": "Pittsburgh PA 15213",
   "lat": 40.4379259,
   "lng": -79.9556424,
   "Market": "Pittsburgh",
   "Region": "East",
   "State": "PA",
   "Market ranking": 2,
   "National ranking": 78
  },
  {
   "Organization": "St. Elizabeth Healthcare",
   "City State Zip": "Cincinnati OH 45202",
   "lat": 39.1031,
   "lng": 84.512,
   "Market": "Cincinnati",
   "Region": "Central",
   "State": "OH",
   "Market ranking": 4,
   "National ranking": 79
  },
  {
   "Organization": "OHSU Healthcare",
   "City State Zip": "Portland OR 97239",
   "lat": 45.4874111,
   "lng": -122.6875541,
   "Market": "Portland",
   "Region": "West",
   "State": "OR",
   "Market ranking": 2,
   "National ranking": 80
  },
  {
   "Organization": "NorthShore University HealthSystem",
   "City State Zip": "Evanston IL 60201",
   "lat": 42.060011,
   "lng": -87.6926257,
   "Market": "Chicago",
   "Region": "Central",
   "State": "IL",
   "Market ranking": 4,
   "National ranking": 81
  },
  {
   "Organization": "Baylor Scott & White Health",
   "City State Zip": "Austin TX 78701",
   "lat": 30.2672,
   "lng": 97.7431,
   "Market": "Austin",
   "Region": "South",
   "State": "TX",
   "Market ranking": 1,
   "National ranking": 82
  },
  {
   "Organization": "Baylor Scott & White Health",
   "City State Zip": "Dallas TX 75246",
   "lat": 32.7962048,
   "lng": -96.7694752,
   "Market": "Dallas",
   "Region": "South",
   "State": "TX",
   "Market ranking": 3,
   "National ranking": 82
  },
  {
   "Organization": "University of Maryland Medical System",
   "City State Zip": "Baltimore MD 21201",
   "lat": 39.2963369,
   "lng": -76.6210539,
   "Market": "Baltimore",
   "Region": "East",
   "State": "MD",
   "Market ranking": 2,
   "National ranking": 83
  },
  {
   "Organization": "NYU Langone Health",
   "City State Zip": "New York NY 10016",
   "lat": 40.74727,
   "lng": -73.9800645,
   "Market": "New York",
   "Region": "East",
   "State": "NY",
   "Market ranking": 3,
   "National ranking": 84
  },
  {
   "Organization": "Community Health Network",
   "City State Zip": "Indianapolis IN 46219",
   "lat": 39.7803581,
   "lng": -86.0427626,
   "Market": "Indianapolis",
   "Region": "Central",
   "State": "IN",
   "Market ranking": 2,
   "National ranking": 85
  },
  {
   "Organization": "UCI Health",
   "City State Zip": "Irvine CA 92604",
   "lat": 33.6846,
   "lng": 117.8265,
   "Market": "Orange-High Desert",
   "Region": "West",
   "State": "CA",
   "Market ranking": 3,
   "National ranking": 86
  },
  {
   "Organization": "Saltzer Health",
   "City State Zip": "Meridian ID 83642",
   "lat": 43.5644359,
   "lng": -116.4034565,
   "Market": "Boise",
   "Region": "West",
   "State": "ID",
   "Market ranking": 2,
   "National ranking": 87
  },
  {
   "Organization": "UW Medicine",
   "City State Zip": "Renton WA 98057",
   "lat": 47.4942738,
   "lng": -122.2081419,
   "Market": "Seattle",
   "Region": "West",
   "State": "WA",
   "Market ranking": 2,
   "National ranking": 88
  },
  {
   "Organization": "MemorialCare",
   "City State Zip": "Fountain Valley CA 92708",
   "lat": 33.7168761,
   "lng": -117.9600466,
   "Market": "Los Angeles",
   "Region": "West",
   "State": "CA",
   "Market ranking": 4,
   "National ranking": 89
  },
  {
   "Organization": "MemorialCare",
   "City State Zip": "Fountain Valley CA 92708",
   "lat": 33.7168761,
   "lng": -117.9600466,
   "Market": "Orange-High Desert",
   "Region": "West",
   "State": "CA",
   "Market ranking": 4,
   "National ranking": 89
  },
  {
   "Organization": "Sharp HealthCare",
   "City State Zip": "San Diego CA 92123",
   "lat": 32.8102534,
   "lng": -117.1323579,
   "Market": "San Diego",
   "Region": "West",
   "State": "CA",
   "Market ranking": 2,
   "National ranking": 90
  },
  {
   "Organization": "McLeod Health",
   "City State Zip": "Florence SC 29506",
   "lat": 34.1954331,
   "lng": -79.7625625,
   "Market": "South Carolina",
   "Region": "South",
   "State": "SC",
   "Market ranking": 1,
   "National ranking": 91
  },
  {
   "Organization": "Carilion Clinic",
   "City State Zip": "Roanoke VA 24012",
   "lat": 37.3172783,
   "lng": -79.8912813,
   "Market": "Virginia",
   "Region": "South",
   "State": "VA",
   "Market ranking": 3,
   "National ranking": 92
  },
  {
   "Organization": "MaineHealth",
   "City State Zip": "Portland ME 04101",
   "lat": 43.6629964,
   "lng": -70.2568775,
   "Market": "Maine",
   "Region": "East",
   "State": "ME",
   "Market ranking": 1,
   "National ranking": 93
  },
  {
   "Organization": "Jefferson Health",
   "City State Zip": "Philadelphia PA 0",
   "lat": 39.9525839,
   "lng": -75.1652215,
   "Market": "Philadelphia",
   "Region": "East",
   "State": "PA",
   "Market ranking": 4,
   "National ranking": 94
  },
  {
   "Organization": "North Kansas City Hospital",
   "City State Zip": "North Kansas City MO 64116",
   "lat": 39.1584696,
   "lng": -94.5727598,
   "Market": "Kansas City",
   "Region": "Central",
   "State": "MO",
   "Market ranking": 3,
   "National ranking": 95
  },
  {
   "Organization": "Mount Sinai Health System",
   "City State Zip": "New York NY 10029",
   "lat": 40.7916407,
   "lng": -73.9447994,
   "Market": "New York",
   "Region": "East",
   "State": "NY",
   "Market ranking": 4,
   "National ranking": 96
  },
  {
   "Organization": "Cedars-Sinai",
   "City State Zip": "Los Angeles CA 90048",
   "lat": 34.0741548,
   "lng": -118.3724915,
   "Market": "Los Angeles",
   "Region": "West",
   "State": "CA",
   "Market ranking": 5,
   "National ranking": 97
  },
  {
   "Organization": "St. David's HealthCare",
   "City State Zip": "Austin TX 78701",
   "lat": 30.2729209,
   "lng": -97.7443863,
   "Market": "Austin",
   "Region": "South",
   "State": "TX",
   "Market ranking": 2,
   "National ranking": 98
  },
  {
   "Organization": "Centura Health",
   "City State Zip": "Centennial CO 80112",
   "lat": 39.5835785,
   "lng": -104.8571368,
   "Market": "Denver",
   "Region": "West",
   "State": "CO",
   "Market ranking": 3,
   "National ranking": 99
  },
  {
   "Organization": "Trinity Health Mid-Atlantic",
   "City State Zip": "Philiadelphia PA 19131",
   "lat": 39.9915379,
   "lng": -75.2187346,
   "Market": "Philadelphia",
   "Region": "East",
   "State": "PA",
   "Market ranking": 5,
   "National ranking": 100
  },
  {
   "Organization": "Northwell Health",
   "City State Zip": "Great Neck NY 11030",
   "lat": 40.7960005,
   "lng": -73.6830521,
   "Market": "New York",
   "Region": "East",
   "State": "NY",
   "Market ranking": 5,
   "National ranking": 101
  },
  {
   "Organization": "Tidelands Health",
   "City State Zip": "Georgetown SC 29440",
   "lat": 33.376834,
   "lng": -79.2944964,
   "Market": "South Carolina",
   "Region": "South",
   "State": "SC",
   "Market ranking": 2,
   "National ranking": 102
  },
  {
   "Organization": "Mercy Medical Center",
   "City State Zip": "Baltimore MD 21201",
   "lat": 39.2904,
   "lng": 76.6122,
   "Market": "Baltimore",
   "Region": "East",
   "State": "MD",
   "Market ranking": 3,
   "National ranking": 103
  },
  {
   "Organization": "Hartford HealthCare",
   "City State Zip": "Hartford CT 06106",
   "lat": 41.743111,
   "lng": -72.7038047,
   "Market": "New Haven",
   "Region": "East",
   "State": "CT",
   "Market ranking": 2,
   "National ranking": 104
  },
  {
   "Organization": "Methodist Healthcare",
   "City State Zip": "San Antonio TX 78229",
   "lat": 29.5060908,
   "lng": -98.577596,
   "Market": "San Antonio",
   "Region": "South",
   "State": "TX",
   "Market ranking": 2,
   "National ranking": 105
  },
  {
   "Organization": "Methodist Health System",
   "City State Zip": "Omaha NE 68007",
   "lat": 41.2565,
   "lng": "95.93.45",
   "Market": "Omaha",
   "Region": "Central",
   "State": "NE",
   "Market ranking": 2,
   "National ranking": 106
  },
  {
   "Organization": "Orlando Health",
   "City State Zip": "Orlando FL 32806",
   "lat": 28.5085825,
   "lng": -81.3564411,
   "Market": "Orlando",
   "Region": "South",
   "State": "FL",
   "Market ranking": 2,
   "National ranking": 107
  },
  {
   "Organization": "St. Peter's Health Partners",
   "City State Zip": "Albany NY 12208",
   "lat": 42.6547387,
   "lng": -73.7889689,
   "Market": "Albany",
   "Region": "East",
   "State": "NY",
   "Market ranking": 1,
   "National ranking": 108
  },
  {
   "Organization": "Swedish",
   "City State Zip": "Seattle WA 98122",
   "lat": 47.6087583,
   "lng": -122.2964235,
   "Market": "Seattle",
   "Region": "West",
   "State": "WA",
   "Market ranking": 3,
   "National ranking": 109
  },
  {
   "Organization": "Scripps Health",
   "City State Zip": "San Diego CA 92121",
   "lat": 32.8981142,
   "lng": -117.2029363,
   "Market": "San Diego",
   "Region": "West",
   "State": "CA",
   "Market ranking": 3,
   "National ranking": 110
  },
  {
   "Organization": "Grandview Medical Center",
   "City State Zip": "Birmingham AL 35005",
   "lat": 33.5186,
   "lng": 86.8104,
   "Market": "Birmingham",
   "Region": "South",
   "State": "AL",
   "Market ranking": 2,
   "National ranking": 111
  },
  {
   "Organization": "Beacon Health",
   "City State Zip": "South Bend IN 46601",
   "lat": 41.6724038,
   "lng": -86.2539519,
   "Market": "South Bend",
   "Region": "Central",
   "State": "IN",
   "Market ranking": 1,
   "National ranking": 112
  },
  {
   "Organization": "Saint Joseph Health System",
   "City State Zip": "South Bend IN 46601",
   "lat": 41.6724038,
   "lng": -86.2539519,
   "Market": "South Bend",
   "Region": "Central",
   "State": "IN",
   "Market ranking": 2,
   "National ranking": 113
  },
  {
   "Organization": "Banner Health",
   "City State Zip": "Phoenix AZ 85012",
   "lat": 33.5114334,
   "lng": -112.0685027,
   "Market": "Phoenix",
   "Region": "West",
   "State": "AZ",
   "Market ranking": 2,
   "National ranking": 114
  },
  {
   "Organization": "HonorHealth",
   "City State Zip": "Scottsdale AZ 85258",
   "lat": 33.5669912,
   "lng": -111.8985922,
   "Market": "Phoenix",
   "Region": "West",
   "State": "AZ",
   "Market ranking": 3,
   "National ranking": 115
  },
  {
   "Organization": "Aurora Health Care",
   "City State Zip": "Green Bay Wi 54311",
   "lat": 44.4739494,
   "lng": -87.8746146,
   "Market": "Green Bay",
   "Region": "Central",
   "State": "WI",
   "Market ranking": 3,
   "National ranking": 116
  },
  {
   "Organization": "Aurora Health Care",
   "City State Zip": "Milwaukee WI 53202",
   "lat": 43.0439776,
   "lng": -87.8991514,
   "Market": "Milwaukee",
   "Region": "Central",
   "State": "WI",
   "Market ranking": 2,
   "National ranking": 116
  },
  {
   "Organization": "Tidal Health",
   "City State Zip": "Salisbury MD 21801",
   "lat": 38.4001474,
   "lng": -75.632447,
   "Market": "Delmarva Peninsula",
   "Region": "East",
   "State": "MD",
   "Market ranking": 2,
   "National ranking": 117
  },
  {
   "Organization": "HealthCare Partners",
   "City State Zip": "Los Angeles CA 90048",
   "lat": 34.0741548,
   "lng": -118.3724915,
   "Market": "Los Angeles",
   "Region": "West",
   "State": "CA",
   "Market ranking": 6,
   "National ranking": 118
  },
  {
   "Organization": "HealthCare Partners",
   "City State Zip": "Irvine CA 92604",
   "lat": 33.6846,
   "lng": 117.8265,
   "Market": "Orange-High Desert",
   "Region": "West",
   "State": "CA",
   "Market ranking": 5,
   "National ranking": 118
  },
  {
   "Organization": "HealthPartners",
   "City State Zip": "Bloomington MN 55425",
   "lat": 44.851048,
   "lng": -93.2395012,
   "Market": "Minneapolis",
   "Region": "Central",
   "State": "MN",
   "Market ranking": 2,
   "National ranking": 119
  },
  {
   "Organization": "SSM Health",
   "City State Zip": "St. Louis MO 63132",
   "lat": 38.6785807,
   "lng": -90.3795438,
   "Market": "St. Louis",
   "Region": "Central",
   "State": "MO",
   "Market ranking": 4,
   "National ranking": 120
  },
  {
   "Organization": "Keck Medicine of USC",
   "City State Zip": "Los Angeles CA 90048",
   "lat": 34.0741548,
   "lng": -118.3724915,
   "Market": "Los Angeles",
   "Region": "West",
   "State": "CA",
   "Market ranking": 7,
   "National ranking": 121
  },
  {
   "Organization": "Keck Medicine of USC",
   "City State Zip": "Irvine CA 92604",
   "lat": 33.6846,
   "lng": 117.8265,
   "Market": "Orange-High Desert",
   "Region": "West",
   "State": "CA",
   "Market ranking": 6,
   "National ranking": 121
  },
  {
   "Organization": "Piedmont Healthcare",
   "City State Zip": "Atlanta GA 30309",
   "lat": 33.7971137,
   "lng": -84.3804888,
   "Market": "Atlanta",
   "Region": "South",
   "State": "GA",
   "Market ranking": 3,
   "National ranking": 122
  },
  {
   "Organization": "Medical City Healthcare",
   "City State Zip": "Irving TX 75039",
   "lat": 32.8916766,
   "lng": -96.9477532,
   "Market": "Dallas",
   "Region": "South",
   "State": "TX",
   "Market ranking": 4,
   "National ranking": 123
  },
  {
   "Organization": "Sunrise Health",
   "City State Zip": "Las Vegas NV 89109",
   "lat": 36.128561,
   "lng": -115.1711298,
   "Market": "Las Vegas",
   "Region": "West",
   "State": "NV",
   "Market ranking": 1,
   "National ranking": 124
  },
  {
   "Organization": "Dignity Health",
   "City State Zip": "Las Vegas NV 89109",
   "lat": 36.128561,
   "lng": -115.1711298,
   "Market": "Las Vegas",
   "Region": "West",
   "State": "NV",
   "Market ranking": 2,
   "National ranking": 125
  },
  {
   "Organization": "Dignity Health",
   "City State Zip": "Los Angeles CA 90048",
   "lat": 34.0741548,
   "lng": -118.3724915,
   "Market": "Los Angeles",
   "Region": "West",
   "State": "CA",
   "Market ranking": 8,
   "National ranking": 125
  },
  {
   "Organization": "Dignity Health",
   "City State Zip": "Irvine CA 92604",
   "lat": 33.6846,
   "lng": 117.8265,
   "Market": "Orange-High Desert",
   "Region": "West",
   "State": "CA",
   "Market ranking": 7,
   "National ranking": 125
  },
  {
   "Organization": "Dignity Health",
   "City State Zip": "Phoenix AZ 85012",
   "lat": 33.5114334,
   "lng": -112.0685027,
   "Market": "Phoenix",
   "Region": "West",
   "State": "AZ",
   "Market ranking": 4,
   "National ranking": 125
  },
  {
   "Organization": "Dignity Health",
   "City State Zip": "San Francisco CA 94107",
   "lat": 37.7618242,
   "lng": -122.3985871,
   "Market": "Sacramento",
   "Region": "West",
   "State": "CA",
   "Market ranking": 2,
   "National ranking": 125
  },
  {
   "Organization": "Tufts Medical Center",
   "City State Zip": "Boston MA 02111",
   "lat": 42.3514653,
   "lng": -71.0601767,
   "Market": "Boston",
   "Region": "East",
   "State": "MA",
   "Market ranking": 4,
   "National ranking": 126
  },
  {
   "Organization": "Advocate Health Care",
   "City State Zip": "Chicago IL 60616",
   "lat": 41.8403395,
   "lng": -87.6137011,
   "Market": "Chicago",
   "Region": "Central",
   "State": "IL",
   "Market ranking": 5,
   "National ranking": 127
  },
  {
   "Organization": "Advocate Health Care",
   "City State Zip": "Oswego IL 60543",
   "lat": 41.658687,
   "lng": -88.314212,
   "Market": "Illinois",
   "Region": "Central",
   "State": "IL",
   "Market ranking": 2,
   "National ranking": 127
  },
  {
   "Organization": "George Washington University Hospital",
   "City State Zip": "Washington DC 20037",
   "lat": 38.9042365,
   "lng": -77.0521289,
   "Market": "District of Columbia (DC)",
   "Region": "East",
   "State": "DC",
   "Market ranking": 3,
   "National ranking": 128
  },
  {
   "Organization": "HealthONE",
   "City State Zip": "Denver CO 80014",
   "lat": 39.7392,
   "lng": 104.9903,
   "Market": "Denver",
   "Region": "West",
   "State": "CO",
   "Market ranking": 4,
   "National ranking": 129
  },
  {
   "Organization": "University of Michigan Health-West",
   "City State Zip": "Ann Arbor MI 48109",
   "lat": 42.3053253,
   "lng": -83.6694169,
   "Market": "Grand Rapids",
   "Region": "Central",
   "State": "MI",
   "Market ranking": 2,
   "National ranking": 130
  },
  {
   "Organization": "Novant Health",
   "City State Zip": "Winston-Salem NC 27103",
   "lat": 36.0564654,
   "lng": -80.3324514,
   "Market": "Charlotte",
   "Region": "South",
   "State": "NC",
   "Market ranking": 2,
   "National ranking": 131
  },
  {
   "Organization": "HCA Healthcare Houston",
   "City State Zip": "Tomball TX 77375",
   "lat": 30.0971621,
   "lng": -95.6160549,
   "Market": "Houston",
   "Region": "South",
   "State": "TX",
   "Market ranking": 3,
   "National ranking": 132
  },
  {
   "Organization": "Providence",
   "City State Zip": "Los Angeles CA 90048",
   "lat": 34.0741548,
   "lng": -118.3724915,
   "Market": "Los Angeles",
   "Region": "West",
   "State": "CA",
   "Market ranking": 9,
   "National ranking": 133
  },
  {
   "Organization": "Providence",
   "City State Zip": "Irvine CA 92604",
   "lat": 33.6846,
   "lng": 117.8265,
   "Market": "Orange-High Desert",
   "Region": "West",
   "State": "CA",
   "Market ranking": 8,
   "National ranking": 133
  },
  {
   "Organization": "Providence Health & Services",
   "City State Zip": "Portland OR 97209",
   "lat": 45.5266975,
   "lng": -122.6880503,
   "Market": "Portland",
   "Region": "West",
   "State": "OR",
   "Market ranking": 3,
   "National ranking": 133
  },
  {
   "Organization": "Providence",
   "City State Zip": "Renton WA 98057",
   "lat": 47.4942738,
   "lng": -122.2081419,
   "Market": "Seattle",
   "Region": "West",
   "State": "WA",
   "Market ranking": 4,
   "National ranking": 133
  },
  {
   "Organization": "MedStar Health",
   "City State Zip": "Columbia MD 21044",
   "lat": 39.206658,
   "lng": -76.8836261,
   "Market": "Baltimore",
   "Region": "East",
   "State": "MD",
   "Market ranking": 4,
   "National ranking": 134
  },
  {
   "Organization": "MedStar Health",
   "City State Zip": "Columbia MD 21044",
   "lat": 39.206658,
   "lng": -76.8836261,
   "Market": "District of Columbia (DC)",
   "Region": "East",
   "State": "MD",
   "Market ranking": 4,
   "National ranking": 134
  },
  {
   "Organization": "Concord Hospital",
   "City State Zip": "Concord NH 03301",
   "lat": 43.1224,
   "lng": 71.3217,
   "Market": "Greater New Hampshire",
   "Region": "East",
   "State": "NH",
   "Market ranking": 2,
   "National ranking": 135
  },
  {
   "Organization": "SwedishAmerican",
   "City State Zip": "Rockford IL 61104",
   "lat": 42.2473619,
   "lng": -89.0800227,
   "Market": "Illinois",
   "Region": "Central",
   "State": "IL",
   "Market ranking": 3,
   "National ranking": 136
  },
  {
   "Organization": "Legacy Health",
   "City State Zip": "Portland OR 97209",
   "lat": 45.5266975,
   "lng": -122.6880503,
   "Market": "Portland",
   "Region": "West",
   "State": "OR",
   "Market ranking": 4,
   "National ranking": 137
  },
  {
   "Organization": "SCL Health",
   "City State Zip": "Broomfield CO 80021",
   "lat": 39.892517,
   "lng": -105.1142011,
   "Market": "Denver",
   "Region": "West",
   "State": "CO",
   "Market ranking": 5,
   "National ranking": 138
  },
  {
   "Organization": "MultiCare",
   "City State Zip": "Tacoma WA 98405",
   "lat": 47.2457073,
   "lng": -122.4773432,
   "Market": "Seattle",
   "Region": "West",
   "State": "WA",
   "Market ranking": 5,
   "National ranking": 139
  },
  {
   "Organization": "WellStar",
   "City State Zip": "Marietta GA 30066",
   "lat": 34.0198844,
   "lng": -84.5117321,
   "Market": "Atlanta",
   "Region": "South",
   "State": "GA",
   "Market ranking": 4,
   "National ranking": 140
  },
  {
   "Organization": "Franciscan Health",
   "City State Zip": "Mishawaka IN 46544",
   "lat": 41.6367762,
   "lng": -86.1548269,
   "Market": "Indianapolis",
   "Region": "Central",
   "State": "IN",
   "Market ranking": 3,
   "National ranking": 141
  },
  {
   "Organization": "OSF HealthCare",
   "City State Zip": "Peoria IL 61615",
   "lat": 40.8064627,
   "lng": -89.6345796,
   "Market": "Illinois",
   "Region": "Central",
   "State": "IL",
   "Market ranking": 4,
   "National ranking": 142
  },
  {
   "Organization": "Beebe Healthcare",
   "City State Zip": "Lewes DE 19958",
   "lat": 38.7745565,
   "lng": -75.1393498,
   "Market": "Delmarva Peninsula",
   "Region": "East",
   "State": "DE",
   "Market ranking": 3,
   "National ranking": 143
  },
  {
   "Organization": "Broward Health",
   "City State Zip": "Fort Lauderdale FL 33309",
   "lat": 26.1889227,
   "lng": -80.1763467,
   "Market": "Miami",
   "Region": "South",
   "State": "FL",
   "Market ranking": 4,
   "National ranking": 144
  },
  {
   "Organization": "Sparrow",
   "City State Zip": "Lansing MI 48912",
   "lat": 42.7376689,
   "lng": -84.5169757,
   "Market": "Lansing",
   "Region": "Central",
   "State": "MI",
   "Market ranking": 1,
   "National ranking": 145
  },
  {
   "Organization": "LifeBridge Health",
   "City State Zip": "Baltimore MD 21215",
   "lat": 39.3416271,
   "lng": -76.6816962,
   "Market": "Baltimore",
   "Region": "East",
   "State": "MD",
   "Market ranking": 5,
   "National ranking": 146
  },
  {
   "Organization": "Trinity Health of New England",
   "City State Zip": "New Haven CT 06501",
   "lat": 41.3083,
   "lng": 72.9279,
   "Market": "New Haven",
   "Region": "East",
   "State": "CT",
   "Market ranking": 3,
   "National ranking": 147
  },
  {
   "Organization": "Loyola Medicine",
   "City State Zip": "Maywood IL 60153",
   "lat": 41.8791979,
   "lng": -87.8431155,
   "Market": "Chicago",
   "Region": "Central",
   "State": "IL",
   "Market ranking": 6,
   "National ranking": 148
  },
  {
   "Organization": "AMITA Health",
   "City State Zip": "Lisle IL 60532",
   "lat": 41.794402,
   "lng": -88.0803051,
   "Market": "Chicago",
   "Region": "Central",
   "State": "IL",
   "Market ranking": 7,
   "National ranking": 149
  },
  {
   "Organization": "Presbyterian Healthcare Services",
   "City State Zip": "Albuquerque NM 87113",
   "lat": 35.1894316,
   "lng": -106.5878723,
   "Market": "Albuquerque",
   "Region": "West",
   "State": "NM",
   "Market ranking": 1,
   "National ranking": 150
  },
  {
   "Organization": "Presbyterian Healthcare Services",
   "City State Zip": "Albuquerque NM 87113",
   "lat": 35.1894316,
   "lng": -106.5878723,
   "Market": "Santa Fe",
   "Region": "West",
   "State": "NM",
   "Market ranking": 1,
   "National ranking": 150
  },
  {
   "Organization": "WakeMed Health",
   "City State Zip": "Raleigh NC 27610",
   "lat": 35.7482425,
   "lng": -78.5547283,
   "Market": "Raleigh-Durham",
   "Region": "South",
   "State": "NC",
   "Market ranking": 3,
   "National ranking": 151
  },
  {
   "Organization": "OptumCare",
   "City State Zip": "Los Angeles CA 90015",
   "lat": 34.0390107,
   "lng": -118.2672801,
   "Market": "Los Angeles",
   "Region": "West",
   "State": "CA",
   "Market ranking": 10,
   "National ranking": 152
  },
  {
   "Organization": "OptumCare",
   "City State Zip": "Orange CA 92867",
   "lat": 33.8186385,
   "lng": -117.8282121,
   "Market": "Orange-High Desert",
   "Region": "West",
   "State": "CA",
   "Market ranking": 9,
   "National ranking": 152
  },
  {
   "Organization": "OptumCare",
   "City State Zip": "Phoenix AZ 85015",
   "lat": 33.5079722,
   "lng": -112.1012912,
   "Market": "Phoenix",
   "Region": "West",
   "State": "AZ",
   "Market ranking": 5,
   "National ranking": 152
  },
  {
   "Organization": "Goshen Health",
   "City State Zip": "Goshen IN 46526",
   "lat": 41.5471471,
   "lng": -85.8690933,
   "Market": "South Bend",
   "Region": "Central",
   "State": "IN",
   "Market ranking": 3,
   "National ranking": 153
  },
  {
   "Organization": "M Health Fairview",
   "City State Zip": "Minneapolis MN 55455",
   "lat": 44.9741561,
   "lng": -93.2342,
   "Market": "Minneapolis ",
   "Region": "Central",
   "State": "MN",
   "Market ranking": 3,
   "National ranking": 154
  },
  {
   "Organization": "Saint Joseph Mercy Health System",
   "City State Zip": "Ann Arbor MI 48106",
   "lat": 42.2721345,
   "lng": -83.775457,
   "Market": "Ann Arbor",
   "Region": "Central",
   "State": "MI",
   "Market ranking": 2,
   "National ranking": 155
  },
  {
   "Organization": "The Valley Health System",
   "City State Zip": "Las Vegas NV 89119",
   "lat": 36.0765176,
   "lng": -115.1533426,
   "Market": "Las Vegas",
   "Region": "West",
   "State": "NV",
   "Market ranking": 3,
   "National ranking": 156
  },
  {
   "Organization": "Carle Foundation Hospital",
   "City State Zip": "Urbana IL 61801",
   "lat": 40.1059233,
   "lng": -88.2120315,
   "Market": "Illinois",
   "Region": "Central",
   "State": "IL",
   "Market ranking": 5,
   "National ranking": 157
  },
  {
   "Organization": "Baptist Health System",
   "City State Zip": "San Antonio TX 78217",
   "lat": 29.538966,
   "lng": -98.4239055,
   "Market": "San Antonio",
   "Region": "South",
   "State": "TX",
   "Market ranking": 3,
   "National ranking": 158
  },
  {
   "Organization": "Munson Healthcare",
   "City State Zip": "Traverse MI 49684",
   "lat": 44.7630567,
   "lng": -85.6206317,
   "Market": "Traverse City",
   "Region": "Central",
   "State": "MI",
   "Market ranking": 1,
   "National ranking": 159
  },
  {
   "Organization": "Tulane Medical Center",
   "City State Zip": "New Orleans LA 70112",
   "lat": 29.9595769,
   "lng": -90.0770127,
   "Market": "New Orleans",
   "Region": "South",
   "State": "LA",
   "Market ranking": 3,
   "National ranking": 160
  },
  {
   "Organization": "Mercy Health Cincinnati",
   "City State Zip": "Cincinnati OH 45255",
   "lat": 39.0684387,
   "lng": -84.3226488,
   "Market": "Cincinnati",
   "Region": "Central",
   "State": "OH",
   "Market ranking": 5,
   "National ranking": 161
  },
  {
   "Organization": "South Bend Clinic",
   "City State Zip": "South Bend IN 46617",
   "lat": 41.6841001,
   "lng": -86.231094,
   "Market": "South Bend",
   "Region": "Central",
   "State": "IN",
   "Market ranking": 4,
   "National ranking": 162
  },
  {
   "Organization": "Hackensack Meridian Health",
   "City State Zip": "Edison NJ 08837",
   "lat": 40.5230137,
   "lng": -74.3411515,
   "Market": "New Jersey",
   "Region": "East",
   "State": "NJ",
   "Market ranking": 4,
   "National ranking": 163
  },
  {
   "Organization": "Ascension Seton",
   "City State Zip": "Austin TX 78723",
   "lat": 30.3081307,
   "lng": -97.681943,
   "Market": "Austin",
   "Region": "South",
   "State": "TX",
   "Market ranking": 3,
   "National ranking": 164
  },
  {
   "Organization": "Ascension Borgess Hospital",
   "City State Zip": "Birmingham AL 35205",
   "lat": 33.489895,
   "lng": -86.8094808,
   "Market": "Birmingham",
   "Region": "South",
   "State": "AL",
   "Market ranking": 3,
   "National ranking": 164
  },
  {
   "Organization": "Ascension",
   "City State Zip": "Detroit MI 48201",
   "lat": 42.3314,
   "lng": 83.0458,
   "Market": "Detroit",
   "Region": "Central",
   "State": "MI",
   "Market ranking": 4,
   "National ranking": 164
  },
  {
   "Organization": "Ascension",
   "City State Zip": "Green Bay WI 54229",
   "lat": 44.5133,
   "lng": 88.0133,
   "Market": "Green Bay",
   "Region": "Central",
   "State": "WI",
   "Market ranking": 4,
   "National ranking": 164
  },
  {
   "Organization": "Ascension St. Vincent Hospital - Indianapolis",
   "City State Zip": "Indianapolis IN 46077",
   "lat": 39.7684,
   "lng": 86.1581,
   "Market": "Indianapolis",
   "Region": "Central",
   "State": "IN",
   "Market ranking": 4,
   "National ranking": 164
  },
  {
   "Organization": "Ascension Borgess Hospital",
   "City State Zip": "Kalamazoo MI 49001",
   "lat": 42.2593625,
   "lng": -85.5715015,
   "Market": "Kalamazoo",
   "Region": "Central",
   "State": "MI",
   "Market ranking": 2,
   "National ranking": 164
  },
  {
   "Organization": "Ascension",
   "City State Zip": "Milwaukee WI 53201",
   "lat": 43.0389,
   "lng": 87.9065,
   "Market": "Milwaukee",
   "Region": "Central",
   "State": "WI",
   "Market ranking": 3,
   "National ranking": 164
  },
  {
   "Organization": "Allina Health",
   "City State Zip": "Minneapolis MN 55407",
   "lat": 44.9398026,
   "lng": -93.2533339,
   "Market": "Minneapolis ",
   "Region": "Central",
   "State": "MN",
   "Market ranking": 4,
   "National ranking": 165
  },
  {
   "Organization": "UnityPoint Health",
   "City State Zip": "Peoria IL 61615",
   "lat": 40.6936,
   "lng": 89.589,
   "Market": "Illinois",
   "Region": "Central",
   "State": "IL",
   "Market ranking": 6,
   "National ranking": 166
  },
  {
   "Organization": "RWJBarnabas Health",
   "City State Zip": "West Orange NJ 07052",
   "lat": 40.7985699,
   "lng": -74.2390828,
   "Market": "New Jersey",
   "Region": "East",
   "State": "NJ",
   "Market ranking": 5,
   "National ranking": 167
  },
  {
   "Organization": "Sutter Health",
   "City State Zip": "Sacramento CA 95833",
   "lat": 38.6198298,
   "lng": -121.5198716,
   "Market": "Sacramento",
   "Region": "West",
   "State": "CA",
   "Market ranking": 3,
   "National ranking": 168
  },
  {
   "Organization": "Sutter Health",
   "City State Zip": "Sacramento CA 95833",
   "lat": 38.6198298,
   "lng": -121.5198716,
   "Market": "San Francisco",
   "Region": "West",
   "State": "CA",
   "Market ranking": 3,
   "National ranking": 168
  },
  {
   "Organization": "Sturgis Hospital",
   "City State Zip": "Grand Rapids MI 49503",
   "lat": 42.9634,
   "lng": 85.6681,
   "Market": "Grand Rapids",
   "Region": "Central",
   "State": "MI",
   "Market ranking": 3,
   "National ranking": 169
  },
  {
   "Organization": "Grand Strand Health",
   "City State Zip": "Myrtle Beach SC 29579",
   "lat": 33.7532424,
   "lng": -78.9175088,
   "Market": "South Carolina",
   "Region": "South",
   "State": "SC",
   "Market ranking": 3,
   "National ranking": 170
  },
  {
   "Organization": "University Health System",
   "City State Zip": "San Antonio TX 78229",
   "lat": 29.5060908,
   "lng": -98.577596,
   "Market": "San Antonio",
   "Region": "South",
   "State": "TX",
   "Market ranking": 4,
   "National ranking": 171
  },
  {
   "Organization": "Nuvance Health",
   "City State Zip": "New Haven CT 06501",
   "lat": 41.3083,
   "lng": 72.9279,
   "Market": "New Haven",
   "Region": "East",
   "State": "CT",
   "Market ranking": 4,
   "National ranking": 172
  },
  {
   "Organization": "Virginia Mason Franciscan Health",
   "City State Zip": "Seattle WA 98101",
   "lat": 47.6084921,
   "lng": -122.336407,
   "Market": "Seattle",
   "Region": "West",
   "State": "WA",
   "Market ranking": 6,
   "National ranking": 173
  },
  {
   "Organization": "Conway Medical Center",
   "City State Zip": "Conway SC 29526",
   "lat": 33.8360034,
   "lng": -79.0478143,
   "Market": "South Carolina",
   "Region": "South",
   "State": "SC",
   "Market ranking": 4,
   "National ranking": 174
  },
  {
   "Organization": "CHI St. Luke's Health",
   "City State Zip": "Houston TX 77030",
   "lat": 29.7050857,
   "lng": -95.4018087,
   "Market": "Houston",
   "Region": "South",
   "State": "TX",
   "Market ranking": 4,
   "National ranking": 175
  },
  {
   "Organization": "CHI Health",
   "City State Zip": "Omaha NE 68154",
   "lat": 41.2546175,
   "lng": -96.1049958,
   "Market": "Omaha",
   "Region": "Central",
   "State": "NE",
   "Market ranking": 3,
   "National ranking": 175
  },
  {
   "Organization": "Detroit Medical Center",
   "City State Zip": "Detroit MI 48201",
   "lat": 42.348495,
   "lng": -83.0602998,
   "Market": "Detroit",
   "Region": "Central",
   "State": "MI",
   "Market ranking": 5,
   "National ranking": 176
  },
  {
   "Organization": "Saint Alphonsus Health System",
   "City State Zip": "Boise ID 83706",
   "lat": 43.5921208,
   "lng": -116.1933302,
   "Market": "Boise",
   "Region": "West",
   "State": "ID",
   "Market ranking": 3,
   "National ranking": 177
  },
  {
   "Organization": "Lake Health",
   "City State Zip": "Willoughby OH 44094",
   "lat": 41.6397696,
   "lng": -81.4065011,
   "Market": "Cleveland",
   "Region": "Central",
   "State": "OH",
   "Market ranking": 3,
   "National ranking": 178
  },
  {
   "Organization": "PeaceHealth",
   "City State Zip": "Portland OR 97239",
   "lat": 45.4874111,
   "lng": -122.6875541,
   "Market": "Portland",
   "Region": "West",
   "State": "OR",
   "Market ranking": 5,
   "National ranking": 179
  },
  {
   "Organization": "University Medical Center",
   "City State Zip": "Las Vegas NV 89109",
   "lat": 36.128561,
   "lng": -115.1711298,
   "Market": "Las Vegas",
   "Region": "West",
   "State": "NV",
   "Market ranking": 4,
   "National ranking": 180
  },
  {
   "Organization": "MaineGeneral Health",
   "City State Zip": "Augusta ME 04330",
   "lat": 44.3106241,
   "lng": -69.7794897,
   "Market": "Maine",
   "Region": "East",
   "State": "ME",
   "Market ranking": 2,
   "National ranking": 181
  },
  {
   "Organization": "UNM Health System",
   "City State Zip": "Albuquerque NM 87108",
   "lat": 35.0844,
   "lng": 106.6504,
   "Market": "Albuquerque",
   "Region": "West",
   "State": "NM",
   "Market ranking": 2,
   "National ranking": 182
  },
  {
   "Organization": "Central Maine Healthcare",
   "City State Zip": "Lewiston ME 04240",
   "lat": 44.0939499,
   "lng": -70.1582944,
   "Market": "Maine",
   "Region": "East",
   "State": "ME",
   "Market ranking": 3,
   "National ranking": 183
  },
  {
   "Organization": "Adventist Health",
   "City State Zip": "Portland OR 97239",
   "lat": 45.4874111,
   "lng": -122.6875541,
   "Market": "Portland",
   "Region": "West",
   "State": "OR",
   "Market ranking": 6,
   "National ranking": 184
  },
  {
   "Organization": "Atlantic General Hospital",
   "City State Zip": "Berlin MD 21811",
   "lat": 38.3226153,
   "lng": -75.2176892,
   "Market": "Delmarva Peninsula",
   "Region": "East",
   "State": "MD",
   "Market ranking": 4,
   "National ranking": 185
  },
  {
   "Organization": "Grady Health System",
   "City State Zip": "Atlanta GA 30303",
   "lat": 33.755711,
   "lng": -84.3883717,
   "Market": "Atlanta",
   "Region": "South",
   "State": "GA",
   "Market ranking": 5,
   "National ranking": 186
  },
  {
   "Organization": "Mercy Health Grand Rapids",
   "City State Zip": "Grand Rapids MI 49503",
   "lat": 42.9616689,
   "lng": -85.6588999,
   "Market": "Grand Rapids",
   "Region": "Central",
   "State": "MI",
   "Market ranking": 4,
   "National ranking": 187
  },
  {
   "Organization": "Northern Light Health",
   "City State Zip": "Brewer ME 04412",
   "lat": 44.7767302,
   "lng": -68.7321679,
   "Market": "Maine",
   "Region": "East",
   "State": "ME",
   "Market ranking": 4,
   "National ranking": 188
  },
  {
   "Organization": "Kaiser Permanente",
   "City State Zip": "Denver CO 80206",
   "lat": 39.7271021,
   "lng": -104.9564084,
   "Market": "Denver",
   "Region": "West",
   "State": "CO",
   "Market ranking": 6,
   "National ranking": 189
  },
  {
   "Organization": "Kaiser Permanente",
   "City State Zip": "Los Angeles CA 90015",
   "lat": 34.0522,
   "lng": 118.2437,
   "Market": "Los Angeles",
   "Region": "West",
   "State": "CA",
   "Market ranking": 11,
   "National ranking": 189
  },
  {
   "Organization": "Kaiser Permanente",
   "City State Zip": "Irvine CA 92604",
   "lat": 33.6846,
   "lng": 117.8265,
   "Market": "Orange-High Desert",
   "Region": "West",
   "State": "CA",
   "Market ranking": 10,
   "National ranking": 189
  },
  {
   "Organization": "Kaiser Permanente",
   "City State Zip": "Portland OR 97239",
   "lat": 45.4874111,
   "lng": -122.6875541,
   "Market": "Portland",
   "Region": "West",
   "State": "CA",
   "Market ranking": 7,
   "National ranking": 189
  },
  {
   "Organization": "Kaiser Permanente",
   "City State Zip": "Sacramento CA 95833",
   "lat": 38.5816,
   "lng": 121.4944,
   "Market": "Sacramento",
   "Region": "West",
   "State": "CA",
   "Market ranking": 4,
   "National ranking": 189
  },
  {
   "Organization": "Kaiser Permanente",
   "City State Zip": "San Diego CA 22400",
   "lat": 32.7157,
   "lng": 117.1611,
   "Market": "San Diego",
   "Region": "West",
   "State": "CA",
   "Market ranking": 4,
   "National ranking": 189
  },
  {
   "Organization": "Kaiser Permanente",
   "City State Zip": "San Francisco CA 94016",
   "lat": 37.7749,
   "lng": 122.4194,
   "Market": "San Francisco",
   "Region": "West",
   "State": "CA",
   "Market ranking": 4,
   "National ranking": 189
  },
  {
   "Organization": "Kaiser Permanente",
   "City State Zip": "Seattle WA 98101",
   "lat": 47.6062,
   "lng": 122.3321,
   "Market": "Seattle",
   "Region": "West",
   "State": "WA",
   "Market ranking": 7,
   "National ranking": 189
  },
  {
   "Organization": "McLaren Health Care",
   "City State Zip": "Flint Township MI 48532",
   "lat": 43.0164056,
   "lng": -83.7942551,
   "Market": "Detroit",
   "Region": "Central",
   "State": "MI",
   "Market ranking": 6,
   "National ranking": 190
  },
  {
   "Organization": "The MetroHealth System",
   "City State Zip": "Cleveland OH 44109",
   "lat": 41.4513221,
   "lng": -81.7021049,
   "Market": "Cleveland",
   "Region": "Central",
   "State": "OH",
   "Market ranking": 4,
   "National ranking": 191
  },
  {
   "Organization": "Mount Carmel Health",
   "City State Zip": "Columbus OH 43213",
   "lat": 39.9721714,
   "lng": -82.8694464,
   "Market": "Columbus",
   "Region": "Central",
   "State": "OH",
   "Market ranking": 3,
   "National ranking": 192
  },
  {
   "Organization": "Brookwood Baptist Health",
   "City State Zip": "Birmingham AL 35222",
   "lat": 33.5251664,
   "lng": -86.7667756,
   "Market": "Birmingham",
   "Region": "South",
   "State": "AL",
   "Market ranking": 4,
   "National ranking": 193
  },
  {
   "Organization": "Denver Health",
   "City State Zip": "Denver CO 80204",
   "lat": 39.7380371,
   "lng": -105.0265195,
   "Market": "Denver",
   "Region": "West",
   "State": "CO",
   "Market ranking": 7,
   "National ranking": 194
  },
  {
   "Organization": "Steward Health Care",
   "City State Zip": "Boston MA 02108",
   "lat": 42.3601,
   "lng": 71.0589,
   "Market": "Boston",
   "Region": "East",
   "State": "MA",
   "Market ranking": 5,
   "National ranking": 195
  },
  {
   "Organization": "Sentara Healthcare",
   "City State Zip": "Norfolk VA 23502",
   "lat": 36.8574869,
   "lng": -76.2073525,
   "Market": "Virginia",
   "Region": "South",
   "State": "VA",
   "Market ranking": 4,
   "National ranking": 196
  },
  {
   "Organization": "Lovelace Health System",
   "City State Zip": "Albuquerque NM 87108",
   "lat": 35.0734065,
   "lng": -106.5760857,
   "Market": "Albuquerque",
   "Region": "West",
   "State": "NM",
   "Market ranking": 3,
   "National ranking": 197
  },
  {
   "Organization": "HCA Midwest Health",
   "City State Zip": "Kansas City MO 64108",
   "lat": 39.0997,
   "lng": 94.5786,
   "Market": "Kansas City",
   "Region": "Central",
   "State": "KS",
   "Market ranking": 4,
   "National ranking": 198
  },
  {
   "Organization": "West Valley Medical Center (HCA)",
   "City State Zip": "Caldwell ID 83605",
   "lat": 43.6686454,
   "lng": -116.6462445,
   "Market": "Boise",
   "Region": "West",
   "State": "ID",
   "Market ranking": 4,
   "National ranking": 199
  },
  {
   "Organization": "CHRISTUS St. Vincent Health System",
   "City State Zip": "Santa Fe NM 87501",
   "lat": 35.687,
   "lng": 105.9378,
   "Market": "Santa Fe",
   "Region": "West",
   "State": "NM",
   "Market ranking": 2,
   "National ranking": 200
  },
  {
   "Organization": "Truman Medical Centers\/University Health",
   "City State Zip": "Kansas City MO 64108",
   "lat": 39.0795392,
   "lng": -94.5985613,
   "Market": "Kansas City",
   "Region": "Central",
   "State": "MO",
   "Market ranking": 5,
   "National ranking": 201
  }
 ]



$(document).ready(function () {

  // MARKET

  var cleanmarket = markers1.filter((markers1, index, self) =>
  index === self.findIndex((t) => (t.Market === markers1.Market)))

  var listMarket = '<option value=""> All </option>';

  for (var i = 0; i < cleanmarket.length; i++) {
      listMarket += "<option value='" + cleanmarket[i].Market + "'>" + cleanmarket[i].Market + "</option>";
  }

  $("#market").append(listMarket);

  // STATE

  var cleanstate = markers1.filter((markers1, index, self) =>
  index === self.findIndex((t) => (t.State === markers1.State)))

  var listState = '<option value=""> All </option>';

  for (var i = 0; i < cleanstate.length; i++) {
      listState += "<option value='" + cleanstate[i].State + "'>" + cleanstate[i].State + "</option>";
  }

  $("#state").append(listState);


  // STATE

  var cleanregion = markers1.filter((markers1, index, self) =>
  index === self.findIndex((t) => (t.Region === markers1.Region)))

  var listRegion = '<option value=""> All </option>';

  for (var i = 0; i < cleanregion.length; i++) {
      listRegion += "<option value='" + cleanregion[i].Region + "'>" + cleanregion[i].Region + "</option>";
  }

  $("#region").append(listRegion);


});



// console.log(cleanmarket);

// init map
function init() {
    var center = new google.maps.LatLng(35.117500, -89.971107);
    var mapOptions = {
        zoom: 4,
        center: center,
        
    };

    map = new google.maps.Map(document.getElementById('map'), mapOptions);
    for (i = 0; i < markers1.length; i++) {
        addMarker(markers1[i]);
    }
}

const icon = {
  url: 'assets/images/pin.png', // url
  scaledSize: new google.maps.Size(24, 35), // scaled size
};

// add markers to map
function addMarker(marker) {
    var title = marker.Organization;
    var category = marker.Market;
    var region = marker.Region;
    var state = marker.State;
    var ranking = marker["National ranking"];
    var rank = marker.Rank;
    var pos = new google.maps.LatLng(marker.lat, marker.lng);
    var content = marker;

    marker1 = new google.maps.Marker({
        title: title,
        category: category,
        region: region,
        state: state,
        ranking: ranking,
        rank: rank,
        position: pos,
        map: map,
        icon: icon
    });

    gmarkers1.push(marker1);

    var infowindow = new google.maps.InfoWindow({
      content: 
      '<div class="map-info">' + 
      '<div class="title">' + title + '</div>' +
      '<div class="ranking"> <p>National <br/> Ranking </p>' + ranking + '</div>' +
      '<div class="market"> <p>Market</p>' + category + '</div>' +
      '</div>'
  });

    // marker click listener
    google.maps.event.addListener(marker1, 'click', (function (marker1, content) {
        return function () {
            infowindow.setContent(content);
            infowindow.open(map, marker1);
            // map.panTo(this.getPosition()); // pan to lat/long of map marker
            map.setZoom(10);
        }
    })(marker1, content));
}


// TABLE

var table =  $('#myTable');
var max_size=markers1.length;
var sta = 0;
var elements_per_page = 10;
var limit = elements_per_page;

  goFun(sta,limit);

  function goFun(sta,limit){
    for(var i=sta;i<limit;i++){
    var tab='<tr><td>'+ 
    markers1[i].Organization+"\n"+'</td><td>'+
    markers1[i]['National ranking']+"\n"+'</td><td>'+
    markers1[i]['Market ranking']+"\n"+'</td><td>'+
    markers1[i].Market+"\n"+'</td><td>'+
    '</tr>';

     $('#myTable').append(tab)

    }
  }

//   $('#nextValue').click(function(){

//     var next = limit;

//     if(max_size>=next) {

//     def = limit+elements_per_page;

//      limit = def

//     table.empty();

//     if(limit > max_size) {

//     def = max_size;

//     }
   
//     goFun(next,def);
    
//     }

//   });

//     $('#PreValue').click(function(){

//     var pre = limit-(2*elements_per_page);

//     if(pre>=0) {

//     limit = limit-elements_per_page;

//     table.empty();

//     goFun(pre,limit); 

//     }

//   });

// var number = Math.round(markers1.length / elements_per_page);

// for(i=0;i<=number;i++) {

// $('.nav').append('<button class="btn">' + i + '</button>');

// }

// $('.nav button').click(function(){

//  var start = $(this).text();

//  table.empty();

//  limit = 10*(parseInt(start)+1) > max_size ? max_size: 10*(parseInt(start)+1)

// goFun(start*10,limit); 

//   });



// filter markers by category
filterMarkers = function (category) {
    for (i = 0; i < markers1.length; i++) {
        marker = gmarkers1[i];
        // If is same category or category not picked
        if (marker.category == category || category.length === 0 ) {
          
            marker.setVisible(true);



        }
        // categories don't match 
        else {
            marker.setVisible(false);
            // map.setCenter(41.4993, 81.6944, 5);
            // map.setZoom(10);

            

        }
    }
}

// filter markers by State
filterState = function (state) {
  for (i = 0; i < markers1.length; i++) {
      marker = gmarkers1[i];
      // If is same State or State not picked
      if (marker.state == state || state.length === 0 ) {
          marker.setVisible(true);
      }
      // States don't match 
      else {
          marker.setVisible(false);
      }
  }
}

// filter markers by Region
filterRegion = function (region) {
  for (i = 0; i < markers1.length; i++) {
      marker = gmarkers1[i];
      // If is same Region or Region not picked
      if (marker.region == region || region.length === 0 ) {
          marker.setVisible(true);
      }
      // Regions don't match 
      else {
          marker.setVisible(false);
      }
  }
}


// filter markers by Top10
topten = function (rank) {
  for (i = 0; i < markers1.length; i++) {
    marker = gmarkers1[i];
    // If is same Region or Region not picked
    if (marker.rank == rank || rank.length === 0 ) {
        marker.setVisible(true);
    }
    // Regions don't match 
    else {
        marker.setVisible(false);
    }
}
}

toptwenty = function (rank) {
  for (i = 0; i < markers1.length; i++) {
    marker = gmarkers1[i];
    // If is same Region or Region not picked
    if (marker.rank == "Topten" || marker.rank == "Top25" ) {
        marker.setVisible(true);
    }
    // Regions don't match 
    else {
        marker.setVisible(false);
    }
}
}


topfifty = function (rank) {
  for (i = 0; i < markers1.length; i++) {
    marker = gmarkers1[i];
    // If is same Region or Region not picked
    if (marker.rank == "Topten" || marker.rank == "Top25" || marker.rank == "Top50" ) {
        marker.setVisible(true);
    }
    // Regions don't match 
    else {
        marker.setVisible(false);
    }
}
}

function Clear(){

  for (i = 0; i < markers1.length; i++) {
    marker = gmarkers1[i];
   
    marker.setVisible(true);
  
   
}

}

// filter markers by All
function showAll(){

  Clear()

}


 function clearFilter(){

  Clear()

}


// Init map

init();



