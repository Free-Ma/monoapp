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
            server: {
                proxy: {
                    '/api': {
                        target: 'http://localhost:8080/api',
                        changeOrigin: true,
                        rewrite: (path) => path.replace(/^\/api/, ''),
                    },
                },
                cors: true,
            },
            plugins: createPlugins(isBuild),
        },
        typeof configure === 'function' ? configure(params, isBuild) : {},
        'merge',
    );
};
