import * as Dialog from "@radix-ui/react-dialog";
import { AddButton, CloseButton, Content } from "./styles";
import { IoIosClose } from "react-icons/io";
import { useState } from "react";

export const CheckInModal = () => {
  const [open, setOpen] = useState(false);
  //   const [time, setTime] = useState("10:00");
  return (
    <>
      <Dialog.Root open={open} onOpenChange={setOpen}>
        <Dialog.Trigger asChild>
          <AddButton onClick={() => setOpen(true)}>Bater Ponto</AddButton>
        </Dialog.Trigger>

        <Dialog.Portal>
          <Dialog.Overlay
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.7)",
              position: "fixed",
              inset: 0,
            }}
          />
          <Content>
            <Dialog.Title style={{ textAlign: "center" }}>
              Bater ponto
            </Dialog.Title>
            <CloseButton>
              <IoIosClose size={30} />
            </CloseButton>
          </Content>

          <Dialog.Description></Dialog.Description>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
};
