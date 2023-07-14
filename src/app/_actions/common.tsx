import { promises as fs } from "fs";

export function getJSONFile(filePath: string): Promise<any[]> {
    return fs.readFile(filePath).then((res) => {
        return JSON.parse(res.toString());
      });
}