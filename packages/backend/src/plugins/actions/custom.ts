import { createTemplateAction } from '@backstage/plugin-scaffolder-backend';
import fs from 'fs-extra';
const path = require('path');
import { removeDir } from '../../utils';

export const createNewFileAction = () => {
  return createTemplateAction<{
    contents: string;
    filename: string;
    zipAvailability: string;
  }>({
    id: 'zip:download',
    schema: {
      input: {
        // required: ['contents', 'filename'],
        type: 'object',
        properties: {
          contents: {
            type: 'string',
            title: 'Contents',
            description: 'The contents of the file',
          },
          filename: {
            type: 'string',
            title: 'Filename',
            description: 'The filename of the file that will be created',
          },
          zipAvailability: {
            type: 'string',
            title: 'zipAvailability',
            description: 'Time upto which your zip file can live in the system',
          },
        },
      },
    },
    async handler(ctx) {
      // await fs.outputFile(
      //   `${ctx.workspacePath}/${ctx.input.filename}`,
      //   ctx.input.contents,
      // );
      const timeToLiveRecords: any = {
        '5 mins': 1000 * 60 * 5,
        '10 mins': 1000 * 60 * 10,
        '15 mins': 1000 * 60 * 15,
        '30 mins': 1000 * 60 * 30,
        '1 hour': 1000 * 60 * 60,
      };
      const mainDirectory = './achieves';
      // if archieves directory doesn't exist create one
      if (!fs.existsSync('achieves')) {
        fs.mkdirSync(mainDirectory, { recursive: true });
      }
      // removing existing files and directories from archieves directory
      // removeDir(path.join('./achieves'), false);
      const taskIdArray = ctx.workspacePath.split('/');
      const taskId = taskIdArray[taskIdArray.length - 1];
      const destination = `${mainDirectory}/${taskId}`;
      const calculatedTTL = timeToLiveRecords.hasOwnProperty(
        ctx.input?.zipAvailability,
      )
        ? timeToLiveRecords[ctx?.input.zipAvailability]
        : 1000 * 60 * 60;
      fs.mkdirSync(destination, { recursive: true });
      fs.copySync(`${ctx.workspacePath}`, destination);
      ctx.logger.info(`${ctx.workspacePath}`);
      setTimeout(
        function () {
          removeDir(path.join(`./achieves/${taskId}`), true);
        }.bind(this),
        calculatedTTL,
      );
      ctx.output('code', 'ddddddddd');
      ctx.logger.info(
        `To download your Files, open this link in new tab, ${process.env.DOMAIN_BACKEND}/zipAction?taskId=${taskId}`,
      );
      // alert('r');
    },
  });
};
