import { mkdir, readFile, writeFile } from "fs/promises";
import { render } from "./dist/server/main.js";

await mkdir("dist/build", { recursive: true });

// TODO: Head support.
const indexContents = await readFile("./index.html", "utf-8");
const index = indexContents.replace(`<!--app-html-->`, render().html);

await writeFile("dist/build/index.html", index, "utf-8");
