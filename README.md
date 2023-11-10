# comlink-async-generator

Generator functions support for Comlink

## Installation

```sh
npm i comlink-async-generator
```

## Usage

```js
import { transferHandlers } from 'comlink';
import { asyncGeneratorTransferHandler } from 'comlink-async-generator';

transferHandlers.set('asyncGenerator', asyncGeneratorTransferHandler);
```

## License

MIT. Copyright (c) Kyaw Swar Thwin &lt;myanmarunicorn@gmail.com&gt;
