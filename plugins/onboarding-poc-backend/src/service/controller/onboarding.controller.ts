import { Response } from "express";
import * as jsYaml from 'js-yaml';
import * as bcrypt from 'bcrypt'

import { GithubService } from "../services";

const GitService = new GithubService();

export const getChecklists = async (req: any, res: Response) => {
    try {
        const data: any = await fetch('https://api.github.com/repos/NishkarshRaj/rearportal-org-catalogs/git/blobs/0620c070d5de6f74cccbb17164c088168ea0d733', {
            method: "GET",
            headers: {
                Accept: "application/vnd.github+json",
                Authorization: "Bearer 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"
            }
        }).then(response => {
            return response.json()
        }).then(ress => {
            return ress
        }).catch(err => {
            return err
        })
        // const contents:any = Buffer.from(data.content, 'base64')
        const d = jsYaml.loadAll(Buffer.from(data.content, 'base64') as any)
        res.send(d[0]).status(200)
    }
    catch (error) {
        res.status(500).send("Internal server error!")
    }
}
export const syncChecklist = async (req: any, res: Response) => {
    try {
        const data: any[] = await GitService.GetUserAndChecklistBlob();
        const client = req.dbClient
        const salt = 10
        data?.forEach(async (res_data) => {
            const hash = await bcrypt.hash(res_data.formSchema, salt)
            res_data.checklistHash = hash
            const prevData = await client.select().from('checklists').where({ checklist_uid: res_data.checklist_uid }).first()
            if (prevData) {
                if (prevData.groupHash !== res_data.groupHash) {
                    await client('checklists').where({ checklist_uid: prevData.checklist_uid }).update({
                        groupHash: res_data.groupHash,
                        forRoles: res_data.forRoles,
                        title: res_data.title,
                        formSchema: res_data.formSchema,
                        updated_at: client.fn.now(),
                        checklistHash: res_data.checklistHash
                    });
                }
            }
            else {
                await client('checklists').insert(res_data)
            }

        })
        res.json('Sync is on progress...').status(200)

    } catch (error) {
        res.status(500).send("Internal server error!")

    }
}