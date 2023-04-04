
import { Box, Table, Typography } from "@mui/material";
const roundOne = (num) => {
    return +(Math.round(num + "e+1") + "e-1");
};


/* 
33. “대형건설기계”란 다음 각 호의 어느 하나에 해당하는 건설기계를 말한다
가. 길이가 16.7미터를 초과하는 건설기계
나. 너비가 2.5미터를 초과하는 건설기계
다. 높이가 4.0미터를 초과하는 건설기계
라. 최소회전반경이 12미터를 초과하는 건설기계
마. 총중량이 40톤을 초과하는 건설기계
바. 총중량 상태에서 축하중이 10톤을 초과하는 건설기계 
*/
/* 
2. 제2조제33호 각 목의 요건 중 2가지 이상에 해당하는 대형건설기계의 경우 특별표지판의 규격은 가로 481밀리미터 세로 200밀리미터의 직사각형으로 하고, 해당되는 요건을 다음과 같이 표시할 것. 다만, 해당되는 요건이 3개 이상인 경우에는 총중량, 너비, 높이, 길이 및 최소회전반경의 순서로 해당하는 2개의 항목만을 표시한다.
 */

const LargeDecal = ({ values }) => {
  let LargeMachineSpecs = [];

  values.grossWeight_load > 40000 &&
    LargeMachineSpecs.push({
      label: "총중량",
      dimension: roundOne(values.grossWeight_load / 1000),
    });

  values.overall_width > 2500 &&
    LargeMachineSpecs.push({
      label: "너비",
      dimension: roundOne(values.overall_width / 1000),
    });

  values.overall_height > 4000 &&
    LargeMachineSpecs.push({
      label: "높이",
      dimension: roundOne(values.overall_height / 1000),
    });

  values.overall_length > 16700 &&
    LargeMachineSpecs.push({
      label: "길이",
      dimension: roundOne(values.overall_length / 1000),
    });



  return (
    <Box sx={{p:3, elevation: 3}} >
        <Table style={{  width: "80%", height: "100px",  margin: "auto" }}>
      {LargeMachineSpecs.slice(0, 2).map((item) => (

        <tr key={item.label} >
          <td style={{  width: "40%", background: " #e6e6e6 "  }}>
            <Typography variant="h4" sx={{m:2}}>{item.label}</Typography>
          </td>
          <td>
            <Typography variant="h4" sx={{m:2}}>{item.dimension}</Typography>
          </td>
        </tr>
      ))}
      </Table>
    </Box>
  );
};

export default LargeDecal;
