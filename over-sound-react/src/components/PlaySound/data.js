import { DateTime } from "luxon";
import one from "./audio/RnB185bpmAm.wav";
import two from "./audio/lofi117bpmKeyB.wav";
import three from "./audio/happypartoflife.mp3";

export const items = [
  {
    // Image item:
    itemId: 1,
    title: "Iamroofa - Face It",
    bpm: "185",
    category: "RnB",
    key: "Am",
    date: DateTime.now(),
    src: one,
  },
  {
    // Image item:
    itemId: 2,
    title: "270622 PIANO",
    bpm: "117",
    category: "Lo-Fi",
    key: "B",
    date: DateTime.now(),
    src: two,
  },
  {
    // Image item:
    itemId: 3,
    title: "happy part of life",
    bpm: "unknown",
    category: "Plug",
    key: "C",
    date: DateTime.now(),
    src: three,
  },
];
