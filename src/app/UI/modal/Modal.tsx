'use client'
import { useCallback, useRef, useEffect, MouseEventHandler } from "react";
import { useRouter } from "next/navigation";
import classes from './modal.module.css'

export default function Modal({photoId, children}: {
  photoId: string;
  children: React.ReactNode;
}) {
  const overlay = useRef(null);
  const wrapper = useRef(null);
  const router = useRouter();


  const onClose = useCallback(() => {
    router.back();
  }, [router]);

  const closeModalHandler: MouseEventHandler = useCallback((e) => {
      if (e.target === overlay.current || e.target === wrapper.current)
        onClose();
    }, [onClose, overlay, wrapper]);


  const onKeyDown = useCallback((e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    }, [onClose]);

  useEffect(() => {
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [onKeyDown]);


  return(
    <div>
      <div ref={overlay} className={classes.darkBG} onClick={closeModalHandler}></div>
      <div ref={wrapper} className={classes.centered}>{children}</div>
    </div>
  );
}