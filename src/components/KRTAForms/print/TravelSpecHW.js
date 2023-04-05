import styles from "@/components/KRTAForms/print/printPages.module.scss";
import { TableCell } from "@mui/material";
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath  } from 'react-katex';
import parse from "html-react-parser";


const TravelSpecHW = ({ values, config }) => {

  const travel_speed_description = values.travel?.travel_speed_description || ''


  return (
    <>
        <div className={styles.pages}>
          <table className={styles.borderTable}>
            <thead>
              <tr>
                <th>주행 속도</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={styles.head_description}>
                  <p>
                    “최고속도”란 평탄하고 건조한 아스팔트 포장노면에서 운전중량
                    상태의 건설기계가 주행할 수 있는 최고속도를 말한다.
                  </p>
                  <br />
                  <p>
                    ▷ 아래 계산 결과에 따라{" "}
                    <strong>
                      {" "}
                      최고 주행 속도는 {values.travel?.travel_speed}㎞/h
                    </strong>
                  </p>
                  <br />
                  <p>○ 주행 성능 관련 사양</p>
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
                        <td>주행 펌프 유량</td>
                        <td>
                        <BlockMath >{`\Q`}</BlockMath>
                        </td>
                        <td>l/min</td>
                        <td>{values.travel?.pump_displacement_travel}</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>주행 모터 용적 효율</td>
                        <td>
                        <BlockMath >{`\η_{mv}`}</BlockMath>
                        </td>
                        <td></td>
                        <td>{values.travel?.motor_eff_travel}</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>트랜스미션 감속비</td>
                        <td>
                        <BlockMath >{`\I_t`}</BlockMath>
                        </td>
                        <td></td>
                        <td>{values.travel?.TM_reduction}</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>액슬 감속비</td>
                        <td>
                        <BlockMath >{`\I_r`}</BlockMath>
                        </td>
                        <td></td>
                        <td>{values.travel?.axle_reduction}</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>타이어 동하중 반경</td>
                        <td>
                        <BlockMath >{`\R`}</BlockMath>
                        </td>
                        <td>㎜</td>
                        <td>{values.travel?.tire_rolling_radius}</td>
                        <td></td>
                      </tr>
                    </tbody>
                  </table>
                  <br />
                  <p>○ 주행모터 회전속도에 따른 주행속도 계산</p>
                  <table
                    style={{ width: "100%", height: "40%", margin: "auto" }}
                  >
                    <tbody>
                      <tr>
                        <TableCell colSpan="3">
                          주행모터 축 회전수(rpm)
                        </TableCell>
                      </tr>
                      <tr style={{ height: "40%" }}>
                        <td>
                          <InlineMath>{`SM = \\cfrac{\Q \\times \\mu_{mv}}{q} \\times 1,000`}</InlineMath>
                        </td>
                        <td>
                          <InlineMath>{` \\cfrac{ ${values.travel?.pump_displacement_travel} \\times ${values.travel?.motor_eff_travel}}{${values.travel?.motor_displacement_travel} } \\times 1,000`}</InlineMath>
                        </td>
                        <td>
                          <BlockMath>{`${values.travel?.axle_motor_rev}`}</BlockMath>
                        </td>
                      </tr>

                      <tr>
                        <TableCell colSpan="3">주행속도 (km/hr)</TableCell>
                      </tr>
                      <tr style={{ background: "#e6e6e6", height: "40%" }}>
                        <td>
                          <InlineMath>{`V = \\cfrac {SM \\times 2\\pi R \\times 60}{I_t \\times I_r \\times 10^3}`}</InlineMath>
                        </td>
                        <td>

                        <InlineMath>{`V = \\cfrac {${values.travel?.axle_motor_rev} \\times 2\\pi \\cdot ${values.travel?.tire_rolling_radius} \\times 60}{${values.travel?.TM_reduction} \\times ${values.travel?.axle_reduction} \\times 10^3}`}</InlineMath>
                        </td>

                        <td>
                          <BlockMath>{`${values.travel?.travel_speed}`}</BlockMath>
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
                <th>{"주행속도 관련 자료"}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{parse(travel_speed_description)}</td>
              </tr>
            </tbody>
          </table>
        </div>
    </>
  );
};

export default TravelSpecHW;
