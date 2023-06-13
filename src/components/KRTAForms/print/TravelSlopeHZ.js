import React from "react";
import 'katex/dist/katex.min.css';
import { InlineMath } from 'react-katex';
import styles from "@/components/KRTAForms/print/printPages.module.scss";
import { CircularProgress, Table, TableBody, TableCell, TableRow } from "@mui/material";

const TravelSlopeHZ = ({ values, config }) => {
    if (!values.travel) return <CircularProgress />
    /* const TM_rev_1 =
    Math.round(
      ((values.travel?.pump_displacement * values.travel?.TM_mv) /
        (values.travel?.TM_flow_1 * values.travel?.reduc)) *1000 * 100) / 100;

  const TM_rev_2 = (
    ((values.travel?.pump_displacement * values.travel?.TM_mv) /
      (values.travel?.TM_flow_2 * values.travel?.reduc)) *    1000
  ).toFixed(2); */

  const TM_1 = (
    ((values.travel?.pump_pressure * values.travel?.TM_flow_1) /
      (200 * Math.PI)) *
    values.travel?.reduc *
    values.travel?.TM_mt
  ).toFixed(2);
  const TM_2 = (
    ((values.travel?.pump_pressure * values.travel?.TM_flow_2) /
      (200 * Math.PI)) *
    values.travel?.reduc *
    values.travel?.TM_mt
  ).toFixed(2);
  /* const Traction_Sprocket =
    ((2 * TM_2 * 1000) / values.travel?.sprocket_radius) * values.travel?.TM_r;
  const ground_traction = values.travel?.surface_drag * values.grossWeight; */

  const TS = (
    ((2 * TM_1 * 1000) / values.travel?.sprocket_radius) *
    values.travel?.TM_r
  ).toFixed(0);
  const AF = (
    values.travel?.surface_drag *
    (values.operating_weight + 65)
  ).toFixed(2);
  const DP = Math.min(TS, AF);
  const traction_downward = (
    (values.travel?.sprocket_radius / 1000) *
    values.grossWeight *
    Math.sin((16.7 / 180) * Math.PI)
  ).toFixed(2);

  const theta_1 = (
    Math.atan(values.travel?.surface_drag) *
    (180 / Math.PI)
  ).toFixed(1);
  const theta_2 = (
    (180 / Math.PI) *
    Math.asin(
      (DP - values.travel?.drag * values.grossWeight) / values.grossWeight
    )
  ).toFixed(1);
  const theta_3 = values.travel?.greadability_ref;

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
                    굴착기는 100분의 25(무한궤도식 굴착기는 100분의 30을 말한다)
                    기울기의 견고한 건조 지면을 올라갈 수 있고, 정지상태를
                    유지할 수 있는 제동장치 및 제동장금장치를 갖추어야 한다.
                  </p>
                  <p>○ 견인력 관련 제원</p>
                  <table
                    style={{ width: "80%", height: "60%", margin: "auto" }}
                  >
                    <thead>
                      <tr style={{ height: "20mm", margin: "auto" }}>
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
                          <strong>
                            <i>
                              W<sub>t</sub>{" "}
                            </i>
                          </strong>
                        </td>
                        <td>㎏</td>
                        <td>{values.grossWeight}</td>
                      </tr>
                      <tr>
                        <td>주행 펌프 압력</td>
                        <td>
                          <strong>
                            <i>
                              P<sub></sub>{" "}
                            </i>
                          </strong>
                        </td>
                        <td>㎏/㎠</td>
                        <td>{values.travel?.pump_pressure}</td>
                      </tr>
                      <tr>
                        <td>주행 모터 용량</td>
                        <td>
                          <strong>
                            <i>
                              P<sub></sub>{" "}
                            </i>
                          </strong>
                        </td>
                        <td>㎏/㎠</td>
                        <td>{values.travel?.pump_pressure}</td>
                      </tr>


                      


                      <tr>
                        <td>모터 기계 효율</td>
                        <td>
                          <strong>
                            <i>
                              μ<sub>mt</sub>{" "}
                            </i>
                          </strong>
                        </td>

                        <td>cc/rev</td>
                        <td>{values.travel?.TM_mt}</td>
                      </tr>
                      <tr>
                        <td>동력 전달 효율</td>
                        <td>
                          <strong>
                            <i>
                              μ<sub>r</sub>{" "}
                            </i>
                          </strong>
                        </td>
                        <td></td>
                        <td>{values.travel?.TM_r}</td>
                      </tr>
                      <tr>
                        <td>구동 점착 계수</td>
                        <td>
                          <strong>
                            <i>
                              μ<sub></sub>{" "}
                            </i>
                          </strong>
                        </td>
                        <td></td>
                        <td>{values.travel?.surface_drag}</td>
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
                        <td>㎜</td>
                        <td>{values.travel?.sprocket_radius}</td>
                      </tr>
                      <tr>
                        <td>주행 저항 계수</td>
                        <td>
                          <strong>
                            <i>
                              ξ<sub></sub>{" "}
                            </i>
                          </strong>
                        </td>
                        <td></td>
                        <td>{values.travel?.drag}</td>
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
                    ▷ 아래 계산 결과에 따라 주행 견인력은 {values.travel?.DP}{" "}
                    kgf
                  </p>
                  <div>주행 모터 토크 계산</div>

                  <table
                    style={{ width: "90%", height: "30%", margin: "auto" }}
                    >
                    <tbody>
                      <tr>
                        <TableCell rowSpan="2">
                          <InlineMath>{`TM = \\cfrac{P \\times q}{200 \\pi}`}</InlineMath>
                        </TableCell>
                        <td>
                          (1속)
                          <InlineMath>{`TM_1 = \\cfrac{${values.travel?.pump_pressure} \\times ${values.travel?.TM_flow_1}}{200 \\pi}`}</InlineMath>
                        </td>

                        <td>
                          <InlineMath>{`${values.travel?.TM_1}`}</InlineMath>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          (2속)
                          <InlineMath>{`TM_2 = \\cfrac{${values.travel?.pump_pressure} \\times ${values.travel?.TM_flow_2}}{200 \\pi}`}</InlineMath>
                        </td>

                        <td>
                          <InlineMath>{`${values.travel?.TM_2}`}</InlineMath>
                        </td>
                      </tr>
                    </tbody>
                  </table>

                  <div>견인력 (DP, kgf): 아래 중 작은 항목</div>

                  <table
                    style={{ width: "90%", height: "50%", margin: "auto" }}
                    >
                    <tbody>
                      <tr>
                        <TableCell colSpan="3">
                          스프로켓 최대 구동력 TS(kgf)
                        </TableCell>
                      </tr>
                      <tr>
                        <td>
                          <InlineMath>{`TS = \\cfrac{2 \\times \TM_{max} \\times 1,000}{R} \\times \\mu_r`}</InlineMath>
                        </td>
                        <td>
                          <InlineMath>{` \\cfrac{2 \\times ${Math.max(
                            TM_1,
                            TM_2
                          )} \\times 1,000}{${
                            values.travel?.sprocket_radius
                          }} \\times ${values.travel?.TM_r}`}</InlineMath>
                        </td>

                        <td>
                          <InlineMath>{`${TS}`}</InlineMath>
                        </td>
                      </tr>
                      <tr>
                        <TableCell colSpan="3">점착력 (AF, kgf)</TableCell>
                      </tr>
                      <tr>
                        <td>
                          <InlineMath>{`AF = \\mu \\times W_t`}</InlineMath>
                        </td>
                        <td>
                          <InlineMath>{`${values.travel?.surface_drag} \\times ${values.grossWeight}`}</InlineMath>
                        </td>

                        <td>
                          <InlineMath>{`${AF}`}</InlineMath>
                        </td>
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
                      values.travel?.greadability
                    )}°`}</InlineMath>
                  </p>

                  <table
                    style={{ width: "90%", height: "80%", margin: "auto" }}
                  >
                    <tbody>
                      <tr>
                        <TableCell colSpan="3">
                          경사지에서 미끄러지지 않는 각도
                        </TableCell>
                      </tr>
                      <tr
                    style={{  height: "10%"}}
                    >
                        <td>
                          <InlineMath>{` \\mu \\cdot W_T \\cdot \\cos \\theta_1 = W_T \\cdot \\sin \\theta_1
                                `}</InlineMath>
                        </td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr 
                    style={{  height: "10%"}}
                    >
                        <td>
                          <InlineMath>{`\\theta_1 = \\tan^{-1}\\mu`}</InlineMath>
                        </td>
                        <td>
                          <InlineMath>{`\\tan^{-1}${values.travel?.surface_drag}`}</InlineMath>
                        </td>

                        <td>
                          <InlineMath>{`${theta_1}`}</InlineMath>
                        </td>
                      </tr>

                      <tr>
                        <TableCell colSpan="3">
                          견인력에 의한 등판 능력
                        </TableCell>
                      </tr>
                      <tr
                    style={{  height: "10%"}}
                    >
                        <td>
                          <InlineMath>{`DP - \\xi W_T = W_T \\cdot \\sin \\theta_2`}</InlineMath>
                        </td>
                        <td></td>
                        <td></td>
                      </tr>

                      <tr>
                        <td>
                          <InlineMath>{`\\theta_2 = \\sin^{-1}{\\cfrac{DP - \\xi W_T}{W_T}} `}</InlineMath>
                        </td>
                        <td>
                          <InlineMath>{`\\sin^{-1}(\\cfrac{${
                            DP || values.travel?.traction_force
                          }  - ${
                            values.travel?.surface_drag ||
                            values.travel?.friction_surface
                          } \\times ${values.grossWeight}}{${
                            values.grossWeight
                          }}) `}</InlineMath>
                        </td>
                        <td>
                          <InlineMath>{` ${
                            values.travel?.theta_2 ||
                            values.travel?.traction_slope
                          } `}</InlineMath>
                        </td>
                      </tr>

                      <tr>
                        <TableCell colSpan="3">
                          엔진 오일 팬에 의한 최대 허용 경사
                        </TableCell>
                      </tr>
                      <tr>
                        <td>엔진 팬 제한 각 </td>
                        <td>
                          <InlineMath>{` ${values.travel?.greadability_ref} `}</InlineMath>
                        </td>
                        <td>
                          <InlineMath>{` ${theta_3} `}</InlineMath>
                        </td>
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
                  <div>
                    경사지에서의 제동 유지는 제동 토크와 밀려 내려가는 힘 간의
                    비교로 결정
                  </div>
                  {2 * values.travel?.brake_torque * values.travel?.reduc >
                    traction_downward && (
                    <div>▷ slippery force 보다 큰 제동 토크 확보</div>
                  )}

                  <div>
                    <p>○ 제동능력 관련 사양</p>
                  </div>

                  <table
                    style={{ width: "100%", height: "40%", margin: "auto" }}
                  >
                    <thead>
                      <tr>
                        <th>항목</th>
                        <th>기호</th>
                        <th>단위</th>
                        <th>사양</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>장비 총 중량</td>
                        <td>
                          <strong>
                            <i>
                              W<sub>T</sub>{" "}
                            </i>
                          </strong>
                        </td>
                        <td>㎏</td>
                        <td>{values.grossWeight}</td>
                      </tr>
                      <tr>
                        <td>브레이크 토크</td>
                        <td>
                          <strong>
                            <i>
                              W<sub>b</sub>{" "}
                            </i>
                          </strong>
                        </td>
                        <td>㎏m</td>
                        <td>{values.travel?.brake_torque}</td>
                      </tr>
                      <tr>
                        <td>주행 감속비</td>
                        <td>
                          <strong>
                            <i>
                              I<sub>total</sub>{" "}
                            </i>
                          </strong>
                        </td>
                        <td>%</td>
                        <td>{values.travel?.reduc}</td>
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
                        <td>㎜</td>
                        <td>{values.travel?.sprocket_radius}</td>
                      </tr>
                    </tbody>
                  </table>

                    <br />○ 주차 토크와 내려가는 힘 간의 비교
                    <br />

                  <table
                    style={{ width: "100%", height: "30%", margin: "auto" }}
                  >
                    <tbody>
                      <tr>
                        <TableCell colSpan="3">주차 토크 TP(kgm)</TableCell>
                      </tr>
                      <tr>
                        <td>
                          <InlineMath>{`TP=2 \\times T_b \\times I`}</InlineMath>
                        </td>
                        <td>
                          <InlineMath>{`2 \\times ${values.travel?.brake_torque} \\times ${values.travel?.reduc}`}</InlineMath>
                        </td>
                        <td>
                          <InlineMath>{` ${
                            2 *
                            values.travel?.brake_torque *
                            values.travel?.reduc
                          }`}</InlineMath>
                        </td>
                      </tr>
                      <tr>

                      <TableCell colSpan="3">
                        기준 경사지 (16.7)에서 내려가는 힘 TS(kgm)
                      </TableCell>
                      </tr>
                      <tr>
                        <td>
                          <InlineMath>{`TS = R \\times W_t \\times \\sin \\theta`}</InlineMath>
                        </td>
                        <td>
                          <InlineMath>{` ${
                            values.travel?.sprocket_radius / 1000
                          } \\times ${
                            values?.grossWeight
                          } \\times \\sin 16.7 `}</InlineMath>
                        </td>
                        <td>
                          <InlineMath>{` ${traction_downward}`}</InlineMath>
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

export default TravelSlopeHZ;
