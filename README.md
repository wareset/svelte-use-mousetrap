# svelte-use-mousetrap

Use [mousetrap](https://www.npmjs.com/package/mousetrap) in svelte. Everything is reactive. The 'destroy' works.

## Installation

```bash
npm i svelte-use-mousetrap ## yarn add svelte-use-mousetrap
```

## Usage

```svelte
<script>
/* App.svelte */
import mousetrap from 'svelte-use-mousetrap';

// run on 'command+q', 'ctrl+q'
const fn1 = (e) => console.log('fn1', e);

// run on 'shift+q'
const fn2 = (e) => console.log('fn2', e);
// run on 'shift+q'
const fn3 = (e) => console.log('fn3', e);
</script>

<!-- simplest way -->
<div use:mousetrap={['command+q', 'ctrl+q', fn1, 'shift+q' fn2, fn3]}>...</div>

<!-- or exactly the same -->
<div use:mousetrap={[
  ['command+q', 'ctrl+q', fn1],
  ['shift+q', fn2, fn3]
]}>...</div>

<!-- or exactly the same -->
<div use:mousetrap={[
  [['command+q', 'ctrl+q'], fn1],
  ['shift+q', [fn2, fn3]]
]}>...</div>
```

## License

MIT
