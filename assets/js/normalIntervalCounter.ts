import { dateStrFormatter } from "./utils.js";

export const normalIntervalCounter = () => {
  const $counter = document.querySelector<HTMLDivElement>("#counter");
  setInterval(() => {
    const dateObj = new Date();
    const dateStr = dateStrFormatter(dateObj);
    if ($counter) {
      $counter.innerHTML = dateStr;
    }
  }, 1000);
};
