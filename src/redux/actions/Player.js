import {
  getPlayers,
  setBasicForm,
  setGameForm,
  setNotfication,
  setPlayerDetail,
} from "../slices/PlayerSlice";

const PlayerList = [
  {
    id: 1,
    status: true,
    basicinfo: {
      img: "/CBL_Images/player-default-profile.webp",
      firstName: "Deepak",
      email: "wellbenix@gmail.com",
      lastName: "Prajapati",
      dateofbirth: new Date(),
      gender: "m",
      pincode: "382340",
    },
    gameinfo: {
      height: "168",
      weight: "200",
      playerPosition: "Center",
      JerseyNumber: "69",
      Experience:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. ur amet. Tempora aspernatur accusantium ipsam adipisci voluptatibus.",
    },
    statics: {
      totalMatch: 100,
      matchWon: 100,
      matchLoss: 0,
      totalScore: 320,
    },
    teamDetails: [
      {
        team_id: 1001,
        team_logo: "/CBL_Images/basketball_team_logo_2.webp",
        team_name: "Mehta Ke Mahaarathi",
        description:
          "Lorem ipsum dolor sit amet, consectetur adip, Lorem ipsum dolor sit amet, consectetur adip",
        coach_name: "Mohammadshad Mohammadsajid Rajput",
        coach_mobile: "9000000000",
        assistant_coach_name: "coach abc",
        assistant_coach_mobile: "9989999999",
        total_players: 7,
        captain: 1,
        matches_played: 22,
        matches_won: 18,
        matches_lost: 4,
      },
    ],
  },
  {
    id: 2,
    status: true,
    basicinfo: {
      img: "/CBL_Images/7xm.xyz481259.jpg",
      firstName: "Sadik",
      email: "wellbenix@gmail.com",
      lastName: "Prajapati",
      dateofbirth: new Date(),
      gender: "m",
      pincode: "382340",
    },
    gameinfo: {
      height: "168",
      weight: "200",
      playerPosition: "Center",
      JerseyNumber: "69",
      Experience:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. ur amet. Tempora aspernatur accusantium ipsam adipisci voluptatibus.",
    },
    statics: {
      totalMatch: 100,
      matchWon: 100,
      matchLoss: 0,
      totalScore: 320,
    },
    teamDetails: [
      {
        team_id: 1001,
        team_logo: "/CBL_Images/basketball_team_logo_2.webp",
        team_name: "Mehta Ke Mahaarathi",
        description:
          "Lorem ipsum dolor sit amet, consectetur adip, Lorem ipsum dolor sit amet, consectetur adip",
        coach_name: "Mohammadshad Mohammadsajid Rajput",
        coach_mobile: "9000000000",
        assistant_coach_name: "coach abc",
        assistant_coach_mobile: "9989999999",
        total_players: 7,
        captain: 1,
        matches_played: 22,
        matches_won: 18,
        matches_lost: 4,
      },
    ],
  },
  {
    id: 3,
    status: true,
    basicinfo: {
      img: "/CBL_Images/7xm.xyz441074.jpg",
      firstName: "Umang",
      email: "wellbenix@gmail.com",
      lastName: "Prajapati",
      dateofbirth: new Date(),
      gender: "m",
      pincode: "382340",
    },
    gameinfo: {
      height: "168",
      weight: "200",
      playerPosition: "Center",
      JerseyNumber: "69",
      Experience:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. ur amet. Tempora aspernatur accusantium ipsam adipisci voluptatibus.",
    },
    statics: {
      totalMatch: 100,
      matchWon: 100,
      matchLoss: 0,
      totalScore: 320,
    },
    teamDetails: [
      {
        team_id: 1001,
        team_logo: "/CBL_Images/basketball_team_logo_2.webp",
        team_name: "Mehta Ke Mahaarathi",
        description:
          "Lorem ipsum dolor sit amet, consectetur adip, Lorem ipsum dolor sit amet, consectetur adip",
        coach_name: "Mohammadshad Mohammadsajid Rajput",
        coach_mobile: "9000000000",
        assistant_coach_name: "coach abc",
        assistant_coach_mobile: "9989999999",
        total_players: 7,
        captain: 1,
        matches_played: 22,
        matches_won: 18,
        matches_lost: 4,
      },
    ],
  },
  {
    id: 4,
    status: true,
    basicinfo: {
      img: "/CBL_Images/player-default-profile.webp",
      firstName: "Monu",
      email: "wellbenix@gmail.com",
      lastName: "Prajapati",
      dateofbirth: new Date(),
      gender: "m",
      pincode: "382340",
    },
    gameinfo: {
      height: "168",
      weight: "200",
      playerPosition: "Center",
      JerseyNumber: "69",
      Experience:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. ur amet. Tempora aspernatur accusantium ipsam adipisci voluptatibus.",
    },
    statics: {
      totalMatch: 100,
      matchWon: 100,
      matchLoss: 0,
      totalScore: 320,
    },
    teamDetails: [
      {
        team_id: 1001,
        team_logo: "/CBL_Images/basketball_team_logo_2.webp",
        team_name: "Mehta Ke Mahaarathi",
        description:
          "Lorem ipsum dolor sit amet, consectetur adip, Lorem ipsum dolor sit amet, consectetur adip",
        coach_name: "Mohammadshad Mohammadsajid Rajput",
        coach_mobile: "9000000000",
        assistant_coach_name: "coach abc",
        assistant_coach_mobile: "9989999999",
        total_players: 7,
        captain: 1,
        matches_played: 22,
        matches_won: 18,
        matches_lost: 4,
      },
    ],
  },
  {
    id: 5,
    status: true,
    basicinfo: {
      img: "/CBL_Images/player-default-profile.webp",
      firstName: "po",
      email: "wellbenix@gmail.com",
      lastName: "Prajapati",
      dateofbirth: new Date(),
      gender: "m",
      pincode: "382340",
    },
    gameinfo: {
      height: "168",
      weight: "200",
      playerPosition: "Center",
      JerseyNumber: "69",
      Experience:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. ur amet. Tempora aspernatur accusantium ipsam adipisci voluptatibus.",
    },
    statics: {
      totalMatch: 100,
      matchWon: 100,
      matchLoss: 0,
      totalScore: 320,
    },
    teamDetails: [
      {
        team_id: 1001,
        team_logo: "/CBL_Images/basketball_team_logo_2.webp",
        team_name: "Mehta Ke Mahaarathi",
        description:
          "Lorem ipsum dolor sit amet, consectetur adip, Lorem ipsum dolor sit amet, consectetur adip",
        coach_name: "Mohammadshad Mohammadsajid Rajput",
        coach_mobile: "9000000000",
        assistant_coach_name: "coach abc",
        assistant_coach_mobile: "9989999999",
        total_players: 7,
        captain: 1,
        matches_played: 22,
        matches_won: 18,
        matches_lost: 4,
      },
    ],
  },
];

export const getPlayerList = (index) => {
  return async (dispatch) => {
    dispatch(getPlayers(PlayerList));
  };
};

export const searchPlayers = (search) => {
  return async (dispatch) => {
    const Searchresult = PlayerList.filter((player) =>
      player.basicinfo.firstName.toLowerCase().includes(search.toLowerCase())
    );
    dispatch(getPlayers(Searchresult));
  };
};

export const findPlayer = (id) => {
  const player = PlayerList.find((player) => player.id == id);
  return async (dispatch) => {
    dispatch(setPlayerDetail(player));
  };
};

export const setBasicInfoForm = (basicInfo) => {
  return async (dispatch) => {
    dispatch(setBasicForm(basicInfo));
  };
};

export const setGameInfoForm = (basicInfo) => {
  return async (dispatch) => {
    dispatch(setGameForm(basicInfo));
  };
};

export const getNotification = () => {
  let Notification = [
    {
      id: 1,
      msg: "Shoot for the moon. Even if you miss, you'll land among the stars.",
      isSeen: false,
    },
    {
      id: 2,
      msg: "Good, better, best. Never let it rest. Until your good is better and your better is best.",
      isSeen: false,
    },
    {
      id: 3,
      msg: "Excellence is not a singular act, but a habit. You are what you repeatedly do.",
      isSeen: false,
    },
    {
      id: 4,
      msg: "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
      isSeen: false,
    },
  ];
  return async (dispatch) => {
    dispatch(setNotfication({ ok: true, data: Notification }));
  };
};
