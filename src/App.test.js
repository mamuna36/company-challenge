import renderer from "react-test-renderer";
import App from './App';

describe("App snapshot", () => {
  it("Matches App Snapshot", () => {
    const domTree = renderer.create(<App />).toJSON();
    expect(domTree).toMatchSnapshot();
  });
});
