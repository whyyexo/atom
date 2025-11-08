'use client';

import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

export const Modal = DialogPrimitive.Root;
export const ModalTrigger = DialogPrimitive.Trigger;

type ModalContentProps = DialogPrimitive.DialogContentProps & {
  title?: string;
  description?: string;
  footer?: React.ReactNode;
};

export function ModalContent({
  className,
  title,
  description,
  children,
  footer,
  ...props
}: ModalContentProps) {
  return (
    <DialogPrimitive.Portal>
      <DialogPrimitive.Overlay className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm" />
      <DialogPrimitive.Content asChild {...props}>
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ type: "spring", stiffness: 240, damping: 25 }}
          className={cn(
            "fixed left-1/2 top-1/2 z-50 w-[90vw] max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-3xl border border-border/60 bg-card/95 p-6 shadow-2xl focus:outline-none",
            className,
          )}
        >
          <DialogPrimitive.Close className="absolute right-4 top-4 rounded-full p-1 text-muted-foreground transition hover:bg-muted hover:text-foreground">
            <X className="h-4 w-4" />
          </DialogPrimitive.Close>
          {(title || description) && (
            <div className="mb-6 space-y-2">
              {title ? (
                <DialogPrimitive.Title className="text-lg font-semibold text-foreground">
                  {title}
                </DialogPrimitive.Title>
              ) : null}
              {description ? (
                <DialogPrimitive.Description className="text-sm text-muted-foreground">
                  {description}
                </DialogPrimitive.Description>
              ) : null}
            </div>
          )}
          <div className="space-y-4">{children}</div>
          {footer ? <div className="mt-6 flex items-center justify-end gap-3">{footer}</div> : null}
        </motion.div>
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  );
}


