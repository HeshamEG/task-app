export const toBase64 = (el: HTMLInputElement | any): Promise<any> => {
  return new Promise((resolve, reject) => {
    const selectedFile: any = el.files as keyof HTMLInputElement;
    //Check File is not Empty
    if (selectedFile.length > 0) {
      // Select the very first file from list
      const fileToLoad = selectedFile[0];
      // FileReader function for read the file.
      const fileReader = new FileReader();
      let base64: any;
      // Onload of file read the file content
      fileReader.readAsDataURL(fileToLoad);
      fileReader.onload = (fileLoadedEvent: any) => {
        base64 = fileLoadedEvent.target.result.split(",")[1];
        resolve(base64);

        return;
        // Print data in console
      };
      // Convert data to base64
    } else {
      resolve("");

      return "";
    }
  });
};
