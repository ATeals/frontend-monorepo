# dateFormatter

날짜나 시간 형식을 포맷팅하는 유틸

## elapsedTime

경과 시간을 반환하는 함수

```ts
/**
 * @param args : string | number | Date 인 단일 인자 end가 현 시간으로 입력
 *
 * {start, end} 형식으로 입력 가능
 */
elapsedTime(args);
```

### 예시

```ts
elapsedTime(new Date()); // 방금 전
elapsedTime({
  start: new Date("2020-03-02"),
  end: new Date("2024-03-02"),
}); // 4년전
```

## formetDate

날짜를 지정된 형식으로 반환하는 함수

```ts
/**
 * Date 객체를 받아서 포맷팅한 문자열로 반환합니다.
 * @param date Date 객체
 * @param type 포맷팅 타입
 * @returns 포맷팅된 문자열
 */
formatDate(date, type);
```

### 포맷 형식

```ts
"YYYY/MM/DD" | "YYYY년 MM월 DD일" | "YYYY.MM.DD" | "YYMMDD";
```

### 예시

```ts
formatDate(new Date("2024-03-02"), "YYYY년 MM월 DD일"); //2024년03월02일

formatDate(new Date("2024-03-02"), "YYMMDD"); // 240302
```
