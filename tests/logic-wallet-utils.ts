import { newMockEvent } from "matchstick-as"
import { ethereum, Address } from "@graphprotocol/graph-ts"
import {
  EntryPointChanged,
  Initialized,
  OwnerChanged
} from "../generated/LOGIC_WALLET/LOGIC_WALLET"

export function createEntryPointChangedEvent(
  oldEntryPoint: Address,
  newEntryPoint: Address
): EntryPointChanged {
  let entryPointChangedEvent = changetype<EntryPointChanged>(newMockEvent())

  entryPointChangedEvent.parameters = new Array()

  entryPointChangedEvent.parameters.push(
    new ethereum.EventParam(
      "oldEntryPoint",
      ethereum.Value.fromAddress(oldEntryPoint)
    )
  )
  entryPointChangedEvent.parameters.push(
    new ethereum.EventParam(
      "newEntryPoint",
      ethereum.Value.fromAddress(newEntryPoint)
    )
  )

  return entryPointChangedEvent
}

export function createInitializedEvent(version: i32): Initialized {
  let initializedEvent = changetype<Initialized>(newMockEvent())

  initializedEvent.parameters = new Array()

  initializedEvent.parameters.push(
    new ethereum.EventParam(
      "version",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(version))
    )
  )

  return initializedEvent
}

export function createOwnerChangedEvent(
  oldOwner: Address,
  newOwner: Address
): OwnerChanged {
  let ownerChangedEvent = changetype<OwnerChanged>(newMockEvent())

  ownerChangedEvent.parameters = new Array()

  ownerChangedEvent.parameters.push(
    new ethereum.EventParam("oldOwner", ethereum.Value.fromAddress(oldOwner))
  )
  ownerChangedEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownerChangedEvent
}
