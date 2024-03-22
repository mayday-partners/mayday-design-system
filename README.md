# MAYDAY DESIGN SYSTEM

메이데이 파트너스 프론트엔드 개발팀의 디자인 시스템입니다!

## 스크립트 실행

`npm run storybook` 으로 로컬에서 실행할 수 있습니다.

## npm publish

1. `npm run build` 로 빌드
2. `npm version <major | minor | patch>` 로 버전 업 (버전이 동일한 경우 publish 가 불가능합니다.)
3. `npm publish --access public` 으로 배포

## npm package info

[보러가기](https://www.npmjs.com/package/@maydaydevteam/yeeeyes-design)

## Check Point

1. 스타일시트 내에서 정의된 컬러를 사용해야 하는 경우, global.css 에 선언된 컬러명을 사용해주세요! --Light/Dark 모드-종류-타입 형식으로 선언되어 있습니다.

   EX: `color: var(--Light-Text-secondary)`

2. 컴포넌트 내에서 정의된 컬러를 사용해야 하는 경우, palette.ts 에 선언된 컬러를 사용해주세요! grey / textColor / bgColor / lineColor 가 정의되어있습니다.

   EX: `color: ${palette.light.textColor.secondary}`

   직접 `#555` 와 같이 직접 텍스트 입력은 지양해주세요.
