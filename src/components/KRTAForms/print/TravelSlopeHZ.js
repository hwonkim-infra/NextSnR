import React from "react";
import "katex/dist/katex.min.css";
import { InlineMath } from "react-katex";
import styles from "@/components/KRTAForms/print/printPages.module.scss";
import {
  CircularProgress,
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@mui/material";

const TravelSlopeHZ = ({ values, config }) => {
  if (!values.travel) return <CircularProgress />;

  let slope_traction;
  (values.travel.traction_slope <= 0) ? (slope_traction = "∞") : (slope_traction = values.travel.traction_slope);



  return (
    <>
      <div className={styles.pages}>
        <table className={styles.borderTable}>
          <thead>
            <tr>
              <th>경사지 등판 및 제동 능력</th>
            </tr>
          </thead>{" "}
          <tbody>
            <tr>
              <td className={styles.head_description}>
                <p>
                  ① 무한궤도식 불도저는 기울기가 30도인 지면을 올라갈 수 있어야
                  한다.
                </p>
                <p>
                  ② 무한궤도식 불도저는 기울기가 30도인 지면에서 정지상태를
                  유지할 수 있는 제동장치 및 제동잠금장치를 갖추어야 한다.
                </p>

                <p>○ 등판 구동력 관련 제원</p>
                <table style={{ width: "80%", height: "45%", margin: "auto" }}>
                  <thead>
                    <tr style={{ height: "10%", margin: "auto" }}>
                      <th>항목</th>
                      <th style={{ textAlign: "center" }}>기호</th>
                      <th>단위</th>
                      <th style={{ textAlign: "center" }}>사양</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>장비 총 중량</td>

                      <td>
                        <InlineMath>{`\ W`}</InlineMath>
                      </td>
                      <td>㎏</td>
                      <td>{values.grossWeight}</td>
                    </tr>
                    <tr>
                      <td>주행 펌프 압력</td>
                      <td>
                        <InlineMath>{`\ P`}</InlineMath>
                      </td>
                      <td>㎏/㎠</td>
                      <td>{values.travel.pump_pressure}</td>
                    </tr>
                    <tr>
                      <td>주행 모터 용량</td>
                      <td>
                        <InlineMath>{`\ q`}</InlineMath>
                      </td>
                      <td>cc/rev</td>
                      <td>{values.travel.TM_flow_q}</td>
                    </tr>
                    <tr>
                      <td>주행모터 효율</td>
                      <td>
                        <InlineMath>{`\ η`}</InlineMath>
                      </td>

                      <td></td>
                      <td>{values.travel.TM_mt}</td>
                    </tr>

                    <tr>
                      <td>감속비</td>
                      <td>
                        <InlineMath>{`\ i`}</InlineMath>
                      </td>
                      <td></td>
                      <td>{values.travel.reduc}</td>
                    </tr>

                    <tr>
                      <td>스프로켓 PCD</td>
                      <td>
                        <InlineMath>{`\ D`}</InlineMath>
                      </td>
                      <td>㎜</td>
                      <td>{values.travel.sprocket_PCD}</td>
                    </tr>
                    <tr>
                      <td>모터 기계 효율</td>
                      <td>
                        <InlineMath>{`\ η_g`}</InlineMath>
                      </td>

                      <td></td>
                      <td>{values.travel.TM_mt}</td>
                    </tr>
                  </tbody>
                </table>
                <p>○ 주행 모터 토크를 이용한 구동력 계산</p>

                <table style={{ width: "90%", height: "20%", margin: "auto" }}>
                  <tbody>
                    <tr>
                      <td>주행 모터 토크 계산</td>
                    </tr>
                    <tr>
                      <TableCell rowSpan="2">
                        <InlineMath>{`TM = \\cfrac{P \\times q \\times η}{200 \\pi} = \\cfrac{${values.travel.pump_pressure} \\times ${values.travel.TM_flow_q}  \\times ${values.travel.TM_mt} }{200 \\pi} = ${values.travel.TM_torque} `}</InlineMath>
                      </TableCell>
                    </tr>
                  </tbody>
                </table>
                <table style={{ width: "90%", height: "20%", margin: "auto" }}>
                  <tbody>
                    <tr>
                      <td>구동력 계산</td>
                    </tr>
                    <tr>
                      <TableCell rowSpan="2">
                        <InlineMath>{`F = \\cfrac{2 \\times \TM \\times i \\times η_g }{ D/2 }  = \\cfrac{ 
                          2 \\times ${values.travel.TM_torque} \\times ${values.travel.reduc}  \\times ${values.travel.eff_trac} }{200 \\pi} = ${values.travel.TM_traction} `}</InlineMath>
                      </TableCell>
                    </tr>
                  </tbody>
                </table>



              </td>
            </tr>
          </tbody>
        </table>
      </div>


      <div className={styles.pages}>
        <table className={styles.borderTable}>
          <thead>
            <tr>
              <th>경사지 등판 및 제동 능력</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={styles.head_description}>
                <p>
                  등판 및 정차 가능 경사각은 아래 사양 중 가장 작은 각에 해당:{" "}
                  <br />
                  아래 계산 결과에 따라 등판 가능 경사각:{" "}
                  <InlineMath>{` ${Math.min(
                    values.travel.greadability
                  )}°`}</InlineMath>
                </p>

                <table style={{ width: "90%", height: "50%", margin: "auto" }}>
                  <tbody>
                    
                    <tr>
                      <TableCell >구동견인력에 의한 등판 능력</TableCell>
                    </tr>
                    <tr >
                      <TableCell>
                        <InlineMath>{`F_{traction} - P \\cdot W = W  \\cdot \\sin \\theta`}</InlineMath>
                      </TableCell>
                      
                    </tr>

                    <tr>
                      <TableCell>
                      <InlineMath>{` \\theta = \\sin^{-1} {\\cfrac{F - P \\cdot W}{W}} = \\sin^{-1} {\\cfrac{ ${ values.travel.TM_traction} - ${ values.travel.travel_drag } \\cdot ${values.grossWeight/1000}  }{${values.grossWeight/1000}}} =  `}</InlineMath>
                        {/* <InlineMath>{`\\theta = \\sin^{-1}{\\cfrac{F - P \\cdot W}{W}} = \\sin^{-1}(\\cfrac{${ values.travel.TM_traction } - ${ values.travel.travel_drag } \\times ${values.grossWeight/1000}}{${ values.grossWeight/1000 }}) = ${ values.travel.traction_slope }`} </InlineMath> */}
                      <InlineMath>{`${slope_traction}`}</InlineMath>
                        
                      </TableCell>
                      
                    </tr>
                    <tr>
                      <TableCell >
                        엔진 오일 팬에 의한 최대 허용 경사
                      </TableCell>
                    </tr>
                    <tr>
                      <TableCell>엔진 팬 제한 각 </TableCell>
                      
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

export default TravelSlopeHZ;
