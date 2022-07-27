import logic from "./logic";
function App() {
  const guestList = [1, 2, 1, 3, 4, 4, 1, 2, 3, 4, 5, 6, 7, 6]
  //assumptions:
  // -same numbers together
  // - exclusions can't be next to one another
  // - groups may or may not be together
  // asumptions have priority as listed

  const exclusions = [[3, 4]];
  const groups = [
    [1, 4, 3, 6],
    [2, 5]
  ];
  return (
    <div>
      <div>Main list: {guestList}</div>
      <div>Output: {logic(guestList, groups, exclusions).map((item) => {
        return <div>{item}</div>
      })}</div>
    </div>
  );
}

export default App;
