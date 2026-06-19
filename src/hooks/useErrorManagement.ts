import { useState } from "react";

export function useErrorManagement() {
    const [error, setError] = useState<string | null>(null);

    function clearError() {
        setError(null);
    }

    return {
        error,
        setError,
        clearError
    }

}