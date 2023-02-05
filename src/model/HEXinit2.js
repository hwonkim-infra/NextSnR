// import React, { useMemo } from "react";

const HEXinit = (currentModel) => {
  return {
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
    {ground_clearance: currentModel?.undercarriage?.ground_clearance || "",
    shoe_width: currentModel?.undercarriage?.shoe_width || "",
    tumbler_distance: currentModel?.undercarriage?.tumbler_distance || "",
    track_length: currentModel?.undercarriage?.track_length || "",
    track_height: currentModel?.undercarriage?.track_height || "",
    track_gap: currentModel?.undercarriage?.track_gap || "",
    dozer_size: currentModel?.undercarriage?.dozer_size || "",},

    engine: {
      engine_name: currentModel?.engine?.engine_name || "",
    supplier: currentModel?.engine?.supplier || "",
    power: currentModel?.engine?.power || "",
    nominal_rev: currentModel?.engine?.nominal_rev || "",
    torque: currentModel?.engine?.torque || "",
    torque_rev: currentModel?.engine?.torque_rev || "",
    cylinder: currentModel?.engine?.cylinder || "",},

    attachments: 
    
    {bucket_struck: currentModel?.attachments?.bucket_struck || "",
    bucket_heap: currentModel?.attachments?.bucket_heap || "",
    arm_length: currentModel?.attachments?.arm_length || "",
    boom_length: currentModel?.attachments?.boom_length || "",
    quick_coupler_1: currentModel?.attachments?.quick_coupler_1 || "",
    quick_coupler_2: currentModel?.attachments?.quick_coupler_2 || "",
    quick_coupler_weight_2: currentModel?.attachments?.quick_coupler_weight_2 || "",

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
      pump_flow: currentModel?.swivel?.pump_flow || "",
      motor_displacement: currentModel?.swivel?.motor_displacement || "",
    reduction: currentModel?.swivel?.reduction || "",
    motor_eff: currentModel?.swivel?.motor_eff || "",

    swing_rev: currentModel?.swivel?.swing_rev || "",},

    travel: {
    pump_displacement: currentModel?.travel?.pump_displacement || "",
    pump_pressure: currentModel?.travel?.pump_pressure || "",
    traction_force: currentModel?.travel?.traction_force || "",
    TM_flow_1: currentModel?.travel?.TM_flow_1 || "",
    TM_flow_2: currentModel?.travel?.TM_flow_2 || "",
    TM_mv: currentModel?.travel?.TM_mv || "",
    TM_mt: currentModel?.travel?.TM_mt || "",
    TM_r: currentModel?.travel?.TM_r || "",
    surface_drag: currentModel?.travel?.surface_drag || "",
    sprocket_radius: currentModel?.travel?.sprocket_radius || "",
    drag: currentModel?.travel?.drag || "",
    reduc: currentModel?.travel?.reduc || "",

    friction_surface: currentModel?.travel?.friction_surface || "",
    greadability_ref: currentModel?.travel?.greadability_ref || "",
    brake_torque: currentModel?.travel?.brake_torque || "",},

    drawings: {
    exterior: currentModel?.drawings?.exterior || "",
    boom: currentModel?.drawings?.boom || "",
    arm: currentModel?.drawings?.arm || "",
    bucket: currentModel?.drawings?.bucket || "",
    bucket_capa_heap: currentModel?.drawings?.bucket_capa_heap || "",
    bucket_capa_struck: currentModel?.drawings?.bucket_capa_struck || "",
    Qcouplr: currentModel?.drawings?.Qcouplr || "",
    dozer: currentModel?.drawings?.dozer || "",
    Emission_Certi: currentModel?.drawings?.Emission_Certi || "",
    Emission_Certi2: currentModel?.drawings?.Emission_Certi2 || "",
    EngineCurve: currentModel?.drawings?.EngineCurve || "",},

    appendix: currentModel?.drawings?.appendix || "",

    description: {
    swing_reduction: currentModel?.description?.swing_reduction || "",
    travel_reduction: currentModel?.description?.travel_reduction || "",
    climb: currentModel?.description?.climb || "",
    bucket_creep: currentModel?.description?.bucket_creep || "",},
    
    COG: {
      tipping_line: currentModel?.COG?.tipping_line || "",
      bucket_COS: currentModel?.COG?.bucket_COS || "",
      
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
  };
};

export default HEXinit;
