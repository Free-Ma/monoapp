import { FC } from 'react';

import $styles from './app.module.css';

const App: FC = () => {
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
                </div>
            </div>
        </div>
    );
};

export default App;
