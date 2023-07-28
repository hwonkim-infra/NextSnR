import React from "react";
import styles from "@/components/KRTAForms/print/printPages.module.scss";
import { Box, CircularProgress } from "@mui/material";
import { InlineMath } from "react-katex";

// 퀵커플러 탈착

const GroundPressure = ({ values, config }) => {
  if (!values.undercarriage) return <CircularProgress />;
  const quick_coupler_weight = Math.max(
    values.attachments?.quick_coupler_weight_1,
    values.attachments?.quick_coupler_weight_2
  );

  const ground_Length =
    Math.round(
      0.65 * values.undercarriage?.tumbler_distance +
        0.35 * values.undercarriage?.track_length
    ) / 10; // 접지길이

  return (
    <>
      <div className={styles.pages}>
        <table className={styles.borderTable}>
          <thead>
            <tr>
              <th>접지압</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Box sx={{ p: 2 }}>
                  <p>
                    ①무한궤도식 건설기계의 접지압은 다음 산식에 의하여 계산한다
                  </p>
                  <img
                    src="/images/GroundPressureArticle.png"
                    alt="groundPressureArticle"
                    width="80%"
                    margin="auto"
                  />
                  <p>
                    ② 제1항에서 “접지길이”란 텀블러중심간거리와 무한궤도
                    길이(텀블러중심간거리의 연장선상에 있는 트랙의 최외측 간의
                    거리를 말한다. 이 경우 그라우저는 없는 것으로 본다)에서
                    텀블러중심간거리를 뺀 거리의 100분의 35에 해당하는 길이를
                    더한 길이를 말한다.
                  </p>
                </Box>
              </td>
            </tr>
            <tr height="80%">
              <td>
                {/* <img
                  src="/images/GroundPressure.png"
                  alt="groundPressure"
                  width="0%"
                  margin="auto"
                /> */}
                <table style={{ width: "90%", height: "70%", margin: "auto" }}>
                  <tbody>
                    <tr>
                      <td colSpan="5">
                        <h4>접지압</h4>
                      </td>
                    </tr>
                    <tr>
                      <td width="28%">텀블러 중심거리</td>
                      <td width="5%">l</td>
                      <td width="15%" id="">
                        {values.undercarriage.tumbler_distance / 10 || ""}
                      </td>
                      <td width="10%">(㎝)</td>
                      <td> </td>
                    </tr>
                    <tr>
                      <td>무한궤도길이</td>
                      <td>
                        L<sub>t</sub>{" "}
                      </td>
                      <td>{values.undercarriage.track_length / 10 || ""}</td>
                      <td>(㎝)</td>
                      <td>　</td>
                    </tr>
                    <tr>
                      <td>접지길이</td>
                      <td>L</td>
                      <td>{values.undercarriage.ground_Length || ""}</td>
                      <td>(㎝)</td>
                      <td>
                        <InlineMath>{` (
      0.65 \\times ${values.undercarriage?.tumbler_distance} +
        0.35 \\times ${values.undercarriage?.track_length}    ) / 10

                        `}</InlineMath>
                      </td>
                    </tr>
                    <tr>
                      <td>장비전중량</td>
                      <td>W</td>
                      <td>
                        {values.grossWeight - quick_coupler_weight ||
                          values.grossWeight}
                      </td>
                      <td>(㎏)</td>
                      <td>운전자 65㎏</td>
                    </tr>
                    <tr>
                      <td>슈폭</td>
                      <td>B</td>
                      <td>{values.undercarriage.shoe_width/10 || ""}</td>
                      <td>(㎝)</td>
                      <td>　</td>
                    </tr>
                    <tr>
                      <td>접지압</td>
                      <td>P</td>
                      <td>
                        {values.undercarriage.ground_pressure_woqc ||
                          values.undercarriage.ground_pressure}
                      </td>
                      <td>(kg/㎠)</td>
                      <td>
                        
                        <InlineMath>{` 
      ${values.grossWeight} /
      (2 \\times ${values.undercarriage?.shoe_width/10} \\times ${ground_Length})
  

                        `}</InlineMath>
                      </td>
                    </tr>
                    {quick_coupler_weight.length > 0 && (
                      <>
                        <table
                          style={{
                            width: "100%",
                            height: "30%",
                            margin: "auto",
                          }}
                        >
                          <tbody>
                            <tr>
                              <td colSpan="5">
                                <h4>
                                  접지압 (퀵커플러 {quick_coupler_weight}kg
                                  포함)
                                </h4>
                              </td>
                            </tr>

                            <tr>
                              <td>장비전중량</td>
                              <td>
                                W<sub>qc</sub>
                              </td>
                              <td>{values.grossWeight || ""}</td>
                              <td>(㎏)</td>
                              <td>퀵 커플러 중량 포함</td>
                            </tr>
                            <tr>
                              <td>접지압 </td>
                              <td>
                                P<sub>qc</sub>
                              </td>
                              <td>
                                {values.undercarriage.ground_pressure || ""}
                              </td>
                              <td>(kg/㎠)</td>
                              <td></td>
                            </tr>
                          </tbody>
                        </table>
                      </>
                    )}
                  </tbody>
                </table>
              </td>
            </tr>
            <tr>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default GroundPressure;
