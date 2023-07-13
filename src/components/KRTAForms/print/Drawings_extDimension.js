import styles from "@/components/KRTAForms/print/printPages.module.scss";
import { CircularProgress, Grid } from "@mui/material";
import parse from "html-react-parser";
import { Fragment } from "react";
// 작업반경

const Drawings_extDimension = ({ values }) => {
  if (!values.drawings) return <CircularProgress />;
  const exterior = values.drawings.exterior || "";

  return (
    <>
      <div className={styles.pages}>
        <table className={styles.borderTable}>
          <thead>
            <tr>
              <th>외관도와 제원</th>
            </tr>
          </thead>
          <tbody>
            <Grid container justifyContent="center" padding="10px">
              <Grid item xs={10}>
                {parse(exterior)}
              </Grid>
              <Grid item xs={2}>
                <table className="table" width="40mm">
                  <tbody>
                    <tr>
                      <td>길이</td>
                    </tr>
                    <tr align="right">
                      <td>{values.overall_length}</td>
                    </tr>
                    <tr>
                      <td>너비</td>
                    </tr>
                    <tr align="right">
                      <td>{values.overall_width}</td>
                    </tr>
                    <tr>
                      <td>높이</td>
                    </tr>
                    <tr align="right">
                      <td>{values.overall_height}</td>
                    </tr>
                    <tr>
                      <td>트랙높이</td>
                    </tr>
                    <tr align="right">
                      <td>{values.undercarriage?.track_height}</td>
                    </tr>
                    <tr>
                      <td>최저지상고</td>
                    </tr>
                    <tr align="right">
                      <td>{values.undercarriage?.ground_clearance}</td>
                    </tr>

                    <tr>
                      <td>텀블러 간격</td>
                    </tr>
                    <tr align="right">
                      <td>{values.undercarriage?.tumbler_distance}</td>
                    </tr>
                    <tr>
                      <td>트랙 길이</td>
                    </tr>
                    <tr align="right">
                      <td>{values.undercarriage?.track_length}</td>
                    </tr>
                    <tr>
                      <td>트랙 간격</td>
                    </tr>
                    <tr align="right">
                      <td>{values.undercarriage?.track_gap}</td>
                    </tr>
                    <tr>
                      <td>슈 폭</td>
                    </tr>
                    <tr align="right">
                      <td>{values.undercarriage?.shoe_width}</td>
                    </tr>
                    {values.rear_swing_radius && (
                      <Fragment>
                        <tr>
                          <td>후방선회반경</td>
                        </tr>
                        <tr align="right">
                          <td>{values.rear_swing_radius}</td>
                        </tr>
                      </Fragment>
                    )}
                    {values.attachments.dozer_width && (
                      <Fragment>
                        <tr>
                          <td>배토판 너비</td>
                        </tr>
                        <tr align="right">
                          <td>{values.attachments.dozer_width}</td>
                        </tr>
                        <tr>
                          <td>배토판 높이 </td>
                        </tr>
                        <tr align="right">
                          <td>{values.attachments.dozer_height}</td>
                        </tr>
                        <tr>
                          <td>틸트량 </td>
                        </tr>
                        <tr align="right">
                          <td>{values.attachments.dozer_tilt}</td>
                        </tr>
                        <tr>
                          <td>앵글량 </td>
                        </tr>
                        <tr align="right">
                          <td>{values.attachments.dozer_angle}</td>
                        </tr>
                      </Fragment>
                    )}
                  </tbody>
                </table>
              </Grid>
            </Grid>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Drawings_extDimension;
