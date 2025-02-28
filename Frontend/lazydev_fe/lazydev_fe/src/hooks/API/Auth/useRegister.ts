import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import endpoint from "../../../services/endpoint";
import { userApi } from "../../../services/initApi";

type RegisterParams = {
  email: string;
  username: string;
  password: string;
};
type Response = {
  data: any;
};

const UseRegister = () => {
  const success = useNavigate();
  const { isError, data, error, status, mutateAsync } = useMutation({
    mutationFn: (Variable: RegisterParams) => {
      return userApi.post<RegisterParams, Response>(
        endpoint.register,
        Variable
      );
    },
    onSuccess: (e: any) => {
      console.log(e?.response?.data?.message || "Registered successfully!");

      success(`/verify/$?email=${e?.response?.data?.email}`);
    },
    onError: (err: any) => {
      console.log(
        err?.response?.data?.message || err?.message || "An error occurred!"
      );
    },
  });

  const isLoading = status === "pending";

  return {
    isError,
    data,
    error,
    isLoading,
    onRegister: mutateAsync,
  };
};
export default UseRegister;
