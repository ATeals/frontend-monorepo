type Time = string | number | Date;

type ElapsedTimeDate = { start: Time; end: Time } | Time;

/**
 * 날짜를 받아서 경과한 시간을 포맷팅한 문자열로 반환합니다.
 * @typedef {string | number | Date} Time
 * @param date : Time | { start: Time, end: Time } 경과 시간을 구할 날짜
 * @returns string : 경과한 시간을 포맷팅한 문자열 ex) 1년 전, 1개월 전, 1일 전, 1시간 전, 1분 전, 방금 전
 */
export const elapsedTime = (date: ElapsedTimeDate) => {
  const isElapsedTimeDate = typeof date === "object" && !(date instanceof Date);

  const start = isElapsedTimeDate ? new Date(date.start) : new Date(date);
  const end = isElapsedTimeDate ? new Date(date.end) : new Date();

  if (start > end) throw new Error("시작 날짜가 종료 날짜보다 미래일 수 없습니다.");

  start.setMinutes(start.getMinutes() - start.getTimezoneOffset());
  end.setMinutes(end.getMinutes() - end.getTimezoneOffset());

  const diff = (end.getTime() - start.getTime()) / 1000;

  const times = [
    { name: "년", milliSeconds: 60 * 60 * 24 * 365 },
    { name: "개월", milliSeconds: 60 * 60 * 24 * 30 },
    { name: "일", milliSeconds: 60 * 60 * 24 },
    { name: "시간", milliSeconds: 60 * 60 },
    { name: "분", milliSeconds: 60 },
  ];

  for (const value of times) {
    const betweenTime = Math.floor(diff / value.milliSeconds);

    if (betweenTime > 0) {
      return `${betweenTime}${value.name} 전`;
    }
  }
  return "방금 전";
};
