# 뉴스 뷰어 어플리케이션 개발

## 목적
- 한국 뉴스 뷰어 개발
- Next.js 공부 목적
- yarn berry 공부 목적
  - yarn berry의 zero install을 공부해 본다.
- husky 공부 목적
  - Git client hook을 편하게 사용할 수 있는 husky를 공부해 본다.

## 시작하기
> 참조: [NextJS(TS) + Yarn berry boilerplate 생성
](https://velog.io/@young_pallete/Portfolio-NextJSTS-Yarn-berry-boilerplate-%EC%83%9D%EC%84%B1)

yarn을 사용하여 nextjs 프로젝트를 생성한다.

```bash
yarn create next-app . --typescript
```

이 때, README.md 파일이 생성되어 있다면 지워야 한다. 처음에 default로 생성한 README.md 파일이 있어서 계속 오류가 발생 했었다.  
성공적으로 설치가 완료되었다면, 이제 yarn 버전을 berry로 업그레이드 한다.

```bash
yarn set version berry
````

`packageManager`라는 프로퍼티가 `package.json` 파일 내에 추가 되었다면 성공한 것이다.  
다음은 `pnp(plug n play)`를 설정해준다.

```yml
# .yarnrc.yml 파일 내
nodeLinker: pnp
```

설정하지 않아도 yarn berry 덕분에 pnp로 동작한다고 하지만, 명시적으로 선언해 주는 것이 좋기 때문에 위와 같이 설정한다.  
이어서 `yarn dev` 명령어를 통해 실행하면 기존 `node_modules` 파일이 제거되며 정상적으로 실행 되는 것을 확인할 수 있다.

`prettier`와 `husky`를 사용하기 위한 설정은 참조 블로그에서 확인해보도록 하자.

> prettier와 함께 설정하는 stylelint는 tailwind css를 사용할 것이라서 일부러 뺐다.