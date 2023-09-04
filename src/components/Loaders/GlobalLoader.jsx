import React from 'react';
import s from"./Loaders.module.css"
import {Waveform} from "@uiball/loaders";

function GlobalLoader(props) {
    return (
        <div className={s.globalLoaderWrapper}>
            <Waveform
                size={76}
                lineWeight={3.5}
                speed={1}
                color="var(--main-color)"
            />
        </div>
    );
}

export default GlobalLoader;