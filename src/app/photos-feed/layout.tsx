export default function ModalLayout(params: {
  modal: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <>
      {params.modal}
      {params.children}
    </>
  );
}
