export interface AuthProps {
    middleware?: 'guest' | 'auth';
    redirectIfAuthenticated?: string;
}

export interface RegisterProps {
    setErrors: React.Dispatch<React.SetStateAction<string[]>>;
    [key: string]: any;
}

export interface LoginProps {
    setErrors: React.Dispatch<React.SetStateAction<Errors>>;
    setStatus: React.Dispatch<React.SetStateAction<string>>;
    [key: string]: any;
}

export interface ForgotPasswordProps {
    setErrors: React.Dispatch<React.SetStateAction<Errors>>;
    setStatus: React.Dispatch<React.SetStateAction<string | null>>;
    email: string;
}

export interface ResetPasswordProps {
    setErrors: React.Dispatch<React.SetStateAction<string[]>>;
    setStatus: React.Dispatch<React.SetStateAction<string | null>>;
    [key: string]: any;
}

export interface Errors {
    [key: string]: string[];
}