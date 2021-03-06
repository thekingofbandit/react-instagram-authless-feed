import React from "react";
import { create, act } from "react-test-renderer";
import Feed from "./Feed";

describe("#render", async () => {
  it("return html", async () => {
    const getFeedFn = (username) =>
      Promise.resolve([
        {
          url: "https://placeholder.com/640",
          src: "https://via.placeholder.com/640",
          alt: "640x640px image from placeholder.com",
        },
      ]);

    let component;

    await act(async () => {
      component = create(
        <Feed
          classname="Feed"
          username="jamespaulmoriarty"
          getFeedFn={getFeedFn}
        />
      );
    });

    expect(component.toJSON()).toMatchSnapshot();
  });

  it("returns error html", async () => {
    const getFeedFn = (username) => Promise.reject(new Error("fail"));

    let component;

    await act(async () => {
      component = create(
        <Feed
          classname="Feed"
          username="jamespaulmoriarty"
          getFeedFn={getFeedFn}
        />
      );
    });

    expect(component.toJSON()).toMatchSnapshot();
  });
});
