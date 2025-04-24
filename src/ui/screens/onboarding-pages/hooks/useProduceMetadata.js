import { useEffect, useRef } from "react";
import { useMetadataStore } from "@/ui/storage/zustand";
import useFetchMetadata from "@/ui/shared-hooks/useFetchMetadata";

const useProduceMetadata = () => {
  const metadata = useMetadataStore((state) => state.metadata);
  const fetchMetadata = useFetchMetadata();
  const isRunningRef = useRef(false);

  useEffect(() => {
    const produceMetadata = async () => {
      if (isRunningRef.current || metadata.rp) return;
      isRunningRef.current = true;

      await fetchMetadata();

      isRunningRef.current = false;
    };

    produceMetadata();
  }, [metadata.rp, fetchMetadata]);

  return metadata;
};

export default useProduceMetadata;