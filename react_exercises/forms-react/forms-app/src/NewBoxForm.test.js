import React   from "react";
import { render } from "@testing-library/react"
import NewBoxForm from "./NewBoxForm";

it ( "render without crash", () => {
    render ( <NewBoxForm />);
});

it ("matches snapshot", () => {
    const { asFragment } = render(<NewBoxForm />);
    expect(asFragment()).toMatchSnapshot()
 });