import styles from "@/components/KRTAForms/print/printPages.module.scss";
import { Box, TableCell, Typography } from "@mui/material";
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath  } from 'react-katex';
import parse from "html-react-parser";

/* 최소회전반경 */

const TravelRadiusHW = ({ values, config }) => {

  const turning_radius_description = values.travel?.turning_radius_description || ''

  const degrees_to_radians = (degrees) => {
    return degrees / (180 / Math.PI);
  };
  const radians_to_degrees = (radians) => {
    return radians * (180 / Math.PI);
  };
  const innerKingpin_COS = Math.round(
    values.undercarriage?.wheel_base /
      Math.sin(degrees_to_radians(values.travel?.wheel_angle))
  );

  return (
    <>
        <div className={styles.pages}>
          <table className={styles.borderTable}>
            <thead>
              <tr>
                <th>최소 회전 반경</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={styles.head_description}>
                  <p>
                  “최소회전반경”이란 수평면에 놓인 건설기계가 선회할 때 바퀴 또는 기동륜의 중심이 그리는 원형 궤적 가운데 가장 큰 반지름을 가지는 궤적의 반지름을 말한다.
                  </p>
                  <br />
                  <p>
                    ▷ 아래 계산 결과 및 보정 결과에 따라 
                  </p>
                  <br />
                    <strong>
                      최소 회전 반경은 {values.travel?.turning_radius}㎜
                    </strong>
                  <br />
                  <br />
                  <p>○ 회전반경 관련 사양</p>
                  <table
                    style={{ width: "80%", height: "30%", margin: "auto" }}
                  >
                    <thead>
                      <tr>
                        <th>항목</th>
                        <th>기호</th>
                        <th>단위</th>
                        <th>제원</th>
                        <th>비고</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>축간거리</td>
                        <td>
                        <BlockMath >{`\A`}</BlockMath>
                        </td>
                        <td>㎜</td>
                        <td>{values.undercarriage?.wheel_base}</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>킹핀(스티어링핀)간 거리</td>
                        <td>
                        <BlockMath >{`\L`}</BlockMath>
                        </td>
                        <td></td>
                        <td>{values.travel?.kingpin_gap}</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>킹핀에서 타이어 중심까지의 거리</td>
                        <td>
                        <BlockMath >{`\d`}</BlockMath>
                        </td>
                        <td></td>
                        <td>{values.travel?.kingpin_offset}</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>외륜최대조향각</td>
                        <td>
                        <BlockMath >{`\α`}</BlockMath>
                        </td>
                        <td>deg</td>
                        <td>{values.travel?.wheel_angle}</td>
                        <td></td>
                      </tr>
                      
                    </tbody>
                  </table>
                  <br />
                  <p>○ 내륜 킹핀과 선회 중심과의 거리 계산</p>
                  <table
                    style={{ width: "100%", height: "40%", margin: "auto" }}
                  >
                    <tbody>
                      <tr >
                        <TableCell colSpan="3">
                        내륜 킹핀과 선회 중심과의 거리 계산
                        </TableCell>
                      </tr>
                      <tr style={{ height: "40%" }}>
                        <td>
                          <InlineMath>{` X = \\cfrac{A }{\sin \α} `}</InlineMath>
                        </td>
                        <td>
                          <InlineMath>{` \\cfrac{${values.undercarriage?.wheel_base} }{\sin ${values.travel?.wheel_angle}} `}</InlineMath>
                        </td>
                        <td width="15%">
                          <BlockMath>{`${innerKingpin_COS}`}</BlockMath>
                        </td>
                      </tr>

                      <tr>
                        <TableCell colSpan="3">외륜 최소 회전 반경 (㎜)</TableCell>
                      </tr>
                      <tr style={{ height: "40%", background: "#e6e6e6"  }}>
                        <td>
                          <InlineMath>{` R = X + d `}</InlineMath>
                        </td>
                        <td>

                        <InlineMath>{` ${innerKingpin_COS} + ${values.travel?.kingpin_offset} `}</InlineMath>
                        </td>

                        <td>
                          <BlockMath>{`${innerKingpin_COS + values.travel?.kingpin_offset}`}</BlockMath>
                        </td>
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
                <th>{"회전반경 관련 자료"}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
              <Box sx={{ p: 1 }}>
                  <Typography variant="h7">
                    
                    {values.travel?.turning_radius_tested}
                  </Typography>
                </Box>
                  {parse(turning_radius_description)}
                  </td>
              </tr>
            </tbody>
          </table>
        </div>
    </>
  );
};

export default TravelRadiusHW;
