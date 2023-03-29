import React from "react";
import styles from "@/components/KRTAForms/print/printPages.module.scss";

// 퀵커플러 탈착

const QCouplr = ({ values }) => {
  const quick_coupler_weight = Math.max(
    values.attachments?.quick_coupler_weight_1,
    values.attachments?.quick_coupler_weight_2
  );

  return (
    <div className={styles.pages}>
      <table className={styles.borderTable}>
        <thead>
          <tr>

            <th>퀵 커플러 탈착에 따른 제원</th>
          </tr>
        </thead>
        <tbody>
          {/* <Grid container justify="center" alignItems="center" padding="50px" direction="row"> */}

          <tr>
            <td>
              <table
                className={styles.innerTable}
                // style={{width:"80%", height:"80%", margin: "auto"}}
              >
                <thead height="15%">
                  <tr >
                    <th width="30%" >구분</th>
                    <th width="20%">
                      커플러 장착 <br />
                      <h6>
                      (제원표와 동일)
                      </h6>
                    </th>
                    <th width="20%">커플러 탈거</th>

                    <th>비고</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>자체중량 (㎏)</td>
                    <td id=""> {values.grossWeight} </td>
                    <td id=""> {values.grossWeight - (quick_coupler_weight || '')} </td>
                    <td>운전자 65kg</td>
                  </tr>
                  <tr>
                    <td>최대굴착 반지름 (㎜)</td>
                    <td id="">{values.attachments?.digging_reach}</td>
                    <td id="">{values.attachments?.digging_reach_woqc}</td>
                    <td> </td>
                  </tr>
                  <tr>
                    <td>덤프높이 (㎜)</td>
                    <td id="">{values.attachments?.loading_height}</td>
                    <td id="">{values.attachments?.loading_height_woqc}</td>
                    <td> </td>
                  </tr>
                  <tr>
                    <td>굴착깊이 (㎜)</td>
                    <td id="">{values.attachments?.digging_depth}</td>
                    <td id="">{values.attachments?.digging_depth_woqc}</td>
                    <td> </td>
                  </tr>
                  
                  <tr>
                    <td>접지압 (㎏/㎠)</td>
                    <td id=""> {values.undercarriage?.ground_pressure} </td>
                    <td id="">
                      {" "}
                      {values.undercarriage?.ground_pressure_woqc}{" "}
                    </td>
                    <td> </td>
                  </tr>
                  <tr>
                    <td>버킷잠금장치</td>
                    <td>2중</td>
                    <td>-</td>
                    <td> </td>
                  </tr>
                  <tr>
                    <td>경고음장치</td>
                    <td>설치</td>
                    <td colSpan="2">
                      유압잠금장치가 해제된 경우 조종사가 알 수 있는 충분한 크기
                    </td>
                  </tr>
                  <tr>
                    <td>과전류차단</td>
                    <td>설치</td>
                    <td colSpan="2">조종석에 퓨즈박스 및 스위치 설치</td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
          {/* </Grid> */}
        </tbody>
      </table>
    </div>
  );
};

export default QCouplr;
