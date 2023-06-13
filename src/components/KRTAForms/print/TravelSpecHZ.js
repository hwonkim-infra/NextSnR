import styles from "@/components/KRTAForms/print/printPages.module.scss";
import { CircularProgress, TableCell } from "@mui/material";
import 'katex/dist/katex.min.css';
import { InlineMath } from 'react-katex';



const TravelSpecHZ = ({ values, config }) => {
    if (!values.travel) return <CircularProgress />
  const TM_rev_1 =
    Math.round(
      ((values.travel.pump_displacement * values.travel.TM_mv) /
        (values.travel.TM_flow_1 * values.travel.reduc)) *
        1000 *
        100
    ) / 100;
  const TM_rev_2 =
    Math.round(
      ((values.travel.pump_displacement * values.travel.TM_mv) /
        (values.travel.TM_flow_2 * values.travel.reduc)) *
        1000 *
        100
    ) / 100;

  const travel_speed_1 =
    Math.round(
      ((TM_rev_1 * 2 * Math.PI * values.travel.sprocket_radius * 60) /
        10 ** 6) *
        100
    ) / 100;
  const travel_speed_2 =
    Math.round(
      ((TM_rev_2 * 2 * Math.PI * values.travel.sprocket_radius * 60) /
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
                    최고 주행 속도는 {values.travel.travel_speed}㎞/h
                  </strong>
                <br />
                <br />
                <p>○ 주행 성능 관련 사양</p>
                    <table style={{width:"100%", height:"60%", margin: "auto"}} >
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
                      <td>주행시 엔진 회전수</td>
                      <td>
                        <InlineMath>{`\ n_e`}</InlineMath>
                      </td>
                      <td>rpm</td>
                      <td>{values.travel.engine_rev}</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>모터 용적</td>
                      <td>
                        <InlineMath>{`\ q_m`}</InlineMath>
                      </td>
                      <td>cc/rev</td>
                      <td>{values.travel.TM_flow_1}</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>감속비</td>
                      <td>
                      <InlineMath>{`\ i`}</InlineMath>
                        
                      </td>
                      <td></td>
                      <td>
                        {values.travel.reduc}
                      </td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>No. of Teeth</td>
                      <td>
                      <InlineMath>{`\ z`}</InlineMath>
                        
                      </td>
                      <td></td>
                      <td>
                        {values.travel.teeth}
                      </td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Link Pitch</td>
                      <td>
                      <InlineMath>{`\ P_1`}</InlineMath>
                      </td>
                      <td></td>
                      <td>
                        {values.travel.pitch}
                      </td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>모터속도</td>
                      <td>
                      <InlineMath>{`\ n_m`}</InlineMath>
                      </td>
                      <td>rpm</td>
                      <td>
                        {values.travel.TM_rpm}
                      </td>
                      <td></td>
                    </tr>
                    
                    <tr>
                      <td>주행 효율</td>
                      <td>
                      <InlineMath>{`\ η`}</InlineMath>
                        
                      </td>
                      <td></td>
                      <td>
                        {values.travel.drag}
                      </td>
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
                <p>○ 감속기 회전속도에 따른 주행속도 계산</p>
                    <table style={{width:"100%", height:"70%", margin: "auto"}} >
                    <tbody >
                      <tr>
                        <TableCell >
                          감속기 축 회전 <InlineMath>{` n_r`}</InlineMath>

                        </TableCell>
                      </tr>
                      <tr>
                        <td>
                          
                          <InlineMath>{` n_r = \\cfrac{감속비}{모터속도} = \\cfrac{i}{n_m} = \\cfrac{ ${values.travel.TM_rpm} }{ ${values.travel.reduc}} =  ${values.travel.reduc_rpm} `}</InlineMath>
                        </td>
                      </tr>
                      
                      
                      <tr>
                        <TableCell >
                          주행속도 (km/hr)
                        </TableCell>
                      </tr>
                      <tr>
                        <td>
                          <InlineMath>{`V_e = \\cfrac{η \\times z \\times P_1 \\times n_r  \\times 60}{2 \\times 10^6}  = \\cfrac{ ${values.travel.drag} \\times ${values.travel.teeth} \\times ${values.travel.pitch} \\times ${values.travel.reduc_rpm} \\times 60}{2 \\times 10^6}  = ${values.travel.travel_speed}`}</InlineMath>
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

export default TravelSpecHZ;
