import React from "react";

import "katex/dist/katex.min.css";
import { InlineMath, BlockMath } from "react-katex";

import styles from "@/components/KRTAForms/print/printPages.module.scss";
import { TableCell } from "@mui/material";
import parse from "html-react-parser";

// 제동거리

const TravelBrakingWX = ({ values, config }) => {
  const radians_to_degrees = (radians) => {
    return radians * (180 / Math.PI);
  };

  const braking_speed_standard = Math.max(
    values.travel?.travel_speed * 0.8,
    32
  );
  const braking_force_axle = (
    values.travel?.brake_torque_axle /
    ((9.8 * values.travel?.tire_rolling_radius) / 1000)
  ).toFixed();
  const braking_force_total = (2 * braking_force_axle).toFixed();
  const braking_limit_slope = radians_to_degrees(
    Math.asin(braking_force_total / values.grossWeight)
  ).toFixed(1);

  const idle_running = 0.5;
  const decceleration_rate = (braking_force_total / values.grossWeight).toFixed(
    1
  );
  const decceleration = (decceleration_rate * 9.81).toFixed(1);
  const braking_distance_max =
    Math.round(
      (values.travel?.travel_speed ** 2 / (2 * decceleration)) *
        (1000 / 3600) ** 2 +
        idle_running * values.travel?.travel_speed * (1000 / 3600) * 100
    ) / 100;
  const braking_distance_norm =
    Math.round(
      (braking_speed_standard ** 2 / (2 * decceleration)) * (1000 / 3600) ** 2 +
        idle_running * braking_speed_standard * (1000 / 3600) * 100
    ) / 100;

  const braking_description = values.travel?.braking_description || "";

  return (
    <>
      <div className={styles.pages}>
        <table className={styles.borderTable}>
          <thead>
            <tr>
              <th>주제동장치와 제동능력</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={styles.head_description}>
                <p>○ 타이어식 건설기계의 주제동장치</p>

                <table style={{ width: "60%", height: "30%", margin: "auto" }}>
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
                        <InlineMath>{`\W_t`}</InlineMath>
                      </td>
                      <td>㎏</td>
                      <td>{values.grossWeight}</td>
                    </tr>
                    <tr>
                      <td>브레이크 토크 (per axle)</td>
                      <td>
                        <InlineMath>{`\T_{SB}`}</InlineMath>
                      </td>
                      <td>Nm</td>
                      <td>{values.travel?.brake_torque_axle}</td>
                    </tr>
                    <tr>
                      <td>타이어 동하중 반경</td>
                      <td>
                        <InlineMath>{`\T_R`}</InlineMath>
                      </td>

                      <td>cc/rev</td>
                      <td>{values.travel?.tire_rolling_radius / 1000 || ""}</td>
                    </tr>
                  </tbody>
                </table>
                <br />
                <p>○ 서비스 브레이크의 제동력 계산</p>

                <table style={{ width: "90%", height: "50%", margin: "auto" }}>
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
                      <td>Axle 브레이크 제동력</td>
                      <td>
                        <InlineMath>{` F'_{SB}=\\cfrac{T_{SB}}{9.8 \\cdot T_R} `}</InlineMath>
                      </td>
                      <td>
                        <InlineMath>{` \\cfrac{${
                          values.travel?.brake_torque_axle
                        }}{9.8 \\cdot ${
                          values.travel?.tire_rolling_radius / 1000 || ""
                        }} `}</InlineMath>
                      </td>
                      <td>
                        <BlockMath>{` ${braking_force_axle} `}</BlockMath>
                      </td>
                    </tr>

                    <tr>
                      <td>총 서비스 브레이크 제동력</td>
                      <td>
                        <InlineMath>{` F_{SB}=2 \\times F'_{SB} `}</InlineMath>
                      </td>
                      <td>
                        <InlineMath>{` 2 \\times ${braking_force_axle} `}</InlineMath>
                      </td>
                      <td>
                        <BlockMath>{` ${braking_force_total} `}</BlockMath>
                      </td>
                    </tr>

                    <tr>
                      <td>제동 한계 각</td>
                      <td>
                        <InlineMath>{` \\theta = \\sin ^{-1} \\cfrac {F_{SB}}{W} `}</InlineMath>
                      </td>
                      <td>
                        <InlineMath>{` \\sin ^{-1} \\cfrac {${braking_force_total}}{${values.grossWeight}} `}</InlineMath>
                      </td>
                      <td>
                        <BlockMath>{` ${braking_limit_slope} `}</BlockMath>
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
              <th>제동 거리</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={styles.head_description}>
                <p>○ 제동거리 산정을 위한 기준 속도 </p>
                <table style={{ width: "60%", height: "20%", margin: "auto" }}>
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
                      <td>장비 최고 속도</td>

                      <td>
                        <InlineMath>{`\V_0`}</InlineMath>
                      </td>
                      <td>㎞/h</td>
                      <td>{values.travel_speed || ""}</td>
                      <td></td>
                    </tr>

                    <tr>
                      <td>공주 시간</td>
                      <td>
                        <InlineMath>{`t`}</InlineMath>
                      </td>
                      <td>sec</td>
                      <td>0.5</td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
                <br />
                <p>○ 제동력과 감가속도 </p>

                <table style={{ width: "100%", height: "20%", margin: "auto" }}>
                  <tbody>
                    <tr>
                      <td>제동력과 감속도 (감속율)</td>
                      <td>
                        <InlineMath>{` \\mu = \\cfrac {F_{SB}}{W} `}</InlineMath>
                      </td>
                      <td>
                        <InlineMath>{` \\cfrac {${braking_force_total}}{${values.grossWeight}} `}</InlineMath>
                      </td>
                      <td>
                        <BlockMath>{` ${decceleration_rate} `}</BlockMath>
                      </td>
                    </tr>

                    <tr>
                      <td>감속</td>
                      <td>
                        <InlineMath>{` a= \\mu \\times g `}</InlineMath>
                      </td>
                      <td>
                        <InlineMath>{` ${decceleration_rate} \\times 9.81 `}</InlineMath>
                      </td>
                      <td>
                        <BlockMath>{` ${decceleration} `}</BlockMath>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <br />

                <p>○ 정지 거리 (최고 속도 / 기준 속도) </p>

                <table style={{ width: "100%", height: "30%", margin: "auto" }}>
                  <tbody>
                    <tr>
                      <td>
                        <InlineMath>{` S_{max} = \\cfrac{{V_0}^2}{2 \\times a} \\times (\\cfrac{1000}{3600})^2 + t \\times V_0 \\times (\\cfrac{1000}{3600}) `}</InlineMath>
                      </td>
                      <td>정지거리 (최고속도)</td>
                    </tr>
                    <tr>
                      <td>
                        <InlineMath>{` \\cfrac{${values.travel?.travel_speed}^2}{2 \\times ${decceleration}} \\times (\\cfrac{1000}{3600})^2 + ${idle_running} \\times ${values.travel?.travel_speed} \\times (\\cfrac{1000}{3600}) `}</InlineMath>
                      </td>
                      <td>
                        <BlockMath>{`${
                          values.travel?.braking_distance_max_tested || values.travel?.braking_distance_max || ""
                        }`}</BlockMath>{" "}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {values.travel?.braking_distance_max_tested && 

      <div className={styles.pages}>
        <table className={styles.borderTable}>
          <thead>
            <tr>
              <th>{"제동거리 관련 자료"}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
            <Box  sx={{p:1}}>
          
          <Typography variant="h7">아래 검증 결과에 따라 최종 체동거리는:{"  "}   { values.travel?.braking_distance_max_tested} m  </Typography>
  
                
  
          </Box>
              <td>{parse(braking_description)}</td>
            </tr>
          </tbody>
        </table>
      </div>}
    </>
  );
};

export default TravelBrakingWX;
