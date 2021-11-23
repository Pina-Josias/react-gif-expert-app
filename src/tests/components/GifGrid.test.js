import React from "react";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import GifGrid from "../../components/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";
jest.mock("../../hooks/useFetchGifs");

describe("Pruebas sobre el componente <GifGrid/>", () => {
  test("debe mostrar el componente <GifGrid/> correctamente", () => {
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true,
    });

    const wrapper = shallow(<GifGrid category={"Saitama"} />);
    expect(wrapper).toMatchSnapshot();
  });
  test("debe mostrar items cuando se carga la data", () => {
    const gifs = [
      {
        id: "34234",
        url: "http://localhost/name",
        title: "test",
      },
      {
        id: "1234",
        url: "http://localhost/name",
        title: "test",
      },
    ];
    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: false,
    });
    const wrapper = shallow(<GifGrid category={"Saitama"} />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("p").exists()).toBe(false);
    expect(wrapper.find("GifGridItem").length).toBe(gifs.length);
  });
});
