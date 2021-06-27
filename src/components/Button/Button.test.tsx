import { render } from "@testing-library/react";

import { Button } from "./Button";

describe("Button", () => {
  it("renders properly", () => {
    const { container } = render(<Button> Button </Button>);
    expect(container).toMatchSnapshot();
  });
});
