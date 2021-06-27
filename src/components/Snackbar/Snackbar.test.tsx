import { render } from "@testing-library/react";

import { Snackbar } from "./Snackbar";

const mockClose = jest.fn();

describe("Snackbar", () => {
  it("renders properly", () => {
    const { container } = render(<Snackbar onClose={mockClose} open={false} />);
    expect(container).toMatchSnapshot();
  });
});
