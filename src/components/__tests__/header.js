import React from "react"
import renderer from "react-test-renderer"
import {describe, expect, it} from "@jest/globals"

import Header from "../header"

describe("Header", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<Header siteTitle="Default Starter" />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})