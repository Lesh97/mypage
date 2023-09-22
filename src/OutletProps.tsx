let popupProps = [
  {
    id: "0",
    title: "Lesh Shoes Shop",
    link: "https://leshshoesshop.netlify.app/",
    summary:
      "네이버 API를 사용해서 상품을 전달받고, 나이키 및 ABC마트를 참고하여 만든 신발 판매 쇼핑몰 사이트 ",
    thinking: `
      물건을 사고 팔거나 레플서비스를 구현 할 수 있는 쇼핑몰을 만들면 다양한 시도를 할 수 있지 않을까? 는 생각을 시작으로 여러 쇼핑몰을 돌아다니며 레퍼런스를 수집하고 괜찮은 기능들을 구현해보았습니다.
      동영상도 페이지에 사용해보고, 네이버API도 사용해서 현재 판매중인 상품과 지도API도 사용을 해봤습니다.
      로컬에서 실행시에는 모든 자료가 잘 나오지만 proxy 설정만으로는 배포할 때에 적용되지 않기 때문에, 따로 서버를 구축해놓지 않아서 지도와 상품은 나오지 않습니다. 
      `,
    skills: "JavaScript, TypeScript, styled-components, Express, NodeJS",
    img: [
      "/portImg/shoesImgProps1.png",
      "/portImg/shoesImgProps2.png",
      "/portImg/locationImgProps.png",
    ],
  },
  {
    id: "1",
    title: "LeshFlix",
    link: "https://lesh97.github.io/React_Movie/",
    summary:
      "movieDB 사이트의 API를 사용해서 데이터를 받아오고, NETFLIX 사이트를 참고하여 만든 OTT 서비스 사이트 ",
    thinking: `사람들이 많이 사용하는 플랫폼을 만들어보자는 생각으로 접근해서 OTT서비스중에 하나를 구현해보면 좋겠다는 생각이 들었다. 다양한 서비스가 있지만 OTT서비스 붐을 불러 일으킨 넷플릭스를 레퍼런스로 잡고 만들게 되었습니다.
    많은 것들을 처음 사용해본 프로젝트였습니다. 외부 API를 받아오는 것, 타입스크립트를 활용한 것, recoil로 상태관리를 해본 것 등 이해하는 것부터 시간이 오래걸렸고 적용하는 것도 시간이 오래걸렸습니다. 
    구현을 하면서 가장 애를 먹었던 것은 recoil의 이해였습니다. 외부API에서 데이터를 받아오고, 다양한 데이터를 Props로 넘겨야 하는데 recoil의 이해가 부족했던터라 recoil방식이 아닌 리액트방식으로 전달을 많이 해서 애를 많이 썼습니다.
    CORS에러도 접해보고, API를 다양하게 가져와서 props로 여기저기 필요한 곳에 넘기면서 리액트를 좀 더 알게 되었고, 파일과 폴더를 명확하게 구분하고 함수명을 알기쉽게 만들어야 개발시에 헷갈리지 않는다는 것을 뼈저리게 느꼈습니다.
    `,
    skills: "TypeScript, styled-components, NodeJS, Recoil",
    img: [],
  },

  {
    id: "2",
    title: "LeshTube",
    link: "https://singcube.herokuapp.com/",
    summary:
      "최근 사람들이 가장 많은 정보를 얻고, 시간을 할애하며 사용하는 사이트인 YOUTUBE를 만들어 보고 싶어서 참고하여 만든 동영상 업로드 사이트",
    thinking: `개발을 시작하고 한번은 만들어보고 싶다고 생각한 프로젝트입니다. 
       서버쪽도 어느정도 알고 있어야 한다는 생각을 가지고 있던터라, 이 프로젝트를 기회삼아 Express로 도전해보게 되었습니다.
       템플릿 엔진도 사용해보면 좋은 경험이 될 것이라 생각해서 사람들이 많이 사용하는 pug를 사용했고, 데이터베이스는 MongoDB를 사용했습니다.
      어려웠던 점은 기존에 사용하던 HTML,CSS,JS 외에 다른 것들을 시도하면서 오는 이해의 부족이 큰 걸림돌이였습니다. 하나하나 다 찾아가며 프로젝트를 진행하며 서버와 DB까지 간단하게나마 구현을 하다보니
      굉장히 신경써야할 부분이 많구나 라는것을 느꼈습니다.
      
      `,
    skills: "NodeJS, Express, MongoDB, ES6, Sass, Pug",
    img: [],
  },

  {
    id: "3",
    title: "To-Dorello",
    link: "https://lesh97.github.io/Kanban_board/",
    summary: "트렐로 방식을 사용한 To-Do List 사이트",
    thinking: `트렐로라는 사이트를 처음 알게 되면서 기능이 굉장히 신기하고, 
      시각적인 부분과 기능적인 부분이 너무 마음에 든 서비스여서 메인 기능을 구현해보고 싶어서 만들게 되었습니다.
      트렐로 프로젝트가 이미 유명하기도 해서 정보도 많고, 에러해결방법도 많기에 구현에 어려움은 크게 없었습니다.
      자바스크립트로만 구현했던 투두리스트를 리액트에서 다시 만들면서, 추가적인 기능들도 사용해볼 수 있는 기회였다고 생각합니다.
      또한 리액트에서 배열의 복사에 대해 다시한번 복습할 수 있는 좋은 기회였다고 생각합니다.
      `,
    skills: "TypeScript, nodeJS, recoil, styled-components",
    img: [],
  },
  {
    id: "4",
    title: "To-Do List",
    link: "https://lesh97.github.io/JS_TodoList/",
    summary: "기본적인 HTML, CSS, JS를 연습하기 위해 만든 To-Do List 사이트",
    thinking: `개발을 시작한 후 CSS,JS를 배우고 처음으로 만들어본 투두리스트 서비스를 제공하는 사이트입니다.
      가장 기초라고 볼 수 있는 HTML, CSS, JS 만을 가지고 사이트를 구현했으며, 날씨API도 사용을 해봤습니다.
      처음에 브라우저의 메인 페이지로 생각을 하고 시작을 했기 때문에, 투두리스트 외에 날씨, 시간, 좋은 글귀등의 다양한 기능을 추가했습니다.
      구현하면서 어려웠던 점은 시계를 구현할 때 혼자서 구현을 해보려고 했는데 시간 계산과 원형시계구현이 조금 어려웠으며 또한
      시계는 정말 다양하고 무궁무진한 방법으로 구현이 가능하다는 것을 알게 되었습니다. 
      `,
    skills: "Html, CSS, JavaScript",
    img: [],
  },
  {
    id: "5",
    title: "gatsby-Practicing",
    link: "https://devaccessary.netlify.app",
    summary:
      "Gatsby 프레임워크 연습해보고 contentful사이트를 활용한 DB를 구축해보기 위해 만든 사이트",
    thinking: `프레임워크를 사용해보고 싶어서 도전한 Gatsby프레임워크입니다.
    리액트 기반이기도 하고 SSR지원을 안하다보니 정적인 사이트를 만드는데 적합하다고 생각했고,
    정보도 많이 존재해서 에러를 만났을 때 어떻게든 해결할 방법이 많겠구나 생각을 했습니다.
    또한 연습이 목적인지라 가볍게 시작하기 부담감이 적다고 생각도 했습니다. 
    갯츠비를 사용하면서 다양한 갯츠비 플러그인이 있다는 걸 알게 되었습니다. GraphQL과 연결도 너무 간단했으며,
    이외에도 이미지, mdx등 여러 플러그인을 활용해서 개발을 편리하게 하는 도구들이 많아서 필요할 때마다 플러그인을 찾아보고 활용하면 좋겠다는 생각을 했습니다.
    
      `,
    skills: "TypeScript, graphQL, NodeJS, contentful, Gatsby",
    img: [],
  },
];

export default popupProps;
