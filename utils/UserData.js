const userData = [
  {
    userName: "earthanimaltrackspig",
    email: "bmw525d@maoaokachima.com",
  },
  {
    userName: "chimpanzeeharpcowfig",
    email: "jlenning@oru-host.store",
  },
  {
    userName: "hamtsunamiharmonica",
    email: "viktorpraga@homequestion.us",
  },
  {
    userName: "thejokerpeasbeanssea",
    email: "stalkerjon@pusatinfokita.com",
  },
  {
    userName: "menkartomatojuicedog",
    email: "modern72@dmailx.com",
  },
  {
    userName: "chickenthedeparted",
    email: "lvjay2003@bukan.es",
  },
  {
    userName: "rocketspectacularpig",
    email: "nsmith50@email-brasil.com",
  },
  {
    userName: "triangulumalgolwolf",
    email: "zackhaas18@cheapedu.me",
  },
  {
    userName: "ragingbulldownfall",
    email: "jencarob@bukan.es",
  },
  {
    userName: "volleyballwoodedrye",
    email: "machosamson@buzzcol.com",
  },
];

const anyUser = () => {
  userData[Math.floor(Math.random() * userData.length)];
};

module.exports = {
  anyUser,
  userData,
};
