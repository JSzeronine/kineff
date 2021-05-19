# kineff

## Project setup
npm install

## Project dev server
npm run dev

## Project build
npm run build




### Folder structure

doc
- 참고할 내용 정리 폴더

src (구현 소스 폴더)
- assets
- components
- mixin (components interface)
- pages
  - information (about, contact)
  - product (all product)
- plugins
App.vue (main)
index.html (main)
static (고정 소스 폴더)




### Plugins
PIXI.js
- graphic 라이브러리
  키비쥬얼에 배경 라이팅에 사용

Gsap > ScrollTrigger
- 전체 사이트의 스크롤 모션에 사용

locomotive scroll
- smooth scroll 구현



### webpack plugins
ProvidePlugin
- global로 plugins을 사용

HtmlWebpackPlugin
- html 파일을 셋팅한 값을 넣어서 dist로 빌드

CopyWebpackPlugin
- static 폴더 dist 복사
