import { interval, timestamp } from "rxjs";
import { dateStrFormatter } from "./utils";

export const reactiveIntervalTimer = () => {
  const $counter = document.querySelector<HTMLDivElement>("#reactive-timer");
  interval(1000)
    .pipe(timestamp())
    .subscribe((data) => {
      const dateObj = new Date(data.timestamp);
      const dateStr = dateStrFormatter(dateObj);
      $counter.innerHTML = "반응형 프로그래밍 시계 : " + dateStr;
    });
};
