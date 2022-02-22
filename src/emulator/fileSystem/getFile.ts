export type FileType = "arrayBuffer" | "blob" | "formData" | "json" | "text";

export function getFile(
  filePath: string,
  fileType: FileType
): Promise<ArrayBuffer | Blob | FormData | any | string | null> {
  return new Promise((resolve, reject) => {
    fetch(filePath, { method: "GET" }).then((response) => {
      if (response.ok) return resolve(response[fileType]());

      return reject(`getFile -> Unable to fetch file at ${filePath}`);
    });
  });
}
