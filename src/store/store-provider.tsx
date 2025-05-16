
"use client";

import { ReactNode, useRef } from "react";
import { Provider } from "react-redux";
import { Persistor } from "redux-persist";
import persistStore from "redux-persist/es/persistStore";
import store, { AppStore } from "@/store/store";

export default function StoreProvider({ children }: { children: ReactNode }) {
  const storeRef = useRef<AppStore>(null);
  const persistorRef = useRef<Persistor>(null);

  if (!storeRef.current || !persistorRef.current) {
    storeRef.current = store();
    persistorRef.current = persistStore(storeRef.current);
  }

  return (
    <Provider store={storeRef.current}>
        {children}
    </Provider>
  );
}
