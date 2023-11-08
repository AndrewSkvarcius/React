import React from "react";
import { render, fireEvent, getByTestId } from "@testing-library/react";
import Carousel from "./Carousel";

it("renders without crashing", () => {
  render(<Carousel />);

})

it("matches snapshot", function() {
  const { asFragment } = render(<Carousel />);
  expect(asFragment()).toMatchSnapshot();
});

it("works when you click on the right arrow", function() {
  const { queryByTestId, queryByAltText } = render(<Carousel />);

  // expect the first image to show, but not the second
  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).toBeInTheDocument();
  expect(queryByAltText("Photo by Pratik Patel on Unsplash")).not.toBeInTheDocument();

  // move forward in the carousel
  const rightArrow = queryByTestId("right-arrow");
  fireEvent.click(rightArrow);

  // expect the second image to show, but not the first
  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).not.toBeInTheDocument();
  expect(queryByAltText("Photo by Pratik Patel on Unsplash")).toBeInTheDocument();
});

it("hides and shows arrow acording to image", ()=>{
  const { getByTestId } = render(<Carousel />);
  const leftArrow = getByTestId("left-arrow");
  const rightArrow = getByTestId("right-arrow");

  // expect left arrow to be hidden and right arrow to be visible
  expect(leftArrow).toHaveClass("hidden");
  expect(rightArrow).not.toHaveClass("hidden");

  //click arrow expect both arrows to be visible
  fireEvent.click(getByTestId("right-arrow"));

  // expect left arrow and right arrow to be visible
  expect(leftArrow).not.toHaveClass("hidden")
  expect(rightArrow).not.toHaveClass("hidden")

  // click aroow expect only left arrow to be visible
  fireEvent.click(getByTestId("right-arrow"));
  expect(leftArrow).not.toHaveClass("hidden")
  expect(rightArrow).toHaveClass("hidden")
});

  it("works when left arrow is clicked", ()=>{
    const { getByTestId, queryByAltText} = render(<Carousel />);
    const leftArrow = getByTestId("left-arrow");
    const rightArrow = getByTestId("right-arrow");

    // Click right arrow
    fireEvent.click(rightArrow);
    // click left arrow expect first image to be visible
    fireEvent.click(leftArrow);
    expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).toBeInTheDocument();
    expect(queryByAltText("Photo by Pratik Patel on Unsplash")).not.toBeInTheDocument();
  });