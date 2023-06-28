import styles from "@/components/KRTAForms/print/printPages.module.scss";
import { CircularProgress, TableCell } from "@mui/material";
import 'katex/dist/katex.min.css';
import { InlineMath } from 'react-katex';


const roundTwo = (num) => {
  return +(Math.round(num + "e+2") + "e-2");
};

const TravelSpecHZ = ({ values, config }) => {
    if (!values.travel) return <CircularProgress />
  
    const N_Motor = roundTwo(((values.travel.Q_Pump * 1000) / values.travel.q_Motor) * values.travel.vol_eff);


  const N_RG = roundTwo(N_Motor / values.travel.Gear_Ratio);


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
                      <td>주행펌프</td>
                      <td>
                        <InlineMath>{`\ Q_{Pump}`}</InlineMath>
                      </td>
                      <td>rpm</td>
                      <td>{values.travel.Q_Pump}</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>주행모터</td>
                      <td>
                        <InlineMath>{`\ q_{Motor}`}</InlineMath>
                      </td>
                      <td>cc/rev</td>
                      <td>{values.travel.q_Motor}</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>기어비</td>
                      <td>
                      <InlineMath>{`\ i`}</InlineMath>
                        
                      </td>
                      <td></td>
                      <td>
                        {values.travel.Gear_Ratio}
                      </td>
                      <td></td>
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
                      <td></td>
                    </tr>
                    <tr>
                      <td>주행효율</td>
                      <td>
                      <InlineMath>{`\ n_m`}</InlineMath>
                      </td>
                      <td></td>
                      <td>
                        {values.travel.vol_eff}
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
                <p>○ 주행모터 회전속도에 따른 주행속도 계산</p>
                    <table style={{width:"100%", height:"70%", margin: "auto"}} >
                    <tbody >
                      <tr>
                        <TableCell >
                          <InlineMath>{` n_{motor}`}</InlineMath>

                        </TableCell>
                      </tr>
                      <tr>
                        <td>
                          
                          <InlineMath>{` n_{motor} =  \\cfrac{Q_{Pump}*1000}{q_{motor}} \\times vol_{eff} =  \\cfrac{${values.travel.Q_Pump}*1000}{${values.travel.q_Motor}} \\times ${values.travel.vol_eff} = { ${N_Motor} } `}</InlineMath>
                        </td>
                      </tr>
                      
                      
                      <tr>
                        <TableCell >
                          N_RG
                        </TableCell>
                      </tr>
                      <tr>
                        <td>
                        <InlineMath>{` n_{RG} =  \\cfrac{ Q_{Pump} }{ i_{gear} } =  \\cfrac{${N_Motor}*1000}{${values.travel.Gear_Ratio}} \\times ${values.travel.vol_eff} = { ${N_RG} } `}</InlineMath>
                          
                        </td>
                      </tr>

                      
                      <tr>
                        <TableCell >
                          주행속도
                        </TableCell>
                      </tr>
                      <tr>
                        <td>
                        <InlineMath>{` \\cfrac{ n_{RG} \\times 2 \\times \\pi \\times R_{sprocket}  }{ 60 } \\times \\cfrac{ 3600}{1000}  =  \\cfrac{ ${N_RG} \\times 2 \\times \\pi \\times ${values.travel.Sprocket_Radius}  }{ 60 } \\times \\cfrac{ 3600}{1000} = { ${values.travel.travel_speed} } `}</InlineMath>
                          
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
