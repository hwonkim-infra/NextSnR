import React from "react";
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath  } from 'react-katex';

import styles from "@/components/KRTAForms/print/printPages.module.scss";
import { TableCell } from "@mui/material";
import parse from "html-react-parser";

// 등판능력

const TravelSlopeWX = ({ values, config }) => {
  const radians_to_degrees = (radians) => {
    return radians * (180 / Math.PI);
  };


  const noslip_slope = radians_to_degrees(
    Math.atan(values.travel?.friction_surface)
  ).toFixed(1);
  const traction_slope = radians_to_degrees(
    Math.asin(
      (values.travel?.traction_force -
        values.travel?.running_resist * values.grossWeight) /
        values.grossWeight
    )
  ).toFixed(1);
  const min_slope = Math.min(
    values.travel?.engine_slope,
    noslip_slope,
    traction_slope
  ).toFixed();

  const greadability_description = values.travel?.greadability_description || ''


  return (
    <>
    <div className={styles.pages}>
      <table className={styles.borderTable}>
            <thead>
              <tr>
                  <th>
                  경사지 등판 및 제동 능력
                  </th>
              </tr>
            </thead>
            <tbody>
              <tr>
              <td className={styles.head_description}>
                  <p>
                    굴착기는 100분의 25(무한궤도식 굴착기는 100분의 30을 말한다)
                    기울기의 견고한 건조 지면을 올라갈 수 있고, 정지상태를
                    유지할 수 있는 제동장치 및 제동장금장치를 갖추어야 한다.
                  </p>
                  <br />
                  <p>○ 등판능력 관련 제원</p>
                    <table style={{width:"60%", height:"30%", margin: "auto"}} >
                    <thead>
                      <tr>
                        <th>항목</th>
                        <th>기호</th>
                        <th>단위</th>
                        <th>제원</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>장비 총 중량</td>

                        <td>
                        <InlineMath >{`\W_t`}</InlineMath>
                        </td>
                        <td>㎏</td>
                        <td>{values.grossWeight}</td>
                      </tr>
                      <tr>
                        <td>견인력</td>
                        <td>
                        <InlineMath >{`\DP`}</InlineMath>
                        </td>
                        <td>㎏/㎠</td>
                        <td>{values.travel?.traction_force}</td>
                      </tr>
                      <tr>
                        <td>지면마찰계수</td>
                        <td>
                        <InlineMath >{`\μ`}</InlineMath>
                        </td>

                        <td>cc/rev</td>
                        <td>{values.travel?.friction_surface}</td>
                      </tr>
                      <tr>
                        <td>주행 저항 계수</td>
                        <td>
                        <InlineMath >{`\ξ`}</InlineMath>
                        </td>
                        <td></td>
                        <td>{values.travel?.running_resist}</td>
                      </tr>
                    </tbody>
                  </table>
                  <br />
                  <p>○ 등판 및 유지 경사각 계산</p>

                    <table style={{width:"90%", height:"30%", margin: "auto"}} >
<tbody>
    <tr>
        <TableCell colSpan="3">미끄러지지 않는 최대 경사각 (마찰력)</TableCell>
    </tr>
    <tr>
        <td><InlineMath>{` \\mu \\cdot W_T \\cdot \\cos \\theta_1 = W_T \\cdot \\sin \\theta_1 `}</InlineMath></td>
        <td><InlineMath>{` \\theta_1 = \\tan^{-1} 0.90 `}</InlineMath></td>
        <td><BlockMath>{` ${noslip_slope} `}</BlockMath></td>
    </tr>
    <tr>
        <TableCell colSpan="3">흘러내리지 않는 최대 경사각 (견인력)</TableCell>

    </tr>
    <tr>
        <td><InlineMath>{` DP-\\xi W_T = W_T \\cdot \\sin \\theta_2 `}</InlineMath></td>
        <td><InlineMath>{` \\theta_2 = \\sin ^{-1} \\cfrac{${ values.travel?.traction_force } - ${
                    values.travel?.running_resist } \\cdot ${ values.grossWeight }}{${ values.grossWeight }} `}</InlineMath></td>

        <td><BlockMath>{` ${traction_slope} `}</BlockMath></td>
        
    </tr>
    <tr>
        <TableCell colSpan="3">엔진 오일 팬 기준 경사각</TableCell>

    </tr>
    <tr>
        <td>엔진 제원 사양</td>
        <td>
        </td>
        <td><BlockMath>{` ${values.travel?.engine_slope} `}</BlockMath></td>
    </tr>
    <tr>
        <TableCell colSpan="3">최종 경사각</TableCell>
    </tr>
    <tr style={{ background: "#e6e6e6" }}>
        <TableCell  colSpan="2" >위 3 가지 경사각 사양 중 가장 작은 값</TableCell>
        <td><BlockMath>{` ${min_slope} `}</BlockMath></td>
    </tr>
</tbody>
</table>

                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className={styles.pages} >
          <table className={styles.borderTable}>
            <thead>
              <tr>
                <th>{"등판능력 관련 자료"}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{parse(greadability_description)}</td>
              </tr>
            </tbody>
          </table>
        </div>
    </>
  );
};

export default TravelSlopeWX;
