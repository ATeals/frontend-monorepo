import * as fse from "fs-extra";
import globby from "globby";
import path from "path";
import { DOCS_ROOT, PACKAGES_ROOT } from "./const";

export async function generateDocsFromMD() {
  console.log("⚙️ Generating docs from MD...");

  return await Promise.all([copyMDDocs(DOCS_ROOT, ["'**/*.md"])]);
}

async function copyMDDocs(outdir: string, exclude: string[]) {
  const filepaths = (
    await globby("**/*.md", {
      cwd: PACKAGES_ROOT,
      ignore: exclude,
    })
  ).filter((path) => !path.includes("node_modules"));

  console.log("filepaths", filepaths);

  await Promise.all(
    filepaths.map(async (filepath) => {
      const source = path.join(PACKAGES_ROOT, filepath);
      const destination = path.join(outdir, filepath.replace("src/", ""));

      console.log("outdir:", destination);
      await fse.ensureDir(path.dirname(destination));
      await fse.copy(source, destination);
    })
  );

  console.log("✅ Copied MD docs to", outdir);
}
