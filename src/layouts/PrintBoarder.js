
import styles from "@/components/KRTAForms/print/printPages.module.scss";

// ----------------------------------------------------------------------

export default function PrintBoarder({ pageTitle, children }) {
  return (
    <div className={styles.pages}>
      <table className={styles.borderTable}>
        <thead>
          <tr>
            <th>{pageTitle}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className={styles.head_description}>{children}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
