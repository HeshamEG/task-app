import { csvHeader } from "../types/csv.type";

const useCsvFileGenerator = () => {

    const generate1stFileData = (productsArray: Array<any>) => {
        const uniqueProductNames = [...new Set(productsArray.map(item => item.name))];

        const generatedFileData = uniqueProductNames.map(uniqueProductName => {
            let tempQuantity: number = 0;

            productsArray.filter(record => {
                if (record.name === uniqueProductName) {
                    tempQuantity = Number(tempQuantity) + Number(record.quantity)
                }
            });

            return { name: uniqueProductName, 'average quantity': (tempQuantity / productsArray.length) };
        });
        console.log('generatedFileData',productsArray,generatedFileData)


        return generatedFileData;
    }

    const generate2ndFileData = (productsArray: Array<any>) => {

        const uniqueProductNames = [...new Set(productsArray.map(item => item.name))];

        const generatedFileData = uniqueProductNames.map(uniqueProductName => {
            const tempBrands: any[] = [];

            productsArray.filter(record => {
                if (record.name === uniqueProductName) {
                    tempBrands.push(record.brand)
                }
            });

            return { name: uniqueProductName, 'popular brand': getMostRepetedStrArray(tempBrands) };
        });
        console.log('generatedFileData',generatedFileData)
        return generatedFileData;
    }

    const getMostRepetedStrArray = (arr: any[]) => {
        return arr.sort((a, b) =>
            arr.filter(v => v === a).length
            - arr.filter(v => v === b).length
        ).pop();
    }

    const csvFileToArray = (string: string) => {     
        const csvRows = string.slice().split("\n");
        const rows = csvRows.map((i: string) => {
          const values = i.split(",");
          const obj = csvHeader.reduce((object: { [x: string]: any; }, header: string | number, index) => {
            object[header] = values[index];
            return object;
          }, {});
   
          return obj;
        });

       return rows;
      };

    return { generate1stFileData, generate2ndFileData , csvFileToArray }
}

export default useCsvFileGenerator;