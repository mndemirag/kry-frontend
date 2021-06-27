import { render } from "@testing-library/react";

import { ServiceFormDialog } from "./ServiceFormDialog";

const mockClose = jest.fn();
const mockSubmit = jest.fn();

describe("ServiceFormDialog", () => {
  it("renders properly", () => {
    const { container } = render(
      <ServiceFormDialog onClose={mockClose} onSubmit={mockSubmit} />
    );
    expect(container).toMatchSnapshot();
  });
});
