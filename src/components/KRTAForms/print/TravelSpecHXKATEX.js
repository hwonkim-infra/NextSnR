import { TableCell } from "@mui/material";
import 'katex/dist/katex.min.css';
import { BlockMath, InlineMath } from 'react-katex';
import styles from "@/components/KRTAForms/print/printPages.module.scss";

// 퀵커플러 탈착

const TravelSpecHXKatex = ({ values, config }) => {
  const TM_rev_1 =
    Math.round(
      ((values.travel?.pump_displacement * values.travel?.TM_mv) /
        (values.travel?.TM_flow_1 * values.travel?.reduc)) *
        1000 *
        100
    ) / 100;
  const TM_rev_2 =
    Math.round(
      ((values.travel?.pump_displacement * values.travel?.TM_mv) /
        (values.travel?.TM_flow_2 * values.travel?.reduc)) *
        1000 *
        100
    ) / 100;

  const travel_speed_1 =
    Math.round(
      ((TM_rev_1 * 2 * Math.PI * values.travel?.sprocket_radius * 60) /
        10 ** 6) *
        100
    ) / 100;
  const travel_speed_2 =
    Math.round(
      ((TM_rev_2 * 2 * Math.PI * values.travel?.sprocket_radius * 60) /
        10 ** 6) *
        100
    ) / 100;

  
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
                  ▷ 아래 계산 결과에 따라{" "}
                  <strong>
                    {" "}
                    최고 주행 속도는 {values.travel?.travel_speed}㎞/h
                  </strong>
                <br />
                <br />
                <p>○ 주행 성능 관련 사양</p>
                    <table style={{width:"100%", height:"50%", margin: "auto"}} >
                  <thead>
                    <tr>
                      <th>항목</th>
                      <th></th>
                      <th>단위</th>
                      <th>사양</th>
                      <th>비고</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>주행 펌프 유량</td>
                      <td>
                        <strong>
                          <i>Q</i>
                        </strong>
                      </td>
                      <td>l/min</td>
                      <td>{values.travel?.pump_displacement}</td>
                      <td>선회 rpm</td>
                    </tr>
                    <tr>
                      <td>모터 이론 용적(1속)</td>
                      <td>
                        <strong>
                          <i>
                            Q<sub>m1</sub>{" "}
                          </i>
                        </strong>
                      </td>
                      <td>cc/rev</td>
                      <td>{values.travel?.TM_flow_1}</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>모터 이론 용적(2속)</td>
                      <td>
                        <strong>
                          <i>
                            Q<sub>m2</sub>{" "}
                          </i>
                        </strong>
                      </td>
                      <td>cc/rev</td>
                      <td>
                        {values.travel?.TM_flow_2 || values.travel?.TM_flow_1}
                      </td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>스프로켓 반경</td>
                      <td>
                        <strong>
                          <i>
                            R<sub></sub>{" "}
                          </i>
                        </strong>
                      </td>
                      <td></td>
                      <td>{values.travel?.sprocket_radius}</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>모터용적효율</td>
                      <td>
                        <strong>
                          <i>
                            μ<sub>mv</sub>{" "}
                          </i>
                        </strong>
                      </td>
                      <td></td>
                      <td>{values.travel?.TM_mv}</td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr></tbody>
          </table>
        </div>            

    <div className={styles.pages}>
      <table className={styles.borderTable}>

            <thead>
              <tr>
                <th >주행 속도</th>
              </tr>
            </thead>
            <tbody>

            <tr>
              <td className={styles.head_description}>
                <p>○ 주행모터 회전속도에 따른 주행속도 계산</p>
                    <table style={{width:"100%", height:"70%", margin: "auto"}} >
                    <tbody>
                      <tr>
                        <TableCell colSpan="3">
                          주행모터 축 회전 SM(rpm)
                        </TableCell>
                      </tr>
                      <tr>
                        <td>
                          (1속)
                          <InlineMath>{'SM = \\cfrac{\Q_{m1} \\times \\mu_{mv}}{q \\times i} \\times 1,000'}
                          </InlineMath>
                          
                        </td>
                        <td>
                          <InlineMath>{` \\cfrac{ ${values.travel?.pump_displacement} \\times ${values.travel?.TM_mv}}{${values.travel?.TM_flow_1} \\times ${values.travel?.reduc}} \\times 1,000`}</InlineMath>
                        </td>
                        <td>
                          <InlineMath>{`\\ ${TM_rev_1}`}</InlineMath>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          (2속)
                          <InlineMath>{`SM = \\cfrac{\Q_{m2} \\times \\mu_{mv}}{q \\times i} \\times 1,000`}</InlineMath>
                        </td>
                        <td>
                          <InlineMath>{` \\cfrac{ ${values.travel?.pump_displacement} \\times ${values.travel?.TM_mv}}{${values.travel?.TM_flow_2} \\times ${values.travel?.reduc}} \\times 1,000`}</InlineMath>
                        </td>
                        <td>
                          <InlineMath>{`${TM_rev_2}`}</InlineMath>
                        </td>
                      </tr>

                      <tr>
                        <TableCell colSpan="3">
                          주행속도 (km/hr)
                        </TableCell>
                      </tr>
                      <tr>
                        <td>
                          <InlineMath>{`V_1=\\cfrac{SM_1 \\times 2\\pi R \\times 60}{10^6} `}</InlineMath>
                        </td>
                        <td>
                          <InlineMath>{`\\cfrac{${TM_rev_1} \\times 2\\pi \\times ${values.travel?.sprocket_radius} \\times 60}{10^6} `}</InlineMath>
                        </td>
                        <td>
                          <InlineMath>{`${travel_speed_1}`}</InlineMath>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <InlineMath>{`V_2=\\cfrac{SM_2 \\times 2\\pi R \\times 60}{10^6} `}</InlineMath>
                        </td>
                        <td>
                          <InlineMath>{` \\cfrac{${TM_rev_2} \\times 2\\pi \\times ${values.travel?.sprocket_radius} \\times 60}{10^6} `}</InlineMath>
                        </td>
                        <td>
                          <InlineMath>{` ${travel_speed_2} `}</InlineMath>
                        </td>
                      </tr>
                    </tbody>
                  </table>
              </td>
            </tr>
            </tbody>
          </table>
        </div>

    </>
  );
};

export default TravelSpecHXKatex;
