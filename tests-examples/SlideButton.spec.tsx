import {test, expect} from "@playwright/experimental-ct-react";
import SlideButton from "../src/components/Buttons/SlideButton/SlideButton";

test("render slide button", async ({mount}) => {
    const component = await mount(<SlideButton title={"TestSlide"}/>);
    await expect(component).toContainText("TestSlide");
});

test("snapshot slide button", async ({mount}) => {
    const component = await mount(<SlideButton title={"TestSlide"}/>);
    await expect(component).toHaveScreenshot();
});



