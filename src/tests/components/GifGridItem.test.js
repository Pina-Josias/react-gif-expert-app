import React from "react";
import { shallow } from "enzyme";
import GifGridItem from "../../components/GifGridItem";

describe("Pruebas sobre GifGridItem.js", () => {
  const title = "Gif de prueba";
  const url = "https://i.gifer.com/9oXG.gif";
  const wrapper = shallow(<GifGridItem title={title} url={url} />);

  test("Debe mostrar el componente correctamente", async () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('debe el componente tener un párrafo con el título "Gif de prueba"', () => {
    const p = wrapper.find("p");
    expect(p.text()).toBe(title);
  });

  test("debe tener la imagen al url y alt de los props", () => {
    const img = wrapper.find("img");
    expect(img.props().src).toBe(url);
    expect(img.props().alt).toBe(title);
  });
  test("debe el componente tener un div con animate__fadeIn", () => {
    const div = wrapper.find("div");
    expect(div.props().className).toContain("animate__fadeIn");
  });
});
