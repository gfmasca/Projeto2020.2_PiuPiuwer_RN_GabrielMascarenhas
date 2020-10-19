import React from "react";
import { AuthProvider } from "./useAuth";
import { PiusProvider } from "./usePius";

const AppProvider: React.FC = ({ children }) => {
    return (
        <AuthProvider>
            <PiusProvider>
                { children }
            </PiusProvider>
        </AuthProvider>
    )
}
export default AppProvider