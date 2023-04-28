import {render, screen} from "@testing-library/react";
import renderer, {act} from "react-test-renderer";
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
    return renderer.create(
        <MemoryRouter>
            {ui}
        </MemoryRouter>);
}

describe("Should render", () => {
    describe("With props", () => {

        it("and pass the snapshot test", () => {
            const rendererResult = routerRenderer(<SiteLogo/>).toJSON();
            expect(rendererResult).toMatchSnapshot();
        })

        it("with default ones", async () => {
            routerRender(<SiteLogo/>);

            expect(await screen.findByTestId("SiteLogoTest"))
                .toBeInTheDocument();

            expect(await screen.findByAltText(SiteLogo.defaultProps?.alt || ""))
                .toBeInTheDocument();

            expect(await screen.findByTestId("SiteLogoTest"))
                .toMatchObject(/images\/main_icon.svg/);

            expect(await screen.findByTestId("SiteLogoTest"))
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

            expect(await screen.findByTestId("SiteLogoTest"))
                .toBeInTheDocument();

        })
    })

    describe("with click", () => {
        it("on icon", async () => {
            routerRender(<SiteLogo />);

            const icon = await screen.findByTestId("SiteLogoTest");
            act(() => {
                click(icon);
            })

            expect(window.location.pathname).toBe("/");
        })
    })
});