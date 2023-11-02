import React, {ReactNode} from "react";
import {Dialog} from "./Dialog";

import './Dialog.css';

interface Props {
    title?: string;
    children: ReactNode;
    onCancel: () => void;
}

export const DialogThanks = (props: Props) => (
    <Dialog title={props.title}>
        {props.children}

        <button className="Btn__thanks"
            onClick={props.onCancel}
        >
            Zamawiam dalej
        </button>
    </Dialog>
);
