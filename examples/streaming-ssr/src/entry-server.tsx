import ReactDOMServer from "react-dom/server";
import { Root } from "./Root";
import type { Request, Response } from "express";

const ABORT_DELAY = 5_000;

export function handleRequest(
  _request: Request,
  response: Response,
  bootstrapModules: string[]
) {
  return new Promise((resolve, reject) => {
    let responseStatusCode = 200;
    let shellRendered = false;

    const { pipe, abort } = ReactDOMServer.renderToPipeableStream(<Root />, {
      bootstrapModules,
      onShellReady() {
        shellRendered = true;

        response.setHeader("Content-Type", "text/html");
        response.status(responseStatusCode);

        pipe(response);

        resolve(undefined);
      },
      onShellError(error: unknown) {
        reject(error);
      },
      onError(error: unknown) {
        responseStatusCode = 500;
        // Log streaming rendering errors from inside the shell.  Don't log
        // errors encountered during initial shell rendering since they'll
        // reject and get logged in handleDocumentRequest.
        if (shellRendered) {
          console.error(error);
        }
      },
    });

    setTimeout(abort, ABORT_DELAY);
  });
}
