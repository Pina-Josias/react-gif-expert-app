import GifExpertApp from "../components/GifExpertApp";
import React from "react";
import { shallow } from "enzyme";

describe("Pruebas sobre el documento de <GifExpertApp/>", () => {
  test("debe hacer match con el snapshot", () => {
    const wrapper = shallow(<GifExpertApp />);

    expect(wrapper).toMatchSnapshot();
  });

  test("debe mostrar una lista de categorias", () => {
    const categories = ["One Punch", "Dragon Ball"];
    const wrapper = shallow(<GifExpertApp defaultCategory={categories} />);
    expect(wrapper).toMatchSnapshot();
  });
});
