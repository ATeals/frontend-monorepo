import { generateDocsFromMD } from "./generateDocsFromMD";

generateDocsFromMD()
  .then(() => {})
  .catch((error) => {
    console.error("🔴 Error generating docs from MD", error);
    process.exit(1);
  });
