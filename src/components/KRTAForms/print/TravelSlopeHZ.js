import React from "react";
import "katex/dist/katex.min.css";
import { InlineMath } from "react-katex";
import styles from "@/components/KRTAForms/print/printPages.module.scss";
import {
  Box,
  CircularProgress,
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@mui/material";

const roundTwo = (num) => {
  return +(Math.round(num + "e+2") + "e-2");
};


const TravelSlopeHZ = ({ values, config }) => {
  if (!values.travel) return <CircularProgress />;

  const T_Motor = roundTwo(values.travel.P_Pump*values.travel.q_Motor_T/2/  Math.PI * values.travel.Mech_eff);

  const T_RG = roundTwo(T_Motor * values.travel.Gear_Ratio * values.travel.Gear_eff);

  const travel_drag = 0.1;
  const slope_traction_cal =   ( values.travel.traction - values.travel.travel_drag *(values.grossWeight/1000))  /(values.grossWeight/1000)
  const slope_traction_calc =  Math.asin (slope_traction_cal)




  let slope_traction;
  (!slope_traction_calc || slope_traction_calc <= 0 ) ? (slope_traction = "∞") : (slope_traction = slope_traction_calc);

  

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

                <Box sx={{p:2}}>○ 등판 구동력 관련 제원</Box>
                
                <table style={{ width: "80%", height: "35%", margin: "auto" }}>
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
                      <td>주행펌프(견인)</td>
                      <td>
                        <InlineMath>{`\ P_{Pump}`}</InlineMath>
                      </td>
                      <td>㎏/㎠</td>
                      <td>{values.travel.P_Pump}</td>
                    </tr>
                    
                    <tr>
                      <td>주행모터(견인)</td>
                      <td>
                        <InlineMath>{`\ q_{MotorT}`}</InlineMath>
                      </td>
                      <td>cc/rev</td>
                      <td>{values.travel.q_Motor_T}</td>
                    </tr>
                    <tr>
                      <td>기어효율</td>
                      <td>
                        <InlineMath>{`\ μ`}</InlineMath>
                      </td>
                      <td>cc/rev</td>
                      <td>{values.travel.Gear_eff}</td>
                    </tr>
                    <tr>
                      <td>기계효율</td>
                      <td>
                        <InlineMath>{`\ η`}</InlineMath>
                      </td>

                      <td></td>
                      <td>{values.travel.Mech_eff}</td>
                    </tr>


                    <tr>
                      <td>스프로켓 반경</td>
                      <td>
                      <InlineMath>{`\ R_{sprocket}`}</InlineMath>
                      </td>
                      <td>m</td>
                      <td>
                        {values.travel.Sprocket_Radius}
                      </td>
                    </tr>
                    
                  </tbody>
                </table>
                <Box sx={{p:2}}>○ 주행 모터 토크를 이용한 구동력 계산</Box>
                
                <table style={{ width: "90%", height: "15%", margin: "auto" }}>
                  <tbody>
                    <tr>
                      <td>주행 모터 토크 계산</td>
                    </tr>
                    <tr>
                      <TableCell rowSpan="2">
                        <InlineMath>{` T_{Motor} = \\cfrac{P_{Pump}*q_{Motor} \\times \\pi}{2} \\times \ η =  \\cfrac{${values.travel.P_Pump}\\times${values.travel.q_Motor_T} \\times \\pi}{2} \\times \ η = ${T_Motor} `}</InlineMath>
                      </TableCell>
                    </tr>
                    {/* 
                    <tr>
                      <TableCell rowSpan="2">
                        <InlineMath>{` T_RG = T_Motor * Gear_Ratio * Gear_eff =  ${T_Motor} * ${values.travel.Gear_Ratio} * ${values.travel.Gear_eff} = ${T_RG} `}</InlineMath>
                      </TableCell>
                    </tr> */}
                  </tbody>
                </table>
                <table style={{ width: "90%", height: "15%", margin: "auto" }}>
                  <tbody>
                    <tr>
                      <td>T_RG 계산</td>
                    </tr>
                    <tr>
                      <TableCell rowSpan="2">
                        <InlineMath>{` T_{RG} = T_{Motor} \\times i \\times μ =  ${T_Motor} \\times ${values.travel.Gear_Ratio} \\times ${values.travel.Gear_eff} = ${T_RG} `}</InlineMath>
                      </TableCell>
                    </tr>
                  </tbody>
                </table>

                <table style={{ width: "90%", height: "15%", margin: "auto" }}>
                  <tbody>
                    <tr>
                      <td>구동력 계산</td>
                    </tr>
                    <tr>
                      <TableCell rowSpan="2">
                        <InlineMath>{`F_{traction} = \\cfrac{T_{RG} \\times 2}{ R_{sprocket} \\times 1000 } = \\cfrac{ ${T_RG} \\times 2}{ ${values.travel.Sprocket_Radius} \\times 1000 \\times 9.81}  = ${values.travel.traction} `}</InlineMath>
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

                  등판 및 정차 가능 경사각은 아래 사양 중 가장 작은 각에 해당:{" "}
                  <Box sx={{p:2}}> <strong>아래 계산 결과에 따라 등판 가능 경사각: {values.travel.greadability}</strong>  </Box>

                
                <table style={{ width: "90%", height: "25%", margin: "auto" }}>
                  <tbody>
                    <tr>
                      <td>
                      <Box sx={{p:2}}>○ 구동견인력에 의한 등판 능력: {slope_traction} </Box>


                      </td>
                    </tr>
                    <tr>
                    <TableCell>
                        <InlineMath>{`F_{traction} - P \\cdot W = W  \\cdot \\sin \\theta`}</InlineMath>
                      </TableCell>
                      </tr>
                    <tr>
                    <TableCell>

                     등판각 <InlineMath>{` \\theta = \\sin^{-1} {\\cfrac{F - P \\cdot W}{W}} = \\sin^{-1} {\\cfrac{ ${ values.travel.traction} - ${ values.travel.travel_drag } \\cdot ${values.grossWeight/1000}  }{${values.grossWeight/1000}}} =  `}</InlineMath>
                        {/* <InlineMath>{`\\theta = \\sin^{-1}{\\cfrac{F - P \\cdot W}{W}} = \\sin^{-1}(\\cfrac{${ values.travel.TM_traction } - ${ values.travel.travel_drag } \\times ${values.grossWeight/1000}}{${ values.grossWeight/1000 }}) = ${ values.travel.traction_slope }`} </InlineMath> */}
                      <InlineMath>{`${slope_traction}`}</InlineMath>
                        
                      </TableCell>
                    </tr>

                    
                  </tbody>
                </table>

                <table style={{ width: "90%", height: "20%", margin: "auto" }}>
                  <tbody>
                    <tr>
                      <td>
                      <Box sx={{p:2}}>○ 엔진 오일 팬에 의한 최대 허용 경사: {values.travel.greadability_ref} </Box>


                      </td>
                    </tr>
                    <tr>
                    <TableCell>
                        <InlineMath>{`Greadability_{ref} = ${values.travel.greadability_ref}`}</InlineMath>
                      </TableCell>
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
