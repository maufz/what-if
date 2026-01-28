# @maufz/if

Easily bind `if` control flow results to a variable

## Install

```bash
$ npm install @maufz/if
```

## Usage

### Simple example

```ts
import { If } from "@maufz/if";

const randomNumber = Math.random() * 10;

const test =
  If(randomNumber > 9, 'A lot!')
    .elseIf(randomNumber > 6, "Impressive")
    .else('Not too impressive')
    .end(); // The end method returns the value
```

### Using callbacks

You can also use callbacks.  
Only if the predicate is thruthy the callback will be evaluated.  
This allows for more complex branching.

```ts
import { If } from "@maufz/if";

const randomNumber = Math.random() * 10;

const test =
  If(randomNumber > 9, () => {
    console.log("Wow!");
    return 'A lot!';
  })
    .elseIf(randomNumber > 6, () => "Impressive")
    .else(() => 'Not too impressive')
    .end(); // The end method returns the value
```
## Typescript support

This library is built with typescript in mind.  
The result of the If function is a generic type, which means you can be explicit about what type of result you expect.

```ts
const test =
  If<string>(randomNumber > 9, 'A lot!')
    .elseIf(randomNumber > 6, "Impressive")
    .else('Not too impressive')
    .end(); // The end method returns the value
```
