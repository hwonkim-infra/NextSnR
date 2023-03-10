import React from "react";
import { MathJax, MathJaxContext } from "better-react-mathjax";
import styles from "@/components/KRTAForms/print/printPages.module.scss";
import { Table, TableBody, TableCell, TableRow } from "@mui/material";

const TravelSlope = ({ values, config }) => {
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
      <MathJaxContext version={3} config={config}>
        <div className={styles.pages}>
          <table className={styles.borderTable}>
            <thead>
              <tr>
                <th>????????? ?????? ??? ?????? ??????</th>
              </tr>
            </thead>{" "}
            <tbody>
              <tr>
                <td className={styles.head_description}>
                  <p>
                    ???????????? 100?????? 25(??????????????? ???????????? 100?????? 30??? ?????????)
                    ???????????? ????????? ?????? ????????? ????????? ??? ??????, ???????????????
                    ????????? ??? ?????? ???????????? ??? ????????????????????? ???????????? ??????.
                  </p>
                  <p>??? ????????? ?????? ??????</p>
                  <table
                    style={{ width: "80%", height: "60%", margin: "auto" }}
                  >
                    <thead>
                      <tr style={{ height: "20mm", margin: "auto" }}>
                        <th>??????</th>
                        <th style={{ textAlign: "center" }}>??????</th>
                        <th>??????</th>
                        <th style={{ textAlign: "center" }}>??????</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>?????? ??? ??????</td>

                        <td>
                          <strong>
                            <i>
                              W<sub>t</sub>{" "}
                            </i>
                          </strong>
                        </td>
                        <td>???</td>
                        <td>{values.grossWeight}</td>
                      </tr>
                      <tr>
                        <td>?????? ?????? ??????</td>
                        <td>
                          <strong>
                            <i>
                              P<sub></sub>{" "}
                            </i>
                          </strong>
                        </td>
                        <td>???/???</td>
                        <td>{values.travel?.pump_pressure}</td>
                      </tr>
                      <tr>
                        <td>?????? ?????? ??????</td>
                        <td>
                          <strong>
                            <i>
                              ??<sub>mt</sub>{" "}
                            </i>
                          </strong>
                        </td>

                        <td>cc/rev</td>
                        <td>{values.travel?.TM_mt}</td>
                      </tr>
                      <tr>
                        <td>?????? ?????? ??????</td>
                        <td>
                          <strong>
                            <i>
                              ??<sub>r</sub>{" "}
                            </i>
                          </strong>
                        </td>
                        <td></td>
                        <td>{values.travel?.TM_r}</td>
                      </tr>
                      <tr>
                        <td>?????? ?????? ??????</td>
                        <td>
                          <strong>
                            <i>
                              ??<sub></sub>{" "}
                            </i>
                          </strong>
                        </td>
                        <td></td>
                        <td>{values.travel?.surface_drag}</td>
                      </tr>
                      <tr>
                        <td>???????????? ??????</td>
                        <td>
                          <strong>
                            <i>
                              R<sub></sub>{" "}
                            </i>
                          </strong>
                        </td>
                        <td>???</td>
                        <td>{values.travel?.sprocket_radius}</td>
                      </tr>
                      <tr>
                        <td>?????? ?????? ??????</td>
                        <td>
                          <strong>
                            <i>
                              ??<sub></sub>{" "}
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
                <th>????????? ?????? ??? ?????? ??????</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={styles.head_description}>
                  <p>
                    ??? ?????? ?????? ????????? ?????? ?????? ???????????? {values.travel?.DP}{" "}
                    kgf
                  </p>
                  <div>?????? ?????? ?????? ??????</div>

                  <table>
                    <tbody>
                      <tr>
                        <TableCell rowSpan="2">
                          <MathJax>{`$$TM = \\frac{P \\times q}{200 \\pi}$$`}</MathJax>
                        </TableCell>
                        <td>
                          (1???)
                          <MathJax>{`$$TM_1 = \\frac{${values.travel?.pump_pressure} \\times ${values.travel?.TM_flow_1}}{200 \\pi}$$`}</MathJax>
                        </td>

                        <td>
                          <MathJax>{`$$${values.travel?.TM_1}$$`}</MathJax>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          (2???)
                          <MathJax>{`$$TM_2 = \\frac{${values.travel?.pump_pressure} \\times ${values.travel?.TM_flow_2}}{200 \\pi}$$`}</MathJax>
                        </td>

                        <td>
                          <MathJax>{`$$${values.travel?.TM_2}$$`}</MathJax>
                        </td>
                      </tr>
                    </tbody>
                  </table>

                  <div>????????? (DP, kgf): ?????? ??? ?????? ??????</div>

                  <table>
                    <tbody>
                      <tr>
                        <TableCell colSpan="3">
                          ???????????? ?????? ????????? TS(kgf)
                        </TableCell>
                      </tr>
                      <tr>
                        <td>
                          <MathJax>{`$$TS = \\frac{2 \\times \TM_{max} \\times 1,000}{R} \\times \\mu_r$$`}</MathJax>
                        </td>
                        <td>
                          <MathJax>{`$$ \\frac{2 \\times ${Math.max(
                            TM_1,
                            TM_2
                          )} \\times 1,000}{${
                            values.travel?.sprocket_radius
                          }} \\times ${values.travel?.TM_r}$$`}</MathJax>
                        </td>

                        <td>
                          <MathJax>{`$$${TS}$$`}</MathJax>
                        </td>
                      </tr>
                      <tr>
                        <TableCell colSpan="3">????????? (AF, kgf)</TableCell>
                      </tr>
                      <tr>
                        <td>
                          <MathJax>{`$$AF = \\mu \\times W_t$$`}</MathJax>
                        </td>
                        <td>
                          <MathJax>{`$$${values.travel?.surface_drag} \\times ${values.grossWeight}$$`}</MathJax>
                        </td>

                        <td>
                          <MathJax>{`$$${AF}$$`}</MathJax>
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
                <th>????????? ?????? ??? ?????? ??????</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={styles.head_description}>
                  <p>
                    ?????? ??? ?????? ?????? ???????????? ?????? ?????? ??? ?????? ?????? ?????? ??????:{" "}
                    <br />
                    ?????? ?????? ????????? ?????? ?????? ?????? ?????????:{" "}
                    <MathJax>{`$$ ${Math.min(
                      values.travel?.greadability
                    )}??$$`}</MathJax>
                  </p>

                  <table
                    style={{ width: "90%", height: "30%", margin: "auto" }}
                  >
                    <tbody>
                      <tr>
                        <TableCell colSpan="3">
                          ??????????????? ??????????????? ?????? ??????
                        </TableCell>
                      </tr>
                      <tr>
                        <td>
                          <MathJax>{`$$ \\mu \\cdot W_T \\cdot \\cos \\theta_1 = W_T \\cdot \\sin \\theta_1
                                $$`}</MathJax>
                        </td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>
                          <MathJax>{`$$\\theta_1 = \\tan^{-1}\\mu$$`}</MathJax>
                        </td>
                        <td>
                          <MathJax>{`$$\\tan^{-1}${values.travel?.surface_drag}$$`}</MathJax>
                        </td>

                        <td>
                          <MathJax>{`$$${theta_1}$$`}</MathJax>
                        </td>
                      </tr>

                      <tr>
                        <TableCell colSpan="3">
                          ???????????? ?????? ?????? ??????
                        </TableCell>
                      </tr>
                      <tr>
                        <td>
                          <MathJax>{`$$DP - \\xi W_T = W_T \\cdot \\sin \\theta_2$$`}</MathJax>
                        </td>
                        <td></td>
                        <td></td>
                      </tr>

                      <tr>
                        <td>
                          <MathJax>{`$$\\theta_2 = \\sin^{-1}{\\frac{DP - \\xi W_T}{W_T}} $$`}</MathJax>
                        </td>
                        <td>
                          <MathJax>{`$$\\sin^{-1}(\\frac{${
                            DP || values.travel?.traction_force
                          }  - ${
                            values.travel?.surface_drag ||
                            values.travel?.friction_surface
                          } \\times ${values.grossWeight}}{${
                            values.grossWeight
                          }}) $$`}</MathJax>
                        </td>
                        <td>
                          <MathJax>{`$$ ${
                            values.travel?.theta_2 ||
                            values.travel?.traction_slope
                          } $$`}</MathJax>
                        </td>
                      </tr>

                      <tr>
                        <TableCell colSpan="3">
                          ?????? ?????? ?????? ?????? ?????? ?????? ??????
                        </TableCell>
                      </tr>
                      <tr>
                        <td>?????? ??? ?????? ??? </td>
                        <td>
                          <MathJax>{`$$ ${values.travel?.greadability_ref} $$`}</MathJax>
                        </td>
                        <td>
                          <MathJax>{`$$ ${theta_3} $$`}</MathJax>
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
                <th>????????? ?????? ??? ?????? ??????</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={styles.head_description}>
                  <div>
                    ?????????????????? ?????? ????????? ?????? ????????? ?????? ???????????? ??? ??????
                    ????????? ??????
                  </div>
                  {2 * values.travel?.brake_torque * values.travel?.reduc >
                    traction_downward && (
                    <div>??? slippery force ?????? ??? ?????? ?????? ??????</div>
                  )}

                  <div>
                    <p>??? ???????????? ?????? ??????</p>
                  </div>

                  <table
                    style={{ width: "100%", height: "40%", margin: "auto" }}
                  >
                    <thead>
                      <tr>
                        <th>??????</th>
                        <th>??????</th>
                        <th>??????</th>
                        <th>??????</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>?????? ??? ??????</td>
                        <td>
                          <strong>
                            <i>
                              W<sub>T</sub>{" "}
                            </i>
                          </strong>
                        </td>
                        <td>???</td>
                        <td>{values.grossWeight}</td>
                      </tr>
                      <tr>
                        <td>???????????? ??????</td>
                        <td>
                          <strong>
                            <i>
                              W<sub>b</sub>{" "}
                            </i>
                          </strong>
                        </td>
                        <td>???m</td>
                        <td>{values.travel?.brake_torque}</td>
                      </tr>
                      <tr>
                        <td>?????? ?????????</td>
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
                        <td>???????????? ??????</td>
                        <td>
                          <strong>
                            <i>
                              R<sub></sub>{" "}
                            </i>
                          </strong>
                        </td>
                        <td>???</td>
                        <td>{values.travel?.sprocket_radius}</td>
                      </tr>
                    </tbody>
                  </table>

                    <br />??? ?????? ????????? ???????????? ??? ?????? ??????
                    <br />

                  <table
                    style={{ width: "100%", height: "30%", margin: "auto" }}
                  >
                    <tbody>
                      <tr>
                        <TableCell colSpan="3">?????? ?????? TP(kgm)</TableCell>
                      </tr>
                      <tr>
                        <td>
                          <MathJax>{`$$TP=2 \\times T_b \\times I$$`}</MathJax>
                        </td>
                        <td>
                          <MathJax>{`$$2 \\times ${values.travel?.brake_torque} \\times ${values.travel?.reduc}$$`}</MathJax>
                        </td>
                        <td>
                          <MathJax>{`$$ ${
                            2 *
                            values.travel?.brake_torque *
                            values.travel?.reduc
                          }$$`}</MathJax>
                        </td>
                      </tr>
                      <tr>

                      <TableCell colSpan="3">
                        ?????? ????????? (16.7)?????? ???????????? ??? TS(kgm)
                      </TableCell>
                      </tr>
                      <tr>
                        <td>
                          <MathJax>{`$$TS = R \\times W_t \\times \\sin \\theta$$`}</MathJax>
                        </td>
                        <td>
                          <MathJax>{`$$ ${
                            values.travel?.sprocket_radius / 1000
                          } \\times ${
                            values?.grossWeight
                          } \\times \\sin 16.7 $$`}</MathJax>
                        </td>
                        <td>
                          <MathJax>{`$$ ${traction_downward}$$`}</MathJax>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
        </div> 
      </MathJaxContext>
    </>
  );
};

export default TravelSlope;
