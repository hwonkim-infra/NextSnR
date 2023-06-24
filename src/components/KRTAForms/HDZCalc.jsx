const roundTwo = (num) => {
  return +(Math.round(num + "e+2") + "e-2");
};

const roundOne = (num) => {
  return +(Math.round(num + "e+1") + "e-1");
};

const degrees_to_radians = (degrees) => {
  return degrees / (180 / Math.PI);
};
const radians_to_degrees = (radians) => {
  return radians * (180 / Math.PI);
};

export default function HDZCalc (values) {
  if (!values.travel) return;
  const grossWeight = Number(values.operating_weight) + 65; // 총중량


  const ground_Length =
    Math.round(
      0.65 * values.undercarriage?.tumbler_distance +
        0.35 * values.undercarriage?.track_length
    ) / 10; // 접지길이

    const ground_pressure =
    roundTwo(
      grossWeight /
        (((2 * values.undercarriage?.shoe_width) / 10) * ground_Length)
    ) || null; // 접지압
    
  /* 주행성능 */

  // 감속비
  const reduc_rpm = roundTwo(values.travel.TM_rpm / values.travel.reduc)

  // 주행속도
  const travel_speed = roundTwo(values.travel.drag * values.travel.teeth * reduc_rpm * values.travel.pitch * 60 /(2*10**6))
  
  /* 출력토크 */
  const TM_torque = roundTwo((values.travel.pump_pressure * values.travel.TM_flow_q * values.travel.TM_mt) /
  (200 * Math.PI)) 

  /* 구동력 */
  const TM_traction = roundTwo((2 * TM_torque * values.travel.reduc * values.travel.eff_trac ) / (values.travel.sprocket_PCD / 2)) ;


  /* 최대등판각도_구동력 */
  const traction_slope = roundTwo( (180 / Math.PI) * Math.asin((TM_traction - values.travel.travel_drag * grossWeight/1000) / (grossWeight/1000)) );
  
  
  /* 전도안정도 */

  let baseMachine_weight = values.grossWeight - values.COG?.attachments_weight;

  let COG_longitudinal = roundOne(
    (baseMachine_weight * values.COG?.baseMachine_longitudinal +
      values.COG?.attachments_weight * values.COG?.attachments_longitudinal) /
      values.grossWeight
  );

  let COG_lateral = roundOne(
    (baseMachine_weight * values.COG?.baseMachine_lateral +
      values.COG?.attachments_weight * values.COG?.attachments_lateral) /
      values.grossWeight
  );

  let COG_vertical = roundOne(
    (baseMachine_weight * values.COG?.baseMachine_vertical +
      values.COG?.attachments_weight * values.COG?.attachments_vertical) /
      values.grossWeight
  );

  /* 수송중량 */

  const transport_1_weight =
    values.operating_weight -
      (values.transport?.transport_2_weight || 0) -
      (values.transport?.transport_3_weight || 0) -
      (values.transport?.transport_4_weight || 0) -
      (values.transport?.transport_5_weight || 0) -
      (values.transport?.transport_6_weight || 0) -
      (values.transport?.transport_7_weight || 0) -
      (values.transport?.transport_8_weight || 0) -
      (values.transport?.transport_9_weight || 0) || "";

  return (
    (values.grossWeight = grossWeight),
    (values.undercarriage.ground_Length = ground_Length),
    (values.undercarriage.ground_pressure = ground_pressure),
    
    (values.travel.reduc_rpm = reduc_rpm),
    (values.travel.travel_speed = travel_speed),
    (values.travel.TM_torque = TM_torque),
    (values.travel.TM_traction = TM_traction),
    (values.travel.traction_slope = traction_slope),
    
    ""
  );
};


/* 
export const HDZSave = ({ values, HDZCalc }) => {
  return (
    (values.grossWeight = HDZCalc.grossWeight),
    (values.attachments.bucket_exca_capa = HDZCalc.bucket_exca_capa),
    ""
  );
};
 */