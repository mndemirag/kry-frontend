import { render } from "@testing-library/react";

import { FormInput } from "./FormInput";

const mockChange = jest.fn();

describe("FormInput", () => {
  it("renders properly", () => {
    const { container } = render(
      <FormInput label="input" onChange={mockChange} />
    );
    expect(container).toMatchSnapshot();
  });
});
