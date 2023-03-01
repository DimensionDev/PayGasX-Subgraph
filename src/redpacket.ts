import {
  ClaimSuccess as ClaimSuccessEvent,
  CreationSuccess as CreationSuccessEvent,
  RefundSuccess as RefundSuccessEvent,
} from "../generated/REDPACKET/REDPACKET";
import {
  ClaimSuccess,
  CreationSuccess,
  RefundSuccess,
} from "../generated/schema";

export function handleClaimSuccess(event: ClaimSuccessEvent): void {
  let entity = new ClaimSuccess(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.id = event.params.id;
  entity.claimer = event.params.claimer;
  entity.claimed_value = event.params.claimed_value;
  entity.token_address = event.params.token_address;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleCreationSuccess(event: CreationSuccessEvent): void {
  let entity = new CreationSuccess(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.total = event.params.total;
  entity.id = event.params.id;
  entity.name = event.params.name;
  entity.message = event.params.message;
  entity.creator = event.params.creator;
  entity.creation_time = event.params.creation_time;
  entity.token_address = event.params.token_address;
  entity.number = event.params.number;
  entity.ifrandom = event.params.ifrandom;
  entity.duration = event.params.duration;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleRefundSuccess(event: RefundSuccessEvent): void {
  let entity = new RefundSuccess(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.id = event.params.id;
  entity.token_address = event.params.token_address;
  entity.remaining_balance = event.params.remaining_balance;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}
