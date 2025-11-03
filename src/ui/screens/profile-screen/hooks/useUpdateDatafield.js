import { useCallback, useMemo } from 'react';
import useAddProfileField from '../../question-pages/hooks/useAddProfileField';
import useInputValidation from '../../question-pages/hooks/useInputValidation';
import { shrink } from "@foerderfunke/sem-ops-utils";

export default function useUpdateDatafield(datafield, datafieldDetails, setOpen) {
  const shrunkDatatype = useMemo(
    () => (datafieldDetails?.datatype ? shrink(datafieldDetails.datatype) : null),
    [datafieldDetails?.datatype]
  );

  const validateValue = useInputValidation(shrunkDatatype);
  const addProfileData = useAddProfileField(datafield);

  const handleUpdateClick = useCallback(
    async (value) => {
      if (!datafield) return;
      console.log('Updating datafield:', datafield, 'with value:', value);
      try {
        const shrunkValue = shrink(value);
        await validateValue(shrunkValue);
        await addProfileData(shrunkValue);
        setOpen(false);
      } catch (err) {
        console.error('Error handling update click:', err);
      }
    },
    [datafield, validateValue, addProfileData, setOpen]
  );

  return handleUpdateClick;
}