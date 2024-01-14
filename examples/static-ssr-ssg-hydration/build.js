import { cp, mkdir, writeFile } from "fs/promises";
import { app } from "./app.js";

await mkdir("dist/build", { recursive: true });

// Copy client assets folder into build folder so they are
// accessible from the statically built index.
await cp("dist/client/assets", "dist/build/assets", { recursive: true });

const server = app.listen(5173, async () => {
  const response = await fetch("http://localhost:5173");
  // TODO: Check for 200
  const responseText = await response.text();
  await writeFile("dist/build/index.html", responseText, "utf-8");
  server.close();
});
