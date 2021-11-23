import React from "react";
import { shallow } from "enzyme";
import AddCategory from "../../components/AddCategory";

describe("Pruebas sobre el componente de <AddCategory/>", () => {
  const setCategories = jest.fn();
  let wrapper = shallow(<AddCategory setCategories={setCategories} />);

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setCategories={setCategories} />);
  });

  test("debe mostrar correctamente el componente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("debe de cambiar la caja de texto", () => {
    const input = wrapper.find("input");
    const value = "Hola Mundo";
    input.simulate("change", {
      target: {
        value: value,
      },
    });
    const p = wrapper.find("p");

    expect(p.text()).toBe(value);
  });

  test("no debe de post la informacion al hacer submit", () => {
    const form = wrapper.find("form");
    form.simulate("submit", {
      preventDefault() {},
    });
    expect(setCategories).not.toHaveBeenCalled();
  });

  test("debe llamarse el setCategory y limpiar la caja de texto", () => {
    const input = wrapper.find("input");
    input.simulate("change", {
      target: {
        value: "Hola Josias",
      },
    });
    const form = wrapper.find("form");
    form.simulate("submit", {
      preventDefault() {},
    });

    expect(setCategories).toHaveBeenCalled();

    expect(input.prop("value")).toBe("");
  });
});
