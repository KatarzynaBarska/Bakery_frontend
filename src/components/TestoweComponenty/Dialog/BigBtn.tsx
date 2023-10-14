import React from "react";
import {Button} from "./Button";

interface Props {
    children: React.ReactNode;
    kasia: string;
}

export const BigButton = (props: Props) => (

    <Button
        kasia={props.kasia}>
        {props.children}
    </Button>

);
