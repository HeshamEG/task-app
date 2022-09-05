import useApp from "./useApp.hook";
import { CSVLink } from "react-csv";

import useCsvFileGenerator from "./helpers/generateFiles.helper";
import { csvHeader } from "./types/csv.type";

function App() {
  const { handleOnChange, csvStrArray, fileName } = useApp();
  const { generate1stFileData, generate2ndFileData } = useCsvFileGenerator();

  return (
    <div style={{ textAlign: "center" }}>
      <h1>REACTJS CSV IMPORT EXAMPLE </h1>
      <input
        type={"file"}
        id={"csvFileInput"}
        accept={".csv"}
        onChange={handleOnChange}
      />
      <CSVLink data={generate1stFileData(csvStrArray)} filename={`0_${fileName}`} style={{ marginRight: '1rem' }}>Download 1st Csv Files</CSVLink>
      <CSVLink data={generate2ndFileData(csvStrArray)} filename={`1_${fileName}`}>Download 2nd Csv Files</CSVLink>
      {csvStrArray.length ? <table>
        <thead>
          <tr key={"header"}>
            {csvHeader.map((key) => (
              <th key={key}>{key}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {csvStrArray.map((item: any, index) => (
            <tr key={index}>
              {Object.values(item).map((val, index) => (
                <td key={index}>{`${val}`}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table> :
        null}
    </div>
  );
}

export default App;
