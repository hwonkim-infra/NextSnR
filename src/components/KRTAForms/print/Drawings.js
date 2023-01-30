import React, { useEffect } from "react";
import parse from "html-react-parser";
import { Grid } from "@mui/material";

// 작업반경

const Drawings = ({ values, styles }) => {
  const exterior = values.drawings?.exterior || "";
  const boom = values.drawings?.boom;
  const arm = values.drawings?.arm || "";
  const bucket = values.drawings?.bucket || "";
  const bucket_capa_struck = values.drawings?.bucket_capa_struck || "";
  const bucket_capa_heap = values.drawings?.bucket_capa_heap || "";
  const Qcouplr = values.drawings?.Qcouplr;
  const dozer = values.drawings?.dozer;

  return (
    <>
    <div className={styles.pages}>
        <table className={styles.bordertable}>
          <thead>
            <th>
              <td height="30mm">외관도</td>
            </th>
          </thead>
          <tbody>
            <tr>Exterior</tr>
            {/* <tr>{parse(exterior)}</tr> */}
          </tbody>
        </table>
      </div>

    </>
  );
};

export default Drawings;
