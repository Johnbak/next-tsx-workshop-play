import React, { ReactElement } from "react";
import Router from "next/router";
interface Props {
  statusCode: string;
}

//Called in Client-side
export default function _error({ statusCode }: Props): ReactElement {
  React.useEffect(() => {
    Router.push("/");
  }, []);
  return (
    <div>
      <h1>Error page not found {statusCode}</h1>
    </div>
  );
}

// Called in server-side
_error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
  // if (statusCode == 404) {
  //   res.writeHead(301, { Location: "/" }); //set to root
  //   res.end();
  //   return {};
  // } else {
  //   return { statusCode };
  // }
};
