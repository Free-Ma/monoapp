import { pathResolve, deepMerge } from '@strong/utils';
import { ConfigEnv, UserConfig } from 'vite';

import { createPlugins } from './plugins';
import { Configure } from './types';

export const createConfig = (params: ConfigEnv, configure?: Configure): UserConfig => {
    const isBuild = params.command === 'build';
    return deepMerge<UserConfig, UserConfig>(
        {
            resolve: {
                alias: {
                    '@': pathResolve('../src'),
                },
            },
            css: {
                modules: {
                    localsConvention: 'camelCaseOnly',
                },
            },
            plugins: createPlugins(isBuild),
        },
        typeof configure === 'function' ? configure(params, isBuild) : {},
        'merge',
    );
};
