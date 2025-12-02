"use client";

import { Modal, ModalContent, ModalTrigger } from "@/components/ui/modal";
import { AppStoreBadge } from "@/components/download/AppStoreBadge";
import { GooglePlayBadge } from "@/components/download/GooglePlayBadge";

interface DownloadModalProps {
  trigger?: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export function DownloadModal({ trigger, open, onOpenChange }: DownloadModalProps) {
  return (
    <Modal open={open} onOpenChange={onOpenChange}>
      {trigger && <ModalTrigger asChild>{trigger}</ModalTrigger>}
      <ModalContent
        title="Download Atom"
        description="Get the Atom app on your device and start organizing your life."
        className="max-w-md"
      >
        <div className="space-y-6">
          <div className="flex flex-col gap-4 items-center">
            <AppStoreBadge />
            <GooglePlayBadge />
          </div>
        </div>
      </ModalContent>
    </Modal>
  );
}

