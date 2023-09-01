import React, { useState } from "react";
import { useParams } from "react-router-dom";
import outletData from "../OutletProps";
import {
  OutletLink,
  OutletSkills,
  OutletSum,
  OutletThink,
  OutletTitle,
  OutletWrapper,
} from "../styled/OutletStyled";

function PortfolioPage() {
  /**
   * css작업하고, 색상 조정
   * thinking 부분 설명 각각 추가하기
   * 클릭시 스크롤 이벤트 사이트 전반에 적용시키기 - 제일 중요
   * 포폴페이지 카드 부분 사이즈 조정
   *  복잡하지 않지만, 너무 사전식은 아니게끔 알잘딱하게 디자인
   *
   */

  const params = useParams() as {
    Id: any;
    params: string;
  };
  console.log(params);
  return (
    <>
      <OutletWrapper>
        <OutletTitle>{outletData[params.Id].title}</OutletTitle>
        <OutletLink to={`${outletData[params.Id].link}`}>
          {outletData[params.Id].link}
        </OutletLink>
        <OutletSkills>
          <div>Skills</div>
          {outletData[params.Id].skills}
        </OutletSkills>
        <OutletSum>
          <div>Summary</div>
          {outletData[params.Id].summary}
        </OutletSum>
        <OutletThink>
          <div>Thinking</div>
          {outletData[params.Id].thinking}
        </OutletThink>
      </OutletWrapper>
    </>
  );
}

export default PortfolioPage;
