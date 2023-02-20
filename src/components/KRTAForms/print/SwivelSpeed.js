import React from "react";
import { MathJax, MathJaxContext } from "better-react-mathjax";
import styles from "@/components/KRTAForms/print/printPages.module.scss";
import { TableCell } from "@mui/material";

// 퀵커플러 탈착

const SwivelSpeed = ({ values, config }) => {

const swing_reduction_rev =  Math.round((values.swivel?.pump_flow * values.swivel?.motor_eff / values.swivel?.motor_displacement*1000)*100)/100;

  return (
    <>
        <MathJaxContext version={3} config={config}>

    <div className={styles.pages}>
      <table className={styles.borderTable}>
                <thead>

                <tr>
                  <th>
                    선회 속도
                  </th>
                </tr>
                </thead>
                <tbody>
                <tr>
              <td className={styles.head_description}>
                    <p>▷ 아래 계산 결과에 따라 <strong> 최고 선회 속도는 { values.swivel?.swing_rev } rpm </strong></p>
                <br />
                <br />
                    <p>○ 선회 성능 관련 사양</p>
                    <table style={{width:"100%", height:"30%", margin: "auto"}} >
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
                          <td>선회 펌프 유량</td>
                <td><strong><i>Q</i></strong></td>
                          <td>l/min</td>
                <td>{ values.swivel?.pump_flow }</td>
                          <td>선회 rpm</td>
                        </tr>
                        <tr>
                          <td>모터이론용적</td>
                <td><strong><i>q<sub>m</sub> </i></strong></td>
                          <td>cc/rev</td>
                <td>{ values.swivel?.motor_displacement }</td>
                          <td></td>
                        </tr>
                        <tr>
                          <td>감속기의 감속비</td>
                <td><strong><i>i<sub></sub> </i></strong></td>
                          <td></td>
                <td>{ values.swivel?.reduction }</td>
                          <td></td>
                        </tr>
                        <tr>
                          <td>선회모터용적효율</td>
                <td><strong><i>η<sub>mv</sub> </i></strong></td>
                          <td></td>
                          <td>{values.swivel?.motor_eff}</td>
                          <td></td>
                        </tr>
                        
                      </tbody>
                    </table>
                    <br />
                    <p>○ 선회 속도 계산</p>
                    <table style={{width:"100%", height:"30%", margin: "auto"}} >
                      
                      <tbody>
                        <tr>
                          <TableCell colSpan="3">선회감속기 축 회전수 SM(rpm)</TableCell>
                        </tr>
                        <tr>
                          <td><MathJax>{`$$\\frac{Q \\times \\eta_{mv}}{q_m \\times 1000}$$`}</MathJax></td>
                          <td><MathJax>{`$$\\frac{ ${values.swivel?.pump_flow} \\times ${values.swivel?.motor_eff} }{ ${values.swivel?.motor_displacement} \\times 1000}$$`}</MathJax></td>
                <td><strong><i>{swing_reduction_rev} </i></strong></td>

                          
                        </tr>
                        <tr>
                          <TableCell colSpan="3">선회속도 S(rpm)</TableCell>
                        </tr>
                        <tr style={{ background: "#e6e6e6" }}>
                          <td><MathJax>{`$$ S=\\frac{SM}{i} $$`}</MathJax></td>
                          <td><MathJax>{`$$\\frac{${swing_reduction_rev}}{${values.swivel?.reduction}} $$`}</MathJax></td>
                <td><strong><i>{values.swivel?.swing_rev} </i></strong></td>
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

export default SwivelSpeed;
