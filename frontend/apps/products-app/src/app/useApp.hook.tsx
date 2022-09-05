import { useState } from "react";
import useCsvFileGenerator from './helpers/generateFiles.helper'

const fileReader = new FileReader();

function useApp() {
  const [csvStrArray, setCsvStrArray] = useState<Array<any>>([]);
  const [fileName, setFileName] = useState<string>('');
  const { csvFileToArray } = useCsvFileGenerator();

  const handleOnChange = (e: any) => {
    try {
      if (e.target.files[0]) {
        const fileName = e.target.files[0]?.name.replace('.csv', '');
        setFileName(fileName);

        fileReader.onload = function (event) {
          const text = event?.target?.result;
          setCsvStrArray(csvFileToArray(`${text}`));
        };

        fileReader.readAsText(e.target.files[0]);
      }
    } catch (e) {
      console.error('fail to load the file')
    }
  };

  return {
    handleOnChange,
    csvStrArray,
    fileName
  }
}

export default useApp;
