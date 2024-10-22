'use client';
import Layout from "@/components/common/Layout";
import Messages from "@/components/Pages/Messages";
// import { useEffect } from "react";
export default function ProfilePage() {
  // useEffect(() => {
  //   const script = document.createElement('script');
  //   script.src = "https://www.gstatic.com/dialogflow-console/fast/df-messenger/prod/v1/df-messenger.js";
  //   script.async = true;
  //   document.body.appendChild(script);

  //   return () => {
  //     document.body.removeChild(script);
  //   };
  // }, []);
  return (
    <Layout>
      <Messages />
    </Layout>
  );
}
