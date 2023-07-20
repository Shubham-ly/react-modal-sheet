import * as React from 'react';
import { motion } from 'framer-motion';

import { SheetDraggableProps } from './types';
import { useSheetScrollerContext, useSheetContext } from './context';
import styles from './styles';

const SheetContent = React.forwardRef<any, SheetDraggableProps>(
  ({ children, style, disableDrag, className = '', ...rest }, ref) => {
    const positionRef = React.useRef<HTMLDivElement>(null);
    const sheetContext = useSheetContext();
    const sheetScrollerContext = useSheetScrollerContext();

    const dragProps =
      disableDrag || sheetScrollerContext.disableDrag
        ? undefined
        : sheetContext.dragProps;

    return (
      <>
        <div ref={positionRef} />
        <motion.div
          {...rest}
          ref={ref}
          className={`react-modal-sheet-content ${className}`}
          style={{ ...styles.content, ...style }}
          {...dragProps}
          dragElastic={0}
        >
          {children}
        </motion.div>
      </>
    );
  }
);

export default SheetContent;
