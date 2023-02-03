import React, { useMemo } from "react";

const HEXinit = (currentModel) => {
  return useMemo(() => ({
    _id: currentModel?._id || "",
    model_name: currentModel?.model_name || "",
    origin: currentModel?.origin || "",
    serial_no: currentModel?.serial_no || "",
    registration_no: currentModel?.registration_no || "",
    machine_grade: currentModel?.machine_grade || "",
    operating_weight: currentModel?.operating_weight || "",

    gearbox: currentModel?.gearbox || "",
    overall_length: currentModel?.overall_length || "",
    overall_width: currentModel?.overall_width || "",
    overall_height: currentModel?.overall_height || "",
    rear_swing_radius: currentModel?.rear_swing_radius || "",

    overall_height_woQC: currentModel?.overall_height_woQC || "",
    overall_length_woQC: currentModel?.overall_length_woQC || "",
    ETC: currentModel?.ETC || "",
    ECN: currentModel?.ECN || "",
    approval_result: currentModel?.approval_result || "",

    undercarriage:     
    {ground_clearance: currentModel?.ground_clearance || "",
    shoe_width: currentModel?.shoe_width || "",
    tumbler_distance: currentModel?.tumbler_distance || "",
    track_length: currentModel?.track_length || "",
    track_height: currentModel?.track_height || "",
    track_gap: currentModel?.track_gap || "",
    dozer_size: currentModel?.dozer_size || "",},

    engine: {
    engine_name: currentModel?.engine_name || "",
    supplier: currentModel?.supplier || "",
    power: currentModel?.power || "",
    nominal_rev: currentModel?.nominal_rev || "",
    torque: currentModel?.torque || "",
    torque_rev: currentModel?.torque_rev || "",
    cylinder: currentModel?.cylinder || "",},

    attachments: 
    
    {bucket_struck: currentModel?.bucket_struck || "",
    bucket_heap: currentModel?.bucket_heap || "",
    arm_length: currentModel?.arm_length || "",
    boom_length: currentModel?.boom_length || "",
    quick_coupler_1: currentModel?.quick_coupler_1 || "",
    quick_coupler_2: currentModel?.quick_coupler_2 || "",
    quick_coupler_weight_2: currentModel?.quick_coupler_weight_2 || "",

    digging_reach: currentModel?.digging_reach || "",
    digging_reach_woqc: currentModel?.digging_reach_woqc || "",
    digging_depth: currentModel?.digging_depth || "",
    digging_depth_woqc: currentModel?.digging_depth_woqc || "",
    loading_height: currentModel?.loading_height || "",
    loading_height_woqc: currentModel?.loading_height_woqc || "",

    quick_coupler_weight: currentModel?.quick_coupler_weight || "",
    bucket_exca_capa: currentModel?.bucket_exca_capa || "",
},

    swivel: {
    pump_flow: currentModel?.pump_flow || "",
    motor_displacement: currentModel?.motor_displacement || "",
    reduction: currentModel?.reduction || "",
    motor_eff: currentModel?.motor_eff || "",

    swing_rev: currentModel?.swing_rev || "",},

    travel: {
    pump_displacement: currentModel?.pump_displacement || "",
    pump_pressure: currentModel?.pump_pressure || "",
    traction_force: currentModel?.traction_force || "",
    TM_flow_1: currentModel?.TM_flow_1 || "",
    TM_flow_2: currentModel?.TM_flow_2 || "",
    TM_mv: currentModel?.TM_mv || "",
    TM_mt: currentModel?.TM_mt || "",
    TM_r: currentModel?.TM_r || "",
    surface_drag: currentModel?.surface_drag || "",
    sprocket_radius: currentModel?.sprocket_radius || "",
    drag: currentModel?.drag || "",
    reduc: currentModel?.reduc || "",

    friction_surface: currentModel?.friction_surface || "",
    greadability_ref: currentModel?.greadability_ref || "",
    brake_torque: currentModel?.brake_torque || "",},

    drawings: {
    exterior: currentModel?.exterior || "",
    boom: currentModel?.boom || "",
    arm: currentModel?.arm || "",
    bucket: currentModel?.bucket || "",
    bucket_capa_heap: currentModel?.bucket_capa_heap || "",
    bucket_capa_struck: currentModel?.bucket_capa_struck || "",
    Qcouplr: currentModel?.Qcouplr || "",
    dozer: currentModel?.dozer || "",
    Emission_Certi: currentModel?.Emission_Certi || "",
    Emission_Certi2: currentModel?.Emission_Certi2 || "",
    EngineCurve: currentModel?.EngineCurve || "",},

    appendix: currentModel?.appendix || "",

    description: {
    swing_reduction: currentModel?.swing_reduction || "",
    travel_reduction: currentModel?.travel_reduction || "",
    climb: currentModel?.climb || "",
    bucket_creep: currentModel?.bucket_creep || "",},

    COG: {
    tipping_line: currentModel?.tipping_line || "",
    bucket_COS: currentModel?.bucket_COS || "",

    transport: currentModel?.transport || "",
    transport_1: currentModel?.transport_1 || "",
    transport_1_height: currentModel?.transport_1_height || "",
    transport_2: currentModel?.transport_2 || "",
    transport_2_height: currentModel?.transport_2_height || "",
    transport_2_weight: currentModel?.transport_2_weight || "",
    transport_3: currentModel?.transport_3 || "",
    transport_3_height: currentModel?.transport_3_height || "",
    transport_3_weight: currentModel?.transport_3_weight || "",
    transport_4: currentModel?.transport_4 || "",
    transport_4_height: currentModel?.transport_4_height || "",
    transport_4_weight: currentModel?.transport_4_weight || "",
    transport_5: currentModel?.transport_5 || "",
    transport_5_height: currentModel?.transport_5_height || "",
    transport_5_weight: currentModel?.transport_5_weight || "",},
  }), [currentModel]);
};

export default HEXinit;
