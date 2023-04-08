export const dateStrFormatter = (dateObj: Date) => {
  const hour = dateObj.getHours();
  const minute = dateObj.getMinutes();
  const seconds = dateObj.getSeconds();
  return `${hour}시 ${minute}분 ${seconds}초`;
};
