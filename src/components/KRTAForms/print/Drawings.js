import styles from "@/components/KRTAForms/print/printPages.module.scss";
import parse from "html-react-parser";
// 작업반경

const Drawings = ({ values }) => {
  const exterior = values.drawings?.exterior || "";
  const boom = values.drawings?.boom || "";
  const arm = values.drawings?.arm || "";
  const bucket = values.drawings?.bucket || "";
  const bucket_capa_struck = values.drawings?.bucket_capa_struck || "";
  const bucket_capa_heap = values.drawings?.bucket_capa_heap || "";
  const Qcouplr = values.drawings?.Qcouplr || "";
  const dozer = values.drawings?.dozer || "";

  const drawingsPages = [
    {title: "외관도", data: exterior},
    {title: "붐", data: boom},
    {title: "암", data: arm},
    {title: "버켓", data: bucket},
    {title: "버켓 평적", data: bucket_capa_struck},
    {title: "버켓 산적", data: bucket_capa_heap},
    {title: "퀵커플러", data: Qcouplr},
    {title: "도저", data: dozer},
  ];

  return (
    <>
      {drawingsPages.map((drawingPage) => (
        <div className={styles.pages}>
          <table className={styles.borderTable}>
            <thead>
              <tr>
                <th>{drawingPage.title}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{parse(drawingPage.data)}</td>
              </tr>
            </tbody>
          </table>
        </div>
      ))}
    </>
  );
};

export default Drawings;
