import { proxy, TransferHandler, transferHandlers } from 'comlink';

const proxyTransferHandler = transferHandlers.get('proxy')!;

export const asyncGeneratorTransferHandler: TransferHandler<
  AsyncGenerator<unknown>,
  unknown
> = {
  canHandle(obj: any): obj is AsyncGenerator<unknown> {
    return (
      obj &&
      typeof obj === 'object' &&
      typeof obj.next === 'function' &&
      (typeof obj[Symbol.iterator] === 'function' ||
        typeof obj[Symbol.asyncIterator] === 'function')
    );
  },
  serialize(obj) {
    return proxyTransferHandler.serialize(proxy(obj));
  },
  async *deserialize(obj) {
    const iterator = proxyTransferHandler.deserialize(
      obj
    ) as AsyncIterator<unknown>;

    while (true) {
      const { value, done } = await iterator.next();

      if (done) {
        break;
      }

      yield value;
    }
  },
};
