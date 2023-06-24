import { CircularProgress, TableCell } from "@mui/material";
import "katex/dist/katex.min.css";
import { BlockMath, InlineMath } from "react-katex";
import parse from "html-react-parser";


export default function SwivelSpeed_backup({ values }) {
  if (!values.swivel) return <CircularProgress />;
  const swing_description = values.swivel?.swing_description || ''


  return (
    <div>
      {parse(swing_description)}
    </div>
  );
}
