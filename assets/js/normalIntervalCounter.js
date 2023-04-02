import { dateStrFormatter } from "./utils.js";

export const normalIntervalCounter = () => {
  const $counter = document.querySelector("#counter");
  setInterval(() => {
    const dateObj = new Date();
    const dateStr = dateStrFormatter(dateObj);
    $counter.innerText = dateStr;
  }, 1000);
};
