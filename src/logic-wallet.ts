import {
  EntryPointChanged as EntryPointChangedEvent,
  Initialized as InitializedEvent,
  OwnerChanged as OwnerChangedEvent
} from "../generated/LOGIC_WALLET/LOGIC_WALLET"
import {
  EntryPointChanged,
  Initialized,
  OwnerChanged
} from "../generated/schema"

export function handleEntryPointChanged(event: EntryPointChangedEvent): void {
  let entity = new EntryPointChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.oldEntryPoint = event.params.oldEntryPoint
  entity.newEntryPoint = event.params.newEntryPoint

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleInitialized(event: InitializedEvent): void {
  let entity = new Initialized(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.version = event.params.version

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnerChanged(event: OwnerChangedEvent): void {
  let entity = new OwnerChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.oldOwner = event.params.oldOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
