import React from "react";
import { ComponentPreview, Previews } from "@react-buddy/ide-toolbox";
import { PaletteTree } from "./palette";
import { DatePicker } from "../components";

const ComponentPreviews = () => {
  return (
    <Previews palette={<PaletteTree />}>
      <ComponentPreview path="/DatePicker">
        <DatePicker />
      </ComponentPreview>
    </Previews>
  );
};

export default ComponentPreviews;