import { render, screen, cleanup } from "@testing-library/react";
import Individuals from "../components/animaldata/individuals";
import Species from "../components/animaldata/species";
import DeleteAnimal from "../components/animaldata/deletespecies";

// test("my first test", () => {
//     expect(true).toBe(true);
// });

afterEach(() => {
    cleanup();
});

describe ("Individuals", ()=> {
    test("Gets individuals", ()=> {
        render(<Individuals />)
    });
});

describe ("Species", ()=> {
    test("Gets species", ()=> {
        render(<Species />)
    });
});

describe("Render species text", () =>{
    render(<Species />);
    expect(screen.getByText(/Add A Species/));
});

// describe("Render species text", () =>{
//     render(<DeleteAnimal />);
//     expect(screen.getByText(/Delete Species/));
// });