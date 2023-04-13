import CompareChangePrint from "@/components/KRTAForms/print/CompareChangePrint";
import axios from "axios";
import { useEffect, useState } from "react";

const CompareChangeData = ({ values, type }) => {
  const [originData, setOriginData] = useState({});

  const getOrigin = async () => {
    if (type === "HEX") {
      const response = await axios.get(`/api/HEX/${values.origin}`);

      const data = response.data;
      setOriginData(data);
    }
    if (type === "WEX") {
      const response = await axios.get(`/api/WEX/${values.origin}`);

      const data = response.data;
      setOriginData(data);
    }
  };

  useEffect(() => {
    if (values.origin) getOrigin();
  }, [values.origin]);

  const originExterior = originData.drawings?.exterior || "";

  const specDataSet = [
    {
      label: "자체중량 (㎏)",
      current: values.operating_weight,
      origin: originData.operating_weight,
    },
    {
      label: "최고속도 (㎞/hr)",
      current: values.travel?.travel_speed,
      origin: originData.travel?.travel_speed,
    },
    {
      label: "회전반경",
      current: values.travel?.turning_radius,
      origin: originData.travel?.turning_radius,
    },
    {
      label: "등판능력 (무부하)",
      current: values.travel?.greadability,
      origin: originData.travel?.greadability,
    },
    {
      label: "제동거리",
      current: values.travel?.braking_distance_max,
      origin: originData.travel?.braking_distance_max,
    },
    {
      label: "길이 (㎜)",
      current: values.overall_length,
      origin: originData.overall_length,
    },
    {
      label: "축거 (㎜)",
      current: values.undercarriage?.wheel_base,
      origin: originData.undercarriage?.wheel_base,
    },
    {
      label: "높이 (㎜)",
      current: values.overall_height,
      origin: originData.overall_height,
    },
    {
      label: "타이어",
      current: values.undercarriage?.tire_frontAxle,
      origin: originData.undercarriage?.tire_frontAxle,
    },
    {
      label: "최저지상고 (㎜)",
      current: values.undercarriage?.ground_clearance,
      origin: originData.undercarriage?.ground_clearance,
    },
    {
      label: "엔진 형식",
      current: values.engine?.engine_name,
      origin: originData.engine?.engine_name,
    },
    {
      label: "출력 (정격. ps)",
      current: values.engine?.power,
      origin: originData.engine?.power,
    },
    {
      label: "엔진 토크",
      current: values.engine?.torque,
      origin: originData.engine?.torque,
    },
    
    {
      label: "공차 하중 (1축)",
      current: values.undercarriage?.axle_weight_front_unload,
      origin: originData.undercarriage?.axle_weight_front_unload,
    },
    {
      label: "공차 하중 (2축)",
      current: values.undercarriage?.axle_weight_rear_unload,
      origin: originData.undercarriage?.axle_weight_rear_unload,
    },
    {
      label: "적재 하중 (1축)",
      current: values.undercarriage?.axle_weight_front_load,
      origin: originData.undercarriage?.axle_weight_front_load,
    },
    {
      label: "적재 하중 (2축)",
      current: values.undercarriage?.axle_weight_rear_load,
      origin: originData.undercarriage?.axle_weight_rear_load,
    },
    {
      label: "버킷용량(평적) (㎥)",
      current: values.attachments?.bucket_struck,
      origin: originData.attachments?.bucket_struck,
    },
    {
      label: "버킷용량(산적) (㎥)",
      current: values.attachments?.bucket_heap,
      origin: originData.attachments?.bucket_heap,
    },
    {
      label: "붐의길이 (㎜)",
      current: values.attachments?.boom_length,
      origin: originData.attachments?.boom_length,
    },
    {
      label: "암의길이 (㎜)",
      current: values.attachments?.arm_length,
      origin: originData.attachments?.arm_length,
    },
    {
      label: "최대굴착반지름 (㎜)",
      current: values.attachments?.digging_reach,
      origin: originData.attachments?.digging_reach,
    },
    {
      label: "최대굴착깊이 (㎜)",
      current: values.attachments?.digging_depth,
      origin: originData.attachments?.digging_depth,
    },
    {
      label: "최대덤프높이 (㎜)",
      current: values.attachments?.loading_height,
      origin: originData.attachments?.loading_height,
    },
    {
      label: "배토판 (㎜)",
      current: values.undercarriage?.dozer_size,
      origin: originData.undercarriage?.dozer_size,
    },
    {
      label: "퀵 커플러",
      current: values.attachments?.quick_coupler_1,
      origin: originData.attachments?.quick_coupler_1,
    },
    {
      label: "퀵 커플러 중량",
      current: values.attachments?.quick_coupler_weight_1,
      origin: originData.attachments?.quick_coupler_weight_1,
    },
    {
      label: "선회속도 (rpm)",
      current: values.swivel?.swing_rev,
      origin: originData.swivel?.swing_rev,
    },
    {
      label: "슈폭 (㎜)",
      current: values.undercarriage?.shoe_width,
      origin: originData.undercarriage?.shoe_width,
    },
    {
      label: "트랙높이 (㎜)",
      current: values.undercarriage?.track_height,
      origin: originData.undercarriage?.track_height,
    },
    {
      label: "트랙중심간거리 (㎜)",
      current: values.undercarriage?.track_gap,
      origin: originData.undercarriage?.track_gap,
    },
    {
      label: "텀블러중심간거리 (㎜)",
      current: values.undercarriage?.tumbler_distance,
      origin: originData.undercarriage?.tumbler_distance,
    },
    {
      label: "접지압(㎏/㎠)",
      current: values.undercarriage?.ground_pressure,
      origin: originData.undercarriage?.ground_pressure,
    },
    
    
  ];

  return (
    <>
    <CompareChangePrint specDataSet={specDataSet} originExterior={originExterior} ECN={values.ECN} />
      
    </>
  );
};

export default CompareChangeData;
