import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address } from "@graphprotocol/graph-ts"
import { EntryPointChanged } from "../generated/schema"
import { EntryPointChanged as EntryPointChangedEvent } from "../generated/LOGIC_WALLET/LOGIC_WALLET"
import { handleEntryPointChanged } from "../src/logic-wallet"
import { createEntryPointChangedEvent } from "./logic-wallet-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let oldEntryPoint = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let newEntryPoint = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let newEntryPointChangedEvent = createEntryPointChangedEvent(
      oldEntryPoint,
      newEntryPoint
    )
    handleEntryPointChanged(newEntryPointChangedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("EntryPointChanged created and stored", () => {
    assert.entityCount("EntryPointChanged", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "EntryPointChanged",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "oldEntryPoint",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "EntryPointChanged",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "newEntryPoint",
      "0x0000000000000000000000000000000000000001"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
