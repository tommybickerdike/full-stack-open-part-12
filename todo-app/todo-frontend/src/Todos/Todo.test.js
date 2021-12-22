import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import Todo from "./Todo";

const todos = [
	{
		_id: "61c1de311d59dac6b3d6e8b4",
		text: "Wash the car",
		done: false
	},
	{
		_id: "61c1de311d59dac6b3d6e8b5",
		text: "Buy groceries",
		done: false
	}
];

test("renders content", () => {
	const component = render(<><Todo todo={todos[0]} /><Todo todo={todos[1]} /></>);

	expect(component.container).toHaveTextContent("Wash the car");

	// have author
	expect(component.container).toHaveTextContent("This todo is not done");
});
