import styles from "@/components/KRTAForms/print/printPages.module.scss";
import { TableCell } from "@mui/material";
import { MathJax, MathJaxContext } from "better-react-mathjax";
import 'katex/dist/katex.min.css';
import { BlockMath, InlineMath } from 'react-katex';

// 퀵커플러 탈착

const TravelSpecHXKatex = ({ values, config }) => {
  
  
  return (
    <>
                        <InlineMath>{'\\text{React-}\\KaTeX \\space \\text{usage examples}'}</InlineMath>

                        <h2>
      <code>{'<InlineMath />'}</code>
      {values.operating_weight}
    </h2>
    This is an in-line expression <InlineMath math={`\\int_0^\\infty x^2 ${values.operating_weight}   dx`} /> passed as <code>math prop</code>. This
    is an in-line <InlineMath math={'\\int_0^\\infty x^2 dx'} /> expression passed as <code>children prop</code>.
    <h2>
      <code>{'<BlockMath />'}</code>
    </h2>
    <BlockMath math={'\\int_0^\\infty x^2 dx'} />
    <BlockMath>{`A =
        \\begin{pmatrix}
        1 & 0 & 0 \\\\
        0 & 1 & 0 \\\\
        0 & 0 & 1 \\\\
        \\end{pmatrix}`}</BlockMath>
    <h2>Error handling</h2>
    <BlockMath math={'\\int_0^\\infty x^2 dx \\inta'} errorColor={'#cc0000'} />
    <BlockMath math="\\int_{" renderError={(err) => <b>Custom error message: {err.name}</b>} />
    <BlockMath math="sum_{}" />
    <BlockMath math={'\\sum_{'} renderError={(err) => <b>Custom error message: {err.name}</b>} />
    <BlockMath math={123} />
    <BlockMath math={123} renderError={(err) => <b>Custom error message: {err.name}</b>} />

    </>
  );
};

export default TravelSpecHXKatex;
