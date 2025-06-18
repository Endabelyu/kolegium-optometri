import {
  isRouteErrorResponse,
  Link,
  Links,
  Meta,
  Scripts,
  ScrollRestoration,
  useRouteError,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";

import "./globals.css";
import BaseLayout from "../src/components/BaseLayout";

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <BaseLayout />;
}
export function ErrorBoundary() {
  const error = useRouteError();

  const isErrorResponse = isRouteErrorResponse(error);
  const isGenericError = error instanceof Error;

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 px-4 text-center">
      {isErrorResponse ? (
        <>
          <h1 className="text-4xl font-bold text-red-600">
            {error.status} - {error.statusText}
          </h1>
          <p className="mt-2 text-lg text-gray-700">
            {error.data ||
              "The server encountered an unexpected error. Please try again later."}
          </p>
        </>
      ) : isGenericError ? (
        <>
          <h1 className="text-4xl font-bold text-red-600">Oops!</h1>
          <p className="mt-2 text-lg text-gray-700">{error.message}</p>
        </>
      ) : (
        <h1 className="text-4xl font-bold text-red-600">Unknown Error!</h1>
      )}

      <div className="mt-6">
        <Link to="/" className="inline-block">
          <button className="flex items-center gap-2 rounded bg-gray-300 px-4 py-2 text-gray-800 transition hover:bg-gray-400">
            {/* Optional icon e.g. <FaHouse className="text-lg" /> */}
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
}
