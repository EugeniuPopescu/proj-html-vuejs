import { reactive } from "vue";

export const store = reactive({
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
});
