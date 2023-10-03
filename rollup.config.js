
// rollup.config.js

import merge from 'deepmerge';
import { createBasicConfig } from '@open-wc/building-rollup';

const baseConfig = createBasicConfig();
delete baseConfig.output.dir;

export default merge(baseConfig, {
    input: './out-tsc/src/App.js',
    output: {
        file: 'dist/bundle.js'
    },
});