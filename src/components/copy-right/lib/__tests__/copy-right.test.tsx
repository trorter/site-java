import React from "react";
import CopyRight from "../copy-right";
import {create} from "react-test-renderer";

describe("Should render", () => {
    describe("Without props", () => {

        it("and pass the snapshot test", () => {
            const view = create(<CopyRight />).toJSON();
            expect(view).toMatchSnapshot();
        })
    })

    describe("With props", () => {

        it("and pass the snapshot test", () => {
            const extended = true;

            const view = create(<CopyRight extended={extended}/>).toJSON();
            expect(view).toMatchSnapshot();
        })
    })
})