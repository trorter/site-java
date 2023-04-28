import {render, screen} from "@testing-library/react";
import {create, act} from "react-test-renderer";
import SiteLogo from "../site-logo";
import {MemoryRouter} from "react-router-dom";
import React, {ReactElement} from "react";
import {Simulate} from "react-dom/test-utils";
import click = Simulate.click;

export {}

const routerRender = (ui: ReactElement) => {
    return render(ui, {wrapper: MemoryRouter});
}

const routerRenderer = (ui: ReactElement) => {
    return create(
        <MemoryRouter>
            {ui}
        </MemoryRouter>);
}

describe("Should render", () => {
    describe("With props", () => {

        it("and pass the snapshot test", () => {
            const view = routerRenderer(<SiteLogo/>).toJSON();
            expect(view).toMatchSnapshot();
        })

        it("with default ones", async () => {
            routerRender(<SiteLogo/>);

            const element = await screen.findByTestId("SiteLogoTest");

            expect(element)
                .toBeInTheDocument();

            expect(await screen.findByAltText(SiteLogo.defaultProps?.alt || ""))
                .toBeInTheDocument();

            expect(element)
                .toMatchObject(/images\/main_icon.svg/);

            expect(element)
                .not
                .toHaveAttribute('preview');

        })

        it("with set alt", async () => {
            const alt = "alt";

            routerRender(<SiteLogo alt={alt}/>);

            expect(await screen.findByAltText(alt))
                .toBeInTheDocument();
        })

        it("with set preview", async () => {
            const preview = true;
            routerRender(<SiteLogo preview={preview}/>);

            const element = await screen.findByTestId("SiteLogoTest");

            expect(element)
                .toBeInTheDocument();

        })
    })

    describe("with click", () => {
        it("on icon and go home", async () => {
            routerRender(<SiteLogo />);

            const icon = await screen.findByTestId("SiteLogoTest");
            act(() => {
                click(icon);
            })

            expect(window.location.pathname).toBe("/");
        })

        it("on icon and open preview", async () => {
            const preview = true;
            const view = routerRenderer(<SiteLogo preview={preview} />)

            const instance = view.getInstance();

            if (instance) {
                const element = await instance.findByType('image');
                element.props.onClick();
            }

            expect(view.toJSON()).toMatchSnapshot();
        })
    })
});