import { render } from "@testing-library/react";

import { DeleteIcon } from "./DeleteIcon";

describe("DeleteIcon", () => {
  it("renders properly", () => {
    const { container } = render(<DeleteIcon />);
    expect(container).toMatchSnapshot();
  });
});
