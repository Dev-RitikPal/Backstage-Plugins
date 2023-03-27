import { useState } from 'react';
import { ConfluenceApiRef } from '../../../customApis/api/ConfluenceApi';
import { useApi } from '@backstage/core-plugin-api';
import { ConfObject } from '@internal/backstage-plugin-gitlab/src/components/types';
import IsContentIDAvailable from '../../../hooks/IsContentIDAvailable';

const useNews = () => {
    const [confPageData, setConfPageData] = useState<string>('');
    const ConfluenceApi = useApi(ConfluenceApiRef);
    const contentID = IsContentIDAvailable();
    const callConfluenceAPI = async () => {
      const response: any = await ConfluenceApi.getInfoPage(contentID);
      const data: ConfObject = response?.getInfoPageData;
      const value = data?.body?.storage?.value;
      if (value) setConfPageData(value);
    }

    return ({
        confPageData,
        callConfluenceAPI,
    })
}

export default useNews;
