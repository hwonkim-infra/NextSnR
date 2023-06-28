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

export default function HDZCalc(values) {
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

  // N_Motor = C237*1000/D237*D9 = Q_Pump*1000/D237*vol_eff = 153.1 * 1000/46 * 0.98
  const N_Motor = ((values.travel.Q_Pump * 1000) / values.travel.q_Motor) * values.travel.vol_eff;

  // N_RG = E237/D11 =  N_Motor/Gear_Ratio
  const N_RG = N_Motor / values.travel.Gear_Ratio;

  // 주행속도 = F237/60*2*PI*D15*3600/1000 = N_RG/60*2*PI*Sprocket_Radius*3600/1000

  const travel_speed = roundTwo(
    ((N_RG / 60) * 2 * Math.PI * values.travel.Sprocket_Radius * 3600) / 1000
  );

  /* 구동력 */
  // T_Motor = H50*D50/2/PI()*$D$10 = P_Pump*q_Motor/2/PI()*Mech_eff = 40*160/2/PI()*0.81 = 825.06
  const T_Motor = values.travel.P_Pump*values.travel.q_Motor_T/2/  Math.PI * values.travel.Mech_eff;

  // T_RG =	I50*$D$11*$D$12 = T_Motor * Gear_Ratio * Gear_eff
  const T_RG = T_Motor * values.travel.Gear_Ratio * values.travel.Gear_eff;
              
  /* traction	J50/$D$15*2/1000 = T_RG/Sprocket_Raduis*2/1000 */
  const traction = roundTwo(T_RG/ values.travel.Sprocket_Radius*2/1000);

  /* 최대등판각도_구동력 */
  // const traction_slope = roundTwo( (180 / Math.PI) * Math.asin( (TM_traction - (values.travel.travel_drag * grossWeight) / 1000) / (grossWeight / 1000) ) );

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
    // (values.travel.reduc_rpm = reduc_rpm),
    (values.travel.travel_speed = travel_speed),
    (values.travel.T_Motor = T_Motor),
    (values.travel.traction = traction),
    // (values.travel.traction_slope = traction_slope),
    ""
  );
}

/* 
export const HDZSave = ({ values, HDZCalc }) => {
  return (
    (values.grossWeight = HDZCalc.grossWeight),
    (values.attachments.bucket_exca_capa = HDZCalc.bucket_exca_capa),
    ""
  );
};
 */
