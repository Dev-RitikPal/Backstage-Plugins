import { base64YamlToJSON } from "../util";

export class GithubService {
    baseRepo = 'https://api.github.com/repos/NishkarshRaj/rearportal-org-catalogs/git'

    async getGithubData() {
        try {
            const response = await fetch(`${this.baseRepo}/trees/testing?recursive=1`, {
                headers: {
                    "Accept": "application/vnd.github+json",
                    "Authorization": `Bearer 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`,
                    "X-GitHub-Api-Version": "2022-11-28"
                }
            });
            if (response.status === 200) {
                return (await response.json())
            }
            return [];
        } catch (error) {
            console.log("🚀 ~ file: GithubHandler.ts:42 ~ GithubHandler ~ getGithubData ~ error", error.message)
            return []
        }

    }

    async GetUserAndChecklistBlob() {
        try {


            const response = await this.getGithubData()
            const finalResponse: { group: string; title: string; checklist_uid: string; formSchema: string; forRoles: string; checklistHash: string; }[] = []
            const checklistBlobUrl: string[] = [];
            if (response?.tree?.length) {
                response.tree.forEach(({ path, url }: any) => {
                    if (path) {
                        const checklist = path.split('/')[1];
                        if (checklist === 'checklist.yaml') {
                            checklistBlobUrl.push(url)
                        }
                    }
                })

            }

            if (checklistBlobUrl?.length) {
                const resData = await Promise.all(checklistBlobUrl.map((async (url: string) => {
                    const resApi = await fetch(url, {
                        headers: {
                            "Accept": "application/vnd.github+json",
                            "Authorization": `Bearer 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`,
                            "X-GitHub-Api-Version": "2022-11-28"
                        }
                    });
                    return (await resApi.json())
                })))

                resData.forEach(({ sha: groupHash, content, encoding }) => {

                    const checklists = base64YamlToJSON(content, encoding);
                    checklists.forEach((val: {
                        metadata: { group: string; }; checklists: {
                            title: string; id: string; checklistItems: any[]; forRoles // api.github.com/repos/NishkarshRaj/rearportal-org-catalogs/git'
                            : string[];
                        }[];
                    }) => {
                        let finalGroup: string = ""
                        finalGroup = val.metadata.group

                        val.checklists.forEach((res_data: { title: string; id: string; checklistItems: any[]; forRoles: string[]; }) => {
                            const finalRes: any = {
                                group: finalGroup,
                                title: res_data.title,
                                checklist_uid: res_data.id,
                                formSchema: JSON.stringify(res_data.checklistItems),
                                forRoles: res_data.forRoles.join(','),
                                groupHash
                            }
                            finalResponse.push(finalRes)
                        })
                    })
                })
            }
            return finalResponse;
        } catch (error) {
            console.log("🚀 ~ file: Github.service.ts:64 ~ GithubService ~ GetUserAndChecklistBlob ~ error", error)
            return []
        }
    }

}
