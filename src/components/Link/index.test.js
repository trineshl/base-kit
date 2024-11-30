import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Link } from "./index";

describe("Link Component", () => {
  test("renders the link with the correct label", () => {
    render(<Link label="Click Me" />);
    expect(screen.getByText("Click Me")).toBeInTheDocument();
  });

  test("calls onClick handler when clicked", () => {
    const handleClick = jest.fn();
    render(<Link label="Clickable Link" onClick={handleClick} />);
    const linkElement = screen.getByText("Clickable Link");
    fireEvent.click(linkElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test("renders with the default 'ubk-link' class", () => {
    render(<Link label="Default Link" />);
    const linkElement = screen.getByText("Default Link");
    expect(linkElement).toHaveClass("ubk-link");
  });

  test("applies additional className passed as props", () => {
    render(<Link label="Styled Link" className="custom-class" />);
    const linkElement = screen.getByText("Styled Link");
    expect(linkElement).toHaveClass("custom-class");
  });

  test("renders with all passed props", () => {
    render(
      <Link
        label="Test Link"
        href="https://example.com"
        target="_blank"
        data-testid="link-test"
      />
    );
    const linkElement = screen.getByTestId("link-test");
    expect(linkElement).toHaveAttribute("href", "https://example.com");
    expect(linkElement).toHaveAttribute("target", "_blank");
  });

  test("renders without crashing when no onClick is provided", () => {
    render(<Link label="No Click Handler" />);
    const linkElement = screen.getByText("No Click Handler");
    fireEvent.click(linkElement); // Ensure no errors occur even if onClick is undefined
    expect(linkElement).toBeInTheDocument();
  });

  test("renders link with the correct tag and properties", () => {
    render(<Link label="Check Tag" />);
    const linkElement = screen.getByText("Check Tag");
    expect(linkElement.tagName).toBe("A"); // Ensure the rendered element is an anchor tag
  });
});
