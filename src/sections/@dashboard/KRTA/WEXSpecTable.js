
import { Table } from "@mui/material";
import parse from "html-react-parser";

const WEXSpecTable = ({ values }) => {
  const approval = values.approval_result || ""
  return (
   
            <Table style={{ width: "70%", height: "80%", margin: "auto" }}>
                <thead>
                  <tr>
                    <th
                      colSpan="6"
                      style={{ textAlign: "center", height: "20mm" }}
                    >
                      {values.model_name}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colSpan="2" width="20%">
                      자중
                    </td>
                    <td width="30%">{values.operating_weight}㎏</td>

                    <td rowSpan="5" width="3%">
                    타이어식
                    </td>
                    <td width="25%">축간거리</td>
                    <td>{values.undercarriage?.wheel_base}㎜</td>
                  </tr>
                  <tr>
                    <td colSpan="2">최고속도</td>
                    <td> {values.travel?.travel_speed}㎞/hr </td>
                    <td>윤간거리</td>
                    <td>{ values.undercarriage?.axle_track_front } / { values.undercarriage?.axle_track_rear } </td>
                  </tr>
                  <tr>
                    <td colSpan="2">등판능력</td>
                    <td> {values.travel?.greadability} </td>
                    <td>타이어치수</td>
                    <td>{values.undercarriage?.tire_frontAxle} </td>
                  </tr>
                  <tr>
                    <td rowSpan="4" width="3%">
                      외관
                    </td>
                    <td>길이</td>
                    <td>{values.overall_length}</td>
                    <td>최소회전반경</td>
                    <td>{values.travel?.turning_radius} </td>
                  </tr>
                  <tr>
                    <td>너비</td>
                    <td>{values.overall_width} </td>
                    <td>제동거리</td>
                    <td> {values.travel?.braking_distance_max} </td>
                  </tr>
                  <tr>
                    <td>높이</td>
                    <td>{values.overall_height} </td>
                    <td rowSpan="6">작업장치</td>
                    <td>버켓(평적)</td>
                    <td>{values.attachments?.bucket_struck} </td>
                  </tr>
                  <tr>
                    <td>최저지상고</td>
                    <td>{values.undercarriage?.ground_clearance} </td>
                    <td>버켓(산적)</td>
                    <td>{values.attachments?.bucket_heap} </td>
                  </tr>
                  <tr>
                    <td rowSpan="2">엔진</td>
                    <td>형식</td>
                    <td>{values.engine?.engine_name} </td>
                    <td>붐길이</td>
                    <td>{values.attachments?.boom_length}</td>
                  </tr>
                  <tr>
                    <td>출력</td>
                    <td>
                      {values.engine?.power}ps@{values.engine?.nominal_rev}rpm
                    </td>
                    <td>암길이</td>
                    <td>{values.attachments?.arm_length} </td>
                  </tr>
                  <tr>
                    <td colSpan="2">최대굴착깊이</td>
                    <td>{values.attachments?.digging_reach} </td>
                    <td>선회속도</td>
                    <td> {values.swivel?.swing_rev} </td>
                  </tr>
                  <tr>
                    <td colSpan="2">최대굴착반지름</td>
                    <td>{values.attachments?.digging_reach} </td>
                    <td>배토판(너비x높이)</td>
                    <td>{values.undercarriage?.dozer_size}</td>
                  </tr>
                  <tr>
                    <td colSpan="6">
                      1. *표시 제원은 표준 장비 (표준 버켓, 퀵커플러 장착)
                      제원입니다.
                      <br />
                      2. 규정용량 초과 작업을 삼가십시오
                      <br />
                      3. 장비의 운전 및 정비시에는 사전에 반드시 취급 설명서를
                      숙지하십시오.
                    </td>
                  </tr>
                  <tr>
                    <td colSpan="6">
                    {parse(approval)}
                    </td>
                  </tr>
                </tbody>
              </Table>
  );
};

export default WEXSpecTable;
