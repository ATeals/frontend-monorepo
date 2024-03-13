# hangul

한글 관련 유틸

## isHangul

문자열이 한글인지 확인하는 함수

### 예시

```ts
isHangul("한글"); // true
isHangul("hangul"); // false
```

## disassembleHangul

한글 문자열을 자음 모음 분리한 배열로 반환하는 함수

### 예시

```ts
disassembleHangul("한글");
// ["ㅎ", "ㅏ", "ㄴ", "ㄱ", "ㅡ", "ㄹ"]
```

## disassembleChosung

한글 문자열의 초성을 배열로 반환하는 함수

### 예시

```ts
disassembleChosung("한글");
// ["ㅎ", "ㄱ"]
```

## hangulIncludes

두 한글을 비교해 두번째 한글이 첫번째 한글에 포함되는지 여부를 판단하는 함수

```ts
hangulIncludes(mainString, subString, options);
```

### options

- checkWhitespace : 공백도 포함해 비교할 것인지에 대한 여부 (기본값 true)

### 예시

```ts
hangulIncludes("한글이 포함되어 있으면 true를 반환합니다", "한글이 포함되어 있으면"); // true
```

## hangulChosungIncludes

두 한글의 초성을 비교해 두번째 한글 초성이 첫번째 한글 초성에 포함되는지 여부를 판단하는 함수

```ts
hangulChosungIncludes(mainString, subString, options);
```

### options

- checkWhitespace : 공백도 포함해 비교할 것인지에 대한 여부 (기본값 true)

### 예시

```ts
hangulIncludes("한글이 포함되어 있으면 true를 반환합니다", "ㅎㄱㅇ ㅍㅎㄷㅇ ㅇㅇㅁ true"); // true
```
