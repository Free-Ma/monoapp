import { IPost } from '@strong/api/type';
import { createStore } from '@strong/store';
import axios from 'axios';
import { FC, useEffect, useState } from 'react';

import $styles from './app.module.css';

const App: FC = () => {
    const [data, setData] = useState<IPost[]>([]);
    const getPosts = async (): Promise<IPost[]> => {
        try {
            const res = await axios('/api/posts');
            return res.data;
        } catch (err) {
            throw new Error(err as string);
        }
    };

    useEffect(() => {
        (async () => {
            setData(await getPosts());
        })();
    }, []);
    return (
        <div className={$styles.app}>
            <div className={$styles.container}>
                <h2 className="tw-text-center">First React App</h2>
                <div className="tw-flex tw-items-center tw-flex-col">
                    <div className="tw-flex-auto tw-my-5">
                        <a
                            className="tw-text-neutral-800"
                            href="https://3rcd.com"
                            target="_blank"
                            rel="noreferrer"
                        >
                            3R教室
                        </a>
                    </div>
                    <p>{createStore()}</p>
                </div>
                <div className="tw-flex-auto tw-flex-col tw-my-5">
                    <h2>文章列表</h2>
                    <ul>
                        {data.map((item) => (
                            <li key={item.id}>{item.title}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default App;
