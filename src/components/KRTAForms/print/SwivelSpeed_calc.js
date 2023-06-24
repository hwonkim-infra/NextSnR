import { CircularProgress, TableCell } from "@mui/material";
import "katex/dist/katex.min.css";
import { BlockMath, InlineMath } from "react-katex";


export default function SwivelSpeed_calc({ values }) {
  if (!values.swivel) return <CircularProgress />;
  const swing_reduction_rev =
    Math.round(
      ((values.swivel?.pump_flow * values.swivel?.motor_eff) /
        values.swivel?.motor_displacement) *
        1000 *
        100
    ) / 100;

  return (
    <div>
      <p>
        ▷ 아래 계산 결과에 따라{" "}
        <strong> 최고 선회 속도는 {values.swivel?.swing_rev} rpm </strong>
      </p>
      <br />
      <br />
      <p>○ 선회 성능 관련 사양</p>
      <table style={{ width: "100%", height: "30%", margin: "auto" }}>
        <thead>
          <tr>
            <th>항목</th>
            <th></th>
            <th>단위</th>
            <th>사양</th>
            <th>비고</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>선회 펌프 유량</td>
            <td>
              <BlockMath>{`\Q`}</BlockMath>
            </td>
            <td>l/min</td>
            <td>{values.swivel?.pump_flow}</td>
            <td>선회 rpm</td>
          </tr>
          <tr>
            <td>모터이론용적</td>
            <td>
              <BlockMath>{`\q_m`}</BlockMath>
            </td>
            <td>cc/rev</td>
            <td>{values.swivel?.motor_displacement}</td>
            <td></td>
          </tr>
          <tr>
            <td>감속기의 감속비</td>
            <td>
              <BlockMath>{`\i`}</BlockMath>
            </td>
            <td></td>
            <td>{values.swivel?.reduction}</td>
            <td></td>
          </tr>
          <tr>
            <td>선회모터용적효율</td>
            <td>
              <BlockMath>{`\η_{mv}`}</BlockMath>
            </td>
            <td></td>
            <td>{values.swivel?.motor_eff}</td>
            <td></td>
          </tr>
        </tbody>
      </table>
      <br />
      <p>○ 선회 속도 계산</p>
      <table style={{ width: "100%", height: "30%", margin: "auto" }}>
        <tbody>
          <tr>
            <TableCell colSpan="3">선회감속기 축 회전수 SM(rpm)</TableCell>
          </tr>
          <tr style={{ height: "40%" }}>
            <td>
              <InlineMath>{`\\cfrac{Q \\times \\eta_{mv}}{q_m \\times 1000}`}</InlineMath>
            </td>
            <td>
              <InlineMath>{`\\cfrac{ ${values.swivel?.pump_flow} \\times ${values.swivel?.motor_eff} }{ ${values.swivel?.motor_displacement} \\times 1000}`}</InlineMath>
            </td>
            <td>
              <BlockMath>{`\{ ${swing_reduction_rev} }`}</BlockMath>
            </td>
          </tr>
          <tr>
            <TableCell colSpan="3">선회속도 S(rpm)</TableCell>
          </tr>
          <tr style={{ height: "40%", background: "#e6e6e6" }}>
            <td>
              <InlineMath>{` S=\\cfrac{SM}{i} `}</InlineMath>
            </td>
            <td>
              <InlineMath>{`\\cfrac{${swing_reduction_rev}}{${values.swivel?.reduction}} `}</InlineMath>
            </td>
            <td>
              <BlockMath>{`\{ ${values.swivel?.swing_rev} }`}</BlockMath>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
