import { reactive } from "vue";

export const store = reactive({
  // AppCount
  counts: [
    {
      number: "700+",
      text: "Project Done",
    },
    {
      number: "250+",
      text: "Happy Clients",
    },
    {
      number: "25+",
      text: "Team Members",
    },
    {
      number: "12+",
      text: "Years on the market",
    },
  ],
  // AppWork
  works: [
    {
      src: "assets/work1.png",
      href: "https://www.youtube.com/watch?v=yFruBMVvCZQ",
    },
    {
      src: "assets/work2.png",
      href: "https://www.youtube.com/watch?v=yFruBMVvCZQ",
    },
    {
      src: "assets/work3.png",
      href: "https://www.youtube.com/watch?v=yFruBMVvCZQ",
    },
    {
      src: "assets/work4.png",
      href: "https://www.youtube.com/watch?v=yFruBMVvCZQ",
    },
  ],
  // SwiperProcess
  processBoxs: [
    {
      src: "assets/process1.png",
      title: "Scripting",
      text: "We’ll take your idea and create a technical script which consists of action notes and animation descriptions",
      badge: "1",
    },
    {
      src: "assets/process2.png",
      title: "Pre-Production",
      text: "We’ll take your idea and create a technical script which consists of action notes and animation descriptions",
      badge: "2",
    },
    {
      src: "assets/process1.png",
      title: "Scripting",
      text: "We’ll take your idea and create a technical script which consists of action notes and animation descriptions",
      badge: "3",
    },
    {
      src: "assets/process2.png",
      title: "Pre-Production",
      text: "We’ll take your idea and create a technical script which consists of action notes and animation descriptions",
      badge: "4",
    },
  ],
  // SwiperTeam
  teamsBoxs: [
    {
      src: "assets/team1.png",
      name: "Philippe",
      mansion: "CEO",
    },
    {
      src: "assets/team2.png",
      name: "Arthur",
      mansion: "Administrator",
    },
    {
      src: "assets/team4.png",
      name: "Gulian",
      mansion: "Senior Dev",
    },
    {
      src: "assets/team1.png",
      name: "Chris",
      mansion: "Project Lead",
    },
    {
      src: "assets/team2.png",
      name: "Victor",
      mansion: "Middle Dev",
    },
  ],
  // SwiperClient
  clientsBoxs: [
    {
      src: "assets/sponsor1.png",
    },
    {
      src: "assets/sponsor2.png",
    },
    {
      src: "assets/sponsor3.png",
    },
    {
      src: "assets/sponsor4.png",
    },
    {
      src: "assets/sponsor5.png",
    },
    {
      src: "assets/sponsor6.png",
    },
    {
      src: "assets/sponsor1.png",
    },
    {
      src: "assets/sponsor2.png",
    },
  ],
});
