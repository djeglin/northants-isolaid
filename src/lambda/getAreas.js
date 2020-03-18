const mockData = [
  {
    userId: 4,
    points: [
      {
        longitude: -0.90351,
        latitude: 52.32905,
      },
      {
        longitude: -0.911621,
        latitude: 52.332722,
      },
      {
        longitude: -0.895656,
        latitude: 52.332564,
      },
      {
        longitude: -0.898317,
        latitude: 52.321024,
      },
      {
        longitude: -0.914539,
        latitude: 52.32286,
      },
    ],
  },
  {
    userId: 5,
    points: [
      {
        longitude: -0.864273,
        latitude: 52.293692,
      },
      {
        longitude: -0.837322,
        latitude: 52.294532,
      },
      {
        longitude: -0.840455,
        latitude: 52.283533,
      },
      {
        longitude: -0.850798,
        latitude: 52.278597,
      },
      {
        longitude: -0.865947,
        latitude: 52.282693,
      },
      {
        longitude: -0.87174,
        latitude: 52.289361,
      },
      {
        longitude: -0.846568,
        latitude: 52.264546,
      },
      {
        longitude: -0.868412,
        latitude: 52.268118,
      },
      {
        longitude: -0.855174,
        latitude: 52.275983,
      },
      {
        longitude: -0.846954,
        latitude: 52.273817,
      },
    ],
  },
  {
    userId: 6,
    points: [
      {
        longitude: -1.004919,
        latitude: 52.133103,
      },
      {
        longitude: -1.003546,
        latitude: 52.117611,
      },
      {
        longitude: -0.973333,
        latitude: 52.121195,
      },
      {
        longitude: -0.975737,
        latitude: 52.13363,
      },
    ],
  },
  {
    userId: 7,
    points: [
      {
        longitude: -0.59349,
        latitude: 52.30961,
      },
      {
        longitude: -0.602502,
        latitude: 52.314018,
      },
      {
        longitude: -0.577268,
        latitude: 52.316012,
      },
      {
        longitude: -0.580873,
        latitude: 52.303837,
      },
      {
        longitude: -0.604047,
        latitude: 52.299743,
      },
    ],
  },
  {
    userId: 8,
    points: [
      {
        longitude: -1.093595,
        latitude: 52.433734,
      },
      {
        longitude: -1.020124,
        latitude: 52.433734,
      },
      {
        longitude: -1.024244,
        latitude: 52.402325,
      },
      {
        longitude: -1.094281,
        latitude: 52.403163,
      },
    ],
  },
  {
    userId: 12,
    points: [
      {
        longitude: -0.875077,
        latitude: 52.250431,
      },
      {
        longitude: -0.870185,
        latitude: 52.250904,
      },
      {
        longitude: -0.870271,
        latitude: 52.248329,
      },
      {
        longitude: -0.874219,
        latitude: 52.248434,
      },
    ],
  },
  {
    userId: 13,
    points: [
      {
        longitude: -0.940322,
        latitude: 52.216444,
      },
      {
        longitude: -0.937833,
        latitude: 52.21647,
      },
      {
        longitude: -0.937532,
        latitude: 52.214183,
      },
      {
        longitude: -0.940086,
        latitude: 52.214459,
      },
    ],
  },
  {
    userId: 14,
    points: [
      {
        longitude: -0.94416,
        latitude: 52.24317,
      },
      {
        longitude: -0.954588,
        latitude: 52.244799,
      },
      {
        longitude: -0.934332,
        latitude: 52.245482,
      },
      {
        longitude: -0.933752,
        latitude: 52.235054,
      },
      {
        longitude: -0.955447,
        latitude: 52.237756,
      },
    ],
  },
  {
    userId: 15,
    points: [
      {
        longitude: -0.89479,
        latitude: 52.30467,
      },
      {
        longitude: -0.900381,
        latitude: 52.306988,
      },
      {
        longitude: -0.887163,
        latitude: 52.307827,
      },
      {
        longitude: -0.887163,
        latitude: 52.301582,
      },
      {
        longitude: -0.911621,
        latitude: 52.332722,
      },
      {
        longitude: -0.895656,
        latitude: 52.332564,
      },
      {
        longitude: -0.898317,
        latitude: 52.321024,
      },
      {
        longitude: -0.837322,
        latitude: 52.294532,
      },
      {
        longitude: -0.840455,
        latitude: 52.283533,
      },
      {
        longitude: -0.850798,
        latitude: 52.278597,
      },
      {
        longitude: -0.865947,
        latitude: 52.282693,
      },
      {
        longitude: -0.87174,
        latitude: 52.289361,
      },
      {
        longitude: -0.781071,
        latitude: 52.375091,
      },
      {
        longitude: -0.768111,
        latitude: 52.374305,
      },
      {
        longitude: -0.770686,
        latitude: 52.367964,
      },
      {
        longitude: -0.783303,
        latitude: 52.368593,
      },
    ],
  },
  {
    userId: 16,
    points: [
      {
        longitude: -0.85937,
        latitude: 52.25353,
      },
      {
        longitude: -0.869884,
        latitude: 52.255694,
      },
      {
        longitude: -0.842075,
        latitude: 52.254538,
      },
      {
        longitude: -0.844049,
        latitude: 52.242978,
      },
      {
        longitude: -0.879326,
        latitude: 52.243661,
      },
    ],
  },
  {
    userId: 17,
    points: [
      {
        longitude: -0.90255,
        latitude: 52.22287,
      },
      {
        longitude: -0.918386,
        latitude: 52.229126,
      },
      {
        longitude: -0.895555,
        latitude: 52.227286,
      },
      {
        longitude: -0.899503,
        latitude: 52.218663,
      },
      {
        longitude: -0.918987,
        latitude: 52.222397,
      },
    ],
  },
  {
    userId: 18,
    points: [
      {
        longitude: -0.94395,
        latitude: 52.25099,
      },
      {
        longitude: -0.95146,
        latitude: 52.2543,
      },
      {
        longitude: -0.934037,
        latitude: 52.255614,
      },
      {
        longitude: -0.935753,
        latitude: 52.248415,
      },
      {
        longitude: -0.950859,
        latitude: 52.248363,
      },
    ],
  },
  {
    userId: 19,
    points: [
      {
        longitude: -0.70304,
        latitude: 52.48608,
      },
      {
        longitude: -0.705872,
        latitude: 52.503558,
      },
      {
        longitude: -0.655061,
        latitude: 52.499483,
      },
      {
        longitude: -0.671197,
        latitude: 52.483177,
      },
      {
        longitude: -0.724584,
        latitude: 52.486836,
      },
    ],
  },
  {
    userId: 20,
    points: [
      {
        longitude: -0.884682,
        latitude: 52.253609,
      },
      {
        longitude: -0.868718,
        latitude: 52.253609,
      },
      {
        longitude: -0.869404,
        latitude: 52.247303,
      },
      {
        longitude: -0.887833,
        latitude: 52.248403,
      },
    ],
  },
  {
    userId: 22,
    points: [
      {
        longitude: -0.910102,
        latitude: 52.338847,
      },
      {
        longitude: -0.886928,
        latitude: 52.338743,
      },
      {
        longitude: -0.890104,
        latitude: 52.326501,
      },
      {
        longitude: -0.902721,
        latitude: 52.317426,
      },
      {
        longitude: -0.913106,
        latitude: 52.327183,
      },
      {
        longitude: -0.899358,
        latitude: 52.357546,
      },
      {
        longitude: -0.891762,
        latitude: 52.357375,
      },
      {
        longitude: -0.892384,
        latitude: 52.355305,
      },
      {
        longitude: -0.899272,
        latitude: 52.355554,
      },
      {
        longitude: -0.795896,
        latitude: 52.279827,
      },
      {
        longitude: -0.809286,
        latitude: 52.280195,
      },
      {
        longitude: -0.828598,
        latitude: 52.287861,
      },
      {
        longitude: -0.810917,
        latitude: 52.295053,
      },
      {
        longitude: -0.800274,
        latitude: 52.300092,
      },
      {
        longitude: -0.791605,
        latitude: 52.298675,
      },
      {
        longitude: -0.934958,
        latitude: 52.292525,
      },
      {
        longitude: -0.931225,
        latitude: 52.292157,
      },
      {
        longitude: -0.929293,
        latitude: 52.289493,
      },
      {
        longitude: -0.933199,
        latitude: 52.288627,
      },
      {
        longitude: -0.935945,
        latitude: 52.288233,
      },
      {
        longitude: -0.936847,
        latitude: 52.290582,
      },
      {
        longitude: -0.93777,
        latitude: 52.284588,
      },
      {
        longitude: -0.938156,
        latitude: 52.284352,
      },
      {
        longitude: -0.943906,
        latitude: 52.282068,
      },
      {
        longitude: -0.952103,
        latitude: 52.282304,
      },
      {
        longitude: -0.95176,
        latitude: 52.28766,
      },
      {
        longitude: -0.944894,
        latitude: 52.288526,
      },
      {
        longitude: -0.940387,
        latitude: 52.288053,
      },
    ],
  },
  {
    userId: 23,
    points: [
      {
        longitude: -0.873793,
        latitude: 52.250436,
      },
      {
        longitude: -0.878857,
        latitude: 52.2502,
      },
      {
        longitude: -0.88058,
        latitude: 52.246223,
      },
      {
        longitude: -0.87993,
        latitude: 52.247047,
      },
      {
        longitude: -0.878514,
        latitude: 52.24999,
      },
    ],
  },
  {
    userId: 25,
    points: [
      {
        longitude: -0.883409,
        latitude: 52.242698,
      },
      {
        longitude: -0.878946,
        latitude: 52.250291,
      },
      {
        longitude: -0.870627,
        latitude: 52.256785,
      },
      {
        longitude: -0.873202,
        latitude: 52.257993,
      },
      {
        longitude: -0.879679,
        latitude: 52.251241,
      },
      {
        longitude: -0.879679,
        latitude: 52.251241,
      },
      {
        longitude: -0.887279,
        latitude: 52.243175,
      },
    ],
  },
  {
    userId: 26,
    points: [
      {
        longitude: -0.898384,
        latitude: 52.280581,
      },
      {
        longitude: -0.899908,
        latitude: 52.279517,
      },
      {
        longitude: -0.899242,
        latitude: 52.279216,
      },
      {
        longitude: -0.897504,
        latitude: 52.280358,
      },
      {
        longitude: -0.88052,
        latitude: 52.26345,
      },
      {
        longitude: -0.883357,
        latitude: 52.264574,
      },
      {
        longitude: -0.877649,
        latitude: 52.264022,
      },
      {
        longitude: -0.878443,
        latitude: 52.263208,
      },
      {
        longitude: -0.880761,
        latitude: 52.263182,
      },
      {
        longitude: -0.883507,
        latitude: 52.264193,
      },
    ],
  },
  {
    userId: 27,
    points: [
      {
        longitude: -0.8685,
        latitude: 52.24286,
      },
      {
        longitude: -0.8699,
        latitude: 52.246021,
      },
      {
        longitude: -0.86799,
        latitude: 52.242368,
      },
      {
        longitude: -0.86844,
        latitude: 52.242237,
      },
      {
        longitude: -0.870415,
        latitude: 52.245718,
      },
      {
        longitude: -0.86816,
        latitude: 52.24231,
      },
      {
        longitude: -0.86816,
        latitude: 52.24231,
      },
      {
        longitude: -0.868165,
        latitude: 52.242106,
      },
      {
        longitude: -0.871448,
        latitude: 52.241409,
      },
      {
        longitude: -0.87177,
        latitude: 52.241856,
      },
    ],
  },
  {
    userId: 28,
    points: [
      {
        longitude: -0.86913,
        latitude: 52.25036,
      },
      {
        longitude: -0.857934,
        latitude: 52.250893,
      },
      {
        longitude: -0.870808,
        latitude: 52.247214,
      },
      {
        longitude: -0.856389,
        latitude: 52.251208,
      },
      {
        longitude: -0.857204,
        latitude: 52.25528,
      },
      {
        longitude: -0.85729,
        latitude: 52.255175,
      },
      {
        longitude: -0.868791,
        latitude: 52.255228,
      },
      {
        longitude: -0.872568,
        latitude: 52.255096,
      },
      {
        longitude: -0.874843,
        latitude: 52.254334,
      },
      {
        longitude: -0.874928,
        latitude: 52.254334,
      },
      {
        longitude: -0.876387,
        latitude: 52.252784,
      },
      {
        longitude: -0.877718,
        latitude: 52.251471,
      },
    ],
  },
  {
    userId: 29,
    points: [
      {
        longitude: -0.91273,
        latitude: 52.27446,
      },
      {
        longitude: -0.914006,
        latitude: 52.275262,
      },
      {
        longitude: -0.91098,
        latitude: 52.274278,
      },
      {
        longitude: -0.910615,
        latitude: 52.27391,
      },
      {
        longitude: -0.911474,
        latitude: 52.273582,
      },
      {
        longitude: -0.914413,
        latitude: 52.275092,
      },
      {
        longitude: -0.914134,
        latitude: 52.275394,
      },
      {
        longitude: -0.914006,
        latitude: 52.276696,
      },
      {
        longitude: -0.910366,
        latitude: 52.276587,
      },
      {
        longitude: -0.911622,
        latitude: 52.275058,
      },
      {
        longitude: -0.914003,
        latitude: 52.276049,
      },
    ],
  },
  {
    userId: 30,
    points: [
      {
        longitude: -0.91237,
        latitude: 2.27629,
      },
      {
        longitude: -0.873337,
        latitude: 52.253942,
      },
      {
        longitude: -0.876116,
        latitude: 52.251814,
      },
      {
        longitude: -0.876395,
        latitude: 52.251972,
      },
      {
        longitude: -0.873766,
        latitude: 52.254146,
      },
    ],
  },
  {
    userId: 31,
    points: [
      {
        longitude: -0.861575,
        latitude: 52.27622,
      },
      {
        longitude: -0.847842,
        latitude: 52.27664,
      },
      {
        longitude: -0.841577,
        latitude: 52.262091,
      },
      {
        longitude: -0.860717,
        latitude: 52.262143,
      },
      {
        longitude: -0.832944,
        latitude: 52.261961,
      },
      {
        longitude: -0.83097,
        latitude: 52.24809,
      },
      {
        longitude: -0.862213,
        latitude: 52.244359,
      },
      {
        longitude: -0.863844,
        latitude: 52.26007,
      },
    ],
  },
  {
    userId: 32,
    points: [
      {
        longitude: -1.13362,
        latitude: 52.34435,
      },
      {
        longitude: -0.798812,
        latitude: 52.260465,
      },
      {
        longitude: -0.824218,
        latitude: 52.260071,
      },
      {
        longitude: -0.823789,
        latitude: 52.271365,
      },
      {
        longitude: -0.802631,
        latitude: 52.271811,
      },
      {
        longitude: -0.845289,
        latitude: 52.274989,
      },
      {
        longitude: -0.832415,
        latitude: 52.274253,
      },
      {
        longitude: -0.833573,
        latitude: 52.267215,
      },
      {
        longitude: -0.843487,
        latitude: 52.267268,
      },
    ],
  },
  {
    userId: 33,
    points: [
      {
        longitude: -0.941856,
        latitude: 52.219899,
      },
      {
        longitude: -0.939002,
        latitude: 52.220083,
      },
      {
        longitude: -0.939882,
        latitude: 52.217585,
      },
      {
        longitude: -0.941363,
        latitude: 52.217585,
      },
      {
        longitude: -0.941233,
        latitude: 52.218594,
      },
      {
        longitude: -0.93943,
        latitude: 52.218713,
      },
      {
        longitude: -0.939816,
        latitude: 52.218305,
      },
      {
        longitude: -0.941233,
        latitude: 52.218292,
      },
    ],
  },
  {
    userId: 34,
    points: [
      {
        longitude: -0.87596,
        latitude: 52.2453,
      },
      {
        longitude: -0.873784,
        latitude: 52.245832,
      },
      {
        longitude: -0.872024,
        latitude: 52.244058,
      },
      {
        longitude: -0.873033,
        latitude: 52.243467,
      },
    ],
  },
  {
    userId: 35,
    points: [
      {
        longitude: -1.003013,
        latitude: 52.146418,
      },
      {
        longitude: -0.976748,
        latitude: 52.146418,
      },
      {
        longitude: -0.971255,
        latitude: 52.12271,
      },
      {
        longitude: -0.970947,
        latitude: 52.116742,
      },
      {
        longitude: -1.011974,
        latitude: 52.11611,
      },
    ],
  },
  {
    userId: 36,
    points: [
      {
        longitude: -0.882189,
        latitude: 52.246682,
      },
      {
        longitude: -0.878606,
        latitude: 52.250321,
      },
      {
        longitude: -0.879494,
        latitude: 52.250299,
      },
      {
        longitude: -0.882189,
        latitude: 52.246682,
      },
      {
        longitude: -0.876232,
        latitude: 52.248364,
      },
    ],
  },
  {
    userId: 37,
    points: [
      {
        longitude: -0.886442,
        latitude: 52.254546,
      },
      {
        longitude: -0.884425,
        latitude: 52.255545,
      },
      {
        longitude: -0.881893,
        latitude: 52.253784,
      },
      {
        longitude: -0.883824,
        latitude: 52.252576,
      },
    ],
  },
  {
    userId: 38,
    points: [
      {
        longitude: -0.857556,
        latitude: 52.264759,
      },
      {
        longitude: -0.863865,
        latitude: 52.264877,
      },
      {
        longitude: -0.863865,
        latitude: 52.266374,
      },
      {
        longitude: -0.86083,
        latitude: 52.26752,
      },
    ],
  },
  {
    userId: 39,
    points: [
      {
        longitude: -0.885471,
        latitude: 52.239635,
      },
      {
        longitude: -0.88472,
        latitude: 52.239766,
      },
      {
        longitude: -0.884205,
        latitude: 52.237835,
      },
      {
        longitude: -0.885064,
        latitude: 52.237808,
      },
    ],
  },
  {
    userId: 41,
    points: [
      {
        longitude: -0.882189,
        latitude: 52.246682,
      },
      {
        longitude: -0.878606,
        latitude: 52.250321,
      },
      {
        longitude: -0.879494,
        latitude: 52.250299,
      },
      {
        longitude: -0.882189,
        latitude: 52.246682,
      },
      {
        longitude: -0.876232,
        latitude: 52.248364,
      },
    ],
  },
  {
    userId: 82,
    points: [
      {
        longitude: -0.878421,
        latitude: 52.252057,
      },
      {
        longitude: -0.878196,
        latitude: 52.251972,
      },
      {
        longitude: -0.876093,
        latitude: 52.25362,
      },
      {
        longitude: -0.876351,
        latitude: 52.253752,
      },
    ],
  },
  {
    userId: 83,
    points: [
      {
        longitude: -0.92383,
        latitude: 52.240911,
      },
      {
        longitude: -0.914912,
        latitude: 52.240849,
      },
      {
        longitude: -0.912415,
        latitude: 52.237634,
      },
      {
        longitude: -0.918637,
        latitude: 52.237148,
      },
    ],
  },
  {
    userId: 84,
    points: [
      {
        longitude: -0.897819,
        latitude: 52.248388,
      },
      {
        longitude: -0.897819,
        latitude: 52.248191,
      },
      {
        longitude: -0.882836,
        latitude: 52.252114,
      },
      {
        longitude: -0.883039,
        latitude: 52.252232,
      },
      {
        longitude: -0.890663,
        latitude: 52.250321,
      },
    ],
  },
  {
    userId: 85,
    points: [
      {
        longitude: -0.903904,
        latitude: 52.248214,
      },
      {
        longitude: -0.90031,
        latitude: 52.248773,
      },
      {
        longitude: -0.900342,
        latitude: 52.248582,
      },
      {
        longitude: -0.903883,
        latitude: 52.24807,
      },
    ],
  },
  {
    userId: 86,
    points: [
      {
        longitude: -0.911226,
        latitude: 52.269396,
      },
      {
        longitude: -0.909241,
        latitude: 52.27063,
      },
      {
        longitude: -0.910292,
        latitude: 52.271438,
      },
      {
        longitude: -0.91158,
        latitude: 52.271871,
      },
      {
        longitude: -0.912717,
        latitude: 52.271766,
      },
      {
        longitude: -0.913511,
        latitude: 52.270722,
      },
      {
        longitude: -0.913812,
        latitude: 52.270446,
      },
    ],
  },
  {
    userId: 87,
    points: [
      {
        longitude: -0.879826,
        latitude: 52.24477,
      },
      {
        longitude: -0.873861,
        latitude: 52.245781,
      },
      {
        longitude: -0.871468,
        latitude: 52.246708,
      },
      {
        longitude: -0.87134,
        latitude: 52.24657,
      },
      {
        longitude: -0.874269,
        latitude: 52.24546,
      },
      {
        longitude: -0.879762,
        latitude: 52.244625,
      },
    ],
  },
  {
    userId: 88,
    points: [
      {
        longitude: -0.855944,
        latitude: 52.24458,
      },
      {
        longitude: -0.857425,
        latitude: 52.244107,
      },
      {
        longitude: -0.855944,
        latitude: 52.244633,
      },
      {
        longitude: -0.854292,
        latitude: 52.243621,
      },
      {
        longitude: -0.853305,
        latitude: 52.242544,
      },
      {
        longitude: -0.857017,
        latitude: 52.240376,
      },
      {
        longitude: -0.860107,
        latitude: 52.240901,
      },
      {
        longitude: -0.860987,
        latitude: 52.241322,
      },
      {
        longitude: -0.860236,
        latitude: 52.243122,
      },
      {
        longitude: -0.858498,
        latitude: 52.244948,
      },
    ],
  },
  {
    userId: 89,
    points: [
      {
        longitude: -0.898629,
        latitude: 52.252018,
      },
      {
        longitude: -0.899359,
        latitude: 52.25165,
      },
      {
        longitude: -0.898415,
        latitude: 52.247236,
      },
      {
        longitude: -0.898329,
        latitude: 52.243216,
      },
      {
        longitude: -0.897428,
        latitude: 52.242953,
      },
      {
        longitude: -0.897385,
        latitude: 52.247341,
      },
    ],
  },
  {
    userId: 90,
    points: [
      {
        longitude: -1.01047,
        latitude: 52.21222,
      },
      {
        longitude: -1.012508,
        latitude: 52.205856,
      },
      {
        longitude: -1.044437,
        latitude: 52.217637,
      },
      {
        longitude: -1.037228,
        latitude: 52.235933,
      },
      {
        longitude: -0.999119,
        latitude: 52.245813,
      },
      {
        longitude: -0.975773,
        latitude: 52.238035,
      },
      {
        longitude: -0.941097,
        latitude: 52.20291,
      },
    ],
  },
  {
    userId: 91,
    points: [
      {
        longitude: -0.947959,
        latitude: 52.244652,
      },
      {
        longitude: -0.927617,
        latitude: 52.245178,
      },
      {
        longitude: -0.909679,
        latitude: 52.241814,
      },
      {
        longitude: -0.884702,
        latitude: 52.244705,
      },
      {
        longitude: -0.866163,
        latitude: 52.249487,
      },
      {
        longitude: -0.866935,
        latitude: 52.242025,
      },
      {
        longitude: -0.905645,
        latitude: 52.235928,
      },
      {
        longitude: -0.947187,
        latitude: 52.239186,
      },
    ],
  },
  {
    userId: 92,
    points: [
      {
        longitude: -0.896718,
        latitude: 52.242432,
      },
      {
        longitude: -0.907275,
        latitude: 52.242642,
      },
      {
        longitude: -0.90925,
        latitude: 52.236414,
      },
      {
        longitude: -0.901053,
        latitude: 52.234784,
      },
      {
        longitude: -0.890281,
        latitude: 52.237728,
      },
    ],
  },
  {
    userId: 93,
    points: [
      {
        longitude: -0.900712,
        latitude: 52.269871,
      },
      {
        longitude: -0.896978,
        latitude: 52.268754,
      },
      {
        longitude: -0.893169,
        latitude: 52.269641,
      },
      {
        longitude: -0.894248,
        latitude: 52.271755,
      },
      {
        longitude: -0.895814,
        latitude: 52.271617,
      },
    ],
  },
  {
    userId: 94,
    points: [
      {
        longitude: -0.910031,
        latitude: 52.226676,
      },
      {
        longitude: -0.89589,
        latitude: 52.227333,
      },
      {
        longitude: -0.895439,
        latitude: 52.222667,
      },
      {
        longitude: -0.910503,
        latitude: 52.22268,
      },
    ],
  },
  {
    userId: 95,
    points: [
      {
        longitude: -0.879764,
        latitude: 52.250636,
      },
      {
        longitude: -0.887961,
        latitude: 52.25547,
      },
      {
        longitude: -0.878605,
        latitude: 52.260908,
      },
      {
        longitude: -0.870494,
        latitude: 52.258597,
      },
    ],
  },
  {
    userId: 96,
    points: [
      {
        longitude: -0.910593,
        latitude: 52.241707,
      },
      {
        longitude: -0.914284,
        latitude: 52.240577,
      },
      {
        longitude: -0.910722,
        latitude: 52.237673,
      },
      {
        longitude: -0.908619,
        latitude: 52.238816,
      },
    ],
  },
  {
    userId: 97,
    points: [
      {
        longitude: -0.857296,
        latitude: 52.261308,
      },
      {
        longitude: -0.856514,
        latitude: 52.261111,
      },
      {
        longitude: -0.861492,
        latitude: 52.259049,
      },
      {
        longitude: -0.870719,
        latitude: 52.257092,
      },
      {
        longitude: -0.871019,
        latitude: 52.258077,
      },
    ],
  },
  {
    userId: 98,
    points: [
      {
        longitude: -0.853337,
        latitude: 52.273992,
      },
      {
        longitude: -0.823811,
        latitude: 52.274123,
      },
      {
        longitude: -0.822052,
        latitude: 52.265562,
      },
      {
        longitude: -0.853251,
        latitude: 52.2648,
      },
    ],
  },
  {
    userId: 99,
    points: [
      {
        longitude: -0.874612,
        latitude: 52.245444,
      },
      {
        longitude: -0.873561,
        latitude: 52.243926,
      },
      {
        longitude: -0.872134,
        latitude: 52.244293999999996,
      },
      {
        longitude: -0.873464,
        latitude: 52.245766,
      },
    ],
  },
  {
    userId: 100,
    points: [
      {
        longitude: -0.870385,
        latitude: 52.244931,
      },
      {
        longitude: -0.853575,
        latitude: 52.272517,
      },
      {
        longitude: -0.849798,
        latitude: 52.276456,
      },
      {
        longitude: -0.847009,
        latitude: 52.276378,
      },
      {
        longitude: -0.850571,
        latitude: 52.272571,
      },
    ],
  },
  {
    userId: 101,
    points: [
      {
        longitude: -0.879764,
        latitude: 52.250636,
      },
      {
        longitude: -0.887961,
        latitude: 52.25547,
      },
      {
        longitude: -0.878605,
        latitude: 52.260908,
      },
      {
        longitude: -0.870494,
        latitude: 52.258597,
      },
    ],
  },
  {
    userId: 102,
    points: [
      {
        longitude: -0.84238,
        latitude: 52.25312,
      },
      {
        longitude: -0.836223,
        latitude: 52.254371,
      },
      {
        longitude: -0.839362,
        latitude: 52.253591,
      },
      {
        longitude: -0.84155,
        latitude: 52.253203,
      },
      {
        longitude: -0.844898,
        latitude: 52.252822,
      },
      {
        longitude: -0.845735,
        latitude: 52.254221,
      },
      {
        longitude: -0.847689,
        latitude: 52.257973,
      },
      {
        longitude: -0.841648,
        latitude: 52.259018,
      },
      {
        longitude: -0.840162,
        latitude: 52.258742,
      },
      {
        longitude: -0.839401,
        latitude: 52.257231,
      },
      {
        longitude: -0.836236,
        latitude: 52.254414,
      },
      {
        longitude: -0.836224,
        latitude: 52.254371,
      },
    ],
  },
  {
    userId: 103,
    points: [
      {
        longitude: -0.8727,
        latitude: 52.2477,
      },
      {
        longitude: -0.873273,
        latitude: 52.248978,
      },
      {
        longitude: -0.873112,
        latitude: 52.248623,
      },
      {
        longitude: -0.872442,
        latitude: 52.246531,
      },
      {
        longitude: -0.872318,
        latitude: 52.24635,
      },
      {
        longitude: -0.872297,
        latitude: 52.24633,
      },
      {
        longitude: -0.872125,
        latitude: 52.24639,
      },
      {
        longitude: -0.872882,
        latitude: 52.248676,
      },
      {
        longitude: -0.873115,
        latitude: 52.248992,
      },
      {
        longitude: -0.873278,
        latitude: 52.248979,
      },
    ],
  },
  {
    userId: 104,
    points: [
      {
        longitude: -0.92556,
        latitude: 52.21806,
      },
      {
        longitude: -0.936339,
        latitude: 52.222668,
      },
      {
        longitude: -0.93003,
        latitude: 52.224015,
      },
      {
        longitude: -0.926694,
        latitude: 52.224238,
      },
      {
        longitude: -0.926168,
        latitude: 52.224106,
      },
      {
        longitude: -0.925481,
        latitude: 52.224145,
      },
      {
        longitude: -0.924902,
        latitude: 52.224138,
      },
      {
        longitude: -0.921619,
        latitude: 52.223061,
      },
      {
        longitude: -0.921125,
        latitude: 52.222778,
      },
      {
        longitude: -0.924923,
        latitude: 52.219058,
      },
      {
        longitude: -0.920203,
        latitude: 52.21631,
      },
      {
        longitude: -0.920718,
        latitude: 52.21589,
      },
      {
        longitude: -0.922477,
        latitude: 52.214838,
      },
      {
        longitude: -0.922606,
        latitude: 52.214023,
      },
      {
        longitude: -0.922091,
        latitude: 52.212734,
      },
      {
        longitude: -0.921726,
        latitude: 52.211735,
      },
      {
        longitude: -0.921769,
        latitude: 52.210736,
      },
      {
        longitude: -0.922434,
        latitude: 52.209855,
      },
      {
        longitude: -0.923207,
        latitude: 52.208211,
      },
      {
        longitude: -0.933979,
        latitude: 52.210696,
      },
      {
        longitude: -0.936747,
        latitude: 52.215324,
      },
      {
        longitude: -0.937347,
        latitude: 52.217546,
      },
      {
        longitude: -0.936854,
        latitude: 52.220149,
      },
      {
        longitude: -0.936296,
        latitude: 52.22266,
      },
    ],
  },
  {
    userId: 105,
    points: [
      {
        longitude: -0.94416,
        latitude: 52.24317,
      },
      {
        longitude: -0.925353,
        latitude: 52.247862,
      },
      {
        longitude: -0.923967,
        latitude: 52.247274,
      },
      {
        longitude: -0.92693,
        latitude: 52.246187,
      },
      {
        longitude: -0.927295,
        latitude: 52.245944,
      },
      {
        longitude: -0.932445,
        latitude: 52.244124,
      },
      {
        longitude: -0.93487,
        latitude: 52.243211,
      },
      {
        longitude: -0.93753,
        latitude: 52.241845,
      },
      {
        longitude: -0.938088,
        latitude: 52.240945,
      },
      {
        longitude: -0.938088,
        latitude: 52.240452,
      },
      {
        longitude: -0.938163,
        latitude: 52.239401,
      },
      {
        longitude: -0.938013,
        latitude: 52.238179,
      },
      {
        longitude: -0.937745,
        latitude: 52.237758,
      },
      {
        longitude: -0.939762,
        latitude: 52.237397,
      },
      {
        longitude: -0.943063,
        latitude: 52.237149,
      },
      {
        longitude: -0.943513,
        latitude: 52.237951,
      },
      {
        longitude: -0.944833,
        latitude: 52.239133,
      },
      {
        longitude: -0.945935,
        latitude: 52.239775,
      },
      {
        longitude: -0.949133,
        latitude: 52.242653,
      },
      {
        longitude: -0.950553,
        latitude: 52.245106,
      },
      {
        longitude: -0.952486,
        latitude: 52.245933,
      },
      {
        longitude: -0.955618,
        latitude: 52.247076,
      },
      {
        longitude: -0.957496,
        latitude: 52.247687,
      },
      {
        longitude: -0.96035,
        latitude: 52.248416,
      },
      {
        longitude: -0.963054,
        latitude: 52.249224,
      },
      {
        longitude: -0.966412,
        latitude: 52.250012,
      },
      {
        longitude: -0.967935,
        latitude: 52.250269,
      },
      {
        longitude: -0.968171,
        latitude: 52.250643,
      },
      {
        longitude: -0.966637,
        latitude: 52.253783,
      },
      {
        longitude: -0.965929,
        latitude: 52.255451,
      },
      {
        longitude: -0.964084,
        latitude: 52.257605,
      },
      {
        longitude: -0.960607,
        latitude: 52.260718,
      },
      {
        longitude: -0.958741,
        latitude: 52.261558,
      },
      {
        longitude: -0.955372,
        latitude: 52.26207,
      },
      {
        longitude: -0.954803,
        latitude: 52.261105,
      },
      {
        longitude: -0.954074,
        latitude: 52.260606,
      },
      {
        longitude: -0.952078,
        latitude: 52.259759,
      },
      {
        longitude: -0.948312,
        latitude: 52.258038,
      },
      {
        longitude: -0.946456,
        latitude: 52.25729,
      },
      {
        longitude: -0.942089,
        latitude: 52.255891,
      },
      {
        longitude: -0.940341,
        latitude: 52.255273,
      },
      {
        longitude: -0.938259,
        latitude: 52.254183,
      },
      {
        longitude: -0.936264,
        latitude: 52.253073,
      },
      {
        longitude: -0.931994,
        latitude: 52.25088,
      },
      {
        longitude: -0.927402,
        latitude: 52.248771,
      },
      {
        longitude: -0.925341,
        latitude: 52.247976,
      },
      {
        longitude: -0.925341,
        latitude: 52.247976,
      },
      {
        longitude: -0.925315,
        latitude: 52.247858,
      },
    ],
  },
  {
    userId: 106,
    points: [
      {
        longitude: -0.86913,
        latitude: 52.25036,
      },
      {
        longitude: -0.855111,
        latitude: 52.25105,
      },
      {
        longitude: -0.857536,
        latitude: 52.250735,
      },
      {
        longitude: -0.859832,
        latitude: 52.250656,
      },
      {
        longitude: -0.862343,
        latitude: 52.250235,
      },
      {
        longitude: -0.864703,
        latitude: 52.249999,
      },
      {
        longitude: -0.868667,
        latitude: 52.249875,
      },
      {
        longitude: -0.869053,
        latitude: 52.249586,
      },
      {
        longitude: -0.868753,
        latitude: 52.248785,
      },
      {
        longitude: -0.869626,
        latitude: 52.246993,
      },
      {
        longitude: -0.870913,
        latitude: 52.24539,
      },
      {
        longitude: -0.87233,
        latitude: 52.243919,
      },
      {
        longitude: -0.873767,
        latitude: 52.243143,
      },
      {
        longitude: -0.875087,
        latitude: 52.242386,
      },
      {
        longitude: -0.879664,
        latitude: 52.241751,
      },
      {
        longitude: -0.882926,
        latitude: 52.24154,
      },
      {
        longitude: -0.884149,
        latitude: 52.241154,
      },
      {
        longitude: -0.885114,
        latitude: 52.240936,
      },
      {
        longitude: -0.885833,
        latitude: 52.241422,
      },
      {
        longitude: -0.885871,
        latitude: 52.241849,
      },
      {
        longitude: -0.884562,
        latitude: 52.242802,
      },
      {
        longitude: -0.883966,
        latitude: 52.243403,
      },
      {
        longitude: -0.883773,
        latitude: 52.243698,
      },
      {
        longitude: -0.882765,
        latitude: 52.245551,
      },
      {
        longitude: -0.881499,
        latitude: 52.24741,
      },
      {
        longitude: -0.880018,
        latitude: 52.250221,
      },
      {
        longitude: -0.876435,
        latitude: 52.253242,
      },
      {
        longitude: -0.87313,
        latitude: 52.255778,
      },
      {
        longitude: -0.872004,
        latitude: 52.257124,
      },
      {
        longitude: -0.869686,
        latitude: 52.257505,
      },
      {
        longitude: -0.864901,
        latitude: 52.258339,
      },
      {
        longitude: -0.861017,
        latitude: 52.259087,
      },
      {
        longitude: -0.860073,
        latitude: 52.258943,
      },
      {
        longitude: -0.858078,
        latitude: 52.257314,
      },
      {
        longitude: -0.856318,
        latitude: 52.256001,
      },
      {
        longitude: -0.855138,
        latitude: 52.251062,
      },
    ],
  },
  {
    userId: 107,
    points: [
      {
        longitude: -0.848497,
        latitude: 52.240615,
      },
      {
        longitude: -0.848597,
        latitude: 52.241985,
      },
      {
        longitude: -0.850616,
        latitude: 52.241505,
      },
      {
        longitude: -0.849468,
        latitude: 52.23979,
      },
      {
        longitude: -0.84847,
        latitude: 52.239238,
      },
      {
        longitude: -0.846013,
        latitude: 52.240013,
      },
      {
        longitude: -0.844361,
        latitude: 52.241058,
      },
      {
        longitude: -0.844758,
        latitude: 52.241715,
      },
      {
        longitude: -0.846547,
        latitude: 52.242371,
      },
      {
        longitude: -0.84747,
        latitude: 52.242421,
      },
      {
        longitude: -0.84836,
        latitude: 52.242271,
      },
      {
        longitude: -0.848585,
        latitude: 52.241984,
      },
    ],
  },
  {
    userId: 108,
    points: [
      {
        longitude: -0.86941,
        latitude: 52.26109,
      },
      {
        longitude: -0.862964,
        latitude: 52.266944,
      },
      {
        longitude: -0.86511,
        latitude: 52.265315,
      },
      {
        longitude: -0.867148,
        latitude: 52.263602,
      },
      {
        longitude: -0.870013,
        latitude: 52.260581,
      },
      {
        longitude: -0.870295,
        latitude: 52.260312,
      },
      {
        longitude: -0.872945,
        latitude: 52.262656,
      },
      {
        longitude: -0.876485,
        latitude: 52.264954,
      },
      {
        longitude: -0.879046,
        latitude: 52.268422,
      },
      {
        longitude: -0.877287,
        latitude: 52.270957,
      },
      {
        longitude: -0.864648,
        latitude: 52.270957,
      },
      {
        longitude: -0.862791,
        latitude: 52.266997,
      },
      {
        longitude: -0.862942,
        latitude: 52.266984,
      },
      {
        longitude: -0.861634,
        latitude: 52.266889,
      },
      {
        longitude: -0.860668,
        latitude: 52.265589,
      },
      {
        longitude: -0.858104,
        latitude: 52.264906,
      },
      {
        longitude: -0.851839,
        latitude: 52.264289,
      },
      {
        longitude: -0.850894,
        latitude: 52.263895,
      },
      {
        longitude: -0.850358,
        latitude: 52.262871,
      },
      {
        longitude: -0.852869,
        latitude: 52.26094,
      },
      {
        longitude: -0.859907,
        latitude: 52.259561,
      },
      {
        longitude: -0.864263,
        latitude: 52.258432,
      },
      {
        longitude: -0.869949,
        latitude: 52.25742,
      },
      {
        longitude: -0.870893,
        latitude: 52.257295,
      },
      {
        longitude: -0.871043,
        latitude: 52.258668,
      },
      {
        longitude: -0.870266,
        latitude: 52.260289,
      },
    ],
  },
  {
    userId: 109,
    points: [
      {
        longitude: -0.975663,
        latitude: 52.221927,
      },
      {
        longitude: -0.960729,
        latitude: 52.215906,
      },
      {
        longitude: -0.952103,
        latitude: 52.212382,
      },
      {
        longitude: -0.947339,
        latitude: 52.211304,
      },
      {
        longitude: -0.940129,
        latitude: 52.210699,
      },
      {
        longitude: -0.935023,
        latitude: 52.208254,
      },
      {
        longitude: -0.920946,
        latitude: 52.202179,
      },
      {
        longitude: -0.907728,
        latitude: 52.194287,
      },
      {
        longitude: -0.883069,
        latitude: 52.179926,
      },
      {
        longitude: -0.875515,
        latitude: 52.181215,
      },
      {
        longitude: -0.875387,
        latitude: 52.188767,
      },
      {
        longitude: -0.876674,
        latitude: 52.189793,
      },
      {
        longitude: -0.877232,
        latitude: 52.192477,
      },
      {
        longitude: -0.881309,
        latitude: 52.196317,
      },
      {
        longitude: -0.877103,
        latitude: 52.196764,
      },
      {
        longitude: -0.860581,
        latitude: 52.202183,
      },
      {
        longitude: -0.837192,
        latitude: 52.223929,
      },
      {
        longitude: -0.867126,
        latitude: 52.230467,
      },
      {
        longitude: -0.884896,
        latitude: 52.227504,
      },
      {
        longitude: -0.895753,
        latitude: 52.228687,
      },
      {
        longitude: -0.906139,
        latitude: 52.228582,
      },
      {
        longitude: -0.912104,
        latitude: 52.228293,
      },
      {
        longitude: -0.918048,
        latitude: 52.229107,
      },
      {
        longitude: -0.923477,
        latitude: 52.230264,
      },
      {
        longitude: -0.928605,
        latitude: 52.229791,
      },
      {
        longitude: -0.935085,
        latitude: 52.224257,
      },
      {
        longitude: -0.944784,
        latitude: 52.222812,
      },
      {
        longitude: -0.967486,
        latitude: 52.223521,
      },
      {
        longitude: -0.97564,
        latitude: 52.221997,
      },
    ],
  },
  {
    userId: 110,
    points: [
      {
        longitude: -0.87947,
        latitude: 52.24586,
      },
      {
        longitude: -0.882492,
        latitude: 52.246123,
      },
      {
        longitude: -0.878812,
        latitude: 52.246681,
      },
      {
        longitude: -0.87717,
        latitude: 52.246966,
      },
      {
        longitude: -0.875797,
        latitude: 52.246861,
      },
      {
        longitude: -0.875208,
        latitude: 52.245709,
      },
      {
        longitude: -0.875004,
        latitude: 52.245413,
      },
      {
        longitude: -0.87995,
        latitude: 52.244598,
      },
      {
        longitude: -0.880208,
        latitude: 52.245163,
      },
      {
        longitude: -0.881828,
        latitude: 52.244966,
      },
      {
        longitude: -0.882954,
        latitude: 52.245255,
      },
      {
        longitude: -0.882514,
        latitude: 52.246109,
      },
    ],
  },
  {
    userId: 111,
    points: [
      {
        longitude: -0.85207,
        latitude: 52.25496,
      },
      {
        longitude: -0.851661,
        latitude: 52.255407,
      },
      {
        longitude: -0.853002,
        latitude: 52.255111,
      },
      {
        longitude: -0.852197,
        latitude: 52.25307,
      },
      {
        longitude: -0.851961,
        latitude: 52.251927,
      },
      {
        longitude: -0.851677,
        latitude: 52.251425,
      },
      {
        longitude: -0.850132,
        latitude: 52.251678,
      },
      {
        longitude: -0.850952,
        latitude: 52.253136,
      },
      {
        longitude: -0.851065,
        latitude: 52.254505,
      },
      {
        longitude: -0.851655,
        latitude: 52.255385,
      },
    ],
  },
  {
    userId: 112,
    points: [
      {
        longitude: -0.922112,
        latitude: 52.280077,
      },
      {
        longitude: -0.922948,
        latitude: 52.275075,
      },
      {
        longitude: -0.922391,
        latitude: 52.273093,
      },
      {
        longitude: -0.920159,
        latitude: 52.270217,
      },
      {
        longitude: -0.915824,
        latitude: 52.265135,
      },
      {
        longitude: -0.907005,
        latitude: 52.258398,
      },
      {
        longitude: -0.903894,
        latitude: 52.259593,
      },
      {
        longitude: -0.901974,
        latitude: 52.259698,
      },
      {
        longitude: -0.900868,
        latitude: 52.259593,
      },
      {
        longitude: -0.899167,
        latitude: 52.259588,
      },
      {
        longitude: -0.892086,
        latitude: 52.256593,
      },
      {
        longitude: -0.887923,
        latitude: 52.262582,
      },
      {
        longitude: -0.884726,
        latitude: 52.264237,
      },
      {
        longitude: -0.883846,
        latitude: 52.26815,
      },
      {
        longitude: -0.88758,
        latitude: 52.271965,
      },
      {
        longitude: -0.887065,
        latitude: 52.275799,
      },
      {
        longitude: -0.888052,
        latitude: 52.277978,
      },
      {
        longitude: -0.895819,
        latitude: 52.281195,
      },
      {
        longitude: -0.903694,
        latitude: 52.281523,
      },
      {
        longitude: -0.909853,
        latitude: 52.280788,
      },
      {
        longitude: -0.921976,
        latitude: 52.280105,
      },
    ],
  },
  {
    userId: 113,
    points: [
      {
        longitude: -0.975663,
        latitude: 52.221927,
      },
      {
        longitude: -0.960729,
        latitude: 52.215906,
      },
      {
        longitude: -0.952103,
        latitude: 52.212382,
      },
      {
        longitude: -0.947339,
        latitude: 52.211304,
      },
      {
        longitude: -0.940129,
        latitude: 52.210699,
      },
      {
        longitude: -0.935023,
        latitude: 52.208254,
      },
      {
        longitude: -0.920946,
        latitude: 52.202179,
      },
      {
        longitude: -0.907728,
        latitude: 52.194287,
      },
      {
        longitude: -0.883069,
        latitude: 52.179926,
      },
      {
        longitude: -0.875515,
        latitude: 52.181215,
      },
      {
        longitude: -0.875387,
        latitude: 52.188767,
      },
      {
        longitude: -0.876674,
        latitude: 52.189793,
      },
      {
        longitude: -0.877232,
        latitude: 52.192477,
      },
      {
        longitude: -0.881309,
        latitude: 52.196317,
      },
      {
        longitude: -0.877103,
        latitude: 52.196764,
      },
      {
        longitude: -0.860581,
        latitude: 52.202183,
      },
      {
        longitude: -0.837192,
        latitude: 52.223929,
      },
      {
        longitude: -0.867126,
        latitude: 52.230467,
      },
      {
        longitude: -0.884896,
        latitude: 52.227504,
      },
      {
        longitude: -0.895753,
        latitude: 52.228687,
      },
      {
        longitude: -0.906139,
        latitude: 52.228582,
      },
      {
        longitude: -0.912104,
        latitude: 52.228293,
      },
      {
        longitude: -0.918048,
        latitude: 52.229107,
      },
      {
        longitude: -0.923477,
        latitude: 52.230264,
      },
      {
        longitude: -0.928605,
        latitude: 52.229791,
      },
      {
        longitude: -0.935085,
        latitude: 52.224257,
      },
      {
        longitude: -0.944784,
        latitude: 52.222812,
      },
      {
        longitude: -0.967486,
        latitude: 52.223521,
      },
      {
        longitude: -0.97564,
        latitude: 52.221997,
      },
    ],
  },
  {
    userId: 114,
    points: [
      {
        longitude: -0.956073,
        latitude: 52.236335,
      },
      {
        longitude: -0.946417,
        latitude: 52.226873,
      },
      {
        longitude: -0.938521,
        latitude: 52.2114,
      },
      {
        longitude: -0.926021,
        latitude: 52.205282,
      },
      {
        longitude: -0.89613,
        latitude: 52.187276,
      },
      {
        longitude: -0.873085,
        latitude: 52.189197,
      },
      {
        longitude: -0.860738,
        latitude: 52.20424,
      },
      {
        longitude: -0.850882,
        latitude: 52.229295,
      },
      {
        longitude: -0.832549,
        latitude: 52.243481,
      },
      {
        longitude: -0.803199,
        latitude: 52.250101,
      },
      {
        longitude: -0.80028,
        latitude: 52.25546,
      },
      {
        longitude: -0.805173,
        latitude: 52.276831,
      },
      {
        longitude: -0.847144,
        latitude: 52.280874,
      },
      {
        longitude: -0.894522,
        latitude: 52.280087,
      },
      {
        longitude: -0.92525,
        latitude: 52.279457,
      },
      {
        longitude: -0.955205,
        latitude: 52.26743,
      },
      {
        longitude: -0.971341,
        latitude: 52.25314,
      },
      {
        longitude: -0.956921,
        latitude: 52.236954,
      },
    ],
  },
  {
    userId: 115,
    points: [
      {
        longitude: -0.93207,
        latitude: 52.24318,
      },
      {
        longitude: -0.932158,
        latitude: 52.242193,
      },
      {
        longitude: -0.933939,
        latitude: 52.243106,
      },
      {
        longitude: -0.932373,
        latitude: 52.24417,
      },
      {
        longitude: -0.928695,
        latitude: 52.245149,
      },
      {
        longitude: -0.927365,
        latitude: 52.242909,
      },
      {
        longitude: -0.932032,
        latitude: 52.242166,
      },
    ],
  },
  {
    userId: 116,
    points: [
      {
        longitude: -0.892783,
        latitude: 52.269579,
      },
      {
        longitude: -0.890932,
        latitude: 52.27033,
      },
      {
        longitude: -0.889726,
        latitude: 52.270927,
      },
      {
        longitude: -0.888042,
        latitude: 52.270284,
      },
      {
        longitude: -0.884029,
        latitude: 52.26813,
      },
      {
        longitude: -0.885038,
        latitude: 52.264164,
      },
      {
        longitude: -0.889136,
        latitude: 52.263153,
      },
      {
        longitude: -0.889405,
        latitude: 52.263238,
      },
      {
        longitude: -0.889641,
        latitude: 52.268119,
      },
      {
        longitude: -0.892886,
        latitude: 52.268353,
      },
      {
        longitude: -0.893777,
        latitude: 52.269023,
      },
      {
        longitude: -0.892795,
        latitude: 52.269577,
      },
    ],
  },
  {
    userId: 117,
    points: [
      {
        longitude: -0.80663,
        latitude: 52.26822,
      },
      {
        longitude: -0.826772,
        latitude: 52.273207,
      },
      {
        longitude: -0.82115,
        latitude: 52.273221,
      },
      {
        longitude: -0.815292,
        latitude: 52.273299,
      },
      {
        longitude: -0.813167,
        latitude: 52.273431,
      },
      {
        longitude: -0.813339,
        latitude: 52.27477,
      },
      {
        longitude: -0.809133,
        latitude: 52.275715,
      },
      {
        longitude: -0.802224,
        latitude: 52.26374,
      },
      {
        longitude: -0.800851,
        latitude: 52.253915,
      },
      {
        longitude: -0.807631,
        latitude: 52.25226,
      },
      {
        longitude: -0.811258,
        latitude: 52.250658,
      },
      {
        longitude: -0.814605,
        latitude: 52.249186,
      },
      {
        longitude: -0.81703,
        latitude: 52.249804,
      },
      {
        longitude: -0.817309,
        latitude: 52.251577,
      },
      {
        longitude: -0.822308,
        latitude: 52.256372,
      },
      {
        longitude: -0.823682,
        latitude: 52.259682,
      },
      {
        longitude: -0.824333,
        latitude: 52.261658,
      },
      {
        longitude: -0.82547,
        latitude: 52.263523,
      },
      {
        longitude: -0.828066,
        latitude: 52.266452,
      },
      {
        longitude: -0.828324,
        latitude: 52.26917,
      },
      {
        longitude: -0.826992,
        latitude: 52.273215,
      },
      {
        longitude: -0.826713,
        latitude: 52.273254,
      },
    ],
  },
  {
    userId: 118,
    points: [
      {
        longitude: -0.89629,
        latitude: 52.2094,
      },
      {
        longitude: -0.898904,
        latitude: 52.210684,
      },
      {
        longitude: -0.894945,
        latitude: 52.209698,
      },
      {
        longitude: -0.894108,
        latitude: 52.209501,
      },
      {
        longitude: -0.892209,
        latitude: 52.207048,
      },
      {
        longitude: -0.892553,
        latitude: 52.206897,
      },
      {
        longitude: -0.896866,
        latitude: 52.206647,
      },
      {
        longitude: -0.898057,
        latitude: 52.206588,
      },
      {
        longitude: -0.898818,
        latitude: 52.205674,
      },
      {
        longitude: -0.900288,
        latitude: 52.20572,
      },
      {
        longitude: -0.900707,
        latitude: 52.205661,
      },
      {
        longitude: -0.900964,
        latitude: 52.2067,
      },
      {
        longitude: -0.902734,
        latitude: 52.208337,
      },
      {
        longitude: -0.902305,
        latitude: 52.209185,
      },
      {
        longitude: -0.899601,
        latitude: 52.21,
      },
      {
        longitude: -0.898915,
        latitude: 52.210651,
      },
    ],
  },
  {
    userId: 119,
    points: [
      {
        longitude: -0.882928,
        latitude: 52.252072,
      },
      {
        longitude: -0.887467,
        latitude: 52.250943,
      },
      {
        longitude: -0.889752,
        latitude: 52.252637,
      },
      {
        longitude: -0.891114,
        latitude: 52.254476,
      },
      {
        longitude: -0.89223,
        latitude: 52.255862,
      },
      {
        longitude: -0.890814,
        latitude: 52.255856,
      },
      {
        longitude: -0.889441,
        latitude: 52.255737,
      },
      {
        longitude: -0.888164,
        latitude: 52.255304,
      },
      {
        longitude: -0.886608,
        latitude: 52.254503,
      },
      {
        longitude: -0.884978,
        latitude: 52.253491,
      },
      {
        longitude: -0.882853,
        latitude: 52.252092,
      },
      {
        longitude: -0.882993,
        latitude: 52.252092,
      },
      {
        longitude: -0.882942,
        latitude: 52.252072,
      },
    ],
  },
  {
    userId: 120,
    points: [
      {
        longitude: -0.892807,
        latitude: 52.241061,
      },
      {
        longitude: -0.892319,
        latitude: 52.241649,
      },
      {
        longitude: -0.89491,
        latitude: 52.242516,
      },
      {
        longitude: -0.895371,
        latitude: 52.242335,
      },
      {
        longitude: -0.895521,
        latitude: 52.242719,
      },
      {
        longitude: -0.895339,
        latitude: 52.24288,
      },
      {
        longitude: -0.894008,
        latitude: 52.243813,
      },
      {
        longitude: -0.891294,
        latitude: 52.242995,
      },
      {
        longitude: -0.890621,
        latitude: 52.242794,
      },
      {
        longitude: -0.890653,
        latitude: 52.242633,
      },
      {
        longitude: -0.892536,
        latitude: 52.240967,
      },
      {
        longitude: -0.892799,
        latitude: 52.241067,
      },
    ],
  },
  {
    userId: 121,
    points: [
      {
        longitude: -0.90193,
        latitude: 52.27779,
      },
      {
        longitude: -0.903918,
        latitude: 52.277899,
      },
      {
        longitude: -0.902052,
        latitude: 52.279619,
      },
      {
        longitude: -0.899949,
        latitude: 52.278766,
      },
      {
        longitude: -0.899616,
        latitude: 52.277499,
      },
      {
        longitude: -0.903886,
        latitude: 52.277683,
      },
      {
        longitude: -0.90394,
        latitude: 52.277883,
      },
    ],
  },
  {
    userId: 122,
    points: [
      {
        longitude: -0.896866,
        latitude: 52.279922,
      },
      {
        longitude: -0.897901,
        latitude: 52.280477,
      },
      {
        longitude: -0.899607,
        latitude: 52.279479,
      },
      {
        longitude: -0.899339,
        latitude: 52.27726,
      },
      {
        longitude: -0.897365,
        latitude: 52.277228,
      },
      {
        longitude: -0.894618,
        latitude: 52.276538,
      },
      {
        longitude: -0.891869,
        latitude: 52.276146,
      },
      {
        longitude: -0.888533,
        latitude: 52.277104,
      },
      {
        longitude: -0.892497,
        latitude: 52.279353,
      },
      {
        longitude: -0.89504,
        latitude: 52.280206,
      },
    ],
  },
  {
    userId: 123,
    points: [
      {
        longitude: -0.896005,
        latitude: 52.27911,
      },
      {
        longitude: -0.961503,
        latitude: 52.243866,
      },
      {
        longitude: -0.964229,
        latitude: 52.242881,
      },
      {
        longitude: -0.964443,
        latitude: 52.240976,
      },
      {
        longitude: -0.959851,
        latitude: 52.240174,
      },
      {
        longitude: -0.957856,
        latitude: 52.240319,
      },
      {
        longitude: -0.9588,
        latitude: 52.242145,
      },
    ],
  },
  {
    userId: 124,
    points: [
      {
        longitude: -0.952084,
        latitude: 52.243288,
      },
      {
        longitude: -0.866505,
        latitude: 52.253879,
      },
      {
        longitude: -0.870367,
        latitude: 52.254063,
      },
      {
        longitude: -0.875217,
        latitude: 52.251304,
      },
      {
        longitude: -0.874959,
        latitude: 52.250726,
      },
      {
        longitude: -0.869552,
        latitude: 52.251278,
      },
      {
        longitude: -0.866033,
        latitude: 52.253052,
      },
    ],
  },
  {
    userId: 125,
    points: [
      {
        longitude: -0.880378,
        latitude: 52.250816,
      },
      {
        longitude: -0.879713,
        latitude: 52.250763,
      },
      {
        longitude: -0.882395,
        latitude: 52.245771,
      },
      {
        longitude: -0.88364,
        latitude: 52.246664,
      },
    ],
  },
  {
    userId: 126,
    points: [
      {
        longitude: -0.911899,
        latitude: 52.265617,
      },
      {
        longitude: -0.90971,
        latitude: 52.26477,
      },
      {
        longitude: -0.909377,
        latitude: 52.265026,
      },
      {
        longitude: -0.911759,
        latitude: 52.265847,
      },
    ],
  },
  {
    userId: 127,
    points: [
      {
        longitude: -0.848344,
        latitude: 52.272736,
      },
      {
        longitude: -0.854009,
        latitude: 52.275309,
      },
      {
        longitude: -0.87478,
        latitude: 52.261968,
      },
      {
        longitude: -0.867914,
        latitude: 52.257134,
      },
    ],
  },
  {
    userId: 128,
    points: [
      {
        longitude: -0.873251,
        latitude: 52.251909,
      },
      {
        longitude: -0.87162,
        latitude: 52.249407,
      },
      {
        longitude: -0.869335,
        latitude: 52.250523,
      },
      {
        longitude: -0.865526,
        latitude: 52.252244,
      },
      {
        longitude: -0.866019,
        latitude: 52.253098,
      },
    ],
  },
  {
    userId: 129,
    points: [
      {
        longitude: -0.883843,
        latitude: 52.254586,
      },
      {
        longitude: -0.878558,
        latitude: 52.255985,
      },
      {
        longitude: -0.881155,
        latitude: 52.254422,
      },
      {
        longitude: -0.877807,
        latitude: 52.252622,
      },
      {
        longitude: -0.875597,
        latitude: 52.254383,
      },
    ],
  },
  {
    userId: 130,
    points: [
      {
        longitude: -0.813633,
        latitude: 52.274403,
      },
      {
        longitude: -0.844532,
        latitude: 52.277239,
      },
      {
        longitude: -0.839125,
        latitude: 52.254074,
      },
      {
        longitude: -0.809256,
        latitude: 52.26248,
      },
    ],
  },
  {
    userId: 131,
    points: [
      {
        longitude: -0.849594,
        latitude: 52.258664,
      },
      {
        longitude: -0.857254,
        latitude: 52.258703,
      },
      {
        longitude: -0.857458,
        latitude: 52.256267,
      },
      {
        longitude: -0.850409,
        latitude: 52.256208,
      },
    ],
  },
  {
    userId: 132,
    points: [
      {
        longitude: -0.893038,
        latitude: 52.245655,
      },
      {
        longitude: -0.897124,
        latitude: 52.244738,
      },
      {
        longitude: -0.894678,
        latitude: 52.2419,
      },
    ],
  },
  {
    userId: 133,
    points: [
      {
        longitude: -0.879958,
        latitude: 52.250665,
      },
      {
        longitude: -0.887393,
        latitude: 52.251072,
      },
      {
        longitude: -0.892017,
        latitude: 52.255972,
      },
      {
        longitude: -0.889131,
        latitude: 52.255952,
      },
      {
        longitude: -0.886245,
        latitude: 52.254626,
      },
    ],
  },
  {
    userId: 134,
    points: [
      {
        longitude: -0.875638,
        latitude: 52.262622,
      },
      {
        longitude: -0.880058,
        latitude: 52.260337,
      },
      {
        longitude: -0.878706,
        latitude: 52.262163,
      },
    ],
  },
  {
    userId: 135,
    points: [
      {
        longitude: -0.879958,
        latitude: 52.250665,
      },
      {
        longitude: -0.887393,
        latitude: 52.251072,
      },
      {
        longitude: -0.892017,
        latitude: 52.255972,
      },
      {
        longitude: -0.889131,
        latitude: 52.255952,
      },
      {
        longitude: -0.886245,
        latitude: 52.254626,
      },
    ],
  },
  {
    userId: 136,
    points: [
      {
        longitude: -0.876006,
        latitude: 52.238556,
      },
      {
        longitude: -0.876757,
        latitude: 52.240271,
      },
      {
        longitude: -0.878377,
        latitude: 52.240047,
      },
      {
        longitude: -0.877691,
        latitude: 52.238346,
      },
    ],
  },
  {
    userId: 137,
    points: [
      {
        longitude: -0.943577,
        latitude: 52.240256,
      },
      {
        longitude: -0.945358,
        latitude: 52.239572,
      },
      {
        longitude: -0.9495,
        latitude: 52.243304,
      },
      {
        longitude: -0.949822,
        latitude: 52.245301,
      },
    ],
  },
  {
    userId: 138,
    points: [
      {
        longitude: -0.919512,
        latitude: 52.276318,
      },
      {
        longitude: -0.914598,
        latitude: 52.276436,
      },
      {
        longitude: -0.910532,
        latitude: 52.276351,
      },
      {
        longitude: -0.9107,
        latitude: 52.274251,
      },
      {
        longitude: -0.91756,
        latitude: 52.271946,
      },
    ],
  },
  {
    userId: 139,
    points: [
      {
        longitude: -0.853975,
        latitude: 52.251131,
      },
      {
        longitude: -0.855176,
        latitude: 52.256267,
      },
      {
        longitude: -0.854597,
        latitude: 52.258224,
      },
      {
        longitude: -0.853395,
        latitude: 52.259052,
      },
      {
        longitude: -0.85361,
        latitude: 52.251276,
      },
    ],
  },
  {
    userId: 140,
    points: [
      {
        longitude: -0.880495,
        latitude: 52.20839,
      },
      {
        longitude: -0.86011,
        latitude: 52.204051,
      },
      {
        longitude: -0.872084,
        latitude: 52.195757,
      },
      {
        longitude: -0.886761,
        latitude: 52.199387,
      },
    ],
  },
  {
    userId: 141,
    points: [
      {
        longitude: -0.902656,
        latitude: 52.240477,
      },
      {
        longitude: -0.938767,
        latitude: 52.237604,
      },
      {
        longitude: -0.948595,
        latitude: 52.235554,
      },
      {
        longitude: -0.947136,
        latitude: 52.230008,
      },
      {
        longitude: -0.936364,
        latitude: 52.229877,
      },
    ],
  },
  {
    userId: 142,
    points: [
      {
        longitude: -0.91843,
        latitude: 52.26928,
      },
      {
        longitude: -0.91755,
        latitude: 52.272051,
      },
      {
        longitude: -0.913259,
        latitude: 52.275989,
      },
      {
        longitude: -0.907079,
        latitude: 52.272838,
      },
      {
        longitude: -0.910426,
        latitude: 52.268715,
      },
      {
        longitude: -0.914546,
        latitude: 52.265301,
      },
      {
        longitude: -0.919825,
        latitude: 52.269923,
      },
    ],
  },
  {
    userId: 144,
    points: [
      {
        longitude: -0.864648,
        latitude: 52.245088,
      },
      {
        longitude: -0.869197,
        latitude: 52.244182,
      },
      {
        longitude: -0.86821,
        latitude: 52.242277,
      },
      {
        longitude: -0.863746,
        latitude: 52.243157,
      },
    ],
  },
  {
    userId: 145,
    points: [
      {
        longitude: -0.870079,
        latitude: 52.252855,
      },
      {
        longitude: -0.875186,
        latitude: 52.251358,
      },
      {
        longitude: -0.874102,
        latitude: 52.249577,
      },
      {
        longitude: -0.869113,
        latitude: 52.250195,
      },
    ],
  },
  {
    userId: 146,
    points: [
      {
        longitude: -0.862798,
        latitude: 52.254752,
      },
      {
        longitude: -0.865201,
        latitude: 52.256748,
      },
      {
        longitude: -0.87093,
        latitude: 52.256091,
      },
      {
        longitude: -0.87005,
        latitude: 52.25307,
      },
    ],
  },
  {
    userId: 147,
    points: [
      {
        longitude: -0.90054,
        latitude: 52.259706,
      },
      {
        longitude: -0.889339,
        latitude: 52.256028,
      },
      {
        longitude: -0.882945,
        latitude: 52.252219,
      },
      {
        longitude: -0.897693,
        latitude: 52.248398,
      },
      {
        longitude: -0.900439,
        latitude: 52.253705,
      },
      {
        longitude: -0.883,
        latitude: 52.25236,
      },
      {
        longitude: -0.879996,
        latitude: 52.250652,
      },
      {
        longitude: -0.871799,
        latitude: 52.257325,
      },
      {
        longitude: -0.881369,
        latitude: 52.258612,
      },
      {
        longitude: -0.889609,
        latitude: 52.256196,
      },
      {
        longitude: -0.82588,
        latitude: 52.26352,
      },
      {
        longitude: -0.825784,
        latitude: 52.26345,
      },
      {
        longitude: -0.823982,
        latitude: 52.260141,
      },
      {
        longitude: -0.827329,
        latitude: 52.258354,
      },
      {
        longitude: -0.834153,
        latitude: 52.261007,
      },
      {
        longitude: -0.835612,
        latitude: 52.266418,
      },
      {
        longitude: -0.82823,
        latitude: 52.266549,
      },
    ],
  },
  {
    userId: 148,
    points: [
      {
        longitude: -0.879456,
        latitude: 52.241723,
      },
      {
        longitude: -0.884005,
        latitude: 52.243694,
      },
      {
        longitude: -0.880186,
        latitude: 52.250657,
      },
      {
        longitude: -0.876109,
        latitude: 52.248423,
      },
      {
        longitude: -0.870667,
        latitude: 52.249376,
      },
      {
        longitude: -0.86877,
        latitude: 52.249501,
      },
      {
        longitude: -0.868663,
        latitude: 52.248266,
      },
      {
        longitude: -0.870444,
        latitude: 52.244824,
      },
    ],
  },
  {
    userId: 149,
    points: [
      {
        longitude: -0.883841,
        latitude: 52.240556,
      },
      {
        longitude: -0.883093,
        latitude: 52.238815,
      },
    ],
  },
  {
    userId: 150,
    points: [
      {
        longitude: -0.853257,
        latitude: 52.27243,
      },
      {
        longitude: -0.845167,
        latitude: 52.272614,
      },
      {
        longitude: -0.842635,
        latitude: 52.264801,
      },
      {
        longitude: -0.850231,
        latitude: 52.262529,
      },
    ],
  },
  {
    userId: 151,
    points: [
      {
        longitude: -0.91006,
        latitude: 52.228969,
      },
      {
        longitude: -0.895641,
        latitude: 52.229074,
      },
      {
        longitude: -0.895126,
        latitude: 52.216402,
      },
      {
        longitude: -0.900533,
        latitude: 52.214351,
      },
      {
        longitude: -0.911948,
        latitude: 52.217664,
      },
    ],
  },
  {
    userId: 152,
    points: [
      {
        longitude: -0.91006,
        latitude: 52.228969,
      },
      {
        longitude: -0.895641,
        latitude: 52.229074,
      },
      {
        longitude: -0.895126,
        latitude: 52.216402,
      },
      {
        longitude: -0.900533,
        latitude: 52.214351,
      },
      {
        longitude: -0.911948,
        latitude: 52.217664,
      },
    ],
  },
  {
    userId: 153,
    points: [
      {
        longitude: -0.902972,
        latitude: 52.214613,
      },
      {
        longitude: -0.907178,
        latitude: 52.205199,
      },
      {
        longitude: -0.922797,
        latitude: 52.209512,
      },
      {
        longitude: -0.913399,
        latitude: 52.217138,
      },
    ],
  },
  {
    userId: 154,
    points: [
      {
        longitude: -0.902972,
        latitude: 52.214613,
      },
      {
        longitude: -0.907178,
        latitude: 52.205199,
      },
      {
        longitude: -0.922797,
        latitude: 52.209512,
      },
      {
        longitude: -0.913399,
        latitude: 52.217138,
      },
    ],
  },
  {
    userId: 155,
    points: [
      {
        longitude: -0.879456,
        latitude: 52.241723,
      },
      {
        longitude: -0.884005,
        latitude: 52.243694,
      },
      {
        longitude: -0.880186,
        latitude: 52.250657,
      },
      {
        longitude: -0.876109,
        latitude: 52.248423,
      },
      {
        longitude: -0.870667,
        latitude: 52.249376,
      },
      {
        longitude: -0.86877,
        latitude: 52.249501,
      },
      {
        longitude: -0.868663,
        latitude: 52.248266,
      },
      {
        longitude: -0.870444,
        latitude: 52.244824,
      },
    ],
  },
  {
    userId: 156,
    points: [
      {
        longitude: -0.718508,
        latitude: 52.509176,
      },
      {
        longitude: -0.731554,
        latitude: 52.493083,
      },
      {
        longitude: -0.715074,
        latitude: 52.455441,
      },
      {
        longitude: -0.660829,
        latitude: 52.476148,
      },
      {
        longitude: -0.625124,
        latitude: 52.501653,
      },
      {
        longitude: -0.650186,
        latitude: 52.519205,
      },
    ],
  },
  {
    userId: 157,
    points: [
      {
        longitude: -0.872028,
        latitude: 52.243707,
      },
      {
        longitude: -0.875204,
        latitude: 52.242314,
      },
      {
        longitude: -0.873444,
        latitude: 52.239003,
      },
      {
        longitude: -0.866213,
        latitude: 52.239647,
      },
      {
        longitude: -0.871871,
        latitude: 52.24394,
      },
    ],
  },
  {
    userId: 158,
    points: [
      {
        longitude: -0.889422,
        latitude: 52.239791,
      },
      {
        longitude: -0.898005,
        latitude: 52.242655,
      },
      {
        longitude: -0.897329,
        latitude: 52.244915,
      },
      {
        longitude: -0.892974,
        latitude: 52.245592,
      },
      {
        longitude: -0.884337,
        latitude: 52.246846,
      },
      {
        longitude: -0.882567,
        latitude: 52.246433,
      },
      {
        longitude: -0.884669,
        latitude: 52.242918,
      },
      {
        longitude: -0.88598,
        latitude: 52.241313,
      },
    ],
  },
  {
    userId: 159,
    points: [
      {
        longitude: -0.91006,
        latitude: 52.228969,
      },
      {
        longitude: -0.895641,
        latitude: 52.229074,
      },
      {
        longitude: -0.895126,
        latitude: 52.216402,
      },
      {
        longitude: -0.900533,
        latitude: 52.214351,
      },
      {
        longitude: -0.911948,
        latitude: 52.217664,
      },
    ],
  },
  {
    userId: 161,
    points: [
      {
        longitude: -0.909388,
        latitude: 52.220615,
      },
      {
        longitude: -0.910729,
        latitude: 52.219235,
      },
      {
        longitude: -0.905729,
        latitude: 52.21819,
      },
      {
        longitude: -0.905,
        latitude: 52.22145,
      },
      {
        longitude: -0.908561,
        latitude: 52.221634,
      },
    ],
  },
]

export function handler(event, context, callback) {
  callback(null, {
    statusCode: 200,
    body: JSON.stringify({ areas: mockData }),
  })
}
