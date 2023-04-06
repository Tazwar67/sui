// Copyright (c) Mysten Labs, Inc.
// SPDX-License-Identifier: Apache-2.0

import clsx from 'clsx';
import { Fragment, type ReactNode, useState } from 'react';
import {
    Panel,
    PanelGroup,
    type PanelGroupProps,
    PanelResizeHandle,
} from 'react-resizable-panels';

export interface SplitPaneProps extends PanelGroupProps {
    panels: ReactNode[];
    defaultSizes?: number[];
}

function ResizeHandle({ isHorizontal }: { isHorizontal: boolean }) {
    const [isDragging, setIsDragging] = useState(false);

    return (
        <PanelResizeHandle className="relative" onDragging={setIsDragging}>
            <div
                data-is-dragging={isDragging}
                className={clsx(
                    "bg-gray-45 after:absolute after:h-[1000%] after:w-[1000%] after:-translate-x-2/4 after:-translate-y-2/4 after:content-[''] hover:bg-sui data-[is-dragging=true]:bg-hero",
                    isHorizontal ? 'h-full w-px' : 'h-px'
                )}
            />
        </PanelResizeHandle>
    );
}

export function SplitPanes({
    panels,
    defaultSizes = [],
    ...props
}: SplitPaneProps) {
    const { direction } = props;

    return (
        <PanelGroup {...props}>
            {panels.map((panel, index) => (
                <Fragment key={index}>
                    <Panel order={index} defaultSize={defaultSizes[index]}>
                        {panel}
                    </Panel>
                    {index < panels.length - 1 && (
                        <ResizeHandle
                            isHorizontal={direction === 'horizontal'}
                        />
                    )}
                </Fragment>
            ))}
        </PanelGroup>
    );
}
