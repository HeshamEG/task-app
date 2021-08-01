/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState, memo, CSSProperties } from "react";
import { Card, CardHeader, Box, Button } from "@material-ui/core";

interface Props {
    onClick: (e: any) => void,
    title: string,
    color?: "default" | "inherit" | "primary" | "secondary" | undefined,
    style?: CSSProperties
}
const BasicButton = ({ onClick, title, style, color }: Props) => {

    return (<Button
        style={style}
        variant="outlined"
        color={color}
        onClick={(e: any): void => {
            onClick(e)
        }
        }
    >
        {title}
    </Button>)

}
export { BasicButton };
