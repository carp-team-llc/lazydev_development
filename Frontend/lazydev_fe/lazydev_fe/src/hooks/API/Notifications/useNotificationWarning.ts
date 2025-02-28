import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useAuth } from "../../../services/authContext";
import endpoint from "../../../services/endpoint";
import { contributeApi } from "../../../services/initApi";

type Response = {
  data: {
    userId: string;
    isLinked: boolean;
  };
};

const useNotificationWarning = () => {
  const { token } = useAuth();

  const { data, isError, isLoading } = useQuery({
    queryKey: ["githubLinkStatus"],
    queryFn: async () => {
      if (!token) {
        console.error("Token is undefined, aborting request.");
        return null
      }
      const headers = token ? { Authorization: `Bearer ${token}` } : {};
      console.log("======> Headers:", headers);
      const response = await contributeApi.post<Response>(
        endpoint.warningnotification,
        {},
        { headers }
      );
      console.log("Response:", response.data.data);
      return response.data.data;
    },

    enabled: !!token,
  });

  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (data) {
      setIsVisible(!data.isLinked);
    }
  }, [data]);

  return { isVisible, isLoading, isError, setIsVisible, userId: data?.userId };
};

export default useNotificationWarning;
