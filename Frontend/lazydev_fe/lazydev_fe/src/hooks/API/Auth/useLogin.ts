import { useMutation } from "@tanstack/react-query";
import endpoint from "../../../services/endpoint";
import { userApi } from "../../../services/initApi";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../services/authContext";

type LoginParams = {
  email: string;
  password: string;
};

type Response = {
  data: any;
};

const useLogin = () => {
  const { setToken } = useAuth();
  const success = useNavigate();
  const { isError, data, error, mutateAsync } = useMutation({
    mutationFn: (variables: LoginParams) => {
      return userApi.post<LoginParams, Response>(endpoint.login, variables);
    },
    onSuccess: (e: any) => {
      console.log("Login success");
      setToken(e?.data?.data?.token);
      success("/dashboard");
    },
    onError: (e: any) => {

      const errorCode = e?.response?.data?.errorCode;

      if (errorCode === "PASSWORD_INCORRECT") {
        console.log("Wrong password, please re-enter password!");
        success("/login");
        return;
      }

      if (errorCode === "NOT_FOUND") {
        console.log("No account found with this email!");
        success("/login");
        return;
      }

      if (errorCode === "NONVERIFY") {
        console.log("Please verify your account!");
        success(`/resend-verification?email=${e?.response?.data?.email}`);
        return;
      }

      success("/login");
      console.log("Login Failed");
    },
  });

  return {
    isError,
    data: data?.data,
    error,
    onLogin: mutateAsync,
  };
};

export default useLogin;
