import { Train } from './train';
export const TRAINS: Train[] = [
      { id: 1,
        name: '1',
        color: "white",
        backgroundColor: "red",
        map: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/NYCS_map_1.svg/250px-NYCS_map_1.svg.png",
        opened: 1904,
        stock: 310,
        stations: 38,
        boroughs: "Manhattan, Bronx",
        ontime: 79.8,
        description: '',
        rating: null
      },
      { id: 2,
        name: '2',
        color: "white",
        backgroundColor: "red",
        map: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/NYCS_map_2.svg/250px-NYCS_map_2.svg.png",
        opened: 1904,
        stock: 340,
        stations: 71,
        boroughs: "Brooklyn, Manhattan, Bronx",
        ontime: 71.80,
        description: '',
        rating: null
      },
      { id: 3,
        name: '3',
        color: "white",
        backgroundColor: "red",
        map: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/NYCS_map_3.svg/250px-NYCS_map_3.svg.png",
        opened: 1904,
        stock: 250,
        stations: 34,
        boroughs: "Brooklyn, Manhattan, Bronx",
        ontime: 77.4,
        description: '',
        rating: null
      },
      { id: 4,
        name: '4',
        color: "white",
        backgroundColor: "green",
        map: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/NYCS_map_4.svg/250px-NYCS_map_4.svg.png",
        opened: 1917,
        stock: 220,
        stations: 54,
        boroughs: "Brooklyn, Manhattan, Bronx",
        ontime: 71.3,
        description: 'Grand Central Station, Lexington Avenue',
        rating: null
      },
      { id: 5,
        name: '5',
        color: "white",
        backgroundColor: "green",
        map: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/NYCS_map_5.svg/250px-NYCS_map_5.svg.png",
        opened: 1904,
        stock: 340,
        stations: 53,
        boroughs: "Brooklyn, Manhattan, Bronx",
        ontime: 67.5,
        description: 'Grand Central Station, Lexington Avenue',
        rating: 2
      },
      { id: 6,
        name: '6',
        color: "white",
        backgroundColor: "green",
        map: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/NYCS_map_6.svg/250px-NYCS_map_6.svg.png",
        opened: 1904,
        stock: 360,
        stations: 38,
        boroughs: "Manhattan, Bronx",
        ontime: 68.8,
        description: 'Grand Central Station, Lexington Avenue, East Village',
        rating: 1
      },
      { id: 7,
        name: '7',
        color: "white",
        backgroundColor: "purple",
        map: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/NYCS_map_7.svg/250px-NYCS_map_7.svg.png",
        opened: 1915,
        stock: 374,
        stations: 22,
        boroughs: "Manhattan, Queens",
        ontime: 75.7,
        description: ' Flushing, Times Square, Grand Central Station, Queensboro Plaza, Hudson Yards, Hells Kitchen, Javits Center',
        rating: 5
      },
      { id: 8,
        name: 'A',
        color: "white",
        backgroundColor: "blue",
        map: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/NYCS_map_A.svg/250px-NYCS_map_A.svg.png",
        opened: 1932,
        stock: 296,
        stations: 66,
        boroughs: "Brooklyn, Manhattan, Queens",
        ontime: 69.6,
        description: 'JFK Airport, Rockaways, Inwood, Times Square, Greenwich Village, Downtown Brooklyn',
        rating: 2
      },
      { id: 9,
        name: 'B',
        color: "white",
        backgroundColor: "orange",
        map: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/NYCS_map_B.svg/250px-NYCS_map_B.svg.png",
        opened: 1940,
        stock: 200,
        stations: 37,
        boroughs: "Brooklyn, Manhattan",
        ontime: 79.8,
        description: '',
        rating: null
      },
      { id: 10,
        name: 'C',
        color: "white",
        backgroundColor: "blue",
        map: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/NYCS_map_C.svg/250px-NYCS_map_C.svg.png",
        opened: 1933,
        stock: 144,
        stations: 50,
        boroughs: "Brooklyn, Manhattan",
        ontime: 80.9,
        description: '',
        rating: null
      },
      { id: 11,
        name: 'D',
        color: "white",
        backgroundColor: "orange",
        map: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/NYCS_map_D.svg/250px-NYCS_map_D.svg.png",
        opened: 1940,
        stock: 232,
        stations: 41,
        boroughs: "Brooklyn, Manhattan, Bronx",
        ontime: 82.3,
        description: 'Downtown Brooklyn, Lower East Side',
        rating: null
      },
      { id: 12,
        name: 'E',
        color: "white",
        backgroundColor: "blue",
        map: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/NYCS_map_E.svg/250px-NYCS_map_E.svg.png",
        opened: 1933,
        stock: 260,
        stations: 32,
        boroughs: "Manhattan, Queens",
        ontime: 74.5,
        description: 'World Trade Center, Penn Station',
        rating: null
      },
      { id: 13,
        name: 'F',
        color: "white",
        backgroundColor: "orange",
        map: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/NYCS_map_F.svg/250px-NYCS_map_F.svg.png",
        opened: 1940,
        stock: 370,
        stations: 45,
        boroughs: "Brooklyn, Manhattan, Queens",
        ontime: 70.9,
        description: 'Jamaica, Lower East Side, Red Hook, Greenwich Village',
        rating: 3
      },
      { id: 14,
        name: 'G',
        color: "white",
        backgroundColor: "lime",
        map: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/NYCS_map_G.svg/250px-NYCS_map_G.svg.png",
        opened: 1933,
        stock: 52,
        stations: 21,
        boroughs: "Brooklyn, Queens",
        ontime: 81,
        description: 'Greenpoint, Fort Greene, Downtown Brooklyn, Bed-Stuy, Court Square, Red Hook, Carroll Gardens',
        rating: 5
      },
      { id: 15,
        name: 'J',
        color: "white",
        backgroundColor: "brown",
        map: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/NYCS_map_J.svg/250px-NYCS_map_J.svg.png",
        opened: 1893,
        stock: 160,
        stations: 30,
        boroughs: "Brooklyn, Manhattan, Queens",
        ontime: 81.7,
        description: '',
        rating: null
      },
      { id: 16,
        name: 'L',
        color: "white",
        backgroundColor: "gray",
        map: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/NYCS_map_L.svg/250px-NYCS_map_L.svg.png",
        opened: 1924,
        stock: 192,
        stations: 24,
        boroughs: "Brooklyn, Manhattan",
        ontime: 82,
        description: '14th Street, Union Square, East Village, Williamsburg, Canarsie',
        rating: null
      },
      { id: 17,
        name: 'M',
        color: "white",
        backgroundColor: "orange",
        map: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/NYCS_map_M.svg/250px-NYCS_map_M.svg.png",
        opened: 1932,
        stock: 184,
        stations: 50,
        boroughs: "Brooklyn, Manhattan, Queens",
        ontime: 78.5,
        description: '',
        rating: null
      },
      { id: 18,
        name: 'N',
        color: "black",
        backgroundColor: "yellow",
        map: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/NYCS_map_N.svg/250px-NYCS_map_N.svg.png",
        opened: 1915,
        stock: 324,
        stations: 45,
        boroughs: "Brooklyn, Manhattan, Queens",
        ontime: 80.9,
        description: 'Union Square, Broadway, Astoria, Coney Island',
        rating: null
      },
      { id: 19,
        name: 'Q',
        color: "black",
        backgroundColor: "yellow",
        map: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/NYCS_map_Q.svg/250px-NYCS_map_Q.svg.png",
        opened: 1878,
        stock: 210,
        stations: 34,
        boroughs: "Brooklyn, Manhattan",
        ontime: 80,
        description: 'Union Square, Second Avenue, Broadway',
        rating: 5
      },
      { id: 20,
        name: 'R',
        color: "black",
        backgroundColor: "yellow",
        map: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/NYCS_map_R.svg/250px-NYCS_map_R.svg.png",
        opened: 1916,
        stock: 240,
        stations: 45,
        boroughs: "Brooklyn, Manhattan, Queens",
        ontime: 81.3,
        description: 'Union Square, NYU, Broadway, Bay Ridge, Greenwich Village',
        rating: null
      },
      { id: 21,
        name: 'S',
        color: "white",
        backgroundColor: "gray",
        map: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/NYCS_map_S_42nd.svg/250px-NYCS_map_S_42nd.svg.png",
        opened: 1932,
        stock: 10,
        stations: 2,
        boroughs: "Manhattan",
        ontime: 90.5,
        description: 'Times Square, Grand Central Station, 42nd Street',
        rating: 1
      },
      { id: 22,
        name: 'W',
        color: "black",
        backgroundColor: "yellow",
        map: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/NYCS_map_W.svg/250px-NYCS_map_W.svg.png",
        opened: 2016,
        stock: 324,
        stations: 50,
        boroughs: "Manhattan, Queens",
        ontime: null,
        description: 'Astoria, Broadway',
        rating: null
      },
      { id: 23,
        name: 'Z',
        color: "white",
        backgroundColor: "brown",
        map: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/NYCS_map_J.svg/250px-NYCS_map_J.svg.png",
        opened: 1924,
        stock: 160,
        stations: 44,
        boroughs: "Brooklyn, Manhattan, Queens",
        ontime: 81.7,
        description: '',
        rating: null
      }

    ];