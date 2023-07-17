import React from "react";

import styles from "@/components/KRTAForms/print/printPages.module.scss";

const HDZSpec = ({ values }) => {
  return (
    <div className={styles.pages}>
      <h5> [별지 제3호의2서식] </h5>
      <table style={{ height: "270mm" }}>
        <thead>
          <tr>
            <th colSpan="6" height="50px" style={{ textAlign: "center" }}>
              건설기계 (무한궤도식 등) 제원표
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan="2" width="25%">
              형식승인(신고)자
            </td>
            <td colSpan="4">현대인프라코어㈜</td>
          </tr>
          <tr>
            <td colSpan="2">건설기계명</td>
            <td width="25%">불도저</td>
            <td colSpan="2" width="30%">
              제작회사(제작국)
            </td>
            <td>
              현대인프라코어 <br /> (대한민국){" "}
            </td>
          </tr>
          <tr>
            <td colSpan="2">형식</td>
            <td> {values.model_name}</td>
            <td colSpan="2">규격</td>
            <td>{values.machine_grade}</td>
          </tr>
          <tr>
            <td colSpan="2">자체중량 (㎏)</td>
            <td>{values.operating_weight}</td>
            <td colSpan="2">변속기</td>
            <td>{values.gearbox}</td>
          </tr>
          <tr>
            <td colSpan="2">최고속도 (㎞/hr)</td>
            <td id="">{values.travel?.travel_speed} </td>
            <td rowSpan="6" width="4%" className="vertical_cell">
              엔진
            </td>
            <td>형식</td>
            <td id="">{values.engine?.engine_name} </td>
          </tr>
          <tr>
            <td colSpan="2">등판능력 (무부하)</td>
            <td id="">{values.travel?.greadability} </td>
            <td>출력(정격출력)</td>
            <td>
              {values.engine?.power}ps @ {values.engine?.nominal_rev}rpm
            </td>
          </tr>
          <tr>
            <td rowSpan="4" width="4%" className="vertical_cell">
              외관
            </td>
            <td>길이 (㎜)</td>
            <td id="">{values.overall_length}</td>
            <td>최대토크(㎏ㆍm/rpm)</td>
            <td>
              {values.engine?.torque}㎏m @ {values.engine?.torque_rev}rpm
            </td>
          </tr>
          <tr>
            <td>너비 (㎜)</td>
            <td id="">{values.overall_width} </td>
            <td>기통수</td>
            <td id="">{values.engine?.cylinder}기통</td>
          </tr>
          <tr>
            <td>높이 (㎜)</td>
            <td id="">{values.overall_height} </td>
            <td>연료종류</td>
            <td>디젤 </td>
          </tr>
          <tr>
            <td>최저지상고 (㎜)</td>
            <td id="">{values.undercarriage?.ground_clearance} </td>
            <td>제작회사</td>
            <td id="">{values.engine?.supplier} </td>
          </tr>
          <tr>
            <td rowSpan="5" className="vertical_cell">
              무한궤도식등
            </td>
            <td>슈폭 (㎜)</td>
            <td id="">{values.undercarriage?.shoe_width} </td>
            <td rowSpan="5" className="vertical_cell">
              드럼등기타방식
            </td>
            <td>드럼치수(㎜× ㎜)</td>
            <td id="drum_size">-</td>
          </tr>
          <tr>
            <td>트랙높이</td>
            <td id="">{values.undercarriage?.track_height} </td>
            <td>타이어치수</td>
            <td id="tire_radius">-</td>
          </tr>
          <tr>
            <td>트랙중심간거리 (㎜)</td>
            <td id="">{values.undercarriage?.track_gap} </td>
            <td>축간거리 (㎜)</td>
            <td id="wheel_base">-</td>
          </tr>
          <tr>
            <td>텀블러중심간거리 (㎜)</td>
            <td id="">{values.undercarriage?.tumbler_distance} </td>
            <td>최소회전반경 (㎜)</td>
            <td id="min_turning_raduis">-</td>
          </tr>
          <tr>
            <td>접지압(㎏/㎠)</td>
            <td id="">{values.undercarriage?.ground_pressure} </td>
            <td>제동거리 (m/ ㎞/hr)</td>
            <td id="braking_distance">-</td>
          </tr>
          <tr>
            <td colSpan="6">작 업 장 치</td>
          </tr>
          <tr>
            <td colSpan="2">배토판형식</td>
            <td id="">흙을 미는 방식 </td>
            <td colSpan="2">배토판 너비</td>
            <td id="">{values.attachments?.dozer_width} </td>
          </tr>
          <tr>
            <td colSpan="2">틸트량</td>
            <td id="">{values.attachments?.dozer_tilt} </td>

            <td colSpan="2">배토판 높이</td>
            <td id="">{values.attachments?.dozer_height} </td>
          </tr>
          <tr>
            <td colSpan="2">앵글량</td>
            <td id="">{values.attachments?.dozer_angle} </td>

            <td colSpan="2">최대견인력</td>
            <td id="">{"최대견인력"} </td>
          </tr>

          <tr>
            <td colSpan="2">비고</td>
            <td colSpan="4" id="">
              {values.ETC}
            </td>
          </tr>

          <tr>
            <td colSpan="2">형식승인연월일</td>
            <td> </td>
            <td colSpan="2">형식승인번호</td>
            <td> </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default HDZSpec;
