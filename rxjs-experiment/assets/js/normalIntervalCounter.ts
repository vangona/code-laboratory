import { dateStrFormatter } from "./utils";

export const normalIntervalTimer = () => {
  const $counter = document.querySelector<HTMLDivElement>("#timer");
  setInterval(() => {
    const dateObj = new Date();
    const dateStr = dateStrFormatter(dateObj);
    if ($counter) {
      $counter.innerHTML = "일반적인 시계 : " + dateStr;
    }
  }, 1000);
};
