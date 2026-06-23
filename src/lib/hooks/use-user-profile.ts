import { createClient } from "@/lib/supabase/client";
import { useEffect, useState } from "react";

interface userInfo {
  name: string;
  email: string;
  avatar: string;
}

export const useUserProfile = () => {
  const [info, setInfo] = useState<userInfo | null>(null);

  useEffect(() => {
    const fetchUserInfo = async () => {
      const { data, error } = await createClient().auth.getSession();
      if (error) {
        console.error(error);
      }
      setInfo({
        name: data.session?.user.user_metadata.name ?? "Anonymous",
        email: data.session?.user.email ?? "Anonymous@site.com",
        avatar: data.session?.user.user_metadata.avatar_url ?? "?",
      });
    };
    fetchUserInfo();
  }, []);

  return info;
};
