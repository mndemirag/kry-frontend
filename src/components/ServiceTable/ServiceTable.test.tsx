import { render } from "@testing-library/react";

import { ServiceTable } from "./ServiceTable";

const mockDelete = jest.fn();

const mockProps = {
  data: [
    {
      name: "melodi",
      status: { name: "melodi", url: "https://melodi.com", status: "OK" },
    },
  ],
  handleDelete: mockDelete,
};

describe("ServiceTable", () => {
  it("renders properly", () => {
    const { container } = render(
      <ServiceTable data={mockProps.data} handleDelete={mockDelete} />
    );
    expect(container).toMatchSnapshot();
  });
});
