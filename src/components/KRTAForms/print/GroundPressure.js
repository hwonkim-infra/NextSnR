import React from "react";
import styles from "@/components/KRTAForms/print/printPages.module.scss";

// 퀵커플러 탈착

const GroundPressure = ({ values, config }) => {
  const quick_coupler_weight = Math.max(
    values.attachments?.quick_coupler_weight_1,
    values.attachments?.quick_coupler_weight_2
  );

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
              <td className={styles.head_description}>
                <img
                  src="/images/GroundPressure.png"
                  alt="groundPressure"
                  width="80%"
                  margin= "auto"
                />
                    <table style={{width:"100%", height:"80%", margin: "auto"}} >

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
                        {(values.undercarriage?.tumbler_distance / 10) ||'' }
                      </td>
                      <td width="10%">(㎝)</td>
                      <td> </td>
                    </tr>
                    <tr>
                      <td>무한궤도길이</td>
                      <td>
                        L<sub>t</sub>{" "}
                      </td>
                      <td>{(values.undercarriage?.track_length / 10) || ''}</td>
                      <td>(㎝)</td>
                      <td>　</td>
                    </tr>
                    <tr>
                      <td>접지길이</td>
                      <td>L</td>
                      <td>{values.undercarriage?.ground_Length  || ''}</td>
                      <td>(㎝)</td>
                      <td>
                      l+0.35×(L<sub>t</sub>-L<sub>c</sub>)
                      </td>
                    </tr>
                    <tr>
                      <td>장비전중량</td>
                      <td>W</td>
                      <td>{(values.grossWeight - quick_coupler_weight) || ''}</td>
                      <td>(㎏)</td>
                      <td>운전자 65㎏</td>
                    </tr>
                    <tr>
                      <td>슈폭</td>
                      <td>B</td>
                      <td>{(values.undercarriage?.shoe_width) || ''}</td>
                      <td>(㎝)</td>
                      <td>　</td>
                    </tr>
                    <tr>
                      <td>접지압</td>
                      <td>P</td>
                      <td>{values.undercarriage?.ground_pressure_woqc || ''}</td>
                      <td>(kg/㎠)</td>
                      <td>
                        {" "}
                        운전중량 / <br />
                        (트랙의 수 × 슈폭 × 접지길이){" "}
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="5">
                       <h4>접지압 (퀵커플러 {quick_coupler_weight}kg 포함)</h4> 
                      </td>
                    </tr>

                    <tr>
                      <td>장비전중량</td>
                      <td>
                        W<sub>qc</sub>
                      </td>
                      <td>{values.grossWeight || ''}</td>
                      <td>(㎏)</td>
                      <td>퀵 커플러 중량 포함</td>
                    </tr>
                    <tr>
                      <td>접지압 </td>
                      <td>
                        P<sub>qc</sub>
                      </td>
                      <td>{values.undercarriage?.ground_pressure || ''}</td>
                      <td>(kg/㎠)</td>
                      <td>
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

export default GroundPressure;
