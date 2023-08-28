import React from "react";
import {
  PageBack,
  PopupLink,
  PopupSkills,
  PopupSummary,
  PopupThink,
  PopupTitle,
} from "../styled/PopupStyled";

function Popup(props: {
  popProps: {
    id: string;
    title: string;
    link: string;
    summary: string;
    thinking: string;
    skills: string;
  };
}) {
  //css 수정하고, 모달창 구현하기
  return (
    <>
      <div id={props.popProps.id}>
        <PageBack>
          뒤로가기 버튼 / 약간의 여백을 둬서 바깥을 눌러도 모달창이 꺼지게만들기
        </PageBack>
        <PopupTitle>
          제목 컨테이너
          <h2>{props.popProps.title}</h2>
        </PopupTitle>

        <PopupLink>
          <h3>링크</h3>
          <a href={`${props.popProps.link}`} target="_blank" rel="noreferrer">
            {props.popProps.link}
          </a>
        </PopupLink>

        <PopupSummary>
          <h3>요약</h3>
          <p>{props.popProps.summary}</p>
        </PopupSummary>

        <PopupThink>
          <h3>개발하면서 한 생각들</h3>
          <p>{props.popProps.thinking}</p>
        </PopupThink>

        <PopupSkills>
          <h3>사용한 기술들</h3>
          <p>{props.popProps.skills}</p>
        </PopupSkills>
      </div>
    </>
  );
}

export default Popup;
