<h1 align="center">Welcome to react-tokens-presenters 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-0.1.0-blue.svg?cacheSeconds=2592000" />
  <a href="https://github.com/11joselu/react-tokens-presenters#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/11joselu/react-tokens-presenters/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://github.com/11joselu/react-tokens-presenters/blob/master/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/github/license/11joselu/react-design-tokens-presenter" />
  </a>
  <a href="https://twitter.com/11joselu" target="_blank">
    <img alt="Twitter: 11joselu" src="https://img.shields.io/twitter/follow/11joselu.svg?style=social" />
  </a>
</p>

> List of presenter for design tokens

<center>
  <img src="/media/demo-storybook-v1.3.gif" width="100%" />
</center>

### [Homepage](https://github.com/11joselu/react-tokens-presenters.git#readme)

### [Demo](https://react-design-tokens-presenter.netlify.app/)

## Install

```sh
npm i -S react-tokens-presenters
```

## Usage

Works well with [design-tokens-parser](https://github.com/11joselu/design-tokens-parser.git)

See [demo](/demo) directory for examples or [presenters](src/presenters) preprocessors demos examples

### Working with design-tokens-parser

```javascript
import { scssParser } from 'design-tokens-parser';
import {TokenSumarry} from 'react-tokens-presenters';

const scssReq = require.context(
  `!!raw-loader!../<MY_PATH>`,
  true,
  /tokensFiles.scss$/
);

// We create and array of file path
const files = scssReq.keys();
const tokens = files
      .map((filename) => scssReq(filename).default) // read file content
      .map(scssParser) // parse file content and return a doube array of tokens
      .flat() // flat double array into single array


<TokenSumarry tokens={tokens}/>
```

In cases where you need a custom layout, [you have presenter](https://react-design-tokens-presenter.netlify.app/) to reuse them.

```javascript
import { scssParser } from 'design-tokens-parser';
// We import Color
import { Color } from 'react-tokens-presenters';

const scssReq = ...

// We create and array of file path
const files = scssReq.keys();
const tokens = ...

tokens.map((token, index) => <Color token={token} key={index} />)
```

## Presenters

Presenters are used to render examples for your design tokens. [View availables presenters](https://react-design-tokens-presenter.netlify.app/)

## Run tests

```sh
npm run test
```

## Author

👤 **Jose Cabrera**

- Website: https://twitter.com/11joselu
- Twitter: [@11joselu](https://twitter.com/11joselu)
- Github: [@11joselu](https://github.com/11joselu)
- LinkedIn: [@Jose Cabrera](www.linkedin.com/in/jose-cabrera-8543b9b3)

## Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/11joselu/react-design-tokens-presenter/issues).

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2020 [Jose Cabrera](https://github.com/11joselu).<br />
This project is [MIT](https://github.com/11joselu/react-tokens-presenters/blob/master/LICENSE) licensed.
