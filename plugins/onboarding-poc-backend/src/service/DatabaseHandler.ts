import { PluginDatabaseManager, resolvePackagePath } from '@backstage/backend-common';

const migrationsDir = resolvePackagePath(
    '@internal/plugin-onboarding-poc-backend',
    'migrations',
);

type Options = {
    database: PluginDatabaseManager;
};

export const databaseConnection = async (options: Options) => {

    const { database } = options;
    console.log("🚀 ~ file: DatabaseHandler.ts:15 ~ databaseConnection ~ database", database)
    const client = await database.getClient();
    console.log("🚀 ~ file: DatabaseHandler.ts:17 ~ databaseConnection ~ database.migrations?.skip", client.connectionSettings)

    if (!database.migrations?.skip) {

    const res=    await client.migrate.latest({
            directory: migrationsDir,
        });
    console.log("🚀 ~ file: DatabaseHandler.ts:24 ~ databaseConnection ~ res", res)
    }
    return client
}
