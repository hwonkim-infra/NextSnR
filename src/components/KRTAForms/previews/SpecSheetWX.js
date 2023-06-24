import { Grid, Paper, Table, TableBody, TableRow, Typography } from "@mui/material";
import React from "react";

const SpecSheet = ({ values }) => {
  values.undercarriage ??= {};
  values.engine ??= {};
  values.attachments ??= {};
  values.swivel ??= {};
  values.travel ??= {};
  values.drawings ??= {};
  values.description ??= {};
  values.COG ??= {};
  values.transport ??= {};

  return (
    <div>
      <style>{`
    table, tr, td {
     border:1px solid black;
    }
  `}</style>

      <Paper
        elevation={2}
        style={{
          padding: "10px",
        }}
      >
        <Table width="100%">
          <TableBody>
            <TableRow>
              <td width="30%">형식</td>
              <td width="20%"> {values.model_name}</td>
              <td width="30%">규격</td>
              <td>{values.machine_grade}</td>
            </TableRow>
            <TableRow>
              <td>자체중량 (㎏)</td>
              <td>{values.operating_weight}</td>
              <td>변속기</td>
              <td>{values.gearbox}</td>
            </TableRow>
            <TableRow>
              <td>최고속도 (㎞/hr)</td>
              <td> {values.travel?.travel_speed_tested || values.travel?.travel_speed} </td>
              <td>회전반경</td>
              <td> {values.travel?.turning_radius_tested || values.travel?.turning_radius} </td>
            </TableRow>
            <TableRow>
              <td>등판능력 (무부하)</td>
              <td> {values.travel?.greadability_tested || values.travel?.greadability} </td>
              <td>제동거리</td>
              <td> {values.travel?.braking_distance_max_tested || values.travel?.braking_distance_max} </td>
            </TableRow>
            <TableRow>
              <td>길이 (㎜)</td>
              <td>{values.overall_length}</td>
              <td>축거(1)</td>
              <td>{values.undercarriage?.wheel_base}</td>
            </TableRow>
            <TableRow>
              <td>너비 (㎜)</td>
              <td>{values.overall_width} </td>
              <td>윤거(1)/(2)(㎜)</td>
              <td>{values.undercarriage.axle_track_front} / {values.undercarriage.axle_track_rear}</td>
            </TableRow>
            <TableRow>
              <td>높이 (㎜)</td>
              <td>{values.overall_height} </td>
              <td>타이어(1축)</td>
              <td>{values.undercarriage?.tire_frontAxle}  </td>
            </TableRow>
            <TableRow>
              <td>최저지상고 (㎜)</td>
              <td>{values.undercarriage?.ground_clearance} </td>
              <td>타이어(2축)</td>
              <td>{values.undercarriage.tire_rearAxle} </td>
            </TableRow>

            <TableRow>
              <td>엔진 형식</td>
              <td>{values.engine?.engine_name} </td>
              <td>공차 하중 (1축)</td>
              <td>{values.undercarriage?.axle_weight_front_unload} </td>
            </TableRow>
            <TableRow>
              <td>출력 (정격)</td>
              <td>{values.engine.power}ps@{values.engine.nominal_rev} </td>
              <td>공차 하중 (2축)</td>
              <td>{values.undercarriage.axle_weight_rear_unload} </td>
            </TableRow>
            <TableRow>
              <td>출력 (정격)</td>
              <td>{values.engine.torque}㎏m@{values.engine.torque_rev} </td>
              <td>적재 하중 (1축)</td>
              <td>{values.undercarriage.axle_weight_front_load} </td>
            </TableRow>
            <TableRow>
            <td>기통수</td>
            <td>{ values.engine.cylinder }기통</td>
            <td>적재 하중 (2축)</td>
            <td>{values.undercarriage.axle_weight_rear_load} </td>
          </TableRow>
          <TableRow>
            <td>연료 종류</td>
            <td>디젤</td>
            <td>한계 하중 (1축)</td>
            <td >{ values.undercarriage.axle_weight_front_limit }</td>

          </TableRow>
          <TableRow>
            <td>제작사</td>
          <td >{ values.engine.supplier } </td>
            <td>한계 하중 (2축)</td>
            <td >{ values.undercarriage.axle_weight_rear_limit }</td>
            
          </TableRow>
            <TableRow>
              <td>버킷용량(평적) (㎥)</td>
              <td>{values.attachments?.bucket_struck} </td>
              <td>버킷용량(산적) (㎥)</td>
              <td>{values.attachments?.bucket_heap} </td>
            </TableRow>
            <TableRow>
              <td>붐의길이 (㎜)</td>
              <td>{values.attachments?.boom_length}</td>
              <td>암의길이 (㎜)</td>
              <td>{values.attachments?.arm_length} </td>
            </TableRow>
            <TableRow>
              <td>최대굴착반지름 (㎜)</td>
              <td>{values.attachments?.digging_reach} </td>
              <td>최대굴착깊이 (㎜)</td>
              <td>{values.attachments?.digging_depth}</td>
            </TableRow>
            <TableRow>
              <td>최대덤프높이 (㎜)</td>
              <td>{values.attachments?.loading_height} </td>
              <td>배토판너비x높이 (㎜)</td>
              <td>{values.undercarriage?.dozer_size}</td>
            </TableRow>
            <TableRow>
              <td>퀵 커플러 </td>
              <td>
                {values.attachments?.quick_coupler_1}{" "}
                {Math.max(
                  values.attachments?.quick_coupler_weight_1,
                  (values.attachments?.quick_coupler_weight_2)
                ) || ''}
                ㎏
              </td>
              <td>선회속도 </td>
            <td>{ values.swivel?.swing_rev } </td>
            </TableRow>
            <TableRow>
              <td>형식승인연월일</td>
              <td> </td>
              <td>형식승인번호</td>
              <td>4-02-0{values?.registration_no} </td>
            </TableRow>
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
};

export default SpecSheet;
