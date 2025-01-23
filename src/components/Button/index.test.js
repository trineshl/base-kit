import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Button } from "./index";

describe("Button Component", () => {
  test("renders the button with the correct label", () => {
    render(<Button label="Click Me" />);
    expect(screen.getByText("Click Me")).toBeInTheDocument();
  });

  test("applies the 'primary' class when isPrimary is true", () => {
    render(<Button label="Primary Button" isPrimary={true} />);
    const buttonElement = screen.getByText("Primary Button");
    expect(buttonElement).toHaveClass("ubk-primary");
  });

  test("does not apply the 'primary' class when isPrimary is false", () => {
    render(<Button label="Secondary Button" isPrimary={false} />);
    const buttonElement = screen.getByText("Secondary Button");
    expect(buttonElement).not.toHaveClass("ubk-primary");
  });

  test("calls onClick handler when clicked", () => {
    const handleClick = jest.fn();
    render(<Button label="Clickable" onClick={handleClick} />);
    const buttonElement = screen.getByText("Clickable");
    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test("applies additional className passed as props", () => {
    render(<Button label="Styled Button" className="custom-class" />);
    const buttonElement = screen.getByText("Styled Button");
    expect(buttonElement).toHaveClass("custom-class");
  });

  test("applies all passed props to the button element", () => {
    render(<Button label="With Props" data-testid="button-test" disabled={true} />);
    const buttonElement = screen.getByTestId("button-test");
    expect(buttonElement).toBeDisabled();
  });

  test("renders button with default properties when no props are provided except label", () => {
    render(<Button label="Default Button" />);
    const buttonElement = screen.getByText("Default Button");
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).not.toHaveClass("ubk-primary");
  });
});
