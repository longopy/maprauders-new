import fs from "fs/promises";

export function getJSONFile(filePath: string): Promise<any[]> {
  return fs.readFile(filePath).then((res) => {
    return JSON.parse(res.toString());
  });
}

export function mergeData(data: any[], dataText: any[]) {
  return data.map((item, i) => Object.assign({}, item, dataText[i]));
}
