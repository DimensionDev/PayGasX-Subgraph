import { OwnerChanged as OwnerChangedEvent } from "../generated/LOGIC_WALLET/LOGIC_WALLET";
import { OwnerChanged, OwnerShip } from "../generated/schema";

export function handleOwnerChanged(event: OwnerChangedEvent): void {
  let entity = new OwnerChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.oldOwner = event.params.oldOwner;
  entity.newOwner = event.params.newOwner;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;
  entity.address = event.address;
  entity.save();

  // create ownership
  let address = event.address;
  let ownerShip = new OwnerShip(address);
  ownerShip.address = event.address;
  ownerShip.owner = event.params.newOwner;
  ownerShip.save();
}
