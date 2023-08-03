const CUSTOM_HTML = `
  <h1>Hi<h1>
  <div>My name is Alex</div>
`;

export default function App() {
  return <div dangerouslySetInnerHTML={{ __html: CUSTOM_HTML }}></div>;
}
