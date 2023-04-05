import React from "react";
import 'katex/dist/katex.min.css';
import { InlineMath } from 'react-katex';
import styles from "@/components/KRTAForms/print/printPages.module.scss";


const AxleAndLoad = ({ values, config }) => {
  const tire_load_front_unload_ratio = (
    (values.undercarriage?.axle_weight_front_unload /
      values.undercarriage?.no_tires /
      values.undercarriage?.tire_load_limit) *
    100
  ).toFixed(1);
  const tire_load_rear_unload_ratio = (
    (values.undercarriage?.axle_weight_rear_unload /
      values.undercarriage?.no_tires /
      values.undercarriage?.tire_load_limit) *
    100
  ).toFixed(1);
  const tire_load_front_load_ratio = (
    (values.undercarriage?.axle_weight_front_load /
      values.undercarriage?.no_tires /
      values.undercarriage?.tire_load_limit) *
    100
  ).toFixed(1);
  const tire_load_rear_load_ratio = (
    (values.undercarriage?.axle_weight_rear_load /
      values.undercarriage?.no_tires /
      values.undercarriage?.tire_load_limit) *
    100
  ).toFixed(1);
  const tire_load_front_unload_running_ratio = (
    (values.undercarriage?.axle_weight_front_unload /
      values.undercarriage?.no_tires /
      values.undercarriage?.tire_load_limit_running) *
    100
  ).toFixed(1);
  const tire_load_rear_unload_running_ratio = (
    (values.undercarriage?.axle_weight_rear_unload /
      values.undercarriage?.no_tires /
      values.undercarriage?.tire_load_limit_running) *
    100
  ).toFixed(1);

  return (
    <>
        {/* ===============================================
        축별 하중    
    =============================================== */}

        <div className={styles.pages}>
          <table className={styles.borderTable}>
            <thead>
              <tr className="borderheader">
                <td height="30mm">축별 하중</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={styles.head_description}>
                  <p>○ 축별 하중 (공차)</p>

                  <table width="80%" height="300px">
                    <thead>
                      <tr>
                        <th>항목</th>
                        <th>기호</th>
                        <th>단위</th>
                        <th>사양</th>
                        <th>비고</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>장비 총 중량</td>
                        <td>
                        <InlineMath>{`\W_T`}</InlineMath>
                        </td>
                        <td>㎏</td>
                        <td>{values.operating_weight}</td>
                        <td>운전자 제외</td>
                      </tr>
                      <tr>
                        <td>장비 무게 중심 (전후 방향)</td>
                        <td>
                        <InlineMath>{`\X_T`}</InlineMath>
                        </td>
                        <td>㎜</td>
                        <td>{values.undercarriage?.COG_center_unload}</td>
                        <td>-값: 작업장치 방향</td>
                      </tr>
                      <tr>
                        <td>축간 거리</td>
                        <td>
                        <InlineMath>{`\L`}</InlineMath>
                        </td>
                        <td>㎜</td>
                        <td>{values.undercarriage?.wheel_base}</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>1축에서 선회중심까지 거리</td>
                        <td>
                        <InlineMath>{`\L_1`}</InlineMath>
                        </td>
                        <td>㎜</td>
                        <td>{values.undercarriage?.frontAxle_center}</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>2축에서 선회중심까지 거리</td>
                        <td>
                        <InlineMath>{`\L_2`}</InlineMath>
                        </td>
                        <td>㎜</td>
                        <td>{values.undercarriage?.rearAxle_center}</td>
                        <td></td>
                      </tr>
                    </tbody>
                  </table>
                  <p> </p>
                  <p> </p>
                  <p>○ 축별 하중 (공차)</p>
                  <table className="innertable" width="80%" height="300px">
                    <thead>
                      <tr>
                        <th>항목</th>
                        <th>산식</th>
                        <th></th>
                        <th>제원</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1축 하중</td>
                        <td>
                          <InlineMath>{`F_1 = \\cfrac{W_T \\cdot (L_2-X_T)}{L}`}</InlineMath>
                        </td>
                        <td>
                          <InlineMath>{` \\cfrac{ ${values.operating_weight} \\cdot (${values.undercarriage?.rearAxle_center}-${values.undercarriage?.COG_center_unload})}{${values.undercarriage?.wheel_base}}`}</InlineMath>
                        </td>
                        <td>
                          <InlineMath>{` ${values.undercarriage?.axle_weight_front_unload}`}</InlineMath>
                        </td>
                      </tr>

                      <tr>
                        <td>2축 하중</td>
                        <td>
                          <InlineMath>{`F_2 = \\cfrac{W_T \\cdot (L_1+X_T)}{L}`}</InlineMath>
                        </td>
                        <td>
                          <InlineMath>{` \\cfrac{ ${values.operating_weight} \\cdot (${values.undercarriage?.frontAxle_center}+${values.undercarriage?.COG_center_unload})}{${values.undercarriage?.wheel_base}}`}</InlineMath>
                        </td>
                        <td>
                          <InlineMath>{` ${values.undercarriage?.axle_weight_rear_unload}`}</InlineMath>
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
                <td height="30mm">축별 하중</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={styles.head_description}>
                  <p>○ 축별 하중 (적재)</p>

                  <table width="80%" height="300px">
                    <thead>
                      <tr>
                        <th>항목</th>
                        <th>기호</th>
                        <th>단위</th>
                        <th>사양</th>
                        <th>비고</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>장비 총 중량</td>
                        <td>
                        <InlineMath>{`\W_T`}</InlineMath>
                        </td>
                        <td>㎏</td>
                        <td>{values.grossWeight_load}</td>
                        <td>적재 총 중량</td>
                      </tr>
                      <tr>
                        <td>장비 무게 중심 (전후 방향)</td>
                        <td>
                        <InlineMath>{`\X_T`}</InlineMath>
                        </td>
                        <td>㎜</td>
                        <td>{values.undercarriage?.COG_center_unload}</td>
                        <td>-값: 작업장치 방향</td>
                      </tr>
                      <tr>
                        <td>축간 거리</td>
                        <td>
                        <InlineMath>{`\L`}</InlineMath>
                        </td>
                        <td>㎜</td>
                        <td>{values.undercarriage?.wheel_base}</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>1축에서 선회중심까지 거리</td>
                        <td>
                        <InlineMath>{`\L_1`}</InlineMath>
                        </td>
                        <td>㎜</td>
                        <td>{values.undercarriage?.frontAxle_center}</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>2축에서 선회중심까지 거리</td>
                        <td>
                        <InlineMath>{`\L_2`}</InlineMath>
                        </td>
                        <td>㎜</td>
                        <td>{values.undercarriage?.rearAxle_center}</td>
                        <td></td>
                      </tr>
                    </tbody>
                  </table>
                  <p> </p>
                  <p> </p>
                  <p>○ 축별 하중 (적재)</p>
                  <table className="innertable" width="80%" height="300px">
                    <thead>
                      <tr>
                        <th>항목</th>
                        <th>산식</th>
                        <th></th>
                        <th>제원</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1축 하중</td>
                        <td>
                          <InlineMath>{`F_1 = \\cfrac{W_T \\cdot (L_2-X_T)}{L}`}</InlineMath>
                        </td>
                        <td>
                          <InlineMath>{` \\cfrac{ ${values.operating_weight} \\cdot (${values.undercarriage?.rearAxle_center}-${values.undercarriage?.COG_center_load})}{${values.undercarriage?.wheel_base}}`}</InlineMath>
                        </td>
                        <td>
                          <InlineMath>{` ${values.undercarriage?.axle_weight_front_load}`}</InlineMath>
                        </td>
                      </tr>

                      <tr>
                        <td>2축 하중</td>
                        <td>
                          <InlineMath>{`F_2 = \\cfrac{W_T \\cdot (L_1+X_T)}{L}`}</InlineMath>
                        </td>
                        <td>
                          <InlineMath>{` \\cfrac{ ${values.operating_weight} \\cdot (${values.undercarriage?.frontAxle_center}+${values.undercarriage?.COG_center_load})}{${values.undercarriage?.wheel_base}}`}</InlineMath>
                        </td>
                        <td>
                          <InlineMath>{` ${values.undercarriage?.axle_weight_rear_load}`}</InlineMath>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* ===============================================
        타이어 부하율   
    =============================================== */}

        <div className={styles.pages}>
          <table className={styles.borderTable}>
            <thead>
              <tr>
                <th>축중량과 타이어 부하율</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={styles.head_description}>
                  <p>
                    ①타이어 부하율은 다음 산식에 의하여 계산한다. 이 경우 겹
                    타이어인 타이어의 수는 2로 한다 <br /> ② 제1항에 따른 타이어
                    부하율은 최대적재중량 상태와 자체중량 상태에 대하여 각각
                    구한다. <br /> ③ 건설기계의 타이어 부하율은 100퍼센트
                    이하이어야 한다. 다만, 최대적재중량 상태일 때 조향축 외의
                    축의 타이어의 경우에는 120퍼센트 이하이어야 한다.{" "}
                  </p>
                  <p> ○ 축별 하중값 계산 (공차)</p>
                    <table style={{width:"90%", height:"200px", margin: "auto"}} >
                    <tbody>
                      <tr>
                        <td>타이어 부하율 (전축. %)</td>
                        <td>
                          <InlineMath>{`\\epsilon_f = \\cfrac{R_f}{N \\times P} \\times 100`}</InlineMath>
                        </td>
                        <td>
                          <InlineMath>{` \\cfrac{${values.undercarriage?.axle_weight_front_unload}}{${values.undercarriage?.no_tires} \\times ${values.undercarriage?.tire_load_limit}} \\times 100`}</InlineMath>
                        </td>
                        <td>
                          <InlineMath>{` ${tire_load_front_unload_ratio} `}</InlineMath>
                        </td>
                      </tr>

                      <tr>
                        <td>타이어 부하율 (후축. %)</td>
                        <td>
                          <InlineMath>{`\\epsilon_r = \\cfrac{R_f}{N \\times P} \\times 100`}</InlineMath>
                        </td>
                        <td>
                          <InlineMath>{` \\cfrac{${values.undercarriage?.axle_weight_rear_unload}}{${values.undercarriage?.no_tires} \\times ${values.undercarriage?.tire_load_limit}} \\times 100`}</InlineMath>
                        </td>
                        <td>
                          <InlineMath>{` ${tire_load_rear_unload_ratio} `}</InlineMath>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <p> </p>
                  <p>○ 축별 하중값 계산 (적재)</p>
                    <table style={{width:"90%", height:"200px", margin: "auto"}} >
                    <tbody>
                      <tr>
                        <td>타이어 부하율 (전축. %)</td>
                        <td>
                          <InlineMath>{`\\epsilon_f = \\cfrac{R_f}{N \\times P} \\times 100`}</InlineMath>
                        </td>
                        <td>
                          <InlineMath>{` \\cfrac{${values.undercarriage?.axle_weight_front_load}}{${values.undercarriage?.no_tires} \\times ${values.undercarriage?.tire_load_limit}} \\times 100`}</InlineMath>
                        </td>
                        <td>
                          <InlineMath>{` ${tire_load_front_load_ratio} `}</InlineMath>
                        </td>
                      </tr>

                      <tr>
                        <td>타이어 부하율 (후축. %)</td>
                        <td>
                          <InlineMath>{`\\epsilon_r = \\cfrac{R_f}{N \\times P} \\times 100`}</InlineMath>
                        </td>
                        <td>
                          <InlineMath>{` \\cfrac{${values.undercarriage?.axle_weight_rear_load}}{${values.undercarriage?.no_tires} \\times ${values.undercarriage?.tire_load_limit}} \\times 100`}</InlineMath>
                        </td>
                        <td>
                          <InlineMath>{` ${tire_load_rear_load_ratio} `}</InlineMath>
                        </td>
                      </tr>
                    </tbody>
                  </table>

                  <p> </p>
                  <p>○ 축별 하중값 계산 (주행)</p>
                  
                    <table style={{width:"90%", height:"200px", margin: "auto"}} >
                    <tbody>
                      <tr>
                        <td>타이어 부하율 (전축. %)</td>
                        <td>
                          <InlineMath>{`\\epsilon_f = \\cfrac{R_f}{N \\times P} \\times 100`}</InlineMath>
                        </td>
                        <td>
                          <InlineMath>{` \\cfrac{${values.undercarriage?.axle_weight_front_unload}}{${values.undercarriage?.no_tires} \\times ${values.undercarriage?.tire_load_limit_running}} \\times 100`}</InlineMath>
                        </td>
                        <td>
                          <InlineMath>{` ${tire_load_front_unload_running_ratio} `}</InlineMath>
                        </td>
                      </tr>

                      <tr>
                        <td>타이어 부하율 (후축. %)</td>
                        <td>
                          <InlineMath>{`\\epsilon_r = \\cfrac{R_f}{N \\times P} \\times 100`}</InlineMath>
                        </td>
                        <td>
                          <InlineMath>{` \\cfrac{${values.undercarriage?.axle_weight_rear_unload}}{${values.undercarriage?.no_tires} \\times ${values.undercarriage?.tire_load_limit_running}} \\times 100`}</InlineMath>
                        </td>
                        <td>
                          <InlineMath>{` ${tire_load_rear_unload_running_ratio} `}</InlineMath>
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

export default AxleAndLoad;
