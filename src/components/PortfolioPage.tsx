import React, { useState } from "react";
import { useParams } from "react-router-dom";
import outletData from "../OutletProps";
import {
  OutletLink,
  OutletSkills,
  OutletSum,
  OutletThink,
  OutletTitle,
  OutletImg,
  OutletWrapper,
} from "../styled/OutletStyled";

function PortfolioPage() {
  /**
   *  css작업하고, 색상 조정 == 아직 결정을 하지 못함
   *  thinking 부분 설명 각각 추가하기 == 추가했는데 지속적 추가
   *  맨 위로 버튼 만들지 말지 고민 == 안함
   *
   *  클릭시 스크롤 이벤트 사이트 전반에 적용시키기 -> 제일 중요 == 적용완료
   *  스크롤 시에 y값 어색하지 않게 해당 섹터의 상단에 맞게 수치 정하기 == 수정완료
   *
   *  전체적인 디자인과 색상을 결정하고 바꿔야 함
   *  컨택에 깃허브, 이메일 추가하기
   */

  const params = useParams() as {
    Id: any;
    params: string;
  };
  const [img, setImg] = useState(outletData[params.Id].img);

  return (
    <>
      <OutletWrapper>
        <OutletTitle>{outletData[params.Id].title}</OutletTitle>

        <OutletLink to={`${outletData[params.Id].link}`}>
          {outletData[params.Id].link}
        </OutletLink>
        <OutletSkills>
          <div>📚Skills</div>
          {outletData[params.Id].skills}
        </OutletSkills>
        <OutletSum>
          <div>📌Summary</div>
          {outletData[params.Id].summary}
        </OutletSum>
        <OutletThink>
          <div>🤔Thinking</div>
          {outletData[params.Id].thinking}
        </OutletThink>
        <OutletImg>
          {img.map((a: any, i: number) => {
            return <img src={`${img[i]}`} />;
          })}
        </OutletImg>
      </OutletWrapper>
    </>
  );
}

export default PortfolioPage;
