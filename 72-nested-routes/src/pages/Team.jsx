import { useOutletContext } from "react-router";

export function Team() {
  const context = useOutletContext();
  return (
    <>
      <h1>Team</h1>
      <>{context}</>
    </>
  );
}
