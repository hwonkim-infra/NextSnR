import { useEffect, useRef, useState } from "react";
import axios from "axios";
import styles from "@/components/KRTAForms/print/ECR.module.scss";
import HEXSpecTable from "./HEXSpecTable";
import WEXSpecTable from "./WEXSpecTable";
import { useDownloadExcel } from "react-export-table-to-excel";



const SpecWECR = ({ values, type }) => {
  const [originData, setOriginData] = useState({});
  const tableRef = useRef(null);

  const {onDownload} = useDownloadExcel({
    currentTableRef: tableRef.current,
    filename: "SpecTableECR",
  })

  const getOrigin = async () => {
    if (type==="HEX") {
      const response = await axios.get(`/api/HEX/${values.origin}`);

      const data = response.data;
      setOriginData(data);
    }
    if (type==="WEX") {
      const response = await axios.get(`/api/WEX/${values.origin}`);

      const data = response.data;
      setOriginData(data);
    }
  };

  useEffect(() => {
    if (values.origin) getOrigin();
  }, [values.origin]);

  return (
    <div >
      {/* <button onClick={onDownload} >Export Excel</button> */}
      <table className={styles.table}>
        <thead>
          <tr>
            <th colSpan="8" style={{ textAlign: "center", height: "15mm" }}>
              설계변경요청서(ECR)
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ background: "#e6e6e6", width: "7%" }}>ECR No.</td>
            <td width="15%"></td>
            <td width="10%">요청부서</td>
            <td width="18%">의장설계팀</td>
            <td style={{ background: "#e6e6e6", width: "7%"  }}>요청자</td>
            <td width="15%"></td>
            <td style={{ background: "#e6e6e6", width: "10%"  }}>요청일</td>
            <td width="18%">{new Date().toLocaleDateString("Ko-kr")}</td>
          </tr>
          <tr>
            <td style={{ background: "#e6e6e6", width: "7%" }}>제목</td>
            <td colSpan="7" style={{ textAlign: "center", height: "10mm" }}>
              형식변경에 따른 건설기계 제원표 변경 요청
            </td>
          </tr>
          <tr>
            <td style={{ background: "#e6e6e6", width: "7%" }}>품번</td>
            <td colSpan={3}></td>
            <td style={{ background: "#e6e6e6",  }}>관련근거</td>
            <td>건설기계관리법</td>
            <td style={{ background: "#e6e6e6",  }}>적용요청일</td>
            <td></td>
          </tr>
          <tr>
            <td style={{ background: "#e6e6e6",  }}>모델</td>
            <td colSpan={3}>{values.model_name}</td>

            <td style={{ background: "#e6e6e6",  }}>요청유형</td>
            <td>규제대응</td>
            <td style={{ background: "#e6e6e6",  }}>긴급도</td>
            <td></td>
          </tr>
          <tr>
            <td colSpan="4">As Is</td>
            <td colSpan="4">To be</td>
          </tr>
          <tr>
            <td style={{ background: "#e6e6e6",  }}>현행</td>
            <td colSpan={3}>
              {(type ==="HEX") && 
                <HEXSpecTable values={originData} />
              }
              {(type ==="WEX") && 
                <WEXSpecTable values={originData} />
              }
            </td>
            <td style={{ background: "#e6e6e6",  }}>변경</td>
            <td colSpan={3}>
            {(type ==="HEX") && 
                <HEXSpecTable values={values} />
              }
              {(type ==="WEX") && 
                <WEXSpecTable values={values} />
              }
            </td>
          </tr>
          <tr>
            <td style={{ background: "#e6e6e6",  }} rowSpan={2}>특이사항</td>
            <td rowSpan={2} colSpan={3}></td>
            <td style={{ background: "#e6e6e6",  }}>기대효과</td>
            <td colSpan={3}>건설기계 관리법 준수</td>
          </tr>
          <tr>
            
            <td style={{ background: "#e6e6e6",  }}>절감금액</td>
            <td colSpan={3}></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SpecWECR;
