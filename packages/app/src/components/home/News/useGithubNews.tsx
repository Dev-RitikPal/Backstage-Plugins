import { useEffect, useState } from 'react';
import { GithubApiRef } from '../../../customApis/api';
import { useApi } from '@backstage/core-plugin-api';




const useGithubNews = () => {
    const [newsMarkdown, setNewsMarkdown] = useState<string>("");
    const githubClient = useApi(GithubApiRef)

    const getNewsMarkdown = async () => {
        const response = await githubClient.getRawFile('repos/NishkarshRaj/wh-vault/contents/NEWS.md')
        return response?.getFileData
    }

    useEffect(()=>{
        getNewsMarkdown().then((gitResponse)=> {
            setNewsMarkdown(window?.atob(gitResponse?.content));
        })
    })

    return newsMarkdown
}

export default useGithubNews;
