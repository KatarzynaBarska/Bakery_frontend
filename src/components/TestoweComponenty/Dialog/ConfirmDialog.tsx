import React from "react";
import {Dialog} from "./Dialog";

interface Props {
    title: React.ReactNode;
    children: React.ReactNode;
 }

export const ConfirmDialog = (props: Props) => {
    return (
        <>
            <Dialog title={props.title}>
                {props.children}
                <hr/>
                <button>Yes</button>
                <button>No</button>
            </Dialog>
        </>

    )
}