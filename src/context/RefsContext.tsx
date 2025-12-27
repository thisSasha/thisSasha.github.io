import { createContext, useContext } from "react";
import type { RefObject } from "react";

type RefsContextType = {
    portfolio: RefObject<HTMLElement | null>;
    contacts: RefObject<HTMLElement | null>;
    about: RefObject<HTMLElement | null>;
    stack: RefObject<HTMLElement | null>;
};

export const RefsContext = createContext<RefsContextType | null>(null);

export const useRefsContext = () => {
    const ctx = useContext(RefsContext);
    if (!ctx) throw new Error("RefsContext missing");
    return ctx;
};
